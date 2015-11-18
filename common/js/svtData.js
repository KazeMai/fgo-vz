mstSvt = mstSvt.sort(sortByElmentNo);
function sortByElmentNo(a,b)
{
	return a.collectionNo-b.collectionNo;
}
function svtDataTable(svtId)
{
	var personalityList = ["","善","惡","?","狂","中庸"];
	var policyList = ["","中立","混沌","秩序"];
	var attriList = ["","人","天","地","星","獸"];
	var genderTypeList = ["","男性","女性","無"];
	var cardList = ["","0000ff","ff0000","00ff00"];
	var svtStatusList = ["","A","B","C","D","E","EX","?","?","?"];
	var svtStatusPlusList = ["","","+","++","?","?","?","?","?","?"];
	var c;
	
	var i;
	for(i=0;i<mstSvt.length;i++)
	{
		if(mstSvt[i].id==svtId)break;
	}
	var j;
	for(j=0;j<mstSvtLimit.length;j++)
	{
		if(mstSvtLimit[j].svtId==svtId)break;
	}
	
	var svtNrmlDataTxt="";
	svtNrmlDataTxt="<tr><td rowspan=6><img src=https://sites.google.com/site/fategovz/"+svtId+"_status_servant_2.png></td><th><b>編號</b></th><th><b>星數</b></th><th colspan=2><b>名稱</b></th><th><b>職階</b></th><th><b>特性</b></th></tr><tr align=\"center\"><td>No."+mstSvt[i].collectionNo+"</td><td class=\"star\">";
	for(c=0;c<mstSvtLimit[j].rarity;c++)
		svtNrmlDataTxt+="★";
	svtNrmlDataTxt+="</td><td colspan=2>";
	var svtNameZh = findSvtNameZh(mstSvt[i].id);
	if(svtNameZh) svtNrmlDataTxt+="<font size=\"1\">" + mstSvt[i].name + "</font><br>" + svtNameZh;
	else svtNrmlDataTxt+=mstSvt[i].name;
	svtNrmlDataTxt+="</td>";
	for(c=0;c<mstClass.length;c++)
		if(mstClass[c].id==mstSvt[i].classId) {svtNrmlDataTxt+="<td>"+mstClass[c].name+"</td>";break;}
	
	svtNrmlDataTxt+="<td>"+attriList[mstSvt[i].attri]+"</td></tr><tr><th><b>HP</b></th><th><b>ATK</b></th><th><b>繪師</b></th><th><b>CV</b></th><th><b>屬性</b></th><th><b>性別</b></th></tr><tr align=\"center\"><td>"+mstSvtLimit[j].hpBase+" / "+mstSvtLimit[j].hpMax+"</td><td>"+mstSvtLimit[j].atkBase+" / "+mstSvtLimit[j].atkMax+"</td>";
	for(c=0;c<mstIllustrator.length;c++)
		if(mstIllustrator[c].id==mstSvt[i].illustratorId) {svtNrmlDataTxt+="<td>"+mstIllustrator[c].name+"</td>";break;}
	for(c=0;c<mstCv.length;c++)
		if(mstCv[c].id==mstSvt[i].cvId) {svtNrmlDataTxt+="<td>"+mstCv[c].name+"</td>";break;}
	svtNrmlDataTxt+="<td>"+policyList[mstSvtLimit[j].policy]+"・"+personalityList[mstSvtLimit[j].personality]+"</td><td>"+genderTypeList[mstSvt[i].genderType]+"</td></tr>";
	document.getElementById("svtNrmlData").innerHTML=svtNrmlDataTxt;
	
	var svtCtrlDataTxt="";
	svtCtrlDataTxt+="<tr><th rowspan=2><b>指令卡</b></th><th><font color=\"#0099FF\"><b>Arts</b></font></th><th><font color=\"#ff0000\"><b>Buster</b></font></th><th><font color=\"#00ff00\"><b>Quick</b></font></th><th><b>Extra</b></th><th rowspan=2><b>隱藏數值</b></th><th><b>Star Rate</b></th><th><b>Death Rate</b></th><th><b>Critical Weight</b></th><th><b>Base NP(Atk / Def)</b></th></tr><tr align=\"center\">";
	for(var k=1;k<=4;k++)
	{
		var cardCount=0;
		for(c=0;c<mstSvt[i].cardIds.length;c++)
			if(mstSvt[i].cardIds[c]==k) cardCount++;
		for(c=0;c<mstSvtCard.length;c++)
		{
			if(mstSvtCard[c].svtId==mstSvt[i].id&&mstSvtCard[c].cardId==k){
				svtCtrlDataTxt+="<td>";
				if(k!=4) svtCtrlDataTxt+=cardCount+"張 各";
				svtCtrlDataTxt+=mstSvtCard[c].normalDamage.length+"Hit";
				if(mstSvtCard[c].normalDamage.length>1) svtCtrlDataTxt+="s";
				svtCtrlDataTxt+="</td>";
			}
		}
	}
	svtCtrlDataTxt+="<td>"+mstSvt[i].starRate/10+"%</td><td>"+mstSvt[i].deathRate/10+"%</td><td>"+mstSvtLimit[j].criticalWeight+"</td><td>";
	for(c=0;c<mstTreasureDeviceLv.length;c++)
	if(Math.floor(mstTreasureDeviceLv[c].treaureDeviceId/100)==Math.floor(mstSvt[i].id/100))
		{svtCtrlDataTxt+=mstTreasureDeviceLv[c].tdPoint/100+"% / "+mstTreasureDeviceLv[c].tdPointDef/100+"%";break;}
	svtCtrlDataTxt+="</td></tr>";
	document.getElementById("svtCtrlData").innerHTML=svtCtrlDataTxt;
	
	var svtSkTdDataTxt="";
	var skillText="";
	var skillrowCount=0;
	for(c=0;c<mstSvtSkill.length;c++)
	{
		if(mstSvtSkill[c].svtId==mstSvt[i].id){
			skillrowCount++;
			for(var k=0;k<mstSkill.length;k++){
				if(mstSvtSkill[c].skillId==mstSkill[k].id){skillText+="<td><img src=common/images/SkillIcon/SkillIcon_"+mstSkill[k].iconId+".png width=55></td><td><b>"+mstSkill[k].name+"</b></td>"; break;}
			}

			for(var k=0;k<mstSkillLv.length;k++){
				if(mstSvtSkill[c].skillId==mstSkillLv[k].skillId&&mstSkillLv[k].lv==1){
					skillText+="<td colspan=2>冷卻"+mstSkillLv[k].chargeTurn+"回合</td>";//break;
				}
			}
			
			skillText+="<td>";
			if(mstSvtSkill[c].condLimitCount==0&&mstSvtSkill[c].condQuestId==0&&mstSvtSkill[c].condLv==0) skillText+="初期";
			else if(mstSvtSkill[c].condLimitCount!=0) skillText+="靈基再臨第"+mstSvtSkill[c].condLimitCount+"階段解放";
			else if(mstSvtSkill[c].condQuestId!=0) skillText+="通過任務「"+mstQuest[findName(mstQuest,mstSvtSkill[c].condQuestId)].name+"」解放";
			else if(mstSvtSkill[c].condLv!=0) skillText+="Lv."+mstSvtSkill[c].condLv+"解放";
			skillText+="</td></tr>";
			
			var skDetailTxt = new Array();
			for(k=0;k<skDetail.length;k++){
				if(mstSvtSkill[c].skillId==skDetail[k][0]){
					skDetailTxt = skDetail[k];
				}
			}
			if(!skDetailTxt[1])
				for(k=0;k<mstSkillDetail.length;k++){
					if(mstSvtSkill[c].skillId==mstSkillDetail[k].id){
						skDetailTxt[1] = mstSkillDetail[k].detail;
					}
				}
			skDetailTxt[1]=skDetailTxt[1].replace(/ /g,"");
			var skDetailArray = new Array();
				skDetailArray = skDetailTxt[1].split(/＆|＋/);
			
			skillrowCount+=skDetailArray.length;
			for(var d=0;d<skDetailArray.length;d++){
				var isLvUp = skDetailArray[d].search(/\{0\}/);
				skDetailArray[d]=skDetailArray[d].replace(/\{0\}/g,"Lv.");
				skillText+="<tr><td colspan=2 width=30%>"+skDetailArray[d]+"</td><td colspan=3>";
				if(skDetailTxt[2+d]!=null) 
				{
					skillText+=skDetailTxt[2+d].replace(/\//g," / ");
				}
				else skillText+="待補";
				skillText+="</td></tr>";
			}

		}
	}
	svtSkTdDataTxt+="<tr><th rowspan="+skillrowCount+"><b>保有技能</b></th>"+skillText+"";
		
	if(mstSvt[i].classPassive.length!=0){
	skillText="";
	skillrowCount=0;
	for(c=0;c<mstSvt[i].classPassive.length;c++)
	{
		skillrowCount++;
		for(var k=0;k<mstSkill.length;k++){
			if(mstSvt[i].classPassive[c]==mstSkill[k].id){skillText+="<td><img src=common/images/SkillIcon/SkillIcon_"+mstSkill[k].iconId+".png width=55></td><td><b>"+mstSkill[k].name+"</b></td>"; break;}
		}
		for(var k=0;k<mstSkillDetail.length;k++){
			if(mstSvt[i].classPassive[c]==mstSkillDetail[k].id){
				var skDetailTxt = new Array();
				for(k=0;k<skDetail.length;k++){
					if(mstSvt[i].classPassive[c]==skDetail[k][0]){
						skDetailTxt = skDetail[k];
					}
				}
				if(!skDetailTxt[1])
					for(k=0;k<mstSkillDetail.length;k++){
						if(mstSvt[i].classPassive[c]==mstSkillDetail[k].id){
							skDetailTxt[1] = mstSkillDetail[k].detail;
						}
					}
				
				skillText+="<td colspan=3>"+skDetailTxt[1]+"：";
				for(var d=2;d<skDetailTxt.length;d++){
					if(skDetailTxt[d]) 
					{
						if(d!=2) skillText+=" / ";
						skillText+=skDetailTxt[d].replace(/\//g," / ");
					}
					else break;
				}
				skillText+="</td></tr>";
				break;
			}
		}
	}
	svtSkTdDataTxt+="<tr><th rowspan="+mstSvt[i].classPassive.length+"><b>職階技能</b></th>"+skillText+"";}
	
	skillText="";
	skillrowCount=0;
	for(c=0;c<mstTreasureDevice.length;c++)
	{
		if(mstTreasureDevice[c].seqId==mstSvt[i].id){
			skillrowCount+=2;
			var k=0;
			skillText+="<th colspan=2><b>名稱</b></th><th><b>等級</b></th><th><b>種類</b></th><th><b>解放任務</b></th></tr>";
			
			skillText+="<tr align=\"center\"><td colspan=2><font size=\"1\">"+mstTreasureDevice[c].ruby+"</font><br>";
			for(k=0;k<mstSvtTreasureDevice.length;k++){
				if(mstTreasureDevice[c].id==mstSvtTreasureDevice[k].treasureDeviceId){
					skillText+="<b><font color=\"#"+cardList[mstSvtTreasureDevice[k].cardId]+"\">"+mstTreasureDevice[c].name+"</font></b></td><td>"+mstTreasureDevice[c].rank+"</td><td>"+mstTreasureDevice[c].typeText+"</td><td>";
					
					if(mstSvtTreasureDevice[k].condQuestId==0&&mstSvtTreasureDevice[k].condLv==0&&mstSvtTreasureDevice[k].condFriendshipRank==0) skillText+="初期"
					else if(findName(mstQuest,mstSvtTreasureDevice[k].condQuestId)!=null) skillText+=mstQuest[findName(mstQuest,mstSvtTreasureDevice[k].condQuestId)].name;
					else if(mstSvtTreasureDevice[k].condLv!=0) skillText+="Lv."+mstSvtTreasureDevice[k].condLv+"解放";
					else if(mstSvtTreasureDevice[k].condFriendshipRank!=0) skillText+="絆等級"+mstSvtTreasureDevice[k].condFriendshipRank+"解放";
					else skillText+="未開放";
					
					skillText+="</td></tr>"; break;}
			}
			var tdDetailTxt = new Array();
			for(k=0;k<tdDetail.length;k++){
				if(mstTreasureDevice[c].id==tdDetail[k][0]){
					tdDetailTxt = tdDetail[k];
				}
			}
			if(!tdDetailTxt[1])
				for(k=0;k<mstTreasureDeviceDetail.length;k++){
					if(mstTreasureDevice[c].id==mstTreasureDeviceDetail[k].id){
						tdDetailTxt[1] = mstTreasureDeviceDetail[k].detail;
					}
				}
					tdDetailTxt[1]=tdDetailTxt[1].replace(/ /g,"");
					var tdDetailArray = new Array();
						tdDetailArray = tdDetailTxt[1].split(/＆|＋/);
					
					skillrowCount+=tdDetailArray.length;
					for(var d=0;d<tdDetailArray.length;d++){
						var isLvUp = tdDetailArray[d].search(/\{0\}/);
						var isOCUp = tdDetailArray[d].search(/</);
						tdDetailArray[d]=tdDetailArray[d].replace(/\{0\}/g,"Lv.");
						tdDetailArray[d]=tdDetailArray[d].replace(/</g,"<br>< ");
						tdDetailArray[d]=tdDetailArray[d].replace(/>/g," >");
						skillText+="<tr><td colspan=2 width=30%>"+tdDetailArray[d]+"</td><td colspan=3>";
						if(tdDetailTxt[2+d]!=null) 
						{
							skillText+=tdDetailTxt[2+d].replace(/\//g," / ");
						}
						else skillText+="待補";
						skillText+="</td></tr>";
					}

		}
	}
	svtSkTdDataTxt+="<tr><th rowspan="+skillrowCount+"><b>寶具</b></th>"+skillText+"";
	//svtSkTdDataTxt+="<tr><td colspan=6><p class=\"notice\">※若未註明效果的對象，則與跟前一個效果對象相同。</p></td></tr>";
	document.getElementById("svtSkTdData").innerHTML=svtSkTdDataTxt;
	
	var svtInfoDataTxt="";
	svtInfoDataTxt="<tr><th rowspan=2>能力值</th><th><b>筋力</b></th><th><b>耐久</b></th><th><b>敏捷</b></th><th><b>魔力</b></th><th><b>幸運</b></th><th><b>寶具</b></th></tr><tr align=\"center\"><td>"+svtStatusList[Math.floor(mstSvtLimit[j].power/10)]+svtStatusPlusList[mstSvtLimit[j].power%10]+"</td><td>"+svtStatusList[Math.floor(mstSvtLimit[j].defense/10)]+svtStatusPlusList[mstSvtLimit[j].defense%10]+"</td><td>"+svtStatusList[Math.floor(mstSvtLimit[j].agility/10)]+svtStatusPlusList[mstSvtLimit[j].agility%10]+"</td><td>"+svtStatusList[Math.floor(mstSvtLimit[j].magic/10)]+svtStatusPlusList[mstSvtLimit[j].magic%10]+"</td><td>"+svtStatusList[Math.floor(mstSvtLimit[j].luck/10)]+svtStatusPlusList[mstSvtLimit[j].luck%10]+"</td><td>"+svtStatusList[Math.floor(mstSvtLimit[j].treasureDevice/10)]+svtStatusPlusList[mstSvtLimit[j].treasureDevice%10]+"</td></tr>";
	for(c=0;c<mstSvtComment.length;c++)
	{
		var tdColor="";
		if(mstSvt[i].id==mstSvtComment[c].svtId)
		{	svtInfoDataTxt+="<tr><th>";
			if(mstSvtComment[c].condValue==0) svtInfoDataTxt+="<b>角色詳細</b>";
			else if(mstSvtComment[c].condValue<6) svtInfoDataTxt+="<b>絆等級"+mstSvtComment[c].condValue+"</b>";
			else if(mstSvtComment[c].condType==1){
				for(var k=0;k<mstQuest.length;k++){
					if(mstSvtComment[c].condValue==mstQuest[k].id){svtInfoDataTxt+="<b>通過任務 "+mstQuest[k].name+"<b>";break;}
				}
			}
			svtInfoDataTxt+="</th>";
			if(mstSvtComment[c].condValue%2==0) tdColor=" bgcolor=\" #ECF2F3\""; else tdColor="";
			svtInfoDataTxt+="<td colspan=6"+tdColor+">"+mstSvtComment[c].comment.replace(/\n/g,"<br>");+"</td></tr>";
			if(mstSvtComment[c].condType==1) break;
		}
	}
	document.getElementById("svtInfoData").innerHTML=svtInfoDataTxt;

	var svtCmbnDataTxt="";
	svtCmbnDataTxt="<tr><th rowspan=4><b>靈基再臨</b></th>";

	for(var m=0;m<4;m++){
		var tdColor=""; if(m%2==0) tdColor=" bgcolor=\" #ECF2F3\"";
		if(m!=0) svtCmbnDataTxt+="<tr>";
		svtCmbnDataTxt+="<td"+tdColor+">第"+(m+1)+"階段</td><td"+tdColor+">";
		for(c=0;c<mstCombineLimit.length;c++)
		{
			if(mstCombineLimit[c].id==mstSvt[i].id&&mstCombineLimit[c].svtLimit==m)
			{
				
				for(var k=0;k<mstCombineLimit[c].itemIds.length;k++)
				{
					svtCmbnDataTxt+=findItemName(mstCombineLimit[c].itemIds[k]) + "x" + mstCombineLimit[c].itemNums[k] + " + ";
				}
				svtCmbnDataTxt+= addCommas(mstCombineLimit[c].qp) + "QP";
			}
	}svtCmbnDataTxt+="</td></tr>";}
	svtCmbnDataTxt+="<tr><th rowspan=9><b>技能強化</b></th>";
	for(c=0;c<mstCombineSkill.length;c++)
	{
		var tdColor=""; if(c%2==0) tdColor=" bgcolor=\" #ECF2F3\"";
		if(mstCombineSkill[c].id==mstSvt[i].id)
		{
			if(mstCombineSkill[c].skillLv!=1) svtCmbnDataTxt+="<tr>";
			svtCmbnDataTxt+="<td"+tdColor+">Lv."+mstCombineSkill[c].skillLv+"→Lv."+(mstCombineSkill[c].skillLv+1)+"</td><td"+tdColor+">";
			for(var k=0;k<mstCombineSkill[c].itemIds.length;k++)
			{
				svtCmbnDataTxt+=findItemName(mstCombineSkill[c].itemIds[k]) + "x" + mstCombineSkill[c].itemNums[k] + " + ";
			}
			svtCmbnDataTxt+= addCommas(mstCombineSkill[c].qp) + "QP</td></tr>";
		}
	}
	document.getElementById("svtCmbnData").innerHTML=svtCmbnDataTxt;

	document.getElementById("svtImgData").innerHTML="<tr><td><img src=common/images/CharaGraph/"+svtId+"a.png><br><img src=common/images/CharaGraph/"+svtId+"b.png></td></tr>";
	
	var svtLvDataTxt="<tr><th>等級</th><th>ATK</th><th>HP</th><th>上升幅度</th></tr>";
	for(c=0;c<mstSvt[i].rewardLv;c++)
	{
		for(var m=0;m<mstSvtExp.length;m++)
		{
			if(mstSvt[i].expType==mstSvtExp[m].type&&mstSvtExp[m].lv==c+1)
			{
				var tdColor=""; if(mstSvtExp[m].lv%2==1) tdColor=" bgcolor=\" #ECF2F3\"";
				svtLvDataTxt+="<tr align=\"center\"><td"+tdColor+">Lv."+(mstSvtExp[m].lv)+"</td><td"+tdColor+">"+Math.floor(mstSvtLimit[j].atkBase+(mstSvtLimit[j].atkMax-mstSvtLimit[j].atkBase)*mstSvtExp[m].curve/1000)+"</td><td"+tdColor+">"+Math.floor(mstSvtLimit[j].hpBase+(mstSvtLimit[j].hpMax-mstSvtLimit[j].hpBase)*mstSvtExp[m].curve/1000)+"</td><td"+tdColor+">"+(mstSvtExp[m].curve-mstSvtExp[m-1].curve)/10+"%</td></tr>";
				break;
			}
		}
	}
	document.getElementById("svtLvData").innerHTML=svtLvDataTxt;
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
function classidChange()
{
	var i;
	for(i=svtid.options.length-1;i>=0;i--)
    {
        svtid.remove(i);
    }
	if(classid.value==0)
	{
		for(i=0;i<mstSvt.length;i++)
		{
			if(mstSvt[i].type==1||mstSvt[i].type==2||mstSvt[i].type==5){
				var svtNameZh = findSvtNameZh(mstSvt[i].id);
				if(svtNameZh) svtid.options.add(new Option("No." + mstSvt[i].collectionNo + " " + svtNameZh,mstSvt[i].id));
				else svtid.options.add(new Option("No." + mstSvt[i].collectionNo + " " + mstSvt[i].name,mstSvt[i].id));}
		}
	}
	else
	{
		for(i=0;i<mstSvt.length;i++)
		{
			if(mstSvt[i].classId==classid.value)
				{if(mstSvt[i].type==1||mstSvt[i].type==2||mstSvt[i].type==5){
				var svtNameZh = findSvtNameZh(mstSvt[i].id);
				if(svtNameZh) svtid.options.add(new Option("No." + mstSvt[i].collectionNo + " " + svtNameZh,mstSvt[i].id));
				else svtid.options.add(new Option("No." + mstSvt[i].collectionNo + " " + mstSvt[i].name,mstSvt[i].id));}}
		}
	}
	svtidChange();
}
function svtidChange()
{
	var i;
	for(i=svtlv.options.length-1;i>=0;i--)
    {
        svtlv.remove(i);
    }
	for(i=0;i<mstSvt.length;i++)
	{
		if(mstSvt[i].id==svtid.value)
		{
			for(var j=1;j<=mstSvt[i].rewardLv;j++)
			{
				svtlv.options.add(new Option("Lv."+j,j));
			}
			break;
		}
	}
	svtlvChange();
	svtDataTable(svtid.value);drawChart();
}
function svtlvChange()
{
	var i;
	for(i=0;i<mstSvtLimit.length;i++)
	{
		if(mstSvtLimit[i].svtId==svtid.value)
		{	
			for(var k=0;k<mstSvt.length;k++)
			{
				if (mstSvt[k].id==svtid.value)
				{
					for(var j=0;j<mstSvtExp.length;j++)
					{
						if(mstSvt[k].expType==mstSvtExp[j].type&&mstSvtExp[j].lv==svtlv.value)
						{
							atk.value=Math.floor(mstSvtLimit[i].atkBase+(mstSvtLimit[i].atkMax-mstSvtLimit[i].atkBase)*mstSvtExp[j].curve/1000);
							atkp.value=parseInt(atk.value)+990;
							hp.value=Math.floor(mstSvtLimit[i].hpBase+(mstSvtLimit[i].hpMax-mstSvtLimit[i].hpBase)*mstSvtExp[j].curve/1000);
							hpp.value=parseInt(hp.value)+990;
							break;
						}
					}
				break;
				}
			}
			break;
		}
	}
}
function findItemName(itemid)
{
	for(var i=0;i<mstItem.length;i++)
	{
		if(mstItem[i].id==itemid) {return mstItem[i].name;break;}
	}
	return "未知道具"+itemid;
}
function findName(searchData,searchId)
{
	for(var i=0;i<searchData.length;i++)
		if(searchData[i].id==searchId) return i;
	return null;
}