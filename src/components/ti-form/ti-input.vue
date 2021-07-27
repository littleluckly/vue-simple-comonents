<template>
  <div>
    <input :type="type"
           :value="value"
           @input="onInput"
           @blur="onBlur"
           v-bind="$attrs" />
  </div>
</template>

<script>
// eslint-disable-next-line no-unused-vars
import emitter from "../../mixins/emitter";
export default {
  inheritAttrs: false,
  props: {
    type: {
      type: String,
      default: "text",
    },
    value: {
      type: String,
      default: "",
    },
  },
  mixins: [emitter],
  methods: {
    onInput (e) {
      this.$emit("input", e.target.value);
      this.dispatch("ti-form-item", "validate", e.target.value);
    },
    onBlur(){
      this.dispatch("ti-form-item", "validate", this.value);
    }
  },
};
</script>

<style></style>
