"use strict";

let goods = [
    {
       title: "Пианино",
       price: 3000,
       count: 0
    },
    {
       title: "Гитара",
       price: 1200,
       count: 40
    },
    {
       title: "Барабаны",
       price: 2700,
       count: 12
    },
    {
       title: "Флейта",
       price: 900,
       count: 50
    },
    {
       title: "Арфа",
       price: 3400,
       count: 5
    }
 ];

Vue.createApp({
    data(){
        return{
            sortParam: ``,
            
            goods
        }
    },
    computed:{
        sortedList () {
            switch(this.sortParam){
                case 'title': return this.goods.sort((b1, b2) => b1.title.toLowerCase().localeCompare(b2.title.toLowerCase()));
                case 'price': return this.goods.sort((b1, b2) => b1.price - b2.price); 
                case 'count': return this.goods.sort((b1, b2) => b1.count - b2.count);
                default: return this.goods;
            }
         },
    }
}).mount("#app")
