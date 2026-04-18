// Vendor entry point: imports third-party libraries and exposes them as globals
// for use by inline scripts in the Jekyll templates.

import $ from 'jquery'
import _ from 'lodash'
import Chart from 'chart.js'
import L from 'leaflet'
import Mustache from 'mustache'

window.$ = window.jQuery = $
window._ = _
window.Chart = Chart
window.L = L
window.Mustache = Mustache

// Fix Leaflet default marker icon paths when bundled with webpack
import markerIcon from 'leaflet/dist/images/marker-icon.png'
import markerIcon2x from 'leaflet/dist/images/marker-icon-2x.png'
import markerShadow from 'leaflet/dist/images/marker-shadow.png'

delete L.Icon.Default.prototype._getIconUrl
L.Icon.Default.mergeOptions({
  iconRetinaUrl: markerIcon2x,
  iconUrl: markerIcon,
  shadowUrl: markerShadow,
})

// DataTables (Bootstrap 5 styled, with FixedHeader extension)
import 'datatables.net-bs5'
import 'datatables.net-fixedheader-bs5'

// CSS imports (extracted to vendor.css by MiniCssExtractPlugin)
import './styles/bootstrap.scss'
import '@fortawesome/fontawesome-free/css/all.min.css'
import 'notie/dist/notie.css'
import 'leaflet/dist/leaflet.css'
import 'datatables.net-bs5/css/dataTables.bootstrap5.min.css'
import 'datatables.net-fixedheader-bs5/css/fixedHeader.bootstrap5.min.css'
