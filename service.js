/* =========================================================
   LUMBINI CITY HOSPITAL
   PREMIUM SERVICES PAGE JAVASCRIPT
   ========================================================= */



   // =========================================================
// LUMBINI CITY HOSPITAL — PHARMACY PAGE
// LOADER
// =========================================================

window.addEventListener("load", function () {

    const pageLoader = document.getElementById("pageLoader");

    if (pageLoader) {

        setTimeout(function () {

            pageLoader.classList.add("hide");

        }, 600);

    }

});


/* =========================================================
   NAVBAR
========================================================= */

const navbar =
    document.getElementById("navbar");


function updateNavbar() {

    if (!navbar) {
        return;
    }


    if (window.scrollY > 30) {

        navbar.classList.add("scrolled");

    } else {

        navbar.classList.remove("scrolled");

    }

}


window.addEventListener(
    "scroll",
    updateNavbar
);


updateNavbar();



/* =========================================================
   MOBILE MENU
========================================================= */

const menuToggle =
    document.getElementById("menuToggle");

const mobileMenu =
    document.getElementById("mobileMenu");

const closeMenu =
    document.getElementById("closeMenu");

const mobileOverlay =
    document.getElementById("mobileOverlay");


function openMobileMenu() {

    if (!mobileMenu) {
        return;
    }


    mobileMenu.classList.add("show");


    if (mobileOverlay) {

        mobileOverlay.classList.add("show");

    }


    document.body.classList.add("no-scroll");


    if (menuToggle) {

        menuToggle.classList.add("menu-open");

        menuToggle.setAttribute(
            "aria-expanded",
            "true"
        );

        menuToggle.setAttribute(
            "aria-label",
            "Close menu"
        );

    }

}


function closeMobileMenu() {

    if (!mobileMenu) {
        return;
    }


    mobileMenu.classList.remove("show");


    if (mobileOverlay) {

        mobileOverlay.classList.remove("show");

    }


    document.body.classList.remove("no-scroll");


    if (menuToggle) {

        menuToggle.classList.remove("menu-open");

        menuToggle.setAttribute(
            "aria-expanded",
            "false"
        );

        menuToggle.setAttribute(
            "aria-label",
            "Open menu"
        );

    }

}



/* NAVBAR MENU BUTTON */

if (menuToggle) {

    menuToggle.addEventListener(
        "click",
        function (event) {

            event.preventDefault();

            event.stopPropagation();


            if (
                mobileMenu &&
                mobileMenu.classList.contains("show")
            ) {

                closeMobileMenu();

            } else {

                openMobileMenu();

            }

        }
    );

}



/* MOBILE X */

if (closeMenu) {

    closeMenu.addEventListener(
        "click",
        function (event) {

            event.preventDefault();

            event.stopPropagation();

            closeMobileMenu();

        }
    );

}



/* OVERLAY */

if (mobileOverlay) {

    mobileOverlay.addEventListener(
        "click",
        closeMobileMenu
    );

}



/* MOBILE LINKS */

document
    .querySelectorAll(".mobile-links a")
    .forEach(function (link) {

        link.addEventListener(
            "click",
            function () {

                closeMobileMenu();

            }
        );

    });



/* ESCAPE */

document.addEventListener(
    "keydown",
    function (event) {

        if (
            event.key === "Escape" &&
            mobileMenu &&
            mobileMenu.classList.contains("show")
        ) {

            closeMobileMenu();

        }

    }
);



/* CLOSE MOBILE MENU ON DESKTOP */

window.addEventListener(
    "resize",
    function () {

        if (window.innerWidth > 850) {

            closeMobileMenu();

        }

    }
);



/* =========================================================
   SERVICE DATA
========================================================= */

