document.addEventListener("DOMContentLoaded",function(){
  const root=document.documentElement
  const toggleButton=document.getElementById("darkModeToggle")
  const toggleIcon=document.getElementById("modeIcon")
  const logo=document.getElementById("site-logo")
  const media=window.matchMedia('(prefers-color-scheme: dark)')
  function effectiveDark(){
    const pref=localStorage.getItem('theme')
    if(pref==='dark') return true
    if(pref==='light') return false
    return media.matches
  }
  function applyTheme(){
    const pref=localStorage.getItem('theme')
    if(pref==='dark'){root.setAttribute('data-theme','dark')}
    else if(pref==='light'){root.setAttribute('data-theme','light')}
    else {root.setAttribute('data-theme','auto')}
    const isDark=effectiveDark()
    toggleIcon.textContent=isDark? 'dark_mode' : 'light_mode'
    logo.src=isDark? 'https://assets.thehtmlproject.com/img/logodark.png' : 'https://assets.thehtmlproject.com/icon.jpeg'
  }
  applyTheme()
  media.addEventListener('change',()=>{ if(localStorage.getItem('theme')===null){applyTheme()} })
  toggleButton.addEventListener('click',()=>{
    const pref=localStorage.getItem('theme')
    if(pref===null){ localStorage.setItem('theme', effectiveDark()? 'light':'dark') }
    else if(pref==='dark'){ localStorage.setItem('theme','light') }
    else if(pref==='light'){ localStorage.removeItem('theme') }
    applyTheme()
  })

  const joinBtn=document.getElementById("discordJoinBtn")
  const btnInner=document.querySelector('#discordJoinBtn .btn-inner')
  const checkIcon=document.getElementById("discordCheck")
  const text=document.getElementById("discordText")
  const icon=document.getElementById("discordIcon")
  if(localStorage.getItem("joinedDiscord")==="true"){
    joinBtn.style.display="none"
  }
  let waitingForReturn=false
  joinBtn.addEventListener("click",()=>{
    window.open("https://discord.thehtmlproject.com","_blank")
    waitingForReturn=true
    btnInner.classList.add("blur")
  })
  window.addEventListener("focus",()=>{
    if(waitingForReturn){
      waitingForReturn=false
      setTimeout(()=>{text.style.display="none";icon.style.display="none";checkIcon.classList.add("show")},800)
      setTimeout(()=>{joinBtn.classList.add("fadeOut")},1800)
      setTimeout(()=>{joinBtn.style.display="none";localStorage.setItem("joinedDiscord","true")},3000)
    }
  })
})
document.addEventListener("DOMContentLoaded",function(){
  const root=document.documentElement
  const toggleButton=document.getElementById("darkModeToggle")
  const toggleIcon=document.getElementById("modeIcon")
  const logo=document.getElementById("site-logo")
  const media=window.matchMedia('(prefers-color-scheme: dark)')
  function effectiveDark(){
    const pref=localStorage.getItem('theme')
    if(pref==='dark') return true
    if(pref==='light') return false
    return media.matches
  }
  function applyTheme(){
    const pref=localStorage.getItem('theme')
    if(pref==='dark'){root.setAttribute('data-theme','dark')}
    else if(pref==='light'){root.setAttribute('data-theme','light')}
    else {root.setAttribute('data-theme','auto')}
    const isDark=effectiveDark()
    toggleIcon.textContent=isDark? 'dark_mode' : 'light_mode'
    logo.src=isDark? 'https://assets.thehtmlproject.com/img/logodark.png' : 'https://assets.thehtmlproject.com/icon.jpeg'
  }
  applyTheme()
  media.addEventListener('change',()=>{ if(localStorage.getItem('theme')===null){applyTheme()} })
  toggleButton.addEventListener('click',()=>{
    const pref=localStorage.getItem('theme')
    if(pref===null){ localStorage.setItem('theme', effectiveDark()? 'light':'dark') }
    else if(pref==='dark'){ localStorage.setItem('theme','light') }
    else if(pref==='light'){ localStorage.removeItem('theme') }
    applyTheme()
  })

  const joinBtn=document.getElementById("discordJoinBtn")
  const btnInner=document.querySelector('#discordJoinBtn .btn-inner')
  const checkIcon=document.getElementById("discordCheck")
  const text=document.getElementById("discordText")
  const icon=document.getElementById("discordIcon")
  if(localStorage.getItem("joinedDiscord")==="true"){
    joinBtn.style.display="none"
  }
  let waitingForReturn=false
  joinBtn.addEventListener("click",()=>{
    window.open("https://discord.thehtmlproject.com","_blank")
    waitingForReturn=true
    btnInner.classList.add("blur")
  })
  window.addEventListener("focus",()=>{
    if(waitingForReturn){
      waitingForReturn=false
      setTimeout(()=>{text.style.display="none";icon.style.display="none";checkIcon.classList.add("show")},800)
      setTimeout(()=>{joinBtn.classList.add("fadeOut")},1800)
      setTimeout(()=>{joinBtn.style.display="none";localStorage.setItem("joinedDiscord","true")},3000)
    }
  })
})
