let map;

function initMap() {
  const centers = [
    {
      position: new google.maps.LatLng(21.028942672099486, 105.78228976714409),
      id: 0,
    },
    {
      position: new google.maps.LatLng(20.971261413978386, 105.7843871245304),
      id: 1,
    },
  ];

  map = new google.maps.Map(document.getElementById("map"), {
    center: centers[0].position,
    zoom: 12,
  });

  // Create markers.
  for (let i = 0; i < centers.length; i++) {
    const marker = new google.maps.Marker({
      position: centers[i].position,
      map: map,
    });
  }

  // Add click event listeners to buttons.
  const buttons = document.querySelectorAll(".map-button");
  buttons.forEach((button, index) => {
    button.addEventListener("click", () => {
      setMapCenter(centers[index].position);
    });
  });
}

function setMapCenter(position) {
  map.setCenter(position);
}

window.initMap = initMap;
