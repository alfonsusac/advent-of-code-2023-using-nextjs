const puzzleInput = `seeds: 2637529854 223394899 3007537707 503983167 307349251 197383535 3543757609 276648400 2296792159 141010855 116452725 5160533 2246652813 49767336 762696372 160455077 3960442213 105867001 1197133308 38546766

seed-to-soil map:
1024364543 1121869540 764570177
1788934720 0 30748436
710359306 576061773 314005237
1819683156 509305212 66756561
478556776 890067010 231802530
0 30748436 478556776

soil-to-fertilizer map:
3998185854 3762642503 103735883
2968507762 2068943953 132922295
1615660383 3128249668 130118355
730037950 2201866248 85080413
30504699 101283437 22743985
1963198232 3098529992 29719676
2445396241 816829001 206574911
4101921737 3258368023 13795434
1745778738 3272163457 98082636
184429295 124027422 42778761
815118363 1688321922 16510291
227208056 0 101283437
3101430057 730037950 86791051
2855369613 1073802717 8286129
2726882317 4266444706 28522590
2755404907 1647814534 40507388
1992917908 4002766747 184714231
0 307861200 20630293
3437715786 2286946661 488868406
2212191740 2910044568 188485424
1875478802 3756833622 5808881
1386084226 4200760960 31124145
4115717171 1704832213 179250125
2177632139 4231885105 34559601
968017015 3370246093 57414778
1957518504 1068122989 5679728
20630293 205631872 9874406
1248075951 2775815067 134229501
1417208371 1449362522 198452012
145603606 166806183 38825689
3926584192 1318303542 71601662
2651971152 3650305029 74911165
2863655742 1884082338 104852020
2400677164 1023403912 44719077
1025431793 3427660871 222644158
53248684 215506278 92354922
2795912295 1389905204 59457318
831628654 3866378386 136388361
1382305452 2065165179 3778774
1843861374 3725216194 31617428
3188221108 1082088846 236214696
1881287683 1988934358 76230821
3424435804 4187480978 13279982

fertilizer-to-water map:
52426778 0 42548209
2317094055 2628693938 80884528
4273469923 2317094055 21497373
3504443816 3801741356 19441920
1168510873 722677906 36277136
766143928 2147127897 113763545
2859981871 4203009036 91958260
3742911607 2903448576 530558316
2533492330 3494200839 307540517
1048443265 602610298 120067608
1606177181 2049845518 37728052
0 2087573570 24184027
2228508217 539688172 62922126
3523885736 4014822611 112866625
3636752361 3821183276 106159246
2204777013 515956968 23731204
163272748 80266080 177461896
340734644 1624436234 425409284
1568459310 42548209 37717871
3039420220 2338591428 290102510
1336392351 257727976 5651080
2397978583 3434006892 60193947
2951940131 3927342522 87480089
94974987 341413667 68297761
1750150773 263379056 78034611
1932038162 1351697383 272738851
1828185384 897499179 73313877
1563080665 758955042 5378645
1643905233 409711428 106245540
3329522730 2799034919 104413657
1901499261 2260891442 30538901
879907473 764333687 133165492
1342043431 1130660149 221037234
2458172530 4127689236 75319800
2841032847 2709578466 18949024
24184027 1102417398 28242751
1204788009 970813056 131604342
1013072965 2111757597 35370300
3433936387 2728527490 70507429

water-to-light map:
71899121 201997255 39056119
1870747295 791060221 18793056
1109877678 2647277659 20201672
496126127 1366401345 54786206
2289070096 3946384506 79288366
2872432379 3633289978 245210479
2566896529 1931266150 305535850
2094153218 1065408320 14844701
1747071839 1759996387 105111897
3528644588 1080253021 193678883
675287597 4169571318 125395978
1852183736 3256553708 6224195
611190115 1486911572 64097482
1972384294 809853277 55611058
4292231732 3217343431 613168
1498491937 2667479331 11999801
1356554237 502551806 141937700
110955240 241053374 38164682
800683575 2316420571 309194103
2368358462 2236802000 62837191
2523665094 3878500457 34541659
3488154933 3913042116 10582322
567693713 1443415170 43496402
2558206753 3247863932 8689776
4065356099 2990467798 226875633
3992305706 2625614674 21662985
4013968691 739672813 51387408
1330023335 1421187551 22227619
550912333 2299639191 16781380
1352250954 496126127 4303283
2027995352 1865108284 66157866
1889540351 644489506 82843943
3117642858 3262777903 370512075
3498737255 3217956599 29907333
2431195653 1273931904 92469441
1858407931 727333449 12339364
0 130098134 71899121
2170307311 2679479132 41006431
2211313742 4025672872 54996286
4292844900 500429410 2122396
149119922 0 130098134
1719479071 4141978550 27592768
3722323471 2720485563 269982235
2266310028 3923624438 22760068
2108997919 4080669158 61309392
1510491738 1551009054 208987333
1130079350 865464335 199943985

light-to-temperature map:
2246981140 2123929713 26608756
506825382 1211085022 100001399
2273589896 3259651351 49795378
606826781 48305627 403771586
2441004040 1311086421 255128583
2696132623 887597567 323487455
3131241320 452077213 69964335
1483012724 2119418493 4511220
4100438569 4209824659 85142637
2046786877 3309446729 95808859
1487523944 2344091207 205790126
3125128781 522041548 6112539
74735386 1566215004 432089996
2323385274 2937379483 117618766
46634343 2549881333 28101043
1215251469 1998305000 118258255
3201205655 0 1671284
3202876939 2150538469 193552738
1010598367 3054998249 204653102
3019620078 2577982376 105508703
2142595736 2832994079 104385404
1333509724 2683491079 149503000
4185581206 4100438569 109386090
1693314070 534124760 353472807
3396429677 528154087 5970673
0 1671284 46634343
3402400350 2116563255 2855238

temperature-to-humidity map:
3585785215 3115915735 709182081
1595400550 915086594 131894638
3115915735 3825097816 469869480
257043810 1628903919 98391269
355435079 1106926810 521977109
877412188 0 717988362
59945578 717988362 197098232
0 1046981232 59945578

humidity-to-location map:
2826523858 2649651094 205250361
2028276378 1553868404 798247480
225543770 4100328990 5722049
595208874 2352115884 297535210
3031774219 2854901455 205611797
1267642800 3435411968 22064409
138173954 4119345931 87369816
231265819 49632084 363943055
1877617809 1403209835 150658569
0 413575139 138173954
3237386016 3457476377 642852613
892744084 3060513252 374898716
3893533521 551749093 313182226
1339339293 864931319 538278516
1289707209 0 49632084
3880238629 4106051039 13294892`

