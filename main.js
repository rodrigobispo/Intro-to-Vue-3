const app = Vue.createApp({
    data() {
        return {
            product: 'Socks',
            description: 'Confortáveis e unissex.',
            image: './assets/images/socks_green.jpg',
            // solution
            url: 'https://www.vuemastery.com/',
            // solution
            inventory: 0,
            onSale: false
        }
    }
})
