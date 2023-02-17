---
category:
- Elections / Politics
- Food and Environment
- Transportation
date_created: '2021-06-11'
date_updated: '2023-02-13'
license: 'Custom licence: Other (Not Open)'
maintainer: Improvement Service
notes: <p>Local Authorities have a duty to designate any relevant areas where the
  air quality objectives are not (or are unlikely to be) being met as Air Quality
  Management Areas (AQMAs).  AQMAs must be designated officially by means of an 'order'.  The
  extent of the AQMA may be limited to the area of exceedance or encompass a larger
  area.  Following the declaration of an AQMA, the local authority is required to
  develop and implement a plan (Air Quality Action Plan) to improve air quality in
  that area. AQMAs can be for a combination of NO2, SO2, PM10.  Most data provided
  by local authorities is in polygon format. However, some is provided in point and
  line form so we are currently buffering such data by the width of a road or so in
  order to merge them in to the national polygon dataset. Some smaller local authorities
  e.g. Dundee, use the entire extent of their local authority, as digitised in Ordnance
  Survey's BoundaryLine dataset, for the AQMA.  We have included date of AQMA declaration
  in our national schema, though many LAs do not currently provide this. Revoked AQMAs
  are now held in this dataset with a 'Date revoked' attribute</p>
organization: Improvement Service
original_dataset_link: ' https://data.spatialhub.scot/dataset/air_quality_management_areas-is'
records: null
resources:
- format: WFS
  name: 'Air Quality Management Areas '
  url: https://geo.spatialhub.scot/geoserver/sh_aqma/wfs?service=wfs&typeName=sh_aqma:pub_aqma
schema: default
title: Air Quality Management Areas - Scotland
---
