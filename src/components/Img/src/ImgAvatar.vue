<template>
    <img 
    class="img-avatar"
    :class="imgClass"
    :src="src" 
    :onerror="`onerror=null;src='https://oss.iyunlang.top/assets/images/avatar2.png'`" 
    alt="" 
    @click="handleClick"
    :style="{
      width:size,
      height:size,
    }">
    <modal-userinfo :position="position" :show="showModal" @close="handleCloseModal" />
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
      default: "38px",
    },
    src: String,
    hasInfo: {
      type: Boolean,
      default: false
    },
    imgClass: String, Object,
  },
  setup(props) {

    const showModal = ref(false)
    const position = ref("")

    function handleClick(e) {
      console.log(props.hasInfo)
      if(props.hasInfo) {
        let pos = getMousePos(e)
        position.value = `${pos.x}px ${pos.y}px`
        showModal.value = true
      }
    }

    function handleCloseModal() {
      showModal.value = false
    }

    return {
      handleClick,
      showModal,
      position,
      handleCloseModal,
    }
  }
})
</script>

<style scoped>
  img {
    width: 38px;
    height: 38px;
    background-color: #f5f5f5;
    border-radius: 4px;
  }
</style>
