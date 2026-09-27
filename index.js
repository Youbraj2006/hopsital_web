// =========================================================
// INTRO / LOADER
// =========================================================

document.addEventListener("DOMContentLoaded", function () {

    const intro = document.getElementById("hospitalIntro");

    if (
        localStorage.getItem("hospitalLoggedIn") === "true"
    ) {
        if (intro) {
            intro.remove();
        }

        document.body.style.overflow = "";
        return;
    }

    if (!intro) return;

    const number = document.getElementById("loaderNumber");
    const ring = document.getElementById("ringProgress");
    const line = document.getElementById("loaderLine");
    const status = document.getElementById("loaderStatus");
    const message = document.getElementById("loaderMessage");

    document.body.style.overflow = "hidden";

    const radius = 140;

    const circumference =
        2 * Math.PI * radius;

    if (ring) {
        ring.style.strokeDasharray = circumference;
        ring.style.strokeDashoffset = circumference;
    }

    const duration = 4500;
    const startTime = performance.now();

    const stages = [
        [0, "INITIALIZING", "ESTABLISHING CARE EXPERIENCE"],
        [18, "CONNECTING", "CONNECTING HEALTHCARE SERVICES"],
        [38, "PREPARING", "PREPARING SPECIALIST CARE"],
        [58, "PROCESSING", "INITIALIZING MEDICAL SYSTEMS"],
        [78, "OPTIMIZING", "PREPARING PATIENT CARE"],
        [93, "FINALIZING", "FINALIZING YOUR EXPERIENCE"]
    ];

    let lastNumber = -1;
    let lastStage = -1;

    function animateIntro(time) {

        const elapsed = time - startTime;

        let progress = elapsed / duration;

        if (progress > 1) {
            progress = 1;
        }

        const percentage =
            Math.floor(progress * 100);

        if (percentage !== lastNumber) {

            lastNumber = percentage;

            if (number) {
                number.textContent =
                    String(percentage).padStart(2, "0");
            }

            if (line) {
                line.style.width =
                    percentage + "%";
            }

            if (ring) {

                const offset =
                    circumference -
                    circumference * progress;

                ring.style.strokeDashoffset =
                    offset;
            }
        }

        let stageIndex = 0;

        for (
            let i = stages.length - 1;
            i >= 0;
            i--
        ) {

            if (
                percentage >=
                stages[i][0]
            ) {
                stageIndex = i;
                break;
            }
        }

        if (stageIndex !== lastStage) {

            lastStage = stageIndex;

            if (status) {
                status.textContent =
                    stages[stageIndex][1];
            }

            if (message) {
                message.textContent =
                    stages[stageIndex][2];
            }
        }

        if (progress < 1) {

            requestAnimationFrame(
                animateIntro
            );

        } else {

            if (number) {
                number.textContent = "100";
            }

            if (ring) {
                ring.style.strokeDashoffset = "0";
            }

            if (line) {
                line.style.width = "100%";
            }

            if (status) {
                status.textContent = "COMPLETE";
            }

            if (message) {
                message.textContent =
                    "WELCOME TO LUMBINI CITY HOSPITAL";
            }

            setTimeout(function () {

                intro.classList.add(
                    "intro-finished"
                );

                document.body.style.overflow = "";

                setTimeout(function () {

                    if (intro) {
                        intro.remove();
                    }

                    if (
                        localStorage.getItem(
                            "hospitalLoggedIn"
                        ) !== "true"
                    ) {

                        const popup =
                            document.getElementById(
                                "loginPopup"
                            );

                        if (popup) {

                            popup.classList.add(
                                "show"
                            );

                            document.body.style.overflow =
                                "hidden";
                        }
                    }

                }, 1000);

            }, 500);
        }
    }

    requestAnimationFrame(
        animateIntro
    );

});


// =========================================================
// MOBILE MENU
// =========================================================

document.addEventListener("DOMContentLoaded", function () {

    const menuToggle =
        document.getElementById("menuToggle");

    const mobileMenu =
        document.getElementById("mobileMenu");

    const closeMenu =
        document.getElementById("closeMenu");

    const mobileOverlay =
        document.getElementById("mobileOverlay");

    if (!menuToggle || !mobileMenu) return;

    const menuIcon =
        menuToggle.querySelector("i");


    function openMobileMenu() {

        mobileMenu.classList.add("show");

        if (mobileOverlay) {
            mobileOverlay.classList.add("show");
        }

        document.body.style.overflow =
            "hidden";

        if (menuIcon) {

            menuIcon.classList.remove(
                "fa-bars"
            );

            menuIcon.classList.add(
                "fa-xmark"
            );
        }
    }


    function closeMobileMenu() {

        mobileMenu.classList.remove("show");

        if (mobileOverlay) {
            mobileOverlay.classList.remove(
                "show"
            );
        }

        document.body.style.overflow =
            "";

        if (menuIcon) {

            menuIcon.classList.remove(
                "fa-xmark"
            );

            menuIcon.classList.add(
                "fa-bars"
            );
        }
    }


    menuToggle.addEventListener(
        "click",
        function () {

            if (
                mobileMenu.classList.contains(
                    "show"
                )
            ) {

                closeMobileMenu();

            } else {

                openMobileMenu();

            }

        }
    );


    if (closeMenu) {

        closeMenu.addEventListener(
            "click",
            closeMobileMenu
        );

    }


    if (mobileOverlay) {

        mobileOverlay.addEventListener(
            "click",
            closeMobileMenu
        );

    }


    const mobileLinks =
        document.querySelectorAll(
            ".mobile-links a"
        );


    mobileLinks.forEach(function (link) {

        link.addEventListener(
            "click",
            function () {

                if (
                    !link.classList.contains(
                        "open-appointment-modal"
                    )
                ) {

                    closeMobileMenu();

                }

            }
        );

    });


    const mobileLogin =
        document.getElementById(
            "floatingAuthBtn"
        );


    if (mobileLogin) {

        mobileLogin.addEventListener(
            "click",
            function () {

                closeMobileMenu();

            }
        );

    }


    document.addEventListener(
        "keydown",
        function (event) {

            if (
                event.key === "Escape"
            ) {

                closeMobileMenu();

            }

        }
    );

});


// =========================================================
// IMAGE SLIDER
// =========================================================

const slides =
    document.querySelectorAll(".slide");

const dots =
    document.querySelectorAll(".dot");

let currentSlide = 0;


function showSlide(index) {

    slides.forEach(function (slide) {

        slide.classList.remove(
            "active-slide"
        );

    });

    dots.forEach(function (dot) {

        dot.classList.remove(
            "active-dot"
        );

    });


    if (slides[index]) {

        slides[index].classList.add(
            "active-slide"
        );

    }


    if (dots[index]) {

        dots[index].classList.add(
            "active-dot"
        );

    }


    currentSlide = index;

}


function nextSlide() {

    if (!slides.length) return;

    currentSlide++;

    if (
        currentSlide >=
        slides.length
    ) {

        currentSlide = 0;

    }

    showSlide(currentSlide);

}


