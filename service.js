/* =========================
   LOADER
========================= */

const loader = document.getElementById("loader");

window.addEventListener("load", () => {

    setTimeout(() => {
        loader.classList.add("hide");
    }, 900);

});

setTimeout(() => {

    if (loader) {
        loader.classList.add("hide");
    }

}, 3500);



/* =========================
   NAVBAR
========================= */

const navbar = document.getElementById("navbar");

window.addEventListener("scroll", () => {

    if (window.scrollY > 30) {
        navbar.classList.add("scrolled");
    } else {
        navbar.classList.remove("scrolled");
    }

});



/* =========================
   MOBILE MENU
========================= */

const menuToggle = document.getElementById("menuToggle");
const navMenu = document.getElementById("navMenu");

menuToggle.addEventListener("click", () => {

    navMenu.classList.toggle("show");

    const icon = menuToggle.querySelector("i");

    if (navMenu.classList.contains("show")) {

        icon.classList.remove("fa-bars");
        icon.classList.add("fa-xmark");

    } else {

        icon.classList.remove("fa-xmark");
        icon.classList.add("fa-bars");

    }

});


document.querySelectorAll(".nav-menu a").forEach(link => {

    link.addEventListener("click", () => {

        navMenu.classList.remove("show");

        const icon = menuToggle.querySelector("i");

        icon.classList.remove("fa-xmark");
        icon.classList.add("fa-bars");

    });

});



/* =========================
   SERVICE DATA
========================= */

const services = {

    "blood-bank": {

        number: "01",

        category: "BLOOD BANK",

        title: "Blood support when every moment matters.",

        icon: "fa-droplet",

        description:
            "Blood bank services support patients who require blood or blood components during emergency care, surgery, medical treatment and other clinical situations.",

        features: [
            "Blood grouping and compatibility support",
            "Blood collection and storage support",
            "Blood availability information",
            "Transfusion-related support",
            "Emergency blood support when required"
        ]

    },


    "ambulance": {

        number: "02",

        category: "AMBULANCE",

        title: "Rapid response when every second counts.",

        icon: "fa-truck-medical",

        description:
            "Ambulance services support emergency transportation and patient transfers when timely and safe movement to medical care is required.",

        features: [
            "Emergency transportation support",
            "Patient transfer support",
            "Urgent transportation coordination",
            "Patient safety during transport",
            "Connection with emergency medical care"
        ]

    },


    "laboratory": {

        number: "03",

        category: "LABORATORY",

        title: "Reliable testing for better medical decisions.",

        icon: "fa-flask",

        description:
            "Laboratory services provide diagnostic information that can help healthcare professionals understand a patient's condition, support diagnosis and monitor treatment.",

        features: [
            "Hematology investigations",
            "Biochemistry testing",
            "Routine urine investigations",
            "Clinical laboratory testing",
            "Diagnostic testing support"
        ]

    },


    "emergency": {

        number: "04",

        category: "EMERGENCY CARE",

        title: "Immediate care when you need it most.",

        icon: "fa-truck-medical",

        description:
            "Emergency care is intended for urgent medical situations where prompt assessment and appropriate medical attention are required.",

        features: [
            "Urgent medical assessment",
            "Emergency medical support",
            "Time-sensitive care coordination",
            "Emergency transportation support",
            "Immediate access to appropriate medical care"
        ]

    },


    "diagnostics": {

        number: "05",

        category: "DIAGNOSTICS",

        title: "Clearer answers through diagnostic care.",

        icon: "fa-x-ray",

        description:
            "Diagnostic services help healthcare professionals investigate symptoms, understand medical conditions and support treatment decisions through appropriate investigations.",

        features: [
            "Diagnostic imaging support",
            "X-ray investigations",
            "Ultrasound investigations",
            "ECG and heart-related investigations",
            "Clinical diagnostic support"
        ]

    },


    "cardiology": {

        number: "06",

        category: "CARDIOLOGY",

        title: "Dedicated care for heart health.",

        icon: "fa-heart-pulse",

        description:
            "Cardiology services focus on cardiovascular health, evaluation of heart-related symptoms and appropriate medical follow-up for patients requiring heart health support.",

        features: [
            "Cardiovascular health assessment",
            "Heart-related medical consultation",
            "ECG support where appropriate",
            "Evaluation of cardiovascular symptoms",
            "Ongoing cardiovascular care and follow-up"
        ]

    },


    "general-medicine": {

        number: "07",

        category: "GENERAL MEDICINE",

        title: "Everyday healthcare, thoughtfully delivered.",

        icon: "fa-stethoscope",

        description:
            "General medicine provides support for common health concerns, medical consultations, health assessments, chronic condition management and continuing healthcare needs.",

        features: [
            "General medical consultation",
            "Health assessment and evaluation",
            "Common health condition support",
            "Chronic condition follow-up",
            "Preventive healthcare support"
        ]

    }

};



