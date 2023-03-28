application.component('product-details', {
    props: {
        details: {
            type: Array,
            required: true
        }
    },
    template:
    /*hmtl*/
    `
    <ul>
        <li v-for="detail in details">{{ detail }}</li>
    </ul>
    `,
    methods: {},
    computed: {}
})