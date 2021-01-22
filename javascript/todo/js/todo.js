'use strict';

let app = new Vue({
    el: "#app",
    data: {
        task: "",
        tasks: [],
    },
    mounted(){
        if (localStorage.tasks) {
            this.tasks = JSON.parse(localStorage.tasks);
        }
    },
    methods: {
        addClick: function(){
            if (this.task != '') {
                this.tasks.push({item: this.task, isDone: false});
                this.task = "";
                localStorage.tasks = JSON.stringify(this.tasks);
            }
        },

        deleteItem: function(index){
            if(this.tasks[index].isDone){
                this.tasks.splice(index, 1);
                localStorage.tasks = JSON.stringify(this.tasks);
            }
        }
    }
})