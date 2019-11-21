

// Initialize Map

function initMap()
{
	console.info("MAP INITIIALZED");
	var trier = {lat: 49.748000, lng: 6.675067};
	
	var map = L.map(
		"map-container",
		{
			center: trier,
			zoom: 10
		}
	);
	
	// Add OSM Tile Layer (Raster)
	var osmLayer = L.tileLayer
	(
		"http://{s}.tile.osm.org/{z}/{x}/{y}.png",
		{
			attribution: "&copy; <a href='http://osm.org/copyright'>OpenStreetMap</a>"	
		}
	);
	
	map.addLayer(osmLayer);
	
	// Add Marker Feature
	var marker = L.marker
	(
		trier
	);
	
	map.addLayer(marker);
	
}

// Main Entry Point
initMap();