if (slides.length) {

    showSlide(0);

    setInterval(
        nextSlide,
        3000
    );

}


dots.forEach(function (dot, index) {

    dot.addEventListener(
        "click",
        function () {

            showSlide(index);

        }
    );

});


// =========================================================
// NAVBAR SCROLL
// =========================================================

document.addEventListener(
    "DOMContentLoaded",
    function () {

        const navbar =
            document.getElementById("navbar");

        if (!navbar) return;


        function handleNavbar() {

            if (
                window.scrollY > 50
            ) {

                navbar.classList.add(
                    "scrolled"
                );

            } else {

                navbar.classList.remove(
                    "scrolled"
                );

            }

        }


        handleNavbar();


        window.addEventListener(
            "scroll",
            handleNavbar,
            {
                passive: true
            }
        );

    }
);


// =========================================================
// WHY CHOOSE US - ITEM ANIMATION
// =========================================================

document.addEventListener("DOMContentLoaded", function () {

    const whyItems =
        document.querySelectorAll(
            ".why-item"
        );

    if (!whyItems.length) return;


    const whyObserver =
        new IntersectionObserver(
            function (entries) {

                entries.forEach(function (entry) {

                    if (
                        entry.isIntersecting
                    ) {

                        entry.target.classList.add(
                            "show"
                        );

                    }

                });

            },
            {
                threshold: 0.15
            }
        );


    whyItems.forEach(function (item) {

        whyObserver.observe(item);

    });

});


// =========================================================
// LOGIN / LOGOUT
// =========================================================

document.addEventListener("DOMContentLoaded", function () {

    const desktopLogin =
        document.getElementById(
            "mainLoginBtn"
        );

    const mobileLogin =
        document.getElementById(
            "floatingAuthBtn"
        );

    const loginButtons = [
        desktopLogin,
        mobileLogin
    ].filter(Boolean);


    function updateLoginButtons() {

        const loggedIn =
            localStorage.getItem(
                "hospitalLoggedIn"
            ) === "true";


        loginButtons.forEach(function (button) {

            const icon =
                button.querySelector("i");

            const text =
                button.querySelector("span");


            if (loggedIn) {

                if (icon) {

                    icon.className =
                        "fa-solid fa-right-from-bracket";

                }

                if (text) {

                    text.textContent =
                        "Logout";

                }

                button.href = "#";


            } else {

                if (icon) {

                    icon.className =
                        "fa-solid fa-right-to-bracket";

                }

                if (text) {

                    text.textContent =
                        "Login";

                }

                button.href =
                    "login.html";

            }

        });

    }


    updateLoginButtons();


    loginButtons.forEach(function (button) {

        button.addEventListener(
            "click",
            function (event) {

                const loggedIn =
                    localStorage.getItem(
                        "hospitalLoggedIn"
                    ) === "true";


                if (!loggedIn) {
                    return;
                }


                event.preventDefault();


                localStorage.removeItem(
                    "hospitalLoggedIn"
                );

                localStorage.removeItem(
                    "hospitalUser"
                );


                window.location.reload();

            }
        );

    });

});


// =========================================================
// AUTO LOGIN POPUP
// =========================================================

document.addEventListener("DOMContentLoaded", function () {

    const loginPopup =
        document.getElementById(
            "loginPopup"
        );

    const loginPopupClose =
        document.getElementById(
            "loginPopupClose"
        );

    if (!loginPopup) return;


    function openLoginPopup() {

        if (
            localStorage.getItem(
                "hospitalLoggedIn"
            ) === "true"
        ) {

            return;

        }

        loginPopup.classList.add(
            "show"
        );

        document.body.style.overflow =
            "hidden";

    }


    function closeLoginPopup() {

        loginPopup.classList.remove(
            "show"
        );

        document.body.style.overflow =
            "";

    }


    if (
        localStorage.getItem(
            "hospitalLoggedIn"
        ) === "true"
    ) {

        loginPopup.classList.remove(
            "show"
        );

    }


    if (loginPopupClose) {

        loginPopupClose.addEventListener(
            "click",
            closeLoginPopup
        );

    }


    loginPopup.addEventListener(
        "click",
        function (event) {

            if (
                event.target ===
                loginPopup
            ) {

                closeLoginPopup();

            }

        }
    );


    document.addEventListener(
        "keydown",
        function (event) {

            if (
                event.key === "Escape"
            ) {

                closeLoginPopup();

            }

        }
    );


    const intro =
        document.getElementById(
            "hospitalIntro"
        );


    if (!intro) {

        if (
            localStorage.getItem(
                "hospitalLoggedIn"
            ) !== "true"
        ) {

            setTimeout(
                openLoginPopup,
                1000
            );

        }

    }

});


// =========================================================
// WHY CHOOSE US - CARE STANDARD
// =========================================================

document.addEventListener(
    "DOMContentLoaded",
    function () {

        const careSection =
            document.querySelector(
                ".care-standard"
            );

        const careHeader =
            document.querySelector(
                ".care-standard-header"
            );

        const carePoints =
            document.querySelectorAll(
                ".care-point"
            );

        if (!careSection) {
            return;
        }


        carePoints.forEach(
            function (point) {

                point.classList.add(
                    "care-hidden"
                );

            }
        );


        const careObserver =
            new IntersectionObserver(
                function (entries) {

                    entries.forEach(
                        function (entry) {

                            if (
                                entry.isIntersecting
                            ) {

                                if (careHeader) {

                                    careHeader.classList.add(
                                        "care-animate"
                                    );

                                }


                                carePoints.forEach(
                                    function (
                                        point,
                                        index
                                    ) {

                                        setTimeout(
                                            function () {

                                                point.classList.remove(
                                                    "care-hidden"
                                                );

                                                point.classList.add(
                                                    "care-visible"
                                                );

                                            },
                                            index * 160
                                        );

                                    }
                                );


                                careObserver.unobserve(
                                    careSection
                                );

                            }

                        }
                    );

                },
                {
                    threshold: 0.15
                }
            );


        careObserver.observe(
            careSection
        );

    }
);


// =========================================================
// DEPARTMENTS
// =========================================================

