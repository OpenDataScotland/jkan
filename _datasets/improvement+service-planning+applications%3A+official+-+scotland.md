---
category:
- Food and Environment
- Housing and Estates
- Planning and Development
- Transportation
date_created: '2023-04-11'
date_updated: '2023-12-22'
license: https://www.nationalarchives.gov.uk/doc/open-government-licence/version/3/
maintainer: Improvement Service
notes: "<p>This new planning applications data has been created using a custom built\
  \ 'Cloud Connector Framework' which enables the automated collection of data from\
  \ local data systems on a DAILY basis. Some planning authorities data may be missing\
  \ until all have configured their own CCF connection.</p>\n<p>There are 2 layers:\
  \ Points &amp; Polygons.</p>\n<p>Currently missing data from East Ayrshire (Polygons\
  \ only) and West Lothian </p>\n<p>'Development management' is the name given to\
  \ the process of deciding planning applications and various other associated activities\
  \ including enforcement of planning controls. For the purposes of planning applications,\
  \ development in Scotland is put into one of three categories \u2013 'local', 'major'\
  \ or 'national'. The different categories mean that applications are treated in\
  \ a way which is suited to the size and complexity of the proposed development and\
  \ the issues they are likely to raise. Most applications will be for 'local' developments.\
  \ 'Major' developments include applications for 50 or more homes, certain waste,\
  \ water, transport and energy-related developments, and larger retail developments.\
  \ 'National' developments are specific projects which have been identified in the\
  \ National Planning Framework because of their national importance. Scottish Ministers\
  \ become involved in a small minority of cases, but only do so where it involves\
  \ a matter of genuine national interest.</p>\n<p>We strongly recommend that, when\
  \ using the WFS for this dataset, because of it's size you should use it with a\
  \ filter. For example with the attributes 'local_authority' and 'year'.</p>\n<p>A\
  \ powerBI dashboard highlighting some data quality issues we have found is available\
  \ to view at https://app.powerbi.com/view?r=eyJrIjoiOTBkMWVmOTYtYzg0Yy00MTM0LWI5NjAtM2I5NjNhNTA3YzBlIiwidCI6IjdiYmUyMDM3LWMzZGMtNGU4Ny1iMTdiLTZiZDJkMjI3MWY0NyIsImMiOjh9</p>"
organization: Improvement Service
original_dataset_link: ' https://data.spatialhub.scot/dataset/planning_applications_official-is'
records: null
resources:
- format: WFS
  name: 'Planning Applications: Official (Points) '
  url: https://geo.spatialhub.scot/geoserver/sh_plnapp/wfs?service=wfs&typeName=sh_plnapp:pub_plnapppnt
- format: WFS
  name: 'Planning Applications: Official (Polygons) '
  url: https://geo.spatialhub.scot/geoserver/sh_plnapp/wfs?service=wfs&typeName=sh_plnapp:pub_plnapppol
schema: default
title: 'Planning Applications: Official - Scotland'
---
