<template>
  <div class="container">
    <p class="text-monospace rounded-sm border border-light">
      {{ this.output }}
    </p>
  </div>
</template>

<script>
export default {
  name: "Output",
  props: ["output"],
};
</script>

<style scoped>
.container {
  height: 15%;
}

p {
  height: 100%;
  background-color: #dddddd;
  padding: 5px;
}
</style>
