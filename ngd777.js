

$(`<center>

<style>
@import url('https://fonts.googleapis.com/css2?family=Tajawal:wght@400;700&display=swap');

:root{
  --gold:#d4af37;
  --bg:#eeeeee;
  --row:#ffffff;
  --stroke:#cccccc;
  --txt:#222222;
  --radius:12px;
  --shadow:0 6px 14px rgba(0,0,0,.25);
}

body{background:#000;margin:0}

#subs-slim{
  width:100%;
  max-width:none;
  margin:0 auto;
  font-family:'Tajawal',sans-serif;
  color:var(--txt);
  background:var(--bg);
  border:1px solid var(--stroke);
  border-radius:0;
  box-shadow:none;
  direction:rtl;
  overflow:hidden;
}

@keyframes pulse{
  0%,100%{text-shadow:0 0 5px rgba(212,175,55,.7),0 0 10px rgba(212,175,55,.4)}
  50%   {text-shadow:0 0 2px rgba(212,175,55,.3),0 0 4px rgba(212,175,55,.3)}
}
#slim-head{
  background:linear-gradient(135deg,#2d2d2d,#000);
  color:var(--gold);
  text-align:center;
  font-size:16px;   /* 18px → 16px //-edited */
  font-weight:700;
  padding:16px;
  cursor:pointer;
  animation:pulse 2.5s infinite alternate;
}

#slim-body{
  display:none;
  padding:18px 16px 24px;
  opacity:0;
  transition:opacity .4s;
}
#slim-body.show{opacity:1}

.item{
  display:flex;
  align-items:center;
  gap:10px;
  background:var(--row);
  border:1px solid var(--stroke);
  border-radius:var(--radius);
  padding:8px 10px;
  margin-bottom:10px;
  font-size:12px;  /* 14px → 12px //-edited */
  opacity:0;
  transform:translateY(10px);
  transition:all .35s;
}
.show .item{opacity:1;transform:none}
.item:hover{transform:scale(1.02);box-shadow:0 0 10px rgba(212,175,55,.35)}

.badge{
  flex:0 0 30px;
  height:30px;
  background:var(--gold);
  color:#000;
  border-radius:50%;
  display:flex;
  align-items:center;
  justify-content:center;
  font-size:10px;  /* 12px → 10px //-edited */
  font-weight:700;
}
.name{flex:1;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}
.price{color:var(--gold);font-weight:700;font-size:11px}  /* 13px → 11px //-edited */
.item img{width:24px;height:24px;object-fit:contain}

.contact{
  display:block;
  margin:14px auto 0;
  background:var(--gold);
  color:#000!important;
  padding:10px 32px;
  border-radius:24px;
  font-weight:700;
  font-size:12px;  /* 14px → 12px //-edited */
  text-decoration:none;
  position:relative;
  overflow:hidden;
  transition:transform .25s,box-shadow .25s;
}
.contact::after{
  content:'';
  position:absolute;
  top:0;left:-100%;
  width:70%;height:100%;
  background:linear-gradient(120deg,transparent 0%,rgba(255,255,255,.55) 50%,transparent 100%);
  transform:skewX(-20deg);
  transition:left .45s;
}
.contact:hover{transform:translateY(-3px);box-shadow:0 0 12px rgba(212,175,55,.55)}
.contact:hover::after{left:130%}
</style>

<div id="subs-slim">
  <div id="slim-head">اشتركات شات نجد – اضغط للعرض</div>

  <div id="slim-body">
    <div class="item"><span class="badge">1</span><span class="name">ادمن كامل الصلاحيات + ( درع اسود هديه مدة شهر )</span><span class="price">500 ر.س</span><img src="https://www.njd.chat/sico/zvCFi1N2kj.gif"></div>
    <div class="item"><span class="badge">2</span><span class="name">ادمن اسود + ( ادمن تميز نجد هديه لمدة شهر )</span><span class="price">350 ر.س</span><img src="https://www.njd.chat/sico/zvqhLTljtX.gif"></div>
    <div class="item"><span class="badge">3</span><span class="name">ادمن تميز نجد + ( تاج ذهبي هديه لمدة شهر )</span><span class="price">200 ر.س</span><img src="https://www.njd.chat/sico/zsjUnTM2vK.gif"></div>
    <div class="item"><span class="badge">4</span><span class="name">تاج ذهبي +  ( 3 نجمات ذهبيه لمدة شهر )</span><span class="price">150 ر.س</span><img src="https://www.njd.chat/sico/z1c7jfb3qf10.gif"></div>
    <div class="item"><span class="badge">5</span><span class="name">تاج اسود +  ( 5 نجمات اسود هديه لمدة شهر )</span><span class="price">150 ر.س</span><img src="https://www.njd.chat/sico/z1c81hkk2r10.gif"></div>
    <div class="item"><span class="badge">6</span><span class="name">وكل اشتراك له روم صوتي خاص هديه من اداره الموقع</span><span class="price">هدية</span><img src="https://www.njd.chat/sico/z7tbj5tzEs.gif"></div>
    <div class="item"><span class="badge">7</span><span class="name">ومن اراد بنر لـ اسمه مع التصميم ولمدة شهرين</span><span class="price">100 ر.س</span><img src="https://www.njd.chat/sico/zs0F1tqr8G.gif"></div>

    <a class="contact" target="_blank"
       href="https://raw.githack.com/noorromas/njd.chat/main/index.html">تواصل مع الادارة اضغط هنا</a>
    <a class="contact" target="_blank"
       href="https://raw.githack.com/noorromas/nouraldeen/main/nouraldeen.html">تواصل مع المصمم اضغط هنا</a>
  </div>
</div>

</center>`).insertBefore('#d2');

