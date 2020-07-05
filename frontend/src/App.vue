<template>
  <div id="app" class="d-flex justify-content-center">
    <div id="app-container" class="flex-column align-items-center">
      <Header />
      <Editor v-on:run="handleRun" v-on:save="handleSave" />
      <Info v-bind:status="status" v-bind:error="error" />
      <Output v-bind:output="output" />
    </div>
  </div>
</template>

<script>
import Header from "./components/Header";
import Editor from "./components/Editor";
import Info, {
  RUNNING,
  DEFAULT,
  SAVING,
  SAVED,
  ERROR,
} from "./components/Info";
import Output from "./components/Output";
import { execute, save } from "./components/Api";

export default {
  name: "App",
  components: {
    Header,
    Editor,
    Info,
    Output,
  },
  data() {
    return {
      status: DEFAULT,
      error: "",
      output: "",
    };
  },
  methods: {
    handleRun(data) {
      console.log(data);
      this.status = RUNNING;

      execute(data.code, this.getId())
        .then((data) => {
          this.status = DEFAULT;
          this.output = data.output;
          console.log(data);
        })
        .catch((error) => {
          this.status = ERROR;
          this.error = error.toString();
          console.log(error);
        });
    },
    handleSave(data) {
      console.log(data);
      this.status = SAVING;

      save(data.code, this.getId())
        .then(() => {
          this.status = SAVED;
        })
        .catch((error) => {
          this.status = ERROR;
          this.error = error;
        });
    },
    async _testApi() {
      return new Promise((resolve) => setTimeout(resolve, 3000));
    },

    getId() {
      return "testid";
    },
  },
};
</script>

<style>
#app {
  height: 100%;
  background-color: #fcfafa;
}

#app-container {
  width: 50%;
}
</style>
