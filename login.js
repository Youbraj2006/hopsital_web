document.addEventListener("DOMContentLoaded", function () {

    const loginOverlay =
        document.getElementById("loginOverlay");

    const loginClose =
        document.getElementById("loginClose");

    const loginForm =
        document.getElementById("loginForm");

    const loginEmail =
        document.getElementById("loginEmail");

    const loginPassword =
        document.getElementById("loginPassword");

    const passwordToggle =
        document.getElementById("passwordToggle");


    /* =====================================================
       PASSWORD SHOW / HIDE
    ===================================================== */

    if (passwordToggle && loginPassword) {

        passwordToggle.addEventListener(
            "click",
            function () {

                const icon =
                    passwordToggle.querySelector("i");


                if (loginPassword.type === "password") {

                    loginPassword.type = "text";

                    icon.classList.remove(
                        "fa-eye"
                    );

                    icon.classList.add(
                        "fa-eye-slash"
                    );

                    passwordToggle.setAttribute(
                        "aria-label",
                        "Hide password"
                    );

                } else {

                    loginPassword.type = "password";

                    icon.classList.remove(
                        "fa-eye-slash"
                    );

                    icon.classList.add(
                        "fa-eye"
                    );

                    passwordToggle.setAttribute(
                        "aria-label",
                        "Show password"
                    );

                }

            }
        );

    }


    /* =====================================================
       LOGIN
    ===================================================== */

    if (loginForm) {

        loginForm.addEventListener(
            "submit",
            function (event) {

                event.preventDefault();


                const email =
                    loginEmail.value.trim();

                const password =
                    loginPassword.value.trim();


                if (!email || !password) {
                    return;
                }


                localStorage.setItem(
                    "hospitalLoggedIn",
                    "true"
                );


                localStorage.setItem(
                    "hospitalUser",
                    email
                );


                loginOverlay.classList.add(
                    "login-success"
                );


                setTimeout(function () {

                    window.location.href =
                        "index.html";

                }, 500);

            }
        );

    }


    /* =====================================================
       CLOSE BUTTON
    ===================================================== */

    if (loginClose) {

        loginClose.addEventListener(
            "click",
            function () {

                loginOverlay.style.opacity = "0";

                setTimeout(function () {

                    window.history.back();

                }, 300);

            }
        );

    }


    /* =====================================================
       SOCIAL LOGIN
    ===================================================== */

    document.querySelectorAll(
        ".social-btn"
    ).forEach(function (button) {

        button.addEventListener(
            "click",
            function () {

                const name =
                    button.querySelector("span").textContent;

                alert(
                    name +
                    " login is currently available as a demo only."
                );

            }
        );

    });


    /* =====================================================
       COPY DEMO CREDENTIALS
    ===================================================== */

    document.querySelectorAll(
        ".copy-demo"
    ).forEach(function (button) {

        button.addEventListener(
            "click",
            function () {

                const value =
                    button.getAttribute("data-copy");


                if (
                    navigator.clipboard &&
                    navigator.clipboard.writeText
                ) {

                    navigator.clipboard
                        .writeText(value)
                        .then(function () {

                            showCopied(button);

                        })
                        .catch(function () {

                            fallbackCopy(value, button);

                        });

                } else {

                    fallbackCopy(value, button);

                }

            }
        );

    });


    /* =====================================================
       COPY SUCCESS
    ===================================================== */

    function showCopied(button) {

        const originalHTML =
            button.innerHTML;


        button.classList.add(
            "copied"
        );


        button.innerHTML =
            '<i class="fa-solid fa-check"></i>' +
            '<span>Copied</span>';


        setTimeout(function () {

            button.classList.remove(
                "copied"
            );

            button.innerHTML =
                originalHTML;

        }, 1500);

    }


    /* =====================================================
       COPY FALLBACK
    ===================================================== */

    function fallbackCopy(value, button) {

        const textarea =
            document.createElement("textarea");

        textarea.value = value;

        textarea.style.position =
            "fixed";

        textarea.style.opacity =
            "0";

        document.body.appendChild(
            textarea
        );

        textarea.select();

        try {

            document.execCommand(
                "copy"
            );

            showCopied(button);

        } catch (error) {

            alert(
                "Please copy manually: " +
                value
            );

        }

        textarea.remove();

    }

});












