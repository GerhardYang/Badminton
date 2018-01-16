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
 * 清除所有
 */
function clearAll(){
	//移除热力图图层
	if(resultLayer){
		map.removeLayer(resultLayer);
	}
	//移除轨迹线图层
	if(runTrackLine){
		map.removeLayer(runTrackLine);	
	}
	//移除marker点
    clearMarkers();
}

/**
 * 清除marker点
 */
function clearMarkers(){
	if(myGroup){
		myGroup.clearLayers();
		markerLayer = [];
	}
}
