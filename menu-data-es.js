var xposure_menu_data = [
	{
		"name": "ofcFeed",
		"label": "Mostrar",
		"type": "select",
		"defaultVal": false,
		"values":[
			{"value": false, "label": "Mis listados"},
			{"value": true, "label": "Listados de mi oficina"}
		]
	},
	{
		"name": "agt_id",
		"label": "ID del Agente/Oficina",
		"type": "text",
		"defaultVal": ""
	},
	{
		"name": "status",
		"label": "Incluir Estatus",
		"type": "check",
		"defaultVal": "",
		"defaultCheckAll": true,
		"values":[
			{"value": 0, "label": "Activo"},
			{"value": 1, "label": "Vendido"},
			{"value": 2, "label": "Pendiente"}
		]
	},
	{
		"name": "projectType",
		"label": "Incluir Tipos de Listados",
		"type": "check",
		"defaultVal": "",
		"defaultCheckAll": true,
		"values":[
			{"value": 0, "label": "Residencial"},
			{"value": 1, "label": "Comercial"},
			{"value": 2, "label": "Alquier"},
			{"value": 3, "label": "Alquier vacional"}
		]
	},
	{
		"name": "propertyType",
		"label": "Incluir Tipos de Propiedades",
		"type": "check",
		"defaultVal": "",
		"defaultCheckAll": true,
		"values":[
			{"value": 0, "label": "Casa"},
			{"value": 1, "label": "Medio duplex"},
			{"value": 2, "label": "Townhouse"},
			{"value": 3, "label": "Apartamento"},
			{"value": 4, "label": "Link"},
			{"value": 5, "label": "Duplex Completo"},
			{"value": 6, "label": "Tres Unidades"},
			{"value": 7, "label": "Cuatro Unidades"},
			{"value": 8, "label": "Casa Móvil"},
			{"value": 9, "label": "Construcción modular"},
			{"value": 10, "label": "Lote/Terreno"},
			{"value": 11, "label": "Finca"},
			{"value": 12, "label": "Recreacional/Cabaña"},
			{"value": 13, "label": "Otro"},
			{"value": 14, "label": "Solo Edificio"},
			{"value": 15, "label": "Edificio y terreno"},
			{"value": 16, "label": "Negocio y Alquiler"},
			{"value": 17, "label": "Negocio y Propiedad"},
			{"value": 18, "label": "Solo Negocios, Sin Propiedad"},
			{"value": 19, "label": "Solo Terreno"},
			{"value": 20, "label": "Multifamiliar"},
			{"value": 21, "label": "Planta Industrial/Edificio Industrial"}
		]
	},
	{
		"name": "sortField",
		"label": "Ordenar por",
		"type": "select",
		"defaultVal": "price",
		"values":[
			{"value": "price", "label": "Precio"},
			{"value": "dateListed", "label": "Fecha de Lista"}
		]
	},
	{
		"name": "descending",
		"label": "Orden",
		"type": "select",
		"defaultVal": true,
		"values":[
			{"value": true, "label": "Descendente"},
			{"value": false, "label": "Ascendente"}
		]
	},
	{
		"name": "remarksLength",
		"label": "Longitud Máxima de Comentarios",
		"type": "text",
		"defaultVal": ""
	},
	{
		"name": "newWindow",
		"label": "Abrir la Página de Listados",
		"type": "select",
		"defaultVal": false,
		"values":[
			{"value": true, "label": "En una Ventana Nueva"},
			{"value": false, "label": "En la Ventana Actual"}
		]
	},
	{
		"name": "fullImage",
		"label": "Usar Imágenes de Tamaño Completo",
		"type": "select",
		"defaultVal": false,
		"values":[
			{"value": true, "label": "Si"},
			{"value": false, "label": "No"}
		]
	}
];