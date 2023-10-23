document.addEventListener('DOMContentLoaded', function () {
    // Sample product data (replace with your actual JSON data or fetch from server)
    const products = [
        {
            "id": "Gach lat",
            "name": "AK-47 Asiimov",
            "image": "../assest/product-images/Asiimov.jpg",
            "brand": "My Xuan",
            "description": "Sample description for product 2",
            "category": "Ngói Xi Măng",
            "tag": "2"
        },
        {
            "id": "Gach lat",
            "name": "AK47 Legion",
            "image": "../assest/product-images/legion.jpg",
            "brand": "My Xuan",
            "description": "Sample description for product 2",
            "category": "Ngói Gạch",
            "tag": "2"
        },
        {
            "id": "Gach lat",
            "name": "AK-47 Elete Build",
            "image": "../assest/product-images/elite.jpg",
            "brand": "My Xuan",
            "description": "Sample description for product 2",
            "category": "Ngói bitum",
            "tag": "2"
        },
        {
            "id": "Gach lat",
            "name": "Karambit",
            "image": "../assest/product-images/Karambit.jpg",
            "brand": "My Xuan",
            "description": "Sample description for product 2",
            "category": "Ngói kim loại",
            "tag": "2"
        },
        {
            "id": "Ngoi",
            "name": "M4a4 Zirka",
            "image": "../assest/product-images/Zirka.jpg",
            "brand": "My Xuan",
            "description": "Sample description for product 1",
            "category": "Ngói tôn sóng",
            "tag": "1"
        },
        {
            "id": "Gach lat",
            "name": "M4a4 Evil",
            "image": "../assest/product-images/Evil.jpg",
            "brand": "My Xuan",
            "description": "Sample description for product 2",
            "category": "Ngói lợp màu",
            "tag": "2"
        },
        {
            "id": "Gach lat",
            "name": "M4a4 Evil 2",
            "image": "../assest/product-images/Evil2.jpg",
            "brand": "My Xuan",
            "description": "Sample description for product 2",
            "category": "Gạch lát bê tông",
            "tag": "2"
        },
        {
            "id": "Gach lat",
            "name": "M4a4 Neo-Nier",
            "image": "../assest/product-images/neo.jpg",
            "brand": "My Xuan",
            "description": "Sample description for product 2",
            "category": "Gạch lát bóng kính",
            "tag": "2"
        }

    ];

    const productContainer = document.getElementById('productContainer');

    // Function to open the modal
    function openProductModal(product) {
        const modal = new bootstrap.Modal(document.getElementById('exampleModal'));
        document.getElementById('modalProductName').innerText = product.name;
        document.getElementById('modalProductCategory').innerText = product.category;
        document.getElementById('modalProductImage').src = product.image;
        document.getElementById('modalProductDescription').innerText = product.description; // Assuming your product object has a description property
        modal.show();
    }

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
});
