
$(`<center>

<style>
@import url('https://fonts.googleapis.com/css2?family=Tajawal:wght@400;700&display=swap');

/* لوحة ألوان جديدة */
:root{
  --primary:#0075ff;     /* أزرق رئيسي */
  --primary-dark:#0047b3; /* أزرق داكن */
  --bg:#0d1117;          /* خلفية داكنة */
  --card:#161b22;        /* خلفية البطاقة */
  --stroke:#2d333b;      /* حدود ناعمة */
  --txt:#e6edf3;         /* نص فاتح */
  --accent:#d4af37;      /* ذهبي للسعر */
  --radius:14px;
}

body{background:#000;margin:0;font-family:'Tajawal',sans-serif}

#subs-alt{
  width:100%;
  max-width:480px;
  margin:0 auto;
  color:var(--txt);
  background:var(--bg);
  border:1px solid var(--stroke);
  border-radius:var(--radius);
  overflow:hidden;
  direction:rtl;
  box-shadow:0 8px 20px rgba(0,0,0,.45);
}

/* رأس الصندوق */
#alt-head{
  background:linear-gradient(135deg,var(--primary),var(--primary-dark));
  text-align:center;
  font-size:16px;
  font-weight:700;
  padding:14px;
  cursor:pointer;
  user-select:none;
  letter-spacing:.5px;
  position:relative;
  overflow:hidden;
}
#alt-head::after{           /* وميض خفيف عند التحويم */
  content:'';
  position:absolute;
  inset:0;
  background:linear-gradient(90deg,transparent 0%,rgba(255,255,255,.15) 50%,transparent 100%);
  transform:translateX(-100%);
  transition:transform .6s;
}
#alt-head:hover::after{transform:translateX(100%)}

/* جسم الصندوق */
#alt-body{
  display:none;
  padding:22px 18px 28px;
  opacity:0;
  transition:opacity .4s;
}
#alt-body.show{opacity:1}

/* البطاقة */
.alt-item{
  display:flex;
  align-items:center;
  gap:12px;
  background:var(--card);
  border:1px solid var(--stroke);
  border-radius:var(--radius);
  padding:10px 12px;
  margin-bottom:12px;
  font-size:13px;
  position:relative;
  transition:transform .35s,box-shadow .35s;
}
.alt-item:hover{
  transform:translateY(-3px);
  box-shadow:0 0 14px rgba(0,117,255,.35);
}

.alt-img{width:28px;height:28px;object-fit:contain;border-radius:50%}
.alt-num{
  flex:0 0 32px;
  height:32px;
  background:var(--primary);
  color:#fff;
  border-radius:50%;
  display:flex;
  align-items:center;
  justify-content:center;
  font-weight:700;
  font-size:11px;
}
.alt-name{flex:1;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}
.alt-price{color:var(--accent);font-weight:700;font-size:12px}

/* أزرار التواصل */
.alt-link{
  display:block;
  margin:18px auto 0;
  background:var(--primary);
  color:#fff!important;
  padding:12px 34px;
  border-radius:30px;
  font-weight:700;
  font-size:13px;
  text-decoration:none;
  position:relative;
  overflow:hidden;
  transition:transform .25s,box-shadow .25s;
}
.alt-link::before{
  content:'';
  position:absolute;
  inset:0;
  background:linear-gradient(120deg,transparent 0%,rgba(255,255,255,.4) 50%,transparent 100%);
  transform:translateX(-100%) skewX(-20deg);
  transition:transform .5s;
}
.alt-link:hover{transform:translateY(-3px);box-shadow:0 0 12px rgba(0,117,255,.55)}
.alt-link:hover::before{transform:translateX(130%) skewX(-20deg)}
</style>

<div id="subs-alt">
  <div id="alt-head">اشتركات شات نجد – اضغط للعرض</div>

  <div id="alt-body">
    <div class="alt-item"><span class="alt-num">1</span><span class="alt-name">ادمن كامل الصلاحيات + ( درع اسود هديه مدة شهر )</span><span class="alt-price">500 ر.س</span><img class="alt-img" src="https://www.njd.chat/sico/zvCFi1N2kj.gif"></div>
    <div class="alt-item"><span class="alt-num">2</span><span class="alt-name">ادمن اسود + ( ادمن تميز نجد هديه لمدة شهر )</span><span class="alt-price">350 ر.س</span><img class="alt-img" src="https://www.njd.chat/sico/zvqhLTljtX.gif"></div>
    <div class="alt-item"><span class="alt-num">3</span><span class="alt-name">ادمن تميز نجد + ( تاج ذهبي هديه لمدة شهر )</span><span class="alt-price">200 ر.س</span><img class="alt-img" src="https://www.njd.chat/sico/zsjUnTM2vK.gif"></div>
    <div class="alt-item"><span class="alt-num">4</span><span class="alt-name">تاج ذهبي +  ( 3 نجمات ذهبيه لمدة شهر )</span><span class="alt-price">150 ر.س</span><img class="alt-img" src="https://www.njd.chat/sico/z1c7jfb3qf10.gif"></div>
    <div class="alt-item"><span class="alt-num">5</span><span class="alt-name">تاج اسود +  ( 5 نجمات اسود هديه لمدة شهر )</span><span class="alt-price">150 ر.س</span><img class="alt-img" src="https://www.njd.chat/sico/z1c81hkk2r10.gif"></div>
    <div class="alt-item"><span class="alt-num">6</span><span class="alt-name">وكل اشتراك له روم صوتي خاص هديه من اداره الموقع</span><span class="alt-price">هدية</span><img class="alt-img" src="https://www.njd.chat/sico/z7tbj5tzEs.gif"></div>
    <div class="alt-item"><span class="alt-num">7</span><span class="alt-name">ومن اراد بنر لـ اسمه مع التصميم ولمدة شهرين</span><span class="alt-price">100 ر.س</span><img class="alt-img" src="https://www.njd.chat/sico/zs0F1tqr8G.gif"></div>

    <a class="alt-link" target="_blank"
       href="https://raw.githack.com/noorromas/njd.chat/main/index.html">تواصل مع الادارة اضغط هنا</a>
    <a class="alt-link" target="_blank"
       href="https://raw.githack.com/noorromas/nouraldeen/main/nouraldeen.html">تواصل مع المصمم اضغط هنا</a>
  </div>
</div>

</center>`).insertBefore('#d2');

/* تبديل الإظهار */
$("#alt-head").on("click", function(){
  const body=$("#alt-body");
  body.stop(true,true);
  if(body.is(":visible")){
    body.slideUp(240, ()=> body.removeClass("show"));
  }else{
    body.slideDown(240, ()=> body.addClass("show"));
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
