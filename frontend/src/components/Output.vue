<template>
  <div class="container">
    <pre class="text-monospace rounded-sm border border-light">{{
      this.output
    }}</pre>
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

pre {
  height: 100%;
  background-color: #dddddd;
  padding: 5px;
}
</style>
