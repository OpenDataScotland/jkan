---
category:
- Elections / Politics
- Planning and Development
date_created: '2023-06-14'
date_updated: '2023-07-05'
license: 'Custom licence: Other (Not Open)'
maintainer: Improvement Service
notes: "<p>This new building standards data has been created using a custom built\
  \ 'Cloud Connector Framework' which enables the automated collection of data from\
  \ local data systems on a weekly basis. Some local authority data may be missing\
  \ until all have configured their own CCF connection.</p>\n<p>There are 2 layers:\
  \ Points &amp; Polygons (not all local authorities collect polygon data)</p>\n<p>Currently\
  \ missing data from Aberdeen City, East Lothian, Fife, Scottish Borders &amp; West\
  \ Lothian</p>\n<p>A Building Standards Register is maintained by local authorities\
  \ under the terms of Section 24 of the Building (Scotland) Act 2003. Local authorities\
  \ are responsible for granting permission for work to be done (building warrant)\
  \ and for a completed building to be occupied (completion certificate). These registers\
  \ are online and searchable and published as weekly lists in a similar way to planning\
  \ applications.</p>\n<p>Registers typically contain details of applications at the\
  \ following stages of the building warrant process:</p>\n<p>Received\n Decided\n\
  \ Commenced\n Completed\n We strongly recommend that, when using the WFS for this\
  \ dataset, because of it's size you should use it with a filter. For example with\
  \ the attributes 'local_authority' and 'year'.</p>"
organization: Improvement Service
original_dataset_link: ' https://data.spatialhub.scot/dataset/building_standards_ccf_premium-is'
records: null
resources:
- format: WFS
  name: 'Building Standards: Official (Points) '
  url: https://geo.spatialhub.scot/geoserver/sh_bldstd_premium/wfs?service=wfs&typeName=sh_bldstd_premium:pub_bldstdpnt_premium
- format: WFS
  name: 'Building Standards: Official (Polygons) '
  url: https://geo.spatialhub.scot/geoserver/sh_bldstd_premium/wfs?service=wfs&typeName=sh_bldstd_premium:pub_bldstdpol_premium
schema: default
title: Building Standards PREMIUM - Scotland
---
