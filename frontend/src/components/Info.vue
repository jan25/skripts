<template>
  <div class="container">
    <p>{{ getMsg() }}</p>
  </div>
</template>

<script>
export const DEFAULT = 0;
export const RUNNING = 1;
export const SAVING = 2;
export const SAVED = 3;
export const ERROR = 4;

export default {
  name: "Info",
  props: ["status", "error"],
  methods: {
    getMsg() {
      switch (this.status) {
        case RUNNING:
          return "Running...";
        case SAVING:
          return "Saving...";
        case SAVED:
          return "Saved!";
        case ERROR:
          return this.error || "Unknown error";
        case DEFAULT:
          return "";
      }
    },
  },
  data() {
    return {
      msg: "",
    };
  },
};
</script>

<style scoped>
.container {
  text-align: center;
}
</style>
