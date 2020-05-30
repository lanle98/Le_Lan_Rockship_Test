<template>
  <div>
    <div class="row container m-auto text-left">
      <div class="album-wrapper p-3 col-lg-3 m-0 col-md-4">
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
      <div class="album-wrapper p-3 col-lg-3 m-0 col-md-4" :key="item.id" v-for="item in list">
        <div class="p-0 shadow rounded album-item">
          <div class="thumbnail rounded-top">
            <img class="img-fluid" src="../assets/thumbnail_1.jpg" />
          </div>
          <div class="album-info p-3">
            <div class="title">
              <h3 class="h5">English October Learning Journey</h3>
              <span>12 photos, 2 videos</span>
            </div>
            <div class="love-icon border-top pt-3">
              <i v-if="item.isFavorite" class="fas fa-heart h3"></i>
              <i v-else class="far fa-heart h3"></i>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "AlbumList",
  data() {
    return {
      list: [
        {
          id: 1,
          title: "English October Learning Journey",
          isFavorite: false,
          thumbnail: "thumbnail_1.jpg",
          detail: "12 photos, 2 videos"
        },
        {
          id: 2,
          title: "English October Learning Journey",
          isFavorite: true,
          thumbnail: "thumbnail_1.jpg",
          detail: "12 photos, 2 videos"
        },
        {
          id: 3,
          title: "English October Learning Journey",
          isFavorite: false,
          thumbnail: "thumbnail_1.jpg",
          detail: "12 photos, 2 videos"
        },
        {
          id: 4,
          title: "English October Learning Journey",
          isFavorite: true,
          thumbnail: "thumbnail_1.jpg",
          detail: "12 photos, 2 videos"
        },
        {
          id: 5,
          title: "English October Learning Journey",
          isFavorite: false,
          thumbnail: "thumbnail_1.jpg",
          detail: "12 photos, 2 videos"
        }
      ]
    };
  }
};
</script>

<style scoped>
.album-item {
  border-radius: 0.5em;
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

@media only screen and (min-width: 768px) {
  img {
    height: 100%;
  }
}
</style>
