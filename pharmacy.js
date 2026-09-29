/* =========================================================
   LUMBINI CITY HOSPITAL — PHARMACY PAGE
   pharmacy.js
========================================================= */


/* =========================================================
   MEDICINE DATA
========================================================= */

const medicines = [

    {
        id:1,
        name:"PARACETAMOL",
        generic:"Paracetamol",
        strength:"500 mg",
        category:"pain",
        categoryName:"Pain Relief",
        manufacturer:"Siddhartha Pharma",
        price:107,
        stock:true,
        prescription:false,
        image:"pharmacy/1000124191-removebg-preview.png",
        description:"Used to relieve mild to moderate pain and reduce fever."
    },

    {
        id:2,
        name:"IBUPROFEN",
        generic:"Ibuprofen",
        strength:"400 mg",
        category:"pain",
        categoryName:"Pain Relief",
        manufacturer:"Siddhartha Pharma",
        price:318,
        stock:true,
        prescription:false,
        image:"pharmacy/1000124207-removebg-preview.png",
        description:"A non-steroidal anti-inflammatory medicine used for pain, inflammation and fever."
    },

    {
        id:3,
        name:"OMEPRAZOLE",
        generic:"Omeprazole",
        strength:"20 mg",
        category:"stomach",
        categoryName:"Gastrointestinal",
        manufacturer:"Siddhartha Pharma",
        price:202,
        stock:true,
        prescription:false,
        image:"pharmacy/1000124209-removebg-preview.png",
        description:"Reduces stomach acid and is commonly used for acid reflux and related conditions."
    },

    {
        id:4,
        name:"PANTOPRAZOLE",
        generic:"Pantoprazole",
        strength:"40 mg",
        category:"stomach",
        categoryName:"Gastrointestinal",
        manufacturer:"Siddhartha Pharma",
        price:305,
        stock:true,
        prescription:false,
        image:"pharmacy/1000124205-removebg-preview.png",
        description:"A proton pump inhibitor used to reduce excess stomach acid."
    },

    {
        id:5,
        name:"CETIRIZINE",
        generic:"Cetirizine Hydrochloride",
        strength:"10 mg",
        category:"allergy",
        categoryName:"Allergy",
        manufacturer:"Siddhartha Pharma",
        price:116,
        stock:true,
        prescription:false,
        image:"pharmacy/1000124193-removebg-preview.png",
        description:"An antihistamine commonly used to relieve allergy symptoms."
    },

    {
        id:6,
        name:"LORATADINE",
        generic:"Loratadine",
        strength:"10 mg",
        category:"allergy",
        categoryName:"Allergy",
        manufacturer:"Siddhartha Pharma",
        price:248,
        stock:true,
        prescription:false,
        image:"pharmacy/img1-removebg-preview.png",
        description:"An antihistamine used for symptoms associated with allergic conditions."
    },

    {
        id:7,
        name:"AMOXICILLIN",
        generic:"Amoxicillin",
        strength:"500 mg",
        category:"antibiotic",
        categoryName:"Antibiotics",
        manufacturer:"Siddhartha Pharma",
        price:463,
        stock:true,
        prescription:true,
        image:"pharmacy/1000124197-removebg-preview.png",
        description:"A penicillin-type antibiotic used to treat certain bacterial infections."
    },

    {
        id:8,
        name:"AZITHROMYCIN",
        generic:"Azithromycin",
        strength:"500 mg",
        category:"antibiotic",
        categoryName:"Antibiotics",
        manufacturer:"Siddhartha Pharma",
        price:557,
        stock:true,
        prescription:true,
        image:"pharmacy/1000124199-removebg-preview.png",
        description:"An antibiotic used for selected bacterial infections."
    },

    {
        id:9,
        name:"METFORMIN",
        generic:"Metformin Hydrochloride",
        strength:"500 mg",
        category:"diabetes",
        categoryName:"Diabetes",
        manufacturer:"Siddhartha Pharma",
        price:129,
        stock:true,
        prescription:true,
        image:"img2-removebg-preview.png",
        description:"A medicine commonly prescribed to help control blood glucose levels in type 2 diabetes."
    },

    {
        id:10,
        name:"GLIMEPIRIDE",
        generic:"Glimepiride",
        strength:"2 mg",
        category:"diabetes",
        categoryName:"Diabetes",
        manufacturer:"Siddhartha Pharma",
        price:184,
        stock:true,
        prescription:true,
        image:"pharmacy/1000124203-removebg-preview.png",
        description:"An oral medicine prescribed for blood glucose management in type 2 diabetes."
    },

    {
        id:11,
        name:"AMLODIPINE",
        generic:"Amlodipine",
        strength:"5 mg",
        category:"heart",
        categoryName:"Cardiovascular",
        manufacturer:"Siddhartha Pharma",
        price:142,
        stock:true,
        prescription:true,
        image:"pharmacy/1000124225-removebg-preview.png",
        description:"A calcium-channel blocker commonly prescribed for high blood pressure."
    },

    {
        id:12,
        name:"LOSARTAN",
        generic:"Losartan Potassium",
        strength:"50 mg",
        category:"heart",
        categoryName:"Cardiovascular",
        manufacturer:"Siddhartha Pharma",
        price:276,
        stock:true,
        prescription:true,
        image:"pharmacy/1000124227-removebg-preview.jpg",
        description:"An angiotensin receptor blocker commonly prescribed for hypertension."
    },

    {
        id:13,
        name:"LOADINE",
        generic:"Loratadine",
        strength:"10 mg",
        category:"allergy",
        categoryName:"Allergy",
        manufacturer:"Siddhartha Pharma",
        price:360,
        stock:true,
        prescription:false,
        image:"pharmacy/1000124229-removebg-preview.png",
        description:"An antihistamine used to relieve common allergy symptoms."
    },

    {
        id:14,
        name:"ATORVASTATIN",
        generic:"Atorvastatin",
        strength:"20 mg",
        category:"heart",
        categoryName:"Cardiovascular",
        manufacturer:"Siddhartha Pharma",
        price:341,
        stock:true,
        prescription:true,
        image:"pharmacy/1000124211-removebg-preview.png",
        description:"A statin medicine prescribed to help lower cholesterol."
    },

    {
        id:15,
        name:"DOMPERIDONE",
        generic:"Domperidone",
        strength:"10 mg",
        category:"stomach",
        categoryName:"Gastrointestinal",
        manufacturer:"Siddhartha Pharma",
        price:157,
        stock:true,
        prescription:true,
        image:"pharmacy/1000124213-removebg-preview.png",
        description:"A medicine used in selected gastrointestinal conditions under medical guidance."
    },

    {
        id:16,
        name:"ORS",
        generic:"Oral Rehydration Salts",
        strength:"21 g",
        category:"other",
        categoryName:"General Care",
        manufacturer:"Siddhartha Pharma",
        price:37,
        stock:true,
        prescription:false,
        image:"pharmacy/1000124215-removebg-preview.png",
        description:"Used to help replace fluids and electrolytes during dehydration."
    },

    {
        id:17,
        name:"VITAMIN C",
        generic:"Ascorbic Acid",
        strength:"500 mg",
        category:"vitamin",
        categoryName:"Vitamins",
        manufacturer:"Siddhartha Pharma",
        price:227,
        stock:true,
        prescription:false,
        image:"pharmacy/1000124217-removebg-preview.png",
        description:"A vitamin supplement containing ascorbic acid."
    },

    {
        id:18,
        name:"MULTIVITAMIN",
        generic:"Multivitamin Tablets",
        strength:"Daily Formula",
        category:"vitamin",
        categoryName:"Vitamins",
        manufacturer:"Siddhartha Pharma",
        price:402,
        stock:true,
        prescription:false,
        image:"pharmacy/1000124219-removebg-preview.png",
        description:"A combination vitamin supplement for general nutritional support."
    },

    {
        id:19,
        name:"CALCIUM",
        generic:"Calcium Carbonate",
        strength:"500 mg",
        category:"vitamin",
        categoryName:"Vitamins",
        manufacturer:"Siddhartha Pharma",
        price:264,
        stock:true,
        prescription:false,
        image:"pharmacy/1000124221-removebg-preview.png",
        description:"A calcium supplement used when additional calcium intake is required."
    },

    {
        id:20,
        name:"VITAMIN D3",
        generic:"Cholecalciferol",
        strength:"1000 IU",
        category:"vitamin",
        categoryName:"Vitamins",
        manufacturer:"Siddhartha Pharma",
        price:357,
        stock:true,
        prescription:false,
        image:"pharmacy/1000124223-removebg-preview.png",
        description:"A vitamin D supplement that supports normal calcium and bone metabolism."
    },

    {
        id:21,
        name:"COUGH SYRUP",
        generic:"Cough Relief Syrup",
        strength:"100 ml",
        category:"other",
        categoryName:"General Care",
        manufacturer:"Siddhartha Pharma",
        price:173,
        stock:true,
        prescription:false,
        image:"pharmacy/1000124241-removebg-preview.png",
        description:"A cough preparation intended for symptomatic relief."
    },

    {
        id:22,
        name:"ANTACID",
        generic:"Aluminium Hydroxide + Magnesium Hydroxide",
        strength:"170 ml",
        category:"stomach",
        categoryName:"Gastrointestinal",
        manufacturer:"Siddhartha Pharma",
        price:189,
        stock:true,
        prescription:false,
        image:"pharmacy/1000124243-removebg-preview.png",
        description:"An antacid preparation used to neutralize excess stomach acid."
    },

    {
        id:23,
        name:"DICLOFENAC",
        generic:"Diclofenac Sodium",
        strength:"50 mg",
        category:"pain",
        categoryName:"Pain Relief",
        manufacturer:"Siddhartha Pharma",
        price:137,
        stock:true,
        prescription:true,
        image:"pharmacy/1000124245-removebg-preview.jpg",
        description:"An anti-inflammatory medicine used for selected painful inflammatory conditions."
    },

    {
        id:24,
        name:"MONTELUKAST",
        generic:"Montelukast",
        strength:"10 mg",
        category:"allergy",
        categoryName:"Allergy",
        manufacturer:"Siddhartha Pharma",
        price:286,
        stock:true,
        prescription:true,
        image:"pharmacy/1000124247-removebg-preview.png",
        description:"A medicine prescribed for selected respiratory and allergy-related conditions."
    },

    {
        id:25,
        name:"SYNOREX",
        generic:"Cold & Allergy Relief",
        strength:"Standard",
        category:"other",
        categoryName:"General Care",
        manufacturer:"Siddhartha Pharma",
        price:221,
        stock:true,
        prescription:false,
        image:"pharmacy/1000124249-removebg-preview.png",
        description:"A general cold and allergy relief product."
    },

    {
        id:26,
        name:"EYE DROPS",
        generic:"Lubricating Eye Drops",
        strength:"10 ml",
        category:"other",
        categoryName:"Eye Care",
        manufacturer:"Siddhartha Pharma",
        price:163,
        stock:true,
        prescription:false,
        image:"pharmacy/1000124231-removebg-preview.png",
        description:"Lubricating eye drops intended to relieve symptoms of dry or irritated eyes."
    },

    {
        id:27,
        name:"INSULIN",
        generic:"Human Insulin",
        strength:"100 IU/ml",
        category:"diabetes",
        categoryName:"Diabetes",
        manufacturer:"Siddhartha Pharma",
        price:857,
        stock:true,
        prescription:true,
        image:"pharmacy/1000124233-removebg-preview.png",
        description:"Insulin used for blood glucose management according to a prescribed treatment plan."
    },

    {
        id:28,
        name:"ASPIRIN",
        generic:"Acetylsalicylic Acid",
        strength:"75 mg",
        category:"heart",
        categoryName:"Cardiovascular",
        manufacturer:"Siddhartha Pharma",
        price:83,
        stock:true,
        prescription:true,
        image:"pharmacy/1000124235-removebg-preview.png",
        description:"A low-dose aspirin product that may be prescribed for cardiovascular protection."
    },

    {
        id:29,
        name:"BETADINE",
        generic:"Povidone-Iodine",
        strength:"10%",
        category:"other",
        categoryName:"Antiseptic",
        manufacturer:"Siddhartha Pharma",
        price:119,
        stock:true,
        prescription:false,
        image:"pharmacy/1000124237-removebg-preview.png",
        description:"An antiseptic preparation used for cleaning and disinfecting skin."
    },

    {
        id:30,
        name:"ZINC",
        generic:"Zinc Sulphate",
        strength:"20 mg",
        category:"vitamin",
        categoryName:"Vitamins",
        manufacturer:"Siddhartha Pharma",
        price:147,
        stock:true,
        prescription:false,
        image:"pharmacy/1000124239-removebg-preview.png",
        description:"A zinc supplement used when additional dietary zinc is required."
    }

];


