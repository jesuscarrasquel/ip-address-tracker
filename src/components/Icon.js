import L from 'leaflet';

const iconPerson = new L.Icon({
    iconUrl: require('../assets/img/icon-location.svg').default,
    iconRetinaUrl: require('../assets/img/icon-location.svg').default,
    iconAnchor: null,
    popupAnchor: null,
    shadowUrl: null,
    shadowSize: null,
    shadowAnchor: null,
    iconSize: new L.Point(40, 40),
});

export { iconPerson };