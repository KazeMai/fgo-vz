    //google.load('visualization', '1.1', { 'packages': ['corechart'], 'language': 'zh' });
    google.setOnLoadCallback(drawChart);

    function drawChart() {

      var data = new google.visualization.DataTable();
      data.addColumn('number', '等級');
      data.addColumn('number', 'ATK');
      data.addColumn('number', 'HP');

	var i;
	for(i=0;i<master.mstSvt.length;i++)
	{
		if(master.mstSvt[i].id==svtid.value)break;
	}
	var j;
	for(j=0;j<master.mstSvtLimit.length;j++)
	{
		if(master.mstSvtLimit[j].svtId==svtid.value)break;
	}
	var c;
	for(c=0;c<master.mstSvtExp.length;c++){
		if(master.mstSvt[i].expType==master.mstSvtExp[c].type&&master.mstSvtExp[c].lv<=master.mstSvt[i].rewardLv&&master.mstSvtExp[c].lv>0)
			data.addRows([[master.mstSvtExp[c].lv,Math.floor(master.mstSvtLimit[j].atkBase+(master.mstSvtLimit[j].atkMax-master.mstSvtLimit[j].atkBase)*master.mstSvtExp[c].curve/1000),Math.floor(master.mstSvtLimit[j].hpBase+(master.mstSvtLimit[j].hpMax-master.mstSvtLimit[j].hpBase)*master.mstSvtExp[c].curve/1000)]]);
	}
      var options = {
          title: '二圍曲線圖',
          curveType: 'function',
          //legend: { position: 'bottom' },
		  hAxis: {title: '等級'},
        width: 900,
        height: 500
      };

		var container = document.getElementById('chart_div');
		var chart = new window.google.visualization.LineChart(container);

      chart.draw(data, options);
    }