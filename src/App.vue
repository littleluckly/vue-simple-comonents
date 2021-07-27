<template>
  <div id="app">
    <ti-form :model="formData" :rules="rules" ref="myform">
      <ti-form-item label="用户名" prop="name">
        <ti-input v-model="formData.name" placeholder="请输入用户名"></ti-input>
      </ti-form-item>
      <div>
        <button @click="handleClick">登录</button>
      </div>
    </ti-form>
  </div>
</template>

<script>
import tiInput from "./components/ti-form/ti-input";
import TiForm from "./components/ti-form/ti-form";
import TiFormItem from "./components/ti-form/ti-form-item.vue";
import TiMessge from "./components/ti-message/index.vue";
import create from "./components/ti-message/index.js";
import { message } from "./components/ti-message/index";

export default {
  name: "App",
  components: {
    tiInput,
    TiForm,
    TiFormItem,
  },
  data() {
    return {
      formData: { name: "" },
      rules: {
        name: [{ required: true, message: "请输入名称" }],
      },
    };
  },
  methods: {
    handleClick() {
      this.$refs.myform.validate((valid) => {
        console.log("valid", valid);
        if (valid) {
          create(TiMessge, { message: "登录成功" });
        } else {
          message({
            message: "校验失败",
          });
        }
      });
    },
  },
};
</script>

<style lang="less">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
