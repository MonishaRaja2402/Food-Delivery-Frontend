// Sample restaurant data with dishes and prices
const restaurants = [
    {
        name: "Saravana Bhavan",
        cuisine: "South Indian",
        image: "https://th.bing.com//th//id//R.18a3ea73fa07790c75c38ae863caf1ed?rik=kpUEq4T%2fD8JUXw",
        description: "Traditional South Indian cuisine with authentic flavors.",
        dishes: [
            { name: "Dosa", price: "₹100" },
            { name: "Idli", price: "₹50" },
            { name: "Vada", price: "₹30" }
        ]
    },
    {
        name: "Barbeque Nation",
        cuisine: "Grill/BBQ",
        image: "https://th.bing.com//th//id//OIP.woqvrdJJG2rJeAM_IcggqwHaE8?rs=1&pid=ImgDetMain",
        description: "Grilled starters and BBQ experience.",
        dishes: [
            { name: "Grilled Paneer", price: "₹300" },
            { name: "Chicken Tikka", price: "₹400" },
            { name: "BBQ Prawns", price: "₹500" }
        ]
    },
    {
        name: "Annalakshmi",
        cuisine: "Chettinad",
        image: "https://th.bing.com//th//id//OIP.74_S_w9jpTCD_vU-xXExvgHaEK?w=292&h=180&c=7&r=0&o=5&dpr=1.5&pid=1.7",
        description: "Serving the best Chettinad delicacies in Salem.",
        dishes: [
            { name: "Chicken Chettinad", price: "₹250" },
            { name: "Mutton Curry", price: "₹350" },
            { name: "Chettinad Biriyani", price: "₹300" }
        ]
    },
    {
        name: "Selvi Mess",
        cuisine: "Multicuisine",
        image: "https://th.bing.com//th//id//OIP.RtNT97dyg84DJzLnku4RwwHaEK?w=315&h=183&c=7&r=0&o=5&dpr=1.5&pid=1.7",
        description: "Famous for its variety of South Indian and North Indian dishes.",
        dishes: [
            { name: "Chicken Biriyani", price: "₹180" },
            { name: "Mutton Biriyani", price: "₹240" },
            { name: "Fish Curry", price: "₹200" }
        ]
    },
    {
        name: "Hotel Lakshmi Prakash",
        cuisine: "Pure Veg",
        image: "https://th.bing.com//th//id/OIP.L6Pl-zWORurqVOtg7obbkwAAAA?w=246&h=180&c=7&r=0&o=5&dpr=1.5&pid=1.7",
        description: "Popular pure vegetarian restaurant offering traditional meals and tiffin.",
        dishes: [
            { name: "Veg Thali", price: "₹150" },
            { name: "Rava Dosa", price: "₹120" },
            { name: "Filter Coffee", price: "₹30" }
        ]
    },
    {
        name: "Sri Annapoorna",
        cuisine: "South Indian",
        image: "https://th.bing.com//th//id//OIP.rIzBnnpi0fQL8p7SP0RtHAHaFN?rs=1&pid=ImgDetMain",
        description: "Renowned for authentic South Indian breakfast and filter coffee.",
        dishes: [
            { name: "Pongal", price: "₹80" },
            { name: "Masala Dosa", price: "₹100" },
            { name: "Vada Sambar", price: "₹60" }
        ]
    },
    {
        name: "Dragon China",
        cuisine: "Chinese",
        image: "https://th.bing.com//th//id//OIP.P2wJHHn_jTLQUmOnVegCPQHaE0?w=296&h=184&c=7&r=0&o=5&dpr=1.5&pid=1.7",
        description: "Delicious Chinese dishes with authentic flavors.",
        dishes: [
            { name: "Fried Rice", price: "₹150" },
            { name: "Chicken Noodles", price: "₹180" },
            { name: "Manchurian", price: "₹200" }
        ]
    },
    {
        name: "Hotel Junior Kuppanna",
        cuisine: "Kongunadu",
        image: "https://images.indianexpress.com//2016//05//thali-spread_759.jpg",
        description: "Famous for Kongunadu cuisine, serving biryanis and traditional non-vegetarian dishes.",
        dishes: [
            { name: "Mutton Biriyani", price: "₹250" },
            { name: "Chicken Curry", price: "₹180" },
            { name: "Nattu Kozhi Biriyani", price: "₹300" }
        ]
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

// Function to open the modal with restaurant and dish details
function openModal(index) {
    const restaurant = restaurants[index];
    document.getElementById('modalTitle').innerText = restaurant.name;
    document.getElementById('modalImage').src = restaurant.image;
    document.getElementById('modalDescription').innerHTML = `
        <p>${restaurant.description}</p>
        <h4>Available Dishes:</h4>
        ${restaurant.dishes.map(dish => `<p>${dish.name}: ${dish.price}</p>`).join('')}
    `;
    document.getElementById('restaurantModal').style.display = "block";
}

// Close modal on click outside or close button
const modal = document.getElementById('restaurantModal');
const closeModal = document.querySelector('.close');
closeModal.onclick = () => modal.style.display = "none";
window.onclick = event => {
    if (event.target === modal) {
        modal.style.display = "none";
    }
}

// Function to filter restaurants by name or cuisine
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

// Load restaurants on page load
window.onload = function() {
    loadRestaurants();
};
