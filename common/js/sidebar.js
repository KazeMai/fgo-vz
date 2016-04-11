function loadsidebar()
{
	document.getElementById('div_right_sidebar').innerHTML="<a href='./'><div class='sidebarl' style='background-image:url(common/images/sidebar01.png);'>首頁</div></a><a href='http://goo.gl/HkTjzj' target='_blank'><div class='sidebarl' style='background-image:url(common/images/sidebar17.png);'>留言討論區</div></a><a href='servant.html'><div class='sidebarl' style='background-image:url(common/images/sidebar05.png);'>Servant</div></a><a href='skill.html'><div class='sidebar' style='background-image:url(common/images/sidebar00.png);'>技能</div></a><a href='noble_phantasm.html'><div class='sidebar' style='background-image:url(common/images/sidebar00.png);'>寶具</div></a><a href='status_compare.html'><div class='sidebar' style='background-image:url(common/images/sidebar00.png);'>二圍比較</div></a><a href='hidden.html'><div class='sidebar' style='background-image:url(common/images/sidebar00.png);'>隱藏數値</div></a><a href='craft_essence.html'><div class='sidebarl' style='background-image:url(common/images/sidebar09.png);'>概念禮裝</div></a><a href='item_drop.html'><div class='sidebarl' style='background-image:url(common/images/sidebar15.png);'>素材道具</div></a><a href='master_equip.html'><div class='sidebarl' style='background-image:url(common/images/sidebar03.png);'>Master相關</div></a><a href='donate.html'><div class='sidebarl' style='background-image:url(common/images/sidebar11.png);'>贊助支持</div></a><a href='https://goo.gl/forms/pW0CDVGfyg' target='_blank'><div class='sidebarl' style='background-image:url(common/images/sidebar08.png);'>意見回饋</div></a><a href='event_history.html'><div class='sidebarl' style='background-image:url(common/images/sidebar10.png);'>過去活動</div></a><a href='event_davinci.html' title='「達文西與七位贋品英靈」'><div class='sidebar_event' style='background-image:url(common/images/2016/04/banner_100438756.png);'></div></a><a href='event_davinci.html#midashi_06' title='「貞德〔Alter〕Pick Up召喚」'><div class='sidebar_event' style='background-image:url(common/images/2016/04/summon_20160411_igmzg.jpg);'></div></a><a href='event_fifth.html' title='「第五特異點 北美神話大戰 合眾為一」開幕！'><div class='sidebar_event' style='background-image:url(common/images/2016/03/banner_100426951.png);'></div></a><a href='event_fifth.html#midashi_07' title='「合眾為一Pick Up召喚」'><div class='sidebar_event' style='background-image:url(common/images/2016/03/summon_20160330_exiz3.jpg);'></div></a>";
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
		if(cl[i].src.search("_4.png")!=-1) classarray.push(cl[i].src.substring(cl[i].src.indexOf("class_")+6,cl[i].src.indexOf("_4.png")));
	}
	var rarityarray = new Array();
	cl=document.getElementsByClassName("rarityF");
	for(i=0;i<cl.length;i++)
	{
		if(cl[i].checked==true) rarityarray.push(cl[i].value);
	}
	var classUrl = false; if(classarray!="1,2,3,4,5,6,7,8,9,11") classUrl=true;
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
			if(master.mstQuest[k].type==1) skillText+="主線關卡";
			else if(master.mstQuest[k].type==2) skillText+="Free關卡";
			else if(master.mstQuest[k].type==3) skillText+="幕間物語";
			else if(master.mstQuest[k].type==5) skillText+="活動關卡";
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
					var realseArr = new Array();
					for(var war=0;war<master.mstWar.length;war++)
						if(Math.floor(realseChp/100-10000)==master.mstWar[war].id-100)
							{realseArr.push("通過"+master.mstWar[war].name.replace(/点/g,"點")+"");break;}
					if(realseLimit) realseArr.push("靈基第"+realseLimit+"階段");
					if(realseFriend) realseArr.push("絆等級"+realseFriend+"");
					
					if(realseArr.length>0) skillText+="－開放條件：";
					for(rea in realseArr)
					{	if(rea!=0)  skillText+="+"; skillText+=realseArr[rea];}
				}
			}
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