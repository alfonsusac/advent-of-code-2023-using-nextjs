import { Range, has, int } from "../util"

const sample = `px{a<2006:qkq,m>2090:A,rfg}
pv{a>1716:R,A}
lnx{m>1548:A,A}
rfg{s<537:gd,x>2440:R,A}
qs{s>3448:A,lnx}
qkq{x<1416:A,crn}
crn{x>2662:A,R}
in{s<1351:px,qqz}
qqz{s>2770:qs,m<1801:hdj,R}
gd{a>3333:R,R}
hdj{m>838:A,pv}

{x=787,m=2655,a=1222,s=2876}
{x=1679,m=44,a=2067,s=496}
{x=2036,m=264,a=79,s=2244}
{x=2461,m=1339,a=466,s=291}
{x=2127,m=1623,a=2188,s=1013}`

const puzzle = `mxd{s>519:A,A}
mjc{s>2178:R,R}
fn{s<595:A,x<2401:R,m<3068:A,A}
kvf{a<3294:R,s<1556:dxz,ks}
hds{s>2669:R,s>2466:A,x>551:R,R}
gs{m<360:zd,gx}
grj{m<1473:A,x<458:R,R}
kp{s>435:R,R}
smm{s<3630:R,s>3642:R,R}
kph{m>1270:A,x>1603:A,m>1212:A,A}
nds{a>121:A,a>56:R,R}
ctd{a>1355:A,s<3418:A,s>3430:R,fbg}
hm{s<3783:R,a<915:A,s<3899:A,A}
fd{x>1077:R,s<1020:dm,s<1296:A,nhn}
vn{s>2595:A,s<2499:R,x<2900:R,xp}
hcd{a>861:kb,s>2244:lb,R}
dtz{s<2555:R,A}
mfl{a>1580:klc,R}
hv{x<2511:R,x>2650:R,R}
pzq{m<957:rtd,m<1311:R,s>736:vsr,vz}
jbh{x<1440:R,s>2176:A,R}
bp{s<2134:R,a>423:A,a<148:A,A}
nhn{a<1115:A,A}
qk{a<940:mms,m<3456:A,dg}
zrz{x>3467:tjz,a<3096:hmq,bnj}
cpz{m<3765:A,m>3881:R,x>3232:A,R}
kb{x<589:R,x<854:A,R}
xss{s>2931:tx,s>2577:A,ptf}
ljb{a>1580:A,a>1518:A,A}
bl{a<1603:nps,bdf}
gd{x>2903:rvd,m>2692:qqz,s<1587:tcm,xhj}
cnm{x>3317:A,a<2446:A,a>2972:A,A}
dxd{x>3626:A,x>3578:A,x<3558:R,R}
kt{a<2459:jg,a<3181:pg,x>1274:mtm,zh}
qr{s>1547:R,x>2576:R,x<2219:A,R}
tbb{s>3694:A,m>3236:tgn,dc}
mjx{s>1488:A,x>2441:R,rq}
slz{s>3682:kng,A}
xl{a>2352:R,R}
zn{x>499:R,m>520:A,A}
vc{x>2938:R,a>1346:A,A}
nc{x>2666:dvd,xzx}
pml{m<2772:ml,nsx}
rtf{a<325:A,a<520:A,m>1148:R,A}
rd{m>1726:kn,a>1532:vn,x<2966:brb,xfh}
kkh{s>1789:A,A}
jsj{a>1984:lch,m>2372:xss,hk}
cnr{s<1910:R,m>3349:R,A}
dxz{s>1400:A,R}
sh{s<3261:R,m>337:A,m<262:A,R}
tfm{a<1214:R,m>527:A,x>1422:A,R}
fq{m<887:R,m<1036:A,m<1112:R,A}
fl{s>1735:R,s>1721:A,R}
sfp{m<2598:A,s<2962:A,A}
hff{m<3389:pnx,s>1790:jnf,qk}
rbf{m<291:mb,x<1523:dtz,mp}
db{m<859:A,A}
ck{x>2345:A,A}
lgr{x<3690:dxd,A}
xp{x>3015:R,a>2631:R,A}
vtv{m<2179:hcd,gl}
tq{x>2684:A,x>2429:R,m<2407:npq,R}
ppc{x<2658:A,m>2166:A,R}
hk{s<2925:ck,A}
gqp{x<2320:R,a>2596:A,m<2142:R,A}
pgj{s<3781:kdt,m>2547:nq,a<1362:xfb,rz}
mp{a>2394:dfx,A}
vh{a<376:R,R}
hb{m>3496:R,m<3482:R,s<1786:A,A}
zp{x>502:hm,blv}
gf{s>3664:A,m>3751:A,A}
tg{m<1097:A,s<2083:gv,A}
cz{m>948:A,x>1835:hp,A}
fqr{a<3412:lp,mld}
bc{m>770:R,s<234:hx,zhv}
mcz{m<399:ndb,sf}
pb{s<3639:vg,xv}
drn{x<2337:jzj,a>2468:ps,s<1692:rh,sjn}
lxd{a>1948:jzc,sfp}
ktn{x>3118:rf,x<2569:rcn,a<1483:qmv,bl}
kbn{s<1896:A,A}
sgg{a<3024:md,x<3474:cpz,s>1888:nf,gcs}
zz{x>2261:fn,a<2097:jlc,a<3041:R,mxd}
rhc{s<1222:jfr,m<717:zsg,x<3086:dnh,lt}
gz{s>1877:hjf,x>2844:A,m<1240:R,csz}
gj{a<3514:R,krn}
dmb{x<3801:lgr,lzf}
mg{a<826:A,s>2329:A,A}
rg{a<3454:R,m<3961:R,R}
tdn{a>636:A,x>2674:A,a<418:A,A}
pk{s>1111:A,a<1136:R,A}
jj{a<693:A,s<2070:R,x<3277:R,A}
fcm{s<1672:A,a>2998:R,R}
xsx{x>1604:pk,x>1286:pzl,fd}
mzg{m>3808:A,s>1865:gb,R}
fg{a>2650:dh,a<1401:R,a>2074:R,A}
tz{a>1106:cx,m>3282:btl,s>2141:qj,df}
ll{s>3709:ppc,m>2043:hmt,s<3670:R,A}
cx{s<2250:A,s>2317:rs,a<1440:pnm,ljb}
fgz{s>1826:A,A}
gx{x>1640:R,x<1380:A,x>1501:A,R}
mxx{x<1623:R,a<1522:R,m>996:R,R}
pmr{s>2942:A,x<3819:A,a>2520:R,R}
sj{a<406:A,A}
nhv{a<2366:nx,x>3240:A,fl}
hf{s>1092:jml,a<1133:R,s>902:ghr,A}
fvm{s>2186:R,a<746:pxt,R}
zq{s>2330:R,A}
jzj{s>1843:cnr,x<2093:znr,m>3323:A,hvr}
bpc{a>3794:R,R}
tkk{m>2092:R,R}
rb{x>2846:R,R}
ql{a>1897:R,R}
gv{m<1131:A,x<1429:A,x>1526:R,A}
ncr{s<2301:R,R}
xv{s<3816:ll,s<3897:rbn,st}
hnd{a<2278:nns,m<870:R,A}
bqz{s<2364:A,R}
fp{s<726:rl,kt}
ltb{a>1269:A,x>777:A,x<658:A,R}
pxt{s>1993:A,R}
zx{a>796:R,A}
jvs{a<3103:A,s<1870:A,A}
rsm{s>2707:A,x<835:R,A}
xpx{a>607:R,s<2014:A,A}
fqk{m<912:A,A}
nrx{x<376:kbn,vs}
brb{m>708:cxk,R}
gcs{s<1809:A,s>1841:R,m<3834:A,R}
rkk{s<1770:A,m>3321:A,A}
fr{a>2675:A,s>522:A,R}
xfb{s>3857:lfr,a<683:vh,s>3818:dr,nlf}
ddk{a>1547:rr,jk}
rvf{s<1673:mrn,x>1239:kf,jnk}
dvp{a<3744:hs,s<2210:R,s<2319:A,txk}
vx{x>1553:ht,x<1391:A,A}
ml{s>2170:vcq,rb}
mbl{m>3905:A,A}
qfs{m<1155:nhz,hh}
mkc{m<2142:R,s>3264:R,A}
xj{a<1868:R,x>3465:R,R}
bj{m<3328:R,R}
hp{a<2543:R,x<1887:R,s<2030:R,R}
jzc{x<2727:A,x<2778:R,R}
kch{m>3627:R,R}
bsl{x>3681:R,s<1591:A,R}
nps{a<1538:A,R}
dsc{a>714:A,m<374:R,a>341:R,A}
tm{a>2000:xqv,a>1222:rgk,rhc}
gnv{x>752:fqr,s<3125:zhc,xjg}
rr{a<3101:R,A}
lx{s>3010:bz,mfl}
sjn{x<2761:hv,s>1824:bj,x<2926:A,rkk}
rc{s<2605:qmc,m<869:R,m<895:R,fqk}
xct{m>2544:R,A}
mq{a<1980:A,m>1455:R,x<3654:A,A}
lp{a>2759:A,s>2867:A,R}
hsv{x<2410:R,a<1560:A,R}
jg{m>2929:lkf,x>1020:xhc,s>1167:jgp,A}
mrl{m<1092:A,A}
vg{s>3504:sps,x>3181:tr,s<3449:ctd,hfg}
sv{x<2066:R,a<849:R,a<1058:A,R}
srk{a>1926:R,a>896:mc,jdq}
tj{x>1519:R,R}
fbg{a>773:R,a<489:R,m<2598:R,R}
fj{m>1112:A,A}
bb{m<726:A,R}
fm{x<1701:R,a<2535:A,R}
npq{a<3739:A,x<2236:A,R}
zj{x>2673:jcd,zrb}
qq{s<1726:A,s>1888:R,s<1833:R,R}
zhv{a<1161:A,a<1955:R,m>297:A,R}
lt{a>784:tpp,s>1791:nmv,m<1272:grb,ssv}
gt{m>1318:A,R}
xhs{m<2996:R,m<3102:A,A}
bjb{m>936:lr,x>1510:rc,hnd}
rtd{s>556:A,m>564:A,R}
qqz{s<1611:A,m>2941:A,pt}
pnn{s<3780:R,s>3867:A,a>1248:zn,R}
jlc{a<772:A,m<2926:R,s<614:A,A}
zrb{s>750:nrc,s<378:lcv,zz}
vfg{s<2430:R,cms}
cms{a>3222:A,m>583:R,x<406:A,A}
vcq{m>2434:A,a>2745:R,s<2311:A,R}
xrv{a<1662:qgp,x<3696:xg,tgr}
hxt{s>1068:fsf,x>3036:xj,s<679:sdh,cbc}
srt{m>2894:dvp,s<2153:tq,s>2284:scj,nhs}
mpd{a>628:R,a<214:A,x<1355:A,A}
rml{a<504:A,A}
tb{m>3398:R,s>1543:A,a<3609:A,R}
ptr{m>688:R,a<948:R,s<634:A,A}
klc{x<1710:R,a<2591:A,m>3078:A,R}
ks{s<1651:R,x>2702:A,s>1697:R,A}
xhc{s<1351:R,R}
fh{s<3401:kq,pb}
rqn{m<1266:mpd,x>1369:R,gt}
cs{x>564:mm,x<218:tlj,gqv}
jt{x>2871:A,m<3444:A,a<1753:R,A}
hjf{m>1046:A,m>370:A,s>1968:A,A}
nrc{m<2804:lm,xq}
sz{x>2574:A,R}
qbv{m>249:A,s>574:A,R}
pfp{m>375:R,A}
btq{a<998:flp,m>3485:prd,bqz}
gp{a<2326:dp,ms}
pfl{s<1868:R,a<1886:R,a<1950:R,R}
spt{m<1224:pnn,m>1788:zp,lft}
jfr{a<775:pzq,fz}
lc{s<1767:qv,x<3091:mzg,a>2124:sgg,jgb}
jnk{a>2431:gnv,s>2865:kfx,kv}
md{m<3718:A,A}
bdf{x>2867:R,m>409:R,m<263:R,R}
pzl{s>745:fk,m<858:tfm,pv}
tp{a<2486:A,x<3506:A,s<2745:R,A}
krn{m>1248:R,x<3069:R,a>3769:R,R}
nth{m>897:grj,gkv}
mtm{m>3187:kch,x<1564:R,vcj}
nlf{a>980:A,s>3799:A,x<675:A,R}
kv{m<1769:nth,m<2749:vtv,btq}
ns{x<3280:R,s>2163:A,m<3814:A,A}
dt{a<1402:A,s>1581:A,R}
rcd{s<667:R,a>1341:A,A}
lf{m>1315:R,a<599:A,sv}
vf{m<3625:zlg,x>887:gf,m<3771:A,A}
bst{m>2531:R,x>975:A,s>3379:A,R}
nxj{a<2198:R,A}
kng{a>1758:A,x<811:A,s<3709:A,A}
lkf{m<3494:A,x<1200:A,s<1219:A,A}
sps{s<3575:scm,x>3109:mq,hsv}
pvf{m>143:fm,s>3306:R,qp}
zm{x<3406:R,s>1900:A,A}
ltd{s>3415:nxj,A}
kg{m>620:R,x<1505:mnf,A}
zsg{x<3003:rt,mcz}
rvd{m<2705:cnm,a>2203:jr,m>2882:xhs,R}
hl{s>3663:R,A}
tld{a>1063:A,a>955:A,x<2857:A,A}
rbn{s>3864:pq,m<1667:xd,R}
jsl{x>1423:A,R}
sx{m>103:A,a>1372:A,a<646:A,R}
zd{x<1679:th,s>3668:kdv,R}
tng{s>3386:A,s>3265:A,R}
ndb{s>1881:R,A}
pbc{m>2958:A,a<161:R,x>2337:R,R}
bz{x<1717:nt,s>3541:A,R}
pg{x<748:A,x<1189:A,R}
qj{x<2963:ncr,s<2293:A,zg}
pq{m>1496:A,x<3163:A,s<3885:A,R}
ps{a<3453:bbm,x>2688:cvs,s>1696:bpc,A}
vr{s<354:R,x>3463:A,A}
txk{m<3329:R,R}
pd{a>3073:A,m<2888:R,a>2488:R,R}
cvs{a<3678:A,m<3350:A,A}
rfd{a>2749:gj,s<2064:gz,s<2237:dv,lhj}
rs{s>2347:R,A}
xgz{x<2320:R,m>2708:jvs,m>2392:sft,A}
vsv{x<525:bh,s>3758:ltb,a<901:vf,slz}
fb{x<2194:A,A}
mb{m>156:A,sx}
mbk{s>626:R,x<3367:A,a<1710:R,A}
hfg{m<2134:A,ls}
vs{m<2976:R,a>3344:A,s>1902:R,A}
flp{a>345:R,x<610:nds,a<206:zq,bq}
zvh{s<1707:gd,x<2927:vmc,x>3534:dmb,kk}
sdh{x<2625:A,x<2851:R,x<2954:hjd,R}
mkh{s>91:R,A}
jcd{x>3192:qrj,lpp}
prd{s<2306:R,x<527:sd,m<3790:A,A}
nhk{a>2558:nr,x>947:xsx,jq}
bs{x>872:xnk,R}
mj{s>3566:vx,m>220:vxs,pvf}
dvd{s<1171:cd,zb}
dnh{s<1836:mjx,x>2503:fvm,x<2148:lf,cl}
rp{a<1064:A,R}
jq{s<668:bc,x>630:sk,hf}
bxx{x<698:R,m>450:R,x>895:R,R}
ffr{s>2956:A,x>3052:R,a>2253:R,vc}
skc{a<1537:R,A}
cj{x>3013:R,R}
rh{m<3295:gc,s<1617:dt,a<1261:tdn,A}
zmq{m>418:A,x>2611:A,x<2507:R,A}
tnb{a<1929:R,s>2762:A,a<2077:A,A}
nmv{x>3526:R,m<1470:mrl,a>511:jj,R}
nhz{s>2629:tj,x<1585:tg,hr}
klt{m>693:fdc,a>3064:qbv,a<2475:pfp,sm}
sk{a<1384:nrb,m>925:A,A}
tf{s>3306:A,A}
zb{m>1510:A,a>1550:R,A}
flb{s<315:A,s<429:R,x>3549:A,R}
sm{x>2731:A,x>2377:zmq,fb}
rmc{m<706:kg,s<3092:jm,x>1635:ltd,ddk}
rhg{x<979:fj,a>3057:R,qsp}
qmc{a<2647:A,x<1729:A,R}
btl{m>3623:ns,A}
fvf{a>1549:A,m>2971:A,R}
lzf{m<2457:hfs,a>1458:pd,A}
hvr{x<2204:R,s<1629:A,A}
xkv{m>2738:A,m>2301:A,x<3267:A,R}
nrb{s<1224:A,s>1500:R,R}
cd{a>1580:A,R}
ghr{x<381:A,x<518:A,a<2082:A,R}
fsf{m<414:R,pfl}
ms{a<3420:A,vb}
jgb{m<3826:R,s<1908:R,mbl}
qvc{x>742:R,x<658:A,A}
qgp{m>2561:R,m>1286:A,m<635:dsc,A}
hjd{s>239:R,a<1869:A,x<2912:R,A}
ld{m<1560:R,m>1848:A,a>2812:bnp,cn}
dg{s<1695:R,R}
jvg{a<3844:A,R}
vzk{a<1812:tz,a<3244:pml,srt}
qbp{s>3332:hl,m<962:R,m>988:ts,A}
tpp{x<3399:R,m<1206:fq,a>977:A,qkf}
bnp{x<3279:R,R}
hh{x>1536:qmf,s<2606:llk,a>1794:qrd,rqn}
lfr{s<3907:R,R}
hx{s<136:A,s<191:A,a<1049:R,A}
st{s<3963:R,a<1925:A,a<2975:ch,tkk}
hr{a<2659:A,m<1091:R,m<1115:hbt,R}
cbc{s>927:R,s>822:ql,A}
bbm{m<3364:A,x>2593:A,R}
htt{m>2896:A,s<2769:A,x>234:jb,A}
xqv{s<1321:klt,s>1763:rfd,jh}
hbn{a<3438:gqr,db}
rpb{x>2821:R,s>968:R,s>513:A,A}
kdv{x<1793:A,A}
jr{s<1637:R,s<1661:R,A}
scj{s>2329:A,a>3569:jvg,R}
csz{m>1654:R,s<1822:A,s<1857:R,R}
nq{s<3919:A,A}
dc{a>3341:A,x<299:A,m>2827:A,R}
zs{x<513:kp,a<2462:A,qvc}
dmt{m<855:R,x<1459:R,R}
kn{s>2507:A,jv}
mc{a>1432:A,R}
pnx{x>3628:R,m<3272:fgz,a<1141:A,A}
mrn{m>2067:fp,nhk}
sf{a>681:R,s<1871:A,R}
qcj{s>1900:A,a>503:A,a<306:pbc,sj}
xjg{m<2126:hgq,tbb}
vxn{a<2585:R,s>1926:jbh,dmt}
nns{s>2674:R,A}
qmf{x<1694:kph,m<1255:khs,x<1873:R,hd}
gqv{m<2093:njt,tf}
mh{s<3488:A,a<1691:R,R}
znr{x<2042:R,R}
zf{s>3085:mk,x>2867:ffr,lxd}
bq{a<276:A,A}
vxs{x<1573:tng,s<3367:sh,m<365:sb,ntj}
in{x<1964:rvf,nz}
jk{m<783:R,A}
xg{s<3030:tp,mkc}
ktt{x>1621:cz,m<901:vxn,fg}
nz{s>2383:fh,m>2006:hdk,tm}
ts{a<3384:R,s>3147:R,x<1720:R,R}
nt{s>3568:R,x>1597:R,R}
tvz{x>1752:A,A}
rt{s<1808:nl,x>2618:A,m<473:bp,xpx}
dpk{m<2452:R,R}
vp{m>875:R,m<403:R,x<3856:A,A}
nh{s<2072:R,a<688:R,m<2798:A,A}
hgq{m<991:A,A}
pts{x<1515:gp,lx}
jml{a<1169:A,A}
tx{x>2304:R,R}
rcn{a>1547:dss,R}
xhj{m>2445:R,R}
th{s<3511:A,a>859:A,x<1514:R,R}
vz{s>426:A,A}
gkv{a>1349:bxx,s<2201:A,A}
zh{x>827:R,x>374:A,R}
fk{s<1359:R,R}
jlf{m>553:rmc,s<3172:rbf,a>1384:mj,gs}
lm{m<2274:R,m>2567:R,A}
mms{s<1666:A,R}
jgp{s>1460:A,m<2389:A,R}
mk{a<2190:zx,x>2929:A,R}
sft{x<2599:R,s>1841:R,x<2724:R,R}
xzx{m>1160:gnt,vv}
blv{a>1485:A,s>3754:A,R}
pgf{a<32:R,R}
njt{s<3288:R,m>776:R,A}
tr{s>3459:mh,A}
tlj{s>3128:rp,ddt}
jhz{x>2072:R,R}
jb{x<329:A,m<2444:R,m>2696:A,R}
gl{s<2413:A,x>600:rsm,R}
dh{a<3462:R,s>2042:A,R}
lft{m<1450:A,s>3773:A,s<3663:smm,A}
pnm{a>1315:R,x>3142:A,x<2517:R,R}
rq{s<1359:R,s<1424:R,x<2279:R,R}
nsx{a<2609:mjc,s<2240:A,a<2883:R,R}
dm{s>528:A,s>211:R,s<125:A,A}
rgk{m>703:nc,a<1731:ktn,hxt}
df{a>447:nh,a>167:A,a>62:dpk,pgf}
xcz{s<1073:R,a>3114:R,R}
tjz{x>3822:A,m<3377:kkh,m>3470:hb,qq}
ch{a<2397:A,m<1402:A,A}
fdc{x<2650:R,s>585:xcz,flb}
hbt{m>1103:A,m<1096:A,R}
llk{x<1394:njh,s>2044:sr,a>2453:R,zpc}
rz{m<2451:tn,R}
kk{s>1825:vcx,s<1776:nhv,srk}
pv{x>1448:R,x<1372:R,a<1453:R,R}
jh{m<1018:kvf,ld}
nx{m>2411:A,A}
sb{x>1750:R,m<273:R,R}
jm{a>1824:R,m>784:A,m>756:mg,A}
ls{x>2462:A,a>2579:A,a<1281:R,R}
cn{s>1580:A,R}
sd{s>2497:A,R}
grb{m<952:bsl,A}
gqr{s<3365:R,R}
lch{a<3078:gqp,a<3493:zjd,x<2193:mnp,A}
rl{x<1045:zs,a>2417:zr,xvr}
jdq{x>3267:A,s>1799:A,a>426:A,R}
vb{m>2271:R,R}
lr{m<987:pm,m>1001:A,a<2338:mxx,R}
zg{a>638:A,R}
tcm{m<2415:qr,s>1537:A,s>1522:A,gzx}
zlg{x>927:A,R}
nhs{m<2318:A,a<3708:A,s>2209:A,R}
hfs{m>2160:R,s<1821:R,A}
pt{x>2456:R,m>2791:R,R}
qrd{s>3510:A,jsl}
ssv{m>1662:R,m>1485:A,a>434:R,A}
vsr{s>958:A,x<2658:R,R}
dr{s<3834:R,x>459:A,R}
hnz{a<2548:ggc,m>898:qbp,hbn}
cl{m<1339:R,A}
gnt{a>1526:A,m<1641:A,R}
zhc{m<1599:vfg,s<2173:nrx,x>408:hds,htt}
bh{m<3521:R,R}
dp{a>1160:tnb,m>2742:A,A}
hmt{s<3683:A,m<3306:R,R}
qv{a<2401:R,m<3796:fcm,m<3902:R,rg}
lcv{s>190:fvf,x>2218:kj,a<1608:A,jhz}
xfh{s<2582:A,x>3082:R,a<682:rtf,bb}
hs{s>2202:A,A}
tlz{a<1339:A,x<3492:A,R}
xz{m<3730:R,s<288:R,A}
tgr{m>2513:pmr,vp}
njh{a>1699:R,R}
qrj{x>3725:R,x>3418:R,x>3312:mbk,xkv}
lhj{x>2846:A,m>688:xl,mqq}
mm{x<811:R,s<3133:R,m>1758:bst,R}
ddt{x<144:R,m<2631:R,s<2963:A,R}
tgn{m<3525:A,m<3732:R,A}
ggc{x<1595:A,A}
mnp{x>2076:A,a>3706:A,a>3581:A,R}
kq{x>3221:xrv,x<2561:jsj,s>2750:zf,rd}
jv{m>2751:R,A}
zr{m<3280:A,a>3115:xz,s<260:R,fr}
khs{x<1821:R,A}
vmc{a>1367:xgz,m<2458:sz,m>2809:qcj,jlr}
ds{s>2997:hnz,s<2376:ktt,bjb}
hd{s<2994:R,m<1314:R,A}
dfx{s<2255:R,A}
lb{m<1935:R,R}
mld{s<2852:R,s<3570:R,A}
kfx{s<3568:cs,m<2259:spt,m<2931:pgj,vsv}
ntj{a<2847:R,s<3467:R,m<455:A,R}
lpp{m>2971:jt,s>772:lcd,s>441:R,cj}
nm{s>3697:R,x>680:R,A}
qmv{m>420:rpb,x>2803:R,s>1192:R,rcd}
gzx{m>2575:R,m>2502:R,x<2559:R,A}
ht{a<2585:R,A}
xnk{s>314:R,a>3184:A,R}
zpc{m<1253:R,s<1810:A,s<1890:R,R}
kf{m>1348:pts,m<831:jlf,m>1015:qfs,ds}
jlr{m<2643:R,s>1881:rml,R}
sr{s<2325:R,s<2491:R,A}
gc{s<1618:A,A}
dss{s>1521:A,a<1652:R,R}
rf{s>880:A,a>1402:vr,tlz}
vv{s>1399:A,s<766:R,x<2276:A,A}
vcj{m<2719:A,m<2895:R,m>3075:R,R}
nl{a>645:R,s>1428:A,x<2406:A,A}
hmq{x<3189:R,A}
xvr{x>1530:tvz,s<307:R,R}
kdt{m>2670:skc,a>1618:nm,R}
fz{m<1112:ptr,s>460:A,s>223:tld,mkh}
qkf{m>1594:R,A}
zjd{x>2246:A,R}
cxk{s>2529:A,x<2803:R,A}
vcx{s<1906:xct,R}
tn{x>494:A,m<2336:R,R}
qp{x<1627:A,m>79:A,R}
dv{m<676:A,a<2495:A,R}
kj{s<79:R,m>3174:A,x<2409:A,R}
xd{x>2885:A,A}
bnj{s>1720:R,s<1599:tb,A}
hdk{s<1511:zj,s>2012:vzk,m<3167:zvh,bqs}
bqs{m>3533:lc,x<3049:drn,a<2535:hff,zrz}
scm{x>3137:A,a<1743:R,R}
mnf{m<584:A,R}
jnf{m<3441:zm,R}
ptf{m<3310:R,R}
pm{a>2017:A,A}
nr{s>779:rhg,bs}
mqq{m<354:R,s>2296:R,m<538:R,A}
nf{x<3798:A,x>3904:A,A}
qsp{a>2768:R,A}
lcd{s<1089:R,A}
xq{a<2663:R,x<2423:R,R}
gb{s>1963:R,s<1910:R,s>1932:R,A}

{x=167,m=55,a=1771,s=1356}
{x=181,m=2122,a=368,s=35}
{x=7,m=82,a=973,s=146}
{x=403,m=13,a=2480,s=951}
{x=3462,m=1363,a=155,s=1427}
{x=2478,m=1629,a=870,s=1846}
{x=2277,m=2806,a=45,s=1016}
{x=304,m=3023,a=985,s=2710}
{x=1030,m=1949,a=1987,s=637}
{x=1214,m=93,a=103,s=371}
{x=695,m=194,a=808,s=2631}
{x=937,m=560,a=1650,s=909}
{x=591,m=73,a=328,s=201}
{x=466,m=1081,a=459,s=93}
{x=971,m=1229,a=136,s=405}
{x=1928,m=1019,a=358,s=2002}
{x=1226,m=1802,a=68,s=103}
{x=218,m=541,a=68,s=2452}
{x=1254,m=1081,a=104,s=717}
{x=410,m=312,a=3840,s=5}
{x=39,m=1983,a=1174,s=650}
{x=2166,m=358,a=209,s=1963}
{x=1084,m=88,a=1945,s=202}
{x=1118,m=214,a=964,s=109}
{x=1456,m=263,a=665,s=755}
{x=1613,m=329,a=520,s=1608}
{x=306,m=717,a=360,s=2287}
{x=2054,m=677,a=3554,s=43}
{x=1347,m=272,a=2322,s=227}
{x=845,m=401,a=1148,s=267}
{x=457,m=1646,a=3093,s=60}
{x=288,m=385,a=9,s=475}
{x=2578,m=769,a=1043,s=103}
{x=1595,m=772,a=32,s=1172}
{x=234,m=481,a=334,s=1066}
{x=1861,m=197,a=866,s=2379}
{x=217,m=420,a=2923,s=471}
{x=986,m=3304,a=5,s=520}
{x=793,m=736,a=490,s=607}
{x=1568,m=310,a=45,s=632}
{x=469,m=1521,a=931,s=1247}
{x=2279,m=2275,a=659,s=1259}
{x=276,m=478,a=1563,s=2412}
{x=3147,m=2306,a=184,s=410}
{x=2325,m=2211,a=75,s=2725}
{x=1789,m=217,a=710,s=451}
{x=294,m=1241,a=1904,s=296}
{x=712,m=1127,a=98,s=1173}
{x=293,m=1902,a=925,s=1712}
{x=1134,m=169,a=2106,s=386}
{x=2465,m=1452,a=593,s=666}
{x=2301,m=472,a=1948,s=1278}
{x=1222,m=610,a=1653,s=378}
{x=396,m=484,a=189,s=897}
{x=1113,m=807,a=3134,s=1041}
{x=483,m=284,a=956,s=46}
{x=471,m=290,a=154,s=40}
{x=62,m=2156,a=56,s=54}
{x=934,m=57,a=1516,s=2947}
{x=53,m=246,a=828,s=302}
{x=2368,m=1025,a=289,s=1195}
{x=4,m=1010,a=55,s=3303}
{x=344,m=490,a=1308,s=1740}
{x=464,m=225,a=2385,s=471}
{x=3369,m=2507,a=62,s=495}
{x=1432,m=2375,a=1,s=20}
{x=14,m=462,a=559,s=723}
{x=118,m=1038,a=12,s=362}
{x=209,m=1489,a=1692,s=297}
{x=364,m=1340,a=499,s=103}
{x=710,m=958,a=1587,s=2595}
{x=902,m=1749,a=279,s=835}
{x=1929,m=1622,a=1379,s=2167}
{x=1055,m=8,a=2965,s=3432}
{x=185,m=2467,a=1169,s=273}
{x=2638,m=2352,a=518,s=41}
{x=666,m=538,a=1586,s=956}
{x=33,m=40,a=2217,s=132}
{x=44,m=1095,a=208,s=130}
{x=2392,m=1825,a=619,s=755}
{x=3163,m=258,a=144,s=3259}
{x=680,m=362,a=1286,s=384}
{x=539,m=2592,a=205,s=3243}
{x=264,m=363,a=1008,s=2371}
{x=48,m=976,a=168,s=237}
{x=231,m=551,a=893,s=389}
{x=554,m=2283,a=2981,s=471}
{x=434,m=215,a=872,s=58}
{x=1483,m=1540,a=3479,s=1527}
{x=376,m=1806,a=272,s=1004}
{x=2692,m=60,a=1460,s=1300}
{x=243,m=679,a=693,s=820}
{x=1736,m=2489,a=239,s=1635}
{x=580,m=1740,a=347,s=751}
{x=1044,m=829,a=1190,s=714}
{x=1729,m=451,a=329,s=994}
{x=3015,m=555,a=1594,s=440}
{x=330,m=1177,a=1038,s=1301}
{x=1097,m=73,a=631,s=160}
{x=1587,m=2301,a=108,s=189}
{x=23,m=400,a=377,s=1195}
{x=814,m=1336,a=533,s=631}
{x=340,m=366,a=473,s=2707}
{x=1904,m=306,a=3361,s=704}
{x=2085,m=476,a=1417,s=1613}
{x=3466,m=1381,a=753,s=24}
{x=1568,m=54,a=229,s=273}
{x=105,m=31,a=2344,s=1014}
{x=1686,m=112,a=92,s=27}
{x=297,m=3335,a=119,s=2812}
{x=603,m=50,a=1443,s=993}
{x=1093,m=402,a=1216,s=4}
{x=2854,m=271,a=1232,s=918}
{x=2583,m=3016,a=61,s=1070}
{x=2312,m=16,a=2531,s=621}
{x=1274,m=2156,a=309,s=1886}
{x=298,m=13,a=1344,s=90}
{x=1111,m=962,a=531,s=1474}
{x=286,m=2539,a=196,s=537}
{x=634,m=575,a=1300,s=836}
{x=653,m=2299,a=2516,s=2252}
{x=1897,m=815,a=312,s=12}
{x=108,m=622,a=425,s=605}
{x=2906,m=387,a=730,s=2323}
{x=3,m=1920,a=727,s=430}
{x=1525,m=2819,a=1426,s=1662}
{x=109,m=799,a=318,s=208}
{x=526,m=1332,a=2025,s=221}
{x=222,m=1040,a=2630,s=2804}
{x=69,m=222,a=214,s=2401}
{x=28,m=1905,a=1349,s=738}
{x=1309,m=109,a=656,s=1085}
{x=418,m=113,a=1640,s=1816}
{x=3359,m=236,a=2,s=23}
{x=1210,m=595,a=2850,s=1716}
{x=239,m=103,a=2064,s=74}
{x=695,m=692,a=1143,s=1811}
{x=1293,m=915,a=1941,s=566}
{x=526,m=424,a=180,s=1076}
{x=142,m=358,a=2591,s=2768}
{x=2210,m=107,a=15,s=556}
{x=708,m=544,a=1873,s=1891}
{x=2495,m=554,a=128,s=23}
{x=685,m=33,a=1516,s=982}
{x=423,m=5,a=1000,s=1720}
{x=2827,m=831,a=746,s=821}
{x=416,m=68,a=538,s=1106}
{x=150,m=1049,a=336,s=444}
{x=121,m=799,a=548,s=145}
{x=3461,m=3082,a=807,s=1205}
{x=797,m=347,a=222,s=197}
{x=1318,m=978,a=2614,s=1001}
{x=2011,m=1317,a=161,s=1171}
{x=13,m=204,a=881,s=838}
{x=1126,m=2843,a=1405,s=277}
{x=3093,m=796,a=1817,s=34}
{x=2207,m=408,a=350,s=523}
{x=1825,m=115,a=957,s=2567}
{x=402,m=3773,a=2272,s=269}
{x=393,m=224,a=169,s=109}
{x=1594,m=28,a=1453,s=851}
{x=1193,m=3463,a=248,s=3253}
{x=1760,m=1054,a=361,s=1020}
{x=2628,m=632,a=953,s=186}
{x=566,m=965,a=2764,s=1}
{x=694,m=2976,a=1084,s=128}
{x=1239,m=29,a=3522,s=713}
{x=220,m=152,a=708,s=876}
{x=978,m=803,a=1013,s=43}
{x=1515,m=927,a=2182,s=1121}
{x=2695,m=1511,a=1138,s=8}
{x=168,m=1231,a=176,s=719}
{x=507,m=125,a=1519,s=2347}
{x=1419,m=182,a=1705,s=806}
{x=1673,m=46,a=1494,s=1888}
{x=243,m=2688,a=251,s=645}
{x=2502,m=121,a=11,s=499}
{x=677,m=473,a=503,s=313}
{x=1337,m=1294,a=796,s=308}
{x=1002,m=545,a=491,s=1120}
{x=427,m=2097,a=875,s=1445}
{x=102,m=1611,a=851,s=299}
{x=292,m=1248,a=2702,s=1652}
{x=238,m=2250,a=94,s=455}
{x=658,m=1188,a=550,s=833}
{x=12,m=1659,a=511,s=1834}
{x=601,m=985,a=43,s=591}
{x=1740,m=1657,a=532,s=854}
{x=212,m=1432,a=3425,s=16}
{x=1337,m=7,a=1973,s=1675}
{x=1734,m=3260,a=933,s=1438}
{x=220,m=402,a=338,s=169}
{x=228,m=1134,a=688,s=1626}
{x=336,m=1293,a=61,s=453}
{x=68,m=601,a=563,s=2913}
{x=2261,m=331,a=617,s=1674}
{x=144,m=107,a=1741,s=665}
{x=301,m=207,a=2263,s=37}
{x=1007,m=2727,a=323,s=1823}
{x=193,m=3683,a=43,s=167}`

