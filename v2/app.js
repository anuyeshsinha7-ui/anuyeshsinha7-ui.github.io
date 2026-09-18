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
    kicker: "Machine learning · Kaggle",
    desc: "Built a survival classifier on the Kaggle Titanic dataset and moved from simple base models to ensembles that combine them.",
    steps: [
      "EDA on passenger features",
      "Base models: Decision Tree, Support Vector Machine, Logistic Regression",
      "Voting Classifier and a stacking ensemble with a meta-learner",
      "Hyperparameter tuning on one base model"
    ],
    tags: ["Python", "Scikit-learn", "Ensembles"],
    links: [{ label: "View the notebook ↗", key: "titanic_notebook" }]
  },
  {
    title: "Which households recovered fastest after COVID and why?",
    kicker: "Statistics · Regression · Clustering",
    desc: "Modelled household income by region, education level and occupation, then tested which drivers held up and which segments bounced back first.",
    steps: [
      "Regression to estimate the effect of each driver on income",
      "Clustering to group households with similar recovery paths",
      "Hypothesis testing to check which effects were real"
    ],
    tags: ["Regression", "Clustering", "Hypothesis testing"]
  },
  {
    title: "Can blockchain make disaster relief funds trustworthy?",
    kicker: "FinTech · Working prototype",
    desc: "A prototype for the FinTech course that records each use of relief money, so donors and beneficiaries can follow where it went.",
    steps: [
      "Traces a rupee from donor to beneficiary through the chain",
      "Shows how hashing makes a tampered record obvious",
      "Ten interactive steps, from the failure of the old system to the ledger"
    ],
    tags: ["Blockchain", "Prototype"],
    links: [{ label: "Open the live prototype ↗", key: "reliefchain" }]
  },
  {
    title: "Where do Bajaj Auto's returns come from?",
    kicker: "Financial statement analysis",
    desc: "Took apart Bajaj Auto's performance and margin quality, then benchmarked returns, leverage and operating efficiency against 5 auto peers.",
    steps: [
      "Ratio analysis across profitability, efficiency and leverage",
      "DuPont decomposition to split ROE into its drivers",
      "Horizontal and vertical review of the statements over time"
    ],
    tags: ["DuPont", "Ratio analysis", "Peer benchmarking"]
  },
  {
    title: "Are Nifty 50 and DAX 40 priced for their fundamentals?",
    kicker: "Valuation · Index level",
    desc: "Forecast free cash flow to equity for both indices to estimate an intrinsic level for each, then compared it with where each market was trading.",
    steps: [
      "Built FCFE forecasts at index level for India and Germany",
      "Discounted to an intrinsic index value for each market",
      "Compared intrinsic and market levels to judge relative pricing"
    ],
    tags: ["FCFE", "Valuation", "Index analysis"]
  }
];

