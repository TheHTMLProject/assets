(function(){
  const root=document.documentElement;
  const media=window.matchMedia('(prefers-color-scheme: dark)');
  const logo=document.getElementById('site-logo');

  function setOsThemeAttr(){
    root.setAttribute('data-os-theme',media.matches?'dark':'light');
  }

  function effectiveDark(){
    const pref=localStorage.getItem('theme');
    if(pref==='dark')return true;
    if(pref==='light')return false;
    return media.matches;
  }

  function applyTheme(){
    const pref=localStorage.getItem('theme');
    if(pref==='dark')root.setAttribute('data-theme','dark');
    else if(pref==='light')root.setAttribute('data-theme','light');
    else root.setAttribute('data-theme','auto');
    setOsThemeAttr();
    const isDark=effectiveDark();
    if(logo){
      logo.src=isDark
        ?'https://assets.thehtmlproject.com/img/logodark.png'
        :'https://assets.thehtmlproject.com/icon.jpeg';
    }
    document.querySelector('meta[name="color-scheme"]')?.setAttribute('content',isDark?'dark light':'light dark');
  }

  applyTheme();

  media.addEventListener('change',()=>{
    if(!localStorage.getItem('theme'))applyTheme();
    else setOsThemeAttr();
  });

  window.THPTheme={
    get(){return localStorage.getItem('theme')||'auto'},
    set(mode){
      if(mode==='light'||mode==='dark')localStorage.setItem('theme',mode);
      else localStorage.removeItem('theme');
      applyTheme();
    },
    system(){return media.matches?'dark':'light'},
    refresh:applyTheme
  };
})();
