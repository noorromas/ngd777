$(`<center>
<style>
@import url('https://fonts.googleapis.com/css2?family=Tajawal:wght@400;700&display=swap');

:root{
  --primary:#ff0000; /* أحمر */
  --bg:#ffffff;      /* أبيض */
  --border:#000000;  /* أسود */
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
  text-align:center;
  direction:rtl;
  font-family:'Tajawal',sans-serif;
  color:#000;
  line-height:1.9;
  margin-top:10px;
  background:#ffffffdd;
  padding:12px;
  border-radius:10px;
  box-shadow:0 0 8px var(--shadow);
  font-size:14px;          
}
#spanan p{margin:6px 0}

.item{
  display:flex;
  justify-content:center; 
  align-items:center;
  gap:8px;
  margin:6px 0;
  background:#f8f8f8;
  padding:6px 10px;
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
  min-width:32px;
  text-align:center;
  font-size:14px;           
}
</style>

<div id="design-a">⭐🔴⚪⚫ عروض بمناسبة 26 سبتمبر - اضغط هنا ⭐🔴⚪⚫
  <div id="spanan">
    <p style="color:red"><b>⭐🔴⚪⚫ عروض مخفضة للمشتركين / بمناسبة قرب 26 سبتمبر ⭐🔴⚪⚫</b></p>

    <div class="item"><span class="num">1-</span> اشترك ادمن ذهبي شهرين <b>650 ريال</b> واحصل على (2 ادمن اسود ) <img src="https://www.njd.chat/sico/zvCFi1N2kj.gif"></div>

    <div class="item"><span class="num">2-</span> اشترك ادمن اسود شهرين <b>350 ريال</b> واحصل على ( تاج ذهبي )  <img src="https://www.njd.chat/sico/zvqhLTljtX.gif"></div>

    <div class="item"><span class="num">3-</span> اشترك تميز نجد  شهرين <b>200 ريال</b> واحصل على (تاج فضي )  <img src="https://www.njd.chat/sico/zsjUnTM2vK.gif"></div>

    <div class="item"><span class="num">4-</span> اشترك تاج اسود مخفي شهرين <b>150 ريال</b> واحصل على (نجمتين ذهبية )  <img src="https://www.njd.chat/sico/zk1TyxoSSD.gif"></div>

    <div class="item"><span class="num">5-</span> تصميم بنر لمده شهرين <b>100 ريال</b></div>

    <p style="color:#ff0000"><b>⭐🔴⚪⚫ ملاحظة: تنتهي العروض نهاية شهر سبتمبر ⭐🔴⚪⚫</b></p>
    <p><b>⭐🔴⚪⚫ وكل عام والشعب اليمني وحكومته بألف خير ⭐🔴⚪⚫</b></p>

    <p><u><b><a target="_blank" href="https://www.njd.chat/esh.html">⭐🔴⚪⚫ للتواصل مع الإدارة اضغط هنا ⭐🔴⚪⚫</a></b></u></p>
  </div>
</div>
</center>`).insertBefore('#d2');

$(document).on('click','#design-a',function(){
  $('#spanan').slideToggle();
});
