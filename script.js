document.addEventListener("DOMContentLoaded",()=>{
  const hero = document.querySelector(".hero h1");
  hero.style.opacity=0;
  hero.style.transform = "translateY(10px)";
  setTimeout(()=>{
    hero.style.transition = "800ms";
    hero.style.opacity=1;
    hero.style.transform = "translateY(0)";
  },150);
  // Smooth scroll for nav links
  document.querySelectorAll('a[href^="#"]').forEach(a=>{
    a.addEventListener("click",e=>{
      const id=a.getAttribute("href");
      const el=document.querySelector(id);
      if(el){ e.preventDefault(); el.scrollIntoView({behavior:"smooth"}); }
    });
  });
});
