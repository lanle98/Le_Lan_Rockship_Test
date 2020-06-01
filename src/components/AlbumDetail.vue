<template>
  <div class="row container m-auto">
    <div class="photo-wrapper p-3 col-lg-3 m-0 col-md-4">
      <div class="p-0 shadow photo">
        <div class="thumbnail bg-secondary d-flex justify-content-center align-items-center">
          <i class="fas fa-plus-circle display-3 text-white"></i>
        </div>
        <div class="love-icon">
          <i class="far fa-heart h4 m-0"></i>
        </div>
      </div>
    </div>
    <div class="photo-wrapper p-3 col-lg-3 m-0 col-md-4">
      <div class="p-0 shadow photo">
        <div class="thumbnail">
          <img class="img-fluid" src="../assets/thumbnail_1.jpg" />
        </div>
        <div class="love-icon">
          <i class="far fa-heart h4 m-0"></i>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.photo {
  position: relative;
  height: 200px;
  width: 200px;
}

.thumbnail {
  height: 100%;
}

img {
  height: 100%;
  object-fit: cover;
  object-position: center;
}

.love-icon {
  background: rgba(0, 0, 0, 0.5);
  position: absolute;
  width: 100%;
  bottom: 0;
  display: flex;
  padding: 0.5em;
}
</style>
