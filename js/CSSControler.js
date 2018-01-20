var rsaquoheight = (window.innerHeight / 2 - 82) + "px";
// console.log(rsaquoheight);

var rsaquoClicked = false;
$('#rsaquo').css("margin-top", rsaquoheight);
$('#rsaquo').click(function hideRightBar() {
    if (rsaquoClicked) {
        $('.rightBar').width(300);
        rsaquoClicked = false;
        $("#rsaquo").text(">");
        $(".map_tool").css("display", "block");
    } else {
        $('.rightBar').width(20);
        rsaquoClicked = true;
        $("#rsaquo").text("<");
        $(".map_tool").css("display", "none");
    }
});

/**
 * 切换菜单
 */
function switchMenu(obj) {
    switch (obj) {
        case 1:
            $("#maptool").hide();
            $("#datacharts").show();
            break;
        case 2:
            $("#maptool").hide();
            $("#hotpoints").show();
            break;
        case 3:
            $("#maptool").hide();
            $("#runtrack").show();
            break;
        case 4:
            $("#maptool").hide();
            $("#pointarea").show();
            break;
    }
}

/**
 * 返回主菜单
 */
function backmain(obj) {

    switch (obj) {
        case 1:
            $("#datacharts").hide();
            $("#maptool").show();
            break;
        case 2:
            $("#hotpoints").hide();
            $("#maptool").show();
            break;
        case 3:
            $("#runtrack").hide();
            $("#maptool").show();

            //进入轨迹分析后隐藏落点，返回后显示
            var badmintonLayer = L.supermap.tiledMapLayer(urlbadminton, {
                transparent: true,
                opacity: 0.9
            }).addTo(map);

            //返回清除路径
            clearAll();
            break;
        case 4:
            $("#runtrack_son_1").hide();
            $("#runtrack").show();
            break;
        case 5:
            $("#runtrack_son_2").hide();
            $("#runtrack").show();
            break;
        case 6:
            $("#runtrack_son_3").hide();
            $("#runtrack").show();
            break;
    }
}

/**
 * 切换轨迹图菜单
 * @param {Object} obj
 */
function switchRunMenu(obj) {
    /**
     * 循环添加回合HTML内容大幅缩减代码量
     */
    function addroundsHTML(obj, rounds, id) {
        for (var i = rounds; i > 0; i--) {
            var insertHtml = "<button class='layui-btn layui-btn-lg btn-maptool' onclick='dataProcess(" + obj + ", " + i + ")'><i class ='layui-icon' style='font-size:30px;color:#46A546;'>&#xe62c;</i>No." + obj + "第" + i + "回合</button> ";
            $(id).find('button').eq(1).after(insertHtml);
            // console.log(insertHtml);
        }
    }

    switch (obj) {
        case 1:
            $("#runtrack").hide();
            $("#runtrack_son_1").show();
            addroundsHTML(obj, 36, "#runtrack_son_1");
            break;
        case 2:
            $("#runtrack").hide();
            $("#runtrack_son_2").show();
            addroundsHTML(obj, 31, "#runtrack_son_2");
            break;
        case 3:
            $("#runtrack").hide();
            $("#runtrack_son_3").show();
            addroundsHTML(obj, 40, "#runtrack_son_3");
            break;
    }
}