---
category:
- Arts / Culture / History
- Council and Government
- Education
- Housing and Estates
- Planning and Development
date_created: '2024-11-13'
date_updated: '2024-11-13'
license: https://www.nationalarchives.gov.uk/doc/open-government-licence/version/3/
maintainer: Dundee City Council
notes: "<p><b><font size='4'>WARNING</font></b></p>\n<p><span style='background-color:rgb(255,\
  \ 255, 0);'><font size='4'><b>This data is provided here for specialist users only.\
  \ </b>The same information is available in a much more user-friendly format in the\
  \ <a href='https://www.dundeecity.gov.uk/services-near-me' target='_blank' rel='nofollow\
  \ ugc noopener noreferrer'><b>Services near me</b> </a>page on the main council\
  \ website, and anyone interested in enrolling a child in school should see the page\
  \ on <a href='https://www.dundeecity.gov.uk/service-area/children-and-families-service/education/enrolment-in-primary-and-secondary-schools-in-dundee'\
  \ target='_blank' rel='nofollow ugc noopener noreferrer'><b>Enrolment in Primary\
  \ and Secondary Schools in Dundee</b></a></font></span></p>\n<p><font size='4'><b>Purpose</b></font></p>\n\
  <p>This map layer is provided here as a hosted feature layer that is intended for\
  \ use in Geographical Information Systems (GIS) like ArcGIS, or <b>live integrations\
  \ like Granicus Customer Services</b>. The REST API can  provide this data with\
  \ or without Geometry as required. </p>\n<p><b><font size='4'>Description</font></b></p>\n\
  <p>This layer includes the UPRN (Unique Property Reference Number) of every address\
  \ in Dundee, plus information about the catchment schools for these addresses.</p>\n\
  <p><b>There are 4 records for each address </b>representing the 4 different types\
  \ of school catchments i.e.</p>\n<ul>  <li>Denominational      Primary</li>  <li>Non-denominational\
  \      (Roman Catholic) Primary</li>  <li>Denominational      Secondary</li>  <li>Non-denominational\
  \      (Roman Catholic) Secondary</li> </ul>\n<p><b><font size='4'>Privacy</font></b></p>\n\
  <p>This layer does not contain any personal information, so there are no pupil names\
  \ etc. All addresses are included, whether or not there are any pupils at that address.</p>\n\
  <p><b><font size='4'>Copyright Limitations</font></b></p>\n<p>Due to copyright reasons\
  \ there are no actual addresses in this data, so there are no building numbers,\
  \ streetnames, postcodes etc. If actual addresses are required these can be obtained\
  \ from other products and services such as the Council's Corporate Address Gazetteer\
  \ (CAG), the One Scotland Gazetteer (OSG) or Ordnance Survey's AddressBase, NGD\
  \ and OS Places API.</p>\n<p>The UPRNs and UPRN locations in this layer can also\
  \ be found in the Ordnance Survey <a href='https://www.ordnancesurvey.co.uk/products/os-open-uprn'\
  \ target='_blank' rel='nofollow ugc noopener noreferrer'>Open UPRN</a> product,\
  \ </p>\n<p><b><font size='4'>Updates</font></b></p>\n<p>This data is updated each\
  \ night with the latest UPRNs from the Council's Corporate Address Gazetteer (CAG).\
  \ Catchment data are taken from the Council's current catchment boundaries layer\
  \ (&quot;<a href='https://data.dundeecity.gov.uk/maps/ae3e2864981c4e268bfe37b641321e6c/about'\
  \ target='_blank' rel='nofollow ugc noopener noreferrer'>SchoolsAndCatchments -\
  \ Current</a>&quot;) which is updated as required. This typically happens around\
  \ October or November before enrolment starts for the next school year each year.\
  \ The data may therefore reflect the catchments that are due to take effect at the\
  \ start of the next school year. For more details on the catchment data please see\
  \ the the Council's current catchment boundaries layer (&quot;<a href='https://data.dundeecity.gov.uk/maps/ae3e2864981c4e268bfe37b641321e6c/about'\
  \ target='_blank' rel='nofollow ugc noopener noreferrer'>SchoolsAndCatchments -\
  \ Current</a>&quot;)</p>\n<p><b><font size='4'>Integration tips</font></b></p>\n\
  <p>To see how to query this layer please see the '<a href='https://data.dundeecity.gov.uk/datasets/dundeecity::uprns-with-school-catchments/api'\
  \ target='_blank' rel='nofollow ugc noopener noreferrer'>API Explorer</a>' or, \
  \ to retrieve json with just the school names for a UPRN , please see the example\
  \ below:<br /><a href='https://services.arcgis.com/GlZ1P6ksdiXNYhvC/arcgis/rest/services/UPRNs_with_school_catchments/FeatureServer/0/query?where=uprn=%27000117117191%27&amp;outFields=school&amp;returnGeometry=false&amp;f=pJSON'\
  \ target='_blank' rel='nofollow ugc noopener noreferrer'>https://services.arcgis.com/GlZ1P6ksdiXNYhvC/arcgis/rest/services/UPRNs_with_school_catchments/FeatureServer/0/query?where=uprn=%27000117117191%27&amp;outFields=school&amp;returnGeometry=false&amp;f=pJSON</a></p>\n\
  <p>Please also note that UPRN is a text field that must contain 12 digits with leading\
  \ zeroes, and must be enclosed in single quotes. These quotes and other special\
  \ characters can be used in plain text as shown above, or <a href='https://www.w3schools.com/tags/ref_urlencode.ASP'\
  \ target='_blank' rel='nofollow ugc noopener noreferrer'>URLencoded</a> as shown\
  \ in the API explorer.</p>\n<p><font size='4'><b>Related Data</b></font></p>\n<p>Users\
  \ who wish to see catchment boundaries or identify the catchment area(s) for a location\
  \ described by XY coordinates may wish to use the &quot;<a href='https://data.dundeecity.gov.uk/maps/ae3e2864981c4e268bfe37b641321e6c/about'\
  \ target='_blank' rel='nofollow ugc noopener noreferrer'>SchoolsandCatchments -\
  \ Current</a>&quot; boundary layer on which this UPRN layer is based. This does\
  \ not contain any UPRN info, but it does provide a REST API and API explorer.<br\
  \ /></p>\n<p>Internal DCC GIS users may also use a version of this layer which includes\
  \ full CAG addresses:\_<a href='https://dundeecity.maps.arcgis.com/home/item.html?id=66d036430fa84339954240b1ec41c330'\
  \ target='_blank' rel='nofollow ugc noopener noreferrer'>CAG with school catchments</a>.\
  \ This is not available as open data for copyright reasons.</p>"
