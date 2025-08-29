// Toggle Side Drawer
const menuBtn = document.getElementById('menuBtn');
const drawerMenu = document.getElementById('drawerMenu');

menuBtn.addEventListener('click', () => {
  drawerMenu.classList.toggle('open');
});

// Toggle Notification Panel
const notifToggle = document.getElementById('notifToggle');
const notifDrawer = document.getElementById('notifDrawer');

notifToggle.addEventListener('click', () => {
  notifDrawer.classList.toggle('collapsed');
});
