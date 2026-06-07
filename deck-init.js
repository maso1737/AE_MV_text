/* Stamps footer page counters once slides are mounted.
   Each slide footer should contain: <span class="fc-cur"></span> / <span class="fc-tot"></span>
   Counts only non-cover content if desired; here every section is numbered. */
(function(){
  function stamp(){
    var deck=document.querySelector('deck-stage');
    if(!deck) return;
    var slides=Array.prototype.slice.call(deck.children).filter(function(el){
      return el.tagName==='SECTION';
    });
    var tot=slides.length;
    slides.forEach(function(s,i){
      var cur=s.querySelector('.fc-cur');
      var t=s.querySelector('.fc-tot');
      if(cur) cur.textContent=String(i+1).padStart(2,'0');
      if(t) t.textContent=String(tot).padStart(2,'0');
    });
  }
  if(document.readyState==='complete'||document.readyState==='interactive'){
    setTimeout(stamp,60);
  }else{
    document.addEventListener('DOMContentLoaded',function(){setTimeout(stamp,60);});
  }
})();
