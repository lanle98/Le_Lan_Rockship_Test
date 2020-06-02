<template>
  <div class="row container m-auto">
    <CreateNew dialogStatus="photo" @modal="modalStatus" v-if="modal" />
    <div class="photo-wrapper p-3 col-lg-3 m-0 col-md-4" @click="()=> modal = !modal">
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
        <router-link :to="'aaa' +item.id.toString()">
          <div class="thumbnail rounded-top">
            <img class="img-fluid" :src="item.image" />
          </div>
        </router-link>
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
export default {
  name: "AlbumDetail",
  components: { CreateNew },
  data() {
    return {
      modal: false
    };
  },
  computed: mapGetters(["getPhotos"]),
  created() {
    //get all photos
    this.fetchPhotos(this.$route.params.id);
  },
  methods: {
    //  get store actions
    ...mapActions(["fetchPhotos", "toggleLike"]),

    //  close modal
    modalStatus() {
      this.modal = !this.modal;
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
  height: 250px;
  width: 250px;
  overflow: hidden;
}

img {
  object-fit: cover;
  object-position: center;
  width: 100%;
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
  color: white;
}

.add-photo {
  height: 80%;
}
</style>