let map: { [key: string]: string[] } = {}
export default async function Page() {
  map = {}
  const input = puzzle
  const [inst, parts] = input.split('\n\n')
  mapInstruction(inst.split('\n'))
  // processParts(parts.split('\n'))
  // console.log(split(new Range(1, 4), new Range(3, 5)))
  processPartRange(parts.split('\n'))
  console.log("Finished")
  return
}

function mapInstruction(input: string[]) {
  for (const inst of input) {
    const [name, s2] = inst.split('{')
    const rules = s2.split('}')[0].split(',')
    map[name] = rules
  }
}

type cat = keyof ratings

type ratingsP2 = {
  x: Range,
  m: Range,
  a: Range,
  s: Range,
}
function processPartRange(input: string[]) {
  // part 2
  let sum = 0
  sum += filterPartRange({
    x: new Range(1, 4000),
    m: new Range(1, 4000),
    a: new Range(1, 4000),
    s: new Range(1, 4000),
  }, 'in')
  console.log(sum)
}

function filterPartRange(r: ratingsP2, name: string): number {

  console.log(`Rating`, `${r.x.str} ${r.m.str} ${r.a.str} ${r.s.str}`, `Key:`, name, `Rules: `, map[name])

  if (name === "A") return r.x.len * r.m.len * r.a.len * r.s.len
  if (name === "R") return 0

  let acceptedPartCount = 0
  const ratingsRange: ratingsP2[] = [r]

  // For every rule,
  for (const rule of map[name]) {

    if (!has(rule, ':')) {
      return ratingsRange.reduce((sum, r) => sum + filterPartRange(r, rule), acceptedPartCount)
    }

    const [cond, dest] = rule.split(':'),
      len = ratingsRange.length

    for (let i = 0; i < len; i++) {
      const rating = ratingsRange.shift()!,
        cat = cond[0] as cat, // selected category
        boundary = parseInt(cond.split(cond[1])[1]),
        range = rating[cat], // range of selected category
        ranges = {
          in: [] as Range[],
          out: [] as Range[]
        }
      
      let filter: Range | undefined = undefined

      if (cond[1] === '<') {
        filter = new Range(0, boundary - 1) // filter from rules
      }
      if (cond[1] === '>') {
        filter = new Range(boundary + 1, Infinity) // filter from rules
      }

      if (!filter) throw new Error('cond[1] not valid')

      split(range, filter!)
        .filter(r => r.min >= range.min && r.max <= range.max)
        .forEach(r => {
          if (inside(r, filter!)) ranges.in.push(r)
          else ranges.out.push(r)
        })
      
      ranges.in.forEach(
        r => acceptedPartCount += filterPartRange({ ...rating, [cat]: r }, dest)
      )
      ranges.out.forEach(
        r => ratingsRange.push({ ...rating, [cat]: r })
      )
    }
  }
  console.log('Count: ', acceptedPartCount)
  return acceptedPartCount
}