$("#slim-head").on("click", function(){
  const body=$("#slim-body");
  body.stop(true,true);
  if(body.is(":visible")){
    body.slideUp(220, ()=> body.removeClass("show"));
  }else{
    body.slideDown(220, ()=> body.addClass("show"));
  }
});



$("style").last().append(`
#users .uzr.nour .fitimg.u-pic {
border-radius: 100px !important;
margin-top: 12px !important;
height: 55px !important;
margin-left: 9px !important;
width: 55px;
margin-bottom: 13px;
margin-right: 10px;
box-shadow: 0 0 0px rgb(255, 255, 255), inset 0 0 10px rgb(0, 0, 0), 0 0 0 0px #000;
}
#users .uzr.nour .d-flex.dots {
  margin-top: 7px !important;
  margin-left: 5px;
}
#users .uzr.nour .u-msg {
  margin-left: 10px;
  -webkit-background-clip: text;
  padding: 1px !important;
  font-size: 89% !important;
  -webkit-text-fill-color: #0000;
  background-image: url(https://i.ibb.co/JzgnvW8/61.gif);
  color: transparent !important;
  background-size: 90% 100%;
}
#users .uzr.nour .ustat {
width: 12px !important;
border-radius: 50px !important;
height: 12px !important;
min-height: 0% !important;
z-index: 0 !important;
}
#users .uzr.nour span.uhash {
  margin-right: 324px;
  margin-top: 24px;
  margin-left: 0px;
}
#users .uzr.nour img.co {
  transform: rotate(90deg);
  margin-top: -60px !important;
  margin-right: 282px;

}
#users .uzr.nour .c-flex.fr {
  margin-left: -4px!important;
  float: left;
}
#users .uzr.nour .d-flex.fl {
  padding-right: 0px !important;
}
#users .uzr.nour .u-topic {
  margin-left: 5px;
}
#users .uzr.nour .nour_star1 {
width: 90px;
margin-top: -11px;
margin-left: -21px;
}


`);
var l_itvnour=setInterval(function(){
    if(myid!=null){
        clearInterval(l_itvnour);
        $("#users .uzr:contains('معكاز')").addClass('nour');
		$("#users .uzr.nour span.u-topic").after('<img id="mystory1" class="My_vedio1" title="ستوري" style="float: right;width: 20px;margin-top: 0px;margin-right: 5px;cursor: pointer;" src="https://i.ibb.co/47VS4nY/image.png">');
        $("#users .uzr.nour span.uhash, #users .uzr.nour img.co").hide(); 
        $("#upro").before('<div id="movon1" onclick="$(this).hide().html(``);" class="moveon1" style="display:none;width:100%;height:100%;z-index:999999;position: fixed;left: 0px;top: 0px;background-color: rgba(0, 0, 0, 0.6);">');
        $("div#users .uzr.nour .My_vedio1").click(function(){
        $("#movon1").show();
        $('#movon1').addClass('athb1');
        $("#movon1").before('<div class="modal-dialog fr break" style="height: 338px; max-width: 340px; min-width: 300px; min-height: 599px;overflow: visible;margin-top:40px;"></div>');
        $("#movon1").append('<div style="max-width: 340px; min-width: 300px; color:white; width: 338px; float: right;" class="modal-header label-primary"><span class="pull-right clickable badge"><i class="fa fa-times"></i></span><label style="margin:1px; float: right;" > My vedio </label></div>');  
        $("#movon1").append('<iframe id="ifr_mov1" style="max-width: 340px;min-width: 300px;right: 0; top: 35px; left: auto;" class="modal in" role="dialog" style="z-index: 2100; display: none; style="max-width:240px;" src="https://www.youtube.com/embed/nfTocUD0puI" allowfullscreen="" width="338" height="490" frameborder="0"></iframe>');
        $("#ifr_mov1").show(function(){
        $("#upro").modal("hide");
    } ); 
});
    }
}, 10000);






