import axios from 'axios'

const state = {
    photos: []
}

const getters = {
    getPhotos: state => state.photos
}

const actions = {
    async fetchPhotos({ commit }, id) {
        const res = await axios.get(`http://localhost:3000/albums/${id}?_embed=photos`);
        commit('setPhotos', res.data.photos)
    },
    async addPhoto({ commit }, photo) {
        const res = await axios.post(`http://localhost:3000/photos`, photo)
        commit('newPhoto', res.data)
    },
    async toggleLike({ commit }, item) {
        await axios.put(`http://localhost:3000/photos/${item.id}`,
            {
                title: item.title,
                image: item.image,
                isFavorite: item.isFavorite,
                albumId: item.albumId
            })
        commit('setLike', item)
    },

}

const mutations = {
    setPhotos: (state, photos) => state.photos = photos.reverse(),
    setLike: (state, item) => {
        state.photos = state.photos.map(photo => {
            if (photo.id == item.id) {
                return Object.assign({}, item)
            }
            return photo
        })
    },
    newPhoto: (state, photo) => state.photos.unshift(photo)

}

export default {
    state,
    getters,
    actions,
    mutations
}