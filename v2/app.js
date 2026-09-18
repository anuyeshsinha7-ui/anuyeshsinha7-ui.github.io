/* ============================================================
   EDIT YOUR LINKS HERE. Every button on the page reads from this.
   An empty value hides its button automatically.
   ============================================================ */
const LINKS = {
  linkedin: "",
  email: "anuyeshsinha7@gmail.com",
  email_college: "anuyesh.pgdm27g@greatlakes.edu.in",
  internship_report: "../nuclear-report/",
  reliefchain: "../reliefchain/",
  titanic_notebook: "",
  post_zero_price: "",
  post_hydrogen: "",
  post_ketan: ""
};

const PROJECTS = [
  {
    title: "Do ensembles beat single models at predicting Titanic survival?",
    tags: "Machine learning · Kaggle",
    blurb: "A survival classifier on the Kaggle Titanic dataset, taken from single models through to ensembles that combine them.",
    steps: [
      "EDA on the passenger features",
      "Base models: Decision Tree, Support Vector Machine, Logistic Regression",
      "A Voting Classifier and a stacking ensemble with a meta-learner",
      "Hyperparameter tuning on one base model"
    ],
    links: [{ label: "View the notebook ↗", key: "titanic_notebook" }]
  },
  {
    title: "Which households recovered fastest after COVID and why?",
    tags: "Statistics · Regression · Clustering",
    blurb: "Household income modelled by region, education level and occupation, then tested for which drivers held up.",
    steps: [
      "Regression to estimate the effect of each driver on income",
      "Clustering to group households with similar recovery paths",
      "Hypothesis testing to check which effects were real"
    ]
  },
  {
    title: "Can blockchain make disaster relief funds trustworthy?",
    tags: "FinTech · Working prototype",
    blurb: "ReliefChain records each use of relief money so donors and beneficiaries can follow where it went. Built for the FinTech course, running live on this site.",
    steps: [
      "Traces a rupee from donor to beneficiary through the chain",
      "Shows how hashing makes a tampered record obvious",
      "Ten interactive steps, from the failure of the old system to the ledger"
    ],
    links: [{ label: "Open the live prototype ↗", key: "reliefchain" }]
  },
  {
    title: "Where do Bajaj Auto's returns come from?",
    tags: "Financial statement analysis",
    blurb: "Performance and margin quality pulled apart, then benchmarked against five auto peers.",
    steps: [
      "Ratio analysis across profitability, efficiency and leverage",
      "DuPont decomposition to split ROE into its drivers",
      "Horizontal and vertical review of the statements over time"
    ]
  },
  {
    title: "Are Nifty 50 and DAX 40 priced for their fundamentals?",
    tags: "Valuation · Index level",
    blurb: "Free cash flow to equity forecast for both indices to estimate an intrinsic level for each market.",
    steps: [
      "FCFE forecasts at index level for India and Germany",
      "Discounted to an intrinsic index value for each",
      "Intrinsic against market level to judge relative pricing"
    ]
  }
];

const SKILLS = [
  "Machine learning", "Data analytics", "Data visualization", "Statistical modelling",
  "Regression & clustering", "Hypothesis testing", "Excel", "Valuation", "DCF & FCFE",
  "Relative valuation", "Financial modelling", "Financial statement analysis",
  "Forensic screens (Altman, Beneish)"
];

const MARQUEE = ["Valuation", "Machine Learning", "Equity Research", "Data Analytics", "Financial Modelling", "DCF", "Statistical Modelling", "Due Diligence"];

const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
document.documentElement.classList.add("js");

/* ---------- Build repeated markup ---------- */
const mq = document.getElementById("marquee");
if (mq) {
  const row = MARQUEE.map((s) => `<span>${s}</span><i>✦</i>`).join("");
  mq.innerHTML = row + row;
}

const chips = document.getElementById("skillChips");
if (chips) chips.innerHTML = SKILLS.map((s) => `<li class="chip">${s}</li>`).join("");

const list = document.getElementById("workList");
if (list) {
  list.innerHTML = PROJECTS.map((p, i) => {
    const links = (p.links || [])
      .filter((l) => LINKS[l.key])
      .map((l) => `<a class="chip" href="${LINKS[l.key]}" target="_blank" rel="noopener">${l.label}</a>`)
      .join("");
    return `
      <article class="work-item rv">
        <div class="work-row" role="button" tabindex="0" aria-expanded="false" aria-controls="panel-${i}">
          <span class="idx">0${i + 1}</span>
          <div>
            <h3>${p.title}</h3>
            <p class="tags">${p.tags}</p>
          </div>
          <span class="chev" aria-hidden="true">+</span>
        </div>
        <div class="work-panel" id="panel-${i}">
          <div class="work-panel-inner">
            <p>${p.blurb}</p>
            <div>
              <p class="label">How I did it</p>
              <ul>${p.steps.map((s) => `<li>${s}</li>`).join("")}</ul>
              ${links ? `<div class="work-links">${links}</div>` : ""}
            </div>
          </div>
        </div>
      </article>`;
  }).join("");
}

