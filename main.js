const application = Vue.createApp({
    data() {
        return {
            cart: [],
            premium: false
        }
    },
    methods: {
        updateCart(id) {
            this.cart.push(id)
        },
        removeCartById(id) {
            if (this.cart.length >= 1) {
                const index = this.cart.indexOf(id)
                this.cart.splice(index, 1)
            }
        }
    }
})
