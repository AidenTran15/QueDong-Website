document.addEventListener('DOMContentLoaded', function () {
    const productContainer = document.getElementById('productContainer');
    const productsPerPage = 12;
    let currentPage = 1;
    let allProducts = [];
    let filteredProducts = [];

    function renderProducts(products) {
        productContainer.innerHTML = ''; // Clear current products
        products.forEach(product => {
            const col = document.createElement('div');
            col.className = 'col-3';

            const card = document.createElement('div');
            card.className = 'card mb-3';
            card.style.width = '16rem';
            card.innerHTML = `
                <img src="${product.image}" class="card-img-top product-image clickable" alt="${product.name}">
                <div class="overlay-text clickable">Xem Thêm</div>
                <div class="card-body">
                    <p class="product-category">${product.subcategory}</p>
                    <h5 class="card-title">${product.name}</h5>
                </div>
            `;

            col.appendChild(card);
            productContainer.appendChild(col);

            card.querySelector('.clickable').addEventListener('click', () => openProductModal(product));
            card.querySelector('.overlay-text').addEventListener('click', () => openProductModal(product));
        });
    }

    function updatePage() {
        const startIndex = (currentPage - 1) * productsPerPage;
        const endIndex = startIndex + productsPerPage;
        const paginatedProducts = filteredProducts.slice(startIndex, endIndex);

        renderProducts(paginatedProducts);

        const paginationContainer = document.querySelector('.pagination');
        paginationContainer.innerHTML = ''; // Clear current pagination

        // "Previous" page button
        const prevPageItem = document.createElement('li');
        prevPageItem.className = `page-item ${currentPage === 1 ? 'disabled' : ''}`;
        prevPageItem.innerHTML = `<a class="page-link" href="#" aria-label="Previous"><span aria-hidden="true">&laquo;</span></a>`;
        prevPageItem.addEventListener('click', function (e) {
            e.preventDefault();
            if (currentPage > 1) {
                currentPage--;
                updatePage(); // Remove the extra line here
            }
        });
        paginationContainer.appendChild(prevPageItem);

        // Page number buttons
        const totalPages = Math.ceil(filteredProducts.length / productsPerPage);
        for (let i = 1; i <= totalPages; i++) {
            const pageItem = document.createElement('li');
            pageItem.className = `page-item ${i === currentPage ? 'active' : ''}`;
            pageItem.innerHTML = `<a class="page-link" href="#">${i}</a>`;
            pageItem.addEventListener('click', function (e) {
                e.preventDefault();
                currentPage = i;
                updatePage();
            });
            paginationContainer.appendChild(pageItem);
        }

        // "Next" page button
        const nextPageItem = document.createElement('li');
        nextPageItem.className = `page-item ${currentPage === totalPages ? 'disabled' : ''}`;
        nextPageItem.innerHTML = `<a class="page-link" href="#" aria-label="Next"><span aria-hidden="true">&raquo;</span></a>`;
        nextPageItem.addEventListener('click', function (e) {
            e.preventDefault();
            if (currentPage < totalPages) {
                currentPage++;
                updatePage();
            }
        });
        paginationContainer.appendChild(nextPageItem);
    }

    function filterProducts(categories) {
        if (categories.length === 0) {
            // If no categories are selected, reset to all products.
            filteredProducts = allProducts.slice();
        } else {
            // Otherwise, filter based on the selected categories.
            filteredProducts = allProducts.filter(product => categories.includes(product.subcategory));
        }
        // Reset to the first page.
        currentPage = 1;
        // Update the page to reflect the new set of filtered products.
        updatePage();
    }
    // Event listener for each checkbox
    document.querySelectorAll('.form-check-input').forEach(checkbox => {
        checkbox.addEventListener('change', function () {
            const selectedCategories = Array.from(document.querySelectorAll('.form-check-input:checked')).map(checkbox => checkbox.id);

            filterProducts(selectedCategories);
        });
    });


    // Function to open the modal
    function openProductModal(product) {
        const modal = new bootstrap.Modal(document.getElementById('exampleModal'));
        document.getElementById('modalProductName').innerText = product.name;
        document.getElementById('modalProductCategory').innerText = product.category;
        document.getElementById('modalProductImage').src = product.image;
        document.getElementById('modalProductDescription').innerText = product.description;
        document.getElementById('modalProductBrands').innerText = product.brand;
        // Handle brands as a list
        const brandList = document.getElementById('modalProductBrands');
        brandList.innerHTML = ''; // clear previous brands
        product.brand.forEach(brandName => {
            const li = document.createElement('li');
            li.innerText = brandName;
            brandList.appendChild(li);
        });
        modal.show();

    }

    fetch('/Product-Page/products.json')
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json();
        })
        .then(products => {
            allProducts = products; // Save all products.
            filteredProducts = allProducts.slice(); // Initialize filteredProducts with all products.

            updatePage(); // Initial page setup.

            // ... rest of your fetch success handler ...
        })
        .catch(error => {
            console.error('Error fetching products:', error);
        });

});
