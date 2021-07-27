<template>
  <div>
    <div class="my-form-item">
      <!-- 显示label -->
      <label v-if="label">{{ label }}</label>
      <!-- 显示表单元素 -->
      <slot></slot>
    </div>

    <!-- 显示错误信息 -->
    <p v-if="error" class="error">{{ error }}</p>
  </div>
</template>

<script>
import Schema from "async-validator";
import emitter from "../../mixins/emitter";
export default {
  componentName: "ti-form-item",
  inject: ["form"],
  mixins: [emitter],
  props: {
    label: {
      type: String,
      default: "",
    },
    prop: {
      type: String,
      default: "",
    },
  },
  data() {
    return {
      error: "",
    };
  },
  mounted() {
    this.$on("validate", () => {
      this.validate();
    });
    if (this.prop) {
      this.dispatch("ti-form", "ti.form.addField", [this]);
    }
  },
  methods: {
    validate() {
      // 当前表单项校验
      // element使用的是async-validator
      // 获取校验规则和当前数据
      if (!this.prop) return;
      const rules = this.form.rules[this.prop];
      const value = this.form.model[this.prop];
      const validator = new Schema({ [this.prop]: rules });
      // 返回promise，全局可以统一处理
      return validator.validate({ [this.prop]: value }, (errors) => {
        // errors存在则校验失败
        console.log("err", errors);
        if (errors) {
          this.error = errors[0].message;
        } else {
          // 校验通过
          this.error = "";
        }
      });
    },
  },
};
</script>

<style lang="less">
.error {
  color: red;
  text-align: left;
}
.my-form-item {
  display: flex;
  justify-content: flex-start;
}
</style>