$("style").last().append(`
#users .uzr.saad1 .fitimg.u-pic {
border-radius: 100px !important;
margin-top: 12px !important;
height: 55px !important;
margin-left: 9px !important;
width: 55px;
margin-bottom: 13px;
margin-right: 10px;
box-shadow: 0 0 0px rgb(255, 255, 255), inset 0 0 10px rgb(0, 0, 0), 0 0 0 0px #000;
}
#users .uzr.saad1 .d-flex.dots {
  margin-top: 7px !important;
  margin-left: 5px;
}
#users .uzr.saad1 .u-msg {
  margin-left: 10px;
  -webkit-background-clip: text;
  padding: 1px !important;
  font-size: 89% !important;
  -webkit-text-fill-color: #0000;
  background-image: url(https://i.ibb.co/JzgnvW8/61.gif);
  color: transparent !important;
  background-size: 90% 100%;
}
#users .uzr.saad1 .ustat {
width: 12px !important;
border-radius: 50px !important;
height: 12px !important;
min-height: 0% !important;
z-index: 0 !important;
}
#users .uzr.saad1 span.uhash {
  margin-right: 324px;
  margin-top: 24px;
  margin-left: 0px;
}
#users .uzr.saad1 img.co {
  transform: rotate(90deg);
  margin-top: -60px !important;
  margin-right: 282px;
}

#users .uzr.saad1 .c-flex.fr {
  margin-left: -4px!important;
  float: left;
}
#users .uzr.saad1 .d-flex.fl {
  padding-right: 0px !important;
}
#users .uzr.saad1 .u-topic {
  margin-left: 5px;
}
#users .uzr.saad1 .saad_star1 {
width: 90px;
margin-top: -11px;
margin-left: -19px;
}


`);
var l_itvsaad=setInterval(function(){
    if(myid!=null){
        clearInterval(l_itvsaad);
        $("#users .uzr:contains('k7!lan')").addClass('saad1');
        $("#users .uzr.saad1 .fitimg.u-pic").append('<img class="saad_star1" src="https://up6.cc/2023/02/167585425188951.png">');
		$("#users .uzr.saad1 span.u-topic").after('<img id="mystory1" class="My_vedio1" title="ستوري" style="float: right;width: 20px;margin-top: 0px;margin-right: 5px;cursor: pointer;" src="https://i.ibb.co/47VS4nY/image.png">');
        $("#users .uzr.saad1 span.uhash, #users .uzr.saad1 img.co").hide(); 
        $("#upro").before('<div id="movon1" onclick="$(this).hide().html(``);" class="moveon1" style="display:none;width:100%;height:100%;z-index:999999;position: fixed;left: 0px;top: 0px;background-color: rgba(0, 0, 0, 0.6);">');
        $("div#users .uzr.saad1 .My_vedio1").click(function(){
        $("#movon1").show();
        $('#movon1').addClass('athb1');
        $("#movon1").before('<div class="modal-dialog fr break" style="height: 338px; max-width: 340px; min-width: 300px; min-height: 599px;overflow: visible;margin-top:40px;"></div>');
        $("#movon1").append('<div style="max-width: 340px; min-width: 300px; color:white; width: 338px; float: right;" class="modal-header label-primary"><span class="pull-right clickable badge"><i class="fa fa-times"></i></span><label style="margin:1px; float: right;" > My vedio </label></div>');  
        $("#movon1").append('<iframe id="ifr_mov1" style="max-width: 340px;min-width: 300px;right: 0; top: 35px; left: auto;" class="modal in" role="dialog" style="z-index: 2100; display: none; style="max-width:240px;" src="https://www.youtube.com/embed/nfTocUD0puI" allowfullscreen="" width="338" height="490" frameborder="0"></iframe>');
        $("#ifr_mov1").show(function(){
        $("#upro").modal("hide");
    } ); 
});
    }
}, 10000);
