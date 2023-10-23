document.addEventListener('DOMContentLoaded', function () {
    // Sample product data (replace with your actual JSON data or fetch from server)
    const products = [
        {
            "id": "Gach lat",
            "name": "AK-47 Asiimov",
            "image": "../assest/product-images/Asiimov.jpg",
            "brand": "My Xuan",
            "description": "Sample description for product 2",
            "category": "Category2",
            "tag": "2"
        },
        {
            "id": "Gach lat",
            "name": "AK47 Legion",
            "image": "../assest/product-images/legion.jpg",
            "brand": "My Xuan",
            "description": "Sample description for product 2",
            "category": "Category2",
            "tag": "2"
        },
        {
            "id": "Gach lat",
            "name": "AK-47 Elete Build",
            "image": "../assest/product-images/elite.jpg",
            "brand": "My Xuan",
            "description": "Sample description for product 2",
            "category": "Category2",
            "tag": "2"
        },
        {
            "id": "Gach lat",
            "name": "Karambit",
            "image": "../assest/product-images/Karambit.jpg",
            "brand": "My Xuan",
            "description": "Sample description for product 2",
            "category": "Category2",
            "tag": "2"
        },
        {
            "id": "Ngoi",
            "name": "M4a4 Zirka",
            "image": "../assest/product-images/Zirka.jpg",
            "brand": "My Xuan",
            "description": "Sample description for product 1",
            "category": "Category1",
            "tag": "1"
        },
        {
            "id": "Gach lat",
            "name": "M4a4 Evil",
            "image": "../assest/product-images/Evil.jpg",
            "brand": "My Xuan",
            "description": "Sample description for product 2",
            "category": "Category2",
            "tag": "2"
        },
        {
            "id": "Gach lat",
            "name": "M4a4 Evil 2",
            "image": "../assest/product-images/Evil2.jpg",
            "brand": "My Xuan",
            "description": "Sample description for product 2",
            "category": "Category2",
            "tag": "2"
        },
        {
            "id": "Gach lat",
            "name": "M4a4 Neo-Nier",
            "image": "../assest/product-images/neo.jpg",
            "brand": "My Xuan",
            "description": "Sample description for product 2",
            "category": "Category2",
            "tag": "2"
        }

    ];

    const productContainer = document.getElementById('productContainer');

    products.forEach(product => {
        const col = document.createElement('div');
        col.className = 'col-3'; // This creates 3 cards in a row

        const card = document.createElement('div');
        card.className = 'card mb-3';
        card.style.width = '16rem';
        card.innerHTML = `
        <img src="${product.image}" class="card-img-top product-image" alt="${product.name}"> 
        <div class="card-body">
            <h5 class="card-title">${product.name}</h5>
            <a href="#" class="btn btn-primary">Xem Thêm</a>
        </div>
    `;
        col.appendChild(card);
        productContainer.appendChild(col);
    });
});
