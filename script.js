document.addEventListener("DOMContentLoaded", () => {
  const timeEl = document.getElementById("time");
  const notifToggle = document.getElementById("notifToggle");
  const notifDrawer = document.getElementById("notifDrawer");
  const appDrawerBtn = document.getElementById("appDrawerBtn");
  const appDrawer = document.getElementById("appDrawer");
  const closeDrawer = document.getElementById("closeDrawer");

  // Update clock
  function updateTime() {
    const now = new Date();
    let h = now.getHours();
    let m = now.getMinutes();
    if (m < 10) m = "0" + m;
    timeEl.textContent = `${h}:${m}`;
  }
  setInterval(updateTime, 1000);
  updateTime();

  // Notification toggle
  notifToggle.addEventListener("click", () => {
    notifDrawer.classList.toggle("open");
  });

  // App Drawer toggle
  appDrawerBtn.addEventListener("click", () => {
    appDrawer.classList.add("open");
  });
  closeDrawer.addEventListener("click", () => {
    appDrawer.classList.remove("open");
  });
});
