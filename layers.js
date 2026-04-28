var wms_layers = [];

var format_Cantones_de_Costa_Rica_0 = new ol.format.GeoJSON();
var features_Cantones_de_Costa_Rica_0 = format_Cantones_de_Costa_Rica_0.readFeatures(json_Cantones_de_Costa_Rica_0, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Cantones_de_Costa_Rica_0 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Cantones_de_Costa_Rica_0.addFeatures(features_Cantones_de_Costa_Rica_0);
var lyr_Cantones_de_Costa_Rica_0 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Cantones_de_Costa_Rica_0, 
                style: style_Cantones_de_Costa_Rica_0,
                popuplayertitle: 'Cantones_de_Costa_Rica',
                interactive: true,
                title: '<img src="styles/legend/Cantones_de_Costa_Rica_0.png" /> Cantones_de_Costa_Rica'
            });
var format_Basededatosmuseos_1 = new ol.format.GeoJSON();
var features_Basededatosmuseos_1 = format_Basededatosmuseos_1.readFeatures(json_Basededatosmuseos_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Basededatosmuseos_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Basededatosmuseos_1.addFeatures(features_Basededatosmuseos_1);
cluster_Basededatosmuseos_1 = new ol.source.Cluster({
  distance: 30,
  source: jsonSource_Basededatosmuseos_1
});
var lyr_Basededatosmuseos_1 = new ol.layer.Vector({
                declutter: false,
                source:cluster_Basededatosmuseos_1, 
                style: style_Basededatosmuseos_1,
                popuplayertitle: 'Base de datos museos',
                interactive: true,
    title: 'Base de datos museos<br />\
    <img src="styles/legend/Basededatosmuseos_1_0.png" /> Galería<br />\
    <img src="styles/legend/Basededatosmuseos_1_1.png" /> Museo<br />\
    <img src="styles/legend/Basededatosmuseos_1_2.png" /> <br />' });

lyr_Cantones_de_Costa_Rica_0.setVisible(true);lyr_Basededatosmuseos_1.setVisible(true);
var layersList = [lyr_Cantones_de_Costa_Rica_0,lyr_Basededatosmuseos_1];
lyr_Cantones_de_Costa_Rica_0.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'NOM_PROV': 'NOM_PROV', 'NOM_CANT_1': 'NOM_CANT_1', });
lyr_Basededatosmuseos_1.set('fieldAliases', {'Nombre de la Institución': 'Nombre de la Institución', 'Tipo': 'Tipo', 'Ubicación': 'Ubicación', 'Provincia': 'Provincia', 'Latitud': 'Latitud', 'Longitud': 'Longitud', 'Especialidad': 'Especialidad', });
lyr_Cantones_de_Costa_Rica_0.set('fieldImages', {'OBJECTID': '', 'NOM_PROV': '', 'NOM_CANT_1': '', });
lyr_Basededatosmuseos_1.set('fieldImages', {'Nombre de la Institución': 'TextEdit', 'Tipo': 'TextEdit', 'Ubicación': 'TextEdit', 'Provincia': 'TextEdit', 'Latitud': 'TextEdit', 'Longitud': 'TextEdit', 'Especialidad': 'TextEdit', });
lyr_Cantones_de_Costa_Rica_0.set('fieldLabels', {'OBJECTID': 'no label', 'NOM_PROV': 'no label', 'NOM_CANT_1': 'no label', });
lyr_Basededatosmuseos_1.set('fieldLabels', {'Nombre de la Institución': 'header label - always visible', 'Tipo': 'inline label - visible with data', 'Ubicación': 'header label - always visible', 'Provincia': 'header label - always visible', 'Latitud': 'inline label - always visible', 'Longitud': 'inline label - always visible', 'Especialidad': 'inline label - always visible', });
lyr_Basededatosmuseos_1.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});