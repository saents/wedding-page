/* ==========================================================================
   WEDDING INVITATION — SCRIPT
   Edit ONLY the CONFIG object below to customize the entire website.
   ========================================================================== */

const CONFIG = {
  couple: { bride: "Սարգիս", groom: "Լենա" },

  weddingDate: "Հուլիսի 26, 2026",
  countdownTarget: "2026-07-26T14:40:00",

  hero: {
    image: "images/main.JPG",
  },

  invitation: {
    title: "Սիրելի Հյուրեր",
    text: "Մեր կյանքի գեղեցիկ օրը մոտենում է։ Սիրով հրավիրում ենք Ձեզ կիսելու մեր կյանքի այս լուսավոր ու հիշարժան օրը",
  },

  calendar: {
    year: 2026,
    month: 6,
    highlightDay: 26,
    monthName: "Հուլիս",
    weekDays: ["ԵՐԿ", "ԵՐՔ", "ՉՈՐ", "ՀՆԳ", "ՈՒՐԲ", "ՇԲԹ", "ԿԻՐ"],
  },

  location: {
    title: "Տեղակայում",
    photo: "images/hands.JPG",
  },

  church: {
    name: "Սաղմոսավանք",
    description: "Եկեղեցու պսակադրությունը տեղի կունենա Սաղմոսավանքում",
    address: "Սաղմոսավանք, Արագածոտնի մարզ",
    image: "images/saghmosavanq-icon.png",
    mapsLink: "https://maps.google.com/?q=Saghmosavank+Monastery+Armenia",
  },

  hall: {
    name: "Հարսնաքար",
    description: "Հանդիսությունն անցկացվում է «Հարսնաքար» սրահում",
    address: "Երևան, Հրաչյա Աճառյան 37",
    image: "images/restaurant.jpg",
    mapsLink: "https://maps.google.com/?q=Harsnaqar+37+Acharyan+Yerevan",
  },

  program: {
    title: "Օրվա ծրագիր",
    schedule: [
      { time: "12:00", title: "Հարսի և փեսայի տուն", description: "Family & Friends House" },
      { time: "14:40", title: "Եկեղեցի", description: "«պսակադրություն»" },
      { time: "17:30", title: "Ռեստորան «Հարսնաքար»", description: "Հանդիսություն" },
    ],
  },

  countdown: {
    title: "Մեր հարսանիքին մնացել է...",
    image: "images/untilThisDay.JPG",
    labels: {
      days: "օր",
      hours: "ժամ",
      minutes: "րոպե",
      seconds: "վրկ",
    },
  },

  closing: {
    text: "Մինչ հանդիպում",
  },

  music: {
    url: "sound/song.mp3",
    enabled: true,
  },

  theme: {
    primary: "#2c2416",
    primaryLight: "#6b5d4d",
    primaryDark: "#1a1612",
    accent: "#8b7355",
  },

  fonts: {
    heading: "Noto Sans Armenian",
    body: "Noto Sans Armenian",
    display: "Noto Serif Armenian",
    googleFontsUrl:
      "https://fonts.googleapis.com/css2?family=Noto+Sans+Armenian:wght@100;200;300;400&family=Noto+Serif+Armenian:wght@200;300;400&display=swap",
  },

  features: {
    preloader: true,
    parallax: true,
  },
};

