var urlbadminton = "https://www.supermapol.com/iserver/services/map_data0112/rest/maps/AllPoint@data";
var urlCourt = "https://www.supermapol.com/iserver/services/map_data0112/rest/maps/Court@data";

var vectorLayer;
var map, resultLayer;//热力图层
var polyLineLayer;//击球路线图层
var geoLayer;//几何查询图层
var markerLayer = [];//marker

var AllpointArray = [];//全部点
var pointArrayLIN = [];//林
var pointArrayLI = [];//李
var errorArray = [];//失误

var linePointArray = [];

var runTrackLine;//轨迹线图