<template>
  <div>
    <slot></slot>
  </div>
</template>

<script>
import emitter from "../../mixins/emitter";
export default {
  componentName: "ti-form",
  mixins: [emitter],
  provide() {
    return {
      form: this,
    };
  },
  props: {
    model: {
      type: Object,
      required: true,
    },
    rules: Object,
  },
  data() {
    return {
      fields: [],
    };
  },
  created() {
    this.$on("ti.form.addField", (field) => {
      if (field) {
        this.fields.push(field);
      }
    });
  },
  methods: {
    validate(cb) {
      // const tasks = this.$children
      //   .filter((item) => item.prop)
      //   .map((item) => item.validate());

      const tasks = this.fields.map((item) => item.validate());

      Promise.all(tasks)
        .then(() => cb(true))
        .catch(() => {
          console.log("catch-false");
          cb(false);
        });
    },
  },
};
</script>

<style></style>
