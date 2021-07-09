<template>
    <img 
    class="img-avatar"
    :src="src" 
    :onerror="`onerror=null;src='https://oss.iyunlang.top/assets/images/avatar2.png'`" 
    alt="" 
    @click="handleClick"
    :style="{
      width:size,
      height:size,
    }">
    <modal-userinfo :show="showUserinfo" :position="position" />
</template>

<script>
import { defineComponent, ref } from 'vue'
import { getMousePos } from '../../../hooks/web/useMouse'
import { ModalUserinfo } from '../../Modal'
export default defineComponent({
  name: 'ImgAvatar',
  components: { ModalUserinfo },
  props: {
    size: {
      type: String,
      value: "38px",
    },
    src: String
  },
  setup() {

    const showUserinfo = ref(false)
    const position = ref("")

    function handleClick(e) {
      let pos = getMousePos(e)
      console.log(pos)
      position.value = `${pos.x}px ${pos.y}px`
      showUserinfo.value = true
    }

    return {
      handleClick,
      showUserinfo,
      position,
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
