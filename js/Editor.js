/**
 * 绘制点线面控件初始化
 */
var editableLayers = new L.FeatureGroup();
map.addLayer(editableLayers);

var options = {
    position: 'bottomleft',
    draw: {
        polyline: {},
        polygon: {},
        circle: {},
        rectangle: {},
        marker: {},
        remove: {}
    },
    edit: {
        featureGroup: editableLayers,
        remove: true
    }
};

var drawControl = new L.Control.Draw(options);
map.addControl(drawControl);

//创建绘制要素及其点击事件
map.on(L.Draw.Event.CREATED, 
	function (e) {
	    var type = e.layerType,
	        layer = e.layer;
	    var bounds = layer._bounds;
	    var style = layer.options;
//	    if (type === 'marker') {
//	        layer.bindPopup('A popup!');
//	    }
	    editableLayers.addLayer(layer);
});