/* =========================================================
   DOM
========================================================= */

const pageLoader =
    document.getElementById("pageLoader");

const navbar =
    document.getElementById("navbar");

const menuToggle =
    document.getElementById("menuToggle");

const mobileMenu =
    document.getElementById("mobileMenu");

const closeMenu =
    document.getElementById("closeMenu");

const mobileOverlay =
    document.getElementById("mobileOverlay");

const searchInput =
    document.getElementById("searchInput");

const searchButton =
    document.getElementById("searchButton");

const categoryList =
    document.getElementById("categoryList");

const sortSelect =
    document.getElementById("sortSelect");

const cartButton =
    document.getElementById("cartButton");

const cartCount =
    document.getElementById("cartCount");

const productGrid =
    document.getElementById("productGrid");

const noProducts =
    document.getElementById("noProducts");


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

const modalMinus =
    document.getElementById("modalMinus");

const modalPlus =
    document.getElementById("modalPlus");

const modalQuantity =
    document.getElementById("modalQuantity");

const modalCartButton =
    document.getElementById("modalCartButton");


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

const requestMedicineButton =
    document.getElementById("requestMedicineButton");


/* =========================================================
   REQUEST MODAL
========================================================= */

const requestModal =
    document.getElementById("requestModal");

const requestModalClose =
    document.getElementById("requestModalClose");

