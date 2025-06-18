<template>
  <div>
    <div class="hero-bg d-flex align-items-center animated-border" style="height: 400px; margin: 20px;">
      <div class="p-5 text-black" style="flex: 1;">
        <h1 class="display-4">Season Sale</h1>
        <h2>MEN'S FASHION</h2>
        <p>Min. 35-70% Off</p>
        <button class="btn btn-primary text-white btn-lg">Shop Now</button>
        <button class="btn btn-outline-info text-black btn-lg ms-2">Read More</button>
      </div>
      <div class="flex-shrink-0" style="background: url('/src/assets/image/boy.png') no-repeat center/cover; width: 50%; height: 100%; background-size: contain; "></div>
    </div>

    <div class="container my-5">
      <div class="row text-center">
        <div class="col-md-3">
          <i class="fas fa-shipping-fast fa-2x" style="color: #28a745;"></i>
          <p>Free Shipping<br>On All Orders Over $19</p>
        </div>
        <div class="col-md-3">
          <i class="fas fa-lock fa-2x" style="color: #28a745;"></i>
          <p>Secure Payment<br>We ensure secure payment</p>
        </div>
        <div class="col-md-3">
          <i class="fas fa-undo fa-2x" style="color: #28a745;"></i>
          <p>100% Money Back<br>30 Days Return Policy</p>
        </div>
        <div class="col-md-3" >
          <i class="fas fa-headset fa-2x" style="color: #28a745;"></i>
          <p>Online Support<br>24/7 Dedicated Support</p>
        </div>
      </div>
    </div>

    <div class="container my-5">
      <div class="row" style="height: 60vh;">
        <div class="col-md-6 mb-4" style="height: 100%;">
          <div class="card feature-card text-center p-3 card-girls" style="height: 100%; background:url('/src/assets/image/sea.gif') no-repeat; background-size: cover; background-position: center;">
            <img src="/src/assets/image/girl.png" alt="" style="height: 100%;">
            <div>
              <h4>New Arrivals</h4>
              <h5>Women's Style</h5>
              <p>Up to 70% Off</p>
              <button class="btn btn-primary">Shop Now</button>
            </div>
          </div>
        </div>
        <div class="col-md-6 mb-4">
          <div class="row">
            <div class="col-6 mb-2">
              <div class="card feature-card text-center p-3" style="min-height: 200px; background: url('/src/assets/image/phone.png') no-repeat; background-size: cover; background-position: center;">
                <h4>25% OFF</h4>
                <h5>Handbag</h5>
                <button class="btn btn-primary">Shop Now</button>
              </div>
            </div>
            <div class="col-6 mb-2">
              <div class="card feature-card text-center p-3" style="min-height: 200px; background:url('/src/assets/image/watch.png') no-repeat; background-size:cover; background-position: center;">
                <h4>45% OFF</h4>
                <h5>Watch</h5>
                <button class="btn btn-primary">Shop Now</button>
              </div>
            </div>
            <div class="col-12">
              <div class="card feature-card text-center p-3" style="min-height: 200px; background:url('/src/assets/image/bag.png') no-repeat; background-size: cover; background-position: center; border: solid pink;">
                <h4>Accessories</h4>
                <h5>Backpack</h5>
                <p>Min. 40-80% Off</p>
                <button class="btn btn-primary">Shop Now</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="container my-5">
      <h3 class="text-center mb-4">Featured Products</h3>
      <div class="row">
          <!-- Product Card - will repeat for each random product -->
          <div class="col-md-3 product-card mb-4" 
              v-for="product in randomProducts" 
              :key="product.id"
              style="height: 50vh; width: 40vh;">
            <div class="card h-100 border-0 shadow-sm bg-pink">
              <!-- Sale Badge -->
              <div class="badge bg-danger position-absolute" style="top: 10px; right: 10px;">SALE</div>
              
              <!-- Product Image -->
              <div class="product-image-container d-flex justify-content-center overflow-hidden" style="height: 70vh;">
                <img :src="'/src/assets/image/' + product.image" 
                    class="card-img-top h-50 w-40 m-5 card-pro object-fit-cover transition" 
                    :alt="product.name"
                    style="max-height: 100%; max-width: 100%;">
              </div>
              
              <!-- Card Body -->
              <div class="card-body text-center pt-3">
                <div class="text-muted small mb-1">{{ product.category }}</div>
                <h5 class="card-title mb-2 fw-normal">{{ product.name }}</h5>
                <div class="price mb-3">
                  <span class="text-danger fw-bold">${{ product.price.toFixed(2) }}</span>
                  <span class="text-decoration-line-through text-muted small ms-2" v-if="product.oldPrice">
                    ${{ product.oldPrice.toFixed(2) }}
                  </span>
                </div>
                <button class="btn btn-dark w-100 add-to-cart-btn">Add to Cart</button>
                <div class="quick-view small mt-2">
                  <a href="#" class="text-decoration-none">Quick View</a>
                </div>
              </div>
            </div>
          </div>
        </div>
    </div>

    <div class="container my-5">
      <div class="row">
        <div class="col-md-6">
          <div class="banner text-center p-3" style="height: 200px; background: #e9ecef;">
            <h4>Weekend Sale</h4>
            <h5>Men's Fashion</h5>
            <p>Flat 70% Off</p>
            <button class="btn btn-primary">Shop Now</button>
          </div>
        </div>
        <div class="col-md-6">
          <div class="banner text-center p-3" style="height: 200px; background: #e9ecef;">
            <h4>Fashion Style</h4>
            <h5>Women's Wear</h5>
            <p>Min. 35-70% Off</p>
            <button class="btn btn-primary">Shop Now</button>
          </div>
        </div>
      </div>
    </div>

    <footer class="bg-light text-center p-3 mt-5">
      <p>Featured Categories</p>
    </footer>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import { onMounted } from 'vue';

