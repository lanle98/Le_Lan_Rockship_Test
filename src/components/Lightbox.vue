<template>
  <div class="modal">
    <div class="modal-dialog modal-dialog-centered" role="document">
      <div class="row modal-content flex-row w-100">
        <div class="modal-img col-8 m-0 p-0">
          <img class="img-fluid" :src="getLightbox.image" />
        </div>
        <div class="modal-side bg-light col-4 m-0">
          <button aria-hidden="true" class="close p-3" data-dismiss="modal" aria-label="Close">
            <span @click="closeLightbox">&times;</span>
          </button>
          <div class="photo-info p-3 text-left">
            <div class="comment pb-3">
              <h4>Lorem</h4>
              <textarea class="w-100"></textarea>
            </div>

            <div class="date pb-3">
              <h4>Date</h4>
              <input />
            </div>

            <div class="tag pb-3">
              <h4>Tag</h4>
              <select class="w-100 border-white" name="cars">
                <option value="volvo">Volvo</option>
                <option value="saab">Saab</option>
                <option value="fiat">Fiat</option>
                <option value="audi">Audi</option>
              </select>
            </div>
          </div>
          <div class="modal-footer">
            <div @click="closeLightbox" class="btn btn-secondary">Close</div>
            <div class="btn btn-primary">Save changes</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  props: ["lightbox"],
  computed: mapGetters(["getLightbox"]),
  methods: {
    closeLightbox() {
      this.$emit("lightbox", false);
    }
  }
};
</script>
<style scoped>
.modal {
  display: flex;
}

.modal-dialog {
  max-width: 80vw;
  height: 80vh;
}

.modal-content {
  height: 100%;
  overflow: scroll;
  background: rgba(0, 0, 0, 0.8);
  border: none;
}
</style>