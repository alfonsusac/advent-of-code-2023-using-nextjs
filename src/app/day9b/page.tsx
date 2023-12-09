const sample1 = `0 3 6 9 12 15
1 3 6 10 15 21
10 13 16 21 30 45`

const real = `-7 4 41 121 272 539 997 1790 3238 6096 12113 25120 52964 110690 225447 443645 840883 1535008 2702137 4594155 7553340
4 6 15 32 56 97 215 608 1782 4848 12001 27235 57322 113013 210281 371191 623616 998482 1522475 2203130 3001892
1 14 30 60 127 259 482 812 1241 1708 2047 1924 854 -1364 -2779 6693 61773 262974 871468 2514024 6601925
6 11 22 52 122 270 570 1162 2299 4438 8451 16122 31239 61800 124158 250420 501360 989250 1920158 3677323 6993968
5 7 20 59 158 375 798 1567 2933 5377 9809 17858 32248 57231 99015 166082 269237 421163 635178 922797 1289594
0 -3 -6 -7 1 43 201 703 2093 5515 13138 28727 58310 110773 197987 333665 529470 785825 1073258 1297757 1240279
4 16 31 51 77 110 165 305 716 1872 4881 12159 28649 63886 135307 273317 528748 983488 1765211 3067307 5175293
28 42 56 70 84 98 112 126 140 154 168 182 196 210 224 238 252 266 280 294 308
14 30 55 105 221 486 1057 2232 4581 9179 17987 34432 64237 116546 205378 351432 584260 944840 1488635 2289343 3443761
11 22 37 68 148 338 743 1559 3190 6514 13460 28214 59658 126174 264919 549437 1122545 2256574 4461315 8672808 16575204
13 16 35 83 171 318 572 1047 1989 3900 7783 15648 31591 64129 131249 271201 565159 1183779 2480632 5175309 10704255
-7 -11 -2 41 146 354 734 1409 2595 4667 8313 14965 27979 55581 117567 259445 580783 1290395 2812622 5992175 12490570
8 7 5 17 83 276 712 1579 3222 6366 12646 25770 53931 114643 244277 516741 1079964 2226889 4532683 9117139 18139459
25 41 76 150 290 533 930 1551 2491 3877 5876 8704 12636 18017 25274 34929 47613 64081 85228 112106 145942
21 50 90 137 187 236 280 315 337 342 326 285 215 112 -28 -209 -435 -710 -1038 -1423 -1869
14 22 37 55 73 93 126 196 344 632 1147 2005 3355 5383 8316 12426 18034 25514 35297 47875 63805
9 11 21 58 153 364 817 1783 3810 7966 16336 33094 66812 135287 275234 560945 1138767 2288413 4528199 8789922 16701011
8 14 35 91 217 469 946 1850 3620 7208 14641 30168 62576 129773 267707 547650 1110014 2231708 4462709 8905935 17791177
8 19 38 65 93 119 179 422 1244 3509 8890 20369 42941 84573 157475 279746 477464 787295 1259702 1962841 2987237
10 29 55 97 174 315 559 955 1562 2449 3695 5389 7630 10527 14199 18775 24394 31205 39367 49049 60430
11 21 37 74 173 415 947 2045 4251 8633 17229 33748 64613 120443 218083 383303 654299 1086141 1756325 2771598 4276237
3 13 33 63 103 153 213 283 363 453 553 663 783 913 1053 1203 1363 1533 1713 1903 2103
7 9 17 31 51 77 109 147 191 241 297 359 427 501 581 667 759 857 961 1071 1187
-8 -2 22 78 200 459 982 1972 3727 6652 11253 18096 27698 40263 55025 68607 71081 37078 -92913 -449054 -1297721
8 0 -16 -37 -45 8 222 774 1952 4228 8438 16189 30679 58196 110656 209648 392576 721624 1296420 2271439 3879363
15 32 68 131 226 355 517 708 921 1146 1370 1577 1748 1861 1891 1810 1587 1188 576 -289 -1450
25 48 89 168 324 622 1160 2076 3555 5836 9219 14072 20838 30042 42298 58316 78909 105000 137629 177960 227288
6 6 14 56 182 492 1191 2686 5741 11717 22951 43393 79771 143892 257421 462023 840872 1563564 2977624 5789534 11411748
6 24 58 127 264 524 1003 1871 3422 6144 10812 18607 31264 51252 81989 128095 195686 292712 429342 618399 875848
2 15 35 78 172 354 662 1121 1734 2511 3615 5798 11471 27026 67417 164495 381118 833495 1724359 3389070 6355154
10 12 13 25 76 226 607 1493 3403 7237 14442 27202 48643 83041 136018 214708 327872 485938 700939 986319 1356574
12 23 47 90 151 215 256 260 283 567 1743 5149 13278 30341 62878 120271 214902 361551 575439 868084 1239849
10 15 30 57 98 155 230 325 442 583 750 945 1170 1427 1718 2045 2410 2815 3262 3753 4290
11 26 41 56 71 86 101 116 131 146 161 176 191 206 221 236 251 266 281 296 311
22 35 46 66 130 306 709 1536 3152 6272 12307 23995 46562 89916 172870 331321 634164 1214667 2333799 4511553 8805034
25 46 79 133 222 366 592 935 1439 2158 3157 4513 6316 8670 11694 15523 20309 26222 33451 42205 52714
17 20 21 20 17 12 5 -4 -15 -28 -43 -60 -79 -100 -123 -148 -175 -204 -235 -268 -303
18 43 75 114 167 264 488 1019 2192 4569 9025 16848 29853 50510 82086 128801 195998 290327 419943 594718 826467
3 12 29 49 67 78 77 59 19 -48 -147 -283 -461 -686 -963 -1297 -1693 -2156 -2691 -3303 -3997
16 18 27 47 82 147 282 565 1119 2107 3705 6042 9124 12866 17606 25912 47070 106096 258775 611721 1339290
0 3 17 65 177 391 757 1349 2311 4001 7367 14814 32041 71732 160796 354586 765302 1619811 3378481 6978415 14323381
23 29 34 55 137 371 930 2143 4633 9552 18955 36367 67613 122002 213983 365425 608715 990919 1579312 2468655 3790681
6 8 22 63 148 303 570 1007 1680 2669 4163 6831 12899 28894 72134 185261 467246 1136558 2654320 5954663 12859322
15 23 43 94 209 457 978 2031 4055 7743 14129 24688 41449 67121 105232 160281 237903 345047 490167 683426 936913
14 17 28 69 186 475 1114 2398 4773 8864 15506 25842 41681 66560 108425 185762 340856 667587 1368500 2869679 6046748
9 13 32 92 233 526 1101 2190 4207 7929 14928 28560 56075 112810 230009 468630 942605 1856477 3564216 6658388 12101797
9 20 37 61 93 143 246 494 1109 2617 6263 14965 35372 81983 184799 402632 845125 1708254 3331901 6296837 11597563
26 35 45 75 156 332 675 1333 2643 5374 11232 23881 50947 107835 224792 459621 919968 1801397 3450831 6469735 11878094
3 10 43 115 234 409 680 1189 2311 4863 10404 21640 42995 81600 149492 269125 487274 909039 1778256 3662348 7866979
8 20 47 109 238 481 909 1642 2922 5313 10206 20999 45662 101954 227416 497518 1057100 2172642 4316065 8294857 15448502
1 10 38 105 244 505 971 1807 3383 6558 13298 27941 59630 126725 264391 537055 1058045 2019482 3736406 6710193 11717576
17 26 30 30 35 64 155 385 898 1933 3850 7189 12904 23157 43537 88430 192703 435132 982422 2167632 4623809
12 18 34 66 122 222 413 804 1647 3502 7554 16231 34465 72352 150787 313173 648982 1339442 2742866 5548392 11043844
8 8 5 12 63 230 654 1597 3536 7347 14661 28505 54356 101720 186285 332571 576796 969382 1576129 2476582 3757505
-5 -3 13 58 155 341 677 1275 2366 4439 8494 16494 32207 62865 122579 239562 471597 939109 1894851 3867122 7944923
0 8 27 71 168 365 731 1353 2328 3768 5854 9010 14356 24821 47806 101363 228022 524654 1205019 2727507 6050558
5 1 7 46 164 442 1021 2158 4338 8483 16338 31194 59248 112115 211301 395803 734375 1344297 2418557 4262978 7343672
6 18 51 113 214 364 571 846 1227 1840 3022 5539 10941 22106 44036 84980 157972 282886 489125 819077 1332488
12 26 57 112 209 387 728 1412 2833 5815 11999 24548 49473 98181 192388 373478 719926 1378780 2620661 4932488 9168229
-4 -8 -4 25 106 281 627 1306 2657 5334 10477 19879 36097 62487 103290 164264 255098 396164 634330 1075909 1949772
11 29 51 76 110 173 301 545 985 1804 3505 7403 16584 37594 83203 176682 358135 693543 1287303 2299182 3966754
-1 8 25 54 103 181 295 447 631 830 1013 1132 1119 883 307 -755 -2481 -5084 -8815 -13966 -20873
-3 9 36 78 135 207 294 396 513 645 792 954 1131 1323 1530 1752 1989 2241 2508 2790 3087
6 18 35 62 114 237 541 1254 2830 6190 13265 28193 59904 127628 272524 582022 1240250 2631130 5545775 11591944 23985770
9 10 11 12 13 14 15 16 17 18 19 20 21 22 23 24 25 26 27 28 29
-2 -4 0 24 102 305 773 1775 3825 7912 15953 31656 62091 120417 230408 433667 800720 1447548 2559550 4425440 7484172
8 19 44 98 215 467 1013 2188 4632 9456 18458 34449 61841 107806 184569 313801 534712 918433 1592800 2783964 4884691
6 17 29 36 46 111 369 1090 2711 5832 11127 19108 29680 41463 50964 51899 35344 -8001 -81243 -166928 -199578
7 15 48 123 261 492 860 1428 2298 3688 6163 11232 22755 50057 114512 262985 594501 1311829 2818870 5900153 12043773
7 19 37 61 88 107 85 -64 -539 -1757 -4523 -10289 -21530 -42269 -78787 -140558 -241453 -401261 -647579 -1018127 -1563548
3 11 19 27 35 43 51 59 67 75 83 91 99 107 115 123 131 139 147 155 163
23 38 55 74 95 118 143 170 199 230 263 298 335 374 415 458 503 550 599 650 703
0 4 15 38 81 153 262 413 606 834 1081 1320 1511 1599 1512 1159 428 -816 -2733 -5510 -9363
5 4 3 2 1 0 -1 -2 -3 -4 -5 -6 -7 -8 -9 -10 -11 -12 -13 -14 -15
10 39 84 155 274 478 822 1382 2258 3577 5496 8205 11930 16936 23530 32064 42938 56603 73564 94383 119682
14 20 28 36 55 125 339 893 2188 5020 10925 22836 46429 93014 185790 373104 755626 1539976 3140634 6366800 12753827
7 11 23 61 149 317 601 1043 1691 2599 3827 5441 7513 10121 13349 17287 22031 27683 34351 42149 51197
2 17 46 106 224 434 774 1278 1968 2879 4203 6734 12972 29564 72323 176014 412622 924173 1979684 4070866 8068272
3 19 61 140 272 488 855 1511 2716 4924 8888 15821 27651 47427 79956 132778 217617 352481 564623 894618 1401858
28 46 83 153 270 448 701 1043 1488 2050 2743 3581 4578 5748 7105 8663 10436 12438 14683 17185 19958
2 -1 -4 -7 -10 -13 -16 -19 -22 -25 -28 -31 -34 -37 -40 -43 -46 -49 -52 -55 -58
12 23 35 45 59 111 289 776 1940 4546 10215 22320 47587 98760 198793 387149 728916 1327593 2342555 4012375 6685363
23 42 73 123 204 331 522 809 1270 2089 3642 6606 12140 22383 42006 82571 173309 385056 879027 1999545 4440608
13 11 13 39 126 334 753 1514 2825 5096 9307 17950 37204 81576 183196 409485 895339 1899903 3904777 7783021 15092756
-1 1 15 62 176 404 806 1455 2437 3851 5809 8436 11870 16262 21776 28589 36891 46885 58787 72826 89244
16 27 40 63 118 253 558 1186 2373 4439 7735 12479 18397 24053 25715 15562 -21010 -109277 -290622 -629929 -1225416
2 8 26 60 114 192 298 436 610 824 1082 1388 1746 2160 2634 3172 3778 4456 5210 6044 6962
19 35 66 119 208 362 632 1115 2035 3961 8310 18388 41372 91838 197700 409748 816363 1565447 2896138 5183485 8999936
20 44 88 168 310 553 949 1564 2501 4003 6763 12686 26541 59248 134022 297320 637610 1316534 2619234 5033652 9372744
1 6 14 28 51 86 136 204 293 406 546 716 919 1158 1436 1756 2121 2534 2998 3516 4091
1 12 27 53 120 288 653 1358 2617 4765 8374 14557 25775 47872 94901 199977 438633 977178 2169229 4741565 10139210
24 32 47 84 172 371 797 1657 3309 6394 12158 23227 45369 91245 187908 390970 810062 1652628 3296417 6405494 12110442
11 14 16 24 66 218 659 1783 4410 10145 21935 44885 87454 163330 294692 518407 898389 1550768 2695670 4764470 8622594
9 22 64 155 318 581 991 1660 2882 5392 10886 22999 49091 103521 213787 432294 859071 1685202 3274052 6308883 12052900
11 22 61 139 269 469 766 1217 1981 3506 6956 15133 34422 78851 178515 396967 866882 1862445 3944187 8243845 17014712
5 14 21 30 66 185 494 1205 2759 6078 13050 27461 56833 116134 235288 474105 951045 1896610 3748735 7317076 14056480
0 13 42 88 152 235 338 462 608 777 970 1188 1432 1703 2002 2330 2688 3077 3498 3952 4440
4 5 17 61 185 476 1077 2214 4246 7775 13913 24927 45702 86816 170589 342437 691652 1389193 2756793 5394389 10415995
17 28 46 87 182 384 785 1549 2967 5540 10096 17947 31092 52472 86283 138353 216589 331500 496802 730111 1053730
30 46 68 112 202 378 724 1425 2862 5754 11356 21722 40042 71062 121596 201139 322590 503094 765012 1137028 1655402
-2 -5 -1 29 122 346 831 1837 3895 8087 16574 33537 66765 130206 247892 459757 829988 1458683 2497737 4172037 6807220
22 30 48 100 224 484 1003 2030 4054 7978 15366 28776 52192 91568 155497 256018 409574 638134 970492 1443756 2105040
-3 1 8 15 32 105 360 1085 2877 6912 15476 33065 68676 140436 284532 571605 1135461 2221251 4263312 8006787 14692112
16 35 69 120 206 377 733 1441 2752 5039 8932 15755 28740 56011 117280 257930 577399 1284978 2808078 6000729 12542125
9 11 16 23 32 44 61 86 123 177 254 361 506 698 947 1264 1661 2151 2748 3467 4324
10 20 45 95 185 345 634 1150 2034 3495 5961 10628 20989 46454 110042 263558 616093 1385974 2994218 6232675 12569356
18 21 29 50 105 254 633 1501 3300 6733 12875 23374 40911 70322 121207 213541 388854 731069 1403201 2708962 5192037
18 31 61 122 227 388 616 921 1312 1797 2383 3076 3881 4802 5842 7003 8286 9691 11217 12862 14623
22 32 42 52 62 72 82 92 102 112 122 132 142 152 162 172 182 192 202 212 222
10 15 20 25 30 35 40 45 50 55 60 65 70 75 80 85 90 95 100 105 110
13 35 67 117 209 391 754 1466 2823 5317 9719 17173 29295 48269 76930 118822 178217 260079 369955 513773 697525
27 46 79 149 296 592 1171 2285 4407 8413 15894 29699 54946 101071 186214 346693 656995 1270352 2497601 4954049 9822324
-1 -2 2 24 92 255 600 1292 2661 5391 10921 22252 45487 92676 187042 372712 733159 1426452 2752264 5277040 10062018
-2 -1 12 46 113 243 525 1193 2777 6335 13779 28333 55290 103646 190259 350659 665941 1325896 2769231 5980153 13089536
-5 -1 19 69 165 325 569 919 1399 2035 2855 3889 5169 6729 8605 10835 13459 16519 20059 24125 28765
1 8 23 58 129 260 491 886 1546 2663 4726 9145 19852 46961 114464 275419 640455 1429106 3059073 6296772 12504459
17 43 85 154 278 518 996 1940 3751 7100 13085 23550 41841 74642 136289 258494 511481 1048509 2196953 4639266 9761996
-5 4 34 97 205 370 604 919 1327 1840 2470 3229 4129 5182 6400 7795 9379 11164 13162 15385 17845
0 9 43 131 316 657 1241 2215 3848 6632 11441 19819 34620 61568 112979 216077 430288 880923 1821151 3740587 7547740
19 24 24 14 -16 -77 -168 -234 -49 1067 4867 15440 41669 101882 232566 504784 1055569 2148985 4296498 8496059 16707712
-8 -6 -1 10 52 199 615 1618 3782 8105 16310 31454 59290 111441 212726 417455 843996 1744600 3640017 7568110 15525464
19 44 93 182 342 632 1152 2056 3565 5980 9695 15210 23144 34248 49418 69708 96343 130732 174481 229406 297546
19 38 77 161 332 651 1208 2154 3780 6702 12281 23525 46897 95699 196026 396694 785049 1511166 2823653 5121089 9024050
12 21 42 99 242 568 1261 2675 5508 11149 22322 44199 86206 164800 307549 558899 988060 1699485 2846450 4648267 7411674
9 6 -1 -12 -27 -46 -69 -96 -127 -162 -201 -244 -291 -342 -397 -456 -519 -586 -657 -732 -811
4 17 46 97 187 346 618 1062 1756 2822 4539 7728 14826 32484 77244 187121 444340 1019516 2258574 4857886 10224905
16 28 53 106 220 446 858 1582 2880 5334 10202 20079 40118 80285 159515 313419 608938 1173390 2254517 4347786 8466922
13 39 72 115 176 270 435 781 1598 3551 7996 17490 36711 74412 148044 294951 598739 1248527 2665452 5759825 12430770
17 40 82 157 280 477 813 1453 2779 5596 11487 23454 47176 93667 185129 367997 741815 1522010 3173022 6682697 14110922
9 15 32 67 119 172 180 36 -472 -1693 -4079 -7987 -13117 -17108 -12104 23526 144519 481823 1333954 3351191 7890107
17 20 38 90 210 468 1016 2185 4670 9865 20460 41494 82172 158891 300079 553708 999019 1765994 3071478 5293702 9134802
5 -2 1 39 161 454 1057 2175 4093 7190 11953 18991 29049 43022 61969 87127 119925 161998 215201 281623 363601
19 34 55 90 154 265 440 691 1021 1420 1861 2296 2652 2827 2686 2057 727 -1562 -5117 -10298 -17522
20 32 47 78 159 354 776 1628 3289 6499 12757 25149 50002 100097 200860 402401 803348 1598842 3178136 6323201 12609933
-5 -2 7 17 28 52 124 332 904 2438 6443 16482 40377 94154 208674 440213 886617 1711062 3175887 5689431 9869282
13 35 75 150 302 610 1210 2331 4355 7909 13997 24180 40812 67340 108676 171649 265545 402743 599455 876578 1260666
16 32 67 132 241 427 769 1429 2700 5078 9406 17211 31482 58341 110406 213347 418786 830753 1662681 3364365 6907349
18 26 36 46 51 47 36 29 53 199 812 3032 10058 29736 79378 194113 440564 938248 1891820 3638138 6713125
11 37 82 154 274 493 916 1747 3393 6701 13458 27389 56109 114947 234469 475196 955891 1906493 3764126 7341668 14114472
16 40 80 148 273 523 1036 2055 3961 7311 12936 22266 38262 67694 126062 247275 501350 1024946 2071592 4091096 7850935
25 38 48 56 71 123 283 692 1616 3565 7532 15408 30585 58638 107764 188412 311503 485392 714412 1008488 1427223
14 19 39 103 268 642 1425 2988 6036 11947 23455 45965 89980 175446 339407 649438 1227274 2290475 4225743 7716883 13965076
5 11 28 66 140 276 526 997 1899 3617 6812 12556 22506 39122 65934 107863 171601 266055 402860 596966 867304
8 13 31 81 208 495 1080 2181 4132 7434 12821 21329 34356 53787 82604 127367 206280 371838 768806 1774285 4323634
9 18 35 71 145 291 576 1137 2256 4519 9166 18861 39330 82676 173737 361669 740083 1480624 2886941 5478659 10118335
21 31 45 64 100 195 458 1132 2718 6217 13614 28847 59736 121792 245640 491198 974063 1913167 3714191 7111094 13399192
1 12 32 58 95 164 317 674 1509 3439 7816 17487 38177 80909 166261 332305 650790 1262667 2458657 4861265 9826204
14 27 54 100 181 331 619 1195 2388 4893 10124 20898 42785 86778 174547 348728 692995 1370992 2701051 5297233 10329738
-3 -8 -8 12 79 249 642 1504 3310 6928 13866 26611 49032 86770 147540 241478 382379 592396 916292 1457810 2461765
15 31 60 102 157 225 306 400 507 627 760 906 1065 1237 1422 1620 1831 2055 2292 2542 2805
10 23 51 110 230 460 877 1614 2941 5463 10551 21211 43741 90750 186443 375543 737860 1411367 2627747 4765780 8429696
3 18 49 97 163 248 353 479 627 798 993 1213 1459 1732 2033 2363 2723 3114 3537 3993 4483
6 15 28 43 60 83 127 248 635 1836 5238 13997 34750 80693 177053 370696 746640 1455529 2757432 5088111 9153132
23 32 32 16 -28 -120 -291 -586 -1067 -1816 -2938 -4564 -6854 -10000 -14229 -19806 -27037 -36272 -47908 -62392 -80224
14 39 73 108 148 223 407 847 1824 3904 8313 17801 38467 83342 179071 378052 780510 1575696 3122007 6109179 11895198
22 47 93 176 322 583 1064 1956 3578 6459 11554 20802 38412 73511 145101 290630 579846 1135911 2165915 4002828 7160406
7 16 39 76 127 192 271 364 471 592 727 876 1039 1216 1407 1612 1831 2064 2311 2572 2847
2 12 42 105 217 391 629 912 1188 1358 1260 651 -813 -3599 -8321 -15766 -26922 -43008 -65506 -96195 -137187
0 -3 -1 28 114 290 587 1029 1628 2379 3255 4202 5134 5928 6419 6395 5592 3689 303 -5016 -12790
18 36 75 147 271 480 842 1511 2833 5551 11204 22950 47369 98511 206849 438313 932832 1978762 4151057 8560981 17302215
10 3 -9 -17 8 121 408 1003 2153 4414 9142 19562 42850 93831 201048 416043 826640 1574737 2878477 5057525 8558344
16 30 45 63 93 155 282 521 934 1598 2608 4126 6650 12007 26282 67260 181392 479382 1206027 2869985 6474071
19 30 48 86 161 293 509 851 1382 2182 3348 5091 8201 15476 35234 88799 224921 545498 1248748 2698152 5528061
20 39 73 127 212 360 646 1215 2312 4313 7755 13363 22072 35042 53664 79555 114540 160619 219917 294615 386860
11 12 23 64 171 417 939 1972 3911 7453 13909 25812 47978 89232 165192 303042 550551 994426 1798527 3282128 6074521
26 40 53 68 95 155 286 551 1048 1922 3379 5702 9269 14573 22244 33073 48038 68332 95393 130936 176987
12 23 45 75 110 147 183 215 240 255 257 243 210 155 75 -33 -172 -345 -555 -805 -1098
3 19 52 108 193 319 525 920 1764 3637 7828 17238 38379 85534 188923 409940 868373 1789219 3580508 6958696 13144865
17 33 47 55 61 97 270 860 2510 6575 15736 35042 73634 147592 284807 533920 981975 1790865 3273077 6045893 11334635
15 44 84 131 181 230 274 309 331 336 320 279 209 106 -34 -215 -441 -716 -1044 -1429 -1875
6 27 67 134 236 381 577 832 1154 1551 2031 2602 3272 4049 4941 5956 7102 8387 9819 11406 13156
29 47 79 131 212 342 560 932 1559 2585 4205 6673 10310 15512 22758 32618 45761 62963 85115 113231 148456
-9 -7 10 57 168 408 882 1734 3136 5286 8465 13246 21003 34935 61899 115437 220485 420367 786804 1433807 2536474
8 13 43 123 295 625 1210 2185 3730 6077 9517 14407 21177 30337 42484 58309 78604 104269 136319 175891 224251
14 21 37 71 138 259 460 786 1367 2600 5550 12739 29624 67357 148080 315462 656254 1344845 2734927 5545487 11231700
6 16 35 76 161 319 589 1030 1740 2886 4747 7772 12655 20429 32581 51190 79090 120060 179043 262396 378173
25 36 45 64 130 321 779 1754 3702 7500 14889 29333 57614 112746 219398 424500 819260 1586873 3107330 6185019 12529795
7 6 2 -5 -15 -28 -44 -63 -85 -110 -138 -169 -203 -240 -280 -323 -369 -418 -470 -525 -583
14 23 35 62 125 254 488 875 1472 2345 3569 5228 7415 10232 13790 18209 23618 30155 37967 47210 58049
11 23 29 28 38 109 347 976 2491 6006 14004 31900 71212 155816 333902 700066 1434747 2872297 5614783 10716676 19976490
13 13 16 25 40 69 149 377 951 2221 4750 9385 17338 30277 50427 80681 124721 187149 273628 391033 547612
24 37 60 109 210 404 760 1411 2641 5071 10033 20303 41509 84771 171547 342454 673451 1306066 2504783 4766554 9027925
7 28 58 104 184 327 573 973 1589 2494 3772 5518 7838 10849 14679 19467 25363 32528 41134 51364 63412
2 9 15 18 16 7 -11 -40 -82 -139 -213 -306 -420 -557 -719 -908 -1126 -1375 -1657 -1974 -2328
-2 -8 -22 -36 -30 32 216 659 1677 4012 9338 21221 46842 99962 205876 409585 789396 1480256 2715538 4904886 8782742
3 10 27 73 182 407 824 1536 2677 4416 6961 10563 15520 22181 30950 42290 56727 74854 97335 124909 158394
10 19 44 102 227 482 972 1856 3356 5774 9577 15730 26695 48929 98377 211450 465398 1013941 2146626 4383766 8623131
10 31 72 149 284 512 899 1586 2882 5437 10534 20547 39620 74630 136505 241976 415850 693899 1126468 1782913 2756988
11 33 74 146 273 497 898 1641 3074 5923 11677 23368 47206 96055 196723 404751 833173 1706029 3453804 6877118 13417719
8 21 58 132 265 504 939 1721 3091 5469 9726 17876 34585 70136 145929 304513 628138 1274073 2543782 5020872 9847569
-4 -8 -14 -25 -37 -22 109 583 1910 5132 12220 26671 54365 104750 192431 339247 576928 950432 1522070 2376535 3626959
18 38 82 173 347 653 1153 1922 3048 4632 6788 9643 13337 18023 23867 31048 39758 50202 62598 77177 94183
15 28 47 91 191 388 741 1353 2420 4300 7589 13199 22512 37951 64995 118188 236764 521302 1213228 2857007 6615220
14 21 37 81 183 388 760 1386 2380 3887 6087 9199 13485 19254 26866 36736 49338 65209 84953 109245 138835
16 24 32 40 48 56 64 72 80 88 96 104 112 120 128 136 144 152 160 168 176
3 8 23 61 141 288 533 913 1471 2256 3323 4733 6553 8856 11721 15233 19483 24568 30591 37661 45893
14 30 57 99 167 295 569 1169 2424 4880 9381 17163 29961 50129 80773 125897 190562 281058 405089 571971 792843
-6 -7 -10 -4 37 154 403 855 1596 2727 4364 6638 9695 13696 18817 25249 33198 42885 54546 68432 84809
1 6 25 68 141 255 458 900 1941 4312 9339 19240 37505 69369 122388 207128 337977 534090 820477 1229244 1800997
17 27 53 113 230 432 752 1228 1903 2825 4047 5627 7628 10118 13170 16862 21277 26503 32633 39765 48002`

