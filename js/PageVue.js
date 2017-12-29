var clock = new Vue({ 
    el: '.topBar', 
    data: { 
        title:"林丹VS李宗伟2012伦敦奥运会男单决赛",
        time: '', 
        date: '' 
    } 
}); 
var week = ['星期日', '星期一', '星期二', '星期三', '星期四', '星期五', '星期六']; 
var timerID = setInterval(updateTime, 1000); 
updateTime(); 
function updateTime() { 
    var cd = new Date(); 
    clock.time = zeroPadding(cd.getHours(), 2) + ':' + zeroPadding(cd.getMinutes(), 2) + ':' + zeroPadding(cd.getSeconds(), 2); 
    clock.date = zeroPadding(cd.getFullYear(), 4) + '-' + zeroPadding(cd.getMonth()+1, 2) + '-' + zeroPadding(cd.getDate(), 2) + ' ' + week[cd.getDay()]; 
}; 

//补零格式化时间与日期
function zeroPadding(num, digit) { 
    var zero = ''; 
    for(var i = 0; i < digit; i++) { 
        zero += '0'; 
    } 
    return (zero + num).slice(-digit); 
} 