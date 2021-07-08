<template>
    <img 
    class="img-avatar"
    :src="src" 
    :onerror="`onerror=null;src='https://oss.iyunlang.top/assets/images/avatar2.png'`" 
    alt="" 
    :style="{
      width:size,
      height:size,
    }">
</template>

<script>
import { defineComponent } from 'vue'
export default defineComponent({
  name: 'ImgAvatar',
  props: {
    size: {
      type: String,
      value: "38px",
    },
    src: String
  },
  setup() {
    return {
    }
  }
})
</script>

<style scoped>
  img {
    width: 38px;
    height: 38px;
    background-color: #f5f5f5;
  }
</style>
