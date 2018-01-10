/**
 * 选择图表
 */
function clickchart(obj){
	query();
	//根据不同的参数显示不同的图表
	switch(obj){
		case 1:
			openLayer();
			Chartinit(pointArrayLIN,"林丹");
			break;
		case 2:
			openLayer();
			Chartinit(pointArrayLI,"李宗伟");
			break;
	}
}

/**
 * 初始化统计图
 * @param {Object} ArrObj
 */
function Chartinit(ArrObj,name){
	var batbox = document.getElementById('bat_box');//击球位置类
	var batdir = document.getElementById('bat_dir');//击球方向类
	//基于准备好的dom，初始化echarts实例
	var chart_batbox = echarts.init(batbox);
	var chart_batdir = echarts.init(batdir);
	
	//解析数据
	var data_box = [];
	var a=b=c=d=0;
	a=b=c=d;
	var data_dir = [];
	var e,f,g,h,j,k,l,m,n,o,p,q,r,s=0;
	e=f=g=h=j=k=l=m=n=o=p=q=r=s;
	
	//击球位置类数据统计
	for(var i = 0;i<ArrObj.length;i++){
		var batboxt = ArrObj[i].properties.击球位置类;
		if(batboxt == '0'){
			a++;
		}else if(batboxt == '1'){
			b++;
		}else if(batboxt == '2'){
			c++;
		}else{
			d++;
		}
	}
	data_box = [a,b,c,d];
	
	//击球方向类数据统计
	for(var t = 0;t<ArrObj.length;t++){
		var batdirt = ArrObj[t].properties.击球方向类;
		if(batdirt == '0'){
			e++;
		}else if(batdirt == '1'){
			f++;
		}else if(batdirt == '2'){
			g++;
		}else if(batdirt == '3'){
			h++;
		}else if(batdirt == '4'){
			j++;
		}else if(batdirt == '5'){
			k++;
		}else if(batdirt == '6'){
			l++;
		}else if(batdirt == '7'){
			m++;
		}else if(batdirt == '8'){
			n++;
		}else if(batdirt == '9'){
			o++;
		}else if(batdirt == '10'){
			p++;
		}else if(batdirt == '11'){
			q++;
		}else if(batdirt == '12'){
			r++;
		}else{
			s++;
		}
	}
	data_dir = [e,f,g,h,j,k,l,m,n,o,p,q,r,s];
	
	//指定图表的配置项和数据
	var option_batbox = {
		title:{
			text:name + ':击球技术类型-位置'
		},
		tooltip:{},
		legend:{
			data:['累计量']
		},
		xAxis:{
			data:['前场','后场','中场','左、右场']
		},
		yAxis:{},
		series:[{
			name:'累积量',
			type:'bar',
			data:data_box
		}]
	};
	
	var option_batdir = {
		title:{
			text:name + ':击球技术类型-方向'
		},
		tooltip:{},
		legend:{
			data:['累计量']
		},
		xAxis:{
			data:['未定义','高远球','平高球','平射球','平抽挡球','抽球','扣杀球','吊球','挑高球','放网前球','搓球','勾球','扑球','推球']
		},
		yAxis:{},
		series:[{
			name:'累积量',
			type:'bar',
			data:data_dir
		}]
	};
	
	//使用刚制定的配置项和数据显示图标
	chart_batbox.setOption(option_batbox);
	chart_batdir.setOption(option_batdir);
}

/**
 * 弹窗显示
 */
function openLayer(){
	//初始化统计图dom
	var conhtml_batbox = '<div id="bat_box_par"><div class="Allcharts" id="bat_box"></div></div>';
	var conhtml_batdir = '<div id="bat_dir_par"><div class="Allcharts" id="bat_dir"></div></div>'; 
	
	layer.tab({
		area: ['650px', '500px'],
		tab: [{
    		title: '击球位置类统计', 
    		content: conhtml_batbox
		}, {
   			title: '击球方向类统计', 
    		content: conhtml_batdir
		}]
	});
}
