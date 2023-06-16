---
category:
- Elections / Politics
- Planning and Development
date_created: '2023-04-11'
date_updated: '2023-06-14'
license: https://www.nationalarchives.gov.uk/doc/open-government-licence/version/3/
maintainer: Improvement Service
notes: '<p>This new building standards data has been created using a custom built
  ''Cloud Connector Framework'' which enables the automated collection of data from
  local data systems on a weekly basis. Some local authority data may be missing until
  all have configured their own CCF connection.  A Building Standards Register is
  maintained by local authorities under the terms of Section 24 of the Building (Scotland)
  Act 2003. Local authorities are responsible for granting permission for work to
  be done (building warrant) and for a completed building to be occupied (completion
  certificate). These registers are online and searchable and published as weekly
  lists in a similar way to planning applications.  Registers typically contain details
  of applications at the following stages of the building warrant process:  Received
  Decided Commenced Completed We strongly recommend that, when using the WFS for this
  dataset, because of it''s size you should use it with a filter. For example with
  the attributes ''local_authority'' and ''year''.</p>'
organization: Improvement Service
original_dataset_link: ' https://data.spatialhub.scot/dataset/building_standards_ccf-is'
records: null
resources:
- format: WFS
  name: 'Building Standards (Points) '
  url: https://geo.spatialhub.scot/geoserver/sh_bldstd/wfs?service=wfs&typeName=sh_bldstd:pub_bldstdpnt
- format: WFS
  name: 'Building Standards (Polygons) '
  url: https://geo.spatialhub.scot/geoserver/sh_bldstd/wfs?service=wfs&typeName=sh_bldstd:pub_bldstdpol
schema: default
title: Building Standards CCF - Scotland
---
