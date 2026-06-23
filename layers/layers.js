var wms_layers = [];


        var lyr_GoogleHybrid_0 = new ol.layer.Tile({
            'title': 'Google Hybrid',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: '<a href="https://www.google.at/permissions/geoguidelines/attr-guide.html">Map data ©2015 Google</a>',
                url: 'https://mt1.google.com/vt/lyrs=y&x={x}&y={y}&z={z}'
            })
        });
var format_ADM_BJN_1 = new ol.format.GeoJSON();
var features_ADM_BJN_1 = format_ADM_BJN_1.readFeatures(json_ADM_BJN_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ADM_BJN_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ADM_BJN_1.addFeatures(features_ADM_BJN_1);
var lyr_ADM_BJN_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ADM_BJN_1, 
                style: style_ADM_BJN_1,
                popuplayertitle: 'ADM_BJN',
                interactive: true,
    title: 'ADM_BJN<br />\
    <img src="styles/legend/ADM_BJN_1_0.png" /> Balen<br />\
    <img src="styles/legend/ADM_BJN_1_1.png" /> Baureno<br />\
    <img src="styles/legend/ADM_BJN_1_2.png" /> Bojonegoro<br />\
    <img src="styles/legend/ADM_BJN_1_3.png" /> Bubulan<br />\
    <img src="styles/legend/ADM_BJN_1_4.png" /> Dander<br />\
    <img src="styles/legend/ADM_BJN_1_5.png" /> Gayam<br />\
    <img src="styles/legend/ADM_BJN_1_6.png" /> Gondang<br />\
    <img src="styles/legend/ADM_BJN_1_7.png" /> Kalitidu<br />\
    <img src="styles/legend/ADM_BJN_1_8.png" /> Kanor<br />\
    <img src="styles/legend/ADM_BJN_1_9.png" /> Kapas<br />\
    <img src="styles/legend/ADM_BJN_1_10.png" /> Kasiman<br />\
    <img src="styles/legend/ADM_BJN_1_11.png" /> Kedewan<br />\
    <img src="styles/legend/ADM_BJN_1_12.png" /> Kedungadem<br />\
    <img src="styles/legend/ADM_BJN_1_13.png" /> Kepohbaru<br />\
    <img src="styles/legend/ADM_BJN_1_14.png" /> Malo<br />\
    <img src="styles/legend/ADM_BJN_1_15.png" /> Margomulyo<br />\
    <img src="styles/legend/ADM_BJN_1_16.png" /> Ngambon<br />\
    <img src="styles/legend/ADM_BJN_1_17.png" /> Ngasem<br />\
    <img src="styles/legend/ADM_BJN_1_18.png" /> Ngraho<br />\
    <img src="styles/legend/ADM_BJN_1_19.png" /> Padangan<br />\
    <img src="styles/legend/ADM_BJN_1_20.png" /> Purwosari<br />\
    <img src="styles/legend/ADM_BJN_1_21.png" /> Sekar<br />\
    <img src="styles/legend/ADM_BJN_1_22.png" /> Sugihwaras<br />\
    <img src="styles/legend/ADM_BJN_1_23.png" /> Sukosewu<br />\
    <img src="styles/legend/ADM_BJN_1_24.png" /> Sumberejo<br />\
    <img src="styles/legend/ADM_BJN_1_25.png" /> Tambakrejo<br />\
    <img src="styles/legend/ADM_BJN_1_26.png" /> Temayang<br />\
    <img src="styles/legend/ADM_BJN_1_27.png" /> Trucuk<br />\
    <img src="styles/legend/ADM_BJN_1_28.png" /> <br />' });
var format_ln_2 = new ol.format.GeoJSON();
var features_ln_2 = format_ln_2.readFeatures(json_ln_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ln_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ln_2.addFeatures(features_ln_2);
var lyr_ln_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ln_2, 
                style: style_ln_2,
                popuplayertitle: 'ln',
                interactive: true,
                title: '<img src="styles/legend/ln_2.png" /> ln'
            });
var format_Servicearealines_3 = new ol.format.GeoJSON();
var features_Servicearealines_3 = format_Servicearealines_3.readFeatures(json_Servicearealines_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Servicearealines_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Servicearealines_3.addFeatures(features_Servicearealines_3);
var lyr_Servicearealines_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Servicearealines_3, 
                style: style_Servicearealines_3,
                popuplayertitle: 'Service area (lines)',
                interactive: true,
                title: '<img src="styles/legend/Servicearealines_3.png" /> Service area (lines)'
            });
