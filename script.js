/* ==========================================================================
   WEDDING INVITATION — SCRIPT
   Edit ONLY the CONFIG object below to customize the entire website.
   ========================================================================== */

const CONFIG = {
  initials: { bride: "Ս", groom: "Լ" },

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
    month: 6, // 0-indexed: July
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
    image: "images/saghmosavanq.jpg",
    mapsLink: "https://maps.google.com/?q=Saghmosavank+Monastery+Armenia",
    embedUrl:
      "https://maps.google.com/maps?q=Saghmosavank+Monastery+Armenia&z=15&output=embed",
  },

  hall: {
    name: "Հարսնաքար",
    description: "Հանդիսությունն անցկացվում է Հարսնաքար սրահում",
    address: "Երևան, Հրաչյա Աճառյան 37",
    image: "images/harsnaqar.png",
    mapsLink: "https://maps.google.com/?q=Harsnaqar+37+Acharyan+Yerevan",
    embedUrl:
      "https://maps.google.com/maps?q=Harsnaqar+Restaurant+37+Acharyan+Yerevan&z=15&output=embed",
  },

  program: {
    title: "Օրվա ծրագիր",
    schedule: [
      { time: "12:00", title: "Հարսի և փեսայի տուն", description: "Ընտանիքի և ընկերների տուն" },
      { time: "14:40", title: "Եկեղեցի", description: "Սաղմոսավանք" },
      { time: "17:30", title: "Ռեստորան Հարսնաքար", description: "Հանդիսություն" },
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

  theme: {
    primary: "#2c2416",
    primaryLight: "#6b5d4d",
    primaryDark: "#1a1612",
    accent: "#8b7355",
  },

  fonts: {
    heading: "Noto Sans Armenian",
    body: "Noto Sans Armenian",
    googleFontsUrl:
      "https://fonts.googleapis.com/css2?family=Noto+Sans+Armenian:wght@100;200;300;400&display=swap",
  },

  features: {
    preloader: true,
    parallax: true,
    hearts: true,
  },
};

(function () {
  "use strict";

  const $ = (sel, ctx = document) => ctx.querySelector(sel);
  const $$ = (sel, ctx = document) => [...ctx.querySelectorAll(sel)];

  let lenis;
  const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  function applyTheme() {
    const root = document.documentElement;
    const t = CONFIG.theme;
    root.style.setProperty("--color-primary", t.primary);
    root.style.setProperty("--color-primary-light", t.primaryLight);
    root.style.setProperty("--color-primary-dark", t.primaryDark);
    root.style.setProperty("--color-accent", t.accent);
    root.style.setProperty("--font-heading", `"${CONFIG.fonts.heading}", system-ui, sans-serif`);
    root.style.setProperty("--font-body", `"${CONFIG.fonts.body}", system-ui, sans-serif`);
    document.title = `${CONFIG.initials.bride} և ${CONFIG.initials.groom} — Հարսանիքի հրավեր`;
  }

  function populateContent() {
    $("[data-nav-logo]").textContent = `${CONFIG.initials.bride} և ${CONFIG.initials.groom}`;
    $("[data-bride-initial]").textContent = CONFIG.initials.bride;
    $("[data-groom-initial]").textContent = CONFIG.initials.groom;
    $("[data-wedding-date]").textContent = CONFIG.weddingDate;
    $("[data-footer-names]").textContent = `${CONFIG.initials.bride} և ${CONFIG.initials.groom}`;
    $("[data-footer-date]").textContent = CONFIG.weddingDate;
    $("[data-year]").textContent = new Date().getFullYear();

    const heroImg = $("[data-hero-image]");
    heroImg.src = CONFIG.hero.image;
    heroImg.alt = `${CONFIG.initials.bride} և ${CONFIG.initials.groom}`;

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
    renderMaps();
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

  function renderMaps() {
    function mapBlock(venue) {
      return `
        ${venue.image ? `<div class="venue-block__photo"><img src="${venue.image}" alt="${venue.name}" loading="lazy" /></div>` : ""}
        <p class="venue-block__address">${venue.address}</p>
        <a class="venue-block__link" href="${venue.mapsLink}" target="_blank" rel="noopener">Բացել քարտեզում →</a>
        <iframe src="${venue.embedUrl}" allowfullscreen="" loading="lazy"
          referrerpolicy="no-referrer-when-downgrade" title="${venue.name}"></iframe>`;
    }
    $("#church-map").innerHTML = mapBlock(CONFIG.church);
    $("#hall-map").innerHTML = mapBlock(CONFIG.hall);
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

  function initHeartParticles() {
    if (!CONFIG.features.hearts || prefersReducedMotion) return;

    const colors = [
      CONFIG.theme.primary,
      CONFIG.theme.primaryLight,
      CONFIG.theme.accent,
    ];

    function drawHeart(ctx, x, y, size) {
      const s = size / 2;
      ctx.beginPath();
      ctx.moveTo(0, s * 0.35);
      ctx.bezierCurveTo(0, -s * 0.2, -s, -s * 0.2, -s, s * 0.35);
      ctx.bezierCurveTo(-s, s * 0.85, 0, s * 1.25, 0, s * 1.55);
      ctx.bezierCurveTo(0, s * 1.25, s, s * 0.85, s, s * 0.35);
      ctx.bezierCurveTo(s, -s * 0.2, 0, -s * 0.2, 0, s * 0.35);
      ctx.closePath();
      ctx.fill();
    }

    function createSystem(canvas) {
      const bounds = canvas.parentElement;
      const ctx = canvas.getContext("2d");
      let w = 0;
      let h = 0;
      let hearts = [];

      function resize() {
        const rect = bounds.getBoundingClientRect();
        const dpr = window.devicePixelRatio || 1;
        w = Math.max(rect.width, 1);
        h = Math.max(rect.height, 1);
        canvas.width = w * dpr;
        canvas.height = h * dpr;
        canvas.style.width = `${w}px`;
        canvas.style.height = `${h}px`;
        ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      }

      class Heart {
        constructor(initial) {
          this.reset(initial);
        }

        reset(initial) {
          this.x = Math.random() * w;
          this.y = initial ? Math.random() * h : -20;
          this.size = Math.random() * 12 + 8;
          this.speedY = Math.random() * 0.35 + 0.15;
          this.speedX = (Math.random() - 0.5) * 0.25;
          this.wobble = Math.random() * Math.PI * 2;
          this.wobbleSpeed = Math.random() * 0.02 + 0.008;
          this.rotation = Math.random() * Math.PI * 2;
          this.rotationSpeed = (Math.random() - 0.5) * 0.015;
          this.opacity = Math.random() * 0.3 + 0.12;
          this.color = colors[Math.floor(Math.random() * colors.length)];
        }

        update() {
          this.wobble += this.wobbleSpeed;
          this.y += this.speedY;
          this.x += this.speedX + Math.sin(this.wobble) * 0.2;
          this.rotation += this.rotationSpeed;
          if (this.y > h + this.size) this.reset(false);
          if (this.x < -this.size) this.x = w + this.size;
          if (this.x > w + this.size) this.x = -this.size;
        }

        draw() {
          ctx.save();
          ctx.globalAlpha = this.opacity;
          ctx.fillStyle = this.color;
          ctx.translate(this.x, this.y);
          ctx.rotate(this.rotation);
          drawHeart(ctx, 0, 0, this.size);
          ctx.restore();
        }
      }

      resize();
      const count = Math.min(28, Math.max(6, Math.floor((w * h) / 32000)));
      hearts = Array.from({ length: count }, () => new Heart(true));

      return {
        tick() {
          ctx.clearRect(0, 0, w, h);
          hearts.forEach((heart) => {
            heart.update();
            heart.draw();
          });
        },
        resize() {
          resize();
          hearts.forEach((heart) => {
            if (heart.x > w) heart.x = Math.random() * w;
            if (heart.y > h) heart.y = Math.random() * h;
          });
        },
      };
    }

    const systems = $$(".hearts-layer").map(createSystem);
    if (!systems.length) return;

    function loop() {
      systems.forEach((system) => system.tick());
      requestAnimationFrame(loop);
    }

    window.addEventListener("resize", () => systems.forEach((system) => system.resize()));
    loop();
  }

  async function init() {
    applyTheme();
    populateContent();
    initNavigation();
    initScrollProgress();

    await initPreloader();

    initHeartParticles();
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
