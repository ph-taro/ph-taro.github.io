async function loadInclude(id, file) {
  const el = document.getElementById(id);
  if (el) {
    const res = await fetch(`inc/${file}`);
    const text = await res.text();
    el.innerHTML = text;
  }
}

document.addEventListener("DOMContentLoaded", () => {
  loadInclude("header", "header.html");
  loadInclude("footer", "footer.html");
});
