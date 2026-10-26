"use strict";

const menuToggle = document.querySelector(".menu-toggle");
const navigation = document.querySelector("#navigation");
function closeMenu(restoreFocus = false) {
  navigation.classList.remove("is-open");
  menuToggle.setAttribute("aria-expanded", "false");
  if (restoreFocus) menuToggle.focus();
}
menuToggle.addEventListener("click", () => {
  const opened = menuToggle.getAttribute("aria-expanded") !== "true";
  menuToggle.setAttribute("aria-expanded", String(opened));
  navigation.classList.toggle("is-open", opened);
});
navigation.addEventListener("click", (event) => {
  if (event.target.closest("a")) closeMenu();
});
document.addEventListener("keydown", (event) => {
  if (event.key === "Escape" && menuToggle.getAttribute("aria-expanded") === "true") closeMenu(true);
});
document.addEventListener("click", (event) => {
  if (!event.target.closest(".site-header")) closeMenu();
});
window.matchMedia("(min-width: 761px)").addEventListener("change", () => closeMenu());
document.getElementById("year").textContent = new Date().getFullYear();

// E-mailové odkazy fungují i bez JavaScriptu. Kopírování je doplňková funkce.
const copyButton = document.getElementById("copy-email");
const copyStatus = document.getElementById("copy-status");
const email = window.SITE_CONFIG.email;
if (window.isSecureContext && navigator.clipboard) {
  copyButton.hidden = false;
  copyButton.addEventListener("click", async () => {
    try {
      await navigator.clipboard.writeText(email);
      copyStatus.textContent = "E-mailová adresa je zkopírovaná.";
    } catch {
      copyStatus.textContent = "Adresu prosím označte a zkopírujte ručně.";
    }
  });
}
