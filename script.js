/* ==========================================================================
   WEDDING INVITATION — SCRIPT
   Edit ONLY the CONFIG object below to customize the entire website.
   ========================================================================== */

// ==========================================================================
// ★ CONFIGURATION — EDIT EVERYTHING HERE ★
// ==========================================================================
const CONFIG = {
  // —— Couple ——
  bride: {
    name: "Isabella",
    role: "The Bride",
    bio: "A dreamer with a heart full of grace, ready to begin forever with her soulmate.",
    photo: "images/bride.jpg", // Replace with your image path
  },
  groom: {
    name: "Alexander",
    role: "The Groom",
    bio: "Kind, devoted, and endlessly in love — excited to call her his wife.",
    photo: "images/groom.jpg",
  },

  // —— Wedding Info ——
  weddingDate: "Saturday, June 14, 2026",
  countdownTarget: "2026-06-14T16:00:00", // ISO format: YYYY-MM-DDTHH:mm:ss

  // —— Venue ——
  venue: {
    name: "The Grand Rose Garden Estate",
    address: "128 Rosewood Lane, Napa Valley, CA 94558",
    mapsLink: "https://maps.google.com/?q=Grand+Rose+Garden+Estate+Napa+Valley",
    embedUrl:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3132.0!2d-122.2869!3d38.2975!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzjCsDE3JzUxLjAiTiAxMjLCsDE3JzEyLjgiVw!5e0!3m2!1sen!2sus!4v1",
  },

  // —— Hero ——
  hero: {
    subtitle: "We invite you to celebrate our wedding",
    image: "https://images.unsplash.com/photo-1519741497674-611481863552?w=1920&q=80",
  },

  // —— Love Story ——
  story: {
    intro:
      "Every love story is beautiful, but ours is our favorite. From a chance meeting to a lifetime promise — here is how our hearts found their way home.",
    background: "https://images.unsplash.com/photo-1522673607200-164d1b6ce486?w=1920&q=80",
    timeline: [
      { year: "2018", title: "First Glance", text: "Our eyes met across a crowded café — and the world stood still." },
      { year: "2019", title: "First Date", text: "A sunset walk that turned into hours of laughter and endless conversation." },
      { year: "2021", title: "Moving In", text: "We built a home filled with music, morning coffee, and quiet joy." },
      { year: "2024", title: "The Proposal", text: "Under a canopy of stars, he asked — and she said yes with tears of happiness." },
      { year: "2026", title: "Forever Begins", text: "We say 'I do' and begin the greatest adventure of all." },
    ],
  },

  // —— Wedding Details Cards ——
  details: [
    { icon: "💒", title: "Ceremony", text: "4:00 PM · Rose Garden Chapel" },
    { icon: "🥂", title: "Cocktail Hour", text: "5:30 PM · Terrace Lounge" },
    { icon: "🍽️", title: "Reception", text: "7:00 PM · Grand Ballroom" },
    { icon: "👗", title: "Dress Code", text: "Formal / Black Tie Optional" },
  ],

  // —— Day Schedule ——
  schedule: [
    { time: "3:00", title: "Guest Arrival", description: "Welcome drinks and seating" },
    { time: "4:00", title: "Wedding Ceremony", description: "Exchange of vows in the garden chapel" },
    { time: "5:30", title: "Cocktail Hour", description: "Hors d'oeuvres and live acoustic music" },
    { time: "7:00", title: "Reception Dinner", description: "Speeches, dinner, and first dance" },
    { time: "10:00", title: "Farewell", description: "Sparkler send-off under the stars" },
  ],

  // —— Gallery ——
  gallery: [
    "https://images.unsplash.com/photo-1606216794074-735e91aa2c92?w=800&q=80",
    "https://images.unsplash.com/photo-1511285560929-80b456fea0bc?w=800&q=80",
    "https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?w=800&q=80",
    "https://images.unsplash.com/photo-1520854221256-17451cc791c5?w=800&q=80",
    "https://images.unsplash.com/photo-1519225421980-715cb0215aed?w=800&q=80",
    "https://images.unsplash.com/photo-1465495976277-31d44c8a0c9e?w=800&q=80",
  ],

  // —— RSVP ——
  rsvp: {
    text: "Your presence would mean the world to us. Please let us know if you can join our celebration by the date below.",
    link: "https://forms.google.com/", // Replace with your RSVP form URL
    note: "Kindly respond by May 1, 2026",
    background: "https://images.unsplash.com/photo-1519741497674-611481863552?w=1200&q=80",
  },

  // —— Family & Friends ——
  family: [
    { group: "Bride's Parents", names: "Robert & Margaret Chen" },
    { group: "Groom's Parents", names: "James & Elizabeth Hartley" },
    { group: "Maid of Honor", names: "Sophia Martinez" },
    { group: "Best Man", names: "Daniel Brooks" },
    { group: "Bridesmaids", names: "Emma · Lily · Grace" },
    { group: "Groomsmen", names: "Michael · Chris · Ryan" },
  ],

  // —— Contact ——
  contact: [
    { label: "Bride", value: "isabella@email.com", href: "mailto:isabella@email.com" },
    { label: "Groom", value: "alexander@email.com", href: "mailto:alexander@email.com" },
    { label: "Phone", value: "+1 (555) 123-4567", href: "tel:+15551234567" },
  ],

  // —— Music ——
  music: {
    url: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3", // Replace with your MP3 URL
    enabled: true,
  },

  // —— Theme & Typography ——
  theme: {
    primary: "#c9a87c",
    primaryLight: "#e8d5b5",
    primaryDark: "#9a7b4f",
    accent: "#d4a5a5",
    presets: [
      { name: "Champagne", primary: "#c9a87c", accent: "#d4a5a5" },
      { name: "Blush", primary: "#d4a5a5", accent: "#e8c4c4" },
      { name: "Sage", primary: "#8fa68e", accent: "#b8c9b7" },
      { name: "Navy", primary: "#5b6b8a", accent: "#9aa8c4" },
    ],
  },

  fonts: {
    heading: "Cormorant Garamond",
    body: "Montserrat",
    googleFontsUrl:
      "https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,600;1,400&family=Montserrat:wght@300;400;500;600&display=swap",
  },

  // —— Feature Toggles ——
  features: {
    particles: true,
    petals: true,
    cursorGlow: true,
    darkMode: true,
    themePicker: true,
    preloader: true,
    parallax: true,
  },
};