const services = {

    "blood-bank": {

        number: "01",

        category: "BLOOD BANK",

        title:
            "Blood support when every moment matters.",

        icon:
            "fa-droplet",

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

        title:
            "Rapid response when every second counts.",

        icon:
            "fa-truck-medical",

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

        title:
            "Reliable testing for better medical decisions.",

        icon:
            "fa-flask",

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

        title:
            "Immediate care when you need it most.",

        icon:
            "fa-truck-medical",

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

        title:
            "Clearer answers through diagnostic care.",

        icon:
            "fa-x-ray",

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

        title:
            "Dedicated care for heart health.",

        icon:
            "fa-heart-pulse",

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

        title:
            "Everyday healthcare, thoughtfully delivered.",

        icon:
            "fa-stethoscope",

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



/* =========================================================
   MODAL ELEMENTS
========================================================= */

const modal =
    document.getElementById("serviceModal");

const modalOverlay =
    document.getElementById("modalOverlay");

const modalClose =
    document.getElementById("modalClose");

const modalIcon =
    document.getElementById("modalIcon");

const modalCategory =
    document.getElementById("modalCategory");

const modalTitle =
    document.getElementById("modalTitle");

const modalDescription =
    document.getElementById("modalDescription");

const modalFeatures =
    document.getElementById("modalFeatures");

const serviceName =
    document.getElementById("serviceName");

const registrationForm =
    document.getElementById("registrationForm");

const formSuccess =
    document.getElementById("formSuccess");

const successClose =
    document.getElementById("successClose");



/* =========================================================
   OPEN SERVICE MODAL
========================================================= */

document
    .querySelectorAll(".service-action")
    .forEach(function (button) {

        button.addEventListener(
            "click",
            function () {

                const serviceId =
                    button.dataset.service;


                const service =
                    services[serviceId];


                if (
                    !service ||
                    !modal
                ) {

                    return;

                }


                if (modalIcon) {

                    modalIcon.innerHTML =
                        `<i class="fa-solid ${service.icon}"></i>`;

                }


                if (modalCategory) {

                    modalCategory.textContent =
                        service.category;

                }


                if (modalTitle) {

                    modalTitle.textContent =
                        service.title;

                }


                if (modalDescription) {

                    modalDescription.textContent =
                        service.description;

                }


                if (modalFeatures) {

                    modalFeatures.innerHTML =
                        "";

                    service.features.forEach(
                        function (feature) {

                            const item =
                                document.createElement(
                                    "div"
                                );


                            item.innerHTML = `

                                <i class="fa-solid fa-check"></i>

                                <span>
                                    ${feature}
                                </span>

                            `;


                            modalFeatures.appendChild(
                                item
                            );

                        }
                    );

                }


                if (serviceName) {

                    serviceName.value =
                        service.category;

                }


                if (registrationForm) {

                    registrationForm.style.display =
                        "block";

                }


                if (formSuccess) {

                    formSuccess.classList.remove(
                        "show"
                    );

                }


                modal.classList.add("show");

                document.body.classList.add(
                    "modal-open"
                );


                setTimeout(
                    function () {

                        const patientName =
                            document.getElementById(
                                "patientName"
                            );

                        if (patientName) {

                            patientName.focus();

                        }

                    },
                    300
                );

            }
        );

    });



/* =========================================================
   CLOSE MODAL
========================================================= */

function closeModal() {

    if (!modal) {
        return;
    }


    modal.classList.remove("show");

    document.body.classList.remove(
        "modal-open"
    );

}


if (modalClose) {

    modalClose.addEventListener(
        "click",
        closeModal
    );

}


if (modalOverlay) {

    modalOverlay.addEventListener(
        "click",
        closeModal
    );

}


if (successClose) {

    successClose.addEventListener(
        "click",
        closeModal
    );

}



/* =========================================================
   ESCAPE KEY FOR MODAL
========================================================= */

document.addEventListener(
    "keydown",
    function (event) {

        if (
            event.key === "Escape" &&
            modal &&
            modal.classList.contains("show")
        ) {

            closeModal();

        }

    }
);



/* =========================================================
   REGISTRATION FORM
========================================================= */

if (registrationForm) {

    registrationForm.addEventListener(
        "submit",
        function (event) {

            event.preventDefault();


            registrationForm.style.display =
                "none";


            if (formSuccess) {

                formSuccess.classList.add(
                    "show"
                );

            }

        }
    );

}



/* =========================================================
   SCROLL REVEAL
========================================================= */

const revealElements =
    document.querySelectorAll(".reveal");


if (
    "IntersectionObserver"
    in window
) {

    const revealObserver =
        new IntersectionObserver(
            function (entries) {

                entries.forEach(
                    function (entry) {

                        if (
                            entry.isIntersecting
                        ) {

                            entry.target.classList.add(
                                "visible"
                            );


                            revealObserver.unobserve(
                                entry.target
                            );

                        }

                    }
                );

            },
            {
                threshold: 0.12
            }
        );


    revealElements.forEach(
        function (element) {

            revealObserver.observe(
                element
            );

        }
    );

} else {

    revealElements.forEach(
        function (element) {

            element.classList.add(
                "visible"
            );

        }
    );

}



/* =========================================================
   QUICK SERVICE ACTIVE STATE
========================================================= */

const serviceSections =
    document.querySelectorAll(
        ".service-section"
    );


const quickLinks =
    document.querySelectorAll(
        ".quick-card[href^='#']"
    );


if (
    "IntersectionObserver"
    in window
) {

    const sectionObserver =
        new IntersectionObserver(
            function (entries) {

                entries.forEach(
                    function (entry) {

                        if (
                            entry.isIntersecting
                        ) {

                            const id =
                                entry.target.id;


                            quickLinks.forEach(
                                function (link) {

                                    link.classList.remove(
                                        "active"
                                    );


                                    if (
                                        link.getAttribute(
                                            "href"
                                        ) ===
                                        `#${id}`
                                    ) {

                                        link.classList.add(
                                            "active"
                                        );

                                    }

                                }
                            );

                        }

                    }
                );

            },
            {
                rootMargin:
                    "-30% 0px -55% 0px"
            }
        );


    serviceSections.forEach(
        function (section) {

            sectionObserver.observe(
                section
            );

        }
    );

}



/* =========================================================
   QUICK LINK SMOOTH SCROLL
========================================================= */

quickLinks.forEach(
    function (link) {

        link.addEventListener(
            "click",
            function (event) {

                const targetId =
                    link.getAttribute(
                        "href"
                    );


                const target =
                    document.querySelector(
                        targetId
                    );


                if (!target) {
                    return;
                }


                event.preventDefault();


                const navbarHeight =
                    navbar
                        ? navbar.offsetHeight
                        : 80;


                const targetPosition =
                    target.getBoundingClientRect().top +
                    window.scrollY -
                    navbarHeight -
                    10;


                window.scrollTo({

                    top:
                        targetPosition,

                    behavior:
                        "smooth"

                });

            }
        );

    }
);



/* =========================================================
   PREVENT PAST DATES
========================================================= */

const preferredDate =
    document.getElementById(
        "preferredDate"
    );


if (preferredDate) {

    const today =
        new Date();


    const year =
        today.getFullYear();


    const month =
        String(
            today.getMonth() + 1
        ).padStart(
            2,
            "0"
        );


    const day =
        String(
            today.getDate()
        ).padStart(
            2,
            "0"
        );


    preferredDate.min =
        `${year}-${month}-${day}`;

}



/* =========================================================
   PHONE NUMBER INPUT
========================================================= */

const patientPhone =
    document.getElementById(
        "patientPhone"
    );


if (patientPhone) {

    patientPhone.addEventListener(
        "input",
        function () {

            this.value =
                this.value.replace(
                    /[^0-9+\-\s]/g,
                    ""
                );

        }
    );

}



/* =========================================================
   CLOSE MODAL WITH BACKGROUND CLICK
========================================================= */

if (modal) {

    modal.addEventListener(
        "click",
        function (event) {

            if (
                event.target === modal
            ) {

                closeModal();

            }

        }
    );

}



/* =========================================================
   INITIALIZE
========================================================= */

document.addEventListener(
    "DOMContentLoaded",
    function () {

        updateNavbar();

    }
);