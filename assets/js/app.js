// assets/js/app.js
import Vue from 'vue';
import navigation from './components/navigation'
import test from './components/test'

/**
* Create a fresh Vue Application instance
*/
new Vue({
    el: '#app',
    components: {
        navigation,
        test
    }
});