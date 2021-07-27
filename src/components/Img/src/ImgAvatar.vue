<template>
    <img 
      v-if="groupclass === 1"
      class="img-avatar"
      :class="imgClass"
      :src="src" 
      :onerror="`onerror=null;src='https://iyunlang.top/assets/images/avatar3.png'`" 
      alt="" 
      @click="handleClick"
      :style="{
        width:size,
        height:size,
      }">
    <div class="img-box" v-else-if="groupclass === 2" @click="handleClick" :style="{ width:size, height:size}">
      <img 
      v-for="user in users"
      v-bind:key="user.userId"
      class="img-avatar"
      :class="imgClass"
      :src="user.avatar" 
      :onerror="`onerror=null;src='https://iyunlang.top/assets/images/avatar3.png'`" 
      alt="" >
    </div>
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
    groupclass: {
      type: Number,
      default: 1, //1用户聊天 2群聊聊天
    },
    users: Array,
    src: String,
    size: {
      type: String,
      default: "38px",
    },
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
  .img-box, img {
    width: 38px;
    height: 38px;
    border-radius: 4px;
    border-radius: 50%;
    border: 1px solid #eee;
    background-color: #fff;
  }
  .img-box .img-avatar {
    width: 45%;
    height: 45%;
    float: left;
    border-radius: 4px;
  }
  .img-box .img-avatar:nth-child(2n+1) {
    margin-right: 4px;
  }
</style>
