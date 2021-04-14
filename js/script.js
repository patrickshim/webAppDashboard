const alertBanner = document.getElementById('alert');

alertBanner.innerHTML = `
<div class="alert-banner">
  <p><b>Alert:</b> You have <b>6</b> overdue tasks to complete</p>
  <p class="alert-banner-close">x</p>
</div>`

alertBanner.addEventListener('click', e => {
  const element = e.target;
  if (element.classList.contains("alert-banner-close")) {
    alertBanner.style.display = "none"
  }
});