document.addEventListener(
    "DOMContentLoaded",
    function () {

        const departmentsSection =
            document.querySelector(
                ".departments-section"
            );

        const bodyMap =
            document.querySelector(
                ".body-medical-map"
            );

        const detail =
            document.getElementById(
                "departmentDetail"
            );

        const detailClose =
            document.getElementById(
                "detailClose"
            );

        const detailNumber =
            document.getElementById(
                "detailNumber"
            );

        const detailSmallNumber =
            document.getElementById(
                "detailSmallNumber"
            );

        const detailTitle =
            document.getElementById(
                "detailTitle"
            );

        const detailDescription =
            document.getElementById(
                "detailDescription"
            );

        const detailIcon =
            document.getElementById(
                "detailIcon"
            );

        const detailTags =
            document.getElementById(
                "detailTags"
            );


        const departmentData = {

            neurology: {
                number: "01",
                title: "Neurology",
                icon: "fa-brain",
                description:
                    "The Neurology Department at Lumbini City Hospital provides evaluation and care for conditions involving the brain, spinal cord, and nervous system. Our team focuses on accurate assessment, diagnosis, treatment planning, and ongoing monitoring to help patients manage neurological concerns with coordinated and compassionate medical care.",
                tags: [
                    "Brain Care",
                    "Nervous System",
                    "Specialized Care"
                ]
            },


            ent: {
                number: "02",
                title: "ENT",
                icon: "fa-ear-listen",
                description:
                    "The ENT Department provides specialized evaluation and treatment for conditions affecting the ear, nose, throat, and related structures. Patients receive focused assessment, diagnostic support, medical treatment, and follow-up care designed to improve hearing, breathing, communication, and overall comfort.",
                tags: [
                    "Ear Care",
                    "Nose Care",
                    "Throat Care"
                ]
            },


            cardiology: {
                number: "03",
                title: "Cardiology",
                icon: "fa-heart-pulse",
                description:
                    "The Cardiology Department focuses on the evaluation and management of heart and cardiovascular conditions. Patients receive clinical assessment, diagnostic evaluation, treatment planning, and follow-up care with attention to cardiovascular concerns and long-term heart health.",
                tags: [
                    "Heart Care",
                    "Cardiovascular",
                    "Monitoring"
                ]
            },


            respiratory: {
                number: "04",
                title: "Respiratory",
                icon: "fa-lungs",
                description:
                    "The Respiratory Department provides medical care for conditions involving the lungs and breathing system. Patients receive evaluation of respiratory symptoms, diagnostic support, treatment planning, and follow-up care for breathing-related conditions.",
                tags: [
                    "Lung Care",
                    "Breathing",
                    "Evaluation"
                ]
            },


            orthopedics: {
                number: "05",
                title: "Orthopedics",
                icon: "fa-bone",
                description:
                    "The Orthopedics Department provides evaluation and treatment for problems involving bones, joints, muscles, and movement. Patients receive assessment, diagnostic support, treatment planning, and follow-up care to support mobility and daily activities.",
                tags: [
                    "Bone Care",
                    "Joint Care",
                    "Mobility"
                ]
            },


            pediatrics: {
                number: "06",
                title: "Pediatrics",
                icon: "fa-child",
                description:
                    "The Pediatrics Department provides specialized medical care for infants, children, and adolescents. Young patients receive age-appropriate assessment, diagnosis, treatment, preventive guidance, and follow-up care in a comfortable and supportive environment.",
                tags: [
                    "Child Care",
                    "Growth",
                    "Development"
                ]
            },


            diagnostics: {
                number: "07",
                title: "Diagnostics",
                icon: "fa-microscope",
                description:
                    "The Diagnostics Department supports clinical care through medical testing and evaluation. Diagnostic services help healthcare professionals investigate symptoms, monitor conditions, and support treatment decisions through accurate and timely medical information.",
                tags: [
                    "Testing",
                    "Evaluation",
                    "Clinical Support"
                ]
            }

        };


        document
            .querySelectorAll(
                ".department-node"
            )
            .forEach(function (node) {

                node.addEventListener(
                    "click",
                    function () {

                        const department =
                            node.dataset.department;

                        const data =
                            departmentData[
                                department
                            ];

                        if (!data) return;


                        document
                            .querySelectorAll(
                                ".department-node"
                            )
                            .forEach(
                                function (item) {

                                    item.classList.remove(
                                        "selected"
                                    );

                                }
                            );


                        node.classList.add(
                            "selected"
                        );


                        if (detailNumber) {

                            detailNumber.textContent =
                                data.number;

                        }


                        if (detailSmallNumber) {

                            detailSmallNumber.textContent =
                                `${data.number} / 07`;

                        }


                        if (detailTitle) {

                            detailTitle.textContent =
                                data.title;

                        }


                        if (detailDescription) {

                            detailDescription.textContent =
                                data.description;

                        }


                        if (detailIcon) {

                            detailIcon.innerHTML = `
                                <i class="fa-solid ${data.icon}"></i>
                            `;

                        }


                        if (detailTags) {

                            detailTags.innerHTML =
                                "";

                            data.tags.forEach(
                                function (tag) {

                                    const tagElement =
                                        document.createElement(
                                            "span"
                                        );

                                    tagElement.textContent =
                                        tag;

                                    detailTags.appendChild(
                                        tagElement
                                    );

                                }
                            );

                        }


                        if (bodyMap) {

                            bodyMap.classList.add(
                                "detail-open"
                            );

                        }


                        if (detail) {

                            detail.classList.add(
                                "active"
                            );

                        }


                        document.body.style.overflow =
                            "hidden";

                    }
                );

            });


        function closeDepartment() {

            if (detail) {

                detail.classList.remove(
                    "active"
                );

            }


            if (bodyMap) {

                bodyMap.classList.remove(
                    "detail-open"
                );

            }


            document
                .querySelectorAll(
                    ".department-node"
                )
                .forEach(function (node) {

                    node.classList.remove(
                        "selected"
                    );

                });


            document.body.style.overflow =
                "";

        }


        if (detailClose) {

            detailClose.addEventListener(
                "click",
                closeDepartment
            );

        }


        if (detail) {

            detail.addEventListener(
                "click",
                function (event) {

                    if (
                        event.target ===
                        detail
                    ) {

                        closeDepartment();

                    }

                }
            );

        }


        document.addEventListener(
            "keydown",
            function (event) {

                if (
                    event.key === "Escape" &&
                    detail &&
                    detail.classList.contains(
                        "active"
                    )
                ) {

                    closeDepartment();

                }

            }
        );


        if (departmentsSection) {

            const observer =
                new IntersectionObserver(
                    function (entries) {

                        entries.forEach(
                            function (entry) {

                                if (
                                    entry.isIntersecting
                                ) {

                                    departmentsSection.classList.add(
                                        "visible"
                                    );

                                    observer.unobserve(
                                        departmentsSection
                                    );

                                }

                            }
                        );

                    },
                    {
                        threshold: 0.18
                    }
                );


            observer.observe(
                departmentsSection
            );

        }

    }
);


// =========================================================
// DEPARTMENT SCROLL
// =========================================================

document.addEventListener(
    "DOMContentLoaded",
    function () {

        const section =
            document.querySelector(
                ".departments-section"
            );

        if (!section) return;


        section.classList.add(
            "department-scroll"
        );


        const observer =
            new IntersectionObserver(
                function (entries) {

                    entries.forEach(
                        function (entry) {

                            if (
                                entry.isIntersecting
                            ) {

                                section.classList.add(
                                    "department-visible"
                                );

                            } else {

                                section.classList.remove(
                                    "department-visible"
                                );

                            }

                        }
                    );

                },
                {
                    threshold: 0.15,
                    rootMargin:
                        "0px 0px -70px 0px"
                }
            );


        observer.observe(
            section
        );

    }
);


// =========================================================
// SPECIALISTS SCROLL
// =========================================================

