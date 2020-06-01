import axios from 'axios'

const state = {
    albums: []
}

const getters = {
    allAlbums: state => state.albums
}

const actions = {
    async fetchAlbums({ commit }) {
        const res = await axios.get("http://localhost:3000/albums");
        commit('setAlbums', res.data)
    },

    async toggleFavorite({ commit }, item) {
        await axios.put(`http://localhost:3000/albums/${item.id}`,
            {
                title: item.title,
                image: item.image,
                isFavorite: item.isFavorite
            })
        commit('setFavorite', item)
    },

    async createNewAlbum({ commit }, newAlbum) {
        const res = await axios.post("http://localhost:3000/albums", newAlbum)
        commit('setNewAlbum', res.data)
    }
}

const mutations = {
    setAlbums: (state, albums) => state.albums = albums.reverse(),
    setFavorite: (state, item) => {
        state.albums = state.albums.map(album => {
            if (album.id == item.id) {
                return Object.assign({}, item)
            }
            return album
        })
    },
    setNewAlbum: (state, newAlbum) => state.albums.unshift(newAlbum)
}

export default {
    state,
    getters,
    actions,
    mutations
}