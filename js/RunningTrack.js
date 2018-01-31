/**
 * 画轨迹线方法
 * @param {Object} rounds
 */
function drawTrackLine(rounds) {

    map.removeLayer(badmintonLayer);
	//清除上一次的marker图层
	if(myGroup != undefined){
		myGroup.clearLayers();
		markerLayer = [];
	}
	//清除上一次的轨迹图层
    if (runTrackLine != undefined) {
        map.removeLayer(runTrackLine);
        runTrackLine = undefined;
    }
    
    var xyArr = [];
    var j = 1; //某局某回合的球ID
    //将x，y坐标取出
    for (var i = 0; i < rounds.length; i++) {
        if (j = rounds[i].properties.ID) {
            var x = rounds[i].properties.SmX;
            var y = rounds[i].properties.SmY;
            xyArr[i] = [y / 100 - 5.05, x / 100 + 8.7];
            j++;
        }
    }

    //绘制点
    for (var i = 0; i < xyArr.length; i++) {
       // var contentHtml = i+1+ "";
       var marker =  L.marker(xyArr[i]);
       markerLayer.push(marker);
    }
    myGroup = L.layerGroup(markerLayer);

	map.addLayer(myGroup); 
    myGroup.addTo(map).bindPopup("13414");

    //绘制轨迹线
    runTrackLine = new L.polyline(xyArr, {
        color: '#ffff00',
        opacity: 0.7,
        weight: 3
    }).addTo(map);
    
    //加载动态轨迹
    loadData(rounds);
}

/**
 * 数据解析
 * @param {Object} num
 * @param {Object} rounds
 */
function dataProcess(num, rounds) {
    var needRounds = []; //存放所需的数据
    var j = 0;

    for (var i = 0; i < AllpointArray.length; i++) {
        if (num == AllpointArray[i].properties.局数) {
            if (rounds == AllpointArray[i].properties.回合) {
                needRounds[j] = AllpointArray[i];
                j++;
            }
        }
    }

    drawTrackLine(needRounds);
}


/**
 * 动态图层加载
 * @param {Object} newData
 */
function loadData(newData){
	var timeData = [];
	var j = 0;
	
	//leaflet只识别经纬度坐标，需要将数据中的米坐标转成经纬度坐标
    var projection = L.CRS.EPSG3857.projection;
	
	for(var i = 0;i<newData.length;i++){
		var newX = newData[i].geometry.coordinates[0] * 1100;
		var newY = newData[i].geometry.coordinates[1] * 1100;
		
		var latLng = projection.unproject(L.point([newX, newY]));
		
		timeData.push({
			geometry:{
				type:'Point',
				coordinates: [latLng.lng +8.67, latLng.lat-5.05]
			},
			count:1,
			time:j
		});
		j += 2;
	}

	var dataSet2 = new mapv.DataSet(timeData);

	var options2 = {
        fillStyle: 'rgba(255, 255, 255, 0.2)',
        globalCompositeOperation: "lighter",
        size: 3,
        animation: {
            stepsRange: {
                start: 0,
                end: 50
            },
            trails: 5,
            duration: 15,
        },
        draw: 'simple'
    };
   
    //动态轨迹图层
    mapVlayers = L.supermap.mapVLayer(dataSet2, options2);
    mapVlayers.addTo(map);  
}
