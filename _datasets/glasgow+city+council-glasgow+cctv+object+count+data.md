---
category:
- Business and Economy
- Council and Government
- Health and Social Care
- Planning and Development
- Public Safety
- Transportation
date_created: ''
date_updated: '2022-03-14'
license: No licence
maintainer: Glasgow City Council
notes: "<p>Object Count data collected from over 40 CCTV cameras owned by Glasgow\
  \ City Council. Since 2019, Urban Big Data Centre at University of Glasgow, Glasgow\
  \ City Council and Glasgow Centre for Population Health have been collaborating\
  \ on a project to combine Data Science with the city\u2019s existing CCTV network\
  \ to generate object count data.</p>\n<p>Selected CCTV cameras take a single frame\
  \ image every 30 minutes across the 40 plus cameras and the images are processed\
  \ using machine learning algorithms to detect and count various objects \u2013 the\
  \ objects include person, car, bicycle, motorcycle, bus and truck. The counts of\
  \ objects in the frame are collected and returned via an API created to access and\
  \ query the data.</p>\n<p>Users can query the API to return data on object type,\
  \ location and time periods since November 2019.</p>\n<p>As the data detects objects\
  \ only once every 30 minutes the data cannot be used to determine the absolute number\
  \ of objects (such as persons) in one place over time. Rather the data should be\
  \ used to compare the difference in object counts between places at the same time\
  \ or the same image frame over two or more time periods.</p>\n<p><span>Note that</span><span>\
  \ the camera images do not store or track individual images of people, rather the\
  \ algorithms are trained to recognise the outline shape of an object only and count\
  \ it every time it detects the object in the image frame. One of the image count\
  \ data are retained or stored after they have been counted.</span></p>\n<p><br /></p>"
organization: Glasgow City Council
original_dataset_link: https://open-data-design-glasgowgis.hub.arcgis.com/documents/GlasgowGIS::glasgow-cctv-object-count-data
records: null
resources:
- format: ARCGIS GEOSERVICE
  name: ARCGIS GEOSERVICE
  url: https://developer.glasgow.gov.uk/api-details#api=cctv&operation=get-get-detection-summaries
schema: default
title: Glasgow CCTV Object Count Data
---