const sampleInput = `seeds: 79 14 55 13

seed-to-soil map:
50 98 2
52 50 48

soil-to-fertilizer map:
0 15 37
37 52 2
39 0 15

fertilizer-to-water map:
49 53 8
0 11 42
42 0 7
57 7 4

water-to-light map:
88 18 7
18 25 70

light-to-temperature map:
45 77 23
81 45 19
68 64 13

temperature-to-humidity map:
0 69 1
1 0 69

humidity-to-location map:
60 56 37
56 93 4`

export default function Page() {

  const start = Date.now()

  let rangeList: range[] = []

  const input = puzzleInput
    // ,seeds: number[] = []
    // ,se2so: map[] = []
    // ,so2fe: map[] = []
    // ,fe2wa: map[] = []
    // ,wa2li: map[] = []
    // ,li2te: map[] = []
    // ,te2hu: map[] = []
    // ,hu2lo: map[] = []

  let emptyLines = 0

  // function processAlmanac(map: map[], line: string, section: number) {
  //   if (emptyLines === section && line[0]?.match(/\d/)) {
  //     const str = line.split(' ')
  //     const dest = parseInt(str[0]), src = parseInt(str[1]), range = parseInt(str[2])
  //     map.push({
  //       translateAmount: dest - src,
  //       min: src,
  //       max: src + range,
  //     })
  //     map.sort((a, b) => b.min - a.min)
  //   }
  // }

  let prevRangeList: range[] = []

  input.split('\n').forEach((line, ln) => {
    if (ln === 0) {
      const seedStr = line.split(': ')[1]
      const numberStr = seedStr.split(' ')
      for (let i = 0; i < numberStr.length; i += 2) {
        rangeList.push({
          start: parseInt(numberStr[i]),
          end: parseInt(numberStr[i]) + parseInt(numberStr[i + 1])
        })
      }
      // numberStr.forEach(num => seeds.push(parseInt(num)))
    } 

    
    
    if (line.length === 0) {
      console.log("New Section!!")
      for (const range of prevRangeList) {
        rangeList.push(range)
      }
      // console.log(rangeList)
      prevRangeList = rangeList
      rangeList = []

      // console.log('')      
      emptyLines++
    }

    if (ln !== 0 && line[0]?.match(/\d/)) {
      // console.log(line)
      const str = line.split(' ')
      const shift = parseInt(str[0]) - parseInt(str[1])
      const mapStart = parseInt(str[1])
      const mapEnd = parseInt(str[2]) + parseInt(str[1])

      // console.log(`[${mapStart}, ${mapEnd}, ${shift}]`)


      const length = prevRangeList.length // to not infinite loop, only loop original list
      // console.log(length)
      
      for (let i = 0; i < length; i++){
        const seedRange = prevRangeList.shift()!
        // console.log(` seedrange: [${seedRange.start}, ${seedRange.end}]`)        
        // no collision
        if (seedRange.end < mapStart || seedRange.start > mapEnd) {
          // console.log("No collision")
          prevRangeList.push(seedRange)
        }
        
        else if (seedRange.start < mapStart) {
          // Overlapping on left
          // console.log("Left overflowing")
          prevRangeList.push({ // left overflow
            start: seedRange.start,
            end: mapStart
          })
          // Partial overlapping on left, no right overflow
          if (seedRange.end <= mapEnd) {
            // console.log("right not overflowing. Contained in map")
            rangeList.push({ 
              start: mapStart + shift,
              end: seedRange.end + shift,
            })
          }
          // Full overlapping left and right
          else if (seedRange.end > mapEnd) {
            // console.log("right overflowed.")
            rangeList.push({ // inner 
              start: mapStart + shift,
              end: mapEnd + shift
            })
            prevRangeList.push({ // right overflow
              start: mapEnd,
              end: seedRange.end
            })
          }
        }
        else if (seedRange.start >= mapStart) {
          // Fully engulfed. No overflow
          if (seedRange.end <= mapEnd) {
            // console.log("no left and right overflow")
            rangeList.push({
              start: seedRange.start + shift,
              end: seedRange.end + shift
            })
          }
          // Partial overlapping on right, no left overflow, but right overflow
          else if (seedRange.end > mapEnd) {
            // console.log("right overflow")
            rangeList.push({
              start: seedRange.start + shift,
              end: mapEnd + shift,
            })
            prevRangeList.push({
              start: mapEnd,
              end: seedRange.end
            })
          }
        }
      }

      // console.log(rangeList)

    }



    // if (ln === 0) line.split(': ')[1].split(' ').forEach(seed => seeds.push(parseInt(seed)))

    // processAlmanac(se2so, line, 1)
    // processAlmanac(so2fe, line, 2)
    // processAlmanac(fe2wa, line, 3)
    // processAlmanac(wa2li, line, 4)
    // processAlmanac(li2te, line, 5)
    // processAlmanac(te2hu, line, 6)
    // processAlmanac(hu2lo, line, 7)
  })

  for (const range of prevRangeList) {
    rangeList.push(range)
  }

  // console.log(rangeList);


  // console.log(se2so)
  // console.log(so2fe)
  // console.log(fe2wa)
  // console.log(wa2li)
  // console.log(li2te)
  // console.log(te2hu)
  // console.log(hu2lo)

  // function findTranslateAmount(map: map[], seed: number) {
  //   // console.log(map)
  //   if (seed > map[0].max) return seed

  //   for (const mapItem of map) {
  //     if (mapItem.min <= seed) {
  //       if (mapItem.max <= seed) return seed
  //       return seed + mapItem.translateAmount
  //     }
  //   }

  //   return seed
  // }

  // function findLocation(seed: number) {
  //   const soil = findTranslateAmount(se2so, seed)
  //   const fert = findTranslateAmount(so2fe, soil)
  //   const watr = findTranslateAmount(fe2wa, fert)
  //   const lght = findTranslateAmount(wa2li, watr)
  //   const temp = findTranslateAmount(li2te, lght)
  //   const hmdt = findTranslateAmount(te2hu, temp)
  //   const loct = findTranslateAmount(hu2lo, hmdt)
  //   return loct
  // }

  // const locations: number[] = []

  let lowestLocation = rangeList.reduce( (prev, curr) => curr.start < prev ? curr.start : prev , Infinity)

  // Brute FOrce
  // const numStr = input.split('\n')[0].split(': ')[1].split(' ')
  // for (let i = 0; i < numStr.length; i += 2) {
  //   const start = parseInt(numStr[i])
  //   const range = parseInt(numStr[i + 1])
  //   for (let j = start; j <= start + range; j++) {
  //     const location = findLocation(j)
  //     if (location < lowestLocation) {
  //       console.log("Lower value found!: " + location)
  //       lowestLocation = location
  //     }
  //   }
  // }

  const res = lowestLocation
  const end = Date.now()
  var ms = (end - start)
  console.log(ms + " ms")
  console.log(lowestLocation)

  // seeds.forEach(seed => {
  //   locations.push(findLocation(seed))
  // })

  // console.log(locations)


  // const res = locations.reduce((prev, curr) => curr < prev ? curr : prev, Infinity)

  // console.log(res)


  return res
}




type map = {
  min: number,
  max: number,
  translateAmount: number
}

type range = { start: number, end: number }