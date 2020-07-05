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
  border: 1px solid #eeeeee;
  padding: 0px !important;
  margin-right: 20px;
}
pre {
  height: 100%;
  background-color: #fafafa;
  padding: 5px;
}
</style>
