'use strict';


Address
https://maps.googleapis.com/maps/api/directions/json?origin=75+9th+Ave+New+York,+NY&destination=MetLife+Stadium+1+MetLife+Stadium+Dr+East+Rutherford,+NJ+07073&key=API_KEY



startLat = routes[0].legs[0].end_location.lat;
startLng = routes[0].legs[0].end_location.lng;


endLat = routes[0].legs[0].start_location.lat;
endLng = routes[0].legs[0].start_location.lng;

midLat = ((startLat + endlat)/2);
midLng = ((startLng + endLng)/2);




{
    "geocoded_waypoints": [
        {
            "geocoder_status": "OK",
            "place_id": "ChIJyYfhZ79ZwokRMtXcL6CYxkA",
            "types": [
                "premise"
            ]
        },
        {
            "geocoder_status": "OK",
            "place_id": "ChIJvwJZrWH4wokRNBcFMQ0ohIE",
            "types": [
                "establishment",
                "point_of_interest",
                "stadium"
            ]
        }
    ],
    "routes": [
        {
            "bounds": {
                "northeast": {
                    "lat": 40.817133,
                    "lng": -73.99483219999999
                },
                "southwest": {
                    "lat": 40.7410712,
                    "lng": -74.0725334
                }
            },
            "copyrights": "Map data ©2018 Google",
            "legs": [
                {
                    "distance": {
                        "text": "9.4 mi",
                        "value": 15108
                    },
                    "duration": {
                        "text": "24 mins",
                        "value": 1445
                    },
                    "end_address": "1 MetLife Stadium Dr, East Rutherford, NJ 07073, USA",
                    "end_location": {
                        "lat": 40.8151285,
                        "lng": -74.07052139999999
                    },
                    "start_address": "75 9th Ave, New York, NY 10011, USA",
                    "start_location": {
                        "lat": 40.7428859,
                        "lng": -74.00583979999999
                    },
                    "steps": [
                        {
                            "distance": {
                                "text": "0.3 mi",
                                "value": 413
                            },
                            "duration": {
                                "text": "3 mins",
                                "value": 163
                            },
                            "end_location": {
                                "lat": 40.7410712,
                                "lng": -74.0015593
                            },
                            "html_instructions": "Head <b>southeast</b> on <b>W 16th St</b> toward <b>9th Ave</b>",
                            "polyline": {
                                "points": "artwFngubML]p@oB@Gt@}Bz@mCLc@pBoGv@aC"
                            },
                            "start_location": {
                                "lat": 40.7428859,
                                "lng": -74.00583979999999
                            },
                            "travel_mode": "DRIVING"
                        },
                        {
                            "distance": {
                                "text": "0.7 mi",
                                "value": 1170
                            },
                            "duration": {
                                "text": "5 mins",
                                "value": 309
                            },
                            "end_location": {
                                "lat": 40.7502803,
                                "lng": -73.99483219999999
                            },
                            "html_instructions": "Turn <b>left</b> onto <b>8th Ave</b>",
                            "maneuver": "turn-left",
                            "polyline": {
                                "points": "uftwFvltbM_Am@u@g@uBuAy@i@{@i@sBwA}@i@w@i@{BwAcAq@aAq@aC}Aw@i@eAq@{ByA{ByAMIq@e@y@i@{ByAs@c@gAu@cAq@u@k@"
                            },
                            "start_location": {
                                "lat": 40.7410712,
                                "lng": -74.0015593
                            },
                            "travel_mode": "DRIVING"
                        },
                        {
                            "distance": {
                                "text": "0.3 mi",
                                "value": 440
                            },
                            "duration": {
                                "text": "3 mins",
                                "value": 152
                            },
                            "end_location": {
                                "lat": 40.752204,
                                "lng": -73.99939189999999
                            },
                            "html_instructions": "Turn <b>left</b> onto <b>W 31st St</b>",
                            "maneuver": "turn-left",
                            "polyline": {
                                "points": "g`vwFtbsbM_FxOOl@oCfI"
                            },
                            "start_location": {
                                "lat": 40.7502803,
                                "lng": -73.99483219999999
                            },
                            "travel_mode": "DRIVING"
                        },
                        {
                            "distance": {
                                "text": "0.2 mi",
                                "value": 289
                            },
                            "duration": {
                                "text": "1 min",
                                "value": 40
                            },
                            "end_location": {
                                "lat": 40.7545404,
                                "lng": -73.9979209
                            },
                            "html_instructions": "Turn <b>right</b> onto the <b>Lincoln Tunnel</b> ramp to <b>New Jersey</b>",
                            "polyline": {
                                "points": "glvwFd_tbMiBiA{B}ACCIEGCICGCu@SKEMEMEMGMGKEIGKGKGGECAQK"
                            },
                            "start_location": {
                                "lat": 40.752204,
                                "lng": -73.99939189999999
                            },
                            "travel_mode": "DRIVING"
                        },
                        {
                            "distance": {
                                "text": "0.2 mi",
                                "value": 342
                            },
                            "duration": {
                                "text": "1 min",
                                "value": 31
                            },
                            "end_location": {
                                "lat": 40.7563822,
                                "lng": -73.9949785
                            },
                            "html_instructions": "Continue onto <b>NY-495 W</b>",
                            "polyline": {
                                "points": "{zvwF~usbMGIGMCIEIISEQEKCOCQCOIi@Iu@Ic@G[AKCGEOEMEMCICGGKEIGKIKKMMMOOk@o@IIGIIGGGECGCKCECECCAEAEAE?EAE?E?E?"
                            },
                            "start_location": {
                                "lat": 40.7545404,
                                "lng": -73.9979209
                            },
                            "travel_mode": "DRIVING"
                        },
                        {
                            "distance": {
                                "text": "0.9 mi",
                                "value": 1453
                            },
                            "duration": {
                                "text": "2 mins",
                                "value": 122
                            },
                            "end_location": {
                                "lat": 40.7631296,
                                "lng": -74.00948579999999
                            },
                            "html_instructions": "Keep <b>right</b> at the fork to stay on <b>NY-495 W</b><div style=\"font-size:0.9em\">Entering New Jersey</div>",
                            "maneuver": "fork-right",
                            "polyline": {
                                "points": "kfwwFrcsbMG?E?C@E@E@E@E@EBGBWNEBGDCBMLEDIJ?@IJADEFe@|@?BkBtDCBQ^ABABEFc@bAIROb@KXGPWx@Wx@Oj@Ib@G\\Kl@CVALCJCL{BzGoA~DoA|DK`@ABUt@[~@CH_@hAcMz`@"
                            },
                            "start_location": {
                                "lat": 40.7563822,
                                "lng": -73.9949785
                            },
                            "travel_mode": "DRIVING"
                        },
                        {
                            "distance": {
                                "text": "2.8 mi",
                                "value": 4516
                            },
                            "duration": {
                                "text": "5 mins",
                                "value": 285
                            },
                            "end_location": {
                                "lat": 40.7767179,
                                "lng": -74.042813
                            },
                            "html_instructions": "Continue onto <b>NJ-495 W</b>",
                            "polyline": {
                                "points": "qpxwFh~ubMsJpZsJpZgAdD[pAOv@Ij@E\\?@Ef@?\\Ax@Bh@?D?BB`@D\\BJBJ?D@DFVBFBJHZNb@Td@Z`@Z^hAx@JJl@f@^X`Ar@PN`@TnAh@l@TV@JFHDJFNFLHLHHFt@l@DDFDDBFBFBB@F?F@H?H@HAFAD?JCFAHCLEHEJEHGJIHIHKHKFKDMDMDMBOBK@M@Q@M?M?Q?MAMAOCMCMCKCKGMEKEIEIEIGGGIIIIEGGIEIEGEOGgAc@gHiCOEKEMCOEaEm@_@?[CM?S?S@QBSDODODMFMDMHML_@^KHINIJGLIPITUl@cIxUMV?BSj@_@lAi@hBEH?@s@bCg@dBQp@?BKXSp@Yt@Wt@_@bAsBhFO\\CHCDGPeBpEe@jAYr@eArCSh@Qf@M^Od@Qj@_ErOIXGXIXIXETADK`@I`@WbAK\\Ux@m@`Co@bCQp@Mh@Of@I\\I\\GNEPIZI\\Sr@Sp@CLEJ"
                            },
                            "start_location": {
                                "lat": 40.7631296,
                                "lng": -74.00948579999999
                            },
                            "travel_mode": "DRIVING"
                        },
                        {
                            "distance": {
                                "text": "0.3 mi",
                                "value": 435
                            },
                            "duration": {
                                "text": "1 min",
                                "value": 22
                            },
                            "end_location": {
                                "lat": 40.7797406,
                                "lng": -74.04597939999999
                            },
                            "html_instructions": "Keep <b>right</b> at the fork to continue on <b>NJ-3 W</b>, follow signs for <b>Secaucus</b>/<b>Garden State Parkway</b>",
                            "maneuver": "fork-right",
                            "polyline": {
                                "points": "oe{wFpn|bM[~@EHGNINGNKNINMPMPMLKNORIH}@`AwBxBWVURURe@^g@\\k@\\eAf@"
                            },
                            "start_location": {
                                "lat": 40.7767179,
                                "lng": -74.042813
                            },
                            "travel_mode": "DRIVING"
                        },
                        {
                            "distance": {
                                "text": "2.2 mi",
                                "value": 3561
                            },
                            "duration": {
                                "text": "2 mins",
                                "value": 141
                            },
                            "end_location": {
                                "lat": 40.8041562,
                                "lng": -74.0717843
                            },
                            "html_instructions": "Keep <b>left</b> to stay on <b>NJ-3 W</b>, follow signs for <b>Clifton</b>",
                            "maneuver": "keep-left",
                            "polyline": {
                                "points": "kx{wFjb}bMMJEDEBEBIDaA^k@Rw@V}Ab@iB\\qAXiB`@uCl@A?A?QDs@NSFuAXwBf@{@Za@Nm@T_@NYLi@VmAl@gAp@m@`@}@l@QPA@IDA@[XA@_@Ze@`@ONA@i@h@STu@v@eApA}@pAq@bAwAzBgC~DaBhCu@jAYd@UXYZo@hA{@pA_A~AsArB{@rAuAvBq@jAUZABA@qFjIe@t@mDpFOVcCvDgElGQVkCxDA@{BhDcD~Ew@lAqCnEyGzJ{BdDUZsAzB"
                            },
                            "start_location": {
                                "lat": 40.7797406,
                                "lng": -74.04597939999999
                            },
                            "travel_mode": "DRIVING"
                        },
                        {
                            "distance": {
                                "text": "0.2 mi",
                                "value": 374
                            },
                            "duration": {
                                "text": "1 min",
                                "value": 18
                            },
                            "end_location": {
                                "lat": 40.807415,
                                "lng": -74.07250909999999
                            },
                            "html_instructions": "Take the <b>NJ-120 N</b> exit",
                            "maneuver": "ramp-right",
                            "polyline": {
                                "points": "_q`xFrcbcMSBA?CBIFOLi@^SJSJOFQFSDODUD]Ba@@g@@_BFaFH"
                            },
                            "start_location": {
                                "lat": 40.8041562,
                                "lng": -74.0717843
                            },
                            "travel_mode": "DRIVING"
                        },
                        {
                            "distance": {
                                "text": "0.5 mi",
                                "value": 869
                            },
                            "duration": {
                                "text": "1 min",
                                "value": 39
                            },
                            "end_location": {
                                "lat": 40.8145647,
                                "lng": -74.06878929999999
                            },
                            "html_instructions": "Continue onto <b>NJ-120 N</b>",
                            "polyline": {
                                "points": "keaxFdhbcMc@@o@@i@AWA]Ag@GaAMuA_@kBk@s@UOGeA_@SIu@[i@Uc@SyAs@o@_@eBeAs@e@i@a@}C_CqBeBA?OM?AAA_@["
                            },
                            "start_location": {
                                "lat": 40.807415,
                                "lng": -74.07250909999999
                            },
                            "travel_mode": "DRIVING"
                        },
                        {
                            "distance": {
                                "text": "0.2 mi",
                                "value": 339
                            },
                            "duration": {
                                "text": "1 min",
                                "value": 17
                            },
                            "end_location": {
                                "lat": 40.8170874,
                                "lng": -74.0665298
                            },
                            "html_instructions": "Continue straight onto <b>Washington Ave</b>",
                            "maneuver": "straight",
                            "polyline": {
                                "points": "_rbxF|pacMm@c@}FcFi@g@SQkB_BA??AA?KK?AAAA?IIEE"
                            },
                            "start_location": {
                                "lat": 40.8145647,
                                "lng": -74.06878929999999
                            },
                            "travel_mode": "DRIVING"
                        },
                        {
                            "distance": {
                                "text": "0.2 mi",
                                "value": 358
                            },
                            "duration": {
                                "text": "1 min",
                                "value": 38
                            },
                            "end_location": {
                                "lat": 40.8143566,
                                "lng": -74.06479929999999
                            },
                            "html_instructions": "Turn <b>right</b> onto <b>Paterson Plank Rd</b>",
                            "maneuver": "turn-right",
                            "polyline": {
                                "points": "yacxFxbacMESAK?G?EBKBQPIFE@ALGPGxDyAp@YhAc@LEn@WHENEvAi@"
                            },
                            "start_location": {
                                "lat": 40.8170874,
                                "lng": -74.0665298
                            },
                            "travel_mode": "DRIVING"
                        },
                        {
                            "distance": {
                                "text": "184 ft",
                                "value": 56
                            },
                            "duration": {
                                "text": "1 min",
                                "value": 9
                            },
                            "end_location": {
                                "lat": 40.8139759,
                                "lng": -74.06522369999999
                            },
                            "html_instructions": "Turn <b>right</b> toward <b>N Connection Rd</b>",
                            "maneuver": "turn-right",
                            "polyline": {
                                "points": "wpbxF~w`cM^^HLFHFHPP"
                            },
                            "start_location": {
                                "lat": 40.8143566,
                                "lng": -74.06479929999999
                            },
                            "travel_mode": "DRIVING"
                        },
                        {
                            "distance": {
                                "text": "476 ft",
                                "value": 145
                            },
                            "duration": {
                                "text": "1 min",
                                "value": 19
                            },
                            "end_location": {
                                "lat": 40.81381340000001,
                                "lng": -74.06693179999999
                            },
                            "html_instructions": "Turn <b>right</b> onto <b>N Connection Rd</b>",
                            "maneuver": "turn-right",
                            "polyline": {
                                "points": "knbxFrz`cM@R@RDn@PtDDfA"
                            },
                            "start_location": {
                                "lat": 40.8139759,
                                "lng": -74.06522369999999
                            },
                            "travel_mode": "DRIVING"
                        },
                        {
                            "distance": {
                                "text": "0.2 mi",
                                "value": 348
                            },
                            "duration": {
                                "text": "1 min",
                                "value": 40
                            },
                            "end_location": {
                                "lat": 40.8151285,
                                "lng": -74.07052139999999
                            },
                            "html_instructions": "Continue straight onto <b>Rd D</b>",
                            "maneuver": "straight",
                            "polyline": {
                                "points": "imbxFheacMFfA@X?R?D?HAHAH?FCJAHCFCJCFS^Yf@Yp@_@|@ABO\\CHg@hAEJCFAFCFQb@Q`@AH?BAB?DGRIRGTCJ"
                            },
                            "start_location": {
                                "lat": 40.81381340000001,
                                "lng": -74.06693179999999
                            },
                            "travel_mode": "DRIVING"
                        }
                    ],
                    "traffic_speed_entry": [],
                    "via_waypoint": []
                }
            ],
            "overview_polyline": {
                "points": "artwFngubMjJwYkQkLyViPuFsD{ByAyB}AoFfQoCfIiBiA_CaBQIsAa@w@[m@]KGQKGIKWO]S_Aa@sCS_ASm@_@m@yB_C_@OUIWAW@WFk@Zi@j@gDtG[n@m@vA[|@_@jAg@dBQ`AOdAEX_ChHmDbLuAhEwXl|@{Lv_@k@hCOhAEh@AvAFtALz@Pp@X~@Td@Z`@Z^hAx@x@r@`BlAr@d@|B~@b@Hr@^rAdA\\P\\B`@Aj@Oj@]RUPWTy@Hy@A{@Mw@Wo@[e@e@]iBw@qIyCqEs@{@Ca@?e@DaAX[Nm@l@g@r@Sf@yIfWaAtCcBxFeAtDeB`FyHzRyBdGa@pAiElPa@bBo@lCyD~NwAlFo@dBg@~@u@`AoExEiB~AsAz@eAf@MJKHOHmBr@uCz@{LfCUD}Cp@wBf@{@ZoAd@y@\\wBdAuBrAoA~@i@b@wAnAk@j@iAlAcCbDiC~DyHzLo@t@kBzCeH~KkAlBeMrR{I|M}CpE}BjD{ElHqCnEyGzJ{BdDiBvCUBMJy@l@g@VeAZs@HiABuKTaACeAIaAMuA_@_DaAiBq@_Bq@}BgAuCeB}AgA}C_CqBeBQMoAcAgL}JQQKIKYASBQBQPIHGjGcCpCgAfBo@h@l@NRPP@RFbAV|FHzBCd@Mh@kA`CiBnEi@vAAFGXUt@"
            },
            "summary": "NJ-495 W and NJ-3 W",
            "warnings": [],
            "waypoint_order": []
        }
    ],
    "status": "OK"
}




