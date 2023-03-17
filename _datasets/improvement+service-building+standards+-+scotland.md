---
category:
- Elections / Politics
- Planning and Development
date_created: '2021-06-11'
date_updated: '2023-03-16'
license: 'Custom licence: Other (Not Open)'
maintainer: Improvement Service
notes: "<p>A Building Standards Register is maintained by local authorities under\
  \ the terms of Section 24 of the Building (Scotland) Act 2003. Local authorities\
  \ are responsible for granting permission for work to be done (building warrant)\
  \ and for a completed building to be occupied (completion certificate). These registers\
  \ are online and searchable and published as weekly lists in a similar way to planning\
  \ applications.  Registers typically contain details of applications at the following\
  \ stages of the building warrant process:  - Received - Decided - Commenced - Completed\
  \  The datasets are presented as follows:  1. Building Standards - Weekly Lists\
  \ (Points):\_\_A point layer showing an amalgamation of the current calendar year's\
  \ weekly lists for all Scottish planning authorities in terms of applications registered\
  \ and/or decided by a local authority. This should be a complete dataset across\
  \ Scotland using X/Y co-ordinates, UPRN or postcode as corresponding\_geometry.\
  \ This is categorised by application status, local authority and date of weekly\
  \ list. 2. Building Standards - Weekly Lists (Polygons):\_A polygon layer showing\
  \ an amalgamation of the current calendar year's weekly lists for most Scottish\_\
  local authorities in terms of\_applications registered and/or decided by a local\
  \ authority. This is only for authorities that publish site boundary\_mapping data\
  \ online.\_This is\_categorised\_by application status, local authority and date\
  \ of weekly list. 3. Building Standards - historic year layers (Points):\_Point\
  \ layer for all previous year's building standards applications with summary details\
  \ for\_most\_Scottish\_local\_authorities. This should be a complete dataset across\
  \ Scotland using X/Y co-ordinates, UPRN or postcode as corresponding\_geometry.\
  \ 4. Building Standards - historic year layers (Polygons):\_Polygon layers for all\
  \ previous year's building standards applications with summary details for\_most\_\
  Scottish\_local\_authorities. This is only for authorities that publish site boundary\_\
  mapping data online and is not complete across Scotland.  This data is collected\
  \ and published weekly (for weekly lists) and this metadata record is updated weekly.\
  \  We strongly recommend that, when using the WFS for this dataset, because of it's\
  \ size you should use it with a filter.  <em>Moray's data has currently been removed\
  \ from this dataset. We will find a solution to this in due course</em></p>"
organization: Improvement Service
original_dataset_link: ' https://data.spatialhub.scot/dataset/building_standards-is'
records: null
resources:
- format: WFS
  name: 'Building Standards: Weekly Lists (Points)'
  url: https://geo.spatialhub.scot/geoserver/sh_bstan/wfs?service=wfs&typeName=sh_bstan:pub_bstanweekpnt
- format: WFS
  name: 'Building Standards: Weekly Lists (Polygons)'
  url: https://geo.spatialhub.scot/geoserver/sh_bstan/wfs?service=wfs&typeName=sh_bstan:pub_bstanweekpol
- format: WFS
  name: 'Building Standards: Archive (points) '
  url: https://geo.spatialhub.scot/geoserver/sh_bstan/wfs?service=wfs&typeName=sh_bstan:pub_bstanyearpnt
- format: WFS
  name: 'Building Standards: Archive (polygons) '
  url: https://geo.spatialhub.scot/geoserver/sh_bstan/wfs?service=wfs&typeName=sh_bstan:pub_bstanyearpol
schema: default
title: Building Standards - Scotland
---
