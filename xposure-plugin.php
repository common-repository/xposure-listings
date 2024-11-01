<?php
/*
  Plugin Name: Xposure Listings
  Description: Allows you to embed Xposure listings into your site
  Author: RealtyServer Systems Inc.
  Version: 1.1.1
  Plugin URI: https://realtyserver.com/
  License: GPLv2 or later
  Text Domain: xposure-listings
  Domain Path: /languages
*/

function xposure_load_style() {
 	
	wp_register_style( 'xposure-listings-stylesheet',  plugin_dir_url( __FILE__ ) . 'xposure-styles.css' );
    wp_enqueue_style( 'xposure-listings-stylesheet' );
}

function xposure_load_editor_style() {
 	
	wp_register_style( 'xposure-editor-stylesheet',  plugin_dir_url( __FILE__ ) . 'xposure-editor-styles.css' );
    wp_enqueue_style( 'xposure-editor-stylesheet' );
}

if (!function_exists('register_block_type')) {

	add_action( 'wp_enqueue_scripts', 'xposure_load_style' );
}else{
	add_action( 'enqueue_block_assets', 'xposure_load_style' );
	add_action( 'enqueue_block_editor_assets', 'xposure_load_editor_style' );
}

add_shortcode( 'xplistings', 'xposure_listings_short' );

function xposure_listings_short( $atts ) {

	$jsonStr = file_get_contents(plugin_dir_url( __FILE__ ) . 'attributes.json');
	$jsonArr = json_decode($jsonStr, true);
	$attsArr = array_fill_keys($jsonArr, '');
	
	//shortcode attributes are converted to lowercase automatically before being passed to this function :(
	//since we need them to be camelcase for our API, we convert them here.
	//if shortcode attribute ontains underscore (except agt_id), remove the underscore and capitalize the first letter following the underscore
	
	$newAtts = [];
	
	foreach($atts as $attName => $attVal){
	    
	    if($attName != "agt_id" && strpos($attName, "_") !== false){
	        
	        $uderscorePos = strpos($attName, "_");
	        $newAttr = str_replace("_","",$attName);
	        $newAttr[$uderscorePos] = strtoupper($newAttr[$uderscorePos]);
	        
	        $newAtts[$newAttr] = $attVal;
	    }else{
	        $newAtts[$attName] = $attVal;
	    }
	}
	
	$a = shortcode_atts( $attsArr, $newAtts );

	return xposure_listings($a);
}

function xposure_listings_block_handler( $atts ) {
		
	//$str = print_r($attsArr, true);
	//return $str;
	
	return xposure_listings( $atts );
}

function xposure_listings( $atts ) {
    
    if($atts['agt_id'] == ''){
        
        return "<strong>Xposure Listings:</strong> ".__( 'Agent/Office ID has not been set. Click here to view block settings.', 'xposure-listings' );
    }

 	$url = 'https://realtyhd.com/iframe/listings/'.$atts['agt_id'].'/json';
 	
 	$locale = get_locale();
 	
 	$atts['locale'] = $locale;
	
	$url = $url . '?' . http_build_query($atts);
 
	$args = array(
	    'timeout' => 12
	);
	
	$response = wp_remote_get( $url, $args );
	
	if ( is_wp_error($response) ) {
	    
	    return "<strong>Error: </strong>".$response->get_error_message();
	    
	}else if(200 != wp_remote_retrieve_response_code( $response )){
	    
	    return "<strong>Error: </strong>".wp_remote_retrieve_response_code( $response );
	}
	
	$data = wp_remote_retrieve_body( $response );
	
	$obj = json_decode($data);
	
	$html_output = $obj->html;
	
	$output = '<div class="xp-listings-container">'.$html_output.'</div>';
 
	return $output;
}

add_action('init', function () {
    
    load_plugin_textdomain( 'xposure-listings', FALSE, basename( dirname( __FILE__ ) ) . '/languages/' );

	// Skip block registration if Gutenberg is not enabled/merged.
	if (!function_exists('register_block_type')) {
		return;
	}
	$dir = dirname(__FILE__);

	$index_js = 'index.js';
	
	wp_register_script(
		'xposure-listings-script',
		plugins_url($index_js, __FILE__),
		array(
			'wp-blocks',
			'wp-i18n',
			'wp-element',
			'wp-components',
			'wp-editor'
		),
		filemtime("$dir/$index_js")
	);
	
	$js_filename = "menu-data-en.js";
	
	if(str_starts_with(get_locale(), 'es')){
	
		$js_filename = "menu-data-es.js";
	}
	
	wp_register_script(
		'xposure-menu-data',
		plugins_url($js_filename, __FILE__),
		filemtime("$dir/$js_filename")
	);
	
	$jsonStr = file_get_contents(plugin_dir_url( __FILE__ ) . 'attributes.json');
	$jsonArr = json_decode($jsonStr, true);
	$attsArr = array_fill_keys($jsonArr, ['default' => '']);

	register_block_type('xposure-plugins/xplistings', array(
		'editor_script' => 'xposure-listings-script',
		'render_callback' => 'xposure_listings_block_handler',
		'script' => 'xposure-menu-data',		
		'attributes' => $attsArr
	));
});