organization: Dundee City Council
original_dataset_link: https://data.dundeecity.gov.uk/datasets/dundeecity::uprns-with-school-catchments
records: null
resources:
- format: ARCGIS HUB DATASET
  name: Web Page
  url: https://data.dundeecity.gov.uk/datasets/dundeecity::uprns-with-school-catchments
- format: ARCGIS GEOSERVICE
  name: Esri REST
  url: https://services.arcgis.com/GlZ1P6ksdiXNYhvC/arcgis/rest/services/UPRNs_with_school_catchments/FeatureServer/0
- format: CSV
  name: CSV
  url: https://data.dundeecity.gov.uk/api/download/v1/items/e65abfd090bd4cd68d30af1a092e28c6/csv?layers=0
- format: GEOJSON
  name: GeoJSON
  url: https://data.dundeecity.gov.uk/api/download/v1/items/e65abfd090bd4cd68d30af1a092e28c6/geojson?layers=0
- format: ZIP
  name: Shapefile
  url: https://data.dundeecity.gov.uk/api/download/v1/items/e65abfd090bd4cd68d30af1a092e28c6/shapefile?layers=0
- format: KML
  name: KML
  url: https://data.dundeecity.gov.uk/api/download/v1/items/e65abfd090bd4cd68d30af1a092e28c6/kml?layers=0
schema: default
title: UPRNs with school catchments
---
