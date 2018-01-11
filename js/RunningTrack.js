/**
 * 画轨迹线方法
 * @param {Object} rounds
 */
function drawTrackLine(rounds){
	if(runTrackLine != undefined){
		map.removeLayer(runTrackLine);
		runTrackLine = undefined;
	}
	
	var xyArr = [];
	var j = 1;//某局某回合的球ID
	//将x，y坐标取出
	for(var i=0;i<rounds.length;i++){
		if(j = rounds[i].properties.ID){
			var x = rounds[i].properties.SmX;
			var y = rounds[i].properties.SmY;
			xyArr[i] = [y / 100 - 5.05,x / 100 + 8.7];
			j++;
		}
	}
	
	//绘制轨迹线
	runTrackLine = new L.polyline(xyArr,{
		color:'blue',
		opacity:0.5,
		weight:3
	}).addTo(map);
}

/**
 * 数据解析
 * @param {Object} num
 * @param {Object} rounds
 */
function dataProcess(num,rounds){
	var needRounds = [];//存放所需的数据
	var j = 0;
	
	for(var i=0;i<AllpointArray.length;i++){
		if(num == AllpointArray[i].properties.局数){
			if(rounds == AllpointArray[i].properties.回合){
				needRounds[j] = AllpointArray[i];
				j++;
			}
		}
	}
	
	drawTrackLine(needRounds);
}
