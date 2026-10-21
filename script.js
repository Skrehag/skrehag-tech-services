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

// Prázdný kontakt nikdy nevytváří nefunkční odkaz ani předstírané odesílání formuláře.
const config = window.SITE_CONFIG || {};
const contactLinks = document.getElementById("contact-links");
const email = typeof config.email === "string" ? config.email.trim() : "";
const phone = typeof config.phone === "string" ? config.phone.trim() : "";
const locationText = typeof config.location === "string" ? config.location.trim() : "";
function addContactLink(label, target) {
  const link = document.createElement("a");
  link.textContent = label;
  link.href = target;
  contactLinks.appendChild(link);
}
if (/^[^\s@?&#]+@[^\s@?&#]+\.[^\s@?&#]+$/.test(email)) {
  addContactLink(email, "mailto:" + email);
}
const phoneTarget = phone.replace(/[\s()\-]/g, "");
if (/^\+?\d{6,15}$/.test(phoneTarget)) {
  addContactLink(phone, "tel:" + phoneTarget);
}
if (locationText) {
  const locationElement = document.createElement("p");
  locationElement.textContent = locationText;
  contactLinks.appendChild(locationElement);
}
if (contactLinks.querySelector("a")) {
  document.getElementById("contact-placeholder").hidden = true;
  document.getElementById("contact-intro").textContent = "Napište nebo zavolejte a popište, s čím potřebujete pomoci.";
  contactLinks.hidden = false;
} else if (locationText) {
  contactLinks.hidden = false;
}
