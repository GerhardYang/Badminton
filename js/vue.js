var urlbadminton = "https://www.supermapol.com/iserver/services/map_data20/rest/maps/AllPoint@data";
var vectorLayer;
var map, resultLayer;//热力图层

var pointArrayLIN = [];//林
var pointArrayLI = [];//李
var errorArray = [];//失误

map = L.map('mapDiv', {
    crs: L.CRS.NonEarthCRS({
        bounds: L.bounds([-870.0, -505.0], [870.0, 505]),
        origin: L.point(0, 0),
    }),
    center: [-5, 15],
    zoomControl: false,
    maxZoom: 18,
    zoom: 8
});
L.supermap.tiledMapLayer(urlbadminton).addTo(map);

var rsaquoheight = (window.innerHeight / 2 - 82) + "px";
// console.log(rsaquoheight);

var rsaquoClicked = false;
$('#rsaquo').css("margin-top", rsaquoheight);
$('#rsaquo').click(function hideRightBar() {
    if (rsaquoClicked) {
        $('.rightBar').width(300);
        rsaquoClicked = false;
        $("#rsaquo").text(">");
        // $(".map_tool").css("display","block");
    } else {
        $('.rightBar').width(20);
        rsaquoClicked = true;
        $("#rsaquo").text("<");
        // $(".map_tool").css("display","none");
    }

});

/**
 * rest查询方法
 */
function query(obj) {
	//查询对应rest图层的数据集
    var param = new SuperMap.QueryBySQLParameters({
        queryParams: {
            name: "point@test#1",
            attributeFilter: "SmID > 0"
        }
    });
    //解析返回结果
    L.supermap
        .queryService(urlbadminton)
        .queryBySQL(param, function (serviceResult) {
            var result = serviceResult.result;
            var features = serviceResult.result.recordsets[0].features.features;
            //林丹
            var lin = 0;
            //李宗伟
            var li = 0;
            //失误
            var err = 0;
            
            for(var i = 0;i < features.length;i++){
            	if(features[i].properties.击球方 == "1"){
            		pointArrayLIN[lin] = features[i];//林丹击球
            		lin++;
            	}else if(features[i].properties.击球方 == "2"){
            		pointArrayLI[li] = features[i];//李宗伟击球
            		li++;
            	}else{
            		errorArray[err] = features[i];//失误球
            		err++;
            	}
            }
            //根据不同的参数显示不同的热力图
            if(obj == '1'){
            	loadHeatMap(pointArrayLIN);
            }else if(obj == '2'){
            	loadHeatMap(pointArrayLI);
            }else{
            	loadHeatMap(errorArray);
            }
        });
}

/**
 * 热力图
 */
function loadHeatMap(arr) {
	if(resultLayer != undefined){
		map.removeLayer(resultLayer);
		resultLayer = undefined;
	}
	
    var heatNumbers = arr.length, heatRadius = 20;
    var num = parseInt(heatNumbers);
    num = (num > 0) ? num : 0;
    var radius = parseInt(heatRadius);
    radius = (radius > 0) ? radius : 0;
    
    var heatPoints = [];
    for (var i = 0; i < num; i++) {
    	var smx = arr[i].properties.SmX;
    	var smy = arr[i].properties.SmY;
        //heatPoints[i] = [smx , smy , Math.random() * 30];
        heatPoints[i] = [ smy / 100 - 5.05, smx / 100 + 8.7];
    }
    
    resultLayer = L.heatLayer(heatPoints, {
        radius: radius,
        minOpacity: 0.5
    }).addTo(map);
}

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
//	    if (type === 'marker') {
//	        layer.bindPopup('A popup!');
//	    }
	    editableLayers.addLayer(layer);
});

/**
 * 清除所有
 */
function clearAll(){
	//移除热力图图层
	map.removeLayer(resultLayer);
}
