$(function(){
  // 关闭浮窗
  function closeFixed(closeBtn, wrap){
    $(closeBtn).click(function(){
      $(wrap).hide();
    });
  }
  // 01_建筑软文左侧浮窗
  closeFixed('.left-fixed .close', '.left-fixed');
  // 打开页面后8S后弹出
  var sId = null; // 定时器
  function showMask(mask, t){
    sId = setInterval(function(){
      $(mask).show();
      clearInterval(sId);
      console.log(111);
    }, t);
  }
  // showMask('.jz-mask', 8000);
  // 02_建筑软文-弹窗
  closeFixed('.jz-popup .close', '.jz-mask');

});