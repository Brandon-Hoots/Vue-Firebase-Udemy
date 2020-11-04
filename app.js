new Vue({
    el: '#app',
    data: {
        name: 'Teams',
        url: "http://www.youtube.com",
        classes: ['one', 'two'],
        wage: 10,
        coords: {
            x: 0,
            y: 0
        },
        showName: true,
        showAge: true,
        items: ['Mushrom', 'Green Shells', 'Red Shells', 'Banana', 'Star'],
        ninjas: [
            {name: 'Crystal', age: 25, belt: 'Black'},
            {name: 'Ryu', age: 30, belt: 'Brown'},
            {name: 'Ken', age: 35, belt: 'Orange'}
        ]
    },
    methods: {
        greet(time){
            
            return `Hello there and good ${time}, ${this.name} `
        },

        changeWage(amount){
            this.wage += amount
        },

        logEvent(e){
            console.log(e)
        },

        logCoords(e){
            this.coords.x = e.offsetX
            this.coords.y = e.offsetY
        },

         updateName(e){
            //console.log(e.target.value)
            this.name = e.target.value
         },

         logMessage(){
             console.log("Hello World")
         },

         toggleName(){
             this.showName = !this.showName
         },

         toggleAge(){
            this.showAge = !this.showAge
        }

    }
     
})

