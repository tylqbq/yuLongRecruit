export default function District(map,districtNameList){
    // this.map = map;
    // console.log(this);
    this.addDistrict(districtNameList,map);
}
//画遮蔽层的相关方法
District.prototype.drawBoundary=function (blist,map) {
      //包含所有区域的点数组
      var pointArray = [];
     /*思路: 首先在中国地图最外画一圈，圈住理论上所有的中国领土，然后再将每个闭合区域合并进来，并全部连到西北角。
      *      这样就做出了一个经过多次西北角的闭合多边形*/
      //定义中国东南西北端点，作为第一层
      var pNW = { lat: 59.0, lng: 73.0 };
      var pNE = { lat: 59.0, lng: 136.0 };
      var pSE = { lat: 3.0, lng: 136.0 };
      var pSW = { lat: 3.0, lng: 73.0 };
      //向数组中添加一次闭合多边形，并将西北角再加一次作为之后画闭合区域的起点
      var pArray = [];
      pArray.push(pNW);
      pArray.push(pSW);
      pArray.push(pSE);
      pArray.push(pNE);
      pArray.push(pNW);
      //循环添加各闭合区域
    //   var map = this.map;
      
      for (var i = 0; i < blist.length; i++) {
          //添加显示用标签层
          var label = new BMap.Label(blist[i].name, { offset: new BMap.Size(20, -10) });
          label.hide();
          map.addOverlay(label);

          //添加多边形层并显示
          var ply = new BMap.Polygon(blist[i].points, { strokeWeight: 5, strokeColor: "#FF0000", fillOpacity: 0.01, fillColor: " #FFFFFF" }); //建立多边形覆盖物
 
          // ply.addEventListener("click", click);
          ply.addEventListener("mouseover", function(evt){
                axios.post("/test")
                .then(function (response) {
                    console.log(response);
                })
          });
          // ply.addEventListener("mouseout", mouseout);
          // ply.addEventListener("mousemove", mousemove);
          map.addOverlay(ply);

          //将点增加到视野范围内
          var path = ply.getPath();
          pointArray = pointArray.concat(path);
          //将闭合区域加到遮蔽层上，每次添加完后要再加一次西北角作为下次添加的起点和最后一次的终点
          pArray = pArray.concat(path);
          pArray.push(pArray[0]);
      }
      //限定显示区域，需要引用api库
      var boundply = new BMap.Polygon(pointArray);
      map.setViewport(pointArray);    //调整视野 
      //添加遮蔽层
      var plyall = new BMap.Polygon(pArray, { strokeOpacity: 0.0000001, strokeColor: "#000000", strokeWeight: 0.00001, fillColor: "#000000", fillOpacity: 0.4 }); //建立多边形覆盖物
      map.addOverlay(plyall);
}

District.prototype.addDistrict = function(districtNameList,map) {
    //使用计数器来控制加载过程
    var nameListCount = districtNameList.length;
    var drawBoundary =  this.drawBoundary;
    var blist = [];
    var bdary = new BMap.Boundary();
    var map = map;
    for(let i=0;i<nameListCount;i++){
    var districtName = districtNameList[i];
        bdary.get(districtName, function (rs) {       //获取行政区域
            var count = rs.boundaries.length; //行政区域的点有多少个
            if (count === 0) {
                alert('未能获取当前输入行政区域');
                return;
            }
            for (var i = 0; i < count; i++) {
                blist.push({ points: rs.boundaries[i]});
            };
            nameListCount--;
            if(nameListCount == 0){
                drawBoundary(blist,map);
            }
        });
    }
}

District.prototype.mouseover = function(evt){
    console.log(evt.point);
}