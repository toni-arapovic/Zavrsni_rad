<template>
  <tr>
    <td data-th="Product">
      <div class="row">
        <div class="col-sm-2 hidden-xs">
          <img :src="image" :alt="title" class="img-responsive" />
        </div>
        <div class="col-sm-10">
          <h4 class="nomargin">{{ title }}</h4>
          <p>{{ description }}</p>
        </div>
      </div>
    </td>
    <td data-th="Price">{{ price }}</td>
    <td data-th="Quantity">
      {{ qty }}
    </td>
  </tr>
</template>


<script>
export default {
  props: ["prodId", "title", "image", "description", "price", "qty"],
};
</script>

<style scoped>
img {
  display: block;
  height: 120px;
  width: auto;
  margin-left: auto;
  margin-right: auto;
}
</style>