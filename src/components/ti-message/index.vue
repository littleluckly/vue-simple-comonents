<template>
  <div class="message"
       v-if="isShow">
    <p>
      {{ message }}
    </p>
  </div>
</template>

<script>
export default {
  props: {
    message: {
      type: String,
      required: true,
    },
    duration: {
      type: Number,
      default: 3,
    },
  },
  data () {
    return {
      isShow: false,
    };
  },
  created () {
    this.show();
  },
  methods: {
    show () {
      this.isShow = true;
      setTimeout(() => {
        this.isShow = false;
      }, this.duration * 1000);
    },
    close () {
      this.isShow = false;
    },
  },
};
</script>

<style lang="less">
.message {
  position: absolute;
  top: 40px;
  left: 50%;
  transform: translateX(-50%);
  text-align: center;
  padding: 20px;
  width: 300px;
  background: #c5cf91;
  border: 1px solid #f2f2f2;
}
</style>