const mailRow = document.getElementById("mailRow");
if (mailRow) {
  const mails = [["Personal", LINKS.email], ["College", LINKS.email_college]].filter((m) => m[1]);
  mailRow.innerHTML = mails.map(([label, addr]) => `
    <div class="mail rv">
      <span class="label">${label}</span>
      <a class="addr" href="mailto:${addr}">${addr}</a>
      <button type="button" data-copy="${addr}">Copy</button>
    </div>`).join("");
}

/* ---------- Links from config ---------- */
document.querySelectorAll("[data-link]").forEach((el) => {
  const value = LINKS[el.dataset.link];
  if (!value) {
    if (el.dataset.link.startsWith("post_") && LINKS.linkedin) {
      el.href = LINKS.linkedin.replace(/\/?$/, "/recent-activity/all/");
      return;
    }
    el.hidden = true;
    return;
  }
  if (el.tagName === "A") el.href = el.dataset.link === "email" ? `mailto:${value}` : value;
});
document.querySelectorAll("[data-show-with]").forEach((el) => {
  if (!LINKS[el.dataset.showWith]) el.hidden = true;
});
const writing = document.getElementById("writing");
if (writing && !writing.querySelector(".post:not([hidden])")) {
  writing.hidden = true;
  const navWriting = document.querySelector('.nav-links a[href="#writing"]');
  if (navWriting) navWriting.hidden = true;
}

/* ---------- Toast + copy ---------- */
const toast = document.getElementById("toast");
let toastTimer;
function showToast(msg) {
  toast.textContent = msg;
  toast.hidden = false;
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => { toast.hidden = true; }, 3200);
}
function copyText(text) {
  if (navigator.clipboard) {
    navigator.clipboard.writeText(text).then(() => showToast(`Copied: ${text}`)).catch(() => showToast(text));
  } else {
    showToast(text);
  }
}
document.addEventListener("click", (e) => {
  const copyBtn = e.target.closest("[data-copy]");
  if (copyBtn) copyText(copyBtn.dataset.copy);
  const emailBtn = e.target.closest('[data-link="email"]');
  if (emailBtn) {
    copyText(LINKS.email);
    if (emailBtn.tagName === "BUTTON") window.location.href = `mailto:${LINKS.email}`;
  }
});

/* ---------- Nav ---------- */
const navToggle = document.getElementById("navToggle");
const navLinks = document.getElementById("navLinks");
navToggle.addEventListener("click", () => {
  const open = navLinks.classList.toggle("open");
  navToggle.setAttribute("aria-expanded", String(open));
});
navLinks.addEventListener("click", (e) => {
  if (e.target.tagName === "A") {
    navLinks.classList.remove("open");
    navToggle.setAttribute("aria-expanded", "false");
  }
});

/* ---------- Theme ---------- */
const themeBtn = document.getElementById("themeBtn");
const root = document.documentElement;
let stored = null;
try { stored = localStorage.getItem("theme"); } catch (e) { /* private mode */ }
if (stored) root.dataset.theme = stored;
function syncThemeButton() {
  const dark = root.dataset.theme !== "light";
  themeBtn.textContent = dark ? "☾" : "☀";
  themeBtn.setAttribute("aria-label", dark ? "Switch to light mode" : "Switch to dark mode");
}
syncThemeButton();
themeBtn.addEventListener("click", () => {
  root.dataset.theme = root.dataset.theme === "light" ? "dark" : "light";
  try { localStorage.setItem("theme", root.dataset.theme); } catch (e) { /* ignore */ }
  syncThemeButton();
});

/* ---------- Work rows ---------- */
document.querySelectorAll(".work-row").forEach((row) => {
  const panel = document.getElementById(row.getAttribute("aria-controls"));
  const toggle = () => {
    const open = row.getAttribute("aria-expanded") === "true";
    row.setAttribute("aria-expanded", String(!open));
    const target = open ? 0 : panel.scrollHeight;
    if (window.gsap && !reduced) {
      gsap.to(panel, { height: target, duration: .45, ease: "power2.inOut", onComplete: () => {
        if (!open) panel.style.height = "auto";
        if (window.ScrollTrigger) ScrollTrigger.refresh();
      }});
    } else {
      panel.style.height = open ? "0px" : "auto";
    }
  };
  row.addEventListener("click", toggle);
  row.addEventListener("keydown", (e) => {
    if (e.key === "Enter" || e.key === " ") { e.preventDefault(); toggle(); }
  });
});

