import Vue from "vue";
import Vuex from "vuex";

import albums from './modules/albums'
import photos from './modules/photos'

Vue.use(Vuex)

const store = new Vuex.Store({
    modules: {
        albums,
        photos
    }
})

export default store