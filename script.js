(function () {
  "use strict";

  /* ---- DOM REFERENCES ---- */
  const modalOverlay  = document.getElementById("modalOverlay");
  const modalClose    = document.getElementById("modalClose");
  const bookingForm   = document.getElementById("bookingForm");
  const scrollTopBtn  = document.getElementById("scrollTop");
  const navbar        = document.querySelector(".navbar");
  const hamburger     = document.getElementById("hamburger");
  const mobileMenu    = document.getElementById("mobileMenu");
  const featureCards  = document.querySelectorAll(".feature-card");

  /* ---- CTA BUTTONS ---- */
  const ctaButtons = [
    document.getElementById("heroCtaBtn"),
    document.getElementById("navCtaBtn"),
    document.getElementById("mobileCtaBtn"),
    document.getElementById("footerCtaBtn"),
  ];
  ctaButtons.forEach((btn) => {
    if (btn) btn.addEventListener("click", openModal);
  });

  /* ---- MODAL ---- */
  function openModal() {
    modalOverlay.classList.add("open");
    document.body.style.overflow = "hidden";
    // focus first input
    const firstInput = modalOverlay.querySelector("input, select, textarea");
    if (firstInput) setTimeout(() => firstInput.focus(), 100);
  }

  function closeModal() {
    modalOverlay.classList.remove("open");
    document.body.style.overflow = "";
  }

  modalClose.addEventListener("click", closeModal);

  // Close on overlay click (outside modal box)
  modalOverlay.addEventListener("click", function (e) {
    if (e.target === modalOverlay) closeModal();
  });

  // Close on ESC key
  document.addEventListener("keydown", function (e) {
    if (e.key === "Escape" && modalOverlay.classList.contains("open")) {
      closeModal();
    }
  });

  // Form submission
  bookingForm.addEventListener("submit", function (e) {
    e.preventDefault();
    const submitBtn = bookingForm.querySelector('[type="submit"]');
    submitBtn.textContent = "✓ Request Sent!";
    submitBtn.style.background = "#00C853";
    submitBtn.disabled = true;
    setTimeout(() => {
      closeModal();
      bookingForm.reset();
      submitBtn.textContent = "Send Booking Request";
      submitBtn.style.background = "";
      submitBtn.disabled = false;
    }, 2000);
  });

  /* ---- SCROLL TO TOP ---- */
  function handleScroll() {
    const scrollY = window.scrollY || document.documentElement.scrollTop;

    // Show/hide scroll-to-top button
    if (scrollY > 400) {
      scrollTopBtn.classList.add("visible");
    } else {
      scrollTopBtn.classList.remove("visible");
    }

    // Sticky navbar styling
    if (scrollY > 60) {
      navbar.classList.add("scrolled");
    } else {
      navbar.classList.remove("scrolled");
    }

    // Animate feature cards on scroll
    animateCards();
  }

  scrollTopBtn.addEventListener("click", function () {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });

  /* ---- NAVBAR HAMBURGER ---- */
  hamburger.addEventListener("click", function () {
    mobileMenu.classList.toggle("open");
    const isOpen = mobileMenu.classList.contains("open");
    hamburger.setAttribute("aria-expanded", isOpen);
    // Animate hamburger to X
    const spans = hamburger.querySelectorAll("span");
    if (isOpen) {
      spans[0].style.transform = "rotate(45deg) translate(5px, 5px)";
      spans[1].style.opacity = "0";
      spans[2].style.transform = "rotate(-45deg) translate(5px, -5px)";
    } else {
      spans[0].style.transform = "";
      spans[1].style.opacity = "";
      spans[2].style.transform = "";
    }
  });

  // Close mobile menu when a link is clicked
  mobileMenu.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", function () {
      mobileMenu.classList.remove("open");
      const spans = hamburger.querySelectorAll("span");
      spans.forEach((s) => { s.style.transform = ""; s.style.opacity = ""; });
    });
  });

  /* ---- FEATURE CARDS FADE-IN ON SCROLL (IntersectionObserver) ---- */
  function animateCards() {
    // Fallback for browsers without IntersectionObserver
    if (!("IntersectionObserver" in window)) {
      featureCards.forEach((card) => card.classList.add("visible"));
      return;
    }
  }

  // Primary method: IntersectionObserver
  if ("IntersectionObserver" in window) {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry, i) => {
          if (entry.isIntersecting) {
            // Staggered delay for each card
            const delay = (Array.from(featureCards).indexOf(entry.target) % 3) * 100;
            setTimeout(() => {
              entry.target.classList.add("visible");
            }, delay);
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.15, rootMargin: "0px 0px -40px 0px" }
    );

    featureCards.forEach((card) => observer.observe(card));
  } else {
    // Fallback: make all visible immediately
    featureCards.forEach((card) => card.classList.add("visible"));
  }

  /* ---- EVENT LISTENERS ---- */
  window.addEventListener("scroll", handleScroll, { passive: true });

  // Run once on load
  handleScroll();

})();