var format_1500_4 = new ol.format.GeoJSON();
var features_1500_4 = format_1500_4.readFeatures(json_1500_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_1500_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_1500_4.addFeatures(features_1500_4);
var lyr_1500_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_1500_4, 
                style: style_1500_4,
                popuplayertitle: '1500',
                interactive: true,
                title: '<img src="styles/legend/1500_4.png" /> 1500'
            });
var format_RumahSakitdiBojonegoro_5 = new ol.format.GeoJSON();
var features_RumahSakitdiBojonegoro_5 = format_RumahSakitdiBojonegoro_5.readFeatures(json_RumahSakitdiBojonegoro_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_RumahSakitdiBojonegoro_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_RumahSakitdiBojonegoro_5.addFeatures(features_RumahSakitdiBojonegoro_5);
var lyr_RumahSakitdiBojonegoro_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_RumahSakitdiBojonegoro_5, 
                style: style_RumahSakitdiBojonegoro_5,
                popuplayertitle: 'Rumah Sakit di Bojonegoro',
                interactive: true,
    title: 'Rumah Sakit di Bojonegoro<br />\
    <img src="styles/legend/RumahSakitdiBojonegoro_5_0.png" /> RS Aisyiyah Bojonegoro<br />\
    <img src="styles/legend/RumahSakitdiBojonegoro_5_1.png" /> RSUD Dr. Sosodoro<br />\
    <img src="styles/legend/RumahSakitdiBojonegoro_5_2.png" /> Rumah Sakit Fatma<br />\
    <img src="styles/legend/RumahSakitdiBojonegoro_5_3.png" /> Rumah Sakit Ibnu Sina Bojonegoro<br />\
    <img src="styles/legend/RumahSakitdiBojonegoro_5_4.png" /> <br />' });

