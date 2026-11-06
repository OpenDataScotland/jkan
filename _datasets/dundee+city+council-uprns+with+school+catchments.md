---
category:
- Arts / Culture / History
- Council and Government
- Education
- Housing and Estates
- Planning and Development
date_created: '2024-11-13'
date_updated: '2024-11-27'
license: https://www.nationalarchives.gov.uk/doc/open-government-licence/version/3/
maintainer: Dundee City Council
notes: '<p><span style=''font-size:large;''><strong>WARNING</strong></span></p>

  <p><span style=''background-color:rgb(255,255,0); font-size:large;''><strong>This
  data is provided here for specialist users only. </strong>The same information is
  available in a much more user-friendly format in the </span><a target=''_blank''
  href=''https://www.dundeecity.gov.uk/services-near-me'' rel=''nofollow ugc noopener
  noreferrer''><span style=''background-color:rgb(255,255,0); font-size:large;''><strong>Services
  near me</strong> </span></a><span style=''background-color:rgb(255,255,0); font-size:large;''>page
  on the main council website, and anyone interested in enrolling a child in school
  should see the page on </span><a target=''_blank'' href=''https://www.dundeecity.gov.uk/service-area/children-and-families-service/education/enrolment-in-primary-and-secondary-schools-in-dundee''
  rel=''nofollow ugc noopener noreferrer''><span style=''background-color:rgb(255,255,0);
  font-size:large;''><strong>Enrolment in Primary and Secondary Schools in Dundee</strong></span></a></p>

  <p><span style=''font-size:large;''><strong>Purpose</strong></span></p>

  <p>This map layer is provided here as a hosted feature layer that is intended for
  use in Geographical Information Systems (GIS) like ArcGIS, or <strong>live integrations
  like Granicus Customer Services</strong>. The REST API can provide this data with
  or without Geometry as required.</p>

  <p><span style=''font-size:large;''><strong>Description</strong></span></p>

  <p>This layer includes the UPRN (Unique Property Reference Number) of every address
  in Dundee, plus information about the catchment schools for these addresses.</p>

  <p><strong>There are 4 records for each address </strong>representing the 4 different
  types of school catchments i.e.</p>

  <ul><li>Denominational (Roman Catholic) Primary</li><li>Non-denominational Primary</li><li>Denominational
  (Roman Catholic) Secondary</li><li>Non-denominational Secondary</li></ul>

  <p><span style=''font-size:large;''><strong>Privacy</strong></span></p>

  <p>This layer does not contain any personal information, so there are no pupil names
  etc. All addresses are included, whether or not there are any pupils at that address.</p>

  <p><span style=''font-size:large;''><strong>Copyright Limitations</strong></span></p>

  <p>Due to copyright reasons there are no actual addresses in this data, so there
  are no building numbers, streetnames, postcodes etc. If actual addresses are required
  these can be obtained from other products and services such as the Council''s Corporate
  Address Gazetteer (CAG), the One Scotland Gazetteer (OSG) or Ordnance Survey''s
  AddressBase, NGD and OS Places API.</p>

  <p>The UPRNs and UPRN locations in this layer can also be found in the Ordnance
  Survey <a target=''_blank'' href=''https://www.ordnancesurvey.co.uk/products/os-open-uprn''
  rel=''nofollow ugc noopener noreferrer''>Open UPRN</a> product,</p>

  <p><span style=''font-size:large;''><strong>Updates</strong></span></p>

  <p>This data is updated each night with the latest UPRNs from the Council''s Corporate
  Address Gazetteer (CAG). Catchment data are taken from the Council''s current catchment
  boundaries layer ("<a target=''_blank'' href=''https://data.dundeecity.gov.uk/maps/ae3e2864981c4e268bfe37b641321e6c/about''
  rel=''nofollow ugc noopener noreferrer''>SchoolsAndCatchments - Current</a>") which
  is updated as required. This typically happens around October or November before
  enrolment starts for the next school year each year. The data may therefore reflect
  the catchments that are due to take effect at the start of the next school year.
  For more details on the catchment data please see the the Council''s current catchment
  boundaries layer ("<a target=''_blank'' href=''https://data.dundeecity.gov.uk/maps/ae3e2864981c4e268bfe37b641321e6c/about''
  rel=''nofollow ugc noopener noreferrer''>SchoolsAndCatchments - Current</a>")</p>

  <p><span style=''font-size:large;''><strong>Integration tips</strong></span></p>

  <p>To see how to query this layer please see the ''<a target=''_blank'' href=''https://data.dundeecity.gov.uk/datasets/dundeecity::uprns-with-school-catchments/api''
  rel=''nofollow ugc noopener noreferrer''>API Explorer</a>'' or, to retrieve json
  with just the school names for a UPRN , please see the example below:<br /><a target=''_blank''
  href=''https://services.arcgis.com/GlZ1P6ksdiXNYhvC/arcgis/rest/services/UPRNs_with_school_catchments/FeatureServer/0/query?where=uprn=%27000117117191%27&amp;outFields=school&amp;returnGeometry=false&amp;f=pJSON''
  rel=''nofollow ugc noopener noreferrer''>https://services.arcgis.com/GlZ1P6ksdiXNYhvC/arcgis/rest/services/UPRNs_with_school_catchments/FeatureServer/0/query?where=uprn=%27000117117191%27&amp;outFields=school&amp;returnGeometry=false&amp;f=pJSON</a></p>

  <p>Please also note that UPRN is a text field that must contain 12 digits with leading
  zeroes, and must be enclosed in single quotes. These quotes and other special characters
  can be used in plain text as shown above, or <a target=''_blank'' href=''https://www.w3schools.com/tags/ref_urlencode.ASP''
  rel=''nofollow ugc noopener noreferrer''>URLencoded</a> as shown in the API explorer.</p>

  <p><span style=''font-size:large;''><strong>Related Data</strong></span></p>

  <p>Users who wish to see catchment boundaries or identify the catchment area(s)
  for a location described by XY coordinates may wish to use the "<a target=''_blank''
  href=''https://data.dundeecity.gov.uk/maps/ae3e2864981c4e268bfe37b641321e6c/about''
  rel=''nofollow ugc noopener noreferrer''>SchoolsandCatchments - Current</a>" boundary
  layer on which this UPRN layer is based. This does not contain any UPRN info, but
  it does provide a REST API and API explorer.</p>

  <p>Internal DCC GIS users may also use a version of this layer which includes full
  CAG addresses:&nbsp;<a target=''_blank'' href=''https://dundeecity.maps.arcgis.com/home/item.html?id=66d036430fa84339954240b1ec41c330''
  rel=''nofollow ugc noopener noreferrer''>CAG with school catchments</a>. This is
  not available as open data for copyright reasons.</p>'
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
- format: ZIP
  name: Shapefile
  url: https://data.dundeecity.gov.uk/api/download/v1/items/e65abfd090bd4cd68d30af1a092e28c6/shapefile?layers=0
- format: GEOJSON
  name: GeoJSON
  url: https://data.dundeecity.gov.uk/api/download/v1/items/e65abfd090bd4cd68d30af1a092e28c6/geojson?layers=0
- format: KML
  name: KML
  url: https://data.dundeecity.gov.uk/api/download/v1/items/e65abfd090bd4cd68d30af1a092e28c6/kml?layers=0
schema: default
title: UPRNs with school catchments
---
