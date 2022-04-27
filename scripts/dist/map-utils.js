const OSM_TILE_LAYER = L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
});

const SCOTLAND_CENTRE = [57.69240553526457, -3.8671875000000004]
const DEFAULT_ZOOM = 13;

const POPUP_MAX_WIDTH = 500;

const POLYGON_OPACITY = 0.75;
const POLYGON_LINE_COLOUR = '#000';
const POLYGON_LINE_WEIGHT = 1.5;