// ==========================================================================
// DO NOT EDIT BELOW unless customizing behavior
// ==========================================================================

(function () {
  "use strict";

  const $ = (sel, ctx = document) => ctx.querySelector(sel);
  const $$ = (sel, ctx = document) => [...ctx.querySelectorAll(sel)];

  let lenis;
  let lightboxIndex = 0;
  const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  // —— Apply theme from CONFIG ——
  function applyTheme() {
    const root = document.documentElement;
    const t = CONFIG.theme;
    root.style.setProperty("--color-primary", t.primary);
    root.style.setProperty("--color-primary-light", t.primaryLight);
    root.style.setProperty("--color-primary-dark", t.primaryDark);
    root.style.setProperty("--color-accent", t.accent);
    root.style.setProperty("--font-heading", `"${CONFIG.fonts.heading}", Georgia, serif`);
    root.style.setProperty("--font-body", `"${CONFIG.fonts.body}", system-ui, sans-serif`);

    document.title = `${CONFIG.bride.name} & ${CONFIG.groom.name} — Wedding`;
  }

  // —— Populate static content ——
  function populateContent() {
    const initials = `${CONFIG.bride.name.charAt(0)} & ${CONFIG.groom.name.charAt(0)}`;

    $("[data-nav-logo]").textContent = initials;
    $("[data-bride-name]").textContent = CONFIG.bride.name;
    $("[data-groom-name]").textContent = CONFIG.groom.name;
    $("[data-hero-subtitle]").textContent = CONFIG.hero.subtitle;
    $("[data-wedding-date]").textContent = CONFIG.weddingDate;
    $("[data-footer-names]").textContent = `${CONFIG.bride.name} & ${CONFIG.groom.name}`;
    $("[data-footer-date]").textContent = CONFIG.weddingDate;
    $("[data-year]").textContent = new Date().getFullYear();

    const heroImg = $("[data-hero-image]");
    heroImg.src = CONFIG.hero.image;
    heroImg.alt = `${CONFIG.bride.name} and ${CONFIG.groom.name}`;

    $("[data-story-intro]").textContent = CONFIG.story.intro;
    $("[data-story-bg]").style.backgroundImage = `url(${CONFIG.story.background})`;
    $("[data-rsvp-bg]").style.backgroundImage = `url(${CONFIG.rsvp.background})`;
    $("[data-rsvp-text]").textContent = CONFIG.rsvp.text;
    $("[data-rsvp-note]").textContent = CONFIG.rsvp.note;

    const rsvpLink = $("#rsvp-link");
    rsvpLink.href = CONFIG.rsvp.link;

    renderCouple();
    renderTimeline();
    renderDetails();
    renderSchedule();
    renderGallery();
    renderFamily();
    renderContact();
    renderMap();
    renderCountdown();
    renderThemePicker();
    setupMusic();
  }

  function renderCouple() {
    const grid = $("#couple-grid");
    const people = [
      { ...CONFIG.bride, role: CONFIG.bride.role },
      { ...CONFIG.groom, role: CONFIG.groom.role },
    ];

    grid.innerHTML = people
      .map(
        (p, i) => `
      <article class="couple__card" data-aos="fade-up" data-aos-delay="${i * 150}">
        <div class="couple__photo-wrap">
          <img class="couple__photo" src="${p.photo}" alt="${p.name}" loading="lazy"
            onerror="this.src='https://images.unsplash.com/photo-1529636798458-9218f81d1b0e?w=600&q=80'" />
        </div>
        <p class="couple__role">${p.role}</p>
        <h3 class="couple__name">${p.name}</h3>
        <p class="couple__bio">${p.bio}</p>
      </article>`
      )
      .join("");
  }

  function renderTimeline() {
    $("#timeline").innerHTML = CONFIG.story.timeline
      .map(
        (item, i) => `
      <div class="timeline__item" data-aos="fade-left" data-aos-delay="${i * 80}">
        <span class="timeline__dot"></span>
        <p class="timeline__year">${item.year}</p>
        <h3 class="timeline__title">${item.title}</h3>
        <p class="timeline__text">${item.text}</p>
      </div>`
      )
      .join("");
  }

  function renderDetails() {
    $("#details-grid").innerHTML = CONFIG.details
      .map(
        (d, i) => `
      <div class="detail-card glass" data-aos="fade-up" data-aos-delay="${i * 100}">
        <div class="detail-card__icon">${d.icon}</div>
        <h3 class="detail-card__title">${d.title}</h3>
        <p class="detail-card__text">${d.text}</p>
      </div>`
      )
      .join("");
  }

  function renderSchedule() {
    $("#schedule-list").innerHTML = CONFIG.schedule
      .map(
        (s, i) => `
      <div class="schedule__item" data-aos="fade-right" data-aos-delay="${i * 80}">
        <span class="schedule__time">${s.time}</span>
        <div class="schedule__info">
          <h3>${s.title}</h3>
          <p>${s.description}</p>
        </div>
      </div>`
      )
      .join("");
  }

  function renderGallery() {
    const grid = $("#gallery-grid");
    grid.innerHTML = CONFIG.gallery
      .map(
        (src, i) => `
      <div class="gallery__item" data-index="${i}" data-aos="zoom-in" data-aos-delay="${(i % 4) * 80}">
        <img src="${src}" alt="Gallery photo ${i + 1}" loading="lazy" />
      </div>`
      )
      .join("");

    grid.addEventListener("click", (e) => {
      const item = e.target.closest(".gallery__item");
      if (!item) return;
      openLightbox(Number(item.dataset.index));
    });
  }

  function renderFamily() {
    $("#family-grid").innerHTML = CONFIG.family
      .map(
        (f, i) => `
      <div class="family__card" data-aos="flip-left" data-aos-delay="${i * 60}">
        <p class="family__group">${f.group}</p>
        <p class="family__names">${f.names}</p>
      </div>`
      )
      .join("");
  }

  function renderContact() {
    $("#footer-contact").innerHTML = CONFIG.contact
      .map((c) => `<a href="${c.href}"><strong>${c.label}:</strong> ${c.value}</a>`)
      .join("");
  }

  function renderMap() {
    $("#map-info").innerHTML = `
      <h3 class="map__venue">${CONFIG.venue.name}</h3>
      <p class="map__address">${CONFIG.venue.address}</p>
      <a class="map__link" href="${CONFIG.venue.mapsLink}" target="_blank" rel="noopener">Open in Google Maps →</a>`;

    $("#map-embed").innerHTML = `<iframe
      src="${CONFIG.venue.embedUrl}"
      allowfullscreen=""
      loading="lazy"
      referrerpolicy="no-referrer-when-downgrade"
      title="Wedding venue location"></iframe>`;
  }

  function renderCountdown() {
    const grid = $("#countdown-grid");
    const units = [
      { id: "days", label: "Days" },
      { id: "hours", label: "Hours" },
      { id: "minutes", label: "Minutes" },
      { id: "seconds", label: "Seconds" },
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
            scale: [1.15, 1],
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

  function renderThemePicker() {
    if (!CONFIG.features.themePicker) return;
    const picker = $("#theme-picker");
    picker.innerHTML = CONFIG.theme.presets
      .map(
        (p, i) =>
          `<button class="theme-picker__dot${i === 0 ? " is-active" : ""}"
            style="background:${p.primary}"
            data-primary="${p.primary}"
            data-accent="${p.accent}"
            title="${p.name}"
            aria-label="Theme: ${p.name}"></button>`
      )
      .join("");

    picker.addEventListener("click", (e) => {
      const dot = e.target.closest(".theme-picker__dot");
      if (!dot) return;
      $$(".theme-picker__dot").forEach((d) => d.classList.remove("is-active"));
      dot.classList.add("is-active");
      document.documentElement.style.setProperty("--color-primary", dot.dataset.primary);
      document.documentElement.style.setProperty("--color-accent", dot.dataset.accent);
    });
  }

  function setupMusic() {
    const audio = $("#bg-music");
    const btn = $("#music-btn");
    if (!CONFIG.music.enabled || !CONFIG.music.url) {
      btn.closest(".footer__music").style.display = "none";
      return;
    }
    audio.src = CONFIG.music.url;

    btn.addEventListener("click", () => {
      if (audio.paused) {
        audio.play().then(() => btn.classList.add("is-playing")).catch(() => {});
      } else {
        audio.pause();
        btn.classList.remove("is-playing");
      }
    });
  }

  // —— Lightbox ——
  function openLightbox(index) {
    lightboxIndex = index;
    const lb = $("#lightbox");
    const img = $(".lightbox__img", lb);
    img.src = CONFIG.gallery[index];
    img.alt = `Photo ${index + 1}`;
    lb.classList.add("is-open");
    lb.setAttribute("aria-hidden", "false");
    document.body.style.overflow = "hidden";
  }

  function closeLightbox() {
    const lb = $("#lightbox");
    lb.classList.remove("is-open");
    lb.setAttribute("aria-hidden", "true");
    document.body.style.overflow = "";
  }

  function initLightbox() {
    const lb = $("#lightbox");
    $(".lightbox__close", lb).addEventListener("click", closeLightbox);
    lb.addEventListener("click", (e) => {
      if (e.target === lb) closeLightbox();
    });
    $(".lightbox__prev", lb).addEventListener("click", () => {
      lightboxIndex = (lightboxIndex - 1 + CONFIG.gallery.length) % CONFIG.gallery.length;
      $(".lightbox__img", lb).src = CONFIG.gallery[lightboxIndex];
    });
    $(".lightbox__next", lb).addEventListener("click", () => {
      lightboxIndex = (lightboxIndex + 1) % CONFIG.gallery.length;
      $(".lightbox__img", lb).src = CONFIG.gallery[lightboxIndex];
    });
    document.addEventListener("keydown", (e) => {
      if (!lb.classList.contains("is-open")) return;
      if (e.key === "Escape") closeLightbox();
    });
  }

  // —— Preloader ——
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

  // —— Navigation ——
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

    // Active section highlight
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

  // —— Dark mode ——
  function initDarkMode() {
    if (!CONFIG.features.darkMode) {
      $("#theme-toggle")?.remove();
      return;
    }

    const toggle = $("#theme-toggle");
    const stored = localStorage.getItem("wedding-theme");
    if (stored === "dark") document.documentElement.setAttribute("data-theme", "dark");

    toggle.addEventListener("click", () => {
      const isDark = document.documentElement.getAttribute("data-theme") === "dark";
      if (isDark) {
        document.documentElement.removeAttribute("data-theme");
        localStorage.setItem("wedding-theme", "light");
      } else {
        document.documentElement.setAttribute("data-theme", "dark");
        localStorage.setItem("wedding-theme", "dark");
      }
    });
  }

  // —— Lenis smooth scroll ——
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

  // —— GSAP animations ——
  function initGSAP() {
    if (prefersReducedMotion || typeof gsap === "undefined") return;

    gsap.registerPlugin(ScrollTrigger);

    // Hero parallax
    if (CONFIG.features.parallax) {
      gsap.to(".hero__image", {
        yPercent: 20,
        ease: "none",
        scrollTrigger: {
          trigger: ".hero",
          start: "top top",
          end: "bottom top",
          scrub: true,
        },
      });

      gsap.to(".story__bg", {
        yPercent: 15,
        ease: "none",
        scrollTrigger: {
          trigger: ".story",
          start: "top bottom",
          end: "bottom top",
          scrub: true,
        },
      });
    }

    // Section reveals
    gsap.utils.toArray(".section__title").forEach((title) => {
      gsap.from(title, {
        opacity: 0,
        y: 40,
        duration: 1,
        scrollTrigger: { trigger: title, start: "top 85%", toggleActions: "play none none none" },
      });
    });

    // Countdown float
    gsap.to(".countdown__item", {
      y: -6,
      duration: 2,
      repeat: -1,
      yoyo: true,
      stagger: 0.2,
      ease: "sine.inOut",
    });
  }

  // —— Splitting.js text ——
  function initSplitting() {
    if (prefersReducedMotion || typeof Splitting === "undefined") return;

    Splitting({ target: "[data-split]" });

    $$("[data-split].splitting").forEach((el) => {
      const chars = el.querySelectorAll(".char");
      if (typeof gsap !== "undefined") {
        gsap.to(chars, {
          opacity: 1,
          y: 0,
          duration: 0.6,
          stagger: 0.03,
          ease: "power3.out",
          scrollTrigger: { trigger: el, start: "top 88%", toggleActions: "play none none none" },
        });
      }
    });
  }

  // —— AOS ——
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

  // —— Scroll progress ——
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

  // —— Cursor glow ——
  function initCursorGlow() {
    if (!CONFIG.features.cursorGlow || prefersReducedMotion) return;
    const glow = $(".cursor-glow");
    if (!glow) return;

    let x = 0;
    let y = 0;
    let cx = 0;
    let cy = 0;

    document.addEventListener("mousemove", (e) => {
      x = e.clientX;
      y = e.clientY;
    });

    function animate() {
      cx += (x - cx) * 0.12;
      cy += (y - cy) * 0.12;
      glow.style.left = `${cx}px`;
      glow.style.top = `${cy}px`;
      requestAnimationFrame(animate);
    }
    animate();
  }

  // —— Floating particles ——
  function initParticles() {
    if (!CONFIG.features.particles || prefersReducedMotion) return;
    const canvas = $("#particles-canvas");
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    let particles = [];
    let w, h;

    function resize() {
      w = canvas.width = window.innerWidth;
      h = canvas.height = window.innerHeight;
    }

    class Particle {
      constructor() {
        this.reset();
      }
      reset() {
        this.x = Math.random() * w;
        this.y = Math.random() * h;
        this.size = Math.random() * 2 + 0.5;
        this.speedX = (Math.random() - 0.5) * 0.3;
        this.speedY = (Math.random() - 0.5) * 0.3;
        this.opacity = Math.random() * 0.4 + 0.1;
      }
      update() {
        this.x += this.speedX;
        this.y += this.speedY;
        if (this.x < 0 || this.x > w || this.y < 0 || this.y > h) this.reset();
      }
      draw() {
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(201, 168, 124, ${this.opacity})`;
        ctx.fill();
      }
    }

    resize();
    const count = Math.min(50, Math.floor((w * h) / 25000));
    particles = Array.from({ length: count }, () => new Particle());

    function loop() {
      ctx.clearRect(0, 0, w, h);
      particles.forEach((p) => {
        p.update();
        p.draw();
      });
      requestAnimationFrame(loop);
    }

    window.addEventListener("resize", resize);
    loop();
  }

  // —— Flower petals ——
  function initPetals() {
    if (!CONFIG.features.petals || prefersReducedMotion) return;
    const container = $(".petals-container");
    if (!container) return;

    const count = window.innerWidth < 768 ? 8 : 15;
    for (let i = 0; i < count; i++) {
      const petal = document.createElement("span");
      petal.className = "petal";
      petal.style.left = `${Math.random() * 100}%`;
      petal.style.animationDuration = `${12 + Math.random() * 18}s`;
      petal.style.animationDelay = `${Math.random() * 10}s`;
      petal.style.width = petal.style.height = `${8 + Math.random() * 8}px`;
      container.appendChild(petal);
    }
  }

  // —— Lazy load fallback for images ——
  function initLazyImages() {
    if (!("IntersectionObserver" in window)) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          const img = entry.target;
          if (img.dataset.src) {
            img.src = img.dataset.src;
            img.removeAttribute("data-src");
          }
          observer.unobserve(img);
        });
      },
      { rootMargin: "200px" }
    );

    $$("img[loading='lazy']").forEach((img) => observer.observe(img));
  }

  // —— Boot ——
  async function init() {
    applyTheme();
    populateContent();
    initNavigation();
    initDarkMode();
    initLightbox();
    initScrollProgress();
    initCursorGlow();
    initParticles();
    initPetals();
    initLazyImages();

    await initPreloader();

    initLenis();
    initGSAP();
    initSplitting();
    initAOS();

    // Refresh after dynamic content
    if (typeof AOS !== "undefined") AOS.refresh();
    if (typeof ScrollTrigger !== "undefined") ScrollTrigger.refresh();
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init);
  } else {
    init();
  }
})();
