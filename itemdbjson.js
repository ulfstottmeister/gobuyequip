//database of relevant items
//itemname is a unique key
var itemdbjson = '[' +
'{"itemname":"ctknife","clearname":"Knife","buycmd":"", "price":0, "buymenu":"", "onlyteam":"ct", "slot":"3", "candrop":false, "buydisabled":true},' +
'{"itemname":"tknife","clearname":"Knife","buycmd":"", "price":0, "buymenu":"", "onlyteam":"t", "slot":"3", "candrop":false, "buydisabled":true},' +
'{"itemname":"c4","clearname":"C4 Explosive","buycmd":"", "price":0, "buymenu":"", "onlyteam":"t", "slot":"5", "candrop":true, "buydisabled":true},' +

'{"itemname":"glock","clearname":"Glock","buycmd":"glock", "price":200, "buymenu":"b11", "onlyteam":"t", "slot":"2", "candrop":true, "buydisabled":false},' +
'{"itemname":"hkp2000","clearname":"P2000","buycmd":"hkp2000", "price":200, "buymenu":"b11", "onlyteam":"ct", "slot":"2", "candrop":true, "buydisabled":false},' +
'{"itemname":"usp_silencer","clearname":"USP-S","buycmd":"usp_silencer", "price":200, "buymenu":"b11", "onlyteam":"ct", "slot":"2", "candrop":true, "buydisabled":false},' +
'{"itemname":"elite","clearname":"Dual Elites","buycmd":"elite", "price":400, "buymenu":"b12", "onlyteam":"", "slot":"2", "candrop":true, "buydisabled":false},' +
'{"itemname":"p250","clearname":"P250","buycmd":"p250", "price":300, "buymenu":"b13", "onlyteam":"", "slot":"2", "candrop":true, "buydisabled":false},' +
'{"itemname":"fn57","clearname":"FN Five-SeveN","buycmd":"fn57", "price":500, "buymenu":"b14", "onlyteam":"ct", "slot":"2", "candrop":true, "buydisabled":false},' +
'{"itemname":"tec9","clearname":"Tec-9","buycmd":"tec9", "price":500, "buymenu":"b14", "onlyteam":"t", "slot":"2", "candrop":true, "buydisabled":false},' +
'{"itemname":"cz75","clearname":"CZ75-Auto","buycmd":"tec9", "price":500, "buymenu":"b14", "onlyteam":"t", "slot":"2", "candrop":true, "buydisabled":false},' +
'{"itemname":"deagle","clearname":"Desert Eagle","buycmd":"deagle", "price":700, "buymenu":"b15", "onlyteam":"", "slot":"2", "candrop":true, "buydisabled":false},' +
'{"itemname":"r8","clearname":"R8 Revolver","buycmd":"deagle", "price":600, "buymenu":"b15", "onlyteam":"", "slot":"2", "candrop":true, "buydisabled":false},' +

'{"itemname":"nova","clearname":"Nova","buycmd":"nova", "price":1050, "buymenu":"b21", "onlyteam":"", "slot":"1", "candrop":true, "buydisabled":false},' +
'{"itemname":"xm1014","clearname":"XM1014","buycmd":"xm1014", "price":2000, "buymenu":"b22", "onlyteam":"", "slot":"1", "candrop":true, "buydisabled":false},' +
'{"itemname":"mag7","clearname":"MAG-7","buycmd":"mag7", "price":1300, "buymenu":"b23", "onlyteam":"ct", "slot":"1", "candrop":true, "buydisabled":false},' +
'{"itemname":"sawedoff","clearname":"Sawed-Off","buycmd":"mag7", "price":1100, "buymenu":"b23", "onlyteam":"t", "slot":"1", "candrop":true, "buydisabled":false},' +
'{"itemname":"m249","clearname":"M249 LMG","buycmd":"m249", "price":5200, "buymenu":"b24", "onlyteam":"", "slot":"1", "candrop":true, "buydisabled":false},' +
'{"itemname":"negev","clearname":"Negev","buycmd":"", "price":1700, "buymenu":"b25", "onlyteam":"", "slot":"1", "candrop":true, "buydisabled":false},' +

'{"itemname":"mp9","clearname":"MP9","buycmd":"mp9", "price":1250, "buymenu":"b31", "onlyteam":"ct", "slot":"1", "candrop":true, "buydisabled":false},' +
'{"itemname":"mac10","clearname":"MAC-10","buycmd":"mac10", "price":1050, "buymenu":"b31", "onlyteam":"t", "slot":"1", "candrop":true, "buydisabled":false},' +
'{"itemname":"mp7","clearname":"MP7","buycmd":"mp7", "price":1500, "buymenu":"b32", "onlyteam":"", "slot":"1", "candrop":true, "buydisabled":false},' +
'{"itemname":"mp5sd","clearname":"MP5-SD","buycmd":"mp7", "price":1500, "buymenu":"b32", "onlyteam":"", "slot":"1", "candrop":true, "buydisabled":false},' +
'{"itemname":"ump45","clearname":"UMP-45","buycmd":"ump45", "price":1200, "buymenu":"b33", "onlyteam":"", "slot":"1", "candrop":true, "buydisabled":false},' +
'{"itemname":"p90","clearname":"P90","buycmd":"p90", "price":2350, "buymenu":"b34", "onlyteam":"", "slot":"1", "candrop":true, "buydisabled":false},' +
'{"itemname":"bizon","clearname":"PP-Bizon","buycmd":"bizon", "price":1400, "buymenu":"b35", "onlyteam":"", "slot":"1", "candrop":true, "buydisabled":false},' +