const { sqrt, floor } = Math

export default function Page() {
  const input = real
  let sum = 0
  for (const history of input.split('\n')) {
    sum += findBakwardPrediction(history.split(' ').map(e => parseInt(e)))
  }
  console.log(sum)
  return sum
}


function findBakwardPrediction(steps: number[]) {
  console.log("\nHistory: ")
  const seq: number[][] = []
  seq.push([])
  for (let i = 0; i < steps.length; i++) {
    const step = steps[i]
    seq[0][i] = step
    let depthLimit = Infinity
    for (let depth = 1; depth <= i && depth < depthLimit; depth++) {
      const j = i - depth
      if (!seq[depth]) seq[depth] = []
      seq[depth][j] = seq[depth - 1][j + 1] - seq[depth - 1][j]
    }
  }
  let predictionIdx = seq[0].length
  for (let i = seq.length - 3; i >= 0; i--) {
    // console.log(`This depth: ${i} pred idx : ${depthPredIdx}`)
    const thisDepth = seq[i]
    const depthBelow = seq[i + 1]

    thisDepth.unshift(thisDepth[0] - depthBelow[0])

    // console.log(`This row last item: ${thisDepthLastNumber} | below last item: ${depthBelowLastNumber} | This row pred: ${thisDepthPrediction}`)
    // console.log(seq)
    if (i === 0) {
      const backwardPred = thisDepth[0]
      if (backwardPred === undefined) throw new Error('Empty last index??')
      console.log("Prediciton: " + backwardPred)
      printSeq(seq)
      return backwardPred
    }
  }


  // var i = 0
  // for (const step of steps) {

  //   seq[0].push(step)
  //   let depth = 1
  //   let maxDepth = 0
  //   while (depth <= i) {
  //     if (seq[depth]?.[1] === 0 && seq[depth]?.[0] === 0) maxDepth = depth
  //     if (maxDepth > 0 && depth > maxDepth) break
  //     if (!seq[depth]) seq.push([])
  //     seq[depth].push(seq[depth - 1][i - depth + 1] - seq[depth - 1][i - 1 - depth + 1])
  //     depth++
  //   }
  //   i++
  // }

  // var i = 0
  // let nextIndex = seq[0].length
  // for (let i = seq.length - 3; i >= 0; i--) {
  //   console.log("i :" + i)
  //   seq[i].push(seq[i].at(-1)! + seq[i + 1].at(-1)!)
  //   console.log(seq)
  //   if (i === 0) {
  //     console.log("Prediction: " + seq[i].at(-1))
  //     return seq[i].at(-1)!
  //   }
  // }
  return 0
}

// 2105861152 // too low
// 2105717710 // too low
// 2105961943 // correct

function printSeq(seq: number[][]) {
  for (const row of seq) {
    let str = ''
    for (const step of row) {
      str += ` ${step}`
    }
    console.log(str)
  }
}