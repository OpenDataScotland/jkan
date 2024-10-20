---
category:
- Housing and Estates
- Planning and Development
date_created: '2023-06-14'
date_updated: '2024-09-04'
license: 'Custom licence: Other (Not Open)'
maintainer: Improvement Service
notes: '<p>This new building standards data has been created using a custom built
  ''Cloud Connector Framework'' which enables the automated collection of data from
  local data systems on a DAILY basis.   There are 2 layers: Points &amp; polygons
  (not all local authorities collect polygon data)  Currently missing data from Fife  A
  Building Standards Register is maintained by local authorities under the terms of
  Section 24 of the Building (Scotland) Act 2003. Local authorities are responsible
  for granting permission for work to be done (building warrant) and for a completed
  building to be occupied (completion certificate). These registers are online and
  searchable and published as weekly lists in a similar way to planning applications.  Registers
  typically contain details of applications at the following stages of the building
  warrant process:  Received Decided Commenced Completed  We strongly recommend that
  when using the WFS for this dataset, because of its size, you use it with a filter.
  For example with the attributes ''local_authority'' and ''year''.  A powerBI dashboard
  highlighting some data quality issues we have found is available to view at https://app.powerbi.com/view?r=eyJrIjoiYjIwYjIxNTQtZTZhMi00ZTc1LWEwNzAtZDdhNjkyMTQ2YmQwIiwidCI6IjdiYmUyMDM3LWMzZGMtNGU4Ny1iMTdiLTZiZDJkMjI3MWY0NyIsImMiOjh9</p>'
organization: Improvement Service
original_dataset_link: ' https://data.spatialhub.scot/dataset/building_standards_official_premium-is'
records: null
resources:
- format: WFS
  name: 'Building Standards: Official (Points) '
  url: https://geo.spatialhub.scot/geoserver/sh_bldstd_premium/wfs?service=wfs&typeName=sh_bldstd_premium:pub_bldstdpnt_premium
- format: WFS
  name: 'Building Standards: Official (Polygons) '
  url: https://geo.spatialhub.scot/geoserver/sh_bldstd_premium/wfs?service=wfs&typeName=sh_bldstd_premium:pub_bldstdpol_premium
schema: default
title: 'Building Standards: Official PREMIUM - Scotland'
---