function split(source: Range, against: Range) {
  const ranges: Range[] = []
  const points = [
    [source.min, true] as const,
    [source.max, false] as const,
    [against.min, true] as const,
    [against.max, false] as const
  ]
  points.sort((a, b) => a[0] - b[0])
  let prevPoint = points[0][0]
  let layer = 0
  for (const point of points) {
    if (layer && point[0] >= prevPoint) ranges.push(
      new Range(prevPoint, point[1] ? point[0] - 1 : point[0])
    )
    prevPoint = !point[1] ? point[0] + 1 : point[0]
    if (point[1]) layer++
    if (!point[1]) layer--
  }
  return ranges
}

function inside(child: Range, container: Range) {
  return (child.min >= container.min) && (child.max <= container.max)
}

// Part I
type ratings = {
  x: number,
  m: number,
  a: number,
  s: number,
}
function processParts(input: string[]) {
  let sum = 0
  for (const part of input) {
    const [x, m, a, s] = part.slice(1, part.length - 1).split(',')
    const ratings = {
      x: parseInt(x.split('=')[1]),
      m: parseInt(m.split('=')[1]),
      a: parseInt(a.split('=')[1]),
      s: parseInt(s.split('=')[1]),
    }
    const isAccepted = filterPart(ratings, 'in')
    // console.log(isAccepted)
    if (isAccepted) {
      sum += ratings.x + ratings.m + ratings.a + ratings.s
    }
  }
  console.log(sum)
  return sum
}

function filterPart(ratings: ratings, name: string) {
  if (name === "A") return true
  if (name === "R") return false
  for (const rule of map[name]) {
    if (has(rule, ':')) {
      const [cond, dest] = rule.split(':')
      const cat = cond[0] as cat
      // console.log(cond[0], cond[1], int(cond.split(cond[1])[1]))
      if (
        cond[1] === '<' ? ratings[cat] < parseInt(cond.split(cond[1])[1]) :
          cond[1] === '>' ? ratings[cat] > parseInt(cond.split(cond[1])[1]) : false
      ) {
        // console.log(ratings, "Yes!", rule, dest)
        return filterPart(ratings, dest)
      }
    }
    else { // end of rules
      return filterPart(ratings, rule)
    }
  }
}