document.addEventListener(
    "DOMContentLoaded",
    function () {

        const section =
            document.querySelector(
                ".specialists-section"
            );

        if (!section) return;


        section.classList.add(
            "scroll-ready"
        );


        const observer =
            new IntersectionObserver(
                function (entries) {

                    entries.forEach(
                        function (entry) {

                            if (
                                entry.isIntersecting
                            ) {

                                section.classList.add(
                                    "scroll-visible"
                                );

                            } else {

                                section.classList.remove(
                                    "scroll-visible"
                                );

                            }

                        }
                    );

                },
                {
                    threshold: 0.15
                }
            );


        observer.observe(
            section
        );

    }
);


// =========================================================
// MEDICAL SPECIALISTS SLIDER
// =========================================================

const specialistsTrack =
    document.getElementById(
        "specialistsTrack"
    );

const specialistPrev =
    document.getElementById(
        "specialistPrev"
    );

const specialistNext =
    document.getElementById(
        "specialistNext"
    );

const specialistCurrent =
    document.getElementById(
        "specialistCurrent"
    );

const specialistProgress =
    document.getElementById(
        "specialistProgress"
    );

const specialistCards =
    document.querySelectorAll(
        ".specialist-card"
    );


let specialistIndex = 0;
let specialistVisible = 4;
let specialistStartX = 0;
let specialistEndX = 0;
let specialistWheelLock = false;


function getSpecialistVisible() {

    if (window.innerWidth <= 650) {
        return 2;
    }

    if (window.innerWidth <= 1100) {
        return 2;
    }

    return 4;

}


function getSpecialistDistance() {

    if (
        !specialistCards.length ||
        !specialistsTrack
    ) {
        return 0;
    }


    const card =
        specialistCards[0];

    const cardWidth =
        card.getBoundingClientRect().width;

    const trackStyle =
        window.getComputedStyle(
            specialistsTrack
        );

    const gap =
        parseFloat(
            trackStyle.gap
        ) || 0;


    return cardWidth + gap;

}


function getSpecialistMaxIndex() {

    specialistVisible =
        getSpecialistVisible();

    return Math.max(
        0,
        specialistCards.length -
        specialistVisible
    );

}


function updateSpecialists() {

    if (!specialistsTrack) return;


    const maxIndex =
        getSpecialistMaxIndex();


    if (
        specialistIndex < 0
    ) {

        specialistIndex = 0;

    }


    if (
        specialistIndex >
        maxIndex
    ) {

        specialistIndex =
            maxIndex;

    }


    const distance =
        getSpecialistDistance();

    const movement =
        specialistIndex *
        distance;


    specialistsTrack.style.transform =
        `translate3d(-${movement}px, 0, 0)`;


    const currentNumber =
        specialistIndex + 1;


    if (specialistCurrent) {

        specialistCurrent.textContent =
            currentNumber < 10
                ? "0" + currentNumber
                : currentNumber;

    }


    const progress =
        maxIndex === 0
            ? 100
            : (
                specialistIndex /
                maxIndex
            ) * 100;


    if (specialistProgress) {

        specialistProgress.style.width =
            progress + "%";

    }


    if (specialistPrev) {

        specialistPrev.disabled =
            specialistIndex === 0;

    }


    if (specialistNext) {

        specialistNext.disabled =
            specialistIndex === maxIndex;

    }

}


if (specialistNext) {

    specialistNext.addEventListener(
        "click",
        function () {

            const maxIndex =
                getSpecialistMaxIndex();


            if (
                specialistIndex <
                maxIndex
            ) {

                specialistIndex++;

                updateSpecialists();

            }

        }
    );

}


if (specialistPrev) {

    specialistPrev.addEventListener(
        "click",
        function () {

            if (
                specialistIndex > 0
            ) {

                specialistIndex--;

                updateSpecialists();

            }

        }
    );

}


if (specialistsTrack) {

    specialistsTrack.addEventListener(
        "touchstart",
        function (event) {

            specialistStartX =
                event.touches[0].clientX;

            specialistEndX =
                specialistStartX;

        },
        {
            passive: true
        }
    );


    specialistsTrack.addEventListener(
        "touchmove",
        function (event) {

            specialistEndX =
                event.touches[0].clientX;

        },
        {
            passive: true
        }
    );


    specialistsTrack.addEventListener(
        "touchend",
        function () {

            const difference =
                specialistStartX -
                specialistEndX;

            const threshold = 40;

            const maxIndex =
                getSpecialistMaxIndex();


            if (
                Math.abs(difference) >
                threshold
            ) {

                if (difference > 0) {

                    if (
                        specialistIndex <
                        maxIndex
                    ) {

                        specialistIndex++;

                    }

                } else {

                    if (
                        specialistIndex > 0
                    ) {

                        specialistIndex--;

                    }

                }

            }


            updateSpecialists();

        }
    );


    specialistsTrack.addEventListener(
        "wheel",
        function (event) {

            if (
                Math.abs(event.deltaX) <=
                Math.abs(event.deltaY)
            ) {

                return;

            }


            event.preventDefault();


            if (specialistWheelLock) {
                return;
            }


            specialistWheelLock = true;


            const maxIndex =
                getSpecialistMaxIndex();


            if (event.deltaX > 0) {

                if (
                    specialistIndex <
                    maxIndex
                ) {

                    specialistIndex++;

                }

            } else {

                if (
                    specialistIndex > 0
                ) {

                    specialistIndex--;

                }

            }


            updateSpecialists();


            setTimeout(
                function () {

                    specialistWheelLock =
                        false;

                },
                600
            );

        },
        {
            passive: false
        }
    );

}


window.addEventListener(
    "resize",
    function () {

        const maxIndex =
            getSpecialistMaxIndex();


        if (
            specialistIndex >
            maxIndex
        ) {

            specialistIndex =
                maxIndex;

        }


        updateSpecialists();

    }
);


updateSpecialists();


// =========================================================
// HOSPITAL STATISTICS
// =========================================================

document.addEventListener(
    "DOMContentLoaded",
    function () {

        const statsSection =
            document.querySelector(
                ".hospital-stats"
            );

        const counters =
            document.querySelectorAll(
                ".hospital-stats .counter"
            );


        if (
            !statsSection ||
            !counters.length
        ) {

            return;

        }


        let statsStarted = false;


        function startHospitalStats() {

            if (statsStarted) {
                return;
            }


            statsStarted = true;


            statsSection.classList.add(
                "stats-visible"
            );


            counters.forEach(
                function (counter) {

                    const target =
                        Number(
                            counter.dataset.target
                        );

                    const duration = 5000;

                    const startTime =
                        performance.now();


                    function animateCounter(
                        currentTime
                    ) {

                        const elapsed =
                            currentTime -
                            startTime;


                        let progress =
                            elapsed /
                            duration;


                        if (
                            progress > 1
                        ) {

                            progress = 1;

                        }


                        const eased =
                            1 -
                            Math.pow(
                                1 - progress,
                                3
                            );


                        const currentValue =
                            Math.floor(
                                eased *
                                target
                            );


                        counter.textContent =
                            currentValue.toLocaleString();


                        if (
                            progress < 1
                        ) {

                            requestAnimationFrame(
                                animateCounter
                            );

                        } else {

                            counter.textContent =
                                target.toLocaleString();

                        }

                    }


                    requestAnimationFrame(
                        animateCounter
                    );

                }
            );

        }


        const statsObserver =
            new IntersectionObserver(
                function (entries) {

                    entries.forEach(
                        function (entry) {

                            if (
                                entry.isIntersecting
                            ) {

                                startHospitalStats();

                                statsObserver.unobserve(
                                    entry.target
                                );

                            }

                        }
                    );

                },
                {
                    threshold: 0.25
                }
            );


        statsObserver.observe(
            statsSection
        );

    }
);


