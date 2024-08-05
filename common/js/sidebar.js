function loadsidebar()
{
	var targetProtocol = "https:";
	if (window.location.protocol != targetProtocol && window.location.protocol != "file:") {
	 window.location.href = targetProtocol + window.location.href.substring(window.location.protocol.length);
	}
	if(!(location.pathname=='/fgo-vz/'||location.pathname.indexOf('index')!=-1)) {$('div.container').prepend('<script async src="//pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"><\/script><div style="margin:0px auto;width:728px;height:90px;background:url(\'https://fgo.kazemai.io/common/images/info_banner.png\');"><ins class="adsbygoogle"     style="display:inline-block;width:728px;height:90px"     data-ad-client="ca-pub-3881979894805188"     data-ad-slot="5322095555"></ins><script>(adsbygoogle = window.adsbygoogle || []).push({});<\/script></div>');slideOpen();}
	$('#div_right_sidebar').append('<a href="./"><div class="sidebarl" style="background-image:url(https://fgo.kazemai.io/common/images/sidebar01.png);">首頁</div></a><a href="https://www.facebook.com/472978160149131/" target="_blank"><div class="sidebarl" style="background-image:url(https://fgo.kazemai.io/common/images/sidebar17.png);">Facebook</div></a><a href="https://discord.gg/nEaXVvS" target="_blank"><div class="sidebarl" style="background-image:url(https://fgo.kazemai.io/common/images/sidebar17.png);">Discord</div></a><a href="servant.html"><div class="sidebarl" style="background-image:url(https://fgo.kazemai.io/common/images/sidebar05.png);">從者</div></a><a href="skill.html"><div class="sidebar" style="background-image:url(https://fgo.kazemai.io/common/images/sidebar00.png);">技能</div></a><a href="noble_phantasm.html"><div class="sidebar" style="background-image:url(https://fgo.kazemai.io/common/images/sidebar00.png);">寶具</div></a><a href="lv100.html"><div class="sidebar" style="background-image:url(https://fgo.kazemai.io/common/images/sidebar00.png);">HP與ATK</div></a><a href="hidden.html"><div class="sidebar" style="background-image:url(https://fgo.kazemai.io/common/images/sidebar00.png);">隱藏數値</div></a><a href="craft_essence.html"><div class="sidebarl" style="background-image:url(https://fgo.kazemai.io/common/images/sidebar09.png);">概念禮裝</div></a><a href="command_code.html"><div class="sidebarl" style="background-image:url(https://fgo.kazemai.io/common/images/sidebar18.png);">指令紋章</div></a><a href="item_drop.html"><div class="sidebarl" style="background-image:url(https://fgo.kazemai.io/common/images/sidebar15.png);">素材道具</div></a><a href="quest.html"><div class="sidebarl" style="background-image:url(https://fgo.kazemai.io/common/images/sidebar04.png);">關卡</div></a><a href="master_equip.html"><div class="sidebarl" style="background-image:url(https://fgo.kazemai.io/common/images/sidebar03.png);">御主相關</div></a><a href="donate.html"><div class="sidebarl" style="background-image:url(https://fgo.kazemai.io/common/images/sidebar11.png);"><span class="red">贊助支持</span></div></a><div class="sidebarl" id="survey_bannner" style="background-image:url(https://fgo.kazemai.io/common/images/sidebar08.png);">意見回饋</div><a href="event_history.html"><div class="sidebarl" style="background-image:url(https://fgo.kazemai.io/common/images/sidebar10.png);">過去活動</div></a><a href="gacha_9th_pickup.html" title="「9周年記念 太空埃列什基伽勒Pick Up召喚」"><div class="sidebar_event" style="background-image:url(https://fgo.kazemai.io/common/images/2024/9th_pickup_askja/top_banner.png);"></div></a><a href="gacha_9th_destiny.html" title="「命運指定召喚」"><div class="sidebar_event" style="background-image:url(https://fgo.kazemai.io/common/images/2024/9th_destiny_sdfrl/top_banner.png);"></div></a><a href="gacha_9th_luckybag.html" title="「9周年記念福袋召喚(5周年以後 展區別17劃分)」"><div class="sidebar_event" style="background-image:url(https://fgo.kazemai.io/common/images/2024/9th_luckybag_owrpc/top_banner.png);"></div></a><a href="gacha_9th_pickup2.html" title="「9周年記念限定從者每日交替Pick Up召喚」"><div class="sidebar_event" style="background-image:url(https://fgo.kazemai.io/common/images/2024/9th_pickup2_qyqkc/top_banner.png);"></div></a><a href="event_9th_anniversary_cp.html" title="『「FGO Expo ～Fate/Grand Order Fes. 2024 9th Anniversary～」倒數宣傳活動』"><div class="sidebar_event" style="background-image:url(https://fgo.kazemai.io/common/images/2024/9th_anniversary_cp_kglxn/top_banner.png);"></div></a><a href="event_2024summer_participation_cp2.html" title="『「泳裝活動2024」參加條件通過聲援宣傳活動 第2彈』"><div class="sidebar_event" style="background-image:url(https://fgo.kazemai.io/common/images/2024/2024summer_participation_cp2_02_qoike/top_banner.png);"></div></a><a href="event_0601info24.html" title="魔力稜鏡交換限定概念禮裝追加！"><div class="sidebar_event" style="background-image:url(https://fgo.kazemai.io/common/images/2024/0601info_eldax/top_banner.png);"></div></a><div style="height:35px;"></div>');
	$('#survey_bannner').on("click", function() {
		if(!confirm ('本站與FGO官方無任何關係，不受理任何投訴\n點擊[取消]前往') ){
			var newwin = window.open();
			newwin.location= 'https://www.facebook.com/messages/t/472978160149131';
		}
	});
	reloadHash();
}
function sortByElmentNo(Object1){Object1 = Object1.sort(function (a,b){return a.collectionNo-b.collectionNo;});}
function sortByElmentNoN(Object1){Object1 = Object1.sort(function (a,b){return b.collectionNo-a.collectionNo;});}
function sortByElmentId(Object1){Object1 = Object1.sort(function (a,b){return a.id-b.id;});}
function sortByElmentType(Object1){Object1 = Object1.sort(function (a,b){return a.type - b.type || a.collectionNo - b.collectionNo;});}
function reloadHash() {
	var hashO = location.hash;
	if(hashO.length!=0) location.hash=hashO;
}
function slideOpen() {
	$(".accordion dt:not(.date)").on("click", function() {
		$(this).next("dd").slideToggle();
		$(this).toggleClass("open");
	});
}
function addCommas(nStr) {
	nStr += '';
	x = nStr.split('.');
	x1 = x[0];
	x2 = x.length > 1 ? '.' + x[1] : '';
	var rgx = /(\d+)(\d{3})/;
	while (rgx.test(x1)) {
		x1 = x1.replace(rgx, '$1' + ',' + '$2');
	}
	return x1 + x2;
}
function findItemName(itemid)
{
	for(var i=0;i<master.mstItem.length;i++)
	{
		if(master.mstItem[i].id==itemid) {return master.mstItem[i].name;break;}
	}
	return "未知道具"+itemid;
}
function findName(searchData,searchId)
{
	for(var i=0;i<searchData.length;i++)
		if(searchData[i].id==searchId) return i;
	return null;
}
function nowTime()
{
	var date = new Date() ;
	var unixTimestamp = Math.floor( date.getTime() / 1000 ) ;
	return unixTimestamp;
}
function getUrl(getStr)
{
	var url=window.location.toString(); //取得當前網址   
	var str=""; //參數中等號左邊的值   
	var str_value=""; //參數中等號右邊的值   
	if(url.indexOf("?")!=-1){   
		//如果網址有"?"符號   
		var ary=url.split("?")[1].split("&");   
		//取得"?"右邊網址後利用"&"分割字串存入ary陣列 ["a=1","b=2","c=3"]   
		for(var i in ary){   
			//取得陣列長度去跑迴圈，如:網址有三個參數，則會跑三次   
			str=ary[i].split("=")[0];   
			//取得參數"="左邊的值存入str變數中   
			if (str == getStr) {   
			//若str等於想要抓取參數 如:b   
				str_value = decodeURI(ary[i].split("=")[1]);   
				//取得b等號右邊的值並經過中文轉碼後存入str_value   
			}   
		}   
	}
	return str_value;
}
function commonReleaseCheck(cId)
{
	for(var c in master.mstCommonRelease)
	{
		if(master.mstCommonRelease[c].id==cId)
		{
			var tmpC = master.mstCommonRelease[c];
			return condtionRead(tmpC.condType,tmpC.condId,tmpC.condNum);
		}
	}
    return '';
}
function condtionRead(cType,cId,cNum)
{
	switch(cType)
    {
        case 0://NONE
            return '預設';
            break;
        case 1://QUEST_CLEAR
            return '通過'+questRea(cId)+'後';
            break;
        case 2://ITEM_GET
            var tmpItem = master.mstItem[findName(master.mstItem,cId)];
            if(tmpItem!=null)
            {
                return '入手<div class="itemST" style="background-image: url("https://fgo.kazemai.io/common/images/icon/items/'+tmpItem.imageId+'") alt="+tmpItem.name+">'+cNum>1 ? cNum : ''+'</div>';
            }
            break;
        case 7://SVT_LIMIT
            return '〔'+findSvtNameZh2(cId)+'〕靈基再臨第'+cNum+'階段後';
            break;
        case 9://SVT_FRIENDSHIP
            return '〔'+findSvtNameZh2(cId)+'〕羈絆等級Lv.'+cNum+'';
            break;
        case 24://EVENT_MISSION_ACHIEVE
            var tmpMission = master.mstEventMission[findName(master.mstEventMission,cId)];
            if(tmpMission!=null)
            {
                return '達成任務No.'+tmpMission.dispNo+'：'+tmpMission.name;
            }
            break;
        default:
        return '';
    }
    return '';
}

