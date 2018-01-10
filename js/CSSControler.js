var rsaquoheight = (window.innerHeight / 2 - 82) + "px";
// console.log(rsaquoheight);

var rsaquoClicked = false;
$('#rsaquo').css("margin-top", rsaquoheight);
$('#rsaquo').click(function hideRightBar() {
    if (rsaquoClicked) {
        $('.rightBar').width(300);
        rsaquoClicked = false;
        $("#rsaquo").text(">");
        //$(".map_tool").css("display","block");
    } else {
        $('.rightBar').width(20);
        rsaquoClicked = true;
        $("#rsaquo").text("<");
        //$(".map_tool").css("display","none");
    }
});

/**
 * 切换菜单
 */
function switchMenu(obj){
	switch(obj){
		case 1:
			$("#maptool").hide();
			$("#datacharts").show();
			break;
		case 2:
			$("#maptool").hide();
			$("#hotpoints").show();
	}
}

/**
 * 返回主菜单
 */
function backmain(obj){
	switch(obj){
		case 1:
			$("#datacharts").hide();
			$("#maptool").show();
			break;
		case 2:
			$("#hotpoints").hide();
			$("#maptool").show();
			break;
	}
}
