import { defineAsyncComponent } from 'vue';
import { mapGetters } from 'vuex';
<template>
  <template v-if="entry">
    <div class="entry-title d-flex justify-content-between p-2">
      <div>
        <span class="text-success fs-3 fw-bold">{{ day }}</span>
        <span class="mx-1 fs-3">{{ month }}</span>
        <span class="mx-2 fs-4 fw-light">{{ yearDay }}</span>
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
    <hr />
    <div class="d-flex flex-column px-3 h-75">
      <textarea placeholder="What happened today?" v-model="entry.text"></textarea>
    </div>

    <img
      src="https://estaticos.muyinteresante.es/media/cache/1140x_thumb/uploads/images/article/5ff2e0505bafe8394b122728/suena-supernova_0.jpg"
      alt="entry-picture"
      class="img-thumbnail"
    />
  </template>

  <Fab icon="fa-save" />

</template>

<script>
import { defineAsyncComponent } from "vue";
import { mapGetters } from "vuex"; // computed!!!

import getDayMonthYear from "../helpers/getDayMonthYear";

export default {
  props: {
    id: {
      type: String,
      required: true,
    },
  },
  components: {
    Fab: defineAsyncComponent(() => import("../components/Fab.vue")),
  },

  computed: {
    ...mapGetters("journal", ["getEntryById"]),
    day() {
      const { day } = getDayMonthYear(this.entry.date);
      return day;
    },
    month() {
      const { month } = getDayMonthYear(this.entry.date);
      return month;
    },
    yearDay() {
      const { yearDay } = getDayMonthYear(this.entry.date);
      return yearDay;
    },
  },

  data() {
    return {
      entry: null,
    };
  },

  methods: {
    loadEntry() {
      const entry = this.getEntryById(this.id);
      if (!entry) this.$router.push({ name: "no-entry" });

      this.entry = entry;
    },
  },

  created() {
    this.loadEntry();
  },

  watch: {
    id() {
      this.loadEntry();
    },
  },
};
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