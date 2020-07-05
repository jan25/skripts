<template>
  <div class="container">
    <div class="editor">
      <PrismEditor v-model="code" language="js"></PrismEditor>
    </div>

    <div class="buttons d-flex flex-row justify-content-around">
      <button
        type="button"
        class="btn btn-success"
        @click="$emit('run', getData())"
      >
        Run
      </button>
      <button
        type="button"
        class="btn btn-primary"
        @click="$emit('save', getData())"
      >
        Save
      </button>
    </div>
  </div>
</template>

<script>
import PrismEditor from "vue-prism-editor";

export default {
  name: "Editor",
  components: { PrismEditor },
  data() {
    return {
      code: "let i = 3;",
      clicked: false,
    };
  },
  created() {},
  methods: {
    getData() {
      return {
        code: this.code,
      };
    },
  },
};
</script>

<style scoped>
.container {
  height: 70%;
}

.editor {
  height: 90%;
}

button {
  width: 40%;
}

/* Hack to show full height editor. Failed */
.prism-editor-wrapper {
  height: 100%;
}
pre > .prism-editor__code {
  height: 100%;
}
</style>
