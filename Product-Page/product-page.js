document.addEventListener('DOMContentLoaded', function () {
    // Sample product data (replace with your actual JSON data or fetch from server)
    const products = [
        {
            "id": "Ngoi",
            "name": "Ngoi Mat Rong",
            "image": "../assest/product-images/Karambit.jpg",
            "brand": "My Xuan",
            "description": "Sample description for product 1",
            "category": "Category1",
            "tag": "1"
        },
        {
            "id": "Gach lat",
            "name": "Ngoi Con So",
            "image": "../assest/product-images/ak47-legion.jpg",
            "brand": "My Xuan",
            "description": "Sample description for product 2",
            "category": "Category2",
            "tag": "2"
        }
    ];

    const productContainer = document.getElementById('productContainer');

    products.forEach(product => {
        const card = document.createElement('div');
        card.className = 'card';
        card.style.width = '18rem';
        card.innerHTML = `
        <img src="${product.image}" class="card-img-top" alt="${product.name}">
        <div class="card-body">
          <h5 class="card-title">${product.name}</h5>
          <a href="#" class="btn btn-primary">Read more</a>
        </div>
      `;
        productContainer.appendChild(card);
    });
});