(function () {
  "use strict";

  const $ = (sel, ctx = document) => ctx.querySelector(sel);
  const $$ = (sel, ctx = document) => [...ctx.querySelectorAll(sel)];

  let lenis;
  const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  function coupleNames() {
    return `${CONFIG.couple.bride} և ${CONFIG.couple.groom}`;
  }

  function applyTheme() {
    const root = document.documentElement;
    const t = CONFIG.theme;
    root.style.setProperty("--color-primary", t.primary);
    root.style.setProperty("--color-primary-light", t.primaryLight);
    root.style.setProperty("--color-primary-dark", t.primaryDark);
    root.style.setProperty("--color-accent", t.accent);
    root.style.setProperty("--font-heading", `"${CONFIG.fonts.heading}", system-ui, sans-serif`);
    root.style.setProperty("--font-body", `"${CONFIG.fonts.body}", system-ui, sans-serif`);
    root.style.setProperty("--font-display", `"${CONFIG.fonts.display}", Georgia, serif`);
    document.title = `${coupleNames()} — Հարսանիքի հրավեր`;
  }

  function populateContent() {
    $("[data-preloader-names]") && ($("[data-preloader-names]").textContent = coupleNames());
    $("[data-bride-name]").textContent = CONFIG.couple.bride;
    $("[data-groom-name]").textContent = CONFIG.couple.groom;
    $("[data-wedding-date]").textContent = CONFIG.weddingDate;
    $("[data-footer-names]").textContent = coupleNames();
    $("[data-footer-date]").textContent = CONFIG.weddingDate;
    $("[data-year]").textContent = new Date().getFullYear();

    const heroImg = $("[data-hero-image]");
    heroImg.src = CONFIG.hero.image;
    heroImg.alt = coupleNames();

    $("[data-invitation-title]").textContent = CONFIG.invitation.title;
    $("[data-invitation-text]").textContent = CONFIG.invitation.text;

    $("[data-location-title]").textContent = CONFIG.location.title;
    $("[data-location-photo]").src = CONFIG.location.photo;

    $("[data-church-name]").textContent = CONFIG.church.name;
    $("[data-church-desc]").textContent = CONFIG.church.description;
    $("[data-hall-name]").textContent = CONFIG.hall.name;
    $("[data-hall-desc]").textContent = CONFIG.hall.description;

    $("[data-program-title]").textContent = CONFIG.program.title;

    $("[data-countdown-title]").textContent = CONFIG.countdown.title;
    $("[data-countdown-image]").src = CONFIG.countdown.image;
    $("[data-closing-text]").textContent = CONFIG.closing.text;

    renderCalendar();
    renderVenues();
    renderSchedule();
    renderCountdown();
  }

  function renderCalendar() {
    const cal = CONFIG.calendar;
    const firstDay = new Date(cal.year, cal.month, 1).getDay();
    const mondayStart = (firstDay + 6) % 7;
    const daysInMonth = new Date(cal.year, cal.month + 1, 0).getDate();

    let cells = "";
    for (let i = 0; i < mondayStart; i++) {
      cells += `<span class="calendar__day calendar__day--empty"></span>`;
    }
    for (let day = 1; day <= daysInMonth; day++) {
      const isHighlight = day === cal.highlightDay;
      cells += `<span class="calendar__day${isHighlight ? " calendar__day--highlight" : ""}">${day}</span>`;
    }

    $("#calendar").innerHTML = `
      <div class="calendar__header">
        <span class="calendar__month">${cal.monthName}</span>
        <span class="calendar__year">${cal.year}</span>
      </div>
      <div class="calendar__weekdays">${cal.weekDays.map((d) => `<span>${d}</span>`).join("")}</div>
      <div class="calendar__days">${cells}</div>`;
  }

  function renderVenues() {
    function venueBlock(venue) {
      return `
        ${venue.image ? `<div class="venue-block__photo venue-block__photo--icon"><img src="${venue.image}" alt="${venue.name}" loading="lazy" /></div>` : ""}
        <p class="venue-block__address">${venue.address}</p>
        <a class="venue-block__link" href="${venue.mapsLink}" target="_blank" rel="noopener">Բացել քարտեզում →</a>`;
    }
    $("#church-map").innerHTML = venueBlock(CONFIG.church);
    $("#hall-map").innerHTML = venueBlock(CONFIG.hall);
  }

  function renderSchedule() {
    $("#schedule-list").innerHTML = CONFIG.program.schedule
      .map(
        (s, i) => `
      <div class="schedule__item" data-aos="fade-up" data-aos-delay="${i * 80}">
        <span class="schedule__time">${s.time}</span>
        <div class="schedule__info">
          <h3>${s.title}</h3>
          <p>${s.description}</p>
        </div>
      </div>`
      )
      .join("");
  }

  function renderCountdown() {
    const grid = $("#countdown-grid");
    const labels = CONFIG.countdown.labels;
    const units = [
      { id: "days", label: labels.days },
      { id: "hours", label: labels.hours },
      { id: "minutes", label: labels.minutes },
      { id: "seconds", label: labels.seconds },
    ];

    grid.innerHTML = units
      .map(
        (u) => `
      <div class="countdown__item">
        <span class="countdown__value" id="count-${u.id}">00</span>
        <span class="countdown__label">${u.label}</span>
      </div>`
      )
      .join("");

    function tick() {
      const target = new Date(CONFIG.countdownTarget).getTime();
      const now = Date.now();
      let diff = Math.max(0, target - now);

      const d = Math.floor(diff / 86400000);
      diff %= 86400000;
      const h = Math.floor(diff / 3600000);
      diff %= 3600000;
      const m = Math.floor(diff / 60000);
      diff %= 60000;
      const s = Math.floor(diff / 1000);

      const vals = { days: d, hours: h, minutes: m, seconds: s };
      Object.entries(vals).forEach(([key, val]) => {
        const el = $(`#count-${key}`);
        if (!el) return;
        const str = String(val).padStart(2, "0");
        if (el.textContent !== str && typeof anime !== "undefined" && !prefersReducedMotion) {
          anime({
            targets: el,
            scale: [1.08, 1],
            duration: 400,
            easing: "easeOutElastic(1, .6)",
          });
        }
        el.textContent = str;
      });
    }

    tick();
    setInterval(tick, 1000);
  }

  function initMusic() {
    if (!CONFIG.music.enabled || prefersReducedMotion) return;

    const audio = $("#bg-music");
    if (!audio) return;

    audio.src = CONFIG.music.url;
    audio.volume = 0.45;

    const playMusic = () => {
      audio.play().catch(() => {});
    };

    playMusic();
    document.addEventListener("click", playMusic, { once: true });
    document.addEventListener("touchstart", playMusic, { once: true, passive: true });
  }

  function initPreloader() {
    if (!CONFIG.features.preloader || prefersReducedMotion) {
      $("#preloader")?.remove();
      document.body.classList.add("is-ready");
      return Promise.resolve();
    }

    return new Promise((resolve) => {
      const preloader = $("#preloader");
      const bar = $(".preloader__bar");
      let progress = 0;

      const interval = setInterval(() => {
        progress += Math.random() * 18 + 8;
        if (progress >= 100) {
          progress = 100;
          clearInterval(interval);
          bar.style.width = "100%";

          if (typeof gsap !== "undefined") {
            gsap.to(preloader, {
              opacity: 0,
              duration: 0.8,
              delay: 0.3,
              onComplete: () => {
                preloader.classList.add("is-hidden");
                document.body.classList.add("is-ready");
                resolve();
              },
            });
          } else {
            preloader.classList.add("is-hidden");
            document.body.classList.add("is-ready");
            resolve();
          }
        } else {
          bar.style.width = `${progress}%`;
        }
      }, 120);
    });
  }

  function initNavigation() {
    const header = $("#header");
    const toggle = $("#nav-toggle");
    const menu = $("#nav-menu");
    const links = $$(".nav__link", menu);

    const onScroll = () => {
      header.classList.toggle("is-scrolled", window.scrollY > 60);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();

    toggle.addEventListener("click", () => {
      const open = menu.classList.toggle("is-open");
      toggle.classList.toggle("is-active", open);
      toggle.setAttribute("aria-expanded", open);
      document.body.style.overflow = open ? "hidden" : "";
    });

    links.forEach((link) => {
      link.addEventListener("click", () => {
        menu.classList.remove("is-open");
        toggle.classList.remove("is-active");
        toggle.setAttribute("aria-expanded", "false");
        document.body.style.overflow = "";
      });
    });

    const sections = $$("section[id]");
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const id = entry.target.id;
            links.forEach((l) => {
              l.classList.toggle("is-active", l.getAttribute("href") === `#${id}`);
            });
          }
        });
      },
      { rootMargin: "-40% 0px -55% 0px" }
    );
    sections.forEach((s) => observer.observe(s));
  }

  function initLenis() {
    if (prefersReducedMotion || typeof Lenis === "undefined") return;

    lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
    });

    lenis.on("scroll", ScrollTrigger.update);
    gsap.ticker.add((time) => lenis.raf(time * 1000));
    gsap.ticker.lagSmoothing(0);

    $$('a[href^="#"]').forEach((anchor) => {
      anchor.addEventListener("click", (e) => {
        const id = anchor.getAttribute("href");
        if (id === "#") return;
        const target = $(id);
        if (!target) return;
        e.preventDefault();
        lenis.scrollTo(target, { offset: -80 });
      });
    });
  }

  function initGSAP() {
    if (prefersReducedMotion || typeof gsap === "undefined") return;

    gsap.registerPlugin(ScrollTrigger);

    if (CONFIG.features.parallax) {
      gsap.to(".hero__image", {
        yPercent: 15,
        ease: "none",
        scrollTrigger: {
          trigger: ".hero",
          start: "top top",
          end: "bottom top",
          scrub: true,
        },
      });
    }
  }

  function initAOS() {
    if (prefersReducedMotion || typeof AOS === "undefined") return;
    AOS.init({
      duration: 900,
      easing: "ease-out-cubic",
      once: true,
      offset: 60,
      disable: prefersReducedMotion,
    });
  }

  function initScrollProgress() {
    const bar = $(".scroll-progress__bar");
    if (!bar) return;

    const update = () => {
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const pct = docHeight > 0 ? (scrollTop / docHeight) * 100 : 0;
      bar.style.width = `${pct}%`;
    };

    window.addEventListener("scroll", update, { passive: true });
    update();
  }

  async function init() {
    applyTheme();
    populateContent();
    initNavigation();
    initScrollProgress();

    await initPreloader();

    initMusic();
    initLenis();
    initGSAP();
    initAOS();

    if (typeof AOS !== "undefined") AOS.refresh();
    if (typeof ScrollTrigger !== "undefined") ScrollTrigger.refresh();
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init);
  } else {
    init();
  }
})();
