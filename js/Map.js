map = L.map('mapDiv', {
    crs: L.CRS.NonEarthCRS({
        bounds: L.bounds([-870.0, -505.0], [870.0, 505]),
        origin: L.point(0, 0),
    }),
    center: [-5, 15],
    zoomControl: false,
    maxZoom: 18,
    zoom: 8
});
L.supermap.tiledMapLayer(urlbadminton).addTo(map);


