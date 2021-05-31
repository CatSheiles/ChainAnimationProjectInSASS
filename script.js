var $cont = document.querySelector('.cont');
var $elsArr = [].slice.call(document.querySelectorAll('.el'));
var $closeBtnsArr = [].slice.call(document.querySelectorAll('.el__close-btn'));

setTimeout(function() {
  $cont.classList.remove('s--inactive');
}, 200);

$elsArr.forEach(function($el) {
  $el.addEventListener('click', function() {
    if (this.classList.contains('s--active')) return; //if active dont let click again
    $cont.classList.add('s--el-active');              //when container active hide other sections
    this.classList.add('s--active');                  //add s-active to element
  });
});

$closeBtnsArr.forEach(function($btn) {
  $btn.addEventListener('click', function(e) {
    e.stopPropagation();                            //allows only 1click to be read
    $cont.classList.remove('s--el-active');
    document.querySelector('.el.s--active').classList.remove('s--active'); //return to home pg
  });
});