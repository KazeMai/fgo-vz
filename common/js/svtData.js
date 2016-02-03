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
	var svtStatusList = ["","A","B","C","D","E","EX","?","?","－"];
	var svtStatusPlusList = ["","","+","++","?","?","?","?","?",""];
	var individualityList = [[2000,"神性"],[2001,"人型"],[2002,"龍"],[2004,"羅馬"],[2005,"猛獸"],[2007,"阿爾托莉亞臉"],[2008,"被「天地乖離開辟之星」所剋"],[2009,"騎乘"],[2010,"亞瑟"],[2011,"被「人類神話・雷電降臨」所剋"],[2012,"愛人"]];
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
	svtNrmlDataTxt="<tr><td rowspan=7 align=center>";
	svtNrmlDataTxt+="<img src=common/images/Servant/"+svtId+"_status_servant_2.png onerror=\"javascript:this.style='display:none'\"></img>";
	svtNrmlDataTxt+="</td><th><b>編號</b></th><th><b>星數</b></th><th colspan=2><b>名稱</b></th><th><b>職階</b></th><th><b>分類</b></th></tr><tr align=\"center\"><td>No."+master.mstSvt[i].collectionNo+"</td><td class=\"star\">";
	for(c=0;c<master.mstSvtLimit[j].rarity;c++)
		svtNrmlDataTxt+="★";
	svtNrmlDataTxt+="</td><td colspan=2>";
	var svtNameZh = findSvtNameZh(master.mstSvt[i].id);
	if(svtNameZh&&!document.getElementById('isJpTxt').checked)
		{svtNrmlDataTxt+="<div class=ruby>" + master.mstSvt[i].name + "</div>" + svtNameZh;}
	else {svtNrmlDataTxt+=master.mstSvt[i].name;}
	svtNrmlDataTxt+="</td>";
	document.title = findSvtNameZh2(svtId)+" - Servant資料查詢";
	for(c=0;c<mstClass.length;c++)
		if(mstClass[c].id==master.mstSvt[i].classId) {svtNrmlDataTxt+="<td>"+mstClass[c].name+"</td>";break;}
	
	svtNrmlDataTxt+="<td>"+attriList[master.mstSvt[i].attri]+"</td></tr><tr><th><b>HP</b></th><th><b>ATK</b></th><th><b>繪師</b></th><th><b>CV</b></th><th><b>屬性</b></th><th><b>性別</b></th></tr><tr align=\"center\"><td>"+master.mstSvtLimit[j].hpBase+" / "+master.mstSvtLimit[j].hpMax+"</td><td>"+master.mstSvtLimit[j].atkBase+" / "+master.mstSvtLimit[j].atkMax+"</td>";
	for(c=0;c<master.mstIllustrator.length;c++)
		if(master.mstIllustrator[c].id==master.mstSvt[i].illustratorId) {svtNrmlDataTxt+="<td>"+master.mstIllustrator[c].name+"</td>";break;}
	
	svtNrmlDataTxt+="<td>";
	if(master.mstSvt[i].cvId!=-1)
		for(c=0;c<master.mstCv.length;c++){
			if(master.mstCv[c].id==master.mstSvt[i].cvId) {svtNrmlDataTxt+=master.mstCv[c].name;break;}
		}
	else svtNrmlDataTxt+="？？？";
	svtNrmlDataTxt+="</td>";
	svtNrmlDataTxt+="<td>"+policyList[master.mstSvtLimit[j].policy]+"・"+personalityList[master.mstSvtLimit[j].personality]+"</td><td>"+genderTypeList[master.mstSvt[i].genderType]+"</td></tr>";
	
	var traitArray = new Array();
	for(c in master.mstSvt[i].individuality)
		for(var k in individualityList)
			if(master.mstSvt[i].individuality[c]==individualityList[k][0]) traitArray.push(individualityList[k][1]);
	svtNrmlDataTxt+="<tr><th>特性</th><td colspan=5 align=center>"+traitArray+"</td></tr>";
	document.getElementById("svtNrmlData").innerHTML=svtNrmlDataTxt;
	
	var svtCtrlDataTxt="";
	svtCtrlDataTxt+="<tr><th rowspan=2><b>指令卡</b></th><th><font color=\"#0099FF\"><b>Arts</b></font></th><th><font color=\"#ff0000\"><b>Buster</b></font></th><th><font color=\"#00ff00\"><b>Quick</b></font></th><th><b>Extra</b></th><th rowspan=2><b>隱藏數值</b></th><th><b>星星發生率</b></th><th><b>被即死率</b></th><th><b>星星分配比重</b></th><th><b>基本NP獲得率(Atk / Def)</b></th></tr><tr align=\"center\">";
	var artHit,busterHit,quickHit,exHit;
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
				
				if(master.mstSvtCard[c].cardId==1) artHit=master.mstSvtCard[c].normalDamage.length;
				else if(master.mstSvtCard[c].cardId==2) busterHit=master.mstSvtCard[c].normalDamage.length;
				else if(master.mstSvtCard[c].cardId==3) quickHit=master.mstSvtCard[c].normalDamage.length;
				else if(master.mstSvtCard[c].cardId==4) exHit=master.mstSvtCard[c].normalDamage.length;
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
	var skillrowCount=1;
	for(c=0;c<master.mstSvtSkill.length;c++)
	{
		if(master.mstSvtSkill[c].svtId==master.mstSvt[i].id){
			skillrowCount++;
			for(var k=0;k<master.mstSkill.length;k++){
				if(master.mstSvtSkill[c].skillId==master.mstSkill[k].id){skillText+="<td><img src=common/images/SkillIcon/SkillIcon_"+master.mstSkill[k].iconId+".png onerror=javascript:this.src='common/images/SkillIcon/SkillIcon_0.png' width=55></img></td><td><b>"+master.mstSkill[k].name+"</b></td>"; break;}
			}

			for(var k=0;k<master.mstSkillLv.length;k++){
				if(master.mstSvtSkill[c].skillId==master.mstSkillLv[k].skillId&&master.mstSkillLv[k].lv==1){
					skillText+="<td colspan=5>冷卻"+master.mstSkillLv[k].chargeTurn+"回合</td>";//break;
				}
			}
			
			skillText+="<td colspan=5>";
			if(master.mstSvtSkill[c].condLimitCount==0&&master.mstSvtSkill[c].condQuestId==0&&master.mstSvtSkill[c].condLv==0) skillText+="初期";
			if(master.mstSvtSkill[c].condLimitCount!=0) skillText+="靈基再臨第"+master.mstSvtSkill[c].condLimitCount+"階段<br>";
			if(master.mstSvtSkill[c].condLv!=0) skillText+="Lv."+master.mstSvtSkill[c].condLv+"<br>";
			if(master.mstSvtSkill[c].condQuestId!=0) skillText+="通過任務 "+questRea(master.mstSvtSkill[c].condQuestId)+"<br>";
			skillText+="</td></tr>";
			
			var skDetailTxt = new Array();
			for(k=0;k<skDetail.length;k++){
				if(master.mstSvtSkill[c].skillId==skDetail[k][0]){
					skDetailTxt = skDetail[k].slice(0);break;
				}
			}
			if(document.getElementById('isJpTxt').checked||!skDetailTxt[1])
				for(k=0;k<master.mstSkillDetail.length;k++){
					if(master.mstSvtSkill[c].skillId==master.mstSkillDetail[k].id){
						skDetailTxt[1] = master.mstSkillDetail[k].detail;break;
					}
				}
				
			var skDetailArray = new Array();
			if(!document.getElementById('isJpTxt').checked)
			{
				skDetailTxt[1]=skDetailTxt[1].replace(/ |　/g,"");
				skDetailTxt[1]=skDetailTxt[1].replace(/＆/g,"＆┗");
				skDetailArray = skDetailTxt[1].split(/＆|＋/);
			}
			else skDetailArray[0] = skDetailTxt[1].slice(0);
			
			skillrowCount+=skDetailArray.length;
			for(var d=0;d<skDetailArray.length;d++){
				var isLvUp = skDetailArray[d].search(/\{0\}|Lv/);
				skDetailArray[d]=skDetailArray[d].replace(/\{0\}/g,"Lv.");
				skDetailArray[d]=skDetailArray[d].replace(/\[Lv.]/g,"<font color=\"#CC00CC \">[Lv.]</font>");
				skDetailArray[d]=skDetailArray[d].replace(/【/g,"<font color=\"#006400 \">【");
				skDetailArray[d]=skDetailArray[d].replace(/】/g,"】</font>");
				
				if(document.getElementById('isJpTxt').checked) skillText+="<tr><td colspan=12>"+skDetailArray[d]+"</td>";
				
				else{
					skillText+="<tr><td colspan=2>"+skDetailArray[d]+"</td>";
					
					if(skDetailTxt[2+d]&&skDetailTxt[2+d].split("/").length-1>1){
						var skLvArray = new Array();
							skLvArray = skDetailTxt[2+d].split(/\//);
						for(k in skLvArray)
							skillText+="<td align=center style='width:50px'>"+skLvArray[k]+"</td>";
					}
					else{
						skillText+="<td colspan=10>";
						if(skDetailTxt[2+d]) skillText+="　"+skDetailTxt[2+d].replace(/\//g," / ");
						else if(typeof skDetailTxt[2+d] !== 'undefined'&&skDetailTxt[2+d].length==0) skillText+=("　---");
						else skillText+="　待補";
					}
				}
				skillText+="</td></tr>";
			}
		}
	}
	if(skillText.length>0)svtSkTdDataTxt+="<tr><th style='width:60px' rowspan="+skillrowCount+"><b>保有技能</b></th><th colspan=2 style='width:300px'>技能</th><th colspan=5 style='width:250px'>冷卻時間</th><th colspan=5 style='width:250px'>開放條件</th></tr><tr>"+skillText+"";
		
	if(master.mstSvt[i].classPassive.length!=0){
	skillText="";
	skillrowCount=0;
	for(c=0;c<master.mstSvt[i].classPassive.length;c++)
	{
		skillrowCount++;
		for(var k=0;k<master.mstSkill.length;k++){
			if(master.mstSvt[i].classPassive[c]==master.mstSkill[k].id){skillText+="<td style='width:55px'><img src=common/images/SkillIcon/SkillIcon_"+master.mstSkill[k].iconId+".png onerror=javascript:this.src='common/images/SkillIcon/SkillIcon_0.png' width=55></img></td><td><b>"+master.mstSkill[k].name+"</b></td>"; break;}
		}
		for(var k=0;k<master.mstSkillDetail.length;k++){
			if(master.mstSvt[i].classPassive[c]==master.mstSkillDetail[k].id){
				var skDetailTxt = new Array();
				for(k=0;k<skDetail.length;k++){
					if(master.mstSvt[i].classPassive[c]==skDetail[k][0]){
						skDetailTxt = skDetail[k].slice(0);
						skDetailTxt[1] = skDetailTxt[1].replace(/ /g,"").replace(/＋/g,"<br>").replace(/【/g,"<br>【");
						break;
					}
				}
				if(document.getElementById('isJpTxt').checked||!skDetailTxt[1])
					for(k=0;k<master.mstSkillDetail.length;k++){
						if(master.mstSvt[i].classPassive[c]==master.mstSkillDetail[k].id){
							skDetailTxt[1] = master.mstSkillDetail[k].detail;break;
						}
					}
				
				skillText+="<td colspan=10>"+skDetailTxt[1];
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
			skillText+="<th colspan=2><b>名稱</b></th><th colspan=2><b>等級</b></th><th colspan=2><b>種類</b></th><th colspan=4><b>解放任務</b></th><th colspan=2>攻擊次數</th></tr>";
			
			skillText+="<tr align=\"center\"><td colspan=2><div class=ruby>"+master.mstTreasureDevice[c].ruby+"</div>";
			for(k=0;k<master.mstSvtTreasureDevice.length;k++){
				if(master.mstTreasureDevice[c].id==master.mstSvtTreasureDevice[k].treasureDeviceId){
					skillText+="<b><font color=\"#"+cardList[master.mstSvtTreasureDevice[k].cardId]+"\">"+master.mstTreasureDevice[c].name+"</font></b></td><td colspan=2>"+master.mstTreasureDevice[c].rank+"</td><td colspan=2>"+master.mstTreasureDevice[c].typeText.replace(/対/g,"對").replace(/宝/g,"寶").replace(/剣/g,"劍").replace(/悪/g,"惡").replace(/奥/g,"奧").replace(/セイバー/g,"Saber")+"</td><td colspan=4>";
					
					if(master.mstSvtTreasureDevice[k].condQuestId==0&&master.mstSvtTreasureDevice[k].condLv==0&&master.mstSvtTreasureDevice[k].condFriendshipRank==0) skillText+="初期"
					else if(findName(master.mstQuest,master.mstSvtTreasureDevice[k].condQuestId)!=null)
					{
						skillText+=questRea(master.mstSvtTreasureDevice[k].condQuestId);
					}
					else if(master.mstSvtTreasureDevice[k].condLv!=0) skillText+="Lv."+master.mstSvtTreasureDevice[k].condLv+"解放";
					else if(master.mstSvtTreasureDevice[k].condFriendshipRank!=0) skillText+="絆等級"+master.mstSvtTreasureDevice[k].condFriendshipRank+"解放";
					else skillText+="未開放";
					
					skillText+="</td>"; break;}
			}
			var tdDetailTxt = new Array();
			for(d in tdDetail){
				if(master.mstTreasureDevice[c].id==tdDetail[d][0]){
					tdDetailTxt = tdDetail[d].slice(0);break;
				}
			}
			if(document.getElementById('isJpTxt').checked||!tdDetailTxt[1])
				for(d in master.mstTreasureDeviceDetail){
					if(master.mstTreasureDevice[c].id==master.mstTreasureDeviceDetail[d].id){
						tdDetailTxt[1] = master.mstTreasureDeviceDetail[d].detail;break;
					}
				}
			
			skillText+="<td colspan=2>";
			if(tdDetailTxt[1].search(/攻擊[^力]|攻撃[^力]/)==-1) skillText+="－";
			else
			{
				skillText+=master.mstSvtTreasureDevice[k].damage.length+"Hit";
				if(master.mstSvtTreasureDevice[k].damage.length>1) skillText+="s";
			}
			skillText+="</td></tr>";
			
			var tdDetailArray = new Array();
			if(!document.getElementById('isJpTxt').checked)
			{
				tdDetailTxt[1]=tdDetailTxt[1].replace(/ |　/g,"");
				tdDetailTxt[1]=tdDetailTxt[1].replace(/＆/g,"＆┗");
				tdDetailArray = tdDetailTxt[1].split(/＆|＋/);
			}
			else tdDetailArray[0] = tdDetailTxt[1].slice(0);
			
			skillrowCount+=tdDetailArray.length;
			for(var d=0;d<tdDetailArray.length;d++){
				var isLvUp = tdDetailArray[d].search(/\{0\}|Lv/);
				var isOCUp = tdDetailArray[d].search(/<O|<オ/);
				tdDetailArray[d]=tdDetailArray[d].replace(/\{0\}/g,"Lv.");
				tdDetailArray[d]=tdDetailArray[d].replace(/<O/g,"<font color=\"#CC6600\"><br>< O");
				tdDetailArray[d]=tdDetailArray[d].replace(/<オ/g,"<font color=\"#CC6600\"><オ");
				tdDetailArray[d]=tdDetailArray[d].replace(/P>/g,"P></font>");
				tdDetailArray[d]=tdDetailArray[d].replace(/プ>/g,"プ></font>");
				tdDetailArray[d]=tdDetailArray[d].replace(/【/g,"<font color=\"#006400 \">【");
				tdDetailArray[d]=tdDetailArray[d].replace(/】/g,"】</font>");
				tdDetailArray[d]=tdDetailArray[d].replace(/\[Lv.]/g,"<font color=\"#CC00CC \">[Lv.]</font>");
				tdDetailArray[d]=tdDetailArray[d].replace(/\n/g,"<br>");
				
				if(document.getElementById('isJpTxt').checked) skillText+="<td colspan=12>"+tdDetailArray[d]+"</td>";
				
				else{
					if(d!=0) skillText+="<tr>"
					skillText+="<td colspan=2>"+tdDetailArray[d]+"</td>";
						
					if(/*(isLvUp!=-1||isOCUp!=-1)&&*/tdDetailTxt[2+d]&&tdDetailTxt[2+d].split("/").length-1>1){
						var skLvArray = new Array();
							skLvArray = tdDetailTxt[2+d].split(/\//);
						for(g in skLvArray)
							skillText+="<td align=center colspan=2>"+skLvArray[g]+"</td>";
					}
					else{
						skillText+="<td colspan=10>";
						if(tdDetailTxt[2+d]) skillText+="　"+tdDetailTxt[2+d]/*.replace(/\//g," / ")*/;
						else if(typeof tdDetailTxt[2+d] !== 'undefined'&&tdDetailTxt[2+d].length==0) skillText+=("　---");
						else skillText+="　待補";
					}
				}
				skillText+="</td></tr>";
			}
		}
	}
	svtSkTdDataTxt+="<tr><th rowspan="+skillrowCount+"><b>寶具</b></th>"+skillText+"";
	//svtSkTdDataTxt+="<tr><td colspan=6><p class=\"notice\">※若未註明效果的對象，則與跟前一個效果對象相同。</p></td></tr>";
	document.getElementById("svtSkTdData").innerHTML=svtSkTdDataTxt;
	
	var svtInfoDataTxt="";
	svtInfoDataTxt="<tr><th rowspan=2 style='width:250px'>能力值</th><th style='width:50px'>筋力</th><th style='width:50px'>耐久</th><th style='width:50px'>敏捷</th><th style='width:50px'>魔力</th><th style='width:50px'>幸運</th><th style='width:50px'>寶具</th></tr><tr align=\"center\"><td>"+svtStatusList[Math.floor(master.mstSvtLimit[j].power/10)]+svtStatusPlusList[master.mstSvtLimit[j].power%10]+"</td><td>"+svtStatusList[Math.floor(master.mstSvtLimit[j].defense/10)]+svtStatusPlusList[master.mstSvtLimit[j].defense%10]+"</td><td>"+svtStatusList[Math.floor(master.mstSvtLimit[j].agility/10)]+svtStatusPlusList[master.mstSvtLimit[j].agility%10]+"</td><td>"+svtStatusList[Math.floor(master.mstSvtLimit[j].magic/10)]+svtStatusPlusList[master.mstSvtLimit[j].magic%10]+"</td><td>"+svtStatusList[Math.floor(master.mstSvtLimit[j].luck/10)]+svtStatusPlusList[master.mstSvtLimit[j].luck%10]+"</td><td>"+svtStatusList[Math.floor(master.mstSvtLimit[j].treasureDevice/10)]+svtStatusPlusList[master.mstSvtLimit[j].treasureDevice%10]+"</td></tr>";
	for(c=0;c<master.mstSvtComment.length;c++)
	{
		var tdColor="";
		if(master.mstSvt[i].id==master.mstSvtComment[c].svtId)
		{	svtInfoDataTxt+="<tr><th width=150>";
			if(master.mstSvtComment[c].condValue==0) svtInfoDataTxt+="<b>角色詳細</b>";
			else if(master.mstSvtComment[c].condValue<6) 
			{
				svtInfoDataTxt+="<b>絆等級"+master.mstSvtComment[c].condValue+"</b>";
				for(d in master.mstFriendship)
					if(master.mstFriendship[d].id==master.mstSvt[i].friendshipId&&master.mstFriendship[d].rank==master.mstSvtComment[c].condValue-1)
					{
						svtInfoDataTxt+="<br>("+master.mstFriendship[d].friendship+")";break;
					}
			}
			else if(master.mstSvtComment[c].condType==1){
				svtInfoDataTxt+="<b>通過任務</b><br>"+questRea(master.mstSvtComment[c].condValue);
			}
			svtInfoDataTxt+="</th>";
			if(master.mstSvtComment[c].condValue%2==0) tdColor=" bgcolor=\" #ECF2F3\""; else tdColor="";
			svtInfoDataTxt+="<td colspan=6"+tdColor+">"+master.mstSvtComment[c].comment.replace(/\n/g,"<br>");+"</td></tr>";
			//if(master.mstSvtComment[c].condType==1) break;
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
	svtCmbnDataTxt+="<tr><th rowspan=9><b>技能強化</b></th>";var combineCount = 0;
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
			svtCmbnDataTxt+= addCommas(master.mstCombineSkill[c].qp) + "QP</td></tr>";combineCount++;
		}
	}
	if(combineCount==0) svtCmbnDataTxt+="<td colspan=2>無</td></tr>";
	document.getElementById("svtCmbnData").innerHTML=svtCmbnDataTxt;

	document.getElementById("svtImgData").innerHTML="";
	document.getElementById("svtImgData").innerHTML="<tr><td><img src=common/images/Servant/"+svtId+"_card_servant_1.png onerror=\"this.style='display:none'\"></img><img src=common/images/Servant/"+svtId+"_card_servant_2.png onerror=\"this.style='display:none'\"></img><img src=common/images/Servant/"+svtId+"_card_servant_3.png onerror=\"this.style='display:none'\"></img><br><img src=common/images/CharaGraph/"+svtId+"a.png onerror=\"this.style='display:none'\"></img><br><img src=common/images/CharaGraph/"+svtId+"b.png onerror=\"this.style='display:none'\"></img></td></tr>";
	
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
	
	$("img").error(function () { 
    //$(this).hide();
    $(this).css({visibility:"hidden"}); 
	});
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
			if(master.mstSvt[i].type==1||master.mstSvt[i].type==2||master.mstSvt[i].type==5||master.mstSvt[i].type==9){
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
				{if(master.mstSvt[i].type==1||master.mstSvt[i].type==2||master.mstSvt[i].type==5||master.mstSvt[i].type==9){
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
function urlId()
{
	var getSvtId = "1";
	var getSvtId2 = "";
	if(getUrl("no")) getSvtId = getUrl("no");
	if(getUrl("id")) getSvtId2 = getUrl("id");
	if(getSvtId){
		if(getSvtId2.length!=0){
			for(i in master.mstSvt)
				if((master.mstSvt[i].type==1||master.mstSvt[i].type==2||master.mstSvt[i].type==5||master.mstSvt[i].type==9)&&getSvtId2==master.mstSvt[i].id)
				{		$("#svtid").val(master.mstSvt[i].id);break;}
		}
		else
			for(i in master.mstSvt)
				if((master.mstSvt[i].type==1||master.mstSvt[i].type==2||master.mstSvt[i].type==5||master.mstSvt[i].type==9)&&getSvtId==master.mstSvt[i].collectionNo)
				{		$("#svtid").val(master.mstSvt[i].id);break;}
		//if(i==master.mstSvt.length-1) alert("找不到與輸入的id有關之資料，請確認網址無誤");
	}
	svtidChange();
}