const requestForm =
    document.getElementById("requestForm");

const patientName =
    document.getElementById("patientName");

const patientPhone =
    document.getElementById("patientPhone");

const patientAddress =
    document.getElementById("patientAddress");

const collectionMethod =
    document.getElementById("collectionMethod");

const prescriptionFile =
    document.getElementById("prescriptionFile");

const patientNotes =
    document.getElementById("patientNotes");

const requestTotal =
    document.getElementById("requestTotal");

const prescriptionButton =
    document.getElementById("prescriptionButton");


/* =========================================================
   SUCCESS
========================================================= */

const successMessage =
    document.getElementById("successMessage");

const successClose =
    document.getElementById("successClose");

const successDone =
    document.getElementById("successDone");


/* =========================================================
   STATE
========================================================= */

let activeCategory = "all";

let activeProduct = null;

let modalQty = 1;

let cart = [];


/* =========================================================
   IMAGE FALLBACK
========================================================= */

const fallbackImage =
    "https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?auto=format&fit=crop&w=700&q=80";


function setImageFallback(image){

    if (!image) return;

    image.addEventListener(
        "error",
        function(){

            if (
                image.dataset.fallbackUsed === "true"
            ){
                return;
            }

            image.dataset.fallbackUsed =
                "true";

            image.src =
                fallbackImage;

        }
    );

}


