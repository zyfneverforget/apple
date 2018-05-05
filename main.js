let $button = $('.bar>ul>li')
let n = 0
for(let i=0;i<$button.length;i++){
    $($button[i]).on('click',function(a){
        $('#window').css({ transform:`translate(${-i*920}px)`})
        $(a.currentTarget).addClass('active').siblings().removeClass('active')
        n=i
    })
}


let size = $('.window>img')
let timeId=setTimer()
$('.window').on('mouseenter',function(){window.clearInterval(timeId)})
$('.window').on('mouseleave',function(){
    timeId=setTimer()
  })




function t (index) {
    $button.eq(index).trigger('click')
}
function setTimer(){
    return setInterval(()=>{ 
    t(n%size.length)
      n=n+1;},2000)
  }