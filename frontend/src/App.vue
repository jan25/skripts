<template>
  <div id="app" class="d-flex justify-content-center">
    <div id="app-container" class="flex-column align-items-center">
      <Header />
      <Editor :id="id" v-on:run="handleRun" v-on:save="handleSave" />
      <Info :status="status" v-bind:error="error" />
      <Output :output="output" />
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
      code: "",
      status: DEFAULT,
      error: "",
      output: "",
    };
  },
  computed: {
    id: function() {
      return typeof this.$route.params.id === "undefined"
        ? null
        : this.$route.params.id;
    },
  },
  methods: {
    handleRun(data) {
      this.status = RUNNING;

      execute(data.code, this.id)
        .then((data) => {
          this.status = DEFAULT;
          this.output = data.output;
          if (this.id === null) {
            this.$router.push({ name: "root", params: { id: data.id } });
          }
        })
        .catch((error) => {
          this.status = ERROR;
          this.error = error.toString();
        });
    },
    handleSave(data) {
      this.status = SAVING;

      save(data.code, this.id)
        .then(() => {
          this.status = SAVED;
        })
        .catch((error) => {
          this.status = ERROR;
          this.error = error;
        });
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
