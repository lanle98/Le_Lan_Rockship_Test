<template>
  <div>
    <CreateNew dialogStatus="album" @modal="modalStatus" v-if="modal" />
    <div class="row container m-auto text-left">
      <div @click="()=> modal = !modal" class="wrapper p-3 col-lg-3 m-0 col-md-4">
        <div class="p-0 shadow rounded album-item">
          <div
            class="thumbnail bg-secondary rounded-top d-flex justify-content-center align-items-center"
          >
            <i class="fas fa-plus-circle display-3 text-white"></i>
          </div>
          <div class="album-info p-3">
            <h3 class="h3">Create New Album</h3>
          </div>
        </div>
      </div>
      <div class="wrapper p-3 col-lg-3 m-0 col-md-4" :key="item.id" v-for="item in allAlbums">
        <div class="p-0 shadow rounded album-item">
          <router-link :to="item.id.toString()">
            <div class="thumbnail rounded-top">
              <img class="img-fluid" :src="item.image" />
            </div>
            <div class="album-info p-3">
              <div class="title">
                <h3 class="h5">{{item.title}}</h3>
                <span></span>
              </div>
            </div>
          </router-link>
          <div class="favorite-icon-wrapper my-auto">
            <div class="favorite-icon border-top pt-3">
              <i
                @click="setFavorite(item)"
                v-if="item.isFavorite"
                class="fas fa-star h3 m-0 float-right"
              ></i>
              <i @click="setFavorite(item)" v-else class="far fa-star h3 m-0 float-right"></i>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
import CreateNew from "./CreateNew";

export default {
  name: "AlbumList",
  components: { CreateNew },
  data() {
    return {
      modal: false
    };
  },
  computed: { ...mapGetters(["allAlbums"]) },
  methods: {
    // get store actions
    ...mapActions(["fetchAlbums", "toggleFavorite", "fetchPhotos"]),

    //  close modal
    modalStatus() {
      this.modal = !this.modal;
    },

    //toggle favorite icon
    setFavorite(item) {
      const data = {
        id: item.id,
        title: item.title,
        image: item.image,
        isFavorite: !item.isFavorite
      };

      this.toggleFavorite(data);
    }
  },

  created() {
    //  get all albums
    this.fetchAlbums();
  }
};
</script>

<style scoped>
a {
  color: #434343;
  text-decoration: none;
}

.wrapper:hover {
  transform: scale(1.1);
  transition: 0.5s;
  cursor: pointer;
}

.album-item {
  border-radius: 0.5em;
  position: relative;
}

.thumbnail {
  height: 180px;
  overflow: hidden;
}

img {
  width: 100%;
  object-fit: cover;
}

.album-info {
  height: 200px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

.favorite-icon-wrapper {
  position: absolute;
  bottom: 1em;
  width: 100%;
  padding: 0 1em 0 1em;
}

.fa-star {
  cursor: pointer;
  color: rgb(255, 225, 0);
}

@media only screen and (min-width: 768px) {
  img {
    height: 100%;
  }
}
</style>
