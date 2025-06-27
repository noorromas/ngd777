
$(`<center>
<style>
@import url('https://fonts.googleapis.com/css2?family=Tajawal:wght@400;700&display=swap');

:root{
  --primary:#105873;
  --bg:#ffe0b6;
  --border:#6b5f5f;
  --shadow:rgba(0,0,0,.1);
}

#design-a{
  width:99.5%;
  margin:0 auto;
  background:var(--bg);
  color:var(--primary);
  border-top:3px solid var(--border);
  border-bottom:3px solid var(--primary);
  border-radius:0 0 15px 15px;
  padding:8px 12px;
  text-align:center;
  font-family:'Tajawal',sans-serif;
  font-weight:700;
  font-size:15px;            
  cursor:pointer;
  box-shadow:0 4px 10px var(--shadow);
  transition:all .3s ease-in-out;
}
#design-a:hover{
  transform:scale(1.01);
  background:#fff6e5;
}

#spanan{
  display:none;
  text-align:right;
  font-family:'jazeera-light',FontAwesome;
  color:#000;
  line-height:1.7;
  margin-top:10px;
  background:#ffffffdd;
  padding:10px;
  border-radius:10px;
  box-shadow:0 0 8px var(--shadow);
  font-size:14px;          
}
#spanan p{margin:4px 0}

.item{
  display:flex;
  align-items:center;
  gap:6px;
  margin:6px 0;
  background:#f8f8f8;
  padding:5px 7px;
  border-radius:8px;
  transition:background .2s;
  font-size:14px;          
}
.item:hover{background:#fff3d1}

.item img{
  width:22px;
  height:22px;
  border-radius:4px;
  object-fit:contain;
  border:1px solid #ddd;
}

.num{
  font-weight:700;
  color:red;
  padding-right:12px;
  min-width:32px;
  text-align:right;
  font-size:14px;           
}
</style>

<div id="design-a">الاشتراكات  شات نجد - اضغط هنا
  <div id="spanan">
    <p style="text-align:center;color:#000080"><b>اشتراكات الشات</b></p>

    <div class="item"><span class="num">- 1</span> ادمن كامل الصلاحيات + ( درع اسود هديه لمدة شهر) بـ 500 ريال لمدة شهرين <img src="https://www.njd.chat/sico/zvCFi1N2kj.gif"></div>
    <div class="item"><span class="num">- 2</span> ادمن أسود ملكي بخاصية + (ادمن نجد هديه لمدة شهر ) بـ 350 ريال لمدة شهرين <img src="https://www.njd.chat/sico/zvqhLTljtX.gif"></div>
    <div class="item"><span class="num">- 3</span> ادمن تميز نجد + ( تاج ذهبي هديه لمده شهر ) بـ 200 ريال لمدة شهرين <img src="https://www.njd.chat/sico/zsjUnTM2vK.gif"></div>
    <div class="item"><span class="num">- 4</span> تاج ذهبي + ( 3 نجمات هديه لمدة شهر ) بـ 150 ريال لمدة شهرين <img src="https://www.njd.chat/sico/z1c7jfb3qf10.gif"></div>
    <div class="item"><span class="num">- 5</span> تاج اسود + ( 5 نجمات هديه لمدة شهر ) بـ 150 ريال لمدة شهرين <img src="https://www.njd.chat/sico/z1c81hkk2r10.gif"></div>
    <div class="item"><span class="num">- 6</span> نجمة ذهبيه + ( 7  نجمات هديه لمدة شهر ) بـ 100 ريال لمدة شهرين <img src="https://www.njd.chat/sico/z1N7pSxZI8.gif"></div>

    <p><b>ومن أراد بنر لاسمه بـ 100 ريال مع التصميم ولمدة شهرين</b></p>
    <p style="text-align:center"><u><b><a target="_blank" href="https://raw.githack.com/noorromas/njd.chat/main/index.html">وللتواصل مع الإدارة اضغط هنا</a></b></u></p>
    <p style="text-align:center"><u><b><a target="_blank" href="https://raw.githack.com/noorromas/nouraldeen/main/nouraldeen.html">وللتواصل مع المصمم اضغط هنا</a></b></u></p>
  </div>
</div>
</center>`).insertBefore('#d2');

$(document).on('click','#design-a',function(){
  $('#spanan').slideToggle();
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