function questRea(qstId)
{
	for(var w in master.mstWar)
	{
		if(master.mstWar[w].lastQuestId==qstId)
		{
			return '「'+master.mstWar[w].longName+'」';
			break;
		}
	}
	var skillText="<span data-flow='top' data-tooltip='";
	for(var k in master.mstQuest)
	{
		if(master.mstQuest[k].id==qstId)
		{
			if((master.mstQuest[k].type==5||master.mstQuest[k].id>94000000)&&master.mstQuest[k].chapterId==0) skillText+="活動關卡";
			else if(master.mstQuest[k].type==1) skillText+="主線關卡";
			else if(master.mstQuest[k].type==2) skillText+="Free關卡";
			else if(master.mstQuest[k].type==3) skillText+="幕間物語";
			{
				var realseLimit,realseFriend,isRealeased=false,isLastQuest=false;
				var realseArr = new Array();
				for(var rea in master.mstQuestRelease){
					if(master.mstQuestRelease[rea].questId==master.mstQuest[k].id)
					{
						if(master.mstQuestRelease[rea].type==1)
						{
							if(master.mstQuestRelease[rea].targetId!=0&&!isRealeased)
							{
								for(var sp in master.mstSpot)
								{
									if(master.mstSpot[sp].id==master.mstQuest[k].spotId)
									{
										skillText+="\n地點："+master.mstWar[findName(master.mstWar,master.mstSpot[sp].warId)].name+" → "+master.mstSpot[sp].name+"";
										break;
									}
								}
								for(var war in master.mstWar)
									if(master.mstQuestRelease[rea].targetId==master.mstWar[war].lastQuestId)
									{
										realseArr.push("通過「"+master.mstWar[war].name.replace(/点/g,"點").replace(/亜/g,"亞")+"」");
										isLastQuest=true;break;
									}
								if(!isLastQuest)
									skillText+=("\n須先通過："+master.mstQuest[findName(master.mstQuest,master.mstQuestRelease[rea].targetId)].name);
							}
						}
						if(master.mstQuestRelease[rea].type==7)
							realseLimit=master.mstQuestRelease[rea].value;
						if(master.mstQuestRelease[rea].type==9)
							realseFriend=master.mstQuestRelease[rea].value;
						isRealeased=true;
					}
				}
				if(isRealeased==false) skillText+="\n尚未開放";
				else{
					if(realseLimit) realseArr.push("靈基第"+realseLimit+"階段");
					if(realseFriend) realseArr.push("絆Lv."+realseFriend+"");
					if(master.mstQuest[k].type!=1)
					{
						if(realseArr.length>0) skillText+="\n開放條件：";
						for(rea in realseArr)
						{	if(rea!=0)  skillText+="＆"; skillText+=realseArr[rea];}
					}
				}
			}
			skillText+="'>"+master.mstQuest[k].name+"</span>";
			break;
		}
	}
	if(skillText=="<span data-flow='top' data-tooltip='") skillText="？？？";
	return skillText;
}
function svtFace(svtId)
{
	var txt='',isFind = false;
	for(var i in master.mstSvt)
	{
		if(master.mstSvt[i].id==svtId)
		{
			var tmpSvt = master.mstSvt[i];

			if(tmpSvt.type==6&&(tmpSvt.flag&4))//Bond CE
			{
                txt+='<a href="ceData.html?no='+tmpSvt.collectionNo+'"><div class="itemMTR_Face" style="background-image: url(\'https://fgo.kazemai.io/common/images/icon/faces/'+tmpSvt.id+'.png\')" title="'+tmpSvt.name+'"><img src="https://fgo.kazemai.io/common/images/icon/frames/img_bond_category.png" style="width:40%;"/></div></a>';
			}
			else if(tmpSvt.type==6&&(tmpSvt.flag&32))//Chocolate CE
			{
                txt+='<a href="ceData.html?no='+tmpSvt.collectionNo+'"><div class="itemMTR_Face" style="background-image: url(\'https://fgo.kazemai.io/common/images/icon/faces/'+tmpSvt.id+'.png\')" title="'+tmpSvt.name+'"><img src="https://fgo.kazemai.io/common/images/icon/frames/img_chocolate_category.png" style="width:40%;"/></div></a>';
			}
			else if(tmpSvt.type==6||tmpSvt.type==98)
			{
				txt+='<a href="ceData.html?no='+tmpSvt.collectionNo+'"><img data-src="https://fgo.kazemai.io/common/images/icon/faces/'+tmpSvt.id+'.png" class="lazyload face_icon" title="'+tmpSvt.name+'" /></a>';
			}
			else if(tmpSvt.type==9)
			{
				txt+='<a href="svtData.html?no='+tmpSvt.collectionNo+'"><img data-src="https://fgo.kazemai.io/common/images/icon/faces/'+tmpSvt.id+'0.png" class="lazyload face_icon itemblur" title="'+findSvtNameZh2(tmpSvt.id)+'" /></a>';
			}
			else if(tmpSvt.type==1||tmpSvt.type==2||tmpSvt.type==5||tmpSvt.type==99)
			{
				txt+='<a href="svtData.html?';
				if(tmpSvt.collectionNo==0) {txt+='id='+tmpSvt.id;}
				else {txt+='no='+tmpSvt.collectionNo;}
				
				var dt = new Date();//AprilFool2024
				if(dt.getMonth()==3&&dt.getDate()==1&&tmpSvt.collectionNo<=408) {txt+='"><img data-src="https://fgo.kazemai.io/common/images/icon/fate-ds/icon_servant_'+padLeft(tmpSvt.collectionNo, 3)+'.png" class="lazyload face_icon" title="'+findSvtNameZh2(tmpSvt.id)+'" /></a>';}
				else {txt+='"><img data-src="https://fgo.kazemai.io/common/images/icon/faces/'+tmpSvt.id+'0.png" class="lazyload face_icon" title="'+findSvtNameZh2(tmpSvt.id)+'" /></a>';}
			}
			else if(tmpSvt.type==7)
			{
				txt+='<img src="https://fgo.kazemai.io/common/images/icon/faces/'+tmpSvt.id+'0.png" onerror=\'this.style.display = "none"\' class="itemM" title="'+tmpSvt.name+'" />';
			}
			else
			{
				txt+='<img src="https://fgo.kazemai.io/common/images/icon/faces/'+tmpSvt.id+'.png" onerror=\'this.style.display = "none"\' class="itemM" title="'+tmpSvt.name+'" />';
			}
			isFind = true;
			break;
		}
	}
	if(!isFind)
	{
		for(i in master.mstItem)
		{
			if(master.mstItem[i].id==svtId)
			{
				txt+='<img src="https://fgo.kazemai.io/common/images/icon/items/'+master.mstItem[i].imageId+'.png" onerror="this.src=https://fgo.kazemai.io/common/images/icon/items/0.png" class="itemM" />';
				break;
			}
		}
	}
	return txt;
}
function changeURL(url)
{
	//var url = document.getElementById('url').value;
	window.history.pushState({},0,url);      
}
function padLeft(str, len) {
	str = '' + str;
	if (str.length >= len) {
		return str;
	} else {
		return padLeft("0" + str, len);
	}
}
function shadowboxInit()
{
	Shadowbox.init({
		overlayColor:"#333333",
		overlayOpacity:0.9,
		players: ['img', 'html', 'iframe', 'qt', 'wmp', 'swf', 'flv']
	});
}
function rateLimit(rate,rateMax)
{
	if(rate>0&&rate>rateMax) return rateMax;
	else if(rate<0&&rate<-rateMax) return -rateMax;
	return rate;
}
function accInit()
{
$(function(){
	$(".accordion dt.act").on("click", function() {
		$(this).next("dd").slideToggle();
		$(this).toggleClass("open");
	});
});
}
var LZString=function(){function o(o,r){if(!t[o]){t[o]={};for(var n=0;n<o.length;n++)t[o][o.charAt(n)]=n}return t[o][r]}var r=String.fromCharCode,n="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=",e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+-$",t={},i={compressToBase64:function(o){if(null==o)return"";var r=i._compress(o,6,function(o){return n.charAt(o)});switch(r.length%4){default:case 0:return r;case 1:return r+"===";case 2:return r+"==";case 3:return r+"="}},decompressFromBase64:function(r){return null==r?"":""==r?null:i._decompress(r.length,32,function(e){return o(n,r.charAt(e))})},compressToUTF16:function(o){return null==o?"":i._compress(o,15,function(o){return r(o+32)})+" "},decompressFromUTF16:function(o){return null==o?"":""==o?null:i._decompress(o.length,16384,function(r){return o.charCodeAt(r)-32})},compressToUint8Array:function(o){for(var r=i.compress(o),n=new Uint8Array(2*r.length),e=0,t=r.length;t>e;e++){var s=r.charCodeAt(e);n[2*e]=s>>>8,n[2*e+1]=s%256}return n},decompressFromUint8Array:function(o){if(null===o||void 0===o)return i.decompress(o);for(var n=new Array(o.length/2),e=0,t=n.length;t>e;e++)n[e]=256*o[2*e]+o[2*e+1];var s=[];return n.forEach(function(o){s.push(r(o))}),i.decompress(s.join(""))},compressToEncodedURIComponent:function(o){return null==o?"":i._compress(o,6,function(o){return e.charAt(o)})},decompressFromEncodedURIComponent:function(r){return null==r?"":""==r?null:(r=r.replace(/ /g,"+"),i._decompress(r.length,32,function(n){return o(e,r.charAt(n))}))},compress:function(o){return i._compress(o,16,function(o){return r(o)})},_compress:function(o,r,n){if(null==o)return"";var e,t,i,s={},p={},u="",c="",a="",l=2,f=3,h=2,d=[],m=0,v=0;for(i=0;i<o.length;i+=1)if(u=o.charAt(i),Object.prototype.hasOwnProperty.call(s,u)||(s[u]=f++,p[u]=!0),c=a+u,Object.prototype.hasOwnProperty.call(s,c))a=c;else{if(Object.prototype.hasOwnProperty.call(p,a)){if(a.charCodeAt(0)<256){for(e=0;h>e;e++)m<<=1,v==r-1?(v=0,d.push(n(m)),m=0):v++;for(t=a.charCodeAt(0),e=0;8>e;e++)m=m<<1|1&t,v==r-1?(v=0,d.push(n(m)),m=0):v++,t>>=1}else{for(t=1,e=0;h>e;e++)m=m<<1|t,v==r-1?(v=0,d.push(n(m)),m=0):v++,t=0;for(t=a.charCodeAt(0),e=0;16>e;e++)m=m<<1|1&t,v==r-1?(v=0,d.push(n(m)),m=0):v++,t>>=1}l--,0==l&&(l=Math.pow(2,h),h++),delete p[a]}else for(t=s[a],e=0;h>e;e++)m=m<<1|1&t,v==r-1?(v=0,d.push(n(m)),m=0):v++,t>>=1;l--,0==l&&(l=Math.pow(2,h),h++),s[c]=f++,a=String(u)}if(""!==a){if(Object.prototype.hasOwnProperty.call(p,a)){if(a.charCodeAt(0)<256){for(e=0;h>e;e++)m<<=1,v==r-1?(v=0,d.push(n(m)),m=0):v++;for(t=a.charCodeAt(0),e=0;8>e;e++)m=m<<1|1&t,v==r-1?(v=0,d.push(n(m)),m=0):v++,t>>=1}else{for(t=1,e=0;h>e;e++)m=m<<1|t,v==r-1?(v=0,d.push(n(m)),m=0):v++,t=0;for(t=a.charCodeAt(0),e=0;16>e;e++)m=m<<1|1&t,v==r-1?(v=0,d.push(n(m)),m=0):v++,t>>=1}l--,0==l&&(l=Math.pow(2,h),h++),delete p[a]}else for(t=s[a],e=0;h>e;e++)m=m<<1|1&t,v==r-1?(v=0,d.push(n(m)),m=0):v++,t>>=1;l--,0==l&&(l=Math.pow(2,h),h++)}for(t=2,e=0;h>e;e++)m=m<<1|1&t,v==r-1?(v=0,d.push(n(m)),m=0):v++,t>>=1;for(;;){if(m<<=1,v==r-1){d.push(n(m));break}v++}return d.join("")},decompress:function(o){return null==o?"":""==o?null:i._decompress(o.length,32768,function(r){return o.charCodeAt(r)})},_decompress:function(o,n,e){var t,i,s,p,u,c,a,l,f=[],h=4,d=4,m=3,v="",w=[],A={val:e(0),position:n,index:1};for(i=0;3>i;i+=1)f[i]=i;for(p=0,c=Math.pow(2,2),a=1;a!=c;)u=A.val&A.position,A.position>>=1,0==A.position&&(A.position=n,A.val=e(A.index++)),p|=(u>0?1:0)*a,a<<=1;switch(t=p){case 0:for(p=0,c=Math.pow(2,8),a=1;a!=c;)u=A.val&A.position,A.position>>=1,0==A.position&&(A.position=n,A.val=e(A.index++)),p|=(u>0?1:0)*a,a<<=1;l=r(p);break;case 1:for(p=0,c=Math.pow(2,16),a=1;a!=c;)u=A.val&A.position,A.position>>=1,0==A.position&&(A.position=n,A.val=e(A.index++)),p|=(u>0?1:0)*a,a<<=1;l=r(p);break;case 2:return""}for(f[3]=l,s=l,w.push(l);;){if(A.index>o)return"";for(p=0,c=Math.pow(2,m),a=1;a!=c;)u=A.val&A.position,A.position>>=1,0==A.position&&(A.position=n,A.val=e(A.index++)),p|=(u>0?1:0)*a,a<<=1;switch(l=p){case 0:for(p=0,c=Math.pow(2,8),a=1;a!=c;)u=A.val&A.position,A.position>>=1,0==A.position&&(A.position=n,A.val=e(A.index++)),p|=(u>0?1:0)*a,a<<=1;f[d++]=r(p),l=d-1,h--;break;case 1:for(p=0,c=Math.pow(2,16),a=1;a!=c;)u=A.val&A.position,A.position>>=1,0==A.position&&(A.position=n,A.val=e(A.index++)),p|=(u>0?1:0)*a,a<<=1;f[d++]=r(p),l=d-1,h--;break;case 2:return w.join("")}if(0==h&&(h=Math.pow(2,m),m++),f[l])v=f[l];else{if(l!==d)return null;v=s+s.charAt(0)}w.push(v),f[d++]=s+v.charAt(0),h--,s=v,0==h&&(h=Math.pow(2,m),m++)}}};return i}();"function"==typeof define&&define.amd?define(function(){return LZString}):"undefined"!=typeof module&&null!=module&&(module.exports=LZString);
function convert_string_to_hex(s) {
  var byte_arr = [];
  for (var i = 0 ; i<s.length ; i++) {
    var value = s.charCodeAt(i);
    byte_arr.push(value & 255);
    byte_arr.push((value>>8) & 255);
  }
  return convert_to_formated_hex(byte_arr);
}

function convert_to_formated_hex(byte_arr) {
  var hex_str = "",
      i,
      len,
      tmp_hex;
  
  if (!is_array(byte_arr)) {
    return false;
  }
  
  len = byte_arr.length;
  
  for (i = 0; i < len; ++i) {
    if (byte_arr[i] < 0) {
      byte_arr[i] = byte_arr[i] + 256;
    }
    if (byte_arr[i] === undefined) {
      alert("Boom " + i);
      byte_arr[i] = 0;
    }
    tmp_hex = byte_arr[i].toString(16);
    
    // Add leading zero.
    if (tmp_hex.length == 1) tmp_hex = "0" + tmp_hex;
    
    /*if ((i + 1) % 16 === 0) {
      tmp_hex += "\n";
    } else {
      tmp_hex += " ";
    }*/
    
    hex_str += tmp_hex;
  }
  
  return hex_str.trim();
}
function is_array(input) {
  return typeof(input) === "object" && (input instanceof Array);
}
function convert_formated_hex_to_bytes(hex_str) {
  var count = 0,
      hex_arr,
      hex_data = [],
      hex_len,
      i;
  
  if (hex_str.trim() == "") return [];
  
  /// Check for invalid hex characters.
  if (/[^0-9a-fA-F\s]/.test(hex_str)) {
    return false;
  }
  
  hex_arr = hex_str.split(/([0-9a-fA-F][0-9a-fA-F])/g);
  hex_len = hex_arr.length;
  
  for (i = 0; i < hex_len; ++i) {
    if (hex_arr[i].trim() == "") {
      continue;
    }
    hex_data[count++] = parseInt(hex_arr[i], 16);
  }
  return hex_data;
}
function convert_formated_hex_to_string(s) {
  var byte_arr = convert_formated_hex_to_bytes(s);
  var res = "";
  for (var i = 0 ; i<byte_arr.length ; i+=2) {
    res += String.fromCharCode(byte_arr[i] | (byte_arr[i+1]<<8));
  }
  return res;
}