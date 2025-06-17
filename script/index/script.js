const storedTheme = localStorage.getItem('theme') || 'system';
document.documentElement.setAttribute('data-theme', storedTheme);
if (storedTheme === 'system') {
  const dark = window.matchMedia('(prefers-color-scheme: dark)').matches;
  document.documentElement.setAttribute('data-theme', dark ? 'dark' : 'light');
}

function toggleMenu() {
  const menu = document.getElementById('menu');
  menu.classList.toggle('hidden');
}

function openSettings() {
  document.getElementById('settingsModal').classList.remove('hidden');
  document.getElementById('menu').classList.add('hidden');
}

function closeSettings() {
  document.getElementById('settingsModal').classList.add('hidden');
}

function setTheme(theme) {
  localStorage.setItem('theme', theme);
  if (theme === 'system') {
    const dark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    document.documentElement.setAttribute('data-theme', dark ? 'dark' : 'light');
  } else {
    document.documentElement.setAttribute('data-theme', theme);
  }
  closeSettings();
}
