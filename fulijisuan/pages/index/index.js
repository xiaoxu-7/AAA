// index.js
var start,end,sum;
Page({
  startNum:function(e){
    start=e.detail.value;
  },
  endNum:function(e){
    end=e.detail.value;
  },
  calc:function(){
    sum=10000;
    for(var i=0;i<5;i++){
      sum=sum+(sum*end);
    }
    this.setData({
      sum:sum
    })
  }
})
