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
       //var contentHtml = i+1+ "";
       var marker =  L.marker(xyArr[i]);
       markerLayer.push(marker);
    }
    myGroup = L.layerGroup(markerLayer);
	
	map.addLayer(myGroup); 
    //myGroup.addTo(map).bindPopup("13414");

    //绘制轨迹线
    runTrackLine = new L.polyline(xyArr, {
        color: '#ffff00',
        opacity: 0.7,
        weight: 3
    }).addTo(map);
    
    //加载动态效果图层
 	loadData();
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
 * 动态显示轨迹
 */
function loadData(){
	
}
