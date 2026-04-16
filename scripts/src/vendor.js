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

// DataTables (Bootstrap 3 styled, with FixedHeader extension)
import 'datatables.net-bs'
import 'datatables.net-fixedheader-bs'

// CSS imports (extracted to vendor.css by MiniCssExtractPlugin)
import 'bootstrap/dist/css/bootstrap.min.css'
import '@fortawesome/fontawesome-free/css/all.min.css'
import 'notie/dist/notie.css'
import 'leaflet/dist/leaflet.css'
import 'datatables.net-bs/css/dataTables.bootstrap.min.css'
import 'datatables.net-fixedheader-bs/css/fixedHeader.bootstrap.min.css'