/* =========================================================
   FORGOT PASSWORD
========================================================= */

document.addEventListener("DOMContentLoaded", function () {

    /* Get the form */
    const forgotForm =
        document.getElementById("forgotForm");

    /* Get the success message */
    const forgotSuccess =
        document.getElementById("forgotSuccess");


    /* =====================================================
       FORM SUBMISSION
    ===================================================== */

    if (forgotForm) {

        forgotForm.addEventListener(
            "submit",
            function (event) {

                /* Prevent real form submission */
                event.preventDefault();


                /* Get user input */
                const email =
                    document
                        .getElementById("forgotEmail")
                        .value
                        .trim();


                /* Check whether input exists */
                if (!email) {
                    return;
                }


                /* Show demo success message */
                if (forgotSuccess) {

                    forgotSuccess.classList.add("show");

                }


                /* Change button text */
                const submitButton =
                    forgotForm.querySelector(
                        ".forgot-submit"
                    );

                if (submitButton) {

                    submitButton.innerHTML =
                        `
                        <span>REQUEST SENT</span>
                        <i class="fa-solid fa-check"></i>
                        `;

                    submitButton.style.background =
                        "#087f8c";

                    submitButton.style.pointerEvents =
                        "none";

                }

            }
        );

    }

});















//createac

document.addEventListener("DOMContentLoaded", function () {


    /* =====================================================
       PASSWORD SHOW / HIDE
    ===================================================== */

    const password =
        document.getElementById("createPassword");

    const confirmPassword =
        document.getElementById("confirmPassword");

    const passwordToggle =
        document.getElementById("createPasswordToggle");

    const confirmPasswordToggle =
        document.getElementById("confirmPasswordToggle");


    function togglePassword(input, button) {

        if (!input || !button) return;

        const icon =
            button.querySelector("i");

        if (input.type === "password") {

            input.type = "text";

            icon.classList.remove("fa-eye");

            icon.classList.add("fa-eye-slash");

        } else {

            input.type = "password";

            icon.classList.remove("fa-eye-slash");

            icon.classList.add("fa-eye");

        }

    }


    if (passwordToggle) {

        passwordToggle.addEventListener(
            "click",
            function () {

                togglePassword(
                    password,
                    passwordToggle
                );

            }
        );

    }


    if (confirmPasswordToggle) {

        confirmPasswordToggle.addEventListener(
            "click",
            function () {

                togglePassword(
                    confirmPassword,
                    confirmPasswordToggle
                );

            }
        );

    }


    /* =====================================================
       CREATE ACCOUNT
    ===================================================== */

    const form =
        document.getElementById("createAccountForm");

    const success =
        document.getElementById("createSuccess");


    if (!form) return;


    form.addEventListener(
        "submit",
        function (event) {

            event.preventDefault();


            const firstName =
                document.getElementById("firstName").value.trim();

            const lastName =
                document.getElementById("lastName").value.trim();

            const email =
                document.getElementById("createEmail").value.trim();

            const passwordValue =
                password.value.trim();

            const confirmValue =
                confirmPassword.value.trim();

            const terms =
                document.getElementById("createTerms");


            if (
                !firstName ||
                !lastName ||
                !email ||
                !passwordValue ||
                !confirmValue
            ) {
                return;
            }


            if (passwordValue !== confirmValue) {

                alert(
                    "Passwords do not match."
                );

                return;

            }


            if (passwordValue.length < 6) {

                alert(
                    "For this prototype, password should contain at least 6 characters."
                );

                return;

            }


            if (!terms.checked) {

                alert(
                    "Please accept the prototype terms."
                );

                return;

            }


            localStorage.setItem(
                "hospitalDemoUser",
                JSON.stringify({
                    firstName: firstName,
                    lastName: lastName,
                    email: email
                })
            );


            if (success) {

                success.classList.add("show");

            }


            form.querySelector(
                ".create-submit"
            ).disabled = true;


            setTimeout(function () {

                window.location.href =
                    "login.html";

            }, 1800);

        }
    );

});