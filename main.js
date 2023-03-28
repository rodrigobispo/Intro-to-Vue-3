const app = Vue.createApp({
    data() {
        return {
            product: 'Socks',
            description: 'Confortáveis e unissex.',
            image: './assets/images/socks_green.jpg',
            url: 'https://www.vuemastery.com/',
            inventory: 8,
            onSale: true,
            details: ['50% cotton', '30% wool', '20% polyester'],
            variants: [
                { id: 2234, color: 'green', image: './assets/images/socks_green.jpg' },
                { id: 2235, color: 'blue', image: './assets/images/socks_blue.jpg' }
            ],
            sizes: ['S', 'M', 'L', "XL"],
            cart: 0
        }
    },
    methods: {
        addToCart() {
            this.cart += 1;
        },
        removeFromCart() {
            this.cart -= 1;
        },
        updateImage(variantImage) {
            this.image = variantImage;
        }
    }
})
