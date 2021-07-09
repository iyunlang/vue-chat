<template>
  <modal-base :show="isShow" origin="left top" :position="position">
    <div class="userinfo-box">

    </div>
  </modal-base>
</template>

<script>
import { ref, watch } from 'vue'
import ModalBase from './ModalBase.vue'
export default {
  name: 'ModalUserinfo',
  components: { ModalBase },
  props: {
    show: {
      type: Boolean,
      value: false,
    },
    position: {
      require: true,
      type: String,
    }
  },
  emits: ["close"],
  setup(props, {emit}) {
    const isShow = ref(props.show)

    watch(
      props, 
      (newVal) => { 
        if(isShow.value !== newVal.show) isShow.value = newVal.show
      }
    )

    function handleClose() {
      isShow.value = false
      emit("close")
    }

    return {
      isShow,
      handleClose,
    }
  }
}
</script>

<style scoped>
@import url("../../../styles/index.css");
.userinfo-box {
  height: 100%;
  background-color: #fff;
}


</style>