lyr_GoogleHybrid_0.setVisible(true);lyr_ADM_BJN_1.setVisible(true);lyr_ln_2.setVisible(true);lyr_Servicearealines_3.setVisible(true);lyr_1500_4.setVisible(true);lyr_RumahSakitdiBojonegoro_5.setVisible(true);
var layersList = [lyr_GoogleHybrid_0,lyr_ADM_BJN_1,lyr_ln_2,lyr_Servicearealines_3,lyr_1500_4,lyr_RumahSakitdiBojonegoro_5];
lyr_ADM_BJN_1.set('fieldAliases', {'NAMOBJ': 'NAMOBJ', 'FCODE': 'FCODE', 'REMARK': 'REMARK', 'METADATA': 'METADATA', 'SRS_ID': 'SRS_ID', 'KDBBPS': 'KDBBPS', 'KDCBPS': 'KDCBPS', 'KDCPUM': 'KDCPUM', 'KDEBPS': 'KDEBPS', 'KDEPUM': 'KDEPUM', 'KDPBPS': 'KDPBPS', 'KDPKAB': 'KDPKAB', 'KDPPUM': 'KDPPUM', 'LUASWH': 'LUASWH', 'TIPADM': 'TIPADM', 'WADMKC': 'WADMKC', 'WADMKD': 'WADMKD', 'WADMKK': 'WADMKK', 'WADMPR': 'WADMPR', 'WIADKC': 'WIADKC', 'WIADKK': 'WIADKK', 'WIADPR': 'WIADPR', 'WIADKD': 'WIADKD', 'UUPP': 'UUPP', 'luas': 'luas', 'SHAPE_Leng': 'SHAPE_Leng', 'SHAPE_Area': 'SHAPE_Area', });
lyr_ln_2.set('fieldAliases', {'NAMOBJ': 'NAMOBJ', 'FCODE': 'FCODE', 'REMARK': 'REMARK', 'METADATA': 'METADATA', 'SRS_ID': 'SRS_ID', 'ARHRJL': 'ARHRJL', 'AUTRJL': 'AUTRJL', 'FGSRJL': 'FGSRJL', 'JARRJL': 'JARRJL', 'JPARJL': 'JPARJL', 'KLLRJL': 'KLLRJL', 'KONRJL': 'KONRJL', 'KPMSTR': 'KPMSTR', 'LKONOF': 'LKONOF', 'LKSBSP': 'LKSBSP', 'LKSRTA': 'LKSRTA', 'LLHRRT': 'LLHRRT', 'LOCRJL': 'LOCRJL', 'LBRBHJ': 'LBRBHJ', 'LBRJLN': 'LBRJLN', 'MATRJL': 'MATRJL', 'MEDRJL': 'MEDRJL', 'SPCRJL': 'SPCRJL', 'STARJL': 'STARJL', 'TOLRJL': 'TOLRJL', 'UTKRJL': 'UTKRJL', 'VLCPRT': 'VLCPRT', 'WLYRJL': 'WLYRJL', 'TGL_SK': 'TGL_SK', 'JLNLYG': 'JLNLYG', 'KLSRJL': 'KLSRJL', 'SHAPE_Leng': 'SHAPE_Leng', });
lyr_Servicearealines_3.set('fieldAliases', {'NAMOBJ': 'NAMOBJ', 'FCODE': 'FCODE', 'REMARK': 'REMARK', 'METADATA': 'METADATA', 'SRS_ID': 'SRS_ID', 'JPLYRS': 'JPLYRS', 'RSALAMAT': 'RSALAMAT', 'TIPRST': 'TIPRST', 'type': 'type', 'start': 'start', });
lyr_1500_4.set('fieldAliases', {'NAMOBJ': 'NAMOBJ', 'FCODE': 'FCODE', 'REMARK': 'REMARK', 'METADATA': 'METADATA', 'SRS_ID': 'SRS_ID', 'JPLYRS': 'JPLYRS', 'RSALAMAT': 'RSALAMAT', 'TIPRST': 'TIPRST', 'type': 'type', 'start': 'start', });
lyr_RumahSakitdiBojonegoro_5.set('fieldAliases', {'NAMOBJ': 'NAMOBJ', 'FCODE': 'FCODE', 'REMARK': 'REMARK', 'METADATA': 'METADATA', 'SRS_ID': 'SRS_ID', 'JPLYRS': 'JPLYRS', 'RSALAMAT': 'RSALAMAT', 'TIPRST': 'TIPRST', 'Foto': 'Foto', });
lyr_ADM_BJN_1.set('fieldImages', {'NAMOBJ': 'TextEdit', 'FCODE': 'TextEdit', 'REMARK': 'TextEdit', 'METADATA': 'TextEdit', 'SRS_ID': 'TextEdit', 'KDBBPS': 'TextEdit', 'KDCBPS': 'TextEdit', 'KDCPUM': 'TextEdit', 'KDEBPS': 'TextEdit', 'KDEPUM': 'TextEdit', 'KDPBPS': 'TextEdit', 'KDPKAB': 'TextEdit', 'KDPPUM': 'TextEdit', 'LUASWH': 'TextEdit', 'TIPADM': 'Range', 'WADMKC': 'TextEdit', 'WADMKD': 'TextEdit', 'WADMKK': 'TextEdit', 'WADMPR': 'TextEdit', 'WIADKC': 'TextEdit', 'WIADKK': 'TextEdit', 'WIADPR': 'TextEdit', 'WIADKD': 'TextEdit', 'UUPP': 'TextEdit', 'luas': 'TextEdit', 'SHAPE_Leng': 'TextEdit', 'SHAPE_Area': 'TextEdit', });
lyr_ln_2.set('fieldImages', {'NAMOBJ': '', 'FCODE': '', 'REMARK': '', 'METADATA': '', 'SRS_ID': '', 'ARHRJL': '', 'AUTRJL': '', 'FGSRJL': '', 'JARRJL': '', 'JPARJL': '', 'KLLRJL': '', 'KONRJL': '', 'KPMSTR': '', 'LKONOF': '', 'LKSBSP': '', 'LKSRTA': '', 'LLHRRT': '', 'LOCRJL': '', 'LBRBHJ': '', 'LBRJLN': '', 'MATRJL': '', 'MEDRJL': '', 'SPCRJL': '', 'STARJL': '', 'TOLRJL': '', 'UTKRJL': '', 'VLCPRT': '', 'WLYRJL': '', 'TGL_SK': '', 'JLNLYG': '', 'KLSRJL': '', 'SHAPE_Leng': '', });
lyr_Servicearealines_3.set('fieldImages', {'NAMOBJ': 'TextEdit', 'FCODE': 'TextEdit', 'REMARK': 'TextEdit', 'METADATA': 'TextEdit', 'SRS_ID': 'TextEdit', 'JPLYRS': 'TextEdit', 'RSALAMAT': 'TextEdit', 'TIPRST': 'TextEdit', 'type': 'TextEdit', 'start': 'TextEdit', });
lyr_1500_4.set('fieldImages', {'NAMOBJ': '', 'FCODE': '', 'REMARK': '', 'METADATA': '', 'SRS_ID': '', 'JPLYRS': '', 'RSALAMAT': '', 'TIPRST': '', 'type': '', 'start': '', });
lyr_RumahSakitdiBojonegoro_5.set('fieldImages', {'NAMOBJ': 'TextEdit', 'FCODE': 'TextEdit', 'REMARK': 'TextEdit', 'METADATA': 'TextEdit', 'SRS_ID': 'TextEdit', 'JPLYRS': 'TextEdit', 'RSALAMAT': 'TextEdit', 'TIPRST': 'TextEdit', 'Foto': 'ExternalResource', });
lyr_ADM_BJN_1.set('fieldLabels', {'NAMOBJ': 'no label', 'FCODE': 'no label', 'REMARK': 'no label', 'METADATA': 'no label', 'SRS_ID': 'no label', 'KDBBPS': 'no label', 'KDCBPS': 'no label', 'KDCPUM': 'no label', 'KDEBPS': 'no label', 'KDEPUM': 'no label', 'KDPBPS': 'no label', 'KDPKAB': 'no label', 'KDPPUM': 'no label', 'LUASWH': 'no label', 'TIPADM': 'no label', 'WADMKC': 'no label', 'WADMKD': 'no label', 'WADMKK': 'no label', 'WADMPR': 'no label', 'WIADKC': 'no label', 'WIADKK': 'no label', 'WIADPR': 'no label', 'WIADKD': 'no label', 'UUPP': 'no label', 'luas': 'no label', 'SHAPE_Leng': 'no label', 'SHAPE_Area': 'no label', });
lyr_ln_2.set('fieldLabels', {'NAMOBJ': 'inline label - visible with data', 'FCODE': 'no label', 'REMARK': 'no label', 'METADATA': 'no label', 'SRS_ID': 'no label', 'ARHRJL': 'no label', 'AUTRJL': 'no label', 'FGSRJL': 'no label', 'JARRJL': 'no label', 'JPARJL': 'no label', 'KLLRJL': 'no label', 'KONRJL': 'no label', 'KPMSTR': 'no label', 'LKONOF': 'no label', 'LKSBSP': 'no label', 'LKSRTA': 'no label', 'LLHRRT': 'no label', 'LOCRJL': 'no label', 'LBRBHJ': 'no label', 'LBRJLN': 'no label', 'MATRJL': 'no label', 'MEDRJL': 'no label', 'SPCRJL': 'no label', 'STARJL': 'no label', 'TOLRJL': 'no label', 'UTKRJL': 'no label', 'VLCPRT': 'no label', 'WLYRJL': 'no label', 'TGL_SK': 'no label', 'JLNLYG': 'no label', 'KLSRJL': 'no label', 'SHAPE_Leng': 'no label', });
lyr_Servicearealines_3.set('fieldLabels', {'NAMOBJ': 'no label', 'FCODE': 'no label', 'REMARK': 'no label', 'METADATA': 'no label', 'SRS_ID': 'no label', 'JPLYRS': 'no label', 'RSALAMAT': 'no label', 'TIPRST': 'no label', 'type': 'no label', 'start': 'no label', });
lyr_1500_4.set('fieldLabels', {'NAMOBJ': 'inline label - visible with data', 'FCODE': 'no label', 'REMARK': 'no label', 'METADATA': 'no label', 'SRS_ID': 'no label', 'JPLYRS': 'no label', 'RSALAMAT': 'no label', 'TIPRST': 'no label', 'type': 'no label', 'start': 'no label', });
lyr_RumahSakitdiBojonegoro_5.set('fieldLabels', {'NAMOBJ': 'inline label - visible with data', 'FCODE': 'no label', 'REMARK': 'no label', 'METADATA': 'no label', 'SRS_ID': 'no label', 'JPLYRS': 'no label', 'RSALAMAT': 'no label', 'TIPRST': 'no label', });
lyr_RumahSakitdiBojonegoro_5.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});