var xposure_menu_data = [
	{
		"name": "ofcFeed",
		"label": "Show",
		"type": "select",
		"defaultVal": false,
		"values":[
			{"value": false, "label": "My Listings"},
			{"value": true, "label": "Office Listings"}
		]
	},
	{
		"name": "agt_id",
		"label": "Agent/Office ID",
		"type": "text",
		"defaultVal": ""
	},
	{
		"name": "status",
		"label": "Include Statuses",
		"type": "check",
		"defaultVal": "",
		"defaultCheckAll": true,
		"values":[
			{"value": 0, "label": "Active"},
			{"value": 1, "label": "Sold"},
			{"value": 2, "label": "Pending"}
		]
	},
	{
		"name": "projectType",
		"label": "Include Listing Types",
		"type": "check",
		"defaultVal": "",
		"defaultCheckAll": true,
		"values":[
			{"value": 0, "label": "Residential"},
			{"value": 1, "label": "Commercial"},
			{"value": 2, "label": "Long Term Rental"},
			{"value": 3, "label": "Vacation Rental"}
		]
	},
	{
		"name": "propertyType",
		"label": "Include Property Types",
		"type": "check",
		"defaultVal": "",
		"defaultCheckAll": true,
		"values":[
			{"value": 0, "label": "Single Family/Detached"},
			{"value": 1, "label": "Half Duplex"},
			{"value": 2, "label": "Townhouse"},
			{"value": 3, "label": "Apartment/Condo"},
			{"value": 4, "label": "Link"},
			{"value": 5, "label": "Full Duplex"},
			{"value": 6, "label": "Triplex"},
			{"value": 7, "label": "Fourplex"},
			{"value": 8, "label": "Mobile"},
			{"value": 9, "label": "Modular"},
			{"value": 10, "label": "Lots/Acreage"},
			{"value": 11, "label": "Farm"},
			{"value": 12, "label": "Recreational/Cottage"},
			{"value": 13, "label": "Other"},
			{"value": 14, "label": "Building Only"},
			{"value": 15, "label": "Building and Land"},
			{"value": 16, "label": "Business and Leasehold"},
			{"value": 17, "label": "Business and Property"},
			{"value": 18, "label": "Business Only"},
			{"value": 19, "label": "Land Only"},
			{"value": 20, "label": "Multi-Family"},
			{"value": 21, "label": "Industrial"}
		]
	},
	{
		"name": "sortField",
		"label": "Sort By",
		"type": "select",
		"defaultVal": "price",
		"values":[
			{"value": "price", "label": "Price"},
			{"value": "dateListed", "label": "Date Listed"}
		]
	},
	{
		"name": "descending",
		"label": "Sort Direction",
		"type": "select",
		"defaultVal": true,
		"values":[
			{"value": true, "label": "Descending"},
			{"value": false, "label": "Ascending"}
		]
	},
	{
		"name": "remarksLength",
		"label": "Remarks Length Max.",
		"type": "text",
		"defaultVal": ""
	},
	{
		"name": "newWindow",
		"label": "Open Listing Page",
		"type": "select",
		"defaultVal": false,
		"values":[
			{"value": true, "label": "In New Window"},
			{"value": false, "label": "In Current Window"}
		]
	},
	{
		"name": "fullImage",
		"label": "Use Full Sized Images",
		"type": "select",
		"defaultVal": false,
		"values":[
			{"value": true, "label": "Yes"},
			{"value": false, "label": "No"}
		]
	}
];