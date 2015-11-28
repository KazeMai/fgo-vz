master.mstSvt = master.mstSvt.sort(sortByElmentNo);
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
	for(i=0;i<master.mstSvt.length;i++)
	{
		if(master.mstSvt[i].id==svtId)break;
	}
	var j;
	for(j=0;j<master.mstSvtLimit.length;j++)
	{
		if(master.mstSvtLimit[j].svtId==svtId)break;
	}
	
	var svtNrmlDataTxt="";
	svtNrmlDataTxt="<tr><td rowspan=6>";
	if(master.mstSvt[i].type!=5) svtNrmlDataTxt+="<img src=https://sites.google.com/site/fategovz/"+svtId+"_status_servant_2.png>";
	svtNrmlDataTxt+="</td><th><b>編號</b></th><th><b>星數</b></th><th colspan=2><b>名稱</b></th><th><b>職階</b></th><th><b>特性</b></th></tr><tr align=\"center\"><td>No."+master.mstSvt[i].collectionNo+"</td><td class=\"star\">";
	for(c=0;c<master.mstSvtLimit[j].rarity;c++)
		svtNrmlDataTxt+="★";
	svtNrmlDataTxt+="</td><td colspan=2>";
	var svtNameZh = findSvtNameZh(master.mstSvt[i].id);
	if(svtNameZh) svtNrmlDataTxt+="<font size=\"1\">" + master.mstSvt[i].name + "</font><br>" + svtNameZh;
	else svtNrmlDataTxt+=master.mstSvt[i].name;
	svtNrmlDataTxt+="</td>";
	for(c=0;c<mstClass.length;c++)
		if(mstClass[c].id==master.mstSvt[i].classId) {svtNrmlDataTxt+="<td>"+mstClass[c].name+"</td>";break;}
	
	svtNrmlDataTxt+="<td>"+attriList[master.mstSvt[i].attri]+"</td></tr><tr><th><b>HP</b></th><th><b>ATK</b></th><th><b>繪師</b></th><th><b>CV</b></th><th><b>屬性</b></th><th><b>性別</b></th></tr><tr align=\"center\"><td>"+master.mstSvtLimit[j].hpBase+" / "+master.mstSvtLimit[j].hpMax+"</td><td>"+master.mstSvtLimit[j].atkBase+" / "+master.mstSvtLimit[j].atkMax+"</td>";
	for(c=0;c<master.mstIllustrator.length;c++)
		if(master.mstIllustrator[c].id==master.mstSvt[i].illustratorId) {svtNrmlDataTxt+="<td>"+master.mstIllustrator[c].name+"</td>";break;}
	for(c=0;c<master.mstCv.length;c++)
		if(master.mstCv[c].id==master.mstSvt[i].cvId) {svtNrmlDataTxt+="<td>"+master.mstCv[c].name+"</td>";break;}
	svtNrmlDataTxt+="<td>"+policyList[master.mstSvtLimit[j].policy]+"・"+personalityList[master.mstSvtLimit[j].personality]+"</td><td>"+genderTypeList[master.mstSvt[i].genderType]+"</td></tr>";
	document.getElementById("svtNrmlData").innerHTML=svtNrmlDataTxt;
	
	var svtCtrlDataTxt="";
	svtCtrlDataTxt+="<tr><th rowspan=2><b>指令卡</b></th><th><font color=\"#0099FF\"><b>Arts</b></font></th><th><font color=\"#ff0000\"><b>Buster</b></font></th><th><font color=\"#00ff00\"><b>Quick</b></font></th><th><b>Extra</b></th><th rowspan=2><b>隱藏數值</b></th><th><b>Star Rate</b></th><th><b>Death Rate</b></th><th><b>Critical Weight</b></th><th><b>Base NP(Atk / Def)</b></th></tr><tr align=\"center\">";
	for(var k=1;k<=4;k++)
	{
		var cardCount=0;
		for(c=0;c<master.mstSvt[i].cardIds.length;c++)
			if(master.mstSvt[i].cardIds[c]==k) cardCount++;
		for(c=0;c<master.mstSvtCard.length;c++)
		{
			if(master.mstSvtCard[c].svtId==master.mstSvt[i].id&&master.mstSvtCard[c].cardId==k){
				svtCtrlDataTxt+="<td>";
				if(k!=4) svtCtrlDataTxt+=cardCount+"張 各";
				svtCtrlDataTxt+=master.mstSvtCard[c].normalDamage.length+"Hit";
				if(master.mstSvtCard[c].normalDamage.length>1) svtCtrlDataTxt+="s";
				svtCtrlDataTxt+="</td>";
			}
		}
	}
	svtCtrlDataTxt+="<td>"+master.mstSvt[i].starRate/10+"%</td><td>"+master.mstSvt[i].deathRate/10+"%</td><td>"+master.mstSvtLimit[j].criticalWeight+"</td><td>";
	for(c=0;c<master.mstTreasureDeviceLv.length;c++)
	if(Math.floor(master.mstTreasureDeviceLv[c].treaureDeviceId/100)==Math.floor(master.mstSvt[i].id/100))
		{svtCtrlDataTxt+=master.mstTreasureDeviceLv[c].tdPoint/100+"% / "+master.mstTreasureDeviceLv[c].tdPointDef/100+"%";break;}
	svtCtrlDataTxt+="</td></tr>";
	document.getElementById("svtCtrlData").innerHTML=svtCtrlDataTxt;
	
	var svtSkTdDataTxt="";
	var skillText="";
	var skillrowCount=0;
	for(c=0;c<master.mstSvtSkill.length;c++)
	{
		if(master.mstSvtSkill[c].svtId==master.mstSvt[i].id){
			skillrowCount++;
			for(var k=0;k<master.mstSkill.length;k++){
				if(master.mstSvtSkill[c].skillId==master.mstSkill[k].id){skillText+="<td><img src=common/images/SkillIcon/SkillIcon_"+master.mstSkill[k].iconId+".png width=55></td><td><b>"+master.mstSkill[k].name+"</b></td>"; break;}
			}

			for(var k=0;k<master.mstSkillLv.length;k++){
				if(master.mstSvtSkill[c].skillId==master.mstSkillLv[k].skillId&&master.mstSkillLv[k].lv==1){
					skillText+="<td colspan=2>冷卻"+master.mstSkillLv[k].chargeTurn+"回合</td>";//break;
				}
			}
			
			skillText+="<td>";
			if(master.mstSvtSkill[c].condLimitCount==0&&master.mstSvtSkill[c].condQuestId==0&&master.mstSvtSkill[c].condLv==0) skillText+="初期";
			else if(master.mstSvtSkill[c].condLimitCount!=0) skillText+="靈基再臨第"+master.mstSvtSkill[c].condLimitCount+"階段解放";
			else if(master.mstSvtSkill[c].condQuestId!=0) skillText+="通過任務「"+master.mstQuest[findName(master.mstQuest,master.mstSvtSkill[c].condQuestId)].name+"」解放";
			else if(master.mstSvtSkill[c].condLv!=0) skillText+="Lv."+master.mstSvtSkill[c].condLv+"解放";
			skillText+="</td></tr>";
			
			var skDetailTxt = new Array();
			for(k=0;k<skDetail.length;k++){
				if(master.mstSvtSkill[c].skillId==skDetail[k][0]){
					skDetailTxt = skDetail[k];
				}
			}
			if(!skDetailTxt[1])
				for(k=0;k<master.mstSkillDetail.length;k++){
					if(master.mstSvtSkill[c].skillId==master.mstSkillDetail[k].id){
						skDetailTxt[1] = master.mstSkillDetail[k].detail;
					}
				}
			skDetailTxt[1]=skDetailTxt[1].replace(/ /g,"");
			var skDetailArray = new Array();
				skDetailArray = skDetailTxt[1].split(/＆|＋/);
			
			skillrowCount+=skDetailArray.length;
			for(var d=0;d<skDetailArray.length;d++){
				var isLvUp = skDetailArray[d].search(/\{0\}/);
				skDetailArray[d]=skDetailArray[d].replace(/\{0\}/g,"Lv.");
				skillText+="<tr><td colspan=2>"+skDetailArray[d]+"</td><td colspan=3>";
				if(skDetailTxt[2+d].length==0)
					skillText+=("---");
				else if(skDetailTxt[2+d]!=null) 
				{
					skillText+=skDetailTxt[2+d].replace(/\//g," / ");
				}
				else skillText+="待補";
				skillText+="</td></tr>";
			}

		}
	}
	svtSkTdDataTxt+="<tr><th rowspan="+skillrowCount+"><b>保有技能</b></th>"+skillText+"";
		
	if(master.mstSvt[i].classPassive.length!=0){
	skillText="";
	skillrowCount=0;
	for(c=0;c<master.mstSvt[i].classPassive.length;c++)
	{
		skillrowCount++;
		for(var k=0;k<master.mstSkill.length;k++){
			if(master.mstSvt[i].classPassive[c]==master.mstSkill[k].id){skillText+="<td><img src=common/images/SkillIcon/SkillIcon_"+master.mstSkill[k].iconId+".png width=55></td><td><b>"+master.mstSkill[k].name+"</b></td>"; break;}
		}
		for(var k=0;k<master.mstSkillDetail.length;k++){
			if(master.mstSvt[i].classPassive[c]==master.mstSkillDetail[k].id){
				var skDetailTxt = new Array();
				for(k=0;k<skDetail.length;k++){
					if(master.mstSvt[i].classPassive[c]==skDetail[k][0]){
						skDetailTxt = skDetail[k];
					}
				}
				if(!skDetailTxt[1])
					for(k=0;k<master.mstSkillDetail.length;k++){
						if(master.mstSvt[i].classPassive[c]==master.mstSkillDetail[k].id){
							skDetailTxt[1] = master.mstSkillDetail[k].detail;
						}
					}
				
				skillText+="<td colspan=3>"+skDetailTxt[1];
				for(var d=2;skDetailTxt[d]&&d<skDetailTxt.length;d++){
					if(skDetailTxt[d]) 
					{
						if(d!=2) skillText+=" / ";else skillText+="：";
						skillText+=skDetailTxt[d].replace(/\//g," / ");
					}
					else break;
				}
				skillText+="</td></tr>";
				break;
			}
		}
	}
	svtSkTdDataTxt+="<tr><th rowspan="+master.mstSvt[i].classPassive.length+"><b>職階技能</b></th>"+skillText+"";}
	
	skillText="";
	skillrowCount=0;
	for(c=0;c<master.mstTreasureDevice.length;c++)
	{
		if(master.mstTreasureDevice[c].seqId==master.mstSvt[i].id){
			skillrowCount+=2;
			var k=0;
			skillText+="<th colspan=2><b>名稱</b></th><th><b>等級</b></th><th><b>種類</b></th><th><b>解放任務</b></th></tr>";
			
			skillText+="<tr align=\"center\"><td colspan=2><font size=\"1\">"+master.mstTreasureDevice[c].ruby+"</font><br>";
			for(k=0;k<master.mstSvtTreasureDevice.length;k++){
				if(master.mstTreasureDevice[c].id==master.mstSvtTreasureDevice[k].treasureDeviceId){
					skillText+="<b><font color=\"#"+cardList[master.mstSvtTreasureDevice[k].cardId]+"\">"+master.mstTreasureDevice[c].name+"</font></b></td><td>"+master.mstTreasureDevice[c].rank+"</td><td>"+master.mstTreasureDevice[c].typeText+"</td><td>";
					
					if(master.mstSvtTreasureDevice[k].condQuestId==0&&master.mstSvtTreasureDevice[k].condLv==0&&master.mstSvtTreasureDevice[k].condFriendshipRank==0) skillText+="初期"
					else if(findName(master.mstQuest,master.mstSvtTreasureDevice[k].condQuestId)!=null) skillText+=master.mstQuest[findName(master.mstQuest,master.mstSvtTreasureDevice[k].condQuestId)].name;
					else if(master.mstSvtTreasureDevice[k].condLv!=0) skillText+="Lv."+master.mstSvtTreasureDevice[k].condLv+"解放";
					else if(master.mstSvtTreasureDevice[k].condFriendshipRank!=0) skillText+="絆等級"+master.mstSvtTreasureDevice[k].condFriendshipRank+"解放";
					else skillText+="未開放";
					
					skillText+="</td></tr>"; break;}
			}
			var tdDetailTxt = new Array();
			for(k=0;k<tdDetail.length;k++){
				if(master.mstTreasureDevice[c].id==tdDetail[k][0]){
					tdDetailTxt = tdDetail[k];
				}
			}
			if(!tdDetailTxt[1])
				for(k=0;k<master.mstTreasureDeviceDetail.length;k++){
					if(master.mstTreasureDevice[c].id==master.mstTreasureDeviceDetail[k].id){
						tdDetailTxt[1] = master.mstTreasureDeviceDetail[k].detail;
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
				skillText+="<tr><td colspan=2 width=35%>"+tdDetailArray[d]+"</td><td colspan=3>";
				if(tdDetailTxt[2+d].length==0)
					skillText+=("---");
				else if(tdDetailTxt[2+d]!=null) 
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
	svtInfoDataTxt="<tr><th rowspan=2>能力值</th><th><b>筋力</b></th><th><b>耐久</b></th><th><b>敏捷</b></th><th><b>魔力</b></th><th><b>幸運</b></th><th><b>寶具</b></th></tr><tr align=\"center\"><td>"+svtStatusList[Math.floor(master.mstSvtLimit[j].power/10)]+svtStatusPlusList[master.mstSvtLimit[j].power%10]+"</td><td>"+svtStatusList[Math.floor(master.mstSvtLimit[j].defense/10)]+svtStatusPlusList[master.mstSvtLimit[j].defense%10]+"</td><td>"+svtStatusList[Math.floor(master.mstSvtLimit[j].agility/10)]+svtStatusPlusList[master.mstSvtLimit[j].agility%10]+"</td><td>"+svtStatusList[Math.floor(master.mstSvtLimit[j].magic/10)]+svtStatusPlusList[master.mstSvtLimit[j].magic%10]+"</td><td>"+svtStatusList[Math.floor(master.mstSvtLimit[j].luck/10)]+svtStatusPlusList[master.mstSvtLimit[j].luck%10]+"</td><td>"+svtStatusList[Math.floor(master.mstSvtLimit[j].treasureDevice/10)]+svtStatusPlusList[master.mstSvtLimit[j].treasureDevice%10]+"</td></tr>";
	for(c=0;c<master.mstSvtComment.length;c++)
	{
		var tdColor="";
		if(master.mstSvt[i].id==master.mstSvtComment[c].svtId)
		{	svtInfoDataTxt+="<tr><th>";
			if(master.mstSvtComment[c].condValue==0) svtInfoDataTxt+="<b>角色詳細</b>";
			else if(master.mstSvtComment[c].condValue<6) svtInfoDataTxt+="<b>絆等級"+master.mstSvtComment[c].condValue+"</b>";
			else if(master.mstSvtComment[c].condType==1){
				for(var k=0;k<master.mstQuest.length;k++){
					if(master.mstSvtComment[c].condValue==master.mstQuest[k].id){svtInfoDataTxt+="<b>通過任務<br>"+master.mstQuest[k].name+"<b>";break;}
				}
			}
			svtInfoDataTxt+="</th>";
			if(master.mstSvtComment[c].condValue%2==0) tdColor=" bgcolor=\" #ECF2F3\""; else tdColor="";
			svtInfoDataTxt+="<td colspan=6"+tdColor+">"+master.mstSvtComment[c].comment.replace(/\n/g,"<br>");+"</td></tr>";
			if(master.mstSvtComment[c].condType==1) break;
		}
	}
	document.getElementById("svtInfoData").innerHTML=svtInfoDataTxt;

	var svtCmbnDataTxt="";
	svtCmbnDataTxt="<tr><th rowspan=4><b>靈基再臨</b></th>";

	for(var m=0;m<4;m++){
		var tdColor=""; if(m%2==0) tdColor=" bgcolor=\" #ECF2F3\"";
		if(m!=0) svtCmbnDataTxt+="<tr>";
		svtCmbnDataTxt+="<td"+tdColor+">第"+(m+1)+"階段</td><td"+tdColor+">";
		for(c=0;c<master.mstCombineLimit.length;c++)
		{
			if(master.mstCombineLimit[c].id==master.mstSvt[i].id&&master.mstCombineLimit[c].svtLimit==m)
			{
				
				for(var k=0;k<master.mstCombineLimit[c].itemIds.length;k++)
				{
					svtCmbnDataTxt+=findItemName(master.mstCombineLimit[c].itemIds[k]) + "x" + master.mstCombineLimit[c].itemNums[k] + " + ";
				}
				svtCmbnDataTxt+= addCommas(master.mstCombineLimit[c].qp) + "QP";
			}
	}svtCmbnDataTxt+="</td></tr>";}
	svtCmbnDataTxt+="<tr><th rowspan=9><b>技能強化</b></th>";
	for(c=0;c<master.mstCombineSkill.length;c++)
	{
		var tdColor=""; if(c%2==0) tdColor=" bgcolor=\" #ECF2F3\"";
		if(master.mstCombineSkill[c].id==master.mstSvt[i].id)
		{
			if(master.mstCombineSkill[c].skillLv!=1) svtCmbnDataTxt+="<tr>";
			svtCmbnDataTxt+="<td"+tdColor+">Lv."+master.mstCombineSkill[c].skillLv+"→Lv."+(master.mstCombineSkill[c].skillLv+1)+"</td><td"+tdColor+">";
			for(var k=0;k<master.mstCombineSkill[c].itemIds.length;k++)
			{
				svtCmbnDataTxt+=findItemName(master.mstCombineSkill[c].itemIds[k]) + "x" + master.mstCombineSkill[c].itemNums[k] + " + ";
			}
			svtCmbnDataTxt+= addCommas(master.mstCombineSkill[c].qp) + "QP</td></tr>";
		}
	}
	document.getElementById("svtCmbnData").innerHTML=svtCmbnDataTxt;

	document.getElementById("svtImgData").innerHTML="";
	if(master.mstSvt[i].type!=5) document.getElementById("svtImgData").innerHTML="<tr><td><img src=common/images/CharaGraph/"+svtId+"a.png><br><img src=common/images/CharaGraph/"+svtId+"b.png></td></tr>";
	
	var svtLvDataTxt="<tr><th>等級</th><th>ATK</th><th>HP</th><th>上升幅度</th></tr>";
	for(c=0;c<master.mstSvt[i].rewardLv;c++)
	{
		for(var m=0;m<master.mstSvtExp.length;m++)
		{
			if(master.mstSvt[i].expType==master.mstSvtExp[m].type&&master.mstSvtExp[m].lv==c+1)
			{
				var tdColor=""; if(master.mstSvtExp[m].lv%2==1) tdColor=" bgcolor=\" #ECF2F3\"";
				svtLvDataTxt+="<tr align=\"center\"><td"+tdColor+">Lv."+(master.mstSvtExp[m].lv)+"</td><td"+tdColor+">"+Math.floor(master.mstSvtLimit[j].atkBase+(master.mstSvtLimit[j].atkMax-master.mstSvtLimit[j].atkBase)*master.mstSvtExp[m].curve/1000)+"</td><td"+tdColor+">"+Math.floor(master.mstSvtLimit[j].hpBase+(master.mstSvtLimit[j].hpMax-master.mstSvtLimit[j].hpBase)*master.mstSvtExp[m].curve/1000)+"</td><td"+tdColor+">"+(master.mstSvtExp[m].curve-master.mstSvtExp[m-1].curve)/10+"%</td></tr>";
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
		for(i=0;i<master.mstSvt.length;i++)
		{
			if(master.mstSvt[i].type==1||master.mstSvt[i].type==2||master.mstSvt[i].type==5){
				var svtNameZh = findSvtNameZh(master.mstSvt[i].id);
				if(svtNameZh) svtid.options.add(new Option("No." + master.mstSvt[i].collectionNo + " " + svtNameZh,master.mstSvt[i].id));
				else svtid.options.add(new Option("No." + master.mstSvt[i].collectionNo + " " + master.mstSvt[i].name,master.mstSvt[i].id));}
		}
	}
	else
	{
		for(i=0;i<master.mstSvt.length;i++)
		{
			if(master.mstSvt[i].classId==classid.value)
				{if(master.mstSvt[i].type==1||master.mstSvt[i].type==2||master.mstSvt[i].type==5){
				var svtNameZh = findSvtNameZh(master.mstSvt[i].id);
				if(svtNameZh) svtid.options.add(new Option("No." + master.mstSvt[i].collectionNo + " " + svtNameZh,master.mstSvt[i].id));
				else svtid.options.add(new Option("No." + master.mstSvt[i].collectionNo + " " + master.mstSvt[i].name,master.mstSvt[i].id));}}
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
	for(i=0;i<master.mstSvt.length;i++)
	{
		if(master.mstSvt[i].id==svtid.value)
		{
			for(var j=1;j<=master.mstSvt[i].rewardLv;j++)
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
	for(i=0;i<master.mstSvtLimit.length;i++)
	{
		if(master.mstSvtLimit[i].svtId==svtid.value)
		{	
			for(var k=0;k<master.mstSvt.length;k++)
			{
				if (master.mstSvt[k].id==svtid.value)
				{
					for(var j=0;j<master.mstSvtExp.length;j++)
					{
						if(master.mstSvt[k].expType==master.mstSvtExp[j].type&&master.mstSvtExp[j].lv==svtlv.value)
						{
							atk.value=Math.floor(master.mstSvtLimit[i].atkBase+(master.mstSvtLimit[i].atkMax-master.mstSvtLimit[i].atkBase)*master.mstSvtExp[j].curve/1000);
							atkp.value=parseInt(atk.value)+990;
							hp.value=Math.floor(master.mstSvtLimit[i].hpBase+(master.mstSvtLimit[i].hpMax-master.mstSvtLimit[i].hpBase)*master.mstSvtExp[j].curve/1000);
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