/* =========================================================
   PAGE LOADER
========================================================= */

window.addEventListener(
    "load",
    function(){

        setTimeout(
            function(){

                if (pageLoader){

                    pageLoader.classList.add("hide");

                }

            },
            600
        );

    }
);


/* =========================================================
   NAVBAR SCROLL
========================================================= */

function updateNavbar(){

    if (!navbar) return;

    if (window.scrollY > 40){

        navbar.classList.add("scrolled");

    }else{

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

function openMobileMenu(){

    if (mobileMenu){

        mobileMenu.classList.add("show");

    }

    if (mobileOverlay){

        mobileOverlay.classList.add("show");

    }

    if (menuToggle){

        menuToggle.setAttribute(
            "aria-expanded",
            "true"
        );

    }

    document.body.classList.add(
        "no-scroll"
    );

}


function closeMobileMenu(){

    if (mobileMenu){

        mobileMenu.classList.remove("show");

    }

    if (mobileOverlay){

        mobileOverlay.classList.remove("show");

    }

    if (menuToggle){

        menuToggle.setAttribute(
            "aria-expanded",
            "false"
        );

    }

    document.body.classList.remove(
        "no-scroll"
    );

}


if (menuToggle){

    menuToggle.addEventListener(
        "click",
        openMobileMenu
    );

}


if (closeMenu){

    closeMenu.addEventListener(
        "click",
        closeMobileMenu
    );

}


if (mobileOverlay){

    mobileOverlay.addEventListener(
        "click",
        closeMobileMenu
    );

}


document
    .querySelectorAll(".mobile-links a")
    .forEach(
        function(link){

            link.addEventListener(
                "click",
                closeMobileMenu
            );

        }
    );


/* =========================================================
   CATEGORY BUTTONS
========================================================= */

document
    .querySelectorAll(".category-btn")
    .forEach(
        function(button){

            button.addEventListener(
                "click",
                function(){

                    document
                        .querySelectorAll(".category-btn")
                        .forEach(
                            function(btn){

                                btn.classList.remove(
                                    "active"
                                );

                            }
                        );


                    this.classList.add(
                        "active"
                    );


                    activeCategory =
                        this.dataset.category ||
                        "all";


                    renderProducts();

                }
            );

        }
    );


/* =========================================================
   FORMAT PRICE
========================================================= */

function formatPrice(price){

    return (
        "NPR " +
        Number(price).toLocaleString()
    );

}


/* =========================================================
   FILTER PRODUCTS
========================================================= */

function getFilteredProducts(){

    let result =
        [...medicines];


    const searchTerm =
        searchInput
            ? searchInput.value
                .trim()
                .toLowerCase()
            : "";


    if (
        activeCategory !== "all"
    ){

        result =
            result.filter(
                function(medicine){

                    return (
                        medicine.category ===
                        activeCategory
                    );

                }
            );

    }


    if (searchTerm !== ""){

        result =
            result.filter(
                function(medicine){

                    return (

                        medicine.name
                            .toLowerCase()
                            .includes(searchTerm)

                        ||

                        medicine.generic
                            .toLowerCase()
                            .includes(searchTerm)

                        ||

                        medicine.categoryName
                            .toLowerCase()
                            .includes(searchTerm)

                        ||

                        medicine.manufacturer
                            .toLowerCase()
                            .includes(searchTerm)

                    );

                }
            );

    }


    if (sortSelect){

        const sortValue =
            sortSelect.value;


        if (
            sortValue === "low" ||
            sortValue === "price-low"
        ){

            result.sort(
                function(a,b){

                    return a.price - b.price;

                }
            );

        }


        else if (
            sortValue === "high" ||
            sortValue === "price-high"
        ){

            result.sort(
                function(a,b){

                    return b.price - a.price;

                }
            );

        }


        else if (
            sortValue === "name"
        ){

            result.sort(
                function(a,b){

                    return a.name.localeCompare(
                        b.name
                    );

                }
            );

        }


        else if (
            sortValue === "newest"
        ){

            result.sort(
                function(a,b){

                    return b.id - a.id;

                }
            );

        }

    }


    return result;

}


/* =========================================================
   RENDER PRODUCTS
========================================================= */

function renderProducts(){

    if (!productGrid) return;


    const products =
        getFilteredProducts();


    productGrid.innerHTML = "";


    if (products.length === 0){

        if (noProducts){

            noProducts.classList.add(
                "show"
            );

        }

        return;

    }


    if (noProducts){

        noProducts.classList.remove(
            "show"
        );

    }


    products.forEach(
        function(medicine){

            const card =
                document.createElement(
                    "article"
                );


            card.className =
                "product-card";


            card.dataset.productId =
                medicine.id;


            card.innerHTML = `

                <div class="product-image">

                    <span class="product-badge ${medicine.prescription ? "rx" : ""}">
                        ${medicine.prescription ? "Prescription" : "Available"}
                    </span>

                    <img
                        src="${medicine.image}"
                        alt="${medicine.name}"
                        loading="lazy"
                    >

                </div>


                <div class="product-body">

                    <span class="product-category">
                        ${medicine.categoryName}
                    </span>


                    <h3 class="product-name">
                        ${medicine.name}
                    </h3>


                    <p class="product-generic">
                        ${medicine.generic}
                    </p>


                    <p class="product-strength">
                        Strength: ${medicine.strength}
                    </p>


                    <div class="product-bottom">

                        <strong class="product-price">
                            ${formatPrice(medicine.price)}
                        </strong>


                        <button
                            class="view-btn"
                            type="button"
                            data-view="${medicine.id}"
                        >
                            View Details
                        </button>

                    </div>


                    <button
                        class="add-btn"
                        type="button"
                        data-add="${medicine.id}"
                    >

                        <i class="fa-solid fa-cart-plus"></i>

                        <span>
                            Add to Pharmacy Cart
                        </span>

                    </button>

                </div>

            `;


            productGrid.appendChild(
                card
            );


            const image =
                card.querySelector("img");


            setImageFallback(
                image
            );

        }
    );


    attachProductButtons();

    restoreAddedButtonStates();

}


/* =========================================================
   RESTORE ADD BUTTON STATE
========================================================= */

function restoreAddedButtonStates(){

    cart.forEach(
        function(cartItem){

            const button =
                document.querySelector(
                    `[data-add="${cartItem.id}"]`
                );


            if (!button) return;


            button.classList.add(
                "added"
            );


            button.innerHTML = `
                <i class="fa-solid fa-check"></i>
                <span>Added to Cart</span>
            `;

        }
    );

}


/* =========================================================
   PRODUCT BUTTON EVENTS
========================================================= */

function attachProductButtons(){

    document
        .querySelectorAll("[data-view]")
        .forEach(
            function(button){

                button.addEventListener(
                    "click",
                    function(){

                        const id =
                            Number(
                                this.dataset.view
                            );

                        openProductModal(id);

                    }
                );

            }
        );


    document
        .querySelectorAll("[data-add]")
        .forEach(
            function(button){

                button.addEventListener(
                    "click",
                    function(){

                        const id =
                            Number(
                                this.dataset.add
                            );


                        addToCart(
                            id,
                            1,
                            this
                        );

                    }
                );

            }
        );

}


/* =========================================================
   SEARCH
========================================================= */

if (searchButton){

    searchButton.addEventListener(
        "click",
        function(){

            renderProducts();


            const productsSection =
                document.getElementById(
                    "products"
                );


            if (productsSection){

                productsSection.scrollIntoView({
                    behavior:"smooth"
                });

            }

        }
    );

}


if (searchInput){

    searchInput.addEventListener(
        "input",
        function(){

            renderProducts();

        }
    );


    searchInput.addEventListener(
        "keydown",
        function(event){

            if (
                event.key === "Enter"
            ){

                event.preventDefault();


                renderProducts();


                const productsSection =
                    document.getElementById(
                        "products"
                    );


                if (productsSection){

                    productsSection.scrollIntoView({
                        behavior:"smooth"
                    });

                }

            }

        }
    );

}


/* =========================================================
   SORT
========================================================= */

if (sortSelect){

    sortSelect.addEventListener(
        "change",
        renderProducts
    );

}


/* =========================================================
   PRODUCT MODAL
========================================================= */

function openProductModal(id){

    const medicine =
        medicines.find(
            function(item){

                return item.id === id;

            }
        );


    if (
        !medicine ||
        !productModal
    ){

        return;

    }


    activeProduct =
        medicine;


    modalQty = 1;


    if (modalProductImage){

        modalProductImage.innerHTML = "";


        const image =
            document.createElement(
                "img"
            );


        image.src =
            medicine.image;


        image.alt =
            medicine.name;


        image.loading =
            "eager";


        setImageFallback(
            image
        );


        modalProductImage.appendChild(
            image
        );

    }


    if (modalCategory){

        modalCategory.textContent =
            medicine.categoryName;

    }


    if (modalName){

        modalName.textContent =
            medicine.name;

    }


    if (modalGeneric){

        modalGeneric.textContent =
            medicine.generic;

    }


    if (modalStrength){

        modalStrength.textContent =
            medicine.strength;

    }


    if (modalManufacturer){

        modalManufacturer.textContent =
            medicine.manufacturer;

    }


    if (modalStock){

        modalStock.textContent =
            medicine.stock
                ? "In Stock"
                : "Out of Stock";


        modalStock.style.color =
            medicine.stock
                ? "#18875b"
                : "#c94b4b";

    }


    if (modalDescription){

        modalDescription.textContent =
            medicine.description;

    }


    if (modalPrice){

        modalPrice.textContent =
            formatPrice(
                medicine.price
            );

    }


    if (modalPrescription){

        modalPrescription.textContent =
            medicine.prescription
                ? "Required"
                : "Not Required";

    }


    updateModalQuantity();


    productModal.classList.add(
        "show"
    );


    productModal.setAttribute(
        "aria-hidden",
        "false"
    );


    document.body.classList.add(
        "no-scroll"
    );

}


function closeProductModal(){

    if (!productModal) return;


    productModal.classList.remove(
        "show"
    );


    productModal.setAttribute(
        "aria-hidden",
        "true"
    );


    document.body.classList.remove(
        "no-scroll"
    );


    activeProduct = null;

}


if (productModalClose){

    productModalClose.addEventListener(
        "click",
        closeProductModal
    );

}


if (productModal){

    const backdrop =
        productModal.querySelector(
            ".modal-backdrop"
        );


    if (backdrop){

        backdrop.addEventListener(
            "click",
            closeProductModal
        );

    }

}


/* =========================================================
   MODAL QUANTITY
========================================================= */

function updateModalQuantity(){

    if (modalQuantity){

        modalQuantity.textContent =
            modalQty;

    }

}


if (modalMinus){

    modalMinus.addEventListener(
        "click",
        function(){

            if (modalQty > 1){

                modalQty--;

                updateModalQuantity();

            }

        }
    );

}


if (modalPlus){

    modalPlus.addEventListener(
        "click",
        function(){

            if (modalQty < 99){

                modalQty++;

                updateModalQuantity();

            }

        }
    );

}


/* =========================================================
   ADD TO CART
========================================================= */

function addToCart(
    id,
    quantity,
    sourceButton = null
){

    const medicine =
        medicines.find(
            function(item){

                return item.id === id;

            }
        );


    if (
        !medicine ||
        !medicine.stock
    ){

        return;

    }


    const existing =
        cart.find(
            function(item){

                return item.id === id;

            }
        );


    if (existing){

        existing.quantity +=
            quantity;

    }else{

        cart.push({

            id:medicine.id,

            quantity:quantity

        });

    }


    updateCart();


    showCartFeedback();


    if (sourceButton){

        showAddedButton(
            sourceButton
        );

    }

}


function showAddedButton(button){

    if (!button) return;


    button.classList.add(
        "added"
    );


    button.innerHTML = `
        <i class="fa-solid fa-check"></i>
        <span>Added to Cart</span>
    `;


    setTimeout(
        function(){

            if (
                !button.isConnected
            ){

                return;

            }


            button.classList.remove(
                "added"
            );


            button.innerHTML = `
                <i class="fa-solid fa-cart-plus"></i>
                <span>Add to Pharmacy Cart</span>
            `;


            const medicineId =
                Number(
                    button.dataset.add
                );


            const stillInCart =
                cart.some(
                    function(item){

                        return (
                            item.id ===
                            medicineId
                        );

                    }
                );


            if (stillInCart){

                button.classList.add(
                    "added"
                );


                button.innerHTML = `
                    <i class="fa-solid fa-check"></i>
                    <span>Added to Cart</span>
                `;

            }

        },
        1300
    );

}


function showCartFeedback(){

    if (!cartButton) return;


    cartButton.classList.remove(
        "bump"
    );


    void cartButton.offsetWidth;


    cartButton.classList.add(
        "bump"
    );


    setTimeout(
        function(){

            cartButton.classList.remove(
                "bump"
            );

        },
        500
    );

}


/* =========================================================
   MODAL ADD TO CART
========================================================= */

if (modalCartButton){

    modalCartButton.addEventListener(
        "click",
        function(){

            if (!activeProduct){

                return;

            }


            addToCart(
                activeProduct.id,
                modalQty
            );


            this.innerHTML = `
                <i class="fa-solid fa-check"></i>
                Added to Cart
            `;


            this.disabled = true;


            setTimeout(
                function(){

                    closeProductModal();


                    modalCartButton.innerHTML = `
                        <i class="fa-solid fa-cart-plus"></i>
                        Add to Pharmacy Cart
                    `;


                    modalCartButton.disabled =
                        false;

                },
                600
            );

        }
    );

}


/* =========================================================
   UPDATE CART
========================================================= */

function updateCart(){

    let totalQuantity = 0;

    let subtotal = 0;


    cart.forEach(
        function(cartItem){

            const medicine =
                medicines.find(
                    function(item){

                        return (
                            item.id ===
                            cartItem.id
                        );

                    }
                );


            if (!medicine) return;


            totalQuantity +=
                cartItem.quantity;


            subtotal +=
                medicine.price *
                cartItem.quantity;

        }
    );


    if (cartCount){

        cartCount.textContent =
            totalQuantity;

    }


    if (cartSubtotal){

        cartSubtotal.textContent =
            formatPrice(
                subtotal
            );

    }


    if (requestTotal){

        requestTotal.textContent =
            formatPrice(
                subtotal
            );

    }


    renderCart();

}


/* =========================================================
   RENDER CART
========================================================= */

function renderCart(){

    if (!cartItems) return;


    cartItems.innerHTML = "";


    if (cart.length === 0){

        if (emptyCart){

            emptyCart.style.display =
                "block";

        }


        if (cartSummary){

            cartSummary.style.display =
                "none";

        }


        return;

    }


    if (emptyCart){

        emptyCart.style.display =
            "none";

    }


    if (cartSummary){

        cartSummary.style.display =
            "block";

    }


    cart.forEach(
        function(cartItem){

            const medicine =
                medicines.find(
                    function(item){

                        return (
                            item.id ===
                            cartItem.id
                        );

                    }
                );


            if (!medicine) return;


            const item =
                document.createElement(
                    "div"
                );


            item.className =
                "cart-item";


            item.innerHTML = `

                <img
                    src="${medicine.image}"
                    alt="${medicine.name}"
                >


                <div>

                    <h4>
                        ${medicine.name}
                    </h4>


                    <p>
                        ${formatPrice(medicine.price)}
                    </p>


                    <div class="cart-quantity">

                        <button
                            type="button"
                            data-cart-minus="${medicine.id}"
                        >
                            −
                        </button>


                        <span>
                            ${cartItem.quantity}
                        </span>


                        <button
                            type="button"
                            data-cart-plus="${medicine.id}"
                        >
                            +
                        </button>

                    </div>


                    <button
                        class="remove-cart"
                        type="button"
                        data-cart-remove="${medicine.id}"
                    >
                        Remove
                    </button>

                </div>


                <strong class="cart-price">

                    ${formatPrice(
                        medicine.price *
                        cartItem.quantity
                    )}

                </strong>

            `;


            cartItems.appendChild(
                item
            );


            setImageFallback(
                item.querySelector("img")
            );

        }
    );


    attachCartButtons();

}


/* =========================================================
   CART BUTTON EVENTS
========================================================= */

function attachCartButtons(){

    document
        .querySelectorAll("[data-cart-minus]")
        .forEach(
            function(button){

                button.addEventListener(
                    "click",
                    function(){

                        const id =
                            Number(
                                this.dataset.cartMinus
                            );


                        changeCartQuantity(
                            id,
                            -1
                        );

                    }
                );

            }
        );


    document
        .querySelectorAll("[data-cart-plus]")
        .forEach(
            function(button){

                button.addEventListener(
                    "click",
                    function(){

                        const id =
                            Number(
                                this.dataset.cartPlus
                            );


                        changeCartQuantity(
                            id,
                            1
                        );

                    }
                );

            }
        );


    document
        .querySelectorAll("[data-cart-remove]")
        .forEach(
            function(button){

                button.addEventListener(
                    "click",
                    function(){

                        const id =
                            Number(
                                this.dataset.cartRemove
                            );


                        removeFromCart(id);

                    }
                );

            }
        );

}


/* =========================================================
   CHANGE CART QUANTITY
========================================================= */

function changeCartQuantity(
    id,
    change
){

    const item =
        cart.find(
            function(cartItem){

                return (
                    cartItem.id ===
                    id
                );

            }
        );


    if (!item) return;


    item.quantity +=
        change;


    if (item.quantity <= 0){

        cart =
            cart.filter(
                function(cartItem){

                    return (
                        cartItem.id !==
                        id
                    );

                }
            );

    }


    updateCart();

}


/* =========================================================
   REMOVE CART ITEM
========================================================= */

function removeFromCart(id){

    cart =
        cart.filter(
            function(item){

                return (
                    item.id !== id
                );

            }
        );


    updateCart();

}


/* =========================================================
   OPEN CART
========================================================= */

function openCart(){

    if (!cartModal) return;


    updateCart();


    cartModal.classList.add(
        "show"
    );


    cartModal.setAttribute(
        "aria-hidden",
        "false"
    );


    document.body.classList.add(
        "no-scroll"
    );

}


function closeCart(){

    if (!cartModal) return;


    cartModal.classList.remove(
        "show"
    );


    cartModal.setAttribute(
        "aria-hidden",
        "true"
    );


    document.body.classList.remove(
        "no-scroll"
    );

}


if (cartButton){

    cartButton.addEventListener(
        "click",
        openCart
    );

}


if (cartModalClose){

    cartModalClose.addEventListener(
        "click",
        closeCart
    );

}


if (cartModal){

    const backdrop =
        cartModal.querySelector(
            ".modal-backdrop"
        );


    if (backdrop){

        backdrop.addEventListener(
            "click",
            closeCart
        );

    }

}


/* =========================================================
   REQUEST MODAL
========================================================= */

function openRequestModal(){

    if (!requestModal) return;


    updateRequestTotal();


    requestModal.classList.add(
        "show"
    );


    requestModal.setAttribute(
        "aria-hidden",
        "false"
    );


    document.body.classList.add(
        "no-scroll"
    );

}


function closeRequestModal(){

    if (!requestModal) return;


    requestModal.classList.remove(
        "show"
    );


    requestModal.setAttribute(
        "aria-hidden",
        "true"
    );


    document.body.classList.remove(
        "no-scroll"
    );

}


if (requestMedicineButton){

    requestMedicineButton.addEventListener(
        "click",
        function(){

            if (
                cart.length === 0
            ){

                return;

            }


            closeCart();

            openRequestModal();

        }
    );

}


if (prescriptionButton){

    prescriptionButton.addEventListener(
        "click",
        function(){

            if (cart.length === 0){

                const productsSection =
                    document.getElementById(
                        "products"
                    );


                if (productsSection){

                    productsSection.scrollIntoView({
                        behavior:"smooth"
                    });

                }


                return;

            }


            openRequestModal();

        }
    );

}


if (requestModalClose){

    requestModalClose.addEventListener(
        "click",
        closeRequestModal
    );

}


if (requestModal){

    const backdrop =
        requestModal.querySelector(
            ".modal-backdrop"
        );


    if (backdrop){

        backdrop.addEventListener(
            "click",
            closeRequestModal
        );

    }

}


/* =========================================================
   REQUEST TOTAL
========================================================= */

function calculateSubtotal(){

    let total = 0;


    cart.forEach(
        function(cartItem){

            const medicine =
                medicines.find(
                    function(item){

                        return (
                            item.id ===
                            cartItem.id
                        );

                    }
                );


            if (!medicine) return;


            total +=
                medicine.price *
                cartItem.quantity;

        }
    );


    return total;

}


function updateRequestTotal(){

    const total =
        calculateSubtotal();


    if (requestTotal){

        requestTotal.textContent =
            formatPrice(
                total
            );

    }

}


/* =========================================================
   REQUEST FORM
========================================================= */

if (requestForm){

    requestForm.addEventListener(
        "submit",
        function(event){

            event.preventDefault();


            if (cart.length === 0){

                return;

            }


            const name =
                patientName
                    ? patientName.value.trim()
                    : "";


            const phone =
                patientPhone
                    ? patientPhone.value.trim()
                    : "";


            const address =
                patientAddress
                    ? patientAddress.value.trim()
                    : "";


            if (
                name === "" ||
                phone === "" ||
                address === ""
            ){

                alert(
                    "Please complete all required patient information."
                );

                return;

            }


            closeRequestModal();


            showSuccessMessage();


            cart = [];


            updateCart();


            requestForm.reset();

        }
    );

}


/* =========================================================
   SUCCESS
========================================================= */

function showSuccessMessage(){

    if (!successMessage) return;


    successMessage.classList.add(
        "show"
    );


    document.body.classList.add(
        "no-scroll"
    );

}


function closeSuccessMessage(){

    if (!successMessage) return;


    successMessage.classList.remove(
        "show"
    );


    document.body.classList.remove(
        "no-scroll"
    );

}


if (successClose){

    successClose.addEventListener(
        "click",
        closeSuccessMessage
    );

}


if (successDone){

    successDone.addEventListener(
        "click",
        closeSuccessMessage
    );

}


document
    .querySelectorAll(".success-close")
    .forEach(
        function(button){

            button.addEventListener(
                "click",
                closeSuccessMessage
            );

        }
    );


/* =========================================================
   ESC KEY
========================================================= */

document.addEventListener(
    "keydown",
    function(event){

        if (
            event.key !== "Escape"
        ){

            return;

        }


        if (
            mobileMenu &&
            mobileMenu.classList.contains(
                "show"
            )
        ){

            closeMobileMenu();

            return;

        }


        if (
            productModal &&
            productModal.classList.contains(
                "show"
            )
        ){

            closeProductModal();

            return;

        }


        if (
            cartModal &&
            cartModal.classList.contains(
                "show"
            )
        ){

            closeCart();

            return;

        }


        if (
            requestModal &&
            requestModal.classList.contains(
                "show"
            )
        ){

            closeRequestModal();

            return;

        }


        if (
            successMessage &&
            successMessage.classList.contains(
                "show"
            )
        ){

            closeSuccessMessage();

        }

    }
);


/* =========================================================
   MODAL BACKGROUND SCROLL
========================================================= */

document
    .querySelectorAll(".modal")
    .forEach(
        function(modal){

            modal.addEventListener(
                "wheel",
                function(event){

                    const box =
                        modal.querySelector(
                            ".product-modal-box, .cart-modal-box, .request-modal-box"
                        );


                    if (!box) return;


                    if (
                        box.scrollHeight <=
                        box.clientHeight
                    ){

                        event.preventDefault();

                    }

                },
                {
                    passive:false
                }
            );

        }
    );


/* =========================================================
   INITIALIZE
========================================================= */

renderProducts();

updateCart();


/* =========================================================
   GLOBAL IMAGE ERROR HANDLER
========================================================= */

document.addEventListener(
    "error",
    function(event){

        const target =
            event.target;


        if (
            target &&
            target.tagName === "IMG" &&
            target.dataset.fallbackUsed !== "true"
        ){

            target.dataset.fallbackUsed =
                "true";


            target.src =
                fallbackImage;

        }

    },
    true
);


