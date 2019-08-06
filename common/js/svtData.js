﻿object_extend("mstSvtSkill",'{"strengthStatus":0,"svtId":9941040,"num":1,"priority":1,"skillId":435350,"condQuestId":0,"condQuestPhase":0,"condLv":0,"condLimitCount":-1,"eventId":0},{"strengthStatus":0,"svtId":9941040,"num":2,"priority":1,"skillId":436450,"condQuestId":0,"condQuestPhase":0,"condLv":0,"condLimitCount":-1,"eventId":0},{"strengthStatus":0,"svtId":9941040,"num":3,"priority":1,"skillId":437551,"condQuestId":0,"condQuestPhase":0,"condLv":0,"condLimitCount":-1,"eventId":0}');
object_extend("mstSvtSkill",'{"svtId":9940380,"num":1,"priority":1,"skillId":960182,"condQuestId":0,"condLv":0,"condLimitCount":-1},{"svtId":9940390,"num":1,"priority":1,"skillId":960184,"condQuestId":0,"condLv":0,"condLimitCount":-1},{"svtId":9940400,"num":1,"priority":1,"skillId":960183,"condQuestId":0,"condLv":0,"condLimitCount":-1},{"svtId":9940410,"num":1,"priority":1,"skillId":960185,"condQuestId":0,"condLv":0,"condLimitCount":-1},{"svtId":9940530,"num":1,"priority":2,"skillId":960189,"condQuestId":0,"condLv":0,"condLimitCount":-1},{"svtId":9940530,"num":2,"priority":2,"skillId":960190,"condQuestId":0,"condLv":0,"condLimitCount":-1},{"svtId":9940530,"num":3,"priority":2,"skillId":960191,"condQuestId":0,"condLv":0,"condLimitCount":-1},{"svtId":9940530,"num":4,"priority":2,"skillId":960192,"condQuestId":0,"condLv":0,"condLimitCount":-1},{"svtId":9940530,"num":5,"priority":2,"skillId":960193,"condQuestId":0,"condLv":0,"condLimitCount":-1},{"svtId":9940530,"num":6,"priority":2,"skillId":960194,"condQuestId":0,"condLv":0,"condLimitCount":-1},{"svtId":9940530,"num":7,"priority":2,"skillId":960195,"condQuestId":0,"condLv":0,"condLimitCount":-1},{"svtId":9940600,"num":4,"priority":1,"skillId":960235,"condQuestId":0,"condLv":0,"condLimitCount":-1}');
object_extend("mstSvtTreasureDevice",'{"damage":[100],"svtId":9935400,"num":1,"priority":426,"imageIndex":0,"treasureDeviceId":441,"condQuestId":0,"condQuestPhase":0,"condLv":0,"condFriendshipRank":0,"motion":50,"cardId":1},{"damage":[16,33,51],"svtId":9935500,"num":1,"priority":101,"imageIndex":0,"treasureDeviceId":9935511,"condQuestId":0,"condQuestPhase":0,"condLv":0,"condFriendshipRank":0,"motion":50,"cardId":1}');
//強化關卡第10-1彈
/*
object_extend("mstSvtTreasureDevice",'{"damage":[100],"strengthStatus":0,"svtId":102800,"num":1,"priority":101,"flag":0,"imageIndex":0,"treasureDeviceId":102802,"condQuestId":0,"condQuestPhase":0,"condLv":0,"condFriendshipRank":0,"motion":50,"cardId":1},{"damage":[16,33,51],"strengthStatus":0,"svtId":602300,"num":1,"priority":102,"flag":0,"imageIndex":0,"treasureDeviceId":602302,"condQuestId":0,"condQuestPhase":0,"condLv":0,"condFriendshipRank":0,"motion":50,"cardId":1}');
object_extend("mstTreasureDevice",'{"individuality":[3000,4001,4007],"script":{},"id":102802,"seqId":102800,"name":"無垢識・空の境界","ruby":"むくしき・からのきょうかい","rank":"EX","maxLv":5,"typeText":"対人宝具","attackAttri":1},{"individuality":[3000,4001,4007],"script":{},"id":602302,"seqId":602300,"name":"唯識・直死の魔眼","ruby":"ゆいしき・ちょくしのまがん","rank":"EX","maxLv":5,"typeText":"対人宝具","attackAttri":1}');
object_extend("mstTreasureDeviceLv",'{"treaureDeviceId":102802,"lv":1,"gaugeCount":1,"detailId":102802,"tdPoint":84,"tdPointQ":84,"tdPointA":84,"tdPointB":84,"tdPointEx":84,"tdPointDef":300},{"treaureDeviceId":602302,"lv":1,"gaugeCount":1,"detailId":602302,"tdPoint":80,"tdPointQ":80,"tdPointA":80,"tdPointB":80,"tdPointEx":80,"tdPointDef":400}');
object_extend("mstQuest",'{"id":94032901,"name":"強化クエスト 両儀式"},{"id":94032902,"name":"強化クエスト 両儀式"}');
object_extend("mstQuestRelease",'{"questId":94032901,"type":7,"targetId":102800,"value":4},{"questId":94032902,"type":7,"targetId":602300,"value":4},{"questId":94032903,"type":1,"targetId":94014406,"value":0},{"questId":94032904,"type":7,"targetId":700800,"value":4},{"questId":94032905,"type":7,"targetId":301700,"value":4},{"questId":94032906,"type":1,"targetId":94022001,"value":0},{"questId":94032907,"type":7,"targetId":500500,"value":4}');
/*
object_extend("mstSkill",'{"effectList":[],"actIndividuality":[],"script":{},"id":348650,"type":2,"name":"ハイ・サーヴァント EX","ruby":"はい・さーゔぁんと","maxLv":10,"iconId":999999,"motion":101}');
object_extend("mstSkillDetail",'{"id":348650,"detail":"効果なし","detailShort":"効果なし"}');

/*
for(var s in master.mstSvt){if(master.mstSvt[s].id==402800){master.mstSvt[s].id=0;break;}}
object_extend("mstSvt",'{"relateQuestIds":[],"individuality":[5000,402800,1,103,202,300,304,2009,1000,2001,2008,2005,2113],"classPassive":[34250,88650],"cardIds":[3,1,1,2,2],"script":{"cameraActionId":284},"id":402800,"baseSvtId":402800,"name":"イヴァン雷帝","ruby":"イヴァンライテイ","battleName":"イヴァン雷帝","classId":4,"type":5,"limitMax":4,"rewardLv":90,"friendshipId":1049,"maxFriendshipRank":10,"genderType":1,"attri":1,"combineSkillId":402800,"combineLimitId":402800,"sellQp":5000,"sellMana":9,"sellRarePri":5,"expType":10,"combineMaterialId":5,"cost":16,"battleSize":8,"hpGaugeY":-1000,"starRate":89,"deathRate":400,"attackAttri":1,"illustratorId":27,"cvId":37,"collectionNo":205,"materialStoryPriority":0}');

object_extend("mstTreasureDevice",'{"individuality":[3002,4003,4007],"script":{},"id":402801,"seqId":402800,"name":"我が旅路に従え獣","ruby":"ズヴェーリ・クレースニーホッド","rank":"A+","maxLv":5,"typeText":"対人宝具","attackAttri":1}');
object_extend("mstTreasureDeviceLv",'{"treaureDeviceId":402801,"lv":1,"gaugeCount":1,"detailId":402801,"tdPoint":62,"tdPointQ":62,"tdPointA":62,"tdPointB":62,"tdPointEx":62,"tdPointDef":300,"qp":80000}');
object_extend("mstSvtTreasureDevice",'{"damage":[6,13,20,26,35],"strengthStatus":0,"svtId":402800,"num":1,"priority":101,"flag":0,"imageIndex":0,"treasureDeviceId":402801,"condQuestId":0,"condQuestPhase":0,"condLv":0,"condFriendshipRank":0,"motion":50,"cardId":2}');
object_extend("mstCombineLimit",'{"itemIds":[7004],"itemNums":[5],"id":402800,"svtLimit":0,"qp":100000},{"itemIds":[7004,6516],"itemNums":[12,22],"id":402800,"svtLimit":1,"qp":300000},{"itemIds":[7104,6513,6528],"itemNums":[5,10,3],"id":402800,"svtLimit":2,"qp":1000000},{"itemIds":[7104,6528,6529],"itemNums":[12,6,5],"id":402800,"svtLimit":3,"qp":3000000}');
object_extend("mstCombineSkill",'{"itemIds":[6004],"itemNums":[5],"id":402800,"skillLv":1,"qp":200000},{"itemIds":[6004],"itemNums":[12],"id":402800,"skillLv":2,"qp":400000},{"itemIds":[6104],"itemNums":[5],"id":402800,"skillLv":3,"qp":1200000},{"itemIds":[6104,6513],"itemNums":[12,5],"id":402800,"skillLv":4,"qp":1600000},{"itemIds":[6204,6513],"itemNums":[5,10],"id":402800,"skillLv":5,"qp":4000000},{"itemIds":[6204,6516],"itemNums":[12,15],"id":402800,"skillLv":6,"qp":5000000},{"itemIds":[6516,6527],"itemNums":[29,15],"id":402800,"skillLv":7,"qp":10000000},{"itemIds":[6527,6535],"itemNums":[44,24],"id":402800,"skillLv":8,"qp":12000000},{"itemIds":[6999],"itemNums":[1],"id":402800,"skillLv":9,"qp":20000000}');
*/
function object_extend(key,extendtxt)
{
	var isErr = false;
	extendtxt = extendtxt.replace(/\n/g,"\\n").replace(/\\"/g,"\\\"").replace(/\"なし\"/g,"\"－\"");
	try{
		var tmpMst = JSON.parse('['+extendtxt+']');
		for(var i in tmpMst)
		{
			master[key].push(tmpMst[i]);
		}
	}
	catch(err){console.log(err.message+'\n'+key);isErr=true;}
	if(isErr) alert('存取錯誤');
}
/*暫時應對*/
sortByElmentNo(master.mstSvt);
var zhTWNo=198,zhCNNo=211,statusNo=260,personalityList=" \u5584 \u60e1 ? \u72c2 \u4e2d\u5eb8 \u5584\uff0f\u60e1 \u82b1\u5ac1 \u590f".split(" "),policyList=" \u4e2d\u7acb \u6df7\u6c8c \u79e9\u5e8f ? ? \u4e2d\u7acb".split(" "),attriList="\uff1f\u4eba\u5929\u5730\u661f\u7378".split(""),genderTypeList=["","\u7537\u6027","\u5973\u6027","\u4e0d\u660e"],cardList=["","0000ff","ff0000","00ff00"],svtStatusList=" A B C D E EX ? ? ".split(" "),svtStatusPlusList="  + ++ ? +++ - ? \uff1f \uff0d".split(" "),individualityList=
[[1172,"\u4eba\u985e\u5a01\u8105"],[2E3,"\u795e\u6027"],[2001,"\u4eba\u578b"],[2002,"\u9f8d"],[2004,"\u7f85\u99ac"],[2005,"\u731b\u7378"],[2007,"\u963f\u723e\u6258\u8389\u4e9e\u81c9"],[2008,"\u88ab\u300c\u5929\u5730\u4e56\u96e2\u958b\u8f9f\u4e4b\u661f\u300d\u6240\u524b"],[2009,"\u9a0e\u4e58"],[2010,"\u4e9e\u745f"],[2011,"\u88ab\u300c\u4eba\u985e\u795e\u8a71\u30fb\u96f7\u96fb\u964d\u81e8\u300d\u6240\u524b"],[2012,"\u6240\u611b\u4e4b\u4eba"],[2018,"\u6b7b\u9748\u8207\u60e1\u9b54"],[2019,"\u9b54\u6027"],
[2037,"\u88ab\u300c\u795e\u79d8\u6bba\u3057\u300d\u6240\u524b"],[2076,"\u8d85\u5de8\u5927"],[2113,"\u738b"],[2114,"\u5e0c\u81d8\u795e\u8a71\u7cfb\u7537\u6027"],[2355,"\u4f0a\u8389\u96c5"],[2356,"\u300c\u7d33\u58eb\u7684\u306a\u611b C\u300d\u9664\u5973\u6027\u5916\u7684\u5c0d\u8c61"],[2466,"\u963f\u723e\u6208\u865f\u56e0\u7de3\u8005"]];
function svtDataTable(e){var a,h;for(h in master.mstSvt)if(master.mstSvt[h].id==e)break;var k=null;for(m in master.mstSvtLimit)if(master.mstSvtLimit[m].svtId==e){k=master.mstSvtLimit[m];break}var m=null;for(a in master.mstSvtLimit)if(master.mstSvtLimit[a].svtId==e&&master.mstSvtLimit[a].limitCount==master.mstSvt[h].limitMax){m=master.mstSvtLimit[a];break}var b="<tr>";master.mstSvt[h].collectionNo<=statusNo?(b+="<td rowspan=7 align=center style='width:25%;height:300px;'>",b=5==master.mstSvt[h].type||
9==master.mstSvt[h].type||99==master.mstSvt[h].type?b+("<img src=common/images/Servants/Status/"+e+"/status_servant_2.png onerror=\"javascript:this.style='display:none'\" width=256 height=256 /></td>"):b+("<div class='slide'><div><img src=common/images/Servants/Status/"+e+"/status_servant_1.png onerror=\"this.style.display = 'none'\" width=256 height=256 /></div><div><img src=common/images/Servants/Status/"+e+"/status_servant_2.png onerror=\"this.style.display = 'none'\" width=256 height=256 /></div><div><img src=common/images/Servants/Status/"+
e+"/status_servant_3.png onerror=\"this.style.display = 'none'\" width=256 height=256 /></div></div></td>")):b+="<td rowspan=7 align=center style='width:25%;height:300px;'><img src='common/images/icon/faces/"+master.mstSvt[h].id+"0.png' onerror=javascript:this.src='common/images/icon/faces/0.png'></td>";b+="<th style='width:10%;'><b>\u7de8\u865f</b></th><th style='width:10%;'><b>\u661f\u6578</b></th><th colspan=2 style='width:35%;'><b>\u540d\u7a31</b></th><th style='width:15%;'><b>\u8077\u968e</b></th><th style='width:10%;'><b>\u5206\u985e</b></th></tr><tr align=\"center\"><td>No."+
master.mstSvt[h].collectionNo+'</td><td class="star">';for(a=0;a<k.rarity;a++)b+="\u2605";if(null!=m&&m.rarity!=k.rarity)for(b+="<br>",a=0;a<m.rarity;a++)b+="\u2605";0==k.rarity&&(b+="\uff0d");b+="</td><td colspan=2>";b=(a=findSvtNameZh(master.mstSvt[h].id))&&!document.getElementById("isJpTxt").checked?b+("<div class=ruby>"+master.mstSvt[h].ruby+"</div>"+a):b+master.mstSvt[h].name;b+="</td>";document.title=findSvtNameZh2(e)+" - Servant\u8cc7\u6599\u67e5\u8a62";for(a=0;a<mstClass.length;a++)if(mstClass[a].id==
master.mstSvt[h].classId){b+="<td>"+mstClass[a].name+"</td>";break}b+="<td>"+attriList[master.mstSvt[h].attri]+"</td></tr><tr><th><b>HP</b></th><th><b>ATK</b></th><th style='width:10%;'><b>\u7e6a\u5e2b</b></th><th style='width:10%;'><b>CV</b></th><th><b>\u5c6c\u6027</b></th><th><b>\u6027\u5225</b></th></tr><tr align=\"center\"><td>"+k.hpBase+" / "+k.hpMax;null==m||k.hpBase==m.hpBase&&k.hpMax==m.hpMax||(b+="<br>"+m.hpBase+" / "+m.hpMax);b+="</td><td>"+k.atkBase+" / "+k.atkMax;null==m||k.atkBase==m.atkBase&&
k.atkMax==m.atkMax||(b+="<br>"+m.atkBase+" / "+m.atkMax);b+="</td><td>";if(-1!=master.mstSvt[h].illustratorId)for(a=0;a<master.mstIllustrator.length;a++){if(master.mstIllustrator[a].id==master.mstSvt[h].illustratorId){b+="<a href='illustrator.html#"+master.mstSvt[h].illustratorId+"'>"+master.mstIllustrator[a].name.replace(/\(/g,"<br>(")+"</a>";break}}else b+="\uff1f\uff1f\uff1f";b+="</td><td>";if(-1!=master.mstSvt[h].cvId)for(a=0;a<master.mstCv.length;a++){if(master.mstCv[a].id==master.mstSvt[h].cvId){b+=
"<a href='cv.html#"+master.mstSvt[h].cvId+"'>"+master.mstCv[a].name.replace(/\uff06/g,"<br>")+"</a>";break}}else b+="\uff1f\uff1f\uff1f";b=b+"</td>"+("<td>"+policyList[k.policy]+"\u30fb"+personalityList[k.personality]+"</td><td>"+genderTypeList[master.mstSvt[h].genderType]+"</td></tr>");var p=[];for(a in master.mstSvt[h].individuality)for(var c in individualityList)master.mstSvt[h].individuality[a]==individualityList[c][0]&&p.push(individualityList[c][1]);b+="<tr><th>\u7279\u6027</th><td colspan=5 align=center>"+
p+"</td></tr>";document.getElementById("svtNrmlData").innerHTML=b;b='<tr><th rowspan=2><b>\u6307\u4ee4\u5361</b></th><th><font color="#0099FF"><b>Arts</b></font></th><th><font color="#ff0000"><b>Buster</b></font></th><th><font color="#00ff00"><b>Quick</b></font></th><th><b>Extra</b></th><th rowspan=2><b>\u96b1\u85cf\u6578\u503c</b></th><th><b>\u661f\u661f\u767c\u751f\u7387</b></th><th><b>\u88ab\u5373\u6b7b\u7387</b></th><th><b>\u661f\u661f\u5206\u914d\u6bd4\u91cd</b></th><th rowspan=2><b>NP\u7372\u5f97\u7387</b></th><th><font color="#0099FF"><b>Arts</b></font></th><th><font color="#ff0000"><b>Buster</b></font></th><th><font color="#00ff00"><b>Quick</b></font></th><th><b>Extra</b></th><th><b>\u5bf6\u5177</b></th><th><b>\u9632\u79a6</b></th></tr><tr align="center">';
for(c=1;4>=c;c++){b+="<td>";for(a=p=0;a<master.mstSvt[h].cardIds.length;a++)master.mstSvt[h].cardIds[a]==c&&p++;4!=c&&(b+=p+"\u5f35");for(a=0;a<master.mstSvtCard.length;a++)master.mstSvtCard[a].svtId==master.mstSvt[h].id&&master.mstSvtCard[a].cardId==c&&(4!=c&&(b+=" \u5404"),b+=master.mstSvtCard[a].normalDamage.length+"Hit",1<master.mstSvtCard[a].normalDamage.length&&(b+="s"));b+="</td>"}b+="<td>"+master.mstSvt[h].starRate/10+"%</td><td>"+master.mstSvt[h].deathRate/10+"%</td><td>"+k.criticalWeight+
"</td>";p=[];for(var n=0;6>n;n++)p[n]=[];for(var r in master.mstSvtTreasureDevice)if(master.mstSvtTreasureDevice[r].svtId==master.mstSvt[h].id&&0!=master.mstSvtTreasureDevice[r].priority)for(a in master.mstTreasureDeviceLv)if(master.mstTreasureDeviceLv[a].treaureDeviceId==master.mstSvtTreasureDevice[r].treasureDeviceId){var l=[master.mstTreasureDeviceLv[a].tdPointA,master.mstTreasureDeviceLv[a].tdPointB,master.mstTreasureDeviceLv[a].tdPointQ,master.mstTreasureDeviceLv[a].tdPointEx,master.mstTreasureDeviceLv[a].tdPoint,
master.mstTreasureDeviceLv[a].tdPointDef];for(n=0;6>n;n++)0!=p[n].length&&p[n][p[n].length-1]==l[n]||p[n].push(l[n])}for(n=0;6>n;n++)b+="<td>"+npArray(p[n])+"</td>";b+="</tr>";document.getElementById("svtCtrlData").innerHTML=b;b=r="";p=1;for(a=0;a<master.mstSvtSkill.length;a++)if(master.mstSvtSkill[a].svtId==master.mstSvt[h].id){for(c=0;c<master.mstSkill.length;c++)if(master.mstSvtSkill[a].skillId==master.mstSkill[c].id){b+="<td><img src=common/images/SkillIcon/SkillIcon_"+master.mstSkill[c].iconId+
".png onerror=javascript:this.src='common/images/SkillIcon/SkillIcon_0.png' width=55></img></td><td>";5!=master.mstSvt[h].type&&(b+="<font color=#007979>SKILL "+master.mstSvtSkill[a].num+"</font><br>");b+="<b>"+master.mstSkill[c].name+"</b></td>";break}if(null==master.mstSkill[c])console.log("\u6280\u80fd\u5c0b\u627e\u5931\u6557");else{p++;for(c=0;c<master.mstSkillLv.length;c++)if(master.mstSvtSkill[a].skillId==master.mstSkillLv[c].skillId&&1==master.mstSkillLv[c].lv){b+="<td colspan=5>\u51b7\u537b"+
master.mstSkillLv[c].chargeTurn+"\u56de\u5408</td>";break}b+="<td colspan=5>";-1==master.mstSvtSkill[a].condLimitCount?b+="\u6575\u4eba\u6216\u7279\u6b8a\u652f\u63f4\u9650\u5b9a\uff0c\u51b7\u537b\u53ca\u6548\u679c\u50c5\u4f9b\u53c3\u8003":(0==master.mstSvtSkill[a].condLimitCount&&0==master.mstSvtSkill[a].condQuestId&&0==master.mstSvtSkill[a].condLv&&(b+="\u521d\u671f"),0!=master.mstSvtSkill[a].condLimitCount&&(b+="\u9748\u57fa\u518d\u81e8\u7b2c"+master.mstSvtSkill[a].condLimitCount+"\u968e\u6bb5<br>"),
0!=master.mstSvtSkill[a].condLv&&(b+="Lv."+master.mstSvtSkill[a].condLv+"<br>"),0!=master.mstSvtSkill[a].condQuestId&&(b+="\u901a\u904e\u95dc\u5361 "+questRea(master.mstSvtSkill[a].condQuestId)+"<br>"));b+="</td></tr>";l=[];for(c=0;c<skDetail.length;c++)if(master.mstSvtSkill[a].skillId==skDetail[c][0]){l=skDetail[c].slice(0);break}if(document.getElementById("isJpTxt").checked||!l[1])for(c=0;c<master.mstSkillDetail.length;c++)if(master.mstSvtSkill[a].skillId==master.mstSkillDetail[c].id){l[1]=master.mstSkillDetail[c].detail;
break}var f=[];document.getElementById("isJpTxt").checked?f[0]=l[1].slice(0):(l[1]=l[1].replace(/ \uff0b |\u3000\uff0b\u3000/g,"\uff0b"),l[1]=l[1].replace(/\uff06/g,"\uff06\u2517"),f=l[1].split(/\uff06|\uff0b/));p+=f.length;for(var d=0;d<f.length;d++){f[d].search(/\{0\}|Lv/);f[d]=f[d].replace(/\{0\}/g,"Lv.");f[d]=f[d].replace(/\[Lv.]/g,'<font color="#CC00CC ">[Lv.]</font>');f[d]=f[d].replace(/\u3010/g,'<font color="#006400 ">\u3010');f[d]=f[d].replace(/\u3011/g,"\u3011</font>");f[d]=f[d].replace(/\n/g,
"<br>");f[d]=f[d].replace(/\[g\]\[o\]\u25b2\[\/o\]\[\/g\]/g,'<font color="#ff7f0f ">\u25b2</font>');if(document.getElementById("isJpTxt").checked)b+="<tr><td colspan=12>"+f[d]+"</td>";else if(b+="<tr><td colspan=2>"+f[d]+"</td>",l[2+d]&&1<l[2+d].split("/").length-1)for(c in n=[],n=l[2+d].split(/\//),n)b+="<td align=center style='width:50px'>"+n[c]+"</td>";else b+="<td colspan=10>",b=l[2+d]?b+("\u3000"+l[2+d].replace(/\//g," / ")):"undefined"!==typeof l[2+d]&&0==l[2+d].length?b+"\u3000---":b+"\u3000\u5f85\u88dc";
b+="</td></tr>"}}}0<b.length&&(r+="<tr><th style='width:60px' rowspan="+p+"><b>\u4fdd\u6709\u6280\u80fd</b></th><th colspan=2 style='width:300px'>\u6280\u80fd</th><th colspan=5 style='width:250px'>\u51b7\u537b\u6642\u9593(Lv.6\u8207Lv.10\u5404\u6e1b\u5c111\u56de\u5408)</th><th colspan=5 style='width:250px'>\u958b\u653e\u689d\u4ef6</th></tr><tr>"+b);if(0!=master.mstSvt[h].classPassive.length){b="";for(a=p=0;a<master.mstSvt[h].classPassive.length;a++){p++;for(c=0;c<master.mstSkill.length;c++)if(master.mstSvt[h].classPassive[a]==
master.mstSkill[c].id){b+="<td style='width:55px'><img src=common/images/SkillIcon/SkillIcon_"+master.mstSkill[c].iconId+".png onerror=javascript:this.src='common/images/SkillIcon/SkillIcon_0.png' width=55></img></td><td style='width:250px'><b>"+master.mstSkill[c].name+"</b></td>";break}l=[];for(c=0;c<skDetail.length;c++)if(master.mstSvt[h].classPassive[a]==skDetail[c][0]){l=skDetail[c].slice(0);break}if(document.getElementById("isJpTxt").checked||!l[1])for(c=0;c<master.mstSkillDetail.length;c++)if(master.mstSvt[h].classPassive[a]==
master.mstSkillDetail[c].id){l[1]=master.mstSkillDetail[c].detail;break}f=[];document.getElementById("isJpTxt").checked?f[0]=l[1].slice(0):(l[1]=l[1].replace(/ \uff0b |\u3000\uff0b\u3000/g,"\uff0b"),l[1]=l[1].replace(/\uff06/g,"\uff06\u2517"),f=l[1].split(/\uff06|\uff0b|\+/));b+="<td colspan=10 style='width:500px'>";for(d=0;d<f.length;d++)if(f[d].search(/\{0\}|Lv/),f[d]=f[d].replace(/\{0\}/g,"Lv."),f[d]=f[d].replace(/\[Lv.]/g,'<font color="#CC00CC ">[Lv.]</font>'),f[d]=f[d].replace(/\u3010/g,'<font color="#006400 ">\u3010'),
f[d]=f[d].replace(/\u3011/g,"\u3011</font>"),f[d]=f[d].replace(/\n/g,"<br>"),f[d]=f[d].replace(/\[g\]\[o\]\u25b2\[\/o\]\[\/g\]/g,'<font color="#ff7f0f ">\u25b2</font>'),document.getElementById("isJpTxt").checked)b+=f[d];else if(0!=d&&(b+="<br>"),b+=f[d],l[2+d]&&1<l[2+d].split("/").length-1)for(c in b+=f[d]+"\uff1a",n=[],n=l[2+d].split(/\//),n)b+=n[c];else b=l[2+d]?b+("\uff1a"+l[2+d].replace(/\//g," / ")):"undefined"!==typeof l[2+d]&&0==l[2+d].length?b+"":b+"\uff1a\u5f85\u88dc";b+="</td></tr>"}0<b.length&&
(r+="<tr><th rowspan="+master.mstSvt[h].classPassive.length+"><b>\u8077\u968e\u6280\u80fd</b></th>"+b)}b="";p=0;for(c in master.mstSvtTreasureDevice)if(master.mstSvtTreasureDevice[c].svtId==master.mstSvt[h].id&&100!=master.mstSvtTreasureDevice[c].treasureDeviceId)for(a=0;a<master.mstTreasureDevice.length;a++)if(master.mstTreasureDevice[a].id==master.mstSvtTreasureDevice[c].treasureDeviceId){p+=2;b+="<th colspan=2 style='width:300px'><b>\u540d\u7a31</b></th><th colspan=2 style='width:100px'><b>\u7b49\u7d1a</b></th><th colspan=2 style='width:100px'><b>\u7a2e\u985e</b></th><th colspan=4 style='width:200px'><b>\u89e3\u653e\u95dc\u5361</b></th><th colspan=2 style='width:100px'>\u653b\u64ca\u6b21\u6578</th></tr>";
b+='<tr align="center"><td colspan=2><div class=ruby>'+master.mstTreasureDevice[a].ruby+"</div>";b+='<b><font color="#'+cardList[master.mstSvtTreasureDevice[c].cardId]+'">'+master.mstTreasureDevice[a].name+"</font></b></td><td colspan=2>"+master.mstTreasureDevice[a].rank+"</td><td colspan=2>"+master.mstTreasureDevice[a].typeText.replace(/\uff0f/g,"\uff0f<br>").replace(/\u5bfe/g,"\u5c0d").replace(/\u5b9d/g,"\u5bf6").replace(/\u5263/g,"\u528d").replace(/\u60aa/g,"\u60e1").replace(/\u5965/g,"\u5967").replace(/\u30bb\u30a4\u30d0\u30fc/g,
"Saber").replace(/\u7adc/g,"\u9f8d")+"</td><td colspan=4>";b=98==master.mstSvtTreasureDevice[c].num?b+"\u6575\u4eba\u6216\u7279\u6b8a\u652f\u63f4\u9650\u5b9a":0==master.mstSvtTreasureDevice[c].condQuestId&&0==master.mstSvtTreasureDevice[c].condLv&&0==master.mstSvtTreasureDevice[c].condFriendshipRank?b+"\u521d\u671f":null!=findName(master.mstQuest,master.mstSvtTreasureDevice[c].condQuestId)?b+questRea(master.mstSvtTreasureDevice[c].condQuestId):0!=master.mstSvtTreasureDevice[c].condLv?b+("Lv."+master.mstSvtTreasureDevice[c].condLv+
"\u89e3\u653e"):0!=master.mstSvtTreasureDevice[c].condFriendshipRank?b+("\u7d46\u7b49\u7d1a"+master.mstSvtTreasureDevice[c].condFriendshipRank+"\u89e3\u653e"):b+"\u672a\u958b\u653e";b+="</td>";l=[];for(d in tdDetail)if(master.mstTreasureDevice[a].id==tdDetail[d][0]){l=tdDetail[d].slice(0);break}if(document.getElementById("isJpTxt").checked||!l[1])for(d in master.mstTreasureDeviceDetail)if(master.mstTreasureDevice[a].id==master.mstTreasureDeviceDetail[d].id){l[1]=master.mstTreasureDeviceDetail[d].detail;
break}b+="<td colspan=2>";-1==l[1].search(/\u653b\u64ca[^\u529b\u6642]|\u653b\u6483[^\u529b\u6642]/)?b+="\uff0d":(b=0<master.mstSvtTreasureDevice[c].damage.length?b+master.mstSvtTreasureDevice[c].damage.length:b+"1",b+="Hit",1<master.mstSvtTreasureDevice[c].damage.length&&(b+="s"));b+="</td></tr>";f=[];document.getElementById("isJpTxt").checked?f[0]=l[1].slice(0):(l[1]=l[1].replace(/ \uff0b |\u3000\uff0b\u3000/g,"\uff0b"),l[1]=l[1].replace(/\uff06/g,"\uff06\u2517"),f=l[1].split(/\uff06|\uff0b/));
p+=f.length;for(d=0;d<f.length;d++){f[d].search(/\{0\}|Lv/);f[d].search(/<O|<\u30aa/);f[d]=f[d].replace(/\{0\}/g,"Lv.");f[d]=f[d].replace(/<O/g,'<font color="#CC6600"><br>< O');f[d]=f[d].replace(/<\u30aa/g,'<font color="#CC6600"><\u30aa');f[d]=f[d].replace(/P>/g,"P></font>");f[d]=f[d].replace(/\u30d7>/g,"\u30d7></font>");f[d]=f[d].replace(/\u3010/g,'<font color="#006400 ">\u3010');f[d]=f[d].replace(/\u3011/g,"\u3011</font>");f[d]=f[d].replace(/\[Lv.]/g,'<font color="#CC00CC ">[Lv.]</font>');f[d]=
f[d].replace(/\n/g,"<br>");f[d]=f[d].replace(/\[g\]\[o\]\u25b2\[\/o\]\[\/g\]/g,'<font color="#ff7f0f ">\u25b2</font>');if(document.getElementById("isJpTxt").checked)b+="<td colspan=12>"+f[d]+"</td>";else if(0!=d&&(b+="<tr>"),b+="<td colspan=2>"+f[d]+"</td>",l[2+d]&&1<l[2+d].split("/").length-1)for(g in n=[],n=l[2+d].split(/\//),n)b+="<td align=center colspan=2>"+n[g]+"</td>";else b+="<td colspan=10>",b=l[2+d]?b+("\u3000"+l[2+d]):"undefined"!==typeof l[2+d]&&0==l[2+d].length?b+"\u3000---":b+"\u3000\u5f85\u88dc";
b+="</td></tr>"}break}0<b.length&&(r+="<tr><th rowspan="+p+" style='width:60px'><b>\u5bf6\u5177</b></th>"+b);document.getElementById("svtSkTdData").innerHTML=r;c="";c='<tr><th rowspan=2 style="width:250px">\u80fd\u529b\u503c</th><th style="width:80px">\u7b4b\u529b</th><th style="width:80px">\u8010\u4e45</th><th style="width:80px">\u654f\u6377</th><th style="width:80px">\u9b54\u529b</th><th style="width:80px">\u5e78\u904b</th><th style="width:80px">\u5bf6\u5177</th></tr><tr align="center"><td>'+svtStatusList[Math.floor(k.power/
10)]+svtStatusPlusList[k.power%10]+"</td><td>"+svtStatusList[Math.floor(k.defense/10)]+svtStatusPlusList[k.defense%10]+"</td><td>"+svtStatusList[Math.floor(k.agility/10)]+svtStatusPlusList[k.agility%10]+"</td><td>"+svtStatusList[Math.floor(k.magic/10)]+svtStatusPlusList[k.magic%10]+"</td><td>"+svtStatusList[Math.floor(k.luck/10)]+svtStatusPlusList[k.luck%10]+"</td><td>"+svtStatusList[Math.floor(k.treasureDevice/10)]+svtStatusPlusList[k.treasureDevice%10]+"</td></tr>";if(1E3!=master.mstSvt[h].friendshipId){d=
findSvtFs(master.mstSvt[h].id);r=5;b=[];if(d!=master.mstSvt[h].friendshipId||10==master.mstSvt[h].maxFriendshipRank)r=10;c+="<tr><th rowspan="+2*(10==r?15:5)/5+">\u7d46\u9ede\u6578<br>(\u7d2f\u7a4d)</th><th>Lv.1</th><th>Lv.2</th><th>Lv.3</th><th>Lv.4</th><th>Lv.5</th><th>";10==r&&(c+="\u5c08\u5c6c\u79ae\u88dd");c+='</th></tr><tr align="center">';for(a in master.mstFriendship)master.mstFriendship[a].id==d&&15>master.mstFriendship[a].rank&&(b[master.mstFriendship[a].rank]=master.mstFriendship[a].friendship);
for(a=0;5>a;a++)c=0==a?c+("<td>"+b[a]+"</td>"):c+("<td>"+(b[a]-b[a-1])+"<br>("+b[a]+")</td>");if(10==r){c+="<td rowspan=5>";for(var q in bondCE)if(bondCE[q][1]==master.mstSvt[h].id){c+=svtFace(bondCE[q][0]);break}c+="</td></tr>"}else c+="<td></td></tr>";if(10==r){c+='<tr><th>Lv.6</th><th>Lv.7</th><th>Lv.8</th><th>Lv.9</th><th>Lv.10</th></tr><tr align="center">';for(a=5;10>a;a++)c+="<td>"+(b[a]-b[a-1])+"<br>("+b[a]+")</td>";c+='</tr><tr><th>Lv.11</th><th>Lv.12</th><th>Lv.13</th><th>Lv.14</th><th>Lv.15</th></tr><tr align="center">';
for(a=10;15>a;a++)c+="<td>"+(b[a]-b[a-1])+"<br>("+b[a]+")</td>";c+="</tr>"}}master.mstSvt[h].collectionNo>zhCNNo&&($("#cmtlang_zh").prop("checked",!1),$("#cmtlang_jp").prop("checked",!0));cmtRead($("input[name=cmtlang]:checked").val());$("#svtInfoData").html(c);q="";q="<tr><th rowspan=4><b>\u9748\u57fa\u518d\u81e8</b></th>";for(d=0;4>d;d++){c="";0==d%2&&(c=' bgcolor=" #ECF2F3"');0!=d&&(q+="<tr>");q+="<td width=80 "+c+">\u7b2c"+(d+1)+"\u968e\u6bb5</td><td width=450"+c+">";for(a=0;a<master.mstCombineLimit.length;a++)if(master.mstCombineLimit[a].id==
master.mstSvt[h].id&&master.mstCombineLimit[a].svtLimit==d){for(c=0;c<master.mstCombineLimit[a].itemIds.length;c++)q+='<a href="item_drop.html#'+master.mstCombineLimit[a].itemIds[c]+'"><div class="itemMT" title="'+findItemName(master.mstCombineLimit[a].itemIds[c])+'" style="background-image: url(\'common/images/icon/items/'+master.mstCombineLimit[a].itemIds[c]+".png')\" >"+master.mstCombineLimit[a].itemNums[c]+'</div></a><div style="width:10px;display:inline-block;"></div>';q+='<div class="itemMT" title="QP" style="background-image: url(\'common/images/icon/items/5.png\')" >'+
addCommas(master.mstCombineLimit[a].qp)+"</div>"}q+="</td></tr>"}q+="<tr><th rowspan=9><b>\u6280\u80fd\u5f37\u5316</b></th>";for(a=d=0;a<master.mstCombineSkill.length;a++)if(c="",0==a%2&&(c=' bgcolor=" #ECF2F3"'),master.mstCombineSkill[a].id==master.mstSvt[h].id){1!=master.mstCombineSkill[a].skillLv&&(q+="<tr>");q+="<td"+c+">Lv."+master.mstCombineSkill[a].skillLv+"\u2192Lv."+(master.mstCombineSkill[a].skillLv+1)+"</td><td"+c+">";for(c=0;c<master.mstCombineSkill[a].itemIds.length;c++)q+='<a href="item_drop.html#'+
master.mstCombineSkill[a].itemIds[c]+'"><div class="itemMT" title="'+findItemName(master.mstCombineSkill[a].itemIds[c])+'" style="background-image: url(\'common/images/icon/items/'+master.mstCombineSkill[a].itemIds[c]+".png')\" >"+master.mstCombineSkill[a].itemNums[c]+'</div></a><div style="width:10px;display:inline-block;"></div>';q+='<div class="itemMT" title="QP" style="background-image: url(\'common/images/icon/items/5.png\')" >'+addCommas(master.mstCombineSkill[a].qp)+"</div>";d++}0==d&&(q+=
"<td colspan=2>\u7121</td></tr>");$("#svtCmbnData").html(q);$("#svtImgData").html('<tr><td><span id="cmd"><img src="common/images/Servants/Commands/'+e+'/card_servant_1.png" style="max-width:20%;" class="svtImg"/><img src="common/images/Servants/Commands/'+e+'/card_servant_2.png" style="max-width:20%;" class="svtImg"/><img src="common/images/Servants/Commands/'+e+'/card_servant_3.png" style="max-width:20%;" class="svtImg"/></span><br><span id="graph"><img src=common/images/CharaGraph/'+e+'a.png style="max-width:100%;" class="svtImg"/><img src=common/images/CharaGraph/'+
e+'b.png style="max-width:100%;" class="svtImg"/><img src=common/images/CharaGraph/'+e+'c.png style="max-width:50%;" class="svtImg"/></span></td></tr>');for(a in master.mstSvtLimitAdd)master.mstSvtLimitAdd[a].svtId==master.mstSvt[h].id&&($("#cmd").append('<img src="common/images/Servants/Commands/'+e+"/card_servant_"+master.mstSvtLimitAdd[a].limitCount+'.png" style="max-width:20%;" class="svtImg"/>'),$("#graph").append("<img src=common/images/CharaGraph/"+master.mstSvtLimitAdd[a].battleCharaId+'a.png style="max-width:50%;" class="svtImg"/>'),
master.mstSvt[h].collectionNo<=statusNo&&$(".slide").append('<div><img src="common/images/Servants/Status/'+e+"/status_servant_"+master.mstSvtLimitAdd[a].limitCount+'.png" onerror="this.style.display = none" width=256 height=256 /></div>'));$(".svtImg").error(function(){$(this).hide()});e="";null==m||k.hpBase==m.hpBase&&k.hpMax==m.hpMax&&k.atkBase==m.atkBase&&k.atkMax==m.atkMax||(k=m);if(99==master.mstSvt[h].type)$("#chart_div").css("display","none");else for($("#chart_div").css("display","block"),
e="<tr><th>\u7b49\u7d1a</th><th>ATK</th><th>HP</th><th>\u4e0a\u5347\u5e45\u5ea6</th></tr>",a=0;100>a;a++)for(d=0;d<master.mstSvtExp.length;d++)if(master.mstSvt[h].expType==master.mstSvtExp[d].type&&master.mstSvtExp[d].lv==a+1){c="";1==master.mstSvtExp[d].lv%2&&(c=' bgcolor="#ECF2F3"');e+='<tr align="center"><td'+c+">Lv."+master.mstSvtExp[d].lv+"</td><td"+c+">"+Math.floor(k.atkBase+(k.atkMax-k.atkBase)*master.mstSvtExp[d].curve/1E3)+"</td><td"+c+">"+Math.floor(k.hpBase+(k.hpMax-k.hpBase)*master.mstSvtExp[d].curve/
1E3)+"</td><td"+c+">"+(master.mstSvtExp[d].curve-master.mstSvtExp[d-1].curve)/10+"%</td></tr>";break}$("#svtLvData").html(e);$("img.lazyload").lazyload();$(function(){$(".slide").slick({dots:!0,infinite:!0,speed:300,slidesToShow:1,adaptiveHeight:!0,autoplay:!0,autoplaySpeed:2E3})})}
function cmtRead(e){try{$.get("common/svtcomment/"+e+"/"+$("#svtid").val(),function(a){0==a.length&&(a="W10=");a=JSON.parse(base64.decode(a));var e="",k;for(k in a){e+="<tr><th width=250>"+cmtCond(a[k].condType,null!=a[k].condValues&&0<a[k].condValues.length?a[k].condValues[0]:a[k].condValue);for(var m in master.mstSvtCommentAdd)master.mstSvtCommentAdd[m].svtId==a[k].svtId&&master.mstSvtCommentAdd[m].id==a[k].id&&(e+="<br>\uff06<br>"+cmtCond(master.mstSvtCommentAdd[m].condType,master.mstSvtCommentAdd[m].condValues[0]));
var b=1==a[k].id%2?' bgcolor=" #ECF2F3"':"";e+="</th><td colspan=6"+b+" width=540>";e+=a[k].comment.replace(/\n/g,"<br>").replace(/<br>$/,"<br><br>")+"</td></tr>"}0==a.length&&(e="");$("#svtCmtData").empty();$("#svtCmtData").append(e)},"text")}catch(a){console.log("Cannot find comment file."),"zh"==e&&cmtRead("jp")}}
function cmtCond(e,a){var h="";0==e?h+="<b>\u89d2\u8272\u8a73\u7d30</b>":9==e?h+="<b>\u7d46\u7b49\u7d1a"+a+"</b>":1==e?h+="<b>\u901a\u904e\u95dc\u5361</b><br>"+questRea(a):7==e&&(h+="<b>\u9748\u57fa\u518d\u81e8\u7b2c"+a+"\u968e\u6bb5</b>");return h}
function classidChange(){var e;for(e=svtid.options.length-1;0<=e;e--)svtid.remove(e);for(e=0;e<master.mstSvt.length;e++)if(0==classid.value||master.mstSvt[e].classId==classid.value)if(1==master.mstSvt[e].type||2==master.mstSvt[e].type||5==master.mstSvt[e].type||9==master.mstSvt[e].type||99==master.mstSvt[e].type){var a=findSvtNameZh(master.mstSvt[e].id);a?svtid.options.add(new Option("No."+master.mstSvt[e].collectionNo+" "+a,master.mstSvt[e].id)):svtid.options.add(new Option("No."+master.mstSvt[e].collectionNo+
" "+master.mstSvt[e].name,master.mstSvt[e].id))}for(e=0;e<svtid.options.length;e++)if(-1==svtid.options[e].text.search("No.0")){svtid.options[e].selected=!0;break}0!=classid.value&&svtlocation(svtid[svtid.options.selectedIndex].value)}function svtidset(){classidChange();svtlocation(svtid[0].value)}
function svtidChange(){var e;for(e=svtlv.options.length-1;0<=e;e--)svtlv.remove(e);for(e in master.mstSvt)if(master.mstSvt[e].id==svtid.value){for(e=100;0<e;e--)svtlv.options.add(new Option("Lv."+e,e));break}svtlvChange();svtDataTable(svtid.value);drawChart()}
function svtlocation(e){e="";for(var a in master.mstSvt)if(master.mstSvt[a].id==svtid.value){e=0!=master.mstSvt[a].collectionNo?e+("?no="+master.mstSvt[a].collectionNo):e+("?id="+master.mstSvt[a].id);break}"file:"==location.protocol?changeURL(location.protocol+"//"+location.pathname+e):changeURL(location.protocol+"//"+location.hostname+location.pathname+e);svtidChange()}
function svtlvChange(){var e,a=0,h=0,k=0,m=0;for(e in master.mstSvtLimit)master.mstSvtLimit[e].svtId==svtid.value&&(a=master.mstSvtLimit[e].hpBase,h=master.mstSvtLimit[e].hpMax,k=master.mstSvtLimit[e].atkBase,m=master.mstSvtLimit[e].atkMax);for(var b in master.mstSvt)if(master.mstSvt[b].id==svtid.value){for(var p in master.mstSvtExp)if(atk.value=k,hp.value=a,four(),master.mstSvt[b].expType==master.mstSvtExp[p].type&&master.mstSvtExp[p].lv==svtlv.value){atk.value=Math.floor(k+(m-k)*master.mstSvtExp[p].curve/
1E3);hp.value=Math.floor(a+(h-a)*master.mstSvtExp[p].curve/1E3);four();break}break}}function four(){hpp.value=parseInt(hp.value)+2E3;atkp.value=parseInt(atk.value)+2E3}function npArray(e){var a="",h;for(h in e)a+=e[h]/100+"%<br>";return a}
function urlId(){$("#zhTWNO").html(zhTWNo);$("#zhCNNO").html(zhCNNo);$("#classid").val(0);classidChange();var e="1",a="";getUrl("no")&&(e=getUrl("no"));getUrl("id")&&(a=getUrl("id"));if(e){if(0!=a.length)for(i in master.mstSvt){if((1==master.mstSvt[i].type||2==master.mstSvt[i].type||5==master.mstSvt[i].type||9==master.mstSvt[i].type||99==master.mstSvt[i].type)&&a==master.mstSvt[i].id){$("#svtid").val(master.mstSvt[i].id);break}}else for(i in master.mstSvt)if((1==master.mstSvt[i].type||2==master.mstSvt[i].type||
5==master.mstSvt[i].type||9==master.mstSvt[i].type||99==master.mstSvt[i].type)&&e==master.mstSvt[i].collectionNo){$("#svtid").val(master.mstSvt[i].id);break}i==master.mstSvt.length-1&&$("#svtid").val(800100)}svtidChange()};