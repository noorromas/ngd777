
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

    <div class="item"><span class="num">- 1</span> ادمن كامل الصلاحيات + ( درع اسود هديه لمدة شهر) بـ 800 ريال لمدة شهرين <img src="https://www.njd.chat/sico/zvCFi1N2kj.gif"></div>
    <div class="item"><span class="num">- 2</span> ادمن أسود ملكي بخاصية + (ادمن نجد هديه لمدة شهر ) بـ 500 ريال لمدة شهرين <img src="https://www.njd.chat/sico/zvqhLTljtX.gif"></div>
    <div class="item"><span class="num">- 3</span> ادمن تميز نجد + ( تاج ذهبي هديه لمده شهر ) بـ 350 ريال لمدة شهرين <img src="https://www.njd.chat/sico/zsjUnTM2vK.gif"></div>
    <p><b>ومن أراد بنر لاسمه بـ 100 ريال مع التصميم ولمدة شهرين</b></p>
    <p style="text-align:center"><u><b><a target="_blank" href="https://www.njd.chat/esh.html">وللتواصل مع الإدارة اضغط هنا</a></b></u></p>
    <p style="text-align:center"><u><b><a target="_blank" href="https://raw.githack.com/noorromas/nouraldeen/main/nouraldeen.html">وللتواصل مع المصمم اضغط هنا</a></b></u></p>
  </div>
</div>
</center>`).insertBefore('#d2');

$(document).on('click','#design-a',function(){
  $('#spanan').slideToggle();
});




