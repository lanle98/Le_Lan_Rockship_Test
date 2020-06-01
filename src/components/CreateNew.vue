<template>
  <div
    class="modal"
    id="exampleModalCenter"
    tabindex="-1"
    role="dialog"
    aria-labelledby="exampleModalCenterTitle"
    aria-hidden="true"
  >
    <div class="modal-dialog modal-dialog-centered" role="document">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title" id="exampleModalLongTitle">New Album</h5>
          <button
            @click="closeModal"
            type="button"
            class="close"
            data-dismiss="modal"
            aria-label="Close"
          >
            <span aria-hidden="true">&times;</span>
          </button>
        </div>
        <div class="modal-body">
          <form action>
            <input type="file" class="p-2" name="image" @change="handleImageUpload" />
            <img class="img-fluid w-50" :src="newAlbum.image" />
            <input
              type="text"
              class="p-2 m-3 w-75"
              name="title"
              v-model="newAlbum.title"
              placeholder="Title ...."
            />
          </form>
          {{message}}
        </div>
        <div class="modal-footer">
          <button
            type="button"
            @click="closeModal"
            class="btn btn-secondary"
            data-dismiss="modal"
          >Close</button>
          <button @click="handleCreateAlbum" type="button" class="btn btn-primary">Create</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions } from "vuex";
export default {
  name: "Modal",
  data() {
    return {
      newAlbum: {
        image: null,
        title: "",
        isFavorite: 0
      },
      message: ""
    };
  },
  methods: {
    ...mapActions(["createNewAlbum"]),
    closeModal() {
      this.$emit("modal", false);
    },

    handleImageUpload(e) {
      let file = e.target.files[0];
      const file_extension = file.name.split(".")[1];
      console.log(file_extension);
      const accecpted_extension = [
        "jpg",
        "jpeg",
        "png",
        "gif",
        "webg",
        "PNG",
        "JPG"
      ];
      //  check if jpg or png
      if (accecpted_extension.indexOf(file_extension) !== -1) {
        const reader = new FileReader();
        if (file) {
          reader.readAsDataURL(file);
        }

        reader.addEventListener(
          "load",
          () => {
            // convert image file to base64 string
            this.newAlbum.image = reader.result;
          },
          false
        );

        this.message = "";
      } else {
        //  reset input
        e.target.value = "";

        //  show message
        this.message = "The extension is not accepted";
      }
    },
    handleCreateAlbum() {
      if (this.newAlbum.image !== null && this.newAlbum.title !== "") {
        this.createNewAlbum(this.newAlbum);
        this.$emit("modal", false);
      } else {
        // show message
        this.message = "Please fill in the required fields";
      }
    }
  }
};
</script>

<style scoped>
.modal {
  display: flex;
}
</style>