onMounted(() => {
  const bootstrapScript = document.createElement('script');
  bootstrapScript.src = 'https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/js/bootstrap.bundle.min.js';
  document.body.appendChild(bootstrapScript);

  const fontAwesomeScript = document.createElement('script');
  fontAwesomeScript.src = 'https://kit.fontawesome.com/a076d05399.js';
  document.body.appendChild(fontAwesomeScript);
});

// Reactive reference for products
const products = ref([]);
const randomProducts = ref([]);

// Number of random products to display
const numberOfProductsToShow = 4;

// Fetch products from JSON file
onMounted(async () => {
  try {
    const response = await fetch('/src/components/JSON/products.json'); // or '/src/assets/products.json'
    products.value = await response.json();
    getRandomProducts();
  } catch (error) {
    console.error('Error loading products:', error);
  }
});

// Function to get random products
function getRandomProducts() {
  // Shuffle array and pick first 'n' elements
  const shuffled = [...products.value].sort(() => 0.5 - Math.random());
  randomProducts.value = shuffled.slice(0, numberOfProductsToShow);
}
</script>

<style scoped>
body {
  font-family: 'Poppins', sans-serif;
}
.hero-bg { position: relative; }
.feature-card { min-height: 200px; }
.product-card { margin: 10px; }
.banner { height: 200px; }

.card-girls{
  display: flex;
  background: green;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
}
.card-girls img{
  border-radius: 20px;
} 

.animated-border {
  position: relative;
  overflow: hidden;
}
/* animate border of banner */
.animated-border::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  border: 2px dashed transparent;
  border-radius: 5px;
  background: linear-gradient(90deg, #4CAF50 50%, transparent 50%), 
              linear-gradient(90deg, #4CAF50 50%, transparent 50%), 
              linear-gradient(0deg, #4CAF50 50%, transparent 50%), 
              linear-gradient(0deg, #4CAF50 50%, transparent 50%);
  background-repeat: repeat-x, repeat-x, repeat-y, repeat-y;
  background-size: 16px 2px, 16px 2px, 2px 16px, 2px 16px;
  background-position: 0% 0%, 100% 100%, 0% 100%, 100% 0%;
  animation: border-dance 4s linear infinite;
}

@keyframes border-dance {
  0% {
    background-position: 0% 0%, 100% 100%, 0% 100%, 100% 0%;
  }
  100% {
    background-position: 100% 0%, 0% 100%, 0% 0%, 100% 100%;
  }
}

.product-card {
  transition: transform 0.3s ease;
}

.product-card:hover {
  transform: translateY(-5px);
}

.product-image-container {
  position: relative;
}

.product-image-container .transition {
  transition: transform 0.5s ease;
}

.product-card:hover .transition {
  transform: scale(1.05);
}

.add-to-cart-btn {
  opacity: 0;
  transition: opacity 0.3s ease, background-color 0.3s ease;
}

.product-card:hover .add-to-cart-btn {
  opacity: 1;
}

.price {
  transition: color 0.3s ease;
}

.product-card:hover .price {
  color: #333;
}

.card {
  transition: box-shadow 0.3s ease;
}

.product-card:hover .card {
  box-shadow: 0 10px 20px rgba(0,0,0,0.1) !important;
}
.card-pro{
  margin-top: 5%;
  height: 500px !important;
}

.bg-pink{
  background: rgb(241, 230, 232);
}

</style>