// =========================================================
// MEDICAL SERVICES
// =========================================================

document.addEventListener(
    "DOMContentLoaded",
    function () {

        const servicesSection =
            document.querySelector(
                ".medical-services"
            );

        if (!servicesSection) {
            return;
        }


        const serviceLinks =
            servicesSection.querySelectorAll(
                ".service-circle"
            );


        const observer =
            new IntersectionObserver(
                function (entries) {

                    entries.forEach(
                        function (entry) {

                            if (
                                !entry.isIntersecting
                            ) {
                                return;
                            }


                            servicesSection.classList.add(
                                "services-visible"
                            );


                            observer.unobserve(
                                entry.target
                            );

                        }
                    );

                },
                {
                    threshold: 0.15
                }
            );


        observer.observe(
            servicesSection
        );


        serviceLinks.forEach(
            function (service) {

                service.addEventListener(
                    "mouseenter",
                    function () {

                        serviceLinks.forEach(
                            function (other) {

                                if (
                                    other !== service
                                ) {

                                    other.classList.add(
                                        "service-dimmed"
                                    );

                                }

                            }
                        );

                    }
                );


                service.addEventListener(
                    "mouseleave",
                    function () {

                        serviceLinks.forEach(
                            function (other) {

                                other.classList.remove(
                                    "service-dimmed"
                                );

                            }
                        );

                    }
                );

            }
        );

    }
);


// =========================================================
// PLANES
// =========================================================

document.addEventListener(
    "DOMContentLoaded",
    function () {

        const planes =
            document.querySelectorAll(
                ".plane"
            );


        if (!planes.length) {
            return;
        }


        planes.forEach(
            function (plane, index) {

                const speed =
                    0.85 +
                    Math.random() * 0.35;


                plane.style.animationDuration =
                    `${speed * (
                        9 + index * 1.3
                    )}s`;

            }
        );

    }
);


// =========================================================
// PATIENT REVIEWS
// =========================================================

document.addEventListener(
    "DOMContentLoaded",
    function () {

        const profiles =
            document.querySelectorAll(
                ".patient-profile"
            );

        const text =
            document.getElementById(
                "reviewText"
            );

        const image =
            document.getElementById(
                "reviewPersonImage"
            );

        const name =
            document.getElementById(
                "reviewPersonName"
            );

        const department =
            document.getElementById(
                "reviewPersonDepartment"
            );

        const number =
            document.getElementById(
                "currentReview"
            );

        const progress =
            document.getElementById(
                "reviewProgress"
            );

        const box =
            document.querySelector(
                ".review-content"
            );


        if (
            !profiles.length ||
            !text ||
            !image ||
            !name ||
            !department ||
            !number ||
            !progress ||
            !box
        ) {
            return;
        }


        const reviews = [

            {
                name: "Priya Thapa",
                department: "Cardiology Patient",
                image: "image/photo1.jpg",
                text: "I was honestly nervous when I first came to the hospital because I had been dealing with chest pain for several days. From the reception desk to the doctor, everyone explained what was happening and never made me feel rushed. The doctor took time to answer all my questions, and that gave me a lot of confidence. I am really thankful to the whole team for taking such good care of me."
            },

            {
                name: "Aarav Sharma",
                department: "Orthopedics Patient",
                image: "image/photo3.jpg",
                text: "After my injury, I was worried about how long recovery would take and whether I would be able to return to my normal routine. The orthopedic team explained my condition clearly and never made me feel uncomfortable asking questions. Every visit felt organized and calm. The support I received throughout the process made a difficult period much easier for me and my family."
            },

            {
                name: "Sita Gurung",
                department: "Emergency Patient",
                image: "image/photo2.jpg",
                text: "My family brought me to the emergency department late at night, and I was quite frightened at the time. What I remember most is how quickly the team responded and how calmly they handled everything. They kept my family informed while I was being examined and treated. Even though it was a stressful night, the doctors and nurses made us feel that someone was genuinely looking after us."
            },

            {
                name: "Rohan KC",
                department: "Diagnostics Patient",
                image: "image/photo4.jpg",
                text: "I had several tests done and was initially worried because I did not really understand what each test was for. The laboratory staff patiently explained the process before starting. Everything was handled in an organized way, and I never felt uncomfortable asking questions. The experience was much smoother than I expected, and I really appreciated how respectfully the staff treated me."
            },

            {
                name: "Anisha Rai",
                department: "Pediatrics Patient",
                image: "image/photo5.jpg",
                text: "Bringing my child to a hospital is never easy because children can become scared very quickly. The pediatric team was patient and took time to make my child comfortable before beginning the examination. They explained everything clearly instead of making me feel worried or confused. I really appreciated the kindness shown to both my child and me throughout the entire visit."
            },

            {
                name: "Bibek Shrestha",
                department: "General Medicine Patient",
                image: "image/photo7.webp",
                text: "I came to the hospital after feeling unwell for several days and honestly did not know what was wrong. The doctor listened carefully to everything I had been experiencing instead of rushing through the consultation. The staff guided me through the tests and explained what I needed to do afterward. I left feeling much more informed and comfortable about my health."
            }

        ];


        let current = 0;
        let timer = null;


        function showReview(
            index,
            animate = true
        ) {

            const review =
                reviews[index];


            if (animate) {

                box.classList.remove(
                    "review-changing"
                );

                void box.offsetWidth;

                box.classList.add(
                    "review-changing"
                );

            }


            text.textContent =
                review.text;

            image.src =
                review.image;

            image.alt =
                review.name;

            name.textContent =
                review.name;

            department.textContent =
                review.department;

            number.textContent =
                String(index + 1)
                    .padStart(2, "0");

            progress.style.width =
                (
                    (index + 1) /
                    reviews.length *
                    100
                ) + "%";


            profiles.forEach(
                function (
                    profile,
                    i
                ) {

                    profile.classList.toggle(
                        "active",
                        i === index
                    );

                }
            );


            current = index;

        }


        function nextReview() {

            current++;

            if (
                current >=
                reviews.length
            ) {

                current = 0;

            }

            showReview(current);

        }


        profiles.forEach(
            function (
                profile,
                index
            ) {

                profile.addEventListener(
                    "click",
                    function () {

                        showReview(index);

                        clearInterval(timer);

                        timer =
                            setInterval(
                                nextReview,
                                2000
                            );

                    }
                );

            }
        );


        showReview(
            0,
            false
        );


        timer =
            setInterval(
                nextReview,
                2000
            );

    }
);


