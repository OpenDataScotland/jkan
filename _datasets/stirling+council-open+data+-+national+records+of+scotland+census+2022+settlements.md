---
category:
- Business and Economy
- Council and Government
- Housing and Estates
- Planning and Development
date_created: '2024-05-21'
date_updated: '2024-07-06'
license: https://www.nationalarchives.gov.uk/doc/open-government-licence/version/3/
maintainer: Stirling Council
notes: "<div><b>This dataset is published as Open Data.</b></div>\n<div><br /></div>\n\
  <div><b>2022 Census Settlement:</b></div>\n<div><br /></div>\n<div>The 2022 Census\
  \ Settlement boundaries have been created using the Census 2022 frozen Postcode\
  \ boundaries.</div>\n<div>National Records of Scotland (NRS) create Settlement boundaries\
  \ by categorising Postcodes as either high or low density. A Postcode was defined\
  \ as high density if at least one of the following applied:</div>\n<div><ul><li>It\
  \ had more than 2.1 households per hectare.</li><li>It had more than 0.1 non-residential\
  \ addresses per hectare; or</li><li>The Census population per hectare exceeds five\
  \ people.</li></ul></div>\n<div>The threshold densities were set as they were found\
  \ to give a good approximation to the built-up areas identified in previous Censuses\
  \ using traditional methods. The second condition was included such that non-residential\
  \ parts (e.g. industrial estates) of built-up areas could be identified and included.</div>\n\
  <div><br /></div>\n<div>An additional rule was implemented from the 2016 (non-Census)\
  \ version, which stated that any Postcodes which fell within the previous version\
  \ Settlement boundary(based on centroid point in polygon assignment) would automatically\
  \ be included in the new Settlement.</div>\n<div>The classified Postcodes were then\
  \ grouped into areas of neighbouring high-density Postcodes, or \u2018Settlements\u2019\
  . Areas of low-density Postcodes completely surrounded by the high-density areas\
  \ (i.e. \u2018holes\u2019) were incorporated into the Settlement.</div>\n<div><br\
  \ /></div>\n<div>Populations for each area were then calculated, and any settlement\
  \ with fewer than 500 residents was discarded.</div>\n<div><br /></div>\n<div><div><b>2022\
  \ Census Settlement and Locality Centroids</b></div><div><br /></div><div>Each population\
  \ weighted centroid was calculated using a median centroid algorithm, the result\
  \ of which is less influenced by outliers than the result of an algorithm to calculate\
  \ the mean centroid. The process for creating Census 2022 Settlements centroids\
  \ was automated using</div><div>ESRI ArcGIS, but the general method is as follows.\
  \ The median easting and northing coordinate pair for all Census 2022 frozen</div><div>Postcodes\
  \ within the Settlement is calculated, giving a notional centroid of the Settlement.\
  \ The distance from each of the Postcode centroids to the notional (or median) centroid\
  \ is calculated using Pythagoras' Theorem. The Postcode coordinate pair with the\
  \ shortest distance to the median was then chosen to represent the centroid of the\
  \ Settlement/Locality.</div></div>"
organization: Stirling Council
original_dataset_link: https://data-stirling-council.hub.arcgis.com/datasets/stirling-council::open-data-national-records-of-scotland-census-2022-settlements
records: null
resources:
- format: ARCGIS HUB DATASET
  name: Web Page
  url: https://data-stirling-council.hub.arcgis.com/datasets/stirling-council::open-data-national-records-of-scotland-census-2022-settlements
- format: ARCGIS GEOSERVICE
  name: Esri REST
  url: https://services-eu1.arcgis.com/cECIr59LclpO818r/arcgis/rest/services/census_settlements/FeatureServer/6
- format: CSV
  name: CSV
  url: https://data-stirling-council.hub.arcgis.com/api/download/v1/items/402c7b1593ce4f3fa616a0af343099f3/csv?layers=6
- format: GEOJSON
  name: GeoJSON
  url: https://data-stirling-council.hub.arcgis.com/api/download/v1/items/402c7b1593ce4f3fa616a0af343099f3/geojson?layers=6
- format: ZIP
  name: Shapefile
  url: https://data-stirling-council.hub.arcgis.com/api/download/v1/items/402c7b1593ce4f3fa616a0af343099f3/shapefile?layers=6
- format: KML
  name: KML
  url: https://data-stirling-council.hub.arcgis.com/api/download/v1/items/402c7b1593ce4f3fa616a0af343099f3/kml?layers=6
schema: default
title: Open data - national records of scotland census 2022 settlements
---