const PATH = [
  {
    tab: "IDBI Treasury",
    title: "IDBI Treasury",
    role: "Treasury Equity Intern",
    meta: "Apr 2026 – Jun 2026 · Mumbai · Nuclear energy value chain coverage",
    points: [
      "Researched 15 listed companies in the nuclear energy value chain, then wrote and presented a sector thesis with a recommendation on each name to the treasury desk.",
      "Built a rule-based risk screen on Altman Z-score, Beneish M-score and interest coverage, so balance sheet stress surfaced before a name reached the recommendation set.",
      "Tested each name on P/E, EV/EBITDA and P/B against its 3-year average, counting it as mispriced only when 2 of the 3 agreed, then ran a 5-condition veto screen on governance, promoter pledge and audit quality.",
      "Designed a 7-dimension weighted scoring model that sorted all 15 companies into 4 conviction bands for the desk."
    ]
  },
  {
    tab: "Great Lakes",
    title: "Great Lakes Institute of Management, Gurgaon",
    role: "PGDM, Finance and Business Analytics",
    meta: "2025 – 2027 · CGPA 3.21 / 4 · Dual major",
    points: [
      "Finance and business analytics as a dual major, finishing 2027.",
      "Coursework carried into the projects on this page: valuation, financial statement analysis, statistics and machine learning.",
      "National Finalist, Top 25, at Chaitanya: The Leadership Competition, IIM Indore, 2025."
    ]
  },
  {
    tab: "UIT, RGPV",
    title: "University Institute of Technology, RGPV, Bhopal",
    role: "B.Tech, Computer Science and Engineering",
    meta: "2019 – 2023 · 7.8 / 10",
    points: [
      "Computer science foundation behind the way I build screens and models.",
      "Sergeant in the National Cadet Corps: commanded a 20-cadet contingent at a national CATC camp and won 1st place in the Drill Competition."
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

/* ---------- Build markup ---------- */
const mq = document.getElementById("marquee");
if (mq) {
  const row = MARQUEE.map((s) => `<span>${s}</span><i>✦</i>`).join("");
  mq.innerHTML = row + row;
}

const chips = document.getElementById("skillChips");
if (chips) chips.innerHTML = SKILLS.map((s) => `<li class="tag">${s}</li>`).join("");

const list = document.getElementById("workList");
if (list) {
  list.innerHTML = PROJECTS.map((p, i) => {
    const links = (p.links || [])
      .filter((l) => LINKS[l.key])
      .map((l) => `<a class="tag" href="${LINKS[l.key]}" target="_blank" rel="noopener">${l.label}</a>`)
      .join("");
    const tags = (p.tags || []).map((t) => `<span class="tag">${t}</span>`).join("");
    return `
      <article class="work-item rv">
        <span class="idx">${String(i + 1).padStart(2, "0")}</span>
        <div>
          <h3>${p.title}</h3>
          <p class="kicker">${p.kicker}</p>
        </div>
        <div>
          <p class="desc">${p.desc}</p>
          <ul>${p.steps.map((s) => `<li>${s}</li>`).join("")}</ul>
          <div class="tagrow">${tags}${links}</div>
        </div>
        <span class="when"></span>
      </article>`;
  }).join("");
}

const tabsEl = document.getElementById("tabs");
const panesEl = document.getElementById("panes");
if (tabsEl && panesEl) {
  tabsEl.innerHTML = PATH.map((p, i) =>
    `<button class="tab" role="tab" id="tab-${i}" aria-controls="pane-${i}" aria-selected="${i === 0}">${p.tab}</button>`).join("");
  panesEl.innerHTML = PATH.map((p, i) => `
    <div class="pane" id="pane-${i}" role="tabpanel" aria-labelledby="tab-${i}" ${i === 0 ? "" : "hidden"}>
      <div>
        <h3 class="display">${p.title}</h3>
        <p class="role">${p.role}</p>
        <p class="meta">${p.meta}</p>
      </div>
      <ul>${p.points.map((s) => `<li>${s}</li>`).join("")}</ul>
    </div>`).join("");
  tabsEl.addEventListener("click", (e) => {
    const tab = e.target.closest(".tab");
    if (!tab) return;
    tabsEl.querySelectorAll(".tab").forEach((t) => t.setAttribute("aria-selected", String(t === tab)));
    panesEl.querySelectorAll(".pane").forEach((p) => { p.hidden = p.id !== tab.getAttribute("aria-controls"); });
    if (window.ScrollTrigger) ScrollTrigger.refresh();
  });
}

const mails = document.getElementById("mails");
if (mails) {
  mails.innerHTML = [["Personal", LINKS.email], ["College", LINKS.email_college]]
    .filter((m) => m[1])
    .map(([label, addr]) => `
      <a class="mail rv" href="mailto:${addr}">
        <span class="addr">${addr}</span>
        <span class="tag">${label} ↗</span>
      </a>`).join("");
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

/* Number only the sections that are visible, so the list never skips a number. */
let n = 0;
document.querySelectorAll("[data-sec]").forEach((el) => {
  const section = el.closest("section");
  if (section && section.hidden) { el.hidden = true; return; }
  n += 1;
  el.textContent = `${String(n).padStart(2, "0")} — ${el.dataset.sec}`;
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
function syncTheme() {
  const dark = root.dataset.theme !== "light";
  themeBtn.textContent = dark ? "☾" : "☀";
  themeBtn.setAttribute("aria-label", dark ? "Switch to light mode" : "Switch to dark mode");
}
syncTheme();
themeBtn.addEventListener("click", () => {
  root.dataset.theme = root.dataset.theme === "light" ? "dark" : "light";
  try { localStorage.setItem("theme", root.dataset.theme); } catch (e) { /* ignore */ }
  syncTheme();
});

/* ---------- Lamp gate ---------- */
const gate = document.getElementById("gate");
const cord = document.getElementById("cord");
const gateHint = document.getElementById("gateHint");
const termBody = document.getElementById("termBody");
const LINES = [
  "anu@coverage:~$ ./open_coverage.sh",
  "loading 15 companies ........ <b>ok</b>",
  "risk · relative value · veto  <b>ok</b>",
  "anu@coverage:~$ whoami"
];
let lit = false;

function typeLines() {
  let i = 0;
  (function nextLine() {
    if (i >= LINES.length) {
      termBody.innerHTML += `<div>Anu Yesh Sinha <span class="caret"></span></div>`;
      return;
    }
    const line = document.createElement("div");
    termBody.appendChild(line);
    const text = LINES[i++];
    let c = 0;
    (function nextChar() {
      line.innerHTML = text.slice(0, ++c);
      if (c < text.length) setTimeout(nextChar, 13);
      else setTimeout(nextLine, 170);
    })();
  })();
}

function lightOn() {
  if (lit) return;
  lit = true;
  gate.classList.add("lit");
  cord.classList.add("pulled");
  gateHint.textContent = "Scroll to enter ↓";
  typeLines();
}

function openSite() {
  document.body.style.overflow = "";
  try { sessionStorage.setItem("gateSeen", "1"); } catch (e) { /* ignore */ }
  const done = () => { gate.remove(); heroIn(); };
  if (window.gsap && !reduced) gsap.to(gate, { opacity: 0, duration: .55, ease: "power2.out", onComplete: done });
  else done();
}

function heroIn() {
  if (!window.gsap || reduced) return;
  gsap.to(".hero .rv", { opacity: 1, y: 0, duration: .9, ease: "power3.out", stagger: .07 });
}

if (gate) {
  if (reduced || sessionStorage.getItem("gateSeen")) {
    gate.remove();
    document.querySelectorAll(".rv").forEach((el) => { el.style.opacity = 1; el.style.transform = "none"; });
  } else {
    document.body.style.overflow = "hidden";
    cord.addEventListener("click", lightOn);
    cord.addEventListener("pointerdown", lightOn);
    document.getElementById("gateEnter").addEventListener("click", openSite);
    addEventListener("keydown", (e) => {
      if (!document.body.contains(gate)) return;
      if (e.key === "Escape") openSite();
      else if (!lit) lightOn();
    });
    addEventListener("wheel", () => { if (!document.body.contains(gate)) return; lit ? openSite() : lightOn(); }, { passive: true });
    setTimeout(() => { if (!lit) lightOn(); }, 4500);
    setTimeout(() => { if (document.body.contains(gate)) openSite(); }, 9000);
  }
}

/* ---------- Scroll ---------- */
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
      opacity: 1, y: 0, duration: .85, ease: "power3.out",
      scrollTrigger: { trigger: el, start: "top 90%", once: true }
    });
  });

  const track = document.getElementById("marquee");
  if (track) gsap.to(track, { xPercent: -50, ease: "none", duration: 30, repeat: -1 });

  const steps = gsap.utils.toArray(".step");
  if (steps.length) {
    ScrollTrigger.create({
      trigger: "#steps",
      start: "top 72%",
      end: "bottom 55%",
      scrub: true,
      onUpdate: (self) => {
        const active = Math.min(steps.length - 1, Math.floor(self.progress * steps.length));
        steps.forEach((s, i) => s.classList.toggle("on", i <= active));
      }
    });
  }
}
initScroll();

document.getElementById("year").textContent = new Date().getFullYear();