// =========================================================
// FLOOR PLAN
// =========================================================

document.addEventListener(
    "DOMContentLoaded",
    function () {

        const buttons =
            document.querySelectorAll(
                ".floor-btn"
            );

        const floors =
            document.querySelectorAll(
                ".floor-plan"
            );


        buttons.forEach(
            function (button) {

                button.addEventListener(
                    "click",
                    function () {

                        const target =
                            button.dataset.floor;


                        buttons.forEach(
                            function (item) {

                                item.classList.remove(
                                    "active"
                                );

                            }
                        );


                        floors.forEach(
                            function (floor) {

                                floor.classList.remove(
                                    "active-floor"
                                );

                            }
                        );


                        button.classList.add(
                            "active"
                        );


                        const selectedFloor =
                            document.getElementById(
                                target
                            );


                        if (selectedFloor) {

                            selectedFloor.classList.add(
                                "active-floor"
                            );

                        }

                    }
                );

            }
        );


        document
            .querySelectorAll(
                ".room"
            )
            .forEach(
                function (room) {

                    room.addEventListener(
                        "click",
                        function () {

                            document
                                .querySelectorAll(
                                    ".room"
                                )
                                .forEach(
                                    function (item) {

                                        item.classList.remove(
                                            "room-selected"
                                        );

                                    }
                                );


                            room.classList.add(
                                "room-selected"
                            );

                        }
                    );

                }
            );

    }
);


// =========================================================
// FAQ
// =========================================================

document.addEventListener(
    "DOMContentLoaded",
    function () {

        const faqItems =
            document.querySelectorAll(
                ".faq-item"
            );


        faqItems.forEach(
            function (item) {

                const question =
                    item.querySelector(
                        ".faq-question"
                    );


                if (!question) return;


                question.addEventListener(
                    "click",
                    function () {

                        const isOpen =
                            item.classList.contains(
                                "active"
                            );


                        faqItems.forEach(
                            function (faq) {

                                faq.classList.remove(
                                    "active"
                                );

                            }
                        );


                        if (!isOpen) {

                            item.classList.add(
                                "active"
                            );

                        }

                    }
                );

            }
        );

    }
);


// =========================================================
// VISION
// =========================================================

document.addEventListener(
    "DOMContentLoaded",
    function () {

        const visionPage =
            document.querySelector(
                ".vision-page"
            );


        if (!visionPage) return;


        const observer =
            new IntersectionObserver(
                function (entries) {

                    entries.forEach(
                        function (entry) {

                            if (
                                entry.isIntersecting
                            ) {

                                visionPage.classList.add(
                                    "vision-visible"
                                );

                                observer.unobserve(
                                    visionPage
                                );

                            }

                        }
                    );

                },
                {
                    threshold: 0.15
                }
            );


        observer.observe(
            visionPage
        );

    }
);


// =========================================================
// HEALTH JOURNEY
// =========================================================

document.addEventListener(
    "DOMContentLoaded",
    function () {

        const section =
            document.getElementById(
                "healthJourney"
            );


        if (!section) return;


        const wrapper =
            section.querySelector(
                ".journey-wrapper"
            );

        const steps =
            section.querySelectorAll(
                ".journey-step"
            );

        const progress =
            section.querySelector(
                ".journey-progress"
            );

        const dot =
            section.querySelector(
                ".journey-dot"
            );


        if (
            !wrapper ||
            !steps.length ||
            !progress ||
            !dot
        ) {
            return;
        }


        let current = 0;
        let timer = null;
        let started = false;


        function getNodeCenter(index) {

            const node =
                steps[index].querySelector(
                    ".journey-node"
                );


            const wrapperRect =
                wrapper.getBoundingClientRect();

            const nodeRect =
                node.getBoundingClientRect();


            return (
                nodeRect.top +
                nodeRect.height / 2 -
                wrapperRect.top
            );

        }


        function moveLine(
            index,
            animate
        ) {

            const start =
                getNodeCenter(0);

            const target =
                getNodeCenter(index);


            if (animate) {

                progress.style.transition =
                    "height 1s cubic-bezier(.4,0,.2,1)";

                dot.style.transition =
                    "top 1s cubic-bezier(.4,0,.2,1)";

            } else {

                progress.style.transition =
                    "none";

                dot.style.transition =
                    "none";

            }


            progress.style.top =
                start + "px";

            progress.style.height =
                Math.max(
                    0,
                    target - start
                ) + "px";

            dot.style.top =
                target + "px";

        }


        function reset() {

            clearTimeout(timer);

            current = 0;


            steps.forEach(
                function (step) {

                    step.classList.remove(
                        "active"
                    );

                }
            );


            const first =
                getNodeCenter(0);


            progress.style.transition =
                "none";

            progress.style.top =
                first + "px";

            progress.style.height =
                "0px";


            dot.style.transition =
                "none";

            dot.style.top =
                first + "px";


            requestAnimationFrame(
                function () {

                    steps[0].classList.add(
                        "active"
                    );


                    requestAnimationFrame(
                        function () {

                            progress.style.transition =
                                "height 1s cubic-bezier(.4,0,.2,1)";

                            dot.style.transition =
                                "top 1s cubic-bezier(.4,0,.2,1)";


                            timer =
                                setTimeout(
                                    next,
                                    700
                                );

                        }
                    );

                }
            );

        }


        function next() {

            if (
                current <
                steps.length - 1
            ) {

                current++;


                steps.forEach(
                    function (
                        step,
                        index
                    ) {

                        step.classList.toggle(
                            "active",
                            index <= current
                        );

                    }
                );


                moveLine(
                    current,
                    true
                );


                timer =
                    setTimeout(
                        next,
                        1250
                    );

            } else {

                timer =
                    setTimeout(
                        reset,
                        1800
                    );

            }

        }


        function start() {

            if (started) return;

            started = true;

            reset();

        }


        const observer =
            new IntersectionObserver(
                function (entries) {

                    if (
                        entries[0].isIntersecting
                    ) {

                        start();

                        observer.disconnect();

                    }

                },
                {
                    threshold: 0.15
                }
            );


        observer.observe(
            section
        );


        window.addEventListener(
            "resize",
            function () {

                if (!started) return;


                const start =
                    getNodeCenter(0);

                const target =
                    getNodeCenter(current);


                progress.style.transition =
                    "none";

                progress.style.top =
                    start + "px";

                progress.style.height =
                    Math.max(
                        0,
                        target - start
                    ) + "px";


                dot.style.transition =
                    "none";

                dot.style.top =
                    target + "px";


                requestAnimationFrame(
                    function () {

                        progress.style.transition =
                            "height 1s cubic-bezier(.4,0,.2,1)";

                    }
                );

            }
        );

    }
);


// =========================================================
// FAQ CARDS
// =========================================================

