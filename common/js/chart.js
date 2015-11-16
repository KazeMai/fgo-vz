    //google.load('visualization', '1.1', { 'packages': ['corechart'], 'language': 'zh' });
    google.setOnLoadCallback(drawChart);

    function drawChart() {

      var data = new google.visualization.DataTable();
      data.addColumn('number', '等級');
      data.addColumn('number', 'ATK');
      data.addColumn('number', 'HP');

	var i;
	for(i=0;i<mstSvt.length;i++)
	{
		if(mstSvt[i].id==svtid.value)break;
	}
	var j;
	for(j=0;j<mstSvtLimit.length;j++)
	{
		if(mstSvtLimit[j].svtId==svtid.value)break;
	}
	var c;
	for(c=0;c<mstSvtExp.length;c++){
		if(mstSvt[i].expType==mstSvtExp[c].type&&mstSvtExp[c].lv<=mstSvt[i].rewardLv&&mstSvtExp[c].lv>0)
			data.addRows([[mstSvtExp[c].lv,Math.floor(mstSvtLimit[j].atkBase+(mstSvtLimit[j].atkMax-mstSvtLimit[j].atkBase)*mstSvtExp[c].curve/1000),Math.floor(mstSvtLimit[j].hpBase+(mstSvtLimit[j].hpMax-mstSvtLimit[j].hpBase)*mstSvtExp[c].curve/1000)]]);
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