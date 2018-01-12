map = L.map('mapDiv', {
    crs: L.CRS.NonEarthCRS({
        bounds: L.bounds([-870.0, -505.0], [870.0, 505]),
        origin: L.point(0, 0),
    }),
    // closePopupOnClick:false,
    center: [-4.5, 13],
    zoomControl: false,
    maxZoom: 18,
    zoom: 8
});
var courtLayer =  L.supermap.tiledMapLayer(urlCourt).addTo(map);
var badmintonLayer = L.supermap.tiledMapLayer(urlbadminton,
    {
        transparent: true,
        opacity: 0.9}).addTo(map);


