import './style.css'

import { locations } from './locations.js';

let nautiMap;
let nautiMarkers = [];
let nautiInfoWindows = [];

const nautiZoom = 6;
const nautiCenter = { lat: 28.3728687, lng: -81.49961773034279 };
const nautiMapId = '49aac10364cfc29c';

let openInfoWindow = false;

function createLocationsList() {
  const container = document.getElementById('nauti-locations-list');
  
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
    
    locationItem.addEventListener('click', () => handleListClick(location, index))
  })
}

function createMarker(location, markerElement) {
  const pinIcon = document.createElement('img');
  const pinIconUrl = 'https://images.squarespace-cdn.com/content/v1/61c9f775744ede357d65ddbd/b3aa1969-cea6-414f-a75f-33123cbe4e9c/NautiBeach_M38182-Custom-Map-Assets-v3-01.png';
  
  pinIcon.src = pinIconUrl;
  pinIcon.classList.add('nauti__pin-icon');
  
  const marker = new markerElement({
    position: { lat: location.lat, lng: location.lng },
    map: nautiMap,
    title: location.name,
    content: pinIcon,
  });
  
  nautiMarkers.push(marker);
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
  
  nautiInfoWindows.push(infoWindow);
}

function handleInfoWindow(index) {
  nautiMarkers[index].addListener('gmp-click', () => {
    if (openInfoWindow) {
      openInfoWindow.close();
    }
    
    openInfoWindow = nautiInfoWindows[index];
    nautiInfoWindows[index].open(nautiMap, nautiMarkers[index]);
  });
}

function handleListClick(location, index) {
  if(nautiMarkers.length < locations.length) {
    updateMap(locations);
  };

  nautiMap.setZoom(nautiZoom);

  if (openInfoWindow) {
    openInfoWindow.close();
  }
  
  openInfoWindow = nautiInfoWindows[index];
  
  setTimeout(() => {
    nautiMap.panTo({ lat: location.lat, lng: location.lng });
    nautiMap.setZoom(10);
    nautiInfoWindows[index].open(nautiMap, nautiMarkers[index]);
  }, 1000);
}

async function updateMap(newLocations) {
  console.log(newLocations);
  const { AdvancedMarkerElement } = await google.maps.importLibrary('marker');

  nautiMap.setZoom(nautiZoom);
  nautiMarkers.forEach(marker => marker.setMap(null));
  nautiMarkers.length = 0;
  nautiInfoWindows.length = 0;

  newLocations.forEach((location, index) => {
    createMarker(location, AdvancedMarkerElement);
    createInfoWindow(location);
    handleInfoWindow(index);
  })
}

function filterLocations(e, value) {
  e.preventDefault();
  const regex = new RegExp(value, 'gi');
  const newLocations = locations.filter(location => {
    return location.name.match(regex) || location.address.city.match(regex);
  })
  
  updateMap(newLocations);
}

async function initMap() {
  const mapContainer = document.getElementById('nauti-map');
  const { Map } = await google.maps.importLibrary('maps');
  const { AdvancedMarkerElement } = await google.maps.importLibrary('marker');

  nautiMap = new Map(mapContainer, {
    center: nautiCenter,
    zoom: nautiZoom,
    mapId: nautiMapId,
  });
  
  locations.forEach((location, index) => {
    createMarker(location, AdvancedMarkerElement);
    createInfoWindow(location);
    handleInfoWindow(index);
  })

  createLocationsList();
  
  const form = document.forms['nautiLocationsFilter'];
  const input = form.querySelector('input');
  const button = form.querySelector('button');
  
  button.addEventListener('click', (e) => {
    filterLocations(e, input.value);
  })
}

initMap();