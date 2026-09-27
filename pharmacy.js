document.addEventListener("DOMContentLoaded", function () {

    /* =========================================================
       LOADER
    ========================================================= */

    const pageLoader = document.getElementById("pageLoader");

    window.addEventListener("load", function () {

        setTimeout(function () {

            pageLoader.classList.add("hide");

        }, 500);

    });


    /* =========================================================
       NAVBAR
    ========================================================= */

    const navbar = document.getElementById("navbar");

    function updateNavbar() {

        if (window.scrollY > 30) {

            navbar.classList.add("scrolled");

        } else {

            navbar.classList.remove("scrolled");

        }

    }

    window.addEventListener("scroll", updateNavbar);

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

    const menuIcon =
        menuToggle.querySelector("i");


    function openMobileMenu() {

        mobileMenu.classList.add("show");
        mobileOverlay.classList.add("show");

        document.body.classList.add("no-scroll");

        menuIcon.classList.remove("fa-bars");
        menuIcon.classList.add("fa-xmark");

    }


    function closeMobileMenu() {

        mobileMenu.classList.remove("show");
        mobileOverlay.classList.remove("show");

        document.body.classList.remove("no-scroll");

        menuIcon.classList.remove("fa-xmark");
        menuIcon.classList.add("fa-bars");

    }


    menuToggle.addEventListener(
        "click",
        function () {

            if (mobileMenu.classList.contains("show")) {

                closeMobileMenu();

            } else {

                openMobileMenu();

            }

        }
    );


    closeMenu.addEventListener(
        "click",
        closeMobileMenu
    );


    mobileOverlay.addEventListener(
        "click",
        closeMobileMenu
    );


    document
        .querySelectorAll(".mobile-links a")
        .forEach(function (link) {

            link.addEventListener(
                "click",
                closeMobileMenu
            );

        });


    /* =========================================================
       PRODUCT DATA
    ========================================================= */

    const products = [

        {
            id: 1,
            name: "Paracetamol 500",
            generic: "Paracetamol 500 mg Tablet",
            strength: "500 mg",
            category: "pain",
            categoryName: "Pain Relief",
            manufacturer: "Nepal Pharmaceutical Product",
            price: 300,
            stock: true,
            prescription: false,
            image: "https://commons.wikimedia.org/wiki/Special:FilePath/200mg%20ibuprofen%20tablets.jpg",
            description: "Demo catalogue item for the hospital pharmacy prototype."
        },

        {
            id: 2,
            name: "Ibuprofen 400",
            generic: "Ibuprofen 400 mg Tablet",
            strength: "400 mg",
            category: "pain",
            categoryName: "Pain Relief",
            manufacturer: "Pharmaceutical Product",
            price: 320,
            stock: true,
            prescription: false,
            image: "https://commons.wikimedia.org/wiki/Special:FilePath/200mg%20ibuprofen%20tablets.jpg",
            description: "Demo catalogue item for the hospital pharmacy prototype."
        },

        {
            id: 3,
            name: "OMEGARD",
            generic: "Omeprazole 20 mg Capsule",
            strength: "20 mg",
            category: "gastro",
            categoryName: "Stomach Care",
            manufacturer: "Siddhartha Pharma",
            price: 229,
            stock: true,
            prescription: true,
            image: "https://www.siddharthapharma.com.np/wp-content/uploads/2023/08/omegard.jpg",
            description: "Real product name listed in the Siddhartha Pharma catalogue. Displayed here as a frontend prototype item."
        },

        {
            id: 4,
            name: "PANCURE-40",
            generic: "Pantoprazole 40 mg Tablet",
            strength: "40 mg",
            category: "gastro",
            categoryName: "Stomach Care",
            manufacturer: "Siddhartha Pharma",
            price: 800,
            stock: true,
            prescription: true,
            image: "https://www.siddharthapharma.com.np/wp-content/uploads/2023/08/pancure.jpg",
            description: "Real product name listed in the Siddhartha Pharma catalogue. Displayed here as a frontend prototype item."
        },

        {
            id: 5,
            name: "FEROMAX",
            generic: "Iron-III Polymaltose + Folic Acid",
            strength: "100 mg + 1 mg",
            category: "vitamins",
            categoryName: "Vitamins",
            manufacturer: "Siddhartha Pharma",
            price: 698,
            stock: true,
            prescription: false,
            image: "https://www.siddharthapharma.com.np/wp-content/uploads/2023/08/feromax.jpg",
            description: "Real product name listed in the Siddhartha Pharma catalogue. Displayed here as a frontend prototype item."
        },

        {
            id: 6,
            name: "OSTEOCARE",
            generic: "Calcium Carbonate + Vitamin D3",
            strength: "500 mg + Vitamin D3",
            category: "vitamins",
            categoryName: "Vitamins",
            manufacturer: "Siddhartha Pharma",
            price: 450,
            stock: true,
            prescription: false,
            image: "https://www.siddharthapharma.com.np/wp-content/uploads/2023/08/osteocare.jpg",
            description: "Calcium supplement listed in the Siddhartha Pharma product catalogue."
        },

        {
            id: 7,
            name: "SYNOPLEX",
            generic: "Vitamin B-Complex Syrup",
            strength: "100 ml",
            category: "vitamins",
            categoryName: "Vitamins",
            manufacturer: "Siddhartha Pharma",
            price: 275,
            stock: true,
            prescription: false,
            image: "https://www.siddharthapharma.com.np/wp-content/uploads/2023/08/synoplex.jpg",
            description: "Vitamin B-complex product listed in the Siddhartha Pharma catalogue."
        },

        {
            id: 8,
            name: "SETAFEN",
            generic: "Ibuprofen + Paracetamol",
            strength: "Tablet",
            category: "pain",
            categoryName: "Pain Relief",
            manufacturer: "Siddhartha Pharma",
            price: 550,
            stock: true,
            prescription: false,
            image: "https://www.siddharthapharma.com.np/wp-content/uploads/2023/08/setafen.jpg",
            description: "Combination pain-relief product listed in the Siddhartha Pharma catalogue."
        },

        {
            id: 9,
            name: "SYNOGEL",
            generic: "Aluminium Hydroxide + Magnesium Hydroxide + Simethicone",
            strength: "Oral Suspension",
            category: "gastro",
            categoryName: "Stomach Care",
            manufacturer: "Siddhartha Pharma",
            price: 390,
            stock: true,
            prescription: false,
            image: "https://www.siddharthapharma.com.np/wp-content/uploads/2023/08/synogel.jpg",
            description: "Antacid product listed in the Siddhartha Pharma catalogue."
        },

        {
            id: 10,
            name: "SYNOLIZOR",
            generic: "Disodium Hydrogen Citrate Syrup",
            strength: "1.4 gm / 5 ml",
            category: "other",
            categoryName: "Other",
            manufacturer: "Siddhartha Pharma",
            price: 620,
            stock: true,
            prescription: false,
            image: "https://www.siddharthapharma.com.np/wp-content/uploads/2023/08/synolizor.jpg",
            description: "Real product name listed in the Siddhartha Pharma catalogue."
        },

        {
            id: 11,
            name: "BREATHEX",
            generic: "Salbutamol",
            strength: "Respiratory medicine",
            category: "respiratory",
            categoryName: "Respiratory",
            manufacturer: "Siddhartha Pharma",
            price: 720,
            stock: true,
            prescription: true,
            image: "https://www.siddharthapharma.com.np/wp-content/uploads/2023/08/breatheX.jpg",
            description: "Respiratory medicine listed in the Siddhartha Pharma catalogue."
        },

        {
            id: 12,
            name: "BREATHEX-BORN",
            generic: "Salbutamol + Bromhexine",
            strength: "Syrup",
            category: "respiratory",
            categoryName: "Respiratory",
            manufacturer: "Siddhartha Pharma",
            price: 480,
            stock: true,
            prescription: true,
            image: "https://www.siddharthapharma.com.np/wp-content/uploads/2023/08/breatheX-born.jpg",
            description: "Respiratory product listed in the Siddhartha Pharma catalogue."
        },

        {
            id: 13,
            name: "LOADINE",
            generic: "Loratadine 10 mg",
            strength: "10 mg",
            category: "other",
            categoryName: "Other",
            manufacturer: "Siddhartha Pharma",
            price: 360,
            stock: true,
            prescription: false,
            image: "https://www.siddharthapharma.com.np/wp-content/uploads/2023/08/loadine.jpg",
            description: "Antihistamine product listed in the Siddhartha Pharma catalogue."
        },

        {
            id: 14,
            name: "CETUP",
            generic: "Levocetirizine",
            strength: "5 mg",
            category: "other",
            categoryName: "Other",
            manufacturer: "Siddhartha Pharma",
            price: 310,
            stock: true,
            prescription: false,
            image: "https://www.siddharthapharma.com.np/wp-content/uploads/2023/08/cetup.jpg",
            description: "Antihistamine product listed in the Siddhartha Pharma catalogue."
        },

        {
            id: 15,
            name: "FALSA",
            generic: "Flavoxate",
            strength: "200 mg",
            category: "other",
            categoryName: "Other",
            manufacturer: "Siddhartha Pharma",
            price: 580,
            stock: true,
            prescription: true,
            image: "https://www.siddharthapharma.com.np/wp-content/uploads/2023/08/falsa.jpg",
            description: "Real product listed in the Siddhartha Pharma catalogue."
        },

        {
            id: 16,
            name: "SYNODOT",
            generic: "Drotaverine",
            strength: "40 mg",
            category: "pain",
            categoryName: "Pain Relief",
            manufacturer: "Siddhartha Pharma",
            price: 420,
            stock: true,
            prescription: true,
            image: "https://www.siddharthapharma.com.np/wp-content/uploads/2023/08/synodot.jpg",
            description: "Antispasmodic product listed in the Siddhartha Pharma catalogue."
        },

        {
            id: 17,
            name: "SYNOCIP",
            generic: "Ciprofloxacin",
            strength: "500 mg",
            category: "other",
            categoryName: "Other",
            manufacturer: "Siddhartha Pharma",
            price: 760,
            stock: true,
            prescription: true,
            image: "https://www.siddharthapharma.com.np/wp-content/uploads/2023/08/synocip.jpg",
            description: "Prescription antibacterial product listed in the Siddhartha Pharma catalogue."
        },

        {
            id: 18,
            name: "WISOFLOX",
            generic: "Ofloxacin",
            strength: "400 mg",
            category: "other",
            categoryName: "Other",
            manufacturer: "Siddhartha Pharma",
            price: 690,
            stock: true,
            prescription: true,
            image: "https://www.siddharthapharma.com.np/wp-content/uploads/2023/08/wisoflox.jpg",
            description: "Prescription antibacterial product listed in the Siddhartha Pharma catalogue."
        },

        {
            id: 19,
            name: "AZIRA",
            generic: "Azithromycin",
            strength: "500 mg",
            category: "other",
            categoryName: "Other",
            manufacturer: "Siddhartha Pharma",
            price: 800,
            stock: true,
            prescription: true,
            image: "https://www.siddharthapharma.com.np/wp-content/uploads/2023/08/azira.jpg",
            description: "Prescription antibacterial product listed in the Siddhartha Pharma catalogue."
        },

        {
            id: 20,
            name: "MYPAIN",
            generic: "Tizanidine",
            strength: "2 mg",
            category: "pain",
            categoryName: "Pain Relief",
            manufacturer: "Siddhartha Pharma",
            price: 530,
            stock: true,
            prescription: true,
            image: "https://www.siddharthapharma.com.np/wp-content/uploads/2023/08/mypain.jpg",
            description: "Muscle relaxant product listed in the Siddhartha Pharma catalogue."
        },

        {
            id: 21,
            name: "SIGAB",
            generic: "Pregabalin",
            strength: "75 mg",
            category: "pain",
            categoryName: "Pain Relief",
            manufacturer: "Siddhartha Pharma",
            price: 850,
            stock: true,
            prescription: true,
            image: "https://www.siddharthapharma.com.np/wp-content/uploads/2023/08/sigab.jpg",
            description: "Prescription medicine listed in the Siddhartha Pharma catalogue."
        },

        {
            id: 22,
            name: "RABRA-20",
            generic: "Rabeprazole",
            strength: "20 mg",
            category: "gastro",
            categoryName: "Stomach Care",
            manufacturer: "Siddhartha Pharma",
            price: 620,
            stock: true,
            prescription: true,
            image: "https://www.siddharthapharma.com.np/wp-content/uploads/2023/08/rabra.jpg",
            description: "Proton-pump inhibitor product listed in the Siddhartha Pharma catalogue."
        },

        {
            id: 23,
            name: "SYNOPLEX FORTE",
            generic: "Vitamin B-Complex + Folic Acid",
            strength: "Capsule",
            category: "vitamins",
            categoryName: "Vitamins",
            manufacturer: "Siddhartha Pharma",
            price: 430,
            stock: true,
            prescription: false,
            image: "https://www.siddharthapharma.com.np/wp-content/uploads/2023/08/synoplex-forte.jpg",
            description: "Vitamin supplement listed in the Siddhartha Pharma catalogue."
        },

        {
            id: 24,
            name: "S.P. TONE",
            generic: "Iron + Vitamin B-Complex",
            strength: "200 ml",
            category: "vitamins",
            categoryName: "Vitamins",
            manufacturer: "Siddhartha Pharma",
            price: 510,
            stock: true,
            prescription: false,
            image: "https://www.siddharthapharma.com.np/wp-content/uploads/2023/08/sp-tone.jpg",
            description: "Haematinic supplement listed in the Siddhartha Pharma catalogue."
        },

        {
            id: 25,
            name: "SYNOREX",
            generic: "Diphenhydramine + Ammonium Chloride + Sodium Citrate + Menthol",
            strength: "Syrup",
            category: "respiratory",
            categoryName: "Respiratory",
            manufacturer: "Siddhartha Pharma",
            price: 390,
            stock: true,
            prescription: false,
            image: "https://www.siddharthapharma.com.np/wp-content/uploads/2023/08/synorex.jpg",
            description: "Cough/expectorant product listed in the Siddhartha Pharma catalogue."
        },

        {
            id: 26,
            name: "SYNOHIST",
            generic: "Promethazine + Dextromethorphan",
            strength: "Syrup",
            category: "respiratory",
            categoryName: "Respiratory",
            manufacturer: "Siddhartha Pharma",
            price: 450,
            stock: true,
            prescription: false,
            image: "https://www.siddharthapharma.com.np/wp-content/uploads/2023/08/synohist.jpg",
            description: "Cough product listed in the Siddhartha Pharma catalogue."
        },

        {
            id: 27,
            name: "SYNOZYME",
            generic: "Papain + Fungal Diastase",
            strength: "Digestive Enzyme",
            category: "gastro",
            categoryName: "Stomach Care",
            manufacturer: "Siddhartha Pharma",
            price: 570,
            stock: true,
            prescription: false,
            image: "https://www.siddharthapharma.com.np/wp-content/uploads/2023/08/synozyme.jpg",
            description: "Digestive enzyme product listed in the Siddhartha Pharma catalogue."
        },

        {
            id: 28,
            name: "REARTH-500",
            generic: "Glucosamine",
            strength: "500 mg",
            category: "other",
            categoryName: "Other",
            manufacturer: "Siddhartha Pharma",
            price: 800,
            stock: true,
            prescription: false,
            image: "https://www.siddharthapharma.com.np/wp-content/uploads/2023/08/rearth.jpg",
            description: "Product listed in the Siddhartha Pharma catalogue."
        },

        {
            id: 29,
            name: "FOLSID",
            generic: "Folic Acid",
            strength: "5 mg",
            category: "vitamins",
            categoryName: "Vitamins",
            manufacturer: "Siddhartha Pharma",
            price: 229,
            stock: true,
            prescription: false,
            image: "https://www.siddharthapharma.com.np/wp-content/uploads/2023/08/folsid.jpg",
            description: "Folic acid product listed in the Siddhartha Pharma catalogue."
        },

        {
            id: 30,
            name: "TRASI",
            generic: "Itraconazole",
            strength: "Capsule",
            category: "other",
            categoryName: "Other",
            manufacturer: "Siddhartha Pharma",
            price: 698,
            stock: true,
            prescription: true,
            image: "https://www.siddharthapharma.com.np/wp-content/uploads/2023/08/trasi.jpg",
            description: "Prescription antifungal product listed in the Siddhartha Pharma catalogue."
        }

    ];


    /* =========================================================
       ELEMENTS
    ========================================================= */

    const productGrid =
        document.getElementById("productGrid");

    const noProducts =
        document.getElementById("noProducts");

    const searchInput =
        document.getElementById("searchInput");

    const searchButton =
        document.getElementById("searchButton");

    const categoryButtons =
        document.querySelectorAll(".category-btn");

    const sortSelect =
        document.getElementById("sortSelect");

    const cartCount =
        document.getElementById("cartCount");

    const cartButton =
        document.getElementById("cartButton");


    /* =========================================================
       STATE
    ========================================================= */

    let selectedCategory = "all";

    let searchTerm = "";

    let cart = [];

    let currentProduct = null;

    let modalQuantity = 1;


    /* =========================================================
       FORMAT PRICE
    ========================================================= */

    function formatPrice(price) {

        return "Rs. " + price.toLocaleString("en-IN");

    }


    /* =========================================================
       RENDER PRODUCTS
    ========================================================= */

    function renderProducts() {

        let filtered = products.filter(function (product) {

            const categoryMatch =
                selectedCategory === "all" ||
                product.category === selectedCategory;

            const searchMatch =
                product.name.toLowerCase().includes(searchTerm) ||
                product.generic.toLowerCase().includes(searchTerm) ||
                product.categoryName.toLowerCase().includes(searchTerm);

            return categoryMatch && searchMatch;

        });


        const sortValue = sortSelect.value;


        if (sortValue === "low") {

            filtered.sort(function (a, b) {
                return a.price - b.price;
            });

        }


        if (sortValue === "high") {

            filtered.sort(function (a, b) {
                return b.price - a.price;
            });

        }


        if (sortValue === "name") {

            filtered.sort(function (a, b) {
                return a.name.localeCompare(b.name);
            });

        }


        productGrid.innerHTML = "";


        if (filtered.length === 0) {

            noProducts.classList.add("show");

            return;

        }


        noProducts.classList.remove("show");


        filtered.forEach(function (product) {

            const card =
                document.createElement("article");

            card.className = "product-card";


            card.innerHTML = `

                <div class="product-image">

                    <img
                        src="${product.image}"
                        alt="${product.name}"
                        loading="lazy"
                        onerror="this.src='https://placehold.co/500x500/f3fafc/087ba3?text=Medicine'">

                    <span class="product-badge ${product.prescription ? "rx" : ""}">
                        ${product.prescription ? "Prescription" : "Available"}
                    </span>

                </div>


                <div class="product-body">

                    <span class="product-category">
                        ${product.categoryName}
                    </span>

                    <h3 class="product-name">
                        ${product.name}
                    </h3>

                    <p class="product-generic">
                        ${product.generic}
                    </p>

                    <p class="product-strength">
                        ${product.strength}
                    </p>


                    <div class="product-bottom">

                        <strong class="product-price">
                            ${formatPrice(product.price)}
                        </strong>

                        <button
                            class="view-btn"
                            data-view="${product.id}">
                            Details
                        </button>

                    </div>


                    <button
                        class="add-btn"
                        data-add="${product.id}">

                        <i class="fa-solid fa-cart-plus"></i>

                        Add to Cart

                    </button>

                </div>

            `;


            productGrid.appendChild(card);

        });


        document
            .querySelectorAll("[data-view]")
            .forEach(function (button) {

                button.addEventListener(
                    "click",
                    function () {

                        const id =
                            Number(button.dataset.view);

                        openProductModal(id);

                    }
                );

            });


        document
            .querySelectorAll("[data-add]")
            .forEach(function (button) {

                button.addEventListener(
                    "click",
                    function () {

                        const id =
                            Number(button.dataset.add);

                        addToCart(id, 1);

                    }
                );

            });

    }


    /* =========================================================
       CATEGORY FILTER
    ========================================================= */

    categoryButtons.forEach(function (button) {

        button.addEventListener(
            "click",
            function () {

                categoryButtons.forEach(function (item) {
                    item.classList.remove("active");
                });

                button.classList.add("active");

                selectedCategory =
                    button.dataset.category;

                renderProducts();

            }
        );

    });


    /* =========================================================
       SEARCH
    ========================================================= */

    function performSearch() {

        searchTerm =
            searchInput.value
                .trim()
                .toLowerCase();

        renderProducts();

        document
            .querySelector(".products-section")
            .scrollIntoView({
                behavior: "smooth",
                block: "start"
            });

    }


    searchButton.addEventListener(
        "click",
        performSearch
    );


    searchInput.addEventListener(
        "keydown",
        function (event) {

            if (event.key === "Enter") {

                performSearch();

            }

        }
    );


    searchInput.addEventListener(
        "input",
        function () {

            searchTerm =
                searchInput.value
                    .trim()
                    .toLowerCase();

            renderProducts();

        }
    );


    /* =========================================================
       SORT
    ========================================================= */

    sortSelect.addEventListener(
        "change",
        renderProducts
    );


    /* =========================================================
       PRODUCT MODAL
    ========================================================= */

    const productModal =
        document.getElementById("productModal");

    const productModalClose =
        document.getElementById("productModalClose");

    const modalProductImage =
        document.getElementById("modalProductImage");

    const modalCategory =
        document.getElementById("modalCategory");

    const modalName =
        document.getElementById("modalName");

    const modalGeneric =
        document.getElementById("modalGeneric");

    const modalStrength =
        document.getElementById("modalStrength");

    const modalManufacturer =
        document.getElementById("modalManufacturer");

    const modalStock =
        document.getElementById("modalStock");

    const modalDescription =
        document.getElementById("modalDescription");

    const modalPrice =
        document.getElementById("modalPrice");

    const modalPrescription =
        document.getElementById("modalPrescription");

    const modalQuantityElement =
        document.getElementById("modalQuantity");

    const modalMinus =
        document.getElementById("modalMinus");

    const modalPlus =
        document.getElementById("modalPlus");

    const modalCartButton =
        document.getElementById("modalCartButton");


    function openProductModal(id) {

        currentProduct =
            products.find(function (product) {
                return product.id === id;
            });


        if (!currentProduct) return;


        modalQuantity = 1;

        modalQuantityElement.textContent =
            modalQuantity;


        modalProductImage.innerHTML = `

            <img
                src="${currentProduct.image}"
                alt="${currentProduct.name}"
                onerror="this.src='https://placehold.co/500x500/f3fafc/087ba3?text=Medicine'">

        `;


        modalCategory.textContent =
            currentProduct.categoryName;

        modalName.textContent =
            currentProduct.name;

        modalGeneric.textContent =
            currentProduct.generic;

        modalStrength.textContent =
            currentProduct.strength;

        modalManufacturer.textContent =
            currentProduct.manufacturer;

        modalStock.textContent =
            currentProduct.stock
                ? "In Stock"
                : "Out of Stock";

        modalDescription.textContent =
            currentProduct.description;

        modalPrice.textContent =
            formatPrice(currentProduct.price);

        modalPrescription.textContent =
            currentProduct.prescription
                ? "Prescription Required"
                : "Non-Prescription";


        productModal.classList.add("show");

        document.body.classList.add("no-scroll");

    }


    function closeProductModal() {

        productModal.classList.remove("show");

        document.body.classList.remove("no-scroll");

    }


    productModalClose.addEventListener(
        "click",
        closeProductModal
    );


    modalMinus.addEventListener(
        "click",
        function () {

            if (modalQuantity > 1) {

                modalQuantity--;

                modalQuantityElement.textContent =
                    modalQuantity;

            }

        }
    );


    modalPlus.addEventListener(
        "click",
        function () {

            modalQuantity++;

            modalQuantityElement.textContent =
                modalQuantity;

        }
    );


    modalCartButton.addEventListener(
        "click",
        function () {

            if (!currentProduct) return;

            addToCart(
                currentProduct.id,
                modalQuantity
            );

            closeProductModal();

        }
    );


    /* =========================================================
       CART
    ========================================================= */

    function addToCart(id, quantity) {

        const product =
            products.find(function (item) {
                return item.id === id;
            });


        if (!product) return;


        const existing =
            cart.find(function (item) {
                return item.id === id;
            });


        if (existing) {

            existing.quantity += quantity;

        } else {

            cart.push({
                id: id,
                quantity: quantity
            });

        }


        updateCart();

    }


    function removeFromCart(id) {

        cart =
            cart.filter(function (item) {
                return item.id !== id;
            });

        updateCart();

    }


    function changeCartQuantity(id, amount) {

        const item =
            cart.find(function (cartItem) {
                return cartItem.id === id;
            });


        if (!item) return;


        item.quantity += amount;


        if (item.quantity <= 0) {

            removeFromCart(id);

            return;

        }


        updateCart();

    }


    function getCartTotal() {

        return cart.reduce(
            function (total, item) {

                const product =
                    products.find(function (product) {
                        return product.id === item.id;
                    });

                return total +
                    (product.price * item.quantity);

            },
            0
        );

    }


    function updateCart() {

        const totalQuantity =
            cart.reduce(
                function (total, item) {
                    return total + item.quantity;
                },
                0
            );


        cartCount.textContent =
            totalQuantity;


        renderCart();

    }


    /* =========================================================
       CART MODAL
    ========================================================= */

    const cartModal =
        document.getElementById("cartModal");

    const cartModalClose =
        document.getElementById("cartModalClose");

    const cartItems =
        document.getElementById("cartItems");

    const emptyCart =
        document.getElementById("emptyCart");

    const cartSummary =
        document.getElementById("cartSummary");

    const cartSubtotal =
        document.getElementById("cartSubtotal");


    function openCart() {

        renderCart();

        cartModal.classList.add("show");

        document.body.classList.add("no-scroll");

    }


    function closeCart() {

        cartModal.classList.remove("show");

        document.body.classList.remove("no-scroll");

    }


    cartButton.addEventListener(
        "click",
        openCart
    );


    cartModalClose.addEventListener(
        "click",
        closeCart
    );


    function renderCart() {

        cartItems.innerHTML = "";


        if (cart.length === 0) {

            emptyCart.style.display =
                "block";

            cartSummary.style.display =
                "none";

            return;

        }


        emptyCart.style.display =
            "none";

        cartSummary.style.display =
            "block";


        cart.forEach(function (item) {

            const product =
                products.find(function (product) {
                    return product.id === item.id;
                });


            const itemElement =
                document.createElement("div");

            itemElement.className =
                "cart-item";


            itemElement.innerHTML = `

                <img
                    src="${product.image}"
                    alt="${product.name}"
                    onerror="this.src='https://placehold.co/200x200/f3fafc/087ba3?text=Medicine'">


                <div>

                    <h4>
                        ${product.name}
                    </h4>

                    <p>
                        ${formatPrice(product.price)}
                    </p>


                    <div class="cart-quantity">

                        <button
                            data-minus="${product.id}">
                            -
                        </button>

                        <span>
                            ${item.quantity}
                        </span>

                        <button
                            data-plus="${product.id}">
                            +
                        </button>

                    </div>

                    <button
                        class="remove-cart"
                        data-remove="${product.id}">

                        Remove

                    </button>

                </div>


                <strong class="cart-price">

                    ${formatPrice(product.price * item.quantity)}

                </strong>

            `;


            cartItems.appendChild(itemElement);

        });


        cartSubtotal.textContent =
            formatPrice(getCartTotal());


        cartItems
            .querySelectorAll("[data-minus]")
            .forEach(function (button) {

                button.addEventListener(
                    "click",
                    function () {

                        changeCartQuantity(
                            Number(button.dataset.minus),
                            -1
                        );

                    }
                );

            });


        cartItems
            .querySelectorAll("[data-plus]")
            .forEach(function (button) {

                button.addEventListener(
                    "click",
                    function () {

                        changeCartQuantity(
                            Number(button.dataset.plus),
                            1
                        );

                    }
                );

            });


        cartItems
            .querySelectorAll("[data-remove]")
            .forEach(function (button) {

                button.addEventListener(
                    "click",
                    function () {

                        removeFromCart(
                            Number(button.dataset.remove)
                        );

                    }
                );

            });

    }


    /* =========================================================
       REQUEST MODAL
    ========================================================= */

    const requestModal =
        document.getElementById("requestModal");

    const requestMedicineButton =
        document.getElementById("requestMedicineButton");

    const requestModalClose =
        document.getElementById("requestModalClose");

    const requestTotal =
        document.getElementById("requestTotal");

    const requestForm =
        document.getElementById("requestForm");


    function openRequestModal() {

        if (cart.length === 0) {

            return;

        }


        requestTotal.textContent =
            formatPrice(getCartTotal());


        closeCart();

        requestModal.classList.add("show");

        document.body.classList.add("no-scroll");

    }


    function closeRequestModal() {

        requestModal.classList.remove("show");

        document.body.classList.remove("no-scroll");

    }


    requestMedicineButton.addEventListener(
        "click",
        openRequestModal
    );


    requestModalClose.addEventListener(
        "click",
        closeRequestModal
    );


    /* =========================================================
       PRESCRIPTION BUTTON
    ========================================================= */

    const prescriptionButton =
        document.getElementById("prescriptionButton");


    prescriptionButton.addEventListener(
        "click",
        function () {

            requestModal.classList.add("show");

            document.body.classList.add("no-scroll");

            requestTotal.textContent =
                formatPrice(getCartTotal());

        }
    );


    /* =========================================================
       FORM SUBMISSION
    ========================================================= */

    const successMessage =
        document.getElementById("successMessage");

    const successClose =
        document.getElementById("successClose");


    requestForm.addEventListener(
        "submit",
        function (event) {

            event.preventDefault();


            if (cart.length === 0) {

                alert(
                    "Please add at least one medicine to your cart."
                );

                return;

            }


            closeRequestModal();

            successMessage.classList.add("show");

            cart = [];

            updateCart();

            requestForm.reset();

        }
    );


    successClose.addEventListener(
        "click",
        function () {

            successMessage.classList.remove("show");

        }
    );


    /* =========================================================
       ESCAPE KEY
    ========================================================= */

    document.addEventListener(
        "keydown",
        function (event) {

            if (event.key !== "Escape") return;

            closeProductModal();
            closeCart();
            closeRequestModal();
            closeMobileMenu();

            successMessage.classList.remove("show");

        }
    );


    /* =========================================================
       INITIAL RENDER
    ========================================================= */

    renderProducts();

    updateCart();

});