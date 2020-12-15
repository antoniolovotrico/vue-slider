let slideApp = new Vue ({
    el: "#slideApp",
    data: {
        index: 0,
        images: ["./assets/img/1.jpg","./assets/img/2.jpg","./assets/img/3.jpg","./assets/img/4.jpg"],
    },
    methods: {
        nextArrow (){
            this.index++;
            if (this.index > this.images.length -1){
                this.index = 0;
            }
        },
        prevArrow (){
            this.index--;
            if (this.index < 0){
                this.index = this.images.length -1;
            }
        },
        circleClick (){
        
                this.index = 3;
            
            
        }        
    },
    created () {
        setInterval(this.nextArrow, 1000000);
    }
    
})
