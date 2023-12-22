---
category:
- Council and Government
- Planning and Development
- Public Safety
date_created: '2021-06-11'
date_updated: '2023-11-07'
license: 'Custom licence: Other (Not Open)'
maintainer: SGN
notes: "<p>SGN create 4 separate data layers (by pressure tier) to depict the location\
  \ of their gas network:  LP           - Low Pressure (19 mbar - 75 mbar)  MP   \
  \      - Medium Pressure (75mbar - 2 bar)  IP            - Intermediate Pressure\
  \ (2 bar - 7 bar)  HP          - Regional High Pressure (&gt;7 bar)  In order to\
  \ assess the risk of planning applications affecting the gas infrastructure, there\
  \ is a requirement to buffer the above pipe network by different distances. The\
  \ Spatial Hub has done this and provides these buffered polygons as separate data\
  \ layers as follows:  HP buffer (75m either side of pipe - 150m total)  IP buffer\
  \ (25m either side of pipe - 50m total)  MP buffer (12.5m either side of pipe -\
  \ 25m total)  The gas network data is up to date at the time of publication, but\
  \ it is given without warranty as to the accuracy of the information shown.  Service\
  \ pipes, valves, siphons, sub-connections etc. are not shown but their presence\
  \ should be anticipated.  No liability of any kind whatsoever is accepted by SGN\
  \ or its agents, servants or sub-contractors for any error or omission.    Should\
  \ the user wish to excavate in the vicinity of pipelines, the User should visit\
  \ SGN via sgn.co.uk/Safety/Dig-safely for further information. SGN use an on-line\
  \ mapping system, accessible via the sgn.co.uk/Safety/Dig-safely web pages or linesearchbeforeudig.co.uk,\
  \ this process should be used to obtain up to date maps and safety information before\
  \ you excavate.  However if you need more information please contact our Safety\
  \ Admin team on 0800 912 1722 or by email: plantlocation@sgn.co.uk.  For the avoidance\
  \ of doubt, safe digging practices, in accordance with HS (G) 47, must be used to\
  \ verify and establish the actual position of mains, pipes, services and other apparatus\
  \ on site before any mechanical plant is used.  It is your responsibility to ensure\
  \ that this information is provided to all persons (whether direct labour or contractors)\
  \ working for you on or near gas apparatus.  Mains shown in the data are those owned\
  \ by SGN by virtue of being a licensed Gas Transporter (GT).  Gas pipes owned by\
  \ other GT\u2019s, or third parties, may also be present in the area and are not\
  \ shown in the data.  Information with regard to such pipes should be obtained from\
  \ the relevant owners</p>"
organization: SGN
original_dataset_link: ' https://data.spatialhub.scot/dataset/sgn_gas_network-sgn'
records: null
resources:
- format: WFS
  name: 'SGN: HP Pipes '
  url: https://geo.spatialhub.scot/geoserver/ext_sgn/wfs?service=wfs&typeName=ext_sgn:pub_sgnhp
- format: WFS
  name: 'SGN: IP Pipes '
  url: https://geo.spatialhub.scot/geoserver/ext_sgn/wfs?service=wfs&typeName=ext_sgn:pub_sgnip
- format: WFS
  name: 'SGN: LP Pipes '
  url: https://geo.spatialhub.scot/geoserver/ext_sgn/wfs?service=wfs&typeName=ext_sgn:pub_sgnlp
- format: WFS
  name: 'SGN: MP Pipes '
  url: https://geo.spatialhub.scot/geoserver/ext_sgn/wfs?service=wfs&typeName=ext_sgn:pub_sgnmp
- format: WFS
  name: 'SGN: HP Pipes Buffer'
  url: https://geo.spatialhub.scot/geoserver/ext_sgn/wfs?service=wfs&typeName=ext_sgn:pub_sgnhpbuffer
- format: WFS
  name: 'SGN: IP Pipes Buffer'
  url: https://geo.spatialhub.scot/geoserver/ext_sgn/wfs?service=wfs&typeName=ext_sgn:pub_sgnipbuffer
- format: WFS
  name: 'SGN: MP Pipes Buffer'
  url: https://geo.spatialhub.scot/geoserver/ext_sgn/wfs?service=wfs&typeName=ext_sgn:pub_sgnmpbuffer
schema: default
title: SGN Gas Network - Scotland
---
