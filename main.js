import './style.css'

let map;
let markers = [];
let infoWindows = [];

const zoom = 6;
const center = { lat: 28.3728687, lng: -81.49961773034279 };

function createLocationsList() {
  const container = document.getElementById('nauti-locations-list');
  let prevInfoWindow = false;

  locations.forEach((location, index) => {
    const locationItem = document.createElement('div');
    locationItem.classList.add('nauti__location-item');
    
    const locationTitle = document.createElement('h3');
    locationTitle.classList.add('nauti__location-title');
    locationTitle.innerText = location.name;

    const locationAddress = document.createElement('p');
    locationAddress.classList.add('nauti__location-address');
    locationAddress.innerHTML = `${location.address.street}<br>${location.address.city}, ${location.address.state} ${location.address.zip}`;

    const locationDirections = document.createElement('a');
    locationDirections.classList.add('nauti__location-directions');
    locationDirections.innerText = 'Get Directions';
    locationDirections.href = location.dir;
    locationDirections.target = '_blank';

    locationItem.appendChild(locationTitle);
    locationItem.appendChild(locationAddress);
    locationItem.appendChild(locationDirections);

    container.appendChild(locationItem);

    locationItem.addEventListener('click', () => {
      map.setZoom(zoom)
      if (prevInfoWindow) {
        prevInfoWindow.close();
      }

      prevInfoWindow = infoWindows[index];
      
      setTimeout(() => {
        map.panTo({ lat: location.lat, lng: location.lng });
        map.setZoom(10);
        infoWindows[index].open(map, markers[index]);
      }, 1000);
    })
  })
}

async function initNautiMap() {
  const container = document.getElementById('nauti-map');
  const mapId = '49aac10364cfc29c';

  const { Map } = await google.maps.importLibrary('maps');
  const { AdvancedMarkerElement } = await google.maps.importLibrary('marker');

  map = new Map(container, {
    center,
    zoom,
    mapId,
  });

  let prevInfoWindow = false;

  locations.forEach((location, index) => {
    const pinIcon = document.createElement('img');
    const pinIconUrl = 'https://images.squarespace-cdn.com/content/v1/61c9f775744ede357d65ddbd/b3aa1969-cea6-414f-a75f-33123cbe4e9c/NautiBeach_M38182-Custom-Map-Assets-v3-01.png';

    pinIcon.src = pinIconUrl;
    pinIcon.classList.add('nauti__pin-icon');

    const marker = new AdvancedMarkerElement({
      position: { lat: location.lat, lng: location.lng },
      map,
      title: location.name,
      content: pinIcon,
    });

    markers.push(marker);

    let infoWindow = createInfoWindow(location);
    infoWindows.push(infoWindow);
    
    marker.addListener('gmp-click', () => {

      if (prevInfoWindow) {
        prevInfoWindow.close();
      }

      prevInfoWindow = infoWindow;
      infoWindow.open(map, marker);
    });
  })
}

function createInfoWindow(location) {
  const container = document.createElement('div');
  container.classList.add('nauti__info-window');

  const logo = document.createElement('img');
  logo.classList.add('nauti__info-window-logo');
  logo.src = 'https://images.squarespace-cdn.com/content/v1/61c9f775744ede357d65ddbd/26e030a7-53dd-4e94-b8ad-d488600792b7/Nauti_Wordmark_Red.png?format=1500w';

  const title = document.createElement('h3');
  title.classList.add('nauti__info-window-title');
  title.innerText = location.name;

  const content = document.createElement('div');
  content.classList.add('nauti__info-window-content');

  const address = document.createElement('p');
  address.classList.add('nauti__info-window-address');
  address.innerHTML = `${location.address.street}<br>${location.address.city}, ${location.address.state} ${location.address.zip}`;

  const directions = document.createElement('a');
  directions.classList.add('nauti__info-window-directions');
  directions.classList.add('nauti__info-window-button');
  directions.href = location.dir;
  directions.target = '_blank';
  directions.innerText = 'Get Directions'

  container.appendChild(logo);
  container.appendChild(title);
  container.appendChild(content);
  content.appendChild(address);
  container.appendChild(directions);

  const infoWindow = new google.maps.InfoWindow({
    content: container,
    ariaLabel: location.name,
  });

  return infoWindow;
}

createLocationsList();
initNautiMap();

