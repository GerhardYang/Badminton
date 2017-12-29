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
