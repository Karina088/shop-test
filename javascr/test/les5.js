'use strict';

const app = new Vue({
    el: '#app',
    data: {
        names: ['Frodo', 'Sam', 'Merry', 'Peregrin']
    },
    methods: {
        clickHandler() {
            console.log('click');
        }
    },
});

console.log(app);