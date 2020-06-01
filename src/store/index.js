import Vue from "vue";
import Vuex from "vuex";

import albums from './modules/albums'

Vue.use(Vuex)

const store = new Vuex.Store({
    modules: {
        albums
    }
})

export default store