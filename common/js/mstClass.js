function findClassName(searchId)
{
	var i;
	for(i in mstClass)
		if(mstClass[i].id==searchId) return mstClass[i].name;
	for(i in master.mstClass)
		if(master.mstClass[i].id==searchId) return master.mstClass[i].name;
	return "不明";
}
function findClassImageId(searchId)
{
	var i;
	for(i in mstClass)
		if(mstClass[i].id==searchId) return mstClass[i].iconImageId;
	for(i in master.mstClass)
		if(master.mstClass[i].id==searchId) return master.mstClass[i].iconImageId;
	return 12;
}
var mstClass = JSON.parse('[{"id":1,"attri":1,"name":"Saber","individuality":100,"attackRate":1000,"imageId":1,"iconImageId":1,"frameId":0,"priority":10000,"groupType":1,"relationId":1,"supportGroup":1,"autoSelSupportType":2},{"id":2,"attri":2,"name":"Archer","individuality":102,"attackRate":950,"imageId":2,"iconImageId":2,"frameId":0,"priority":9000,"groupType":1,"relationId":2,"supportGroup":2,"autoSelSupportType":3},{"id":3,"attri":3,"name":"Lancer","individuality":101,"attackRate":1050,"imageId":3,"iconImageId":3,"frameId":0,"priority":8000,"groupType":1,"relationId":3,"supportGroup":3,"autoSelSupportType":1},{"id":4,"attri":4,"name":"Rider","individuality":103,"attackRate":1000,"imageId":4,"iconImageId":4,"frameId":0,"priority":7000,"groupType":1,"relationId":4,"supportGroup":4,"autoSelSupportType":6},{"id":5,"attri":5,"name":"Caster","individuality":104,"attackRate":900,"imageId":5,"iconImageId":5,"frameId":0,"priority":6000,"groupType":1,"relationId":5,"supportGroup":5,"autoSelSupportType":4},{"id":6,"attri":6,"name":"Assassin","individuality":105,"attackRate":900,"imageId":6,"iconImageId":6,"frameId":0,"priority":5000,"groupType":1,"relationId":6,"supportGroup":6,"autoSelSupportType":5},{"id":7,"attri":7,"name":"Berserker","individuality":106,"attackRate":1100,"imageId":7,"iconImageId":7,"frameId":0,"priority":4000,"groupType":1,"relationId":7,"supportGroup":7,"autoSelSupportType":7},{"id":8,"attri":8,"name":"Shielder","individuality":107,"attackRate":1000,"imageId":13,"iconImageId":8,"frameId":0,"priority":900,"groupType":2,"relationId":8,"supportGroup":8,"autoSelSupportType":0},{"id":9,"attri":9,"name":"Ruler","individuality":108,"attackRate":1100,"imageId":8,"iconImageId":9,"frameId":0,"priority":3000,"groupType":2,"relationId":9,"supportGroup":8,"autoSelSupportType":7},{"id":10,"attri":10,"name":"Alterego","individuality":109,"attackRate":1000,"imageId":12,"iconImageId":10,"frameId":0,"priority":1000,"groupType":2,"relationId":10,"supportGroup":8,"autoSelSupportType":7},{"id":11,"attri":11,"name":"Avenger","individuality":110,"attackRate":1100,"imageId":11,"iconImageId":11,"frameId":0,"priority":2000,"groupType":2,"relationId":11,"supportGroup":8,"autoSelSupportType":7},{"id":12,"attri":12,"name":"？","individuality":111,"attackRate":1000,"imageId":9999,"iconImageId":12,"frameId":0,"priority":50,"groupType":2,"relationId":12,"supportGroup":999,"autoSelSupportType":0},{"id":13,"attri":1,"name":"？","individuality":100,"attackRate":1000,"imageId":1,"iconImageId":13,"frameId":0,"priority":50,"groupType":2,"relationId":1,"supportGroup":999,"autoSelSupportType":999},{"id":14,"attri":2,"name":"？","individuality":102,"attackRate":950,"imageId":2,"iconImageId":14,"frameId":0,"priority":50,"groupType":2,"relationId":2,"supportGroup":999,"autoSelSupportType":999},{"id":15,"attri":3,"name":"？","individuality":101,"attackRate":1050,"imageId":3,"iconImageId":15,"frameId":0,"priority":50,"groupType":2,"relationId":3,"supportGroup":999,"autoSelSupportType":999},{"id":16,"attri":4,"name":"？","individuality":103,"attackRate":1000,"imageId":4,"iconImageId":16,"frameId":0,"priority":50,"groupType":2,"relationId":4,"supportGroup":999,"autoSelSupportType":999},{"id":17,"attri":5,"name":"グランドCaster","individuality":112,"attackRate":900,"imageId":5,"iconImageId":17,"frameId":0,"priority":50,"groupType":2,"relationId":5,"supportGroup":999,"autoSelSupportType":4},{"id":18,"attri":6,"name":"？","individuality":105,"attackRate":900,"imageId":6,"iconImageId":18,"frameId":0,"priority":50,"groupType":2,"relationId":6,"supportGroup":999,"autoSelSupportType":999},{"id":19,"attri":7,"name":"？","individuality":106,"attackRate":1100,"imageId":7,"iconImageId":19,"frameId":0,"priority":50,"groupType":2,"relationId":7,"supportGroup":999,"autoSelSupportType":999},{"id":20,"attri":20,"name":"BeastII","individuality":114,"attackRate":1000,"imageId":9999,"iconImageId":20,"frameId":20,"priority":50,"groupType":2,"relationId":20,"supportGroup":999,"autoSelSupportType":0},{"id":21,"attri":20,"name":"？","individuality":114,"attackRate":1000,"imageId":9999,"iconImageId":12,"frameId":0,"priority":50,"groupType":2,"relationId":20,"supportGroup":999,"autoSelSupportType":0},{"id":22,"attri":22,"name":"BeastI","individuality":113,"attackRate":1000,"imageId":9999,"iconImageId":21,"frameId":20,"priority":50,"groupType":2,"relationId":22,"supportGroup":999,"autoSelSupportType":0},{"id":23,"attri":23,"name":"MoonCancer","individuality":115,"attackRate":1000,"imageId":23,"iconImageId":23,"frameId":0,"priority":950,"groupType":2,"relationId":23,"supportGroup":8,"autoSelSupportType":7},{"id":24,"attri":24,"name":"BeastⅢ／R","individuality":116,"attackRate":1000,"imageId":9999,"iconImageId":24,"frameId":20,"priority":50,"groupType":2,"relationId":24,"supportGroup":999,"autoSelSupportType":8},{"id":25,"attri":25,"name":"Foreigner","individuality":117,"attackRate":1000,"imageId":25,"iconImageId":25,"frameId":0,"priority":925,"groupType":2,"relationId":25,"supportGroup":8,"autoSelSupportType":8},{"id":26,"attri":26,"name":"BeastⅢ／L","individuality":118,"attackRate":1000,"imageId":9999,"iconImageId":24,"frameId":20,"priority":50,"groupType":2,"relationId":26,"supportGroup":999,"autoSelSupportType":8},{"id":27,"attri":27,"name":"？","individuality":119,"attackRate":1000,"imageId":9999,"iconImageId":26,"frameId":20,"priority":50,"groupType":2,"relationId":27,"supportGroup":999,"autoSelSupportType":8},{"id":28,"attri":28,"name":"Pretender","individuality":120,"attackRate":1000,"imageId":28,"iconImageId":28,"frameId":0,"priority":920,"groupType":2,"relationId":28,"supportGroup":8,"autoSelSupportType":7},{"id":29,"attri":29,"name":"BeastⅣ","individuality":121,"attackRate":1000,"imageId":9999,"iconImageId":29,"frameId":20,"priority":50,"groupType":2,"relationId":29,"supportGroup":999,"autoSelSupportType":8},{"id":30,"attri":30,"name":"？","individuality":122,"attackRate":1000,"imageId":9999,"iconImageId":30,"frameId":20,"priority":50,"groupType":2,"relationId":30,"supportGroup":999,"autoSelSupportType":0},{"id":31,"attri":31,"name":"？","individuality":123,"attackRate":1000,"imageId":9999,"iconImageId":31,"frameId":31,"priority":50,"groupType":2,"relationId":31,"supportGroup":999,"autoSelSupportType":0},{"id":32,"attri":31,"name":"？","individuality":123,"attackRate":1000,"imageId":9999,"iconImageId":32,"frameId":31,"priority":50,"groupType":2,"relationId":31,"supportGroup":999,"autoSelSupportType":0},{"id":33,"attri":33,"name":"Beast","individuality":124,"attackRate":1000,"imageId":33,"iconImageId":33,"frameId":0,"priority":910,"groupType":2,"relationId":33,"supportGroup":8,"autoSelSupportType":8},{"id":34,"attri":34,"name":"BeastⅥ","individuality":125,"attackRate":1000,"imageId":9999,"iconImageId":34,"frameId":20,"priority":50,"groupType":2,"relationId":34,"supportGroup":999,"autoSelSupportType":0},{"id":35,"attri":35,"name":"BeastⅥ","individuality":126,"attackRate":1000,"imageId":9999,"iconImageId":35,"frameId":20,"priority":50,"groupType":2,"relationId":35,"supportGroup":999,"autoSelSupportType":0},{"id":36,"attri":36,"name":"？？？","individuality":127,"attackRate":1000,"imageId":9999,"iconImageId":31,"frameId":36,"priority":50,"groupType":2,"relationId":36,"supportGroup":999,"autoSelSupportType":0},{"id":37,"attri":37,"name":"？？？","individuality":128,"attackRate":1000,"imageId":9999,"iconImageId":31,"frameId":37,"priority":50,"groupType":2,"relationId":37,"supportGroup":999,"autoSelSupportType":0},{"id":38,"attri":38,"name":"Beast","individuality":129,"attackRate":1000,"imageId":34,"iconImageId":33,"frameId":0,"priority":910,"groupType":2,"relationId":38,"supportGroup":8,"autoSelSupportType":8},{"id":97,"attri":0,"name":"不明","individuality":0,"attackRate":1000,"imageId":9999,"iconImageId":12,"frameId":0,"priority":50,"groupType":2,"relationId":0,"supportGroup":999,"autoSelSupportType":0},{"id":98,"attri":0,"name":"？","individuality":0,"attackRate":1000,"imageId":9999,"iconImageId":98,"frameId":0,"priority":50,"groupType":2,"relationId":0,"supportGroup":999,"autoSelSupportType":999},{"id":99,"attri":0,"name":"敵人(不使用)","individuality":0,"attackRate":1000,"imageId":9999,"iconImageId":99,"frameId":0,"priority":50,"groupType":2,"relationId":0,"supportGroup":999,"autoSelSupportType":999},{"id":100,"attri":0,"name":"測試(不使用)","individuality":0,"attackRate":1000,"imageId":9999,"iconImageId":100,"frameId":0,"priority":50,"groupType":2,"relationId":0,"supportGroup":999,"autoSelSupportType":999},{"id":107,"attri":7,"name":"Berserker","individuality":106,"attackRate":1100,"imageId":9999,"iconImageId":12,"frameId":0,"priority":4000,"groupType":1,"relationId":7,"supportGroup":999,"autoSelSupportType":7},{"id":124,"attri":24,"name":"？","individuality":116,"attackRate":1000,"imageId":9999,"iconImageId":124,"frameId":0,"priority":50,"groupType":2,"relationId":24,"supportGroup":999,"autoSelSupportType":8},{"id":125,"attri":25,"name":"？","individuality":117,"attackRate":1000,"imageId":9999,"iconImageId":12,"frameId":0,"priority":925,"groupType":2,"relationId":25,"supportGroup":999,"autoSelSupportType":8},{"id":1000,"attri":1000,"name":"OTHER","individuality":0,"attackRate":1000,"imageId":9999,"iconImageId":1000,"frameId":0,"priority":50,"groupType":3,"relationId":1000,"supportGroup":999,"autoSelSupportType":999},{"id":1001,"attri":1001,"name":"ALL","individuality":0,"attackRate":1000,"imageId":9999,"iconImageId":1001,"frameId":0,"priority":50,"groupType":3,"relationId":1001,"supportGroup":999,"autoSelSupportType":0},{"id":1002,"attri":1002,"name":"EXTRA","individuality":0,"attackRate":1002,"imageId":9999,"iconImageId":1002,"frameId":0,"priority":50,"groupType":3,"relationId":1002,"supportGroup":999,"autoSelSupportType":999},{"id":1003,"attri":1003,"name":"全職階＠支援顯示用","individuality":0,"attackRate":1000,"imageId":9999,"iconImageId":1003,"frameId":0,"priority":50,"groupType":3,"relationId":1003,"supportGroup":999,"autoSelSupportType":999},{"id":1004,"attri":1004,"name":"EXTRAⅠ","individuality":0,"attackRate":1000,"imageId":9999,"iconImageId":1004,"frameId":0,"priority":50,"groupType":3,"relationId":1004,"supportGroup":999,"autoSelSupportType":999},{"id":1005,"attri":1005,"name":"EXTRAⅡ","individuality":0,"attackRate":1000,"imageId":9999,"iconImageId":1005,"frameId":0,"priority":50,"groupType":3,"relationId":1005,"supportGroup":999,"autoSelSupportType":999},{"id":1006,"attri":1006,"name":"推薦支援","individuality":0,"attackRate":1000,"imageId":9999,"iconImageId":1006,"frameId":0,"priority":50,"groupType":3,"relationId":1006,"supportGroup":999,"autoSelSupportType":999},{"id":9001,"attri":36,"name":"UNKNOWN","individuality":127,"attackRate":1000,"imageId":9999,"iconImageId":31,"frameId":36,"priority":50,"groupType":2,"relationId":36,"supportGroup":999,"autoSelSupportType":0},{"id":9002,"attri":37,"name":"UNKNOWN","individuality":128,"attackRate":1000,"imageId":9999,"iconImageId":31,"frameId":37,"priority":50,"groupType":2,"relationId":37,"supportGroup":999,"autoSelSupportType":0}]');