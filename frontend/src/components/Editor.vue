<template>
  <div class="container">
    <div class="editor-wrapper">
      <vue-editor v-model="code" language="js"></vue-editor>
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
import Vue from "vue";
import VuePrismEditor from "vue-prism-editor";
import { fetch } from "./Api";

Vue.component("vue-editor", VuePrismEditor);

export default {
  name: "Editor",
  props: ["id"],
  data() {
    return {
      code: DEFAULT_CODE,
    };
  },
  mounted() {
    if (this.id !== null) {
      fetch(this.id)
        .then((code) => (this.code = code))
        .catch((error) => console.error(error));
    }
  },
  methods: {
    getData() {
      return {
        code: this.code,
      };
    },
  },
};

const DEFAULT_CODE = `console.log('Hello there!');

let fact = 1;
for (let i = 2; i < 10; ++i) {
  fact *= i;
}

console.log(fact);
`;
</script>

<style scoped>
.container {
  height: 70%;
}

.editor-wrapper {
  height: 90%;
}

.buttons {
  margin-top: 3%;
  height: 7%;
}

button {
  width: 40%;
}

/* Hack to empty expand editor to parent div */
/deep/ .prism-editor-wrapper {
  height: 100%;
}

/deep/ pre {
  height: 100%;
}
</style>
