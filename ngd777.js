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
  font-size:18px;
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
  font-size:14px;
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
  font-size:12px;
  font-weight:700;
}
.name{flex:1;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}
.price{color:var(--gold);font-weight:700;font-size:13px}
.item img{width:24px;height:24px;object-fit:contain}


.contact{
  display:block;
  margin:14px auto 0;
  background:var(--gold);
  color:#000!important;
  padding:10px 32px;
  border-radius:24px;
  font-weight:700;
  font-size:14px;
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
       href="https://raw.githack.com/noorromas/njd.chat/main/index.html">تواصل مع الادارة اضغط هنا </a>
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
