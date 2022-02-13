import { defineAsyncComponent } from 'vue';
<template>
  <div class="entry-title d-flex justify-content-between p-2">
      <div>
            <span class="text-success fs-3 fw-bold"> 15 </span>
            <span class="mx-1 fs-3"> July </span>
            <span class="mx-2 fs-4 fw-light">2022, Thursday </span>
      </div>
      <div>
          <button class="btn btn-danger mx-2">
                Delete
                <i class="fa fa-trash-alt"></i>
          </button>
          <button class="btn btn-primary">
                Photo Upload
                <i class="fa fa-upload"></i>
          </button>
      </div>
  </div>
  <hr>
  <div class="d-flex flex-column px-3 h-75">
      <textarea
        placeholder="What happened today? "
      ></textarea>
  </div>

  <Fab icon="fa-save" />

  <img 
    src="https://estaticos.muyinteresante.es/media/cache/1140x_thumb/uploads/images/article/5ff2e0505bafe8394b122728/suena-supernova_0.jpg"
    alt="entry-picture"
    class="img-thumbnail"
  />

</template>

<script>
import { defineAsyncComponent } from 'vue';

export default {
    components: {
        Fab: defineAsyncComponent(() => import('../components/Fab.vue'))
    },

}
</script>

<style lang="scss" scoped>

textarea {
    font-size: 20px;
    border: none;
    height: 100%;

    &:focus {
        outline: none;
    }
}

img {
    width: 200px;
    position: fixed;
    bottom: 150px;
    right: 20px;
    box-shadow: 0 5px 10px rgba($color: black, $alpha: 0.2);
}
</style>