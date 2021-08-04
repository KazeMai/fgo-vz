﻿object_extend("mstSvtSkill",'{"strengthStatus":0,"svtId":9941040,"num":1,"priority":1,"skillId":435350,"condQuestId":0,"condQuestPhase":0,"condLv":0,"condLimitCount":-1,"eventId":0},{"strengthStatus":0,"svtId":9941040,"num":2,"priority":1,"skillId":436450,"condQuestId":0,"condQuestPhase":0,"condLv":0,"condLimitCount":-1,"eventId":0},{"strengthStatus":0,"svtId":9941040,"num":3,"priority":1,"skillId":437551,"condQuestId":0,"condQuestPhase":0,"condLv":0,"condLimitCount":-1,"eventId":0}');
object_extend("mstSvtSkill",'{"svtId":9940380,"num":1,"priority":1,"skillId":960182,"condQuestId":0,"condLv":0,"condLimitCount":-1},{"svtId":9940390,"num":1,"priority":1,"skillId":960184,"condQuestId":0,"condLv":0,"condLimitCount":-1},{"svtId":9940400,"num":1,"priority":1,"skillId":960183,"condQuestId":0,"condLv":0,"condLimitCount":-1},{"svtId":9940410,"num":1,"priority":1,"skillId":960185,"condQuestId":0,"condLv":0,"condLimitCount":-1},{"svtId":9940530,"num":1,"priority":2,"skillId":960189,"condQuestId":0,"condLv":0,"condLimitCount":-1},{"svtId":9940530,"num":2,"priority":2,"skillId":960190,"condQuestId":0,"condLv":0,"condLimitCount":-1},{"svtId":9940530,"num":3,"priority":2,"skillId":960191,"condQuestId":0,"condLv":0,"condLimitCount":-1},{"svtId":9940530,"num":4,"priority":2,"skillId":960192,"condQuestId":0,"condLv":0,"condLimitCount":-1},{"svtId":9940530,"num":5,"priority":2,"skillId":960193,"condQuestId":0,"condLv":0,"condLimitCount":-1},{"svtId":9940530,"num":6,"priority":2,"skillId":960194,"condQuestId":0,"condLv":0,"condLimitCount":-1},{"svtId":9940530,"num":7,"priority":2,"skillId":960195,"condQuestId":0,"condLv":0,"condLimitCount":-1},{"svtId":9940600,"num":4,"priority":1,"skillId":960235,"condQuestId":0,"condLv":0,"condLimitCount":-1}');
object_extend("mstSvtTreasureDevice",'{"damage":[100],"svtId":9935400,"num":1,"priority":426,"imageIndex":0,"treasureDeviceId":441,"condQuestId":0,"condQuestPhase":0,"condLv":0,"condFriendshipRank":0,"motion":50,"cardId":1},{"damage":[16,33,51],"svtId":9935500,"num":1,"priority":101,"imageIndex":0,"treasureDeviceId":9935511,"condQuestId":0,"condQuestPhase":0,"condLv":0,"condFriendshipRank":0,"motion":50,"cardId":1}');
//伊吹童子
object_extend("mstSkill",'{"effectList":[],"actIndividuality":[],"script":{},"id":995395,"type":1,"name":"源氏、死に候え A++","ruby":"-","maxLv":1,"iconId":999999,"motion":1001},{"effectList":[],"actIndividuality":[],"script":{},"id":995396,"type":1,"name":"景清は死なず EX","ruby":"-","maxLv":1,"iconId":999999,"motion":101},{"effectList":[],"actIndividuality":[],"script":{},"id":995397,"type":1,"name":"痣丸の霧 B","ruby":"-","maxLv":1,"iconId":999999,"motion":104}');
object_extend("mstSkillDetail",'{"id":995395,"detail":"？？？","detailShort":"？？？"},{"id":995396,"detail":"？？？","detailShort":"？？？"},{"id":995397,"detail":"？？？","detailShort":"？？？"}');
object_extend("mstSkillLv",'{"funcId":[6234,200,470,215],"svals":["[1000,3,-1,1000]","[1000,3,-1,500]","[1000,1]","[1000,3,-1,50]"],"script":{},"skillId":995395,"lv":1,"chargeTurn":0,"skillDetailId":1,"priority":0},{"funcId":[292,695],"svals":["[1000,3,1,1000]","[1000,3,-1,500]"],"script":{},"skillId":995396,"lv":1,"chargeTurn":0,"skillDetailId":1,"priority":0},{"funcId":[283,146,321],"svals":["[1000,3,2]","[1000,3,-1,200]","[1000,3,-1,500]"],"script":{},"skillId":995397,"lv":1,"chargeTurn":0,"skillDetailId":1,"priority":0}');
object_extend("mstSvtSkill",'{"svtId":9942790,"num":1,"priority":1,"skillId":995395,"condQuestId":0,"condLv":0,"condLimitCount":-1},{"svtId":9942790,"num":1,"priority":1,"skillId":995396,"condQuestId":0,"condLv":0,"condLimitCount":-1},{"svtId":9942790,"num":1,"priority":1,"skillId":995397,"condQuestId":0,"condLv":0,"condLimitCount":-1}');

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
sortByElmentNo(master.mstSvt);var zhTWNo=215,zhCNNo=223,statusNo=315,personalityList=" \u5584 \u60e1 ? \u72c2 \u4e2d\u5eb8 \u5584\uff0f\u60e1 \u82b1\u5ac1 \u590f".split(" "),policyList=" \u4e2d\u7acb \u6df7\u6c8c \u79e9\u5e8f ? ? \u4e2d\u7acb".split(" "),attriList="\uff1f\u4eba\u5929\u5730\u661f\u7378".split(""),genderTypeList=["","\u7537\u6027","\u5973\u6027","\u4e0d\u660e"],cardList=["","0000ff","ff0000","00ff00"],svtStatusList=" A B C D E EX ? ? ".split(" "),svtStatusPlusList="  + ++ ? +++ - ? \uff1f \uff0d".split(" ");
function svtDataTable(e){var a,k;for(k in master.mstSvt)if(master.mstSvt[k].id==e)break;var l=null;for(r in master.mstSvtLimit)if(master.mstSvtLimit[r].svtId==e){l=master.mstSvtLimit[r];break}var r=null;for(a in master.mstSvtLimit)if(master.mstSvtLimit[a].svtId==e&&master.mstSvtLimit[a].limitCount==master.mstSvt[k].limitMax){r=master.mstSvtLimit[a];break}var b="<tr>";master.mstSvt[k].collectionNo<=statusNo?(b+="<td rowspan=7 align=center style='width:25%;height:300px;'>",b=5==master.mstSvt[k].type||
9==master.mstSvt[k].type||99==master.mstSvt[k].type?b+("<img src=common/images/Servants/Status/"+e+"/status_servant_2.png onerror=\"javascript:this.style='display:none'\" width=256 height=256 /></td>"):b+("<div class='slide'><div><img src=common/images/Servants/Status/"+e+"/status_servant_1.png onerror=\"this.style.display = 'none'\" width=256 height=256 /></div><div><img src=common/images/Servants/Status/"+e+"/status_servant_2.png onerror=\"this.style.display = 'none'\" width=256 height=256 /></div><div><img src=common/images/Servants/Status/"+
e+"/status_servant_3.png onerror=\"this.style.display = 'none'\" width=256 height=256 /></div></div></td>")):b+="<td rowspan=7 align=center style='width:25%;height:300px;'><img src='common/images/icon/faces/"+master.mstSvt[k].id+"0.png' onerror=javascript:this.src='common/images/icon/faces/0.png'></td>";b+="<th style='width:10%;'><b>\u7de8\u865f</b></th><th style='width:10%;'><b>\u661f\u6578</b></th><th colspan=2 style='width:40%;'><b>\u540d\u7a31</b></th><th style='width:10%;'><b>\u8077\u968e</b></th><th style='width:10%;'><b>\u5206\u985e</b></th></tr><tr align=\"center\"><td>No."+
master.mstSvt[k].collectionNo+'</td><td class="star">';for(a=0;a<l.rarity;a++)b+="\u2605";if(null!=r&&r.rarity!=l.rarity)for(b+="<br>",a=0;a<r.rarity;a++)b+="\u2605";0==l.rarity&&(b+="\uff0d");b+="</td><td colspan=2>";b=(a=findSvtNameZh(master.mstSvt[k].id))&&!document.getElementById("isJpTxt").checked?b+("<div class=ruby>"+master.mstSvt[k].ruby+"</div>"+a):b+master.mstSvt[k].name;b+="</td>";document.title=findSvtNameZh2(e)+" - \u5f9e\u8005\u8cc7\u6599\u67e5\u8a62";for(a=0;a<mstClass.length;a++)if(mstClass[a].id==
master.mstSvt[k].classId){b+="<td>"+mstClass[a].name+"</td>";break}b+="<td>"+attriList[master.mstSvt[k].attri]+"</td></tr><tr><th><b>HP</b></th><th><b>ATK</b></th><th style='width:20%;'><b>\u7e6a\u5e2b</b></th><th style='width:20%;'><b>CV</b></th><th><b>\u5c6c\u6027</b></th><th><b>\u6027\u5225</b></th></tr><tr align=\"center\"><td>"+l.hpBase+" / "+l.hpMax;null==r||l.hpBase==r.hpBase&&l.hpMax==r.hpMax||(b+="<br>"+r.hpBase+" / "+r.hpMax);b+="</td><td>"+l.atkBase+" / "+l.atkMax;null==r||l.atkBase==r.atkBase&&
l.atkMax==r.atkMax||(b+="<br>"+r.atkBase+" / "+r.atkMax);b+="</td><td>";if(-1!=master.mstSvt[k].illustratorId)for(a=0;a<master.mstIllustrator.length;a++){if(master.mstIllustrator[a].id==master.mstSvt[k].illustratorId){b+="<a href='illustrator.html#"+master.mstSvt[k].illustratorId+"'>"+master.mstIllustrator[a].name.replace(/\(/g,"<br>(")+"</a>";break}}else b+="\uff1f\uff1f\uff1f";b+="</td><td>";if(-1!=master.mstSvt[k].cvId)for(a=0;a<master.mstCv.length;a++){if(master.mstCv[a].id==master.mstSvt[k].cvId){b+=
"<a href='cv.html#"+master.mstSvt[k].cvId+"'>"+master.mstCv[a].name.replace(/\uff06/g,"<br>")+"</a>";break}}else b+="\uff1f\uff1f\uff1f";b=b+"</td><td>"+(policyList[l.policy]+"\u30fb"+personalityList[l.personality]+"</td><td>"+genderTypeList[master.mstSvt[k].genderType]+"</td></tr>");var d=[];for(a in master.mstSvt[k].individuality)indi_list[master.mstSvt[k].individuality[a]]&&d.push(indi_list[master.mstSvt[k].individuality[a]].name);b+="<tr><th>\u7279\u6027</th><td colspan=5 align=center id=indi>"+
d+"</td></tr>";document.getElementById("svtNrmlData").innerHTML=b;d='<tr><th rowspan=2><b>\u6307\u4ee4\u5361</b></th><th><font color="#0099FF"><b>Arts</b></font></th><th><font color="#ff0000"><b>Buster</b></font></th><th><font color="#00ff00"><b>Quick</b></font></th><th><b>Extra</b></th><th rowspan=2><b>\u96b1\u85cf\u6578\u503c</b></th><th><b>\u661f\u661f\u767c\u751f\u7387</b></th><th><b>\u88ab\u5373\u6b7b\u7387</b></th><th><b>\u661f\u661f\u5206\u914d\u6bd4\u91cd</b></th><th rowspan=2><b>NP\u7372\u5f97\u7387</b></th><th><font color="#0099FF"><b>Arts</b></font></th><th><font color="#ff0000"><b>Buster</b></font></th><th><font color="#00ff00"><b>Quick</b></font></th><th><b>Extra</b></th><th><b>\u5bf6\u5177</b></th><th><b>\u9632\u79a6</b></th></tr><tr align="center">';
for(b=1;4>=b;b++){d+="<td>";var t=0;for(a=0;a<master.mstSvt[k].cardIds.length;a++)master.mstSvt[k].cardIds[a]==b&&t++;4!=b&&(d+=t+"\u5f35");for(a=0;a<master.mstSvtCard.length;a++)master.mstSvtCard[a].svtId==master.mstSvt[k].id&&master.mstSvtCard[a].cardId==b&&(4!=b&&(d+=" \u5404"),d+=master.mstSvtCard[a].normalDamage.length+"Hit",1<master.mstSvtCard[a].normalDamage.length&&(d+="s"));d+="</td>"}d+="<td>"+master.mstSvt[k].starRate/10+"%</td><td>"+master.mstSvt[k].deathRate/10+"%</td><td>"+l.criticalWeight+
"</td>";t=[];for(var m=0;6>m;m++)t[m]=[];for(var u in master.mstSvtTreasureDevice)if(master.mstSvtTreasureDevice[u].svtId==master.mstSvt[k].id&&0!=master.mstSvtTreasureDevice[u].priority)for(a in master.mstTreasureDeviceLv)if(master.mstTreasureDeviceLv[a].treaureDeviceId==master.mstSvtTreasureDevice[u].treasureDeviceId){var h=[master.mstTreasureDeviceLv[a].tdPointA,master.mstTreasureDeviceLv[a].tdPointB,master.mstTreasureDeviceLv[a].tdPointQ,master.mstTreasureDeviceLv[a].tdPointEx,master.mstTreasureDeviceLv[a].tdPoint,
master.mstTreasureDeviceLv[a].tdPointDef];for(m=0;6>m;m++)0!=t[m].length&&t[m][t[m].length-1]==h[m]||t[m].push(h[m])}for(m=0;6>m;m++)d+="<td>"+npArray(t[m])+"</td>";d+="</tr>";document.getElementById("svtCtrlData").innerHTML=d;d=u="";t=1;var x=[];for(a=0;a<master.mstSvtSkill.length;a++)if(master.mstSvtSkill[a].svtId==master.mstSvt[k].id&&!x.includes(master.mstSvtSkill[a].skillId)){x.push(master.mstSvtSkill[a].skillId);for(b=0;b<master.mstSkill.length;b++)if(master.mstSvtSkill[a].skillId==master.mstSkill[b].id){d+=
"<td><img src=common/images/SkillIcon/SkillIcon_"+master.mstSkill[b].iconId+".png onerror=javascript:this.src='common/images/SkillIcon/SkillIcon_0.png' width=55></img></td><td>";5!=master.mstSvt[k].type&&(d+="<font color=#007979>SKILL "+master.mstSvtSkill[a].num+"</font><br>");d+="<b>"+master.mstSkill[b].name+"</b></td>";break}if(null==master.mstSkill[b])console.log("\u6280\u80fd\u5c0b\u627e\u5931\u6557");else{t++;for(b=0;b<master.mstSkillLv.length;b++)if(master.mstSvtSkill[a].skillId==master.mstSkillLv[b].skillId&&
1==master.mstSkillLv[b].lv){d+="<td colspan=5>\u51b7\u537b"+master.mstSkillLv[b].chargeTurn+"\u56de\u5408</td>";break}d+="<td colspan=5>";-1==master.mstSvtSkill[a].condLimitCount?d+="\u6575\u4eba\u6216\u7279\u6b8a\u652f\u63f4\u9650\u5b9a\uff0c\u51b7\u537b\u53ca\u6548\u679c\u50c5\u4f9b\u53c3\u8003":(0==master.mstSvtSkill[a].condLimitCount&&0==master.mstSvtSkill[a].condQuestId&&0==master.mstSvtSkill[a].condLv&&(d+="\u521d\u671f"),0!=master.mstSvtSkill[a].condLimitCount&&(d+="\u9748\u57fa\u518d\u81e8\u7b2c"+
master.mstSvtSkill[a].condLimitCount+"\u968e\u6bb5<br>"),0!=master.mstSvtSkill[a].condLv&&(d+="Lv."+master.mstSvtSkill[a].condLv+"<br>"),0!=master.mstSvtSkill[a].condQuestId&&(d+="\u901a\u904e\u95dc\u5361 "+questRea(master.mstSvtSkill[a].condQuestId)+"<br>"));for(var n in master.mstSvtSkillRelease)if(master.mstSvtSkillRelease[n].svtId==master.mstSvtSkill[a].svtId&&master.mstSvtSkillRelease[n].num==master.mstSvtSkill[a].num&&master.mstSvtSkillRelease[n].priority==master.mstSvtSkill[a].priority){if(70==
master.mstSvtSkillRelease[n].condType)if(11>master.mstSvtSkillRelease[n].condNum)d+="\u9650\u5b9a\u6230\u9b25\u89d2\u8272\u9078\u64c7\u7b2c"+master.mstSvtSkillRelease[n].condNum+"\u968e\u6bb5<br>";else for(var w in master.mstSvtCostume)if(master.mstSvtCostume[w].svtId==master.mstSvtSkillRelease[n].svtId&&master.mstSvtCostume[w].id==master.mstSvtSkillRelease[n].condNum){d+="\u88dd\u5099\u9748\u8863 "+master.mstSvtCostume[w].shortName+"<br>";break}break}d+="</td></tr>";h=[];for(b=0;b<skDetail.length;b++)if(master.mstSvtSkill[a].skillId==
skDetail[b][0]){h=skDetail[b].slice(0);break}if(document.getElementById("isJpTxt").checked||!h[1])for(b=0;b<master.mstSkillDetail.length;b++)if(master.mstSvtSkill[a].skillId==master.mstSkillDetail[b].id){h[1]=master.mstSkillDetail[b].detail;break}var f=[];document.getElementById("isJpTxt").checked?f[0]=h[1].slice(0):(h[1]=h[1].replace(/ \uff0b |\u3000\uff0b\u3000/g,"\uff0b"),h[1]=h[1].replace(/\uff06/g,"\uff06\u2517"),f=h[1].split(/\uff06|\uff0b/));t+=f.length;for(var c=0;c<f.length;c++){f[c].search(/\{0\}|Lv/);
f[c]=f[c].replace(/\{0\}/g,"Lv.");f[c]=f[c].replace(/\[Lv.]/g,'<font color="#CC00CC ">[Lv.]</font>');f[c]=f[c].replace(/\u3010/g,'<font color="#006400 ">\u3010');f[c]=f[c].replace(/\u3011/g,"\u3011</font>");f[c]=f[c].replace(/\n/g,"<br>");f[c]=f[c].replace(/\[g\]\[o\]\u25b2\[\/o\]\[\/g\]/g,'<font color="#ff7f0f ">\u25b2</font>');if(document.getElementById("isJpTxt").checked)d+="<tr><td colspan=12>"+f[c]+"</td>";else if(d+="<tr><td colspan=2>"+f[c]+"</td>",h[2+c]&&1<h[2+c].split("/").length-1)for(b in m=
[],m=h[2+c].split(/\//),m)d+="<td align=center style='width:50px'>"+m[b]+"</td>";else d+="<td colspan=10>",d=h[2+c]?d+("\u3000"+h[2+c].replace(/\//g," / ")):"undefined"!==typeof h[2+c]&&0==h[2+c].length?d+"\u3000---":d+"\u3000\u5f85\u88dc";d+="</td></tr>"}}}0<d.length&&(u+="<tr><th style='width:60px' rowspan="+t+"><b>\u4fdd\u6709\u6280\u80fd</b></th><th colspan=2 style='width:300px'>\u6280\u80fd</th><th colspan=5 style='width:250px'>\u51b7\u537b\u6642\u9593(Lv.6\u8207Lv.10\u5404\u6e1b\u5c111\u56de\u5408)</th><th colspan=5 style='width:250px'>\u958b\u653e\u689d\u4ef6</th></tr><tr>"+
d);if(0!=master.mstSvt[k].classPassive.length){d="";for(a=t=0;a<master.mstSvt[k].classPassive.length;a++){t++;for(b=0;b<master.mstSkill.length;b++)if(master.mstSvt[k].classPassive[a]==master.mstSkill[b].id){d+="<td style='width:55px'><img src=common/images/SkillIcon/SkillIcon_"+master.mstSkill[b].iconId+".png onerror=javascript:this.src='common/images/SkillIcon/SkillIcon_0.png' width=55></img></td><td style='width:250px'><b>"+master.mstSkill[b].name+"</b></td>";break}h=[];for(b=0;b<skDetail.length;b++)if(master.mstSvt[k].classPassive[a]==
skDetail[b][0]){h=skDetail[b].slice(0);break}if(document.getElementById("isJpTxt").checked||!h[1])for(b=0;b<master.mstSkillDetail.length;b++)if(master.mstSvt[k].classPassive[a]==master.mstSkillDetail[b].id){h[1]=master.mstSkillDetail[b].detail;break}f=[];document.getElementById("isJpTxt").checked?f[0]=h[1].slice(0):(h[1]=h[1].replace(/ \uff0b |\u3000\uff0b\u3000/g,"\uff0b"),h[1]=h[1].replace(/\uff06/g,"\uff06\u2517"),f=h[1].split(/\uff06|\uff0b|\+/));d+="<td colspan=10 style='width:500px'>";for(c=
0;c<f.length;c++)if(f[c].search(/\{0\}|Lv/),f[c]=f[c].replace(/\{0\}/g,"Lv."),f[c]=f[c].replace(/\[Lv.]/g,'<font color="#CC00CC ">[Lv.]</font>'),f[c]=f[c].replace(/\u3010/g,'<font color="#006400 ">\u3010'),f[c]=f[c].replace(/\u3011/g,"\u3011</font>"),f[c]=f[c].replace(/\n/g,"<br>"),f[c]=f[c].replace(/\[g\]\[o\]\u25b2\[\/o\]\[\/g\]/g,'<font color="#ff7f0f ">\u25b2</font>'),document.getElementById("isJpTxt").checked)d+=f[c];else if(0!=c&&(d+="<br>"),d+=f[c],h[2+c]&&1<h[2+c].split("/").length-1)for(b in d+=
f[c]+"\uff1a",m=[],m=h[2+c].split(/\//),m)d+=m[b];else d=h[2+c]?d+("\uff1a"+h[2+c].replace(/\//g," / ")):"undefined"!==typeof h[2+c]&&0==h[2+c].length?d+"":d+"\uff1a\u5f85\u88dc";d+="</td></tr>"}0<d.length&&(u+="<tr><th rowspan="+master.mstSvt[k].classPassive.length+"><b>\u8077\u968e\u6280\u80fd</b></th>"+d)}d="";for(n=t=0;n<master.mstSvtAppendPassiveSkill.length;n++)if(master.mstSvtAppendPassiveSkill[n].svtId==e){t++;for(b=0;b<master.mstSkill.length;b++)if(master.mstSvtAppendPassiveSkill[n].skillId==
master.mstSkill[b].id){d+="<td style='width:55px'><img src=common/images/SkillIcon/SkillIcon_"+master.mstSkill[b].iconId+".png onerror=javascript:this.src='common/images/SkillIcon/SkillIcon_0.png' width=55></img></td><td style='width:250px'><b>"+master.mstSkill[b].name+"</b></td>";d+="<td colspan=10 style='width:500px'>";break}h=[];for(b=0;b<skDetail.length;b++)if(master.mstSvtAppendPassiveSkill[n].skillId==skDetail[b][0]||master.mstSvtAppendPassiveSkill[n].skillId+9==skDetail[b][0]){h=skDetail[b].slice(0);
if(document.getElementById("isJpTxt").checked||!h[1])for(b=0;b<master.mstSkillDetail.length;b++)if(master.mstSvt[k].classPassive[a]==master.mstSkillDetail[b].id){h[1]=master.mstSkillDetail[b].detail;break}f=[];document.getElementById("isJpTxt").checked?f[0]=h[1].slice(0):(h[1]=h[1].replace(/ \uff0b |\u3000\uff0b\u3000/g,"\uff0b"),h[1]=h[1].replace(/\uff06/g,"\uff06\u2517"),f=h[1].split(/\uff06|\uff0b|\+/));for(c=0;c<f.length;c++)if(f[c].search(/\{0\}|Lv/),f[c]=f[c].replace(/\{0\}/g,"Lv."),f[c]=f[c].replace(/\[Lv.]/g,
'<font color="#CC00CC ">[Lv.]</font>'),f[c]=f[c].replace(/\u3010/g,'<font color="#006400 ">\u3010'),f[c]=f[c].replace(/\u3011/g,"\u3011</font>"),f[c]=f[c].replace(/\n/g,"<br>"),f[c]=f[c].replace(/\[g\]\[o\]\u25b2\[\/o\]\[\/g\]/g,'<font color="#ff7f0f ">\u25b2</font>'),d+="Lv."+(1+skDetail[b][0]-master.mstSvtAppendPassiveSkill[n].skillId)+":",document.getElementById("isJpTxt").checked)d+=f[c];else if(0!=c&&(d+="<br>"),d+=f[c],h[2+c]&&1<h[2+c].split("/").length-1)for(b in d+=f[c]+"\uff1a",m=[],m=h[2+
c].split(/\//),m)d+=m[b];else h[2+c]?d+="\uff1a"+h[2+c].replace(/\//g," / "):"undefined"!==typeof h[2+c]&&0==h[2+c].length&&(d+="");d+="<br>"}d+="</td></tr>"}0<d.length&&(u+="<tr><th rowspan="+t+" style='width:60px'><b>\u9644\u52a0\u6280\u80fd</b></th>"+d);d="";t=0;n=[];for(b in master.mstSvtTreasureDevice)if(master.mstSvtTreasureDevice[b].svtId==master.mstSvt[k].id&&100!=master.mstSvtTreasureDevice[b].treasureDeviceId&&!n.includes(master.mstSvtTreasureDevice[b].treasureDeviceId))for(n.push(master.mstSvtTreasureDevice[b].treasureDeviceId),
a=0;a<master.mstTreasureDevice.length;a++)if(master.mstTreasureDevice[a].id==master.mstSvtTreasureDevice[b].treasureDeviceId){t+=2;d+="<th colspan=2 style='width:300px'><b>\u540d\u7a31</b></th><th colspan=2 style='width:100px'><b>\u7b49\u7d1a</b></th><th colspan=2 style='width:100px'><b>\u7a2e\u985e</b></th><th colspan=4 style='width:200px'><b>\u958b\u653e\u689d\u4ef6</b></th><th colspan=2 style='width:100px'>\u653b\u64ca\u6b21\u6578</th></tr>";d+='<tr align="center"><td colspan=2><div class=ruby>'+
master.mstTreasureDevice[a].ruby+"</div>";d+='<b><font color="#'+cardList[master.mstSvtTreasureDevice[b].cardId]+'">'+master.mstTreasureDevice[a].name+"</font></b></td><td colspan=2>"+master.mstTreasureDevice[a].rank+"</td><td colspan=2>"+master.mstTreasureDevice[a].typeText.replace(/\uff0f/g,"\uff0f<br>").replace(/\u5bfe/g,"\u5c0d").replace(/\u5b9d/g,"\u5bf6").replace(/\u5263/g,"\u528d").replace(/\u60aa/g,"\u60e1").replace(/\u5965/g,"\u5967").replace(/\u30bb\u30a4\u30d0\u30fc/g,"Saber").replace(/\u7adc/g,
"\u9f8d")+"</td><td colspan=4>";m=master.mstSvtTreasureDevice[b];h=!0;0==m.condQuestId&&0==m.condLv&&0==m.condFriendshipRank?0==m.priority&&(d+="\u6575\u4eba\u6216\u7279\u6b8a\u60c5\u6cc1\u9650\u5b9a<br>",h=!1):(null!=findName(master.mstQuest,m.condQuestId)&&(d+=questRea(m.condQuestId)+"<br>",h=!1),0!=m.condLv&&(d+="Lv."+m.condLv+"\u89e3\u653e<br>",h=!1),0!=m.condFriendshipRank&&(d+="\u7d46\u7b49\u7d1a"+m.condFriendshipRank+"\u89e3\u653e<br>",h=!1));for(var q in master.mstSvtTreasureDeviceRelease)if(master.mstSvtTreasureDeviceRelease[q].svtId==
m.svtId&&master.mstSvtTreasureDeviceRelease[q].num==m.num&&master.mstSvtTreasureDeviceRelease[q].priority==m.priority){if(70==master.mstSvtTreasureDeviceRelease[q].condType)if(11>master.mstSvtTreasureDeviceRelease[q].condNum)d+="\u9650\u5b9a\u6230\u9b25\u89d2\u8272\u9078\u64c7\u7b2c"+master.mstSvtTreasureDeviceRelease[q].condNum+"\u968e\u6bb5<br>",h=!1;else for(w in master.mstSvtCostume)if(master.mstSvtCostume[w].svtId==master.mstSvtTreasureDeviceRelease[q].svtId&&master.mstSvtCostume[w].id==master.mstSvtTreasureDeviceRelease[q].condNum){d+=
"\u88dd\u5099\u9748\u8863 "+master.mstSvtCostume[w].shortName+"<br>";h=!1;break}break}h&&(d+="\uff0d");d+="</td>";h=[];for(c in tdDetail)if(master.mstTreasureDevice[a].id==tdDetail[c][0]){h=tdDetail[c].slice(0);break}if(document.getElementById("isJpTxt").checked||!h[1])for(c in master.mstTreasureDeviceDetail)if(master.mstTreasureDevice[a].id==master.mstTreasureDeviceDetail[c].id){h[1]=master.mstTreasureDeviceDetail[c].detail;break}d+="<td colspan=2>";-1==h[1].search(/\u653b\u64ca[^\u529b\u6642]|\u653b\u6483[^\u529b\u6642]/)?
d+="\uff0d":(d=0<master.mstSvtTreasureDevice[b].damage.length?d+master.mstSvtTreasureDevice[b].damage.length:d+"1",d+="Hit",1<master.mstSvtTreasureDevice[b].damage.length&&(d+="s"));d+="</td></tr>";f=[];document.getElementById("isJpTxt").checked?f[0]=h[1].slice(0):(h[1]=h[1].replace(/ \uff0b |\u3000\uff0b\u3000/g,"\uff0b"),h[1]=h[1].replace(/\uff06/g,"\uff06\u2517"),f=h[1].split(/\uff06|\uff0b/));t+=f.length;for(c=0;c<f.length;c++){f[c].search(/\{0\}|Lv/);f[c].search(/<O|<\u30aa/);f[c]=f[c].replace(/\{0\}/g,
"Lv.");f[c]=f[c].replace(/<O/g,'<font color="#CC6600"><br>< O');f[c]=f[c].replace(/<\u30aa/g,'<font color="#CC6600"><\u30aa');f[c]=f[c].replace(/P>/g,"P></font>");f[c]=f[c].replace(/\u30d7>/g,"\u30d7></font>");f[c]=f[c].replace(/\u3010/g,'<font color="#006400 ">\u3010');f[c]=f[c].replace(/\u3011/g,"\u3011</font>");f[c]=f[c].replace(/\[Lv.]/g,'<font color="#CC00CC ">[Lv.]</font>');f[c]=f[c].replace(/\n/g,"<br>");f[c]=f[c].replace(/\[g\]\[o\]\u25b2\[\/o\]\[\/g\]/g,'<font color="#ff7f0f ">\u25b2</font>');
if(document.getElementById("isJpTxt").checked)d+="<td colspan=12>"+f[c]+"</td>";else if(0!=c&&(d+="<tr>"),d+="<td colspan=2>"+f[c]+"</td>",h[2+c]&&1<h[2+c].split("/").length-1)for(g in m=[],m=h[2+c].split(/\//),m)d+="<td align=center colspan=2>"+m[g]+"</td>";else d+="<td colspan=10>",d=h[2+c]?d+("\u3000"+h[2+c]):"undefined"!==typeof h[2+c]&&0==h[2+c].length?d+"\u3000---":d+"\u3000\u5f85\u88dc";d+="</td></tr>"}break}0<d.length&&(u+="<tr><th rowspan="+t+" style='width:60px'><b>\u5bf6\u5177</b></th>"+
d);document.getElementById("svtSkTdData").innerHTML=u;b="";b='<tr><th rowspan=2 style="width:250px">\u80fd\u529b\u503c</th><th style="width:80px">\u7b4b\u529b</th><th style="width:80px">\u8010\u4e45</th><th style="width:80px">\u654f\u6377</th><th style="width:80px">\u9b54\u529b</th><th style="width:80px">\u5e78\u904b</th><th style="width:80px">\u5bf6\u5177</th></tr><tr align="center"><td>'+svtStatusList[Math.floor(l.power/10)]+svtStatusPlusList[l.power%10]+"</td><td>"+svtStatusList[Math.floor(l.defense/
10)]+svtStatusPlusList[l.defense%10]+"</td><td>"+svtStatusList[Math.floor(l.agility/10)]+svtStatusPlusList[l.agility%10]+"</td><td>"+svtStatusList[Math.floor(l.magic/10)]+svtStatusPlusList[l.magic%10]+"</td><td>"+svtStatusList[Math.floor(l.luck/10)]+svtStatusPlusList[l.luck%10]+"</td><td>"+svtStatusList[Math.floor(l.treasureDevice/10)]+svtStatusPlusList[l.treasureDevice%10]+"</td></tr>";if(1E3!=master.mstSvt[k].friendshipId){q=findSvtFs(master.mstSvt[k].id);n=5;u=[];if(q!=master.mstSvt[k].friendshipId||
10==master.mstSvt[k].maxFriendshipRank)n=10;b+="<tr><th rowspan="+2*(10==n?15:5)/5+">\u7d46\u9ede\u6578<br>(\u7d2f\u7a4d)</th><th>Lv.1</th><th>Lv.2</th><th>Lv.3</th><th>Lv.4</th><th>Lv.5</th><th>";10==n&&(b+="\u5c08\u5c6c\u79ae\u88dd");b+='</th></tr><tr align="center">';for(a in master.mstFriendship)master.mstFriendship[a].id==q&&15>master.mstFriendship[a].rank&&(u[master.mstFriendship[a].rank]=master.mstFriendship[a].friendship);for(a=0;5>a;a++)b=0==a?b+("<td>"+numeral(u[a]).format("0a")+"</td>"):
b+("<td>"+numeral(u[a]-u[a-1]).format("0a")+"<br>("+numeral(u[a]).format("0a")+")</td>");if(10==n){b+="<td rowspan=5>";for(var v in master.mstSkill)if(0<master.mstSkill[v].actIndividuality.length&&-1!=$.inArray(master.mstSvt[k].id,master.mstSkill[v].actIndividuality)){for(var p in master.mstSvtSkill)if(master.mstSvtSkill[p].skillId==master.mstSkill[v].id){b+=svtFace(master.mstSvtSkill[p].svtId);break}break}b+="</td></tr>"}else b+="<td></td></tr>";if(10==n){b+='<tr><th>Lv.6</th><th>Lv.7</th><th>Lv.8</th><th>Lv.9</th><th>Lv.10</th></tr><tr align="center">';
for(a=5;10>a;a++)b+="<td>"+numeral(u[a]-u[a-1]).format("0a")+"<br>("+numeral(u[a]).format("0a")+")</td>";b+='</tr><tr><th>Lv.11</th><th>Lv.12</th><th>Lv.13</th><th>Lv.14</th><th>Lv.15</th></tr><tr align="center">';for(a=10;15>a;a++)b+="<td>"+numeral(u[a]-u[a-1]).format("0a")+"<br>("+numeral(u[a]).format("0a")+")</td>";b+="</tr>"}}master.mstSvt[k].collectionNo>zhCNNo&&($("#cmtlang_zh").prop("checked",!1),$("#cmtlang_jp").prop("checked",!0));cmtRead($("input[name=cmtlang]:checked").val());$("#svtInfoData").html(b);
v="";p={};v="<tr><th rowspan=4><b>\u9748\u57fa\u518d\u81e8</b></th>";for(q=0;4>q;q++){p="";0==q%2&&(p=' bgcolor=" #ECF2F3"');0!=q&&(v+="<tr>");v+="<td width=80 "+p+">\u7b2c"+(q+1)+"\u968e\u6bb5</td><td width=450"+p+">";for(a=0;a<master.mstCombineLimit.length;a++)if(master.mstCombineLimit[a].id==master.mstSvt[k].id&&master.mstCombineLimit[a].svtLimit==q){for(b=0;b<master.mstCombineLimit[a].itemIds.length;b++)p=master.mstItem[findName(master.mstItem,master.mstCombineLimit[a].itemIds[b])],v+='<a href="item_drop.html#'+
p.id+'"><div class="itemMT" title="'+p.name+'" style="background-image: url(\'common/images/icon/items/'+p.imageId+".png')\" >"+master.mstCombineLimit[a].itemNums[b]+'</div></a><div style="width:10px;display:inline-block;"></div>';v+='<div class="itemMT" title="QP" style="background-image: url(\'common/images/icon/items/5.png\')" >'+numeral(master.mstCombineLimit[a].qp).format("0a")+"</div>"}v+="</td></tr>"}q=0;n="";for(a=0;a<master.mstCombineSkill.length;a++)if(p="",1==a%2&&(p=' bgcolor=" #ECF2F3"'),
master.mstCombineSkill[a].id==master.mstSvt[k].id){1!=master.mstCombineSkill[a].skillLv&&(n+="<tr>");n+="<td"+p+">Lv."+master.mstCombineSkill[a].skillLv+"\u2192Lv."+(master.mstCombineSkill[a].skillLv+1)+"</td><td"+p+">";for(b=0;b<master.mstCombineSkill[a].itemIds.length;b++)p=master.mstItem[findName(master.mstItem,master.mstCombineSkill[a].itemIds[b])],n+='<a href="item_drop.html#'+p.id+'"><div class="itemMT" title="'+p.name+'" style="background-image: url(\'common/images/icon/items/'+p.imageId+".png')\" >"+
master.mstCombineSkill[a].itemNums[b]+'</div></a><div style="width:10px;display:inline-block;"></div>';n+='<div class="itemMT" title="QP" style="background-image: url(\'common/images/icon/items/5.png\')" >'+numeral(master.mstCombineSkill[a].qp).format("0a")+"</div>";q++}v=0==q?v+"<tr><th><b>\u4fdd\u6709\u6280\u80fd\u5f37\u5316</b></th><td colspan=2>\u7121</td></tr>":v+("<tr><th rowspan="+q+"><b>\u4fdd\u6709\u6280\u80fd\u5f37\u5316</b></th>"+n);q=0;n="";for(a=0;a<master.mstSvtCoin.length;a++)if(master.mstSvtCoin[a].svtId==
master.mstSvt[k].id){n+="<tr><td>\u7372\u5f97\u5f9e\u8005<br>\u6642\u589e\u52a0\u6578</td><td>";p=master.mstItem[findName(master.mstItem,master.mstSvtCoin[a].itemId)];n+='<div class="itemMT" title="'+p.name+'" style="background-image: url(\'common/images/icon/items/'+p.imageId+".png')\" >"+master.mstSvtCoin[a].summonNum+'</div><div style="width:10px;display:inline-block;"></div>';n+="</td></tr>";break}for(a=0;a<master.mstSvtAppendPassiveSkillUnlock.length;a++)if(master.mstSvtAppendPassiveSkillUnlock[a].svtId==
master.mstSvt[k].id){n+="<tr><td>\u89e3\u653e</td><td>";for(b=0;b<master.mstSvtAppendPassiveSkillUnlock[a].itemIds.length;b++)p=master.mstItem[findName(master.mstItem,master.mstSvtAppendPassiveSkillUnlock[a].itemIds[b])],n+='<div class="itemMT" title="'+p.name+'" style="background-image: url(\'common/images/icon/items/'+p.imageId+".png')\" >"+master.mstSvtAppendPassiveSkillUnlock[a].itemNums[b]+'</div><div style="width:10px;display:inline-block;"></div>';n+="</td></tr>";break}for(a=0;a<master.mstCombineAppendPassiveSkill.length;a++)if(p=
"",0==a%2&&(p=' bgcolor=" #ECF2F3"'),master.mstCombineAppendPassiveSkill[a].svtId==master.mstSvt[k].id){1!=master.mstCombineAppendPassiveSkill[a].skillLv&&(n+="<tr>");n+="<td"+p+">Lv."+master.mstCombineAppendPassiveSkill[a].skillLv+"\u2192Lv."+(master.mstCombineAppendPassiveSkill[a].skillLv+1)+"</td><td"+p+">";for(b=0;b<master.mstCombineAppendPassiveSkill[a].itemIds.length;b++)p=master.mstItem[findName(master.mstItem,master.mstCombineAppendPassiveSkill[a].itemIds[b])],n+='<a href="item_drop.html#'+
p.id+'"><div class="itemMT" title="'+p.name+'" style="background-image: url(\'common/images/icon/items/'+p.imageId+".png')\" >"+master.mstCombineAppendPassiveSkill[a].itemNums[b]+'</div></a><div style="width:10px;display:inline-block;"></div>';n+='<div class="itemMT" title="QP" style="background-image: url(\'common/images/icon/items/5.png\')" >'+numeral(master.mstCombineAppendPassiveSkill[a].qp).format("0a")+"</div>";q++}v=0==q?v+"<tr><th><b>\u9644\u52a0\u6280\u80fd\u5f37\u5316</b></th><td colspan=2>\u7121</td></tr>":
v+("<tr><th rowspan="+(q+3)+"><b>\u9644\u52a0\u6280\u80fd\u5f37\u5316</b></th>"+n);$("#svtCmbnData").html(v);$("#svtImgData").html('<tr><td><span id="cmd"><img src="common/images/Servants/Commands/'+e+'/card_servant_1.png" style="" class="CommandCard vsvtImg"/><img src="common/images/Servants/Commands/'+e+'/card_servant_2.png" style="" class=CommandCard "svtImg"/><img src="common/images/Servants/Commands/'+e+'/card_servant_3.png" style="" class="CommandCard svtImg"/></span><br><span id="graph"><img src=common/images/CharaGraph/'+
e+'a.png style="max-width:100%;" class="svtImg"/><img src=common/images/CharaGraph/'+e+'b.png style="max-width:100%;" class="svtImg"/><img src=common/images/CharaGraph/'+e+'c.png style="max-width:50%;" class="svtImg"/></span></td></tr>');$(".svtImg").error(function(){$(this).hide()});v=3;p=!0;for(a in master.mstSvtLimitAdd)if(master.mstSvtLimitAdd[a].svtId==master.mstSvt[k].id&&(4<master.mstSvtLimitAdd[a].limitCount&&($("#cmd").append('<img src="common/images/Servants/Commands/'+e+"/card_servant_"+
master.mstSvtLimitAdd[a].limitCount+'.png" style="" class="CommandCard svtImg"/>'),$("#graph").append("<img src=common/images/CharaGraph/"+master.mstSvtLimitAdd[a].battleCharaId+'a.png style="max-width:50%;" class="svtImg"/>'),master.mstSvt[k].collectionNo<=statusNo&&$(".slide").append('<div><img src="common/images/Servants/Status/'+e+"/status_servant_"+master.mstSvtLimitAdd[a].limitCount+'.png" onerror="this.style.display = none" width=256 height=256 /></div>'),v++),0<master.mstSvtLimitAdd[a].individuality.length&&
(b=difference(master.mstSvtLimitAdd[a].individuality,master.mstSvt[k].individuality),0<b.length))){p&&($("#indi").append("<br/>"),p=!1);q=!1;for(w in master.mstSvtCostume)if(master.mstSvtCostume[w].id==master.mstSvtLimitAdd[a].limitCount&&master.mstSvtCostume[w].svtId==e){$("#indi").append("<br/>\u5207\u63db\u9748\u8863\u300c"+master.mstSvtCostume[w].shortName+"\u300d\u6642\u8ffd\u52a0\uff1a");q=!0;break}q||$("#indi").append("<br/>\u9748\u57fa\u518d\u81e8"+master.mstSvtLimitAdd[a].limitCount+"\u6b21\u8ffd\u52a0\uff1a");
for(c in b)indi_list[b[c]]&&$("#indi").append(indi_list[b[c]].name)}$(".CommandCard").css("max-width",Math.floor(100/v)+"%");e="";null==r||l.hpBase==r.hpBase&&l.hpMax==r.hpMax&&l.atkBase==r.atkBase&&l.atkMax==r.atkMax||(l=r);if(99==master.mstSvt[k].type)$("#chart_div").css("display","none");else for($("#chart_div").css("display","block"),e="<tr><th>\u7b49\u7d1a</th><th>ATK</th><th>HP</th><th>\u4e0a\u5347\u5e45\u5ea6</th></tr>",a=0;120>a;a++)for(q=0;q<master.mstSvtExp.length;q++)if(master.mstSvt[k].expType==
master.mstSvtExp[q].type&&master.mstSvtExp[q].lv==a+1){p="";1==master.mstSvtExp[q].lv%2&&(p=' bgcolor="#ECF2F3"');e+='<tr align="center"><td'+p+">Lv."+master.mstSvtExp[q].lv+"</td><td"+p+">"+Math.floor(l.atkBase+(l.atkMax-l.atkBase)*master.mstSvtExp[q].curve/1E3)+"</td><td"+p+">"+Math.floor(l.hpBase+(l.hpMax-l.hpBase)*master.mstSvtExp[q].curve/1E3)+"</td><td"+p+">"+(master.mstSvtExp[q].curve-master.mstSvtExp[q-1].curve)/10+"%</td></tr>";break}$("#svtLvData").html(e);$(".lazyload").lazyload();$("img").error(function(){$(this).css({visibility:"hidden"})});
$(function(){$(".slide").slick({dots:!0,infinite:!0,speed:300,slidesToShow:1,adaptiveHeight:!0,autoplay:!0,autoplaySpeed:2E3})})}function difference(e,a){for(var k=[],l=0;l<e.length;l++)-1===a.indexOf(e[l])&&k.push(e[l]);return k}
function cmtRead(e){try{$("#svtCmtData").empty(),$.get("common/svtcomment/"+e+"/"+$("#svtid").val(),function(a){0==a.length&&(a="W10=");a=JSON.parse(base64.decode(a));var k="",l;for(l in a){k+="<tr><th width=250>"+cmtCond(a[l].condType,null!=a[l].condValues&&0<a[l].condValues.length?a[l].condValues[0]:a[l].condValue);for(var r in master.mstSvtCommentAdd)master.mstSvtCommentAdd[r].svtId==a[l].svtId&&master.mstSvtCommentAdd[r].id==a[l].id&&(k+="<br>\uff06<br>"+cmtCond(master.mstSvtCommentAdd[r].condType,
master.mstSvtCommentAdd[r].condValues[0]));var b=1==a[l].id%2?' bgcolor=" #ECF2F3"':"";k+="</th><td colspan=6"+b+" width=540>";k+=a[l].comment.replace(/\n/g,"<br>").replace(/<br>$/,"<br><br>")+"</td></tr>"}0==a.length&&(k="");$("#svtCmtData").append(k)},"text")}catch(a){console.log("Cannot find comment file."),"zh"==e&&cmtRead("jp")}}
function cmtCond(e,a){var k="";0==e?k+="<b>\u89d2\u8272\u8a73\u7d30</b>":9==e?k+="<b>\u7d46\u7b49\u7d1a"+a+"</b>":1==e?k+="<b>\u901a\u904e\u95dc\u5361</b><br>"+questRea(a):7==e&&(k+="<b>\u9748\u57fa\u518d\u81e8\u7b2c"+a+"\u968e\u6bb5</b>");return k}
function classidChange(){var e;for(e=svtid.options.length-1;0<=e;e--)svtid.remove(e);for(e=0;e<master.mstSvt.length;e++)if(0==classid.value||master.mstSvt[e].classId==classid.value)if(1==master.mstSvt[e].type||2==master.mstSvt[e].type||5==master.mstSvt[e].type||9==master.mstSvt[e].type||99==master.mstSvt[e].type){var a=findSvtNameZh(master.mstSvt[e].id);a?svtid.options.add(new Option("No."+master.mstSvt[e].collectionNo+" "+a,master.mstSvt[e].id)):svtid.options.add(new Option("No."+master.mstSvt[e].collectionNo+
" "+master.mstSvt[e].name,master.mstSvt[e].id))}for(e=0;e<svtid.options.length;e++)if(-1==svtid.options[e].text.search("No.0")){svtid.options[e].selected=!0;break}0!=classid.value&&svtlocation(svtid[svtid.options.selectedIndex].value)}function svtidset(){classidChange();svtlocation(svtid[0].value)}
function svtidChange(){var e;for(e=svtlv.options.length-1;0<=e;e--)svtlv.remove(e);for(e in master.mstSvt)if(master.mstSvt[e].id==svtid.value){for(e=120;0<e;e--)svtlv.options.add(new Option("Lv."+e,e));break}svtlvChange();svtDataTable(svtid.value);drawChart()}
function svtlocation(e){e="";for(var a in master.mstSvt)if(master.mstSvt[a].id==svtid.value){e=0!=master.mstSvt[a].collectionNo?e+("?no="+master.mstSvt[a].collectionNo):e+("?id="+master.mstSvt[a].id);break}"file:"==location.protocol?changeURL(location.protocol+"//"+location.pathname+e):changeURL(location.protocol+"//"+location.hostname+location.pathname+e);svtidChange()}
function svtlvChange(){var e,a=0,k=0,l=0,r=0;for(e in master.mstSvtLimit)master.mstSvtLimit[e].svtId==svtid.value&&(a=master.mstSvtLimit[e].hpBase,k=master.mstSvtLimit[e].hpMax,l=master.mstSvtLimit[e].atkBase,r=master.mstSvtLimit[e].atkMax);for(var b in master.mstSvt)if(master.mstSvt[b].id==svtid.value){for(var d in master.mstSvtExp)if(atk.value=l,hp.value=a,four(),master.mstSvt[b].expType==master.mstSvtExp[d].type&&master.mstSvtExp[d].lv==svtlv.value){atk.value=Math.floor(l+(r-l)*master.mstSvtExp[d].curve/
1E3);hp.value=Math.floor(a+(k-a)*master.mstSvtExp[d].curve/1E3);four();break}break}}function four(){hpp.value=parseInt(hp.value)+2E3;atkp.value=parseInt(atk.value)+2E3}function npArray(e){var a="",k;for(k in e)a+=e[k]/100+"%<br>";return a}
function urlId(){$("#zhTWNO").html(zhTWNo);$("#zhCNNO").html(zhCNNo);$("#classid").val(0);classidChange();var e="1",a="";getUrl("no")&&(e=getUrl("no"));getUrl("id")&&(a=getUrl("id"));if(e){if(0!=a.length)for(i in master.mstSvt){if((1==master.mstSvt[i].type||2==master.mstSvt[i].type||5==master.mstSvt[i].type||9==master.mstSvt[i].type||99==master.mstSvt[i].type)&&a==master.mstSvt[i].id){$("#svtid").val(master.mstSvt[i].id);break}}else for(i in master.mstSvt)if((1==master.mstSvt[i].type||2==master.mstSvt[i].type||
5==master.mstSvt[i].type||9==master.mstSvt[i].type||99==master.mstSvt[i].type)&&e==master.mstSvt[i].collectionNo){$("#svtid").val(master.mstSvt[i].id);break}i==master.mstSvt.length-1&&$("#svtid").val(800100)}svtidChange()};