Lat&long
https://maps.googleapis.com/maps/api/directions/json?origin=47.618271,-122.351863&destination=47.307598,-122.228039&key=API_KEY


{
    "geocoded_waypoints": [
        {
            "geocoder_status": "OK",
            "place_id": "ChIJQ9RIh08VkFQRr56mUGz1H3s",
            "types": [
                "bus_station",
                "establishment",
                "point_of_interest",
                "transit_station"
            ]
        },
        {
            "geocoder_status": "OK",
            "place_id": "ChIJh7bDGXBYkFQRsGwYx2D-KxE",
            "types": [
                "establishment",
                "point_of_interest",
                "school"
            ]
        }
    ],
    "routes": [
        {
            "bounds": {
                "northeast": {
                    "lat": 47.6185885,
                    "lng": -122.2280245
                },
                "southwest": {
                    "lat": 47.2883085,
                    "lng": -122.3518533
                }
            },
            "copyrights": "Map data ©2018 Google",
            "legs": [
                {
                    "distance": {
                        "text": "30.1 mi",
                        "value": 48427
                    },
                    "duration": {
                        "text": "39 mins",
                        "value": 2323
                    },
                    "end_address": "113 E Main St, Auburn, WA 98002, USA",
                    "end_location": {
                        "lat": 47.3074205,
                        "lng": -122.2280245
                    },
                    "start_address": "Denny Way & 2nd Ave N, Seattle, WA 98121, USA",
                    "start_location": {
                        "lat": 47.6185885,
                        "lng": -122.3518533
                    },
                    "steps": [
                        {
                            "distance": {
                                "text": "1.0 mi",
                                "value": 1532
                            },
                            "duration": {
                                "text": "6 mins",
                                "value": 359
                            },
                            "end_location": {
                                "lat": 47.6185104,
                                "lng": -122.3314164
                            },
                            "html_instructions": "Head <b>east</b> on <b>Denny Way</b> toward <b>3rd Ave</b><div style=\"font-size:0.9em\">Parts of this road may be closed at certain times or days</div><div style=\"font-size:0.9em\">Pass by Wells Fargo Bank (on the right)</div>",
                            "polyline": {
                                "points": "eosaH`zwiV@uA?mB?eB?_@?gC?g@?kA@aA?sAAk@?eA?g@@yA?oB?Q@{@?m@?W?m@?Y?w@?gA?y@?e@?eA?cA?_A@yC?u@@cDAoH@}A?sC?W?[@aB?eCC_D?{ADyAAe@?k@?_@?wB?{@?q@@kA?mA@m@?_A?c@?cD"
                            },
                            "start_location": {
                                "lat": 47.6185885,
                                "lng": -122.3518533
                            },
                            "travel_mode": "DRIVING"
                        },
                        {
                            "distance": {
                                "text": "0.1 mi",
                                "value": 169
                            },
                            "duration": {
                                "text": "1 min",
                                "value": 74
                            },
                            "end_location": {
                                "lat": 47.6175285,
                                "lng": -122.3296989
                            },
                            "html_instructions": "Turn <b>right</b> onto <b>Yale Ave</b><div style=\"font-size:0.9em\">Pass by SpringHill Suites by Marriott Seattle Downtown/South Lake Union (on the left)</div>",
                            "maneuver": "turn-right",
                            "polyline": {
                                "points": "unsaHjzsiVTk@Vk@bAoBx@cBVk@"
                            },
                            "start_location": {
                                "lat": 47.6185104,
                                "lng": -122.3314164
                            },
                            "travel_mode": "DRIVING"
                        },
                        {
                            "distance": {
                                "text": "0.1 mi",
                                "value": 220
                            },
                            "duration": {
                                "text": "1 min",
                                "value": 27
                            },
                            "end_location": {
                                "lat": 47.6156872,
                                "lng": -122.3294463
                            },
                            "html_instructions": "Take the <b>Interstate 5 S</b> ramp",
                            "polyline": {
                                "points": "qhsaHrosiVL]FKDINM@AJIFCFC@?DCLCLADAB?B?B?D@XBfAPbARZFPBB?B?LG"
                            },
                            "start_location": {
                                "lat": 47.6175285,
                                "lng": -122.3296989
                            },
                            "travel_mode": "DRIVING"
                        },
                        {
                            "distance": {
                                "text": "11.6 mi",
                                "value": 18651
                            },
                            "duration": {
                                "text": "11 mins",
                                "value": 685
                            },
                            "end_location": {
                                "lat": 47.4642007,
                                "lng": -122.2664857
                            },
                            "html_instructions": "Merge onto <b>I-5 S</b>",
                            "maneuver": "merge",
                            "polyline": {
                                "points": "a}raH`nsiVTD~A`@hA^^LB@ZJDBf@NpBn@bCp@d@LxA`@FBF@vC|@h@PZHHBZF@?RD\\Fb@DV@~@?|@ANAnAGd@Eb@IVIDC`@OFCNGBAb@Uj@YDCFCNKTMjAu@dAw@vDcDvDcDbCqBbCqB`@[r@m@b@_@PQHMPSV[LOX_@TYl@y@zAyBf@s@@An@}@jCqDhBgCx@eAp@{@X]TUb@c@PO@AFE`@]d@]d@[f@WFC@A`@Qf@St@Y^K`@Kz@QZE\\Ep@GvAEd@?R@n@@h@D`ADz@LhD`@|Fv@@?D@B?z@Lb@Dd@B^B\\@X?j@Af@C\\AVCRC`@E`@Gb@IhDm@hCa@~@MpAMdAKTAP@XAV?~@E~@C|EUdDOlCS~@ItAQxASxGiAnASfAMv@IZCdAElA?|@Hh@BZBp@Hz@Ln@HvCf@`@Fj@Hx@HjAHr@D|@DfABR@lCFp@BB?\\@n@B`ABP@D?@?h@@~ADB?R?D?rABB?X@J?fA@`A@^@@@B?F?@?rCPdAJxANB@hBP`IbAnAPx@JbALxARvFt@lC`@TBh@H`ANz@J~APz@HrBJ`A@t@?d@?b@CdAIh@GJARCf@If@K`@Kp@W`Bi@|@_@j@UjAs@`BgAjA{@|BaBVQp@c@bAm@`Ai@nAm@t@a@l@[XM\\QJIRK@?RMd@WjAi@\\QFC?ABA|@g@fAs@jAcAf@g@XYTU^g@d@s@d@}@bAoBrDsH@AnDwH@AhCmFl@gA|@wA^m@T[|B{CBEfAgAp@q@~BcCrAmAhAcApCmCd@e@^_@\\]~G_HfCmCRSPSNOLQ\\a@`AmAv@}@~@iAr@aA^e@zNkR`@e@l@s@j@m@FGRQd@c@^[PMXQ^WRMTMLIPGd@QzAo@fBs@nEcB|B_Aj@UfE_Bv@]v@[|GkC~H}CfGqBlFwAvDy@pBa@v@WtDaAnA_@TIxHwCjEcBjAc@zB{@rAk@lB}@x@a@hAq@v@e@nAy@tCqBlSsNv@k@n@a@r@g@rByAjFuD`EwC?APK@?pLmItAcAb@]nAcA@ABC|AsA\\_@j@i@d@a@NMrAqAzB{BxC}CbCeCvA}AXYfAgAnAsAX_@BCBCBE@A~@aAzAaBjDsDjIyJ~AsBFKzBsCvBsCtGuIzBwCr@s@h@e@j@c@z@g@h@Wn@U`AS~@Kt@Cr@?r@Fz@N@?@?LDb@Lj@RNHJF\\P@@l@\\PPDDPNXVJLv@z@pG`JtE|GLTVZJLjAzAdAvAf@p@?@PR@?z@jAn@x@h@h@pAfA@@@@hAp@~@f@d@Nf@Nt@Rx@Jh@DbABZ?z@CpAQh@OVG`A]rAm@l@WbAk@d@UxAq@hB{@BAzAq@zA{@fEiBpAg@bA]@?vAa@dBa@dCg@fEs@JC`C[lAUxEy@~E_AhB_@jEiAjF{AHEDADCx@Y@?\\OzB{@"
                            },
                            "start_location": {
                                "lat": 47.6156872,
                                "lng": -122.3294463
                            },
                            "travel_mode": "DRIVING"
                        },
                        {
                            "distance": {
                                "text": "12.5 mi",
                                "value": 20140
                            },
                            "duration": {
                                "text": "12 mins",
                                "value": 694
                            },
                            "end_location": {
                                "lat": 47.2904343,
                                "lng": -122.3065824
                            },
                            "html_instructions": "Keep <b>right</b> to stay on <b>I-5 S</b>",
                            "maneuver": "keep-right",
                            "polyline": {
                                "points": "gju`HpdgiV`@Q`C}@xAm@ZONEHERIRI?AXK|@a@ZKh@STI\\KBAVKp@QJCXITIjAUd@Kb@I`AOh@IrAQx@IjAIv@E~@E@?t@?F?z@Af@?^?v@@P?|@Db@BrBNp@Dt@Hd@H`@Ff@Fv@Pf@HbAVpBj@hJnCrHzBpDfAdAXz@T^JzCv@dAVp@Nv@NhEv@D?f@H`BTrBXtMfBhBTpFt@fBTnC^pBV|@JhOpBLBz@Lf@F\\FZFbATnA^nAd@fAh@t@b@HDt@h@VRXRf@b@TPt@r@t@x@p@v@v@dAJLRZRXZj@d@z@b@z@zAzCZl@x@dBHN~@fB|AnCrBjDjAhBbA~A|BtDhDlFnC`EVb@vBhDhDtFpGpJl@v@tA`BhAlAp@n@`A|@^ZnA`AhCfBnCxAtAr@xAl@rAb@jAZlAVjATzCf@v@LnHnAjJ`BpEr@tB`@pDj@zARjALtALzBL|ALlBHlBFdCHrABj@?Z@~BA~@A`AAtAGxCQf@EfGg@lAKzCYfPoAvSaBxBSxBQvIo@|@GbEY~@GrDO^Cl@CjAClBCvAAjBBvABxABvAH`BFjAJ~@Hj@DbALn@Hf@Hj@J^Hd@Jt@JZHf@Jf@Hp@Jh@Fl@Fp@Jh@Fp@Fr@Jj@Fh@Jb@Fd@Hd@Hp@LlATlEt@lBZpATnBZpAT|Bb@hBXv@JpAVx@L|@Pz@LjATbC`@`C^lBZpLpBjHhA`C`@vCd@t@NnB`@v@Px@Lv@LbBXdAPr@J|AT`Dh@t@Lv@Ll@JlAPrBLd@@hADnA@r@?Z?`ACb@Ar@Ev@ElBO`@E|@KpASlASRExA[hBc@^Kj@S`A_@rAi@dAc@fBs@~@_@~@_@bCaAzAm@ZK^OZKf@Sj@Sb@MjAYtAYr@Mh@KfAMpAOr@Gd@EfAGTA|@At@Cn@?rA?jABn@@~@DjADvAFxAD~@DrBHlADrBH~BJfAFdADx@BpOh@zAFbABhDNrAFzCJfCHxAFbBJX@bBD|@BnCLlAFvAFz@Dj@B~AD`@Bj@@jADdAD|AFrAHrAJdCTtALrAPx@Jt@Jt@NrCf@ZHx@Rj@NzBn@`Bd@`Cv@h@P|DjAbAXjCz@xN|DzAd@dHxBlA\\l@Nn@RxAd@x@XzGvBxAb@fBj@t@R`Cn@t@Rdf@hLr@Nd@Lde@vKxD`A|NfDVFTDTFH@"
                            },
                            "start_location": {
                                "lat": 47.4642007,
                                "lng": -122.2664857
                            },
                            "travel_mode": "DRIVING"
                        },
                        {
                            "distance": {
                                "text": "4.0 mi",
                                "value": 6363
                            },
                            "duration": {
                                "text": "4 mins",
                                "value": 259
                            },
                            "end_location": {
                                "lat": 47.3031595,
                                "lng": -122.2379161
                            },
                            "html_instructions": "Take exit <b>142A</b> to merge onto <b>WA-18 E</b> toward <b>Auburn</b>",
                            "maneuver": "ramp-right",
                            "polyline": {
                                "points": "els_Hb_oiVNZBBFBb@LDBl@Nf@Lb@L\\JFBl@RfAf@LFJJHHFJHPFRBLBPBN@R?RATATERGXKPILILIHEDIDOFKBI?I?SAKCGCIEKKKMIKEOK[EUC_@A_@Ao@?CAEIW@eB?kA?K?mB?m@@_G@wFAqBEuAIeBM_BMkASaBc@{BI_@Qq@Uw@k@cB]}@aCsF_FaL_@{@yC_H{AkD{@mBwAaDwAaDm@sAYo@_AuBu@eBcAaCgAgCiAkCaEkJwDgJ{FwMoBkEeG{MyAaDUi@Uk@Wo@Um@Mc@Oc@Mc@IWWaAa@eBYmAEUEWKs@QyAMiAGi@CYC[Ca@Cc@Cc@Co@A]A[AY?QA]?_A?_A?y@Bu@@s@Bw@Bi@Ds@HmATcDF}@Be@Bg@@o@@m@@k@?g@?i@Aw@Ao@C}@E_CAeAA{@Ai@?w@@{@@m@?C@o@D_ABg@@[Bc@BWBa@Da@B_@Hw@dAkIZ{BXcCNmAJs@Hq@PkAf@aEHo@Fi@Dk@Fo@FaAFaAD{@@k@@y@By@?q@?q@?aAAaAAy@m@_RScHIkCCi@G{AU}HOmFGoAGeBYkJGaBGcCAWCu@"
                            },
                            "start_location": {
                                "lat": 47.2904343,
                                "lng": -122.3065824
                            },
                            "travel_mode": "DRIVING"
                        },
                        {
                            "distance": {
                                "text": "0.3 mi",
                                "value": 468
                            },
                            "duration": {
                                "text": "1 min",
                                "value": 48
                            },
                            "end_location": {
                                "lat": 47.3031198,
                                "lng": -122.232613
                            },
                            "html_instructions": "Take the <b>C St SW</b> exit",
                            "maneuver": "ramp-right",
                            "polyline": {
                                "points": "w{u_H~qaiVFO?C?AC{CAkB?]@QBM@IBIDIDIDGFIHEJEHCFCJEHGJKHKFMFODQBQ@O?UASCQCOGSGOIMMSUa@S_@KWIYI]E_@?ACUCYCk@?}@Ac@"
                            },
                            "start_location": {
                                "lat": 47.3031595,
                                "lng": -122.2379161
                            },
                            "travel_mode": "DRIVING"
                        },
                        {
                            "distance": {
                                "text": "0.3 mi",
                                "value": 508
                            },
                            "duration": {
                                "text": "1 min",
                                "value": 66
                            },
                            "end_location": {
                                "lat": 47.3075249,
                                "lng": -122.2329927
                            },
                            "html_instructions": "Turn <b>left</b> onto <b>C St SW</b>",
                            "maneuver": "turn-left",
                            "polyline": {
                                "points": "o{u_Hxp`iVA]MBk@HsAVu@Re@NWHcA\\o@R]BOFe@BWBW?k@@m@Ci@CiAQqAOUC[Aa@A"
                            },
                            "start_location": {
                                "lat": 47.3031198,
                                "lng": -122.232613
                            },
                            "travel_mode": "DRIVING"
                        },
                        {
                            "distance": {
                                "text": "0.2 mi",
                                "value": 376
                            },
                            "duration": {
                                "text": "2 mins",
                                "value": 111
                            },
                            "end_location": {
                                "lat": 47.3074205,
                                "lng": -122.2280245
                            },
                            "html_instructions": "Turn <b>right</b> onto <b>W Main St</b><div style=\"font-size:0.9em\">Destination will be on the left</div>",
                            "maneuver": "turn-right",
                            "polyline": {
                                "points": "_wv_Hds`iV@gB@Y?M@I@IDe@BSBS@U?A?U@[?_@?q@AkF?oE?e@CqB"
                            },
                            "start_location": {
                                "lat": 47.3075249,
                                "lng": -122.2329927
                            },
                            "travel_mode": "DRIVING"
                        }
                    ],
                    "traffic_speed_entry": [],
                    "via_waypoint": []
                }
            ],
            "overview_polyline": {
                "points": "eosaH`zwiVHgmA@iHCeHDuDAiF@gG@uHjDkHr@_Bd@]x@OjBVpB^F?LGTDhD`Ab@NhA^zGnBpIdCp@L`ALvA@|CKhAO\\M|@]tAs@xBsAxPqN|F{EdAoAjBcCtDmF`J{LdBgBpAcAtAw@`CaAxCo@nAM|BEnDNjPvBfCNjCGnBUlEw@hEo@vCYf@?pDKbKe@lE]nDe@hJ}A~BW`BIjCHdAFtHhAlAPdCRlEP`FLxGP~EFdGVlGn@nOnBtNnBfGv@z@HtDLzA?hBMpBWhAWrCaAhBu@lD{BrGsE|JmF`EqBhC_BbD{CdA{AhBmDdJmRjCoFjB_DvDkFlIkI`HwGxM_NlAwAlFwGjRkVlBkBjBsAhAm@xLyEhLsEtIgD~H}CfGqBdLqChDy@dGaBnIaDfNoFfD_B`CwAj\\kUbMyI|UwPtBcBjDaDdG}FnK{K~FmGfGuGjLmNpOiSnDkEtAiAdB_ApBi@tBOfBF~@NlBp@j@ZvAdAd@d@v@z@pG`JbFrHb@h@xDfFhDbEtAjAhCxAlA^nB^lBHvACzBa@xAe@`CeAlHoD~As@zA{@fEiBtCeAxAa@jFiArEw@nEq@xLyBtHiBtFaBfA_@lMeFzEmBjBk@fCm@tDo@lC[bCO~BEzD?fFXnD`@jEz@`]~J|HrBvBf@`GfAbGx@x[hEx]vE~A\\~CdA|BlA~@n@nB|AjBlBhB|BnAnB`E`IbAtB|CvF`KjPxHnLnClEhDtFpGpJbCxCzB|B`BxAxEhDdFlClDpAxCr@nQzCdZbFfD`@pEZjEVrFPzGB`CCnFYxOsArl@wExSyAlI[dEEbEF~I`@~Ef@zHvAvJjAtQ|CpKjBlHjAhIvAl]vF~LxBlGfAbRvCxCNxCFtDEzFa@pFy@bE_AjA_@bIaD~MkFnAa@`Ds@vFw@vDWvFElRn@vb@~A|m@~B~EPpDPxE`@xGv@~GtAjK|CvLrDtQbFrJvCpFbBrOzEvDbAxg@xLdl@fN`Q|DX\\JF~Bn@vBp@tAn@TT\\~@HhACj@Ml@i@v@k@Vs@Ei@c@O[Qq@GsBK]@qD@gL?iJO{D[kDw@}E[qAaA{C_LoWiK{UkNw[yJsUkJcTkKsUkAeDqAcFq@oDk@gFYiGAoDH{Eh@oIP{DBkDMeHEcFD}CNgDP{B|Dc[~@gI\\oFFqECoFeCqw@q@wTEmAFSEgHJs@Xe@f@STMTWXaACkA]aAcAmBYyAKyCCaAy@LiCj@}@XsBp@m@JaCHwAG{Ca@q@Ea@A@gB@g@BSNcB@sAAsOCqB"
            },
            "summary": "I-5 S",
            "warnings": [],
            "waypoint_order": []
        }
    ],
    "status": "OK"
}