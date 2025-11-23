// Dark mode toggle + save preference
(function(){
  const toggle = document.getElementById('darkToggle');
  const root = document.documentElement;
  const saved = localStorage.getItem('theme');
  if(saved === 'dark') document.documentElement.setAttribute('data-theme','dark');
  const updateIcon = ()=>{ toggle.textContent = document.documentElement.getAttribute('data-theme')==='dark' ? '☀️' : '🌙' };
  updateIcon();
  toggle.addEventListener('click', ()=>{
    if(document.documentElement.getAttribute('data-theme')==='dark'){
      document.documentElement.removeAttribute('data-theme');
      localStorage.setItem('theme','light');
    } else {
      document.documentElement.setAttribute('data-theme','dark');
      localStorage.setItem('theme','dark');
    }
    updateIcon();
  });
})();

// Mobile menu
(function(){
  const btn = document.getElementById('menuBtn');
  const nav = document.getElementById('nav');
  btn.addEventListener('click', ()=>{ nav.classList.toggle('open'); });
})();

// Smooth anchor scrolling
document.querySelectorAll('a[href^="#"]').forEach(a=>{
  a.addEventListener('click', function(e){
    const href = this.getAttribute('href');
    if(href.length>1){ e.preventDefault(); document.querySelector(href).scrollIntoView({behavior:'smooth',block:'start'}); }
    // close mobile nav if open
    const nav = document.getElementById('nav'); if(nav.classList.contains('open')) nav.classList.remove('open');
  });
});

// Contact form sends mailto
document.getElementById('contactForm').addEventListener('submit', function(e){
  e.preventDefault();
  const name = this.name.value.trim();
  const email = this.email.value.trim();
  const message = this.message.value.trim();
  if(!name||!email||!message){ alert('Please fill all fields.'); return; }
  const subject = encodeURIComponent('Portfolio message from ' + name);
  const body = encodeURIComponent('Name: '+name+'\nEmail: '+email+'\n\n'+message);
  window.location.href = `mailto:patilvishal6139@gmail.com?subject=${subject}&body=${body}`;
});

// Intersection Observer for reveal animations (Option C)
(function(){
  const obs = new IntersectionObserver((entries)=>{
    entries.forEach(entry=>{
      if(entry.isIntersecting){ entry.target.classList.add('visible'); obs.unobserve(entry.target); }
    });
  }, {threshold: 0.12});
  document.querySelectorAll('.reveal').forEach(el=>obs.observe(el));
})();