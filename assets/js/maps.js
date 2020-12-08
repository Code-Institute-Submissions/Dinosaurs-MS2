
//Call map with central location in the UK for Lat and Lng, zoom set to 7.2 to show most of the markers
function initMap() {
    var map = new google.maps.Map(document.getElementById("map"), {
        zoom: 7.2,
        center: {
            lat: 52.746590,
            lng: -1.473730
        }
    });
// Variables to show marker information on the map
  const infoWin = new google.maps.InfoWindow();
  const markers = locations.map(function(location, i) {
  const marker = new google.maps.Marker({
      position: location
    });
    google.maps.event.addListener(marker, 'click', function(evt) {
      infoWin.setContent(location.info);
      infoWin.open(map, marker);
    })
    return marker;
  });
// Markers variable taken from google maps
  const markerCluster = new MarkerClusterer(map, markers, {
    imagePath: 'https://developers.google.com/maps/documentation/javascript/examples/markerclusterer/m'
    });
}
// Locations and information for markers to go on the map about places to visit which involve dinosaurs
    const locations = [
        { lat: 52.37872, 
          lng: -2.29157,
          info: 'West Midlands Safari park',
          link: 'http://www.wmsp.co.uk'},
        { lat: 51.49656, 
          lng: -0.17689,
          info: 'National History Museum'},
        { lat: 50.71475, 
          lng: -2.43398, 
          info:'The Dinosaur Museum'},
        { lat: 51.18897, 
          lng: -4.00354,
          info:'Combe Martin Wildlife & Dinosaur Park' },
        { lat: 50.72533, 
          lng: -2.93308,
          info: 'Dinosaurland Fossil Museum' },
        { lat: 53.40999, 
          lng: -2.98132,
          info: 'World Museum' },
        { lat: 51.74457, 
          lng: -0.06130,
          info:'World of Dinosaurs - Paradise Wildlife Park' },
        { lat: 51.42046, 
          lng: -0.07102,
           info:'Crystal Palace Park' },
        { lat: 51.28049, 
          lng: -1.23544,
          info:'Wingham Wildlife Park' },
        { lat: 50.65986, 
          lng: -1.14155,
          info:'Dinosaur Isle' }
    ];
