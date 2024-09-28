// Sample restaurant data
const restaurants = [
    {
        name: "Saravana Bhavan",
        cuisine: "South Indian",
        image: "https://th.bing.com//th//id//R.18a3ea73fa07790c75c38ae863caf1ed?rik=kpUEq4T%2fD8JUXw&riu=http%3a%2f%2fplanomagazine.com%2fwp-content%2fuploads%2f2017%2f09%2fSaravanna-Bhavan-Plano-Magazine-5-1170x773.jpg&ehk=ohYxoPjToE1jwd6XEYBQZgtemClxtUI1XgQR79RRx2g%3d&risl=&pid=ImgRaw&r=0",
        description: "Traditional South Indian cuisine with authentic flavors.",
    },
    {
        name: "Annalakshmi",
        cuisine: "Chettinad",
        image: "https://th.bing.com//th//id//OIP.74_S_w9jpTCD_vU-xXExvgHaEK?w=292&h=180&c=7&r=0&o=5&dpr=1.5&pid=1.7",
        description: "Serving the best Chettinad delicacies in Salem.",
    },
    {
        name: "Dragon China",
        cuisine: "Chinese",
        image: "https://th.bing.com//th//id//OIP.P2wJHHn_jTLQUmOnVegCPQHaE0?w=296&h=184&c=7&r=0&o=5&dpr=1.5&pid=1.7",
        description: "Delicious Chinese dishes with authentic flavors.",
    },
    {
        name: "Selvi Mess",
        cuisine: "Multicuisine",
        image: "https://th.bing.com//th//id//OIP.RtNT97dyg84DJzLnku4RwwHaEK?w=315&h=183&c=7&r=0&o=5&dpr=1.5&pid=1.7",
        description: "Famous for its variety of South Indian and North Indian dishes.",
    },
    {
        name: "Hotel Lakshmi Prakash",
        cuisine: "Pure Veg",
        image: "https://th.bing.com//th//id/OIP.L6Pl-zWORurqVOtg7obbkwAAAA?w=246&h=180&c=7&r=0&o=5&dpr=1.5&pid=1.7",
        description: "Popular pure vegetarian restaurant offering traditional meals and tiffin.",
    },
    {
        name: "Sri Annapoorna",
        cuisine: "South Indian",
        image: "https://th.bing.com//th//id//OIP.rIzBnnpi0fQL8p7SP0RtHAHaFN?rs=1&pid=ImgDetMain",
        description: "Renowned for authentic South Indian breakfast and filter coffee.",
    },
    {
        name: "Barbeque Nation",
        cuisine: "Grill/BBQ",
        image: "https://th.bing.com//th//id//OIP.woqvrdJJG2rJeAM_IcggqwHaE8?rs=1&pid=ImgDetMain",
        description: "Grilled starters and BBQ experience with a variety of vegetarian and non-vegetarian options.",
    },
    {
        name: "Hotel Junior Kuppanna",
        cuisine: "Kongunadu",
        image: "https://images.indianexpress.com//2016//05//thali-spread_759.jpg",
        description: "Famous for Kongunadu cuisine, serving biryanis and traditional non-vegetarian dishes.",
    }

];

// Function to load restaurant cards
function loadRestaurants() {
    const container = document.getElementById('restaurantContainer');
    container.innerHTML = '';
    restaurants.forEach((restaurant, index) => {
        const card = document.createElement('div');
        card.classList.add('restaurant-card');
        card.innerHTML = `
            <img src="${restaurant.image}" alt="${restaurant.name}">
            <h3>${restaurant.name}</h3>
            <p>${restaurant.description}</p>
        `;
        card.addEventListener('click', () => openModal(index));
        container.appendChild(card);
    });
}

// Function to filter restaurants
function filterRestaurants() {
    const input = document.getElementById('searchInput').value.toLowerCase();
    const filteredRestaurants = restaurants.filter(restaurant =>
        restaurant.name.toLowerCase().includes(input) ||
        restaurant.cuisine.toLowerCase().includes(input)
    );
    updateRestaurantCards(filteredRestaurants);
}

function updateRestaurantCards(filteredRestaurants) {
    const container = document.getElementById('restaurantContainer');
    container.innerHTML = '';
    filteredRestaurants.forEach((restaurant, index) => {
        const card = document.createElement('div');
        card.classList.add('restaurant-card');
        card.innerHTML = `
            <img src="${restaurant.image}" alt="${restaurant.name}">
            <h3>${restaurant.name}</h3>
            <p>${restaurant.description}</p>
        `;
        card.addEventListener('click', () => openModal(index));
        container.appendChild(card);
    });
}

// Modal Popup
const modal = document.getElementById('restaurantModal');
const closeModal = document.querySelector('.close');

function openModal(index) {
    document.getElementById('modalTitle').innerText = restaurants[index].name;
    document.getElementById('modalImage').src = restaurants[index].image;
    document.getElementById('modalDescription').innerText = restaurants[index].description;
    modal.style.display = "block";
}

closeModal.onclick = function() {
    modal.style.display = "none";
};

window.onclick = function(event) {
    if (event.target === modal) {
        modal.style.display = "none";
    }
};

// Load restaurants on page load
window.onload = function() {
    loadRestaurants();
};
