<template>
  <div class="row container m-auto">
    <Lightbox v-if="lightbox" @lightbox="lightboxStatus" />
    <CreateNew dialogStatus="photo" @modal="modalStatus" v-if="modal" />
    <div class="wrapper p-3 col-lg-3 m-0 col-md-4" @click="()=> modal = !modal">
      <div class="p-0 shadow photo-item">
        <div
          class="thumbnail add-photo bg-secondary d-flex justify-content-center align-items-center"
        >
          <i class="fas fa-plus-circle display-3 text-white"></i>
        </div>
        <div class="bottom-wrapper bg-white">
          <h4 class="m-0">Add Photo</h4>
        </div>
      </div>
    </div>
    <div class="wrapper p-3 col-lg-3 m-0 col-md-4" :key="item.id" v-for="item in getPhotos">
      <div class="p-0 shadow rounded photo-item">
        <div class="h-100" @click="handleLightbox(item)">
          <img class="img-fluid rounded-top" :src="item.image" />
        </div>
        <div class="bottom-wrapper my-auto">
          <div class="heart-icon">
            <i @click="setLike(item)" v-if="item.isFavorite" class="fas fa-heart h3 m-0 float-left"></i>
            <i @click="setLike(item)" v-else class="far fa-heart h3 m-0 float-left"></i>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
import CreateNew from "./CreateNew";
import Lightbox from "./Lightbox";
export default {
  name: "AlbumDetail",
  components: { CreateNew, Lightbox },
  data() {
    return {
      modal: false,
      lightbox: false
    };
  },
  computed: mapGetters(["getPhotos"]),
  created() {
    //get all photos
    this.fetchPhotos(this.$route.params.id);
  },
  methods: {
    //  get store actions
    ...mapActions(["fetchPhotos", "toggleLike", "openLightbox"]),

    //  close modal
    modalStatus() {
      this.modal = !this.modal;
    },

    //handle open Lightbox
    handleLightbox(item) {
      this.lightbox = !this.lightbox;
      this.openLightbox(item.id);
    },

    //  close Lightbox
    lightboxStatus() {
      this.lightbox = !this.lightbox;
    },

    //  toggle like icon
    setLike(item) {
      const data = {
        id: item.id,
        title: item.title,
        image: item.image,
        albumId: item.albumId,
        isFavorite: !item.isFavorite
      };

      this.toggleLike(data);
    }
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

.photo-item {
  border-radius: 0.5em;
  position: relative;
  height: 200px;
  width: 100%;
  overflow: hidden;
}

img {
  object-fit: cover;
  object-position: center;
  height: 100%;
}

.bottom-wrapper {
  position: absolute;
  height: 20%;
  bottom: 0;
  width: 100%;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  padding-left: 1em;
}

.fa-heart {
  cursor: pointer;
  color: rgb(254, 38, 74);
}

.add-photo {
  height: 80%;
}

@media only screen and (min-width: 768px) {
  .photo-item {
    width: 200px;
    height: 200px;
  }
}
</style>
