application.component('product-display', {
  props: {
    premium: {
      type: Boolean,
      required: true
    }
  },
  template:
    /*html*/
    `
    <div class="product-display">
      <div class="product-container">
        <div class="product-image">
          <img 
              v-bind:class="{ 'out-of-stock-img': !inStock }"
              v-bind:src="image" 
              :alt="description">
        </div>
        <div class="product-info">
          <h1>{{ title }}</h1>
          <p>{{ description }}</p>
          <a :href="url">Made by Vue Mastery</a>
          <p v-if="inStock > 10">In Stock</p>
          <p v-else-if="inStock > 0 && inStock <= 10">Almost Sold Out</p>
          <p v-else>Out of Stock</p>
          <p>Shipping: {{ shipping }}</p>
          <p>{{ sale }}</p>
              <product-details :details="details"></product-details>
          <ul>
              <li v-for="(size, index) in sizes" :key="index">{{ size }}</li>
          </ul>
          <div
              v-for="(variant, index) in variants"
              :key="variant.id" 
              @mouseover="updateVariant(index)"
              class="color-circle"
              :style="{ backgroundColor: variant.color }">
          </div>
          <button 
              class="button" 
              @click="addToCart"
              :class="{ disabledButton: !inStock }"
              :disabled="!inStock">
              Add to Cart
          </button>
          <button
              class="button"
              @click="removeFromCart"
              :class="{ disabledButton: !inStock }" 
              :disabled="!inStock">
              Remove Item
          </button>
        </div>
      </div>
      <review-list v-if="reviews.length" :reviews="reviews"></review-list>
      <review-form @review-submitted="addReview"></review-form>
    </div>
    `,
  data() {
    return {
      product: 'Socks',
      brand: 'Vue Mastery',
      description: 'Comfortable e unisex.',
      details: ['50% cotton', '30% wool (teste)', '20% polyester'],
      selectedVariant: 0,
      url: 'https://www.vuemastery.com/',
      onSale: true,
      details: ['50% cotton', '30% wool', '20% polyester'],
      variants: [
        { id: 2234, color: 'green', image: './assets/images/socks_green.jpg', quantity: 8 },
        { id: 2235, color: 'blue', image: './assets/images/socks_blue.jpg', quantity: 0 }
      ],
      sizes: ['S', 'M', 'L', 'XL'],
      reviews: []
    }
  },
  methods: {
    addToCart() {
      this.$emit('add-to-cart', this.variants[this.selectedVariant].id)
    },
    removeFromCart() {
      this.$emit('remove-from-cart', this.variants[this.selectedVariant].id)
    },
    updateImage(variantImage) {
      this.image = variantImage;
    },
    updateVariant(index) {
      this.selectedVariant = index
      console.log(index)
    },
    addReview(review) {
      this.reviews.push(review)
    }
  },
  computed: {
    title() {
      return this.brand + ' ' + this.product
    },
    image() {
      return this.variants[this.selectedVariant].image
    },
    inStock() {
      return this.variants[this.selectedVariant].quantity
    },
    sale() {
      if (this.onSale) {
        return this.title + ' is on sale.'
      }
      return ''
    },
    shipping() {
      if (this.premium) {
        return 'Free'
      }
      return 2.99
    }
  },
})