/* =========================
   MODAL ELEMENTS
========================= */

const modal = document.getElementById("serviceModal");
const modalOverlay = document.getElementById("modalOverlay");
const modalClose = document.getElementById("modalClose");

const modalIcon = document.getElementById("modalIcon");
const modalCategory = document.getElementById("modalCategory");
const modalTitle = document.getElementById("modalTitle");

const modalDescription = document.getElementById("modalDescription");
const modalFeatures = document.getElementById("modalFeatures");

const serviceName = document.getElementById("serviceName");

const registrationForm =
    document.getElementById("registrationForm");

const formSuccess =
    document.getElementById("formSuccess");

const successClose =
    document.getElementById("successClose");



/* =========================
   OPEN MODAL
========================= */

document.querySelectorAll(".service-action").forEach(button => {

    button.addEventListener("click", () => {

        const serviceId = button.dataset.service;

        const service = services[serviceId];

        if (!service) return;


        modalIcon.innerHTML =
            `<i class="fa-solid ${service.icon}"></i>`;

        modalCategory.textContent =
            service.category;

        modalTitle.textContent =
            service.title;

        modalDescription.textContent =
            service.description;


        modalFeatures.innerHTML = "";


        service.features.forEach(feature => {

            const item = document.createElement("div");

            item.innerHTML = `
                <i class="fa-solid fa-check"></i>
                <span>${feature}</span>
            `;

            modalFeatures.appendChild(item);

        });


        serviceName.value =
            service.category;


        registrationForm.style.display = "block";

        formSuccess.classList.remove("show");


        modal.classList.add("show");

        document.body.classList.add("modal-open");

    });

});



/* =========================
   CLOSE MODAL
========================= */

function closeModal() {

    modal.classList.remove("show");

    document.body.classList.remove("modal-open");

}


modalClose.addEventListener("click", closeModal);

modalOverlay.addEventListener("click", closeModal);

successClose.addEventListener("click", closeModal);



/* =========================
   ESCAPE KEY
========================= */

document.addEventListener("keydown", event => {

    if (event.key === "Escape" &&
        modal.classList.contains("show")) {

        closeModal();

    }

});



/* =========================
   REGISTRATION FORM
========================= */

registrationForm.addEventListener("submit", event => {

    event.preventDefault();


    registrationForm.style.display = "none";

    formSuccess.classList.add("show");

});



/* =========================
   SCROLL REVEAL
========================= */

const revealElements =
    document.querySelectorAll(".reveal");


const revealObserver =
    new IntersectionObserver(
        entries => {

            entries.forEach(entry => {

                if (entry.isIntersecting) {

                    entry.target.classList.add("visible");

                    revealObserver.unobserve(
                        entry.target
                    );

                }

            });

        },
        {
            threshold: 0.12
        }
    );


revealElements.forEach(element => {

    revealObserver.observe(element);

});



/* =========================
   QUICK NAV ACTIVE STATE
========================= */

const serviceSections =
    document.querySelectorAll(
        ".service-section"
    );

const quickLinks =
    document.querySelectorAll(
        ".quick-grid a[href^='#']"
    );


const sectionObserver =
    new IntersectionObserver(
        entries => {

            entries.forEach(entry => {

                if (entry.isIntersecting) {

                    const id =
                        entry.target.id;

                    quickLinks.forEach(link => {

                        link.classList.remove("active");

                        if (
                            link.getAttribute("href") ===
                            `#${id}`
                        ) {

                            link.classList.add("active");

                        }

                    });

                }

            });

        },
        {
            rootMargin: "-30% 0px -55% 0px"
        }
    );


serviceSections.forEach(section => {

    sectionObserver.observe(section);

});