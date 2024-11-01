
const {registerBlockType} = wp.blocks; //Blocks API
const {createElement} = wp.element; //React.createElement
const {__} = wp.i18n; //translation functions
const {InspectorControls} = wp.blockEditor; //Block inspector wrapper
const {TextControl,SelectControl,CheckboxControl} = wp.components; //WordPress form inputs
const {serverSideRender} = wp; //WordPress server-side renderer

registerBlockType( 'xposure-plugins/xplistings', {

	title: __( 'Xposure Listings' ),
	category:  __( 'embed' ),
	
	//convert the xposure_menu_data into the form { item.name : {'default' : item.defaulVal }}
	attributes:  xposure_menu_data.reduce((obj, item) => {
     				obj[item.name] = {"default": item.defaultVal}
     				return obj
   				}, {}),
	
	//display the edit interface + preview
	edit(props){
	
		const attributes =  props.attributes;
		const setAttributes =  props.setAttributes;

		//Function to update agent id attribute
		function changeText(e){
		
			//console.log("changing text box: "+e.target.value);
			var attrName = e.target.getAttribute('data-fieldname');
			setAttributes({ [attrName] : e.target.value});
		}
		
		function changeSelect(e){
		
			//console.log("changing select value: "+e.target.value);
			var attrName = e.target.getAttribute('data-fieldname');
			setAttributes({ [attrName] : e.target.value});
		}
		
		function changeCheck(e){
		
			var values = Array.from(document.getElementById("xp-block-settings-container")
							.getElementsByTagName("input"))
							.filter((input) => (input.type == "checkbox" && e.target.name == input.name && input.checked))
  							.map((checkbox) => checkbox.value);
		
			//console.log("changing checkbox: "+e.target.name+" value: "+values.toString());
			var attrName = e.target.name;
			setAttributes({ [attrName] : values.toString()});
		}
		
		var menuElements= [];
		
		xposure_menu_data.forEach(function(item){
		
			var element;
			var label = createElement('div', {className: "heading"}, item.label);
			menuElements.push(label);
		
			if(item.type == 'text'){		
				
				element = createElement('input', {
						value: attributes[item.name],
						onChange: changeText,
						type: 'text',
						'data-fieldname': item.name
				});
				
			}else if(item.type == 'select'){
				
				element = createElement('select', {
						value: attributes[item.name],
						onChange: changeSelect,
						'data-fieldname': item.name
					},
					item.values.map(function(option){
						return createElement("option", { value: option.value, title: option.label }, option.label);
					})
				);
			}else if(item.type == 'check'){
				
				element = createElement('fieldset', {},
				
					item.values.map(function(option){
						
						var attrVals = attributes[item.name].split(",");
						attrVals = attrVals.filter(i => i != ''); //remove empty strings
						
						//checkbox is checked if attrVals array is empty, and defaultCheckAll is true
						//or if attrVals contains the current value
						//note: attributes are stored as a string but value is int
						var isChecked = attrVals.includes(option.value.toString()) ||
										(attrVals.length == 0 && item.defaultCheckAll);
										
						//console.log(attrVals.length + "  "+ item.defaultCheckAll);
					
						var check = createElement("label", {},
							[createElement("input", {
								
								type: 'checkbox',
								value: option.value,
								title: option.label,
								name: item.name,
								onChange: changeCheck,
								checked: isChecked
								
							}), option.label]
						);
						
						return check;
					})
				);
			}
			menuElements.push(element);
		});
		
		var menuContainer = createElement('div', {id: "xp-block-settings-container"}, menuElements);
		
		//Display block preview and UI
		return createElement('div', {}, [
			//Preview a block with a PHP render callback
			createElement( serverSideRender, {
				block: 'xposure-plugins/xplistings',
				attributes: attributes
			} ),
			//Block inspector
			createElement( InspectorControls, {}, menuContainer )
		] )
	},
	save(){
		return null;//save has to exist. This all we need
	}
});