const nav = document.querySelector(".navbar");
const menuBtn = document.getElementById("menuBtn");
const themeBtn = document.getElementById("themeBtn");

menuBtn.addEventListener("click", () => {
  nav.classList.toggle("menu-open");
});

document.querySelectorAll("#navLinks a").forEach(link => {
  link.addEventListener("click", () => nav.classList.remove("menu-open"));
});

themeBtn.addEventListener("click", () => {
  document.body.classList.toggle("dark");
  localStorage.setItem("portfolio-theme", document.body.classList.contains("dark") ? "dark" : "light");
});

if (localStorage.getItem("portfolio-theme") === "dark") {
  document.body.classList.add("dark");
}

const certificates = {
  "python-foundation": {
    title: "Foundation of Coding with Python",
    file: "certificates/foundation-of-coding-with-python.pdf",
    type: "pdf"
  },
  "javascript-infosys": {
    title: "JavaScript — Infosys Springboard",
    file: "certificates/javascript-infosys.pdf",
    type: "pdf"
  },
  "uiux": {
    title: "UI/UX Design",
    file: "certificates/ui-ux-design.pdf",
    type: "pdf"
  },
  "python-oop": {
    title: "Object Oriented Programming using Python",
    file: "certificates/python-oop.pdf",
    type: "pdf"
  },
  "android": {
    title: "Android Developer Virtual Internship",
    file: "certificates/android-developer-internship.jpg",
    type: "image"
  }
};

const modal = document.getElementById("certModal");
const modalTitle = document.getElementById("modalTitle");
const certFrame = document.getElementById("certFrame");
const certImage = document.getElementById("certImage");
const openCertificate = document.getElementById("openCertificate");

document.querySelectorAll(".certificate-trigger").forEach(card => {
  card.addEventListener("click", () => {
    const cert = certificates[card.dataset.cert];
    if (!cert) return;

    modalTitle.textContent = cert.title;
    openCertificate.href = cert.file;

    if (cert.type === "image") {
      certFrame.style.display = "none";
      certImage.style.display = "block";
      certImage.src = cert.file;
    } else {
      certImage.style.display = "none";
      certFrame.style.display = "block";
      certFrame.src = cert.file;
    }

    modal.classList.add("open");
    modal.setAttribute("aria-hidden", "false");
    document.body.style.overflow = "hidden";
  });
});

function closeModal() {
  modal.classList.remove("open");
  modal.setAttribute("aria-hidden", "true");
  certFrame.src = "";
  certImage.src = "";
  document.body.style.overflow = "";
}

document.getElementById("closeModal").addEventListener("click", closeModal);
document.getElementById("modalBackdrop").addEventListener("click", closeModal);
document.addEventListener("keydown", e => {
  if (e.key === "Escape") closeModal();
});
