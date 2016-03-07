function loadsidebar()
{
	document.getElementById('div_right_sidebar').innerHTML="<img src='common/images/pc_logo.png' width=230></img><a href='./'><div class='sidebarl' style='background-image:url(common/images/sidebar01.png);'>首頁</div></a><a href='servant.html'><div class='sidebarl' style='background-image:url(common/images/sidebar05.png);'>Servant</div></a><a href='skill.html'><div class='sidebar' style='background-image:url(common/images/sidebar00.png);'>技能</div></a><a href='noble_phantasm.html'><div class='sidebar' style='background-image:url(common/images/sidebar00.png);'>寶具</div></a><a href='status_compare.html'><div class='sidebar' style='background-image:url(common/images/sidebar00.png);'>二圍比較</div></a><a href='craft_essence.html'><div class='sidebarl' style='background-image:url(common/images/sidebar09.png);'>概念禮裝</div></a><a href='item_drop.html'><div class='sidebarl' style='background-image:url(common/images/sidebar15.png);'>素材道具</div></a><a href='master_equip.html'><div class='sidebarl' style='background-image:url(common/images/sidebar03.png);'>Master相關</div></a><a href='event_history.html'><div class='sidebarl' style='background-image:url(common/images/sidebar10.png);'>過去活動</div></a><a href='event_gacha_chaldeaboys2016.html' title='「迦爾帝亞男孩收藏2016 Pick Up召喚」'><div class='sidebar_event' style='background-image:url(common/images/2016/03/banner_100357784.png);'></div></a><a href='event_chaldeaboys2016.html' title='「迦爾帝亞男孩收藏2016」期間限定概念禮裝贈送宣傳活動'><div class='sidebar_event' style='background-image:url(common/images/2016/03/banner_100368521.png);'></div></a><a href='news_igdi5b.html' title='活動預告＆舉辦主要關卡AP消費1/2宣傳活動'><div class='sidebar_event' style='background-image:url(common/images/2016/03/banner_100348654.png);'></div></a><a href='event_garden.html' title='合作活動「空の境界/the Garden of Order」'><div class='sidebar_event' style='background-image:url(common/images/2016/02/banner_1003368791.png);'></div></a><a href='event_garden.html#midashi_08' title='「空之境界合作Pick Up召喚」'><div class='sidebar_event' style='background-image:url(common/images/2016/02/summon_20160224_mh5c6.jpg);'></div></a><a href='http://goo.gl/Nw8bbF' target=_blank><div class='sidebarl' style='background-image:url(common/images/sidebar08.png);'>意見提供</div></a>";
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
function classOff(imgC)
{
	imgC.src=imgC.src.replace("_4.png","_1.png");
	imgC.onclick = Function("classOn(this);");
}
function classOn(imgC)
{
	imgC.src=imgC.src.replace("_1.png","_4.png");
	imgC.onclick = Function("classOff(this);");
}
function classAllOff()
{
	var cl=document.getElementsByClassName("classF");
	for(var i=0;i<cl.length;i++)
	{
		classOff(cl[i]);
	}
}
function classAllOn()
{
	var cl=document.getElementsByClassName("classF");
	for(var i=0;i<cl.length;i++)
	{
		classOn(cl[i]);
	}
}
function classFilter(urltxt)
{
	var cl=document.getElementsByClassName("classF");
	var classarray = new Array();
	for(var i=0;i<cl.length;i++)
	{
		if(cl[i].src.search("_4.png")!=-1) classarray.push(cl[i].src[cl[i].src.indexOf("_4.png")-1]);
	}
	var rarityarray = new Array();
	cl=document.getElementsByClassName("rarityF");
	for(i=0;i<cl.length;i++)
	{
		if(cl[i].checked==true) rarityarray.push(cl[i].value);
	}
	var classUrl = false; if(classarray!="1,2,3,4,5,6,7,8,9") classUrl=true;
	var rarityUrl = false; if(rarityarray!="1,2,3,4,5") rarityUrl=true;
	if(classUrl||rarityUrl) urltxt+="?";
	if(classUrl) urltxt+="class="+classarray;
	if(classUrl&&rarityUrl) urltxt+="&";
	if(rarityUrl) urltxt+="rarity="+rarityarray;
	window.location = urltxt;
}
function questRea(qstId)
{
	var skillText="<span class='hint' title='";
	for(var k in master.mstQuest)
	{
		if(master.mstQuest[k].id==qstId)
		{
			if(master.mstQuest[k].type==1) skillText+="主線任務";
			else if(master.mstQuest[k].type==2) skillText+="Free任務";
			else if(master.mstQuest[k].type==3)
			{
				var realseChp,realseLimit,realseFriend,realseBool;
				for(var rea=0;rea<master.mstQuestRelease.length;rea++){
					if(master.mstQuestRelease[rea].questId==master.mstQuest[k].id){
						if(master.mstQuestRelease[rea].type==1)
							{if(master.mstQuestRelease[rea].targetId==0) realseBool=-1;else if(master.mstQuestRelease[rea].targetId<91000000)realseChp=master.mstQuestRelease[rea].targetId;}
						if(master.mstQuestRelease[rea].type==7)
							realseLimit=master.mstQuestRelease[rea].value;
						if(master.mstQuestRelease[rea].type==9)
							realseFriend=master.mstQuestRelease[rea].value;
					}
				}
				if(realseBool==-1) skillText+="尚未開放";
				else{
					for(var war=0;war<master.mstWar.length;war++)
						if(Math.floor(realseChp/100-10000)==master.mstWar[war].id-100)
							{skillText+="開放條件：通過"+master.mstWar[war].name.replace(/点/g,"點")+"";break;}
					skillText+="+靈基第"+realseLimit+"階段+絆等級"+realseFriend+"";
				}
			}
			else if(master.mstQuest[k].type==5) skillText+="活動任務";
			skillText+="'>"+master.mstQuest[k].name+"</span>";
			break;
		}
	}
	if(skillText=="<span class='hint' title='") skillText="？？？";
	return skillText;
}
function svtFace(svtId)
{
	var txt="";
	for(var i in master.mstSvt)
	{
		if(master.mstSvt[i].id==svtId)
		{
			if(master.mstSvt[i].type==6)
			{
				txt+="<a href='ceData.html?no="+master.mstSvt[i].collectionNo+"'><img src='common/images/icon/faces/"+master.mstSvt[i].id+".png' onerror=\"javascript:this.src='common/images/icon/faces/0.png'\" class='itemM' title='"+master.mstSvt[i].name+"' /></a>";
			}
			else if(master.mstSvt[i].type==1||master.mstSvt[i].type==2||master.mstSvt[i].type==5||master.mstSvt[i].type==9)
			{
				txt+="<a href='svtData.html?";
				if(master.mstSvt[i].collectionNo==0) txt+="id="+master.mstSvt[i].id;
				else txt+="no="+master.mstSvt[i].collectionNo;
				txt+="'><img src='common/images/icon/faces/"+master.mstSvt[i].id+"0.png' onerror=\"javascript:this.src='common/images/icon/faces/0.png'\" class='itemM' title='"+findSvtNameZh2(master.mstSvt[i].id)+"' /></a>";
			}
			else
			{
				txt+="<img src='common/images/icon/faces/"+master.mstSvt[i].id+".png' onerror=\"javascript:this.style='display:none;'\" class='itemM' title='"+findSvtNameZh2(master.mstSvt[i].id)+"' />";
			}
			break;
		}
	}
	return txt;
}