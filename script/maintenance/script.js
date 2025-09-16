document.addEventListener('DOMContentLoaded',function(){
  const root=document.documentElement
  const logo=document.getElementById('site-logo')
  const media=window.matchMedia('(prefers-color-scheme: dark)')
  function isDark(){
    const attr=root.getAttribute('data-theme')
    if(attr==='dark') return true
    if(attr==='light') return false
    return media.matches
  }
  function applyLogo(){
    const dark=isDark()
    logo.src=dark ? 'https://assets.greenrcode.com/img/logodark.png' : 'https://assets.greenrcode.com/icon.jpeg'
  }
  applyLogo()
  media.addEventListener('change',applyLogo)
})
