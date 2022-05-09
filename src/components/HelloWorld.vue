<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <el-color-picker v-model="color1" @change="changeColor"></el-color-picker>
    <el-button type="primary">按钮</el-button>
  </div>
</template>

<script>
import { changeThemeColor } from "@/utils/themeColorClient";
export default {
  name: "HelloWorld",
  props: {
    msg: String,
  },
  data() {
    return {
      color1: "#409EFF",
    };
  },
  methods: {
    changeColor(newColor) {
      changeThemeColor(newColor);
      // console.log(newColor);
    },
  },
};
</script>
