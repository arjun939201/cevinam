// Notification drawer toggle
const notifDrawer = document.getElementById('notifDrawer');
const notifToggle = document.getElementById('notifToggle');

notifToggle.addEventListener('click', () => {
  notifDrawer.classList.toggle('open');
});

// App icon modals (except for Settings which is a link)
document.querySelectorAll('.app-icon').forEach(icon => {
  // Skip anchor tags (Settings)
  if (icon.tagName === 'A') return;
  icon.addEventListener('click', function(e) {
    const appName = this.querySelector('span').textContent;
    openAppModal(appName);
  });
});

function openAppModal(appName) {
  // Remove any existing modal
  const existing = document.querySelector('.app-modal');
  if (existing) existing.remove();

  let modal = document.createElement('div');
  modal.className = 'app-modal';
  modal.innerHTML = `
    <div class="modal-content">
      <button class="close-modal" aria-label="Close">&times;</button>
      <h2>${appName}</h2>
      <p>${appName} opened! (Demo)</p>
    </div>
  `;
  document.body.appendChild(modal);
  modal.querySelector('.close-modal').onclick = () => modal.remove();

  // Optional: close modal on background click
  modal.addEventListener('click', function(e) {
    if (e.target === modal) modal.remove();
  });
}

// Side drawer menu
const drawer = document.getElementById('drawerMenu');
const menuBtn = document.getElementById('menuBtn');

menuBtn.addEventListener('click', (e) => {
  drawer.classList.toggle('open');
  e.stopPropagation();
});

// Close drawer when clicking outside
document.body.addEventListener('click', (e) => {
  if (drawer.classList.contains('open') && !drawer.contains(e.target) && e.target !== menuBtn) {
    drawer.classList.remove('open');
  }
});

// Prevent drawer clicks from closing it
drawer.addEventListener('click', (e) => e.stopPropagation());

// Bottom bar back button
const backBtn = document.querySelector('.bottom-bar button:nth-child(3)');
backBtn.addEventListener('click', () => {
  // Close modal if open
  const modal = document.querySelector('.app-modal');
  if (modal) {
    modal.remove();
    return;
  }
  // Close drawer if open
  if (drawer.classList.contains('open')) {
    drawer.classList.remove('open');
    return;
  }
  // Close notification drawer if open
  if (notifDrawer.classList.contains('open')) {
    notifDrawer.classList.remove('open');
    return;
  }
  // Otherwise: do nothing
});

// Optional: open notification drawer on swipe down (touch gesture)
let touchStartY = null;
document.addEventListener('touchstart', function(e){
  if (e.touches.length === 1) touchStartY = e.touches[0].clientY;
});
document.addEventListener('touchend', function(e){
  if (touchStartY !== null && e.changedTouches.length === 1) {
    let touchEndY = e.changedTouches[0].clientY;
    if (touchStartY < 50 && touchEndY - touchStartY > 50) {
      notifDrawer.classList.add('open');
    }
  }
  touchStartY = null;
});

// Optional: close notification drawer on swipe up
notifDrawer.addEventListener('touchstart', function(e){
  if (e.touches.length === 1) touchStartY = e.touches[0].clientY;
});
notifDrawer.addEventListener('touchend', function(e){
  if (touchStartY !== null && e.changedTouches.length === 1) {
    let touchEndY = e.changedTouches[0].clientY;
    if (touchStartY < touchEndY && touchEndY - touchStartY < -40) {
      notifDrawer.classList.remove('open');
    }
  }
  touchStartY = null;
});
