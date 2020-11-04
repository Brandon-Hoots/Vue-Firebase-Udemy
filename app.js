new Vue({
    el: '#app',
    data: {
        name: 'Teams',
        url: "http://www.youtube.com",
        classes: ['one', 'two']
    },
    methods: {
        greet(time){
            
            return `Hello there and good ${time}, ${this.name} `
        }
    }
     
})