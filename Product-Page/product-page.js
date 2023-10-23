document.addEventListener('DOMContentLoaded', function () {

    const productContainer = document.getElementById('productContainer');

    // Function to open the modal
    function openProductModal(product) {
        const modal = new bootstrap.Modal(document.getElementById('exampleModal'));
        document.getElementById('modalProductName').innerText = product.name;
        document.getElementById('modalProductCategory').innerText = product.category;
        document.getElementById('modalProductImage').src = product.image;
        document.getElementById('modalProductDescription').innerText = product.description;
        modal.show();
    }

    // Fetch products data from the JSON file
    fetch('/Product-Page/products.json')
        .then(response => {
            console.log("Fetched data:", response);
            // Check if the fetch was successful
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json();
        })
        .then(products => {
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
                    <p class="product-category">${product.category}</p>
                    <h5 class="card-title">${product.name}</h5>
                </div>
            `;

                col.appendChild(card);
                productContainer.appendChild(col);

                // Event listener to open modal when the image or "Xem Thêm" text is clicked
                card.querySelector('.clickable').addEventListener('click', () => openProductModal(product));
                card.querySelector('.overlay-text').addEventListener('click', () => openProductModal(product));
            });

            productContainer.addEventListener('click', function (event) {
                const target = event.target;

                // Check if the clicked element is a product image
                if (target && target.classList.contains('product-image')) {
                    const modal = new bootstrap.Modal(document.getElementById('exampleModal'));

                    // Set the product name as the modal title
                    const productName = target.nextElementSibling.querySelector('.card-title').innerText;
                    document.getElementById('exampleModalLabel').innerText = productName;

                    modal.show();
                }
            });

        })
        .catch(error => {
            console.error('Error fetching products:', error);
        });
});
