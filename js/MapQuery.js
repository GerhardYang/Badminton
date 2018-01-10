/**
 * rest查询方法
 */
function query() {
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
        });
}

<<<<<<< HEAD
function queryEvery(obj) {
    //查询对应rest图层的数据集
    var param = new SuperMap.QueryBySQLParameters({
        queryParams: {
            name: "point@test#1",
            attributeFilter: "回合 = 2 AND 击球方 = 1 "
        }
    });
    //解析返回结果
    L.supermap
        .queryService(urlbadminton)
        .queryBySQL(param, function (serviceResult) {
            // var result = serviceResult.result;
            var features = serviceResult.result.recordsets[0].features.features;
            linePointArray = features;
                loadHeatMap(linePointArray);
        });
=======
function hotpoint(obj){
	query();
	//根据不同的参数显示不同的热力图
    if(obj == '1'){
    	loadHeatMap(pointArrayLIN);
    }else if(obj == '2'){
    	loadHeatMap(pointArrayLI);
    }else{
    	loadHeatMap(errorArray);
    }
>>>>>>> master
}