document.addEventListener(
    "DOMContentLoaded",
    function () {

        const faqButtons =
            document.querySelectorAll(
                ".faq-button"
            );


        faqButtons.forEach(
            function (button) {

                button.addEventListener(
                    "click",
                    function () {

                        const currentCard =
                            button.closest(
                                ".faq-card"
                            );


                        if (!currentCard) return;


                        const isOpen =
                            currentCard.classList.contains(
                                "open"
                            );


                        document
                            .querySelectorAll(
                                ".faq-card"
                            )
                            .forEach(
                                function (card) {

                                    card.classList.remove(
                                        "open"
                                    );

                                }
                            );


                        if (!isOpen) {

                            currentCard.classList.add(
                                "open"
                            );

                        }

                    }
                );

            }
        );

    }
);


// =========================================================
// LOCATION / GOOGLE MAPS DIRECTION
// =========================================================

document.addEventListener(
    "DOMContentLoaded",
    function () {

        const directionButton =
            document.getElementById(
                "locationDirection"
            );


        if (!directionButton) return;


        directionButton.addEventListener(
            "click",
            function () {

                const destination =
                    "Lumbini City Hospital, Butwal, Nepal";


                const mapsURL =
                    "https://www.google.com/maps/dir/?api=1&destination=" +
                    encodeURIComponent(
                        destination
                    );


                window.open(
                    mapsURL,
                    "_blank"
                );

            }
        );

    }
);


// =========================================================
// BACK TO TOP + NEWSLETTER
// =========================================================

document.addEventListener(
    "DOMContentLoaded",
    function () {

        const backTop =
            document.getElementById(
                "backToTop"
            );


        if (backTop) {

            backTop.addEventListener(
                "click",
                function () {

                    window.scrollTo({
                        top: 0,
                        behavior: "smooth"
                    });

                }
            );

        }


        const newsletter =
            document.getElementById(
                "newsletterForm"
            );

        const emailInput =
            document.getElementById(
                "newsletterEmail"
            );


        if (
            newsletter &&
            emailInput
        ) {

            newsletter.addEventListener(
                "submit",
                function (event) {

                    event.preventDefault();


                    const email =
                        emailInput.value.trim();


                    if (!email) return;


                    const button =
                        newsletter.querySelector(
                            "button"
                        );


                    if (!button) return;


                    const originalText =
                        button.innerHTML;


                    button.innerHTML =
                        "Subscribed ✓";


                    button.classList.add(
                        "newsletter-success"
                    );


                    emailInput.value =
                        "";


                    setTimeout(
                        function () {

                            button.innerHTML =
                                originalText;

                            button.classList.remove(
                                "newsletter-success"
                            );

                        },
                        3000
                    );

                }
            );

        }

    }
);


// =========================================================
// PREVENT BROWSER SCROLL RESTORATION
// =========================================================

if (
    "scrollRestoration" in history
) {

    history.scrollRestoration =
        "manual";

}


window.addEventListener(
    "load",
    function () {

        window.scrollTo(
            0,
            0
        );

    }
);


// =========================================================
// APPOINTMENT MODAL
// =========================================================

