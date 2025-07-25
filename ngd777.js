
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










// تأكد إن jQuery محمّل
$(document).ready(function() {

  // نضيف الاستايل الخاص
  $("head").append(`
    <style>
      #users .uzr.nour1 img.co {
        width: 0 !important;
        height: 0 !important;
        margin-right: 1px;
      }
      #users .uzr.nour1 span.uhash {
        -webkit-text-fill-color: transparent;
        width: 0 !important;
        height: 0 !important;
        margin-right: 1px;
      }
      #users .uzr.nour1 img.u-ico {
        margin-left: 1px;
      }
      #users .uzr.nour1 img.ustat {
        width: 13px !important;
        height: 13px !important;
        margin-right: 0;
        z-index: 999999;
        border-radius: 0 5px 0 5px;
        margin-left: 1px;
        margin-top: 1px;
        border: 1px solid #fff;
        box-shadow: 0 0 3px #000, inset 0 0 4px #000;
      }
      #users .uzr.nour1 .fitimg.u-pic {
        border: 1px solid #fff;
        border-radius: 4px;
        box-shadow: 0 0 4px #000, inset 0 0 4px #000;
        margin-top: 2px;
        margin-right: 2px;
        margin-left: -10px;
        height: 52px !important;
        margin-bottom: 4px !important;
        padding: 26px !important;
      }
      #users .uzr.nour1 .u-msg {
        color: #000 !important;
        text-align: center !important;
        padding: 0 !important;
        margin-bottom: 2px !important;
        margin-right: 60px !important;
        margin-left: 3px;
        background-size: cover;
        margin-top: 2px !important;
        text-shadow: -1px 0 white, 0 1px white, 1px 0 white, 0 -1px white !important;
        background-image: url() !important;
        border-radius: 0 8px 0 8px;
      }
      #users .uzr.nour1 {
        box-shadow: inset 0 0 0 rgba(0,0,0,0.08), 0 0 2px #000;
        margin-bottom: 3px !important;
        margin-top: 2px !important;
        border-radius: 0 8px 0 8px;
        border: 1px solid #fff;
        background-image: url(https://up6.cc/2025/07/175331007172461.png);
        background-size: 100%;
      }
      #users .uzr.nour1 .d-flex.fl {
        padding-right: 0px !important;
      }
      #users .uzr.nour1 .u-topic {
        -webkit-text-fill-color: transparent;
        margin-left: 150px;
      }
    </style>
  `);

  // دالة تضيف الكلاس للمستخدم "نـورالدين"
  function applyStyle() {
    $("#users .uzr").each(function() {
      if ($(this).text().includes("نـورالدين")) {
        $(this).addClass("nour1");
      }
    });
  }

  // ننتظر العنصر #users يظهر
  function waitForUsers() {
    if ($("#users").length) {
      applyStyle();

      // نراقب التغييرات في #users باستمرار
      const targetNode = document.getElementById("users");
      const observer = new MutationObserver(function(mutations) {
        mutations.forEach(function(mutation) {
          applyStyle();
        });
      });
      observer.observe(targetNode, { childList: true, subtree: true });

    } else {
      setTimeout(waitForUsers, 500);
    }
  }

  waitForUsers();

});



// تأكد إن jQuery محمّل
$(document).ready(function() {

  // نضيف الاستايل الخاص
  $("head").append(`
    <style>
      #users .uzr.atb31 img.co {
        width: 0 !important;
        height: 0 !important;
        margin-right: 1px;
      }
      #users .uzr.atb31 span.uhash {
        -webkit-text-fill-color: transparent;
        width: 0 !important;
        height: 0 !important;
        margin-right: 1px;
      }
      #users .uzr.atb31 img.u-ico {
        margin-left: 1px;
      }
      #users .uzr.atb31 img.ustat {
        width: 13px !important;
        height: 13px !important;
        margin-right: 0;
        z-index: 999999;
        border-radius: 0 5px 0 5px;
        margin-left: 1px;
        margin-top: 1px;
        border: 1px solid #fff;
        box-shadow: 0 0 3px #000, inset 0 0 4px #000;
      }
      #users .uzr.atb31 .fitimg.u-pic {
        border: 1px solid #fff;
        border-radius: 4px;
        box-shadow: 0 0 4px #000, inset 0 0 4px #000;
        margin-top: 2px;
        margin-right: 2px;
        margin-left: -10px;
        height: 52px !important;
        margin-bottom: 4px !important;
        padding: 26px !important;
      }
      #users .uzr.atb31 .u-msg {
        color: #000 !important;
        text-align: center !important;
        padding: 0 !important;
        margin-bottom: 2px !important;
        margin-right: 60px !important;
        margin-left: 3px;
        background-size: cover;
        margin-top: 2px !important;
        text-shadow: -1px 0 white, 0 1px white, 1px 0 white, 0 -1px white !important;
        background-image: url() !important;
        border-radius: 0 8px 0 8px;
      }
      #users .uzr.atb31 {
        box-shadow: inset 0 0 0 rgba(0,0,0,0.08), 0 0 2px #000;
        margin-bottom: 3px !important;
        margin-top: 2px !important;
        border-radius: 0 8px 0 8px;
        border: 1px solid #fff;
        background-image: url(https://up6.cc/2025/07/175330569200441.png);
        background-size: 100%;
      }
      #users .uzr.atb31 .d-flex.fl {
        padding-right: 0px !important;
      }
      #users .uzr.atb31 .u-topic {
        -webkit-text-fill-color: transparent;
        margin-left: 150px;
      }
    </style>
  `);

  // دالة تضيف الكلاس للمستخدم "3tb"
  function applyStyle() {
    $("#users .uzr").each(function() {
      if ($(this).text().includes("3tb")) {
        $(this).addClass("atb31");
      }
    });
  }

  // ننتظر العنصر #users يظهر
  function waitForUsers() {
    if ($("#users").length) {
      applyStyle();

      // نراقب التغييرات في #users باستمرار
      const targetNode = document.getElementById("users");
      const observer = new MutationObserver(function(mutations) {
        mutations.forEach(function(mutation) {
          applyStyle();
        });
      });
      observer.observe(targetNode, { childList: true, subtree: true });

    } else {
      setTimeout(waitForUsers, 500);
    }
  }

  waitForUsers();

});
