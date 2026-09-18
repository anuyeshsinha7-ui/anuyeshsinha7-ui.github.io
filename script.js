// ---------------------------------------------------------------
// EDIT YOUR LINKS HERE. Every button on the page reads from this.
// Leave a value as "" and its buttons are hidden automatically.
// ---------------------------------------------------------------
const LINKS = {
  linkedin: "",          // e.g. "https://www.linkedin.com/in/your-handle/"
  email: "anuyeshsinha7@gmail.com",
  email_college: "anuyesh.pgdm27g@greatlakes.edu.in",
  post_zero_price: "",   // URL of the ₹0 electricity carousel post
  post_hydrogen: "",     // URL of the green hydrogen carousel post
  post_ketan: "",        // URL of the Ketan Parekh carousel post
  titanic_notebook: "",  // e.g. "projects/titanic.html" once the notebook is added
  internship_report: "nuclear-report/"  // interactive summer internship report
};

document.documentElement.classList.add("js");

document.querySelectorAll("[data-link]").forEach((el) => {
  const key = el.dataset.link;
  const value = LINKS[key];
  if (!value) {
    // Posts fall back to the LinkedIn profile; other buttons just hide.
    if (key.startsWith("post_") && LINKS.linkedin) {
      el.href = LINKS.linkedin.replace(/\/?$/, "/recent-activity/all/");
    } else {
      el.hidden = true;
    }
    return;
  }
  el.href = key === "email" ? `mailto:${value}` : value;
});

// Number the sections that are actually visible, so the list never skips a number.
function renumberSections() {
  let n = 0;
  document.querySelectorAll("[data-sec]").forEach((el) => {
    const section = el.closest("section");
    if (section && section.hidden) { el.hidden = true; return; }
    n += 1;
    el.textContent = `${String(n).padStart(2, "0")} · ${el.dataset.sec}`;
  });
}

// Hide the whole Writing section if nothing in it has a link yet.
const writing = document.getElementById("writing");
if (writing && !writing.querySelector(".post:not([hidden])")) {
  writing.hidden = true;
  document.querySelector('.nav-links a[href="#writing"]').hidden = true;
}

// Mobile menu
const toggle = document.querySelector(".nav-toggle");
const links = document.getElementById("nav-links");
toggle.addEventListener("click", () => {
  const open = links.classList.toggle("open");
  toggle.setAttribute("aria-expanded", open);
});
links.addEventListener("click", (e) => {
  if (e.target.tagName === "A") {
    links.classList.remove("open");
    toggle.setAttribute("aria-expanded", "false");
  }
});

// Fade sections in as they scroll into view
if ("IntersectionObserver" in window) {
  const io = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("in");
        io.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12 });
  document.querySelectorAll(".reveal").forEach((el) => io.observe(el));
} else {
  document.querySelectorAll(".reveal").forEach((el) => el.classList.add("in"));
}

renumberSections();
document.getElementById("year").textContent = new Date().getFullYear();
