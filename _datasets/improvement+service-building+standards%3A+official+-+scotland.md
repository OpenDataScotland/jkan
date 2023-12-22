---
category:
- Elections / Politics
- Housing and Estates
- Planning and Development
date_created: '2023-04-11'
date_updated: '2023-12-22'
license: https://www.nationalarchives.gov.uk/doc/open-government-licence/version/3/
maintainer: Improvement Service
notes: "<p>This new building standards data has been created using a custom built\
  \ 'Cloud Connector Framework' which enables the automated collection of data from\
  \ local data systems on a DAILY basis. Some local authority data may be missing\
  \ until all have configured their own CCF connection. There are 2 layers: Points\
  \ &amp; polygons (not all local authorities collect polygon data)</p>\n<p>Currently\
  \ missing data from Fife and West Lothian </p>\n<p>A Building Standards Register\
  \ is maintained by local authorities under the terms of Section 24 of the Building\
  \ (Scotland) Act 2003. Local authorities are responsible for granting permission\
  \ for work to be done (building warrant) and for a completed building to be occupied\
  \ (completion certificate). These registers are online and searchable and published\
  \ as weekly lists in a similar way to planning applications.</p>\n<p>Registers typically\
  \ contain details of applications at the following stages of the building warrant\
  \ process:</p>\n<p>Received\n Decided\n Commenced\n Completed</p>\n<p>We strongly\
  \ recommend that, when using the WFS for this dataset, because of it's size you\
  \ should use it with a filter. For example with the attributes 'local_authority'\
  \ and 'year'.</p>\n<p>A powerBI dashboard highlighting some data quality issues\
  \ we have found is available to view at https://app.powerbi.com/view?r=eyJrIjoiYmY3ZWQxYjItYTdkYy00ZTgzLWE1YjMtMDUyODk0OWIwZmQwIiwidCI6IjdiYmUyMDM3LWMzZGMtNGU4Ny1iMTdiLTZiZDJkMjI3MWY0NyIsImMiOjh9</p>"
organization: Improvement Service
original_dataset_link: ' https://data.spatialhub.scot/dataset/building_standards_official-is'
records: null
resources:
- format: WFS
  name: 'Building Standards: Official (Points) '
  url: https://geo.spatialhub.scot/geoserver/sh_bldstd/wfs?service=wfs&typeName=sh_bldstd:pub_bldstdpnt
- format: WFS
  name: 'Building Standards: Official (Polygons) '
  url: https://geo.spatialhub.scot/geoserver/sh_bldstd/wfs?service=wfs&typeName=sh_bldstd:pub_bldstdpol
schema: default
title: 'Building Standards: Official - Scotland'
---