/* ---------- Cursor (fine pointers only) ---------- */
const cursor = document.getElementById("cursor");
if (window.matchMedia("(pointer: fine)").matches && !reduced) {
  let cx = innerWidth / 2, cy = innerHeight / 2, tx = cx, ty = cy;
  addEventListener("mousemove", (e) => { tx = e.clientX; ty = e.clientY; cursor.classList.add("on"); });
  (function loop() {
    cx += (tx - cx) * .18; cy += (ty - cy) * .18;
    cursor.style.transform = `translate(${cx}px, ${cy}px)${cursor.classList.contains("grow") ? " scale(1.9)" : ""}`;
    requestAnimationFrame(loop);
  })();
  document.addEventListener("mouseover", (e) => {
    const hot = e.target.closest("a, button, .work-row, .post, .step");
    cursor.classList.toggle("grow", Boolean(hot));
  });
}

/* ---------- Intro ---------- */
const intro = document.getElementById("intro");
const termBody = document.getElementById("termBody");
const LINES = [
  "anu@coverage:~$ ./open_coverage.sh",
  "loading 15 companies ........ <b>ok</b>",
  "risk · relative value · veto  <b>ok</b>",
  "anu@coverage:~$ whoami"
];
function endIntro() {
  document.body.style.overflow = "";
  if (window.gsap && !reduced) {
    gsap.to(intro, { opacity: 0, duration: .5, ease: "power2.out", onComplete: () => { intro.remove(); heroIn(); } });
  } else {
    intro.remove();
    heroIn();
  }
}
function heroIn() {
  if (!window.gsap || reduced) return;
  gsap.from(".hero h1 .line > span", { yPercent: 115, duration: 1, ease: "power4.out", stagger: .08 });
  gsap.to(".hero .rv", { opacity: 1, y: 0, duration: .8, ease: "power3.out", stagger: .08, delay: .25 });
}
if (reduced || sessionStorage.getItem("introSeen")) {
  intro.remove();
  document.querySelectorAll(".rv").forEach((el) => { el.style.opacity = 1; el.style.transform = "none"; });
} else {
  document.body.style.overflow = "hidden";
  try { sessionStorage.setItem("introSeen", "1"); } catch (e) { /* ignore */ }
  let i = 0;
  (function type() {
    if (i >= LINES.length) {
      termBody.innerHTML += `<div>Anu Yesh Sinha <span class="cursor-blink"></span></div>`;
      setTimeout(endIntro, 850);
      return;
    }
    const line = document.createElement("div");
    termBody.appendChild(line);
    const text = LINES[i++];
    let c = 0;
    (function char() {
      line.innerHTML = text.slice(0, ++c);
      if (c < text.length) setTimeout(char, 14);
      else setTimeout(type, 180);
    })();
  })();
  setTimeout(() => { if (document.body.contains(intro)) endIntro(); }, 6000);
}
document.getElementById("introSkip").addEventListener("click", endIntro);
addEventListener("keydown", (e) => { if (e.key === "Escape" && document.body.contains(intro)) endIntro(); });

/* ---------- Scroll animation ---------- */
function initScroll() {
  if (!window.gsap || !window.ScrollTrigger) {
    document.querySelectorAll(".rv").forEach((el) => { el.style.opacity = 1; el.style.transform = "none"; });
    return;
  }
  gsap.registerPlugin(ScrollTrigger);

  const bar = document.getElementById("progress");
  ScrollTrigger.create({
    start: 0,
    end: () => document.documentElement.scrollHeight - innerHeight,
    onUpdate: (self) => { bar.style.width = (self.progress * 100).toFixed(2) + "%"; }
  });

  if (reduced) return;

  gsap.utils.toArray(".rv").forEach((el) => {
    if (el.closest(".hero")) return;
    gsap.to(el, {
      opacity: 1, y: 0, duration: .8, ease: "power3.out",
      scrollTrigger: { trigger: el, start: "top 88%", once: true }
    });
  });

  const track = document.getElementById("marquee");
  if (track) {
    gsap.to(track, { xPercent: -50, ease: "none", duration: 26, repeat: -1 });
  }

  const steps = gsap.utils.toArray(".step");
  const counter = document.getElementById("counter");
  if (steps.length) {
    ScrollTrigger.create({
      trigger: "#flagStage",
      start: "top 62%",
      end: "bottom 45%",
      scrub: true,
      onUpdate: (self) => {
        const active = Math.min(steps.length - 1, Math.floor(self.progress * steps.length));
        steps.forEach((s, i) => s.classList.toggle("on", i <= active));
        counter.textContent = steps[active].dataset.left;
      }
    });
  }

  gsap.to(".hero-grid", {
    yPercent: 18, ease: "none",
    scrollTrigger: { trigger: ".hero", start: "top top", end: "bottom top", scrub: true }
  });
}
initScroll();

document.getElementById("year").textContent = new Date().getFullYear();
