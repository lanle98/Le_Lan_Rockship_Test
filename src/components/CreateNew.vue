<template>
  <div class="modal">
    <div class="modal-dialog modal-dialog-centered" role="document">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title" id="exampleModalLongTitle">{{header}}</h5>
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
          <form v-if="this.$props.dialogStatus == 'album'">
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
          <form v-else>
            <input type="file" class="p-2" name="image" @change="handleImageUpload" />
            <img class="img-fluid w-50" :src="newPhoto.image" />
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
          <button @click="handleCreate" type="button" class="btn btn-primary">Create</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions } from "vuex";
export default {
  name: "Modal",
  props: ["dialogStatus"],
  data() {
    return {
      header: "",
      newAlbum: {
        image: null,
        title: "",
        isFavorite: false
      },
      newPhoto: {
        image: null,
        isFavorite: false,
        albumId: Number(this.$route.params.id)
      },
      message: ""
    };
  },

  mounted() {
    //  check dialog status
    this.$props.dialogStatus == "album"
      ? (this.header = "Create New Album")
      : (this.header = "Add Photo");
  },

  methods: {
    ...mapActions(["createNewAlbum", "addPhoto"]),

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
            //  check if status is album or photo
            // convert image file to base64 string
            this.$props.dialogStatus == "album"
              ? (this.newAlbum.image = reader.result)
              : (this.newPhoto.image = reader.result);
          },
          false
        );

        //  reset message
        this.message = "";
      } else {
        //  reset input
        e.target.value = "";

        //  show message
        this.message = "The extension is not accepted";
      }
    },

    handleCreate() {
      // if status is album
      if (this.$props.dialogStatus == "album") {
        if (this.newAlbum.image !== null && this.newAlbum.title !== "") {
          this.createNewAlbum(this.newAlbum);
          this.$emit("modal", false);
        } else {
          // show message
          this.message = "Please fill in the required fields";
        }
        // if status is photo
      } else {
        if (this.newPhoto.image !== null) {
          this.addPhoto(this.newPhoto);
          this.$emit("modal", false);
        } else {
          // show message
          this.message = "Please upload the photo";
        }
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