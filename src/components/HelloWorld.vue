<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <el-color-picker v-model="color1" :predefine="predefineColors" @change="changeColor"></el-color-picker><br>
    <div>
      <el-button icon="my-icon-calendar"> default</el-button>
      <el-button type="primary" icon="my-icon-warning"> primary</el-button>
      <el-button type="text" icon="el-icon-s-tools">text</el-button>
      <el-button plain icon="el-icon-upload">default</el-button>
      <el-button plain type="primary" icon="el-icon-picture">primary</el-button>
      <el-button :loading="true">default</el-button>
      <el-button type="primary" :loading="true">primary</el-button>
      <el-button type="text" :loading="true">text</el-button>
      <el-button plain :loading="true">default</el-button>
      <el-button plain type="primary" :loading="true">primary</el-button>
      <el-tag closable>Color of element-ui css</el-tag>
      <el-switch v-model="checked" active-text="switch"></el-switch>
      <el-date-picker v-model="date"></el-date-picker>

      <h2>self css:</h2>
      <div>
          <nav class="series-primary">primary color in self css</nav>
          <nav class="series-3">primary color series in self css</nav>
          <nav class="series-5">primary color series in self css</nav>
      </div>

      <h2>other custom colors:</h2>
      <div class="custom-color">
          my custom color
      </div>
      <div class="custom-color2">
          my custom color 2
      </div>
    </div>
  </div>
</template>

<script>
import { curColor, changeThemeColor } from "@/utils/themeColorClient";
export default {
  name: "HelloWorld",
  props: {
    msg: String,
  },
  data() {
    return {
      color1: curColor,
      predefineColors: [
        '#ff4500',
        '#ff8c00',
        '#ffd700',
        '#90ee90',
        '#00ced1',
        '#1e90ff',
        '#c71585'
      ],
      checked: false,
      date: ''
    };
  },
  methods: {
    changeColor(newColor) {
      changeThemeColor(newColor);
    },
  },
};
</script>

<style lang="scss" scoped>
.series-primary {
  color: $--color-primary;
}
.series-3 {
  color: $--color-primary-light-3;
}
.series-5 {
  color: $--color-primary-light-5;
}

.custom-color {
  color: $my-custom-color;
}
.custom-color2 {
  color: $my-custom-color2;
}
</style>