'{"itemname":"famas","clearname":"Famas","buycmd":"famas", "price":2250, "buymenu":"b41", "onlyteam":"ct", "slot":"1", "candrop":true, "buydisabled":false},' +
'{"itemname":"galilar","clearname":"Galil AR","buycmd":"galilar", "price":2000, "buymenu":"b41", "onlyteam":"t", "slot":"1", "candrop":true, "buydisabled":false},' +
'{"itemname":"m4a1","clearname":"M4A1-S","buycmd":"m4a1", "price":3100, "buymenu":"b42", "onlyteam":"ct", "slot":"1", "candrop":true, "buydisabled":false},' +
'{"itemname":"m4a4","clearname":"M4A4","buycmd":"m4a1", "price":3100, "buymenu":"b42", "onlyteam":"ct", "slot":"1", "candrop":true, "buydisabled":false},' +
'{"itemname":"ak47","clearname":"AK-47","buycmd":"ak47", "price":2700, "buymenu":"b42", "onlyteam":"t", "slot":"1", "candrop":true, "buydisabled":false},' +
'{"itemname":"ssg08","clearname":"SSG 08","buycmd":"ssg08", "price":1700, "buymenu":"b43", "onlyteam":"", "slot":"1", "candrop":true, "buydisabled":false},' +
'{"itemname":"aug","clearname":"AUG","buycmd":"aug", "price":3300, "buymenu":"b44", "onlyteam":"ct", "slot":"1", "candrop":true, "buydisabled":false},' +
'{"itemname":"sg553","clearname":"SG 553","buycmd":"aug", "price":2750, "buymenu":"b44", "onlyteam":"t", "slot":"1", "candrop":true, "buydisabled":false},' +
'{"itemname":"awp","clearname":"AWP","buycmd":"awp", "price":4750, "buymenu":"b45", "onlyteam":"", "slot":"1", "candrop":true, "buydisabled":false},' +
'{"itemname":"scar20","clearname":"SCAR-20","buycmd":"scar20", "price":5000, "buymenu":"b46", "onlyteam":"ct", "slot":"1", "candrop":true, "buydisabled":false},' +
'{"itemname":"g3sg1","clearname":"G3SG1","buycmd":"g3sg1", "price":5000, "buymenu":"b46", "onlyteam":"t", "slot":"1", "candrop":true, "buydisabled":false},' +

'{"itemname":"vest","clearname":"Vest","buycmd":"vest", "price":650, "buymenu":"b51", "onlyteam":"", "slot":"", "candrop":false, "buydisabled":false},' +
'{"itemname":"vesthelm","clearname":"Vest+Helmet","buycmd":"vesthelm", "price":1000, "buymenu":"b52", "onlyteam":"", "slot":"", "candrop":false, "buydisabled":false},' +
'{"itemname":"taser","clearname":"Zeus x27","buycmd":"taser", "price":200, "buymenu":"b53", "onlyteam":"", "slot":"3", "candrop":true, "buydisabled":false},' +
'{"itemname":"defuser","clearname":"Defuse Kit","buycmd":"defuser", "price":400, "buymenu":"b54", "onlyteam":"ct", "slot":"", "candrop":false, "buydisabled":false},' +

'{"itemname":"molotov","clearname":"Molotov","buycmd":"molotov", "price":400, "buymenu":"b61", "onlyteam":"t", "slot":"4", "candrop":false, "buydisabled":false},' +
'{"itemname":"incgrenade","clearname":"Incendiary Gren.","buycmd":"incgrenade", "price":600, "buymenu":"b61", "onlyteam":"ct", "slot":"4", "candrop":false, "buydisabled":false},' +
'{"itemname":"decoy","clearname":"Decoy Grenade","buycmd":"decoy", "price":50, "buymenu":"b62", "onlyteam":"", "slot":"4", "candrop":false, "buydisabled":false},' +
'{"itemname":"flashbang","clearname":"Flashbang","buycmd":"flashbang", "price":200, "buymenu":"b63", "onlyteam":"", "slot":"4", "candrop":false, "buydisabled":false},' +
'{"itemname":"hegrenade","clearname":"HE Grenade","buycmd":"hegrenade", "price":300, "buymenu":"b64", "onlyteam":"", "slot":"4", "candrop":false, "buydisabled":false},' +
'{"itemname":"smokegrenade","clearname":"Smoke Grenade","buycmd":"smokegrenade", "price":300, "buymenu":"b65", "onlyteam":"", "slot":"4", "candrop":false, "buydisabled":false}' +

']';
//'{"itemname":"","clearname":"","buycmd":"", "price":0, "buymenu":"b", "onlyteam":"", "slot":"1", "candrop":true, "buydisabled":false},' +
