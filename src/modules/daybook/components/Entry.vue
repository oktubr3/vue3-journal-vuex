<template>
  <div 
    class="entry-container mb-3 pointer p-2"
    @click="$router.push({name: 'entry', params: {id: 10}})"
  >
      <div class="entry-title d-flex">
          <span class="text-success fs-5 fw-bold">11</span>
          <span class="mx-1 fs-5">February</span>
          <span class="mx-2 fw-light">2021, Friday</span>
      </div>

      <div class="entry-description">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem repudiandae voluptatum deserunt laborum consectetur nobis minima hic architecto sed, aspernatur voluptate libero porro? Consequatur modi sequi iure commodi ex fugiat.
      </div>
  </div>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
.entry-container {
    border-bottom: 1px solid #2c3e50;
    transition: 2ms all ease-in;

    &:hover { 
        background-color: lighten($color: grey, $amount: 45);
        transition: 2ms all ease-in;
    }

    .entry-description {
        padding: 0.5rem;
        font-size: 12px;
    }

}
</style>