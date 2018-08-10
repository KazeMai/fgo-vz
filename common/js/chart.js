    google.load('visualization', '1.1', { 'packages': ['corechart'], 'language': 'zh' });
    //google.setOnLoadCallback(drawChart);

    function drawChart() {

      var data = new google.visualization.DataTable();
      data.addColumn('number', 'Lv');
      data.addColumn('number', 'ATK');
      data.addColumn('number', 'HP');

	for(var i in master.mstSvt)
	{
		if(master.mstSvt[i].id==svtid.value)break;
	}
	var tmpLimit = null;
	for(var j in master.mstSvtLimit)
	{
		if(master.mstSvtLimit[j].svtId==svtid.value)
			tmpLimit = master.mstSvtLimit[j];
	}
	/*if(j==master.mstSvtLimit.length-1)
		for(var j in master.mstSvtLimit)
		{
			if(master.mstSvtLimit[j].svtId==svtid.value&&master.mstSvtLimit[j].limitCount==0)break;
		}*/
	var lvMax = 0;
	if(master.mstSvt[i].type==6) lvMax = master.mstSvtLimit[j].lvMax;
	else lvMax = /*master.mstSvt[i].rewardLv*/100;
	for(var c in master.mstSvtExp){
		if(master.mstSvt[i].expType==master.mstSvtExp[c].type&&master.mstSvtExp[c].lv<=lvMax&&master.mstSvtExp[c].lv>0)
			data.addRows([[master.mstSvtExp[c].lv,Math.floor(tmpLimit.atkBase+(tmpLimit.atkMax-tmpLimit.atkBase)*master.mstSvtExp[c].curve/1000),Math.floor(tmpLimit.hpBase+(tmpLimit.hpMax-tmpLimit.hpBase)*master.mstSvtExp[c].curve/1000)]]);
	}
      var options = {
          title: '二圍曲線圖',
          curveType: 'function',
          //legend: { position: 'bottom' },
		  hAxis: {format: 'Lv###',},
        width: 900,
        height: 500
      };

		var container = document.getElementById('chart_div');
		var chart = new window.google.visualization.LineChart(container);

      chart.draw(data, options);
    }