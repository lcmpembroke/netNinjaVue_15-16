// create component to be injected into Vue instances

Vue.component('greeting', {
    template:'<p>Hello I am {{ name }}. <button v-on:click="changeName">Change name</button></p>',
    // data has to  be a function so each component is a copy of the data rather than multiple components pointing to the same object
    // If data was NOT a function, then changing data on one component would mean it'd change on all the others...
    data:function() {
        return {
            name: 'Yoshi'
        }
    },
    methods: {
        changeName: function() {
            this.name = 'Mario';
        }
    }
});

new Vue({
    el: '#vue-app-one',
    data: {
        title: 'Vue App One'
    },
    methods: {
    },
    computed: {
    },
});

new Vue({
    el: '#vue-app-two',
    data: {
    },
    methods: {
    },
    computed: {
    },
});

new Vue({
    el: '#vue-app-refs',
    data: {
        output: "Your favourite food"
    },
    methods: {
        readRefs() {       
            console.log(this.$refs.anotherRefInput.value);            
            console.log(this.$refs.anotherRefInput2.value);
            console.log(this.$refs.testDivRef.innerText);            
            this.output = this.$refs.input.value;
        }
       
    },
    computed: {

    },
});
