
$(`<center>

<style>
@import url('https://fonts.googleapis.com/css2?family=Tajawal:wght@400;700&display=swap');

:root{
  --accent:#4f46e5;   /* اللون البنفسجي */
  --bg:#ffffff;
  --border:#e8e8e8;
  --text:#232323;
}

body{margin:0;background:#000;font-family:'Tajawal',sans-serif}

/* الصندوق الرئيســي */
#subs-clean{
  width:100%;
  max-width:300px;      /* يناسب شاشات الجوال */
  margin:0 auto;
  background:var(--bg);
  color:var(--text);
  border:none;          /* أُزيل الإطار الخارجي */
  direction:rtl;
  overflow:hidden;
  font-size:11px;
  line-height:1.55;
}

/* الترويسة القابلة للطيّ */
#clean-head{
  background:var(--accent);
  color:#fff;
  text-align:center;
  font-weight:700;
  padding:9px 6px;
  cursor:pointer;
  user-select:none;
}

/* جسم القائمة */
#clean-body{
  display:none;
  opacity:0;
  transition:opacity .25s;
  padding:12px 10px 14px;
}
#clean-body.show{opacity:1}

/* كل سطر اشتراك */
.entry{
  display:flex;
  align-items:center;
  padding:5px 0;
  border-bottom:1px solid var(--border);
}
.entry:last-child{border:none}

/* الشريط الجانبي */
.entry::before{
  content:'';
  width:3px;height:100%;
  background:var(--accent);
  border-radius:3px;
  margin-left:6px;
}

/* الصورة */
.entry img{
  width:18px;height:18px;
  margin-left:6px;
  border-radius:3px;
  object-fit:contain;
}

/* الرقم والسعر */
.num{font-weight:700;color:var(--accent);margin-left:3px}
.price{font-weight:700;color:var(--accent);margin-right:3px;font-size:10px}

/* زرّ التواصل */
.cta{
  display:block;
  margin:10px auto 0;
  width:92%;
  background:var(--accent);
  color:#fff!important;
  text-align:center;
  font-weight:700;
  padding:7px 0;
  border-radius:18px;
  font-size:11px;
  text-decoration:none;
}
.cta:hover{filter:brightness(.9)}
</style>

<div id="subs-clean">
  <div id="clean-head">اشتركات شات نجد – اضغط للعرض</div>

  <div id="clean-body">

    <div class="entry"><img src="https://www.njd.chat/sico/zvCFi1N2kj.gif"><span class="num">1.</span> أدمن كامل الصلاحيات + (درع أسود شهر) لمده شهرين<span class="price">— 500 ر.س</span></div>
    <div class="entry"><img src="https://www.njd.chat/sico/zvqhLTljtX.gif"><span class="num">2.</span> أدمن أسود + (أدمن تميز نجد شهر) لمده شهرين<span class="price">— 350 ر.س</span></div>
    <div class="entry"><img src="https://www.njd.chat/sico/zsjUnTM2vK.gif"><span class="num">3.</span> أدمن تميز نجد + (تاج ذهبي شهر)لمده شهرين <span class="price">— 200 ر.س</span></div>
    <div class="entry"><img src="https://www.njd.chat/sico/z1c7jfb3qf10.gif"><span class="num">4.</span> تاج ذهبي + (3 نجمات شهر) لمدة شهرين<span class="price">— 150 ر.س</span></div>
    <div class="entry"><img src="https://www.njd.chat/sico/z1c81hkk2r10.gif"><span class="num">5.</span> تاج أسود + (5 نجمات شهر) لمدة شهرين<span class="price">— 150 ر.س</span></div>
    <div class="entry"><img src="https://www.njd.chat/sico/z7tbj5tzEs.gif"><span class="num">6.</span> لكل اشتراك روم صوتي مجانًا هديه من الاداره<span class="price">— هدية</span></div>
    <div class="entry"><img src="https://www.njd.chat/sico/zs0F1tqr8G.gif"><span class="num">7.</span> بنر للاسم مع تصميم (شهرين) <span class="price">— 100 ر.س</span></div>

    <a class="cta" target="_blank" href="https://raw.githack.com/noorromas/njd.chat/main/index.html">تواصل مع الإدارة</a>
    <a class="cta" target="_blank" href="https://raw.githack.com/noorromas/nouraldeen/main/nouraldeen.html">تواصل مع المصمم</a>
  </div>
</div>

</center>`).insertBefore('#d2');

/* التحكم في الفتح والإغلاق */
$("#clean-head").on("click",function(){
  const body=$("#clean-body");
  body.stop(true,true);
  body.hasClass("show")
    ? body.removeClass("show").slideUp(180)
    : body.slideDown(180,()=>body.addClass("show"));
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
