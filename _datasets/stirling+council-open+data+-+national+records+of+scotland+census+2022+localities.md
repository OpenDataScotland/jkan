---
category:
- Business and Economy
- Council and Government
- Housing and Estates
- Planning and Development
date_created: '2024-05-22'
date_updated: '2024-05-21'
license: https://www.nationalarchives.gov.uk/doc/open-government-licence/version/3/
maintainer: Stirling Council
notes: '<div><div><b>This dataset is published as Open Data</b></div><div><b><br /></b></div><div><b>2022
  Census Locality</b></div><div><br /></div><div>The Census Locality boundaries have
  been created using the Census 2022 frozen Postcode boundaries.</div><div>National
  Records of Scotland (NRS) create Locality boundaries by first creating the Settlements
  geography, and then assigning any Postcode located within a Settlement to a Locality
  based on a point-in-polygon (PIP) process with the previous version of the Locality
  boundary. Postcodes that fall within a Settlement boundary that are unassigned after
  the PIP are manually examined and assigned to a Locality.</div></div>

  <div><br /></div>

  <div><div><b>2022 Census Settlement and Locality Centroids</b></div><div><br /></div><div>Each
  population weighted centroid was calculated using a median centroid algorithm, the
  result of which is less influenced by outliers than the result of an algorithm to
  calculate the mean centroid. The process for creating Census 2022 Settlements centroids
  was automated using</div><div>ESRI ArcGIS, but the general method is as follows.
  The median easting and northing coordinate pair for all Census 2022 frozen</div><div>Postcodes
  within the Settlement is calculated, giving a notional centroid of the Settlement.
  The distance from each of the Postcode centroids to the notional (or median) centroid
  is calculated using Pythagoras'' Theorem. The Postcode coordinate pair with the
  shortest distance to the median was then chosen to represent the centroid of the
  Settlement/Locality.</div></div>'
organization: Stirling Council
original_dataset_link: https://data-stirling-council.hub.arcgis.com/maps/stirling-council::open-data-national-records-of-scotland-census-2022-localities
records: null
resources:
- format: ARCGIS HUB DATASET
  name: Web Page
  url: https://data-stirling-council.hub.arcgis.com/maps/stirling-council::open-data-national-records-of-scotland-census-2022-localities
- format: ARCGIS GEOSERVICE
  name: Esri REST
  url: https://services-eu1.arcgis.com/cECIr59LclpO818r/arcgis/rest/services/census_localities/FeatureServer/7
- format: CSV
  name: CSV
  url: https://data-stirling-council.hub.arcgis.com/api/download/v1/items/da25091a9de648f1a1dbef701d0bc714/csv?layers=7
- format: GEOJSON
  name: GeoJSON
  url: https://data-stirling-council.hub.arcgis.com/api/download/v1/items/da25091a9de648f1a1dbef701d0bc714/geojson?layers=7
- format: ZIP
  name: Shapefile
  url: https://data-stirling-council.hub.arcgis.com/api/download/v1/items/da25091a9de648f1a1dbef701d0bc714/shapefile?layers=7
- format: KML
  name: KML
  url: https://data-stirling-council.hub.arcgis.com/api/download/v1/items/da25091a9de648f1a1dbef701d0bc714/kml?layers=7
schema: default
title: Open data - national records of scotland census 2022 localities
---
