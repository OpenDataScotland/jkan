---
category:
- Elections / Politics
- Planning and Development
date_created: '2021-06-11'
date_updated: '2023-07-05'
license: 'Custom licence: Other (Not Open)'
maintainer: Improvement Service
notes: "<p>A Building Standards Register is maintained by local authorities under\
  \ the terms of Section 24 of the Building (Scotland) Act 2003. Local authorities\
  \ are responsible for granting permission for work to be done (building warrant)\
  \ and for a completed building to be occupied (completion certificate). These registers\
  \ are online and searchable and published as weekly lists in a similar way to planning\
  \ applications.</p>\n<p>Registers typically contain details of applications at the\
  \ following stages of the building warrant process:</p>\n<ul>\n<li>Received</li>\n\
  <li>Decided</li>\n<li>Commenced</li>\n<li>Completed</li>\n</ul>\n<p>The datasets\
  \ are presented as follows:</p>\n<ol>\n<li>Building Standards - Weekly Lists (Points):\_\
  \_A point layer showing an amalgamation of the current calendar year's weekly lists\
  \ for all Scottish planning authorities in terms of applications registered and/or\
  \ decided by a local authority. This should be a complete dataset across Scotland\
  \ using X/Y co-ordinates, UPRN or postcode as corresponding\_geometry. This is categorised\
  \ by application status, local authority and date of weekly list.</li>\n<li>Building\
  \ Standards - Weekly Lists (Polygons):\_A polygon layer showing an amalgamation\
  \ of the current calendar year's weekly lists for most Scottish\_local authorities\
  \ in terms of\_applications registered and/or decided by a local authority. This\
  \ is only for authorities that publish site boundary\_mapping data online.\_This\
  \ is\_categorised\_by application status, local authority and date of weekly list.</li>\n\
  <li>Building Standards - historic year layers (Points):\_Point layer for all previous\
  \ year's building standards applications with summary details for\_most\_Scottish\_\
  local\_authorities. This should be a complete dataset across Scotland using X/Y\
  \ co-ordinates, UPRN or postcode as corresponding\_geometry.</li>\n<li>Building\
  \ Standards - historic year layers (Polygons):\_Polygon layers for all previous\
  \ year's building standards applications with summary details for\_most\_Scottish\_\
  local\_authorities. This is only for authorities that publish site boundary\_mapping\
  \ data online and is not complete across Scotland.</li>\n</ol>\n<p>This data is\
  \ collected and published weekly (for weekly lists) and this metadata record is\
  \ updated weekly.</p>\n<p>We strongly recommend that, when using the WFS for this\
  \ dataset, because of it's size you should use it with a filter.</p>\n<p><em>Moray's\
  \ data has currently been removed from this dataset. We will find a solution to\
  \ this in due course</em></p>"
organization: Improvement Service
original_dataset_link: ' https://data.spatialhub.scot/dataset/building_standards-is'
records: null
resources:
- format: WFS
  name: 'Building Standards: DEPRECATED Weekly (points) '
  url: https://geo.spatialhub.scot/geoserver/sh_bstan/wfs?service=wfs&typeName=sh_bstan:pub_bstanweekpnt
- format: WFS
  name: 'Building Standards: DEPRECATED Weekly (polygons) '
  url: https://geo.spatialhub.scot/geoserver/sh_bstan/wfs?service=wfs&typeName=sh_bstan:pub_bstanweekpol
- format: WFS
  name: 'Building Standards: DEPRECATED Archive (points) '
  url: https://geo.spatialhub.scot/geoserver/sh_bstan/wfs?service=wfs&typeName=sh_bstan:pub_bstanyearpnt
- format: WFS
  name: 'Building Standards: DEPRECATED Archive (polygons) '
  url: https://geo.spatialhub.scot/geoserver/sh_bstan/wfs?service=wfs&typeName=sh_bstan:pub_bstanyearpol
schema: default
title: Building Standards (DEPRECATED) - Scotland
---
