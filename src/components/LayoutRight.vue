<template>
  <div class="chat-right" :class="isShow?'show':''" @click.stop="handleClose">
      <div class="chat-right-main">
        <scroll-box>
          <slot />
        </scroll-box>
      </div>
      <icon-font v-show="!isShow" @click.stop="handleOpen" name="fanhui" :color="'#333'"/>
  </div>
</template>

<script>
import { ref, watch } from 'vue'
import { ScrollBox } from './List'
export default {
  name: 'LayoutRight',
  components: {
    ScrollBox,
  },
  props: {
    show: {
      type: Boolean,
      value: false
    }
  },
  emits: ["open","close"],
  setup(props, {emit}) {
    const isShow = ref(props.show)

    watch(
      props, 
      (newVal) => { 
        if(isShow.value !== newVal.show) isShow.value = newVal.show
      }
    )

    function handleOpen() {
      isShow.value = true
      emit("open")
    }

    function handleClose() {
      isShow.value = false
      emit("close")
    }

    return {
      isShow,
      handleOpen,
      handleClose,
    }
  }
}
</script>

<style scoped>
@import url("../styles/index.css");
.scroll-box {
  height: 100%;
}
.chat-right-main {
  width: 0;
  right: 0;
  position: absolute;
  height: 100%;
  background-color: #fff;
  box-shadow: -12px 0 10px -16px rgba(0,0,0,0.2);
  z-index: 9;
  transition: all 0.1s;
  overflow: hidden;
}
.chat-right.show .chat-right-main {
  width: 300px;
  overflow: visible;
}
.chat-right {
  position: fixed;
  width: 0;
  right: 0;
  height: 100%;
  z-index: 9;
  transition: width 0.1s;
}
.chat-right.show {
  width: 100%;
} 
.icon-fanhui {
  cursor: pointer;
  position: absolute;
  right: 0;
  top: 10px;
  background-color: #fff;
  box-shadow: 0 0 10px 1px rgba(0,0,0,0.10);
  padding: 8px;
  border-radius: 20px 0 0 20px;
  z-index: 2;  
}

</style>