document.addEventListener(
    "DOMContentLoaded",
    function () {

        const appointmentModal =
            document.getElementById(
                "appointmentModal"
            );

        const appointmentOverlay =
            document.getElementById(
                "appointmentModalOverlay"
            );

        const closeAppointment =
            document.getElementById(
                "closeAppointment"
            );

        const appointmentTriggers =
            document.querySelectorAll(
                ".open-appointment-modal"
            );

        const appointmentForm =
            document.getElementById(
                "appointmentForm"
            );

        const appointmentFormView =
            document.getElementById(
                "appointmentFormView"
            );

        const appointmentSuccessView =
            document.getElementById(
                "appointmentSuccessView"
            );

        const appointmentSuccessClose =
            document.getElementById(
                "appointmentSuccessClose"
            );


        const departmentSelect =
            document.getElementById(
                "appointmentDepartment"
            );

        const doctorSelect =
            document.getElementById(
                "appointmentDoctor"
            );

        const appointmentDate =
            document.getElementById(
                "appointmentDate"
            );


        const doctors = {

            "General Medicine": [
                "General Medicine Specialist"
            ],

            "Cardiology": [
                "Dr. Anish Sharma"
            ],

            "Neurology": [
                "Dr. Rohan Thapa"
            ],

            "ENT": [
                "Dr. Nisha Gurung"
            ],

            "Respiratory": [
                "Dr. Bibek Poudel"
            ],

            "Orthopedics": [
                "Dr. Prakash Adhikari"
            ],

            "Pediatrics": [
                "Dr. Sushmita KC"
            ],

            "Diagnostics": [
                "Dr. Aarav Shrestha"
            ]

        };


        function openAppointmentModal(event) {

            if (event) {
                event.preventDefault();
            }


            if (!appointmentModal) {
                return;
            }


            appointmentModal.classList.add(
                "active"
            );


            appointmentModal.setAttribute(
                "aria-hidden",
                "false"
            );


            document.body.style.overflow =
                "hidden";


            if (appointmentFormView) {
                appointmentFormView.hidden =
                    false;
            }


            if (appointmentSuccessView) {
                appointmentSuccessView.hidden =
                    true;
            }


            const firstInput =
                document.getElementById(
                    "appointmentName"
                );


            setTimeout(
                function () {

                    if (firstInput) {
                        firstInput.focus();
                    }

                },
                300
            );

        }


        function closeAppointmentModal() {

            if (!appointmentModal) {
                return;
            }


            appointmentModal.classList.remove(
                "active"
            );


            appointmentModal.setAttribute(
                "aria-hidden",
                "true"
            );


            document.body.style.overflow =
                "";

        }


        appointmentTriggers.forEach(
            function (trigger) {

                trigger.addEventListener(
                    "click",
                    function (event) {

                        event.preventDefault();


                        const mobileMenu =
                            document.getElementById(
                                "mobileMenu"
                            );

                        const mobileOverlay =
                            document.getElementById(
                                "mobileOverlay"
                            );

                        const menuToggle =
                            document.getElementById(
                                "menuToggle"
                            );


                        if (mobileMenu) {

                            mobileMenu.classList.remove(
                                "show"
                            );

                            mobileMenu.classList.remove(
                                "active"
                            );

                        }


                        if (mobileOverlay) {

                            mobileOverlay.classList.remove(
                                "show"
                            );

                            mobileOverlay.classList.remove(
                                "active"
                            );

                        }


                        if (menuToggle) {

                            const menuIcon =
                                menuToggle.querySelector(
                                    "i"
                                );


                            if (menuIcon) {

                                menuIcon.classList.remove(
                                    "fa-xmark"
                                );

                                menuIcon.classList.add(
                                    "fa-bars"
                                );

                            }

                        }


                        openAppointmentModal(
                            event
                        );

                    }
                );

            }
        );


        if (closeAppointment) {

            closeAppointment.addEventListener(
                "click",
                closeAppointmentModal
            );

        }


        if (appointmentOverlay) {

            appointmentOverlay.addEventListener(
                "click",
                closeAppointmentModal
            );

        }


        document.addEventListener(
            "keydown",
            function (event) {

                if (
                    event.key === "Escape" &&
                    appointmentModal &&
                    appointmentModal.classList.contains(
                        "active"
                    )
                ) {

                    closeAppointmentModal();

                }

            }
        );


        // =====================================================
        // DEPARTMENT → DOCTOR
        // =====================================================

        if (
            departmentSelect &&
            doctorSelect
        ) {

            departmentSelect.addEventListener(
                "change",
                function () {

                    const department =
                        departmentSelect.value;


                    doctorSelect.innerHTML =
                        "";


                    if (
                        !department ||
                        !doctors[department]
                    ) {

                        doctorSelect.disabled =
                            true;


                        const option =
                            document.createElement(
                                "option"
                            );


                        option.value =
                            "";

                        option.textContent =
                            "Select department first";


                        doctorSelect.appendChild(
                            option
                        );


                        return;

                    }


                    doctorSelect.disabled =
                        false;


                    const defaultOption =
                        document.createElement(
                            "option"
                        );


                    defaultOption.value =
                        "";

                    defaultOption.textContent =
                        "Select Doctor";


                    doctorSelect.appendChild(
                        defaultOption
                    );


                    doctors[department].forEach(
                        function (doctor) {

                            const option =
                                document.createElement(
                                    "option"
                                );


                            option.value =
                                doctor;

                            option.textContent =
                                doctor;


                            doctorSelect.appendChild(
                                option
                            );

                        }
                    );

                }
            );

        }


        // =====================================================
        // APPOINTMENT DATE
        // =====================================================

        if (appointmentDate) {

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


            appointmentDate.min =
                `${year}-${month}-${day}`;

        }


        // =====================================================
        // APPOINTMENT FORM SUBMISSION
        // =====================================================

        if (appointmentForm) {

            appointmentForm.addEventListener(
                "submit",
                function (event) {

                    event.preventDefault();


                    const submitButton =
                        document.getElementById(
                            "appointmentSubmitBtn"
                        );

                    const formError =
                        document.getElementById(
                            "appointmentFormError"
                        );


                    if (formError) {

                        formError.classList.remove(
                            "show"
                        );

                        formError.textContent =
                            "";

                    }


                    if (
                        !appointmentForm.checkValidity()
                    ) {

                        appointmentForm.reportValidity();

                        return;

                    }


                    const patientName =
                        document.getElementById(
                            "appointmentName"
                        )?.value.trim();


                    const department =
                        departmentSelect?.value;


                    const date =
                        appointmentDate?.value;


                    const time =
                        document.getElementById(
                            "appointmentTime"
                        )?.value;


                    if (submitButton) {

                        submitButton.classList.add(
                            "loading"
                        );

                        submitButton.disabled =
                            true;

                    }


                    setTimeout(
                        function () {

                            const reference =
                                "LCH-" +
                                Math.floor(
                                    100000 +
                                    Math.random() *
                                    900000
                                );


                            const referenceElement =
                                document.getElementById(
                                    "appointmentReference"
                                );


                            const successPatientName =
                                document.getElementById(
                                    "successPatientName"
                                );


                            const successDepartment =
                                document.getElementById(
                                    "successDepartment"
                                );


                            const successDateTime =
                                document.getElementById(
                                    "successDateTime"
                                );


                            if (
                                referenceElement
                            ) {

                                referenceElement.textContent =
                                    reference;

                            }


                            if (
                                successPatientName
                            ) {

                                successPatientName.textContent =
                                    patientName ||
                                    "—";

                            }


                            if (
                                successDepartment
                            ) {

                                successDepartment.textContent =
                                    department ||
                                    "—";

                            }


                            if (
                                successDateTime
                            ) {

                                successDateTime.textContent =
                                    `${date || "—"} • ${time || "—"}`;

                            }


                            if (
                                appointmentFormView
                            ) {

                                appointmentFormView.hidden =
                                    true;

                            }


                            if (
                                appointmentSuccessView
                            ) {

                                appointmentSuccessView.hidden =
                                    false;

                            }


                            if (submitButton) {

                                submitButton.classList.remove(
                                    "loading"
                                );

                                submitButton.disabled =
                                    false;

                            }

                        },
                        1500
                    );

                }
            );

        }


        // =====================================================
        // APPOINTMENT SUCCESS → CLOSE + RESET
        // =====================================================

        if (appointmentSuccessClose) {

            appointmentSuccessClose.addEventListener(
                "click",
                function () {

                    if (appointmentSuccessView) {

                        appointmentSuccessView.hidden =
                            true;

                    }


                    if (appointmentFormView) {

                        appointmentFormView.hidden =
                            false;

                    }


                    if (appointmentForm) {

                        appointmentForm.reset();

                    }


                    if (doctorSelect) {

                        doctorSelect.disabled =
                            true;


                        doctorSelect.innerHTML = `
                            <option value="">
                                Select department first
                            </option>
                        `;

                    }


                    const formError =
                        document.getElementById(
                            "appointmentFormError"
                        );


                    if (formError) {

                        formError.classList.remove(
                            "show"
                        );

                        formError.textContent =
                            "";

                    }


                    closeAppointmentModal();

                }
            );

        }

    }
);


// =========================================================
// SMOOTH SCROLL
// =========================================================

document.addEventListener(
    "DOMContentLoaded",
    function () {

        const anchorLinks =
            document.querySelectorAll(
                'a[href^="#"]'
            );


        anchorLinks.forEach(
            function (link) {

                link.addEventListener(
                    "click",
                    function (event) {

                        const targetId =
                            link.getAttribute(
                                "href"
                            );


                        if (
                            !targetId ||
                            targetId === "#" ||
                            link.classList.contains(
                                "open-appointment-modal"
                            )
                        ) {

                            return;

                        }


                        const target =
                            document.querySelector(
                                targetId
                            );


                        if (!target) {
                            return;
                        }


                        event.preventDefault();


                        target.scrollIntoView({
                            behavior: "smooth",
                            block: "start"
                        });


                        const mobileMenu =
                            document.getElementById(
                                "mobileMenu"
                            );

                        const mobileOverlay =
                            document.getElementById(
                                "mobileOverlay"
                            );

                        const menuToggle =
                            document.getElementById(
                                "menuToggle"
                            );


                        if (mobileMenu) {

                            mobileMenu.classList.remove(
                                "show"
                            );

                        }


                        if (mobileOverlay) {

                            mobileOverlay.classList.remove(
                                "show"
                            );

                        }


                        if (menuToggle) {

                            const icon =
                                menuToggle.querySelector(
                                    "i"
                                );


                            if (icon) {

                                icon.classList.remove(
                                    "fa-xmark"
                                );

                                icon.classList.add(
                                    "fa-bars"
                                );

                            }

                        }


                        document.body.style.overflow =
                            "";

                    }
                );

            }
        );

    }
);