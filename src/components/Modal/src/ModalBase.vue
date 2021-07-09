<template>
  <div class="modal-base" v-if="isShow">
    <div class="mask" @click="handleClose"></div>
    <div class="popup" :style="popupStyle">
      <slot />
    </div>
  </div>
</template>

<script>
import { ref, watch, reactive, computed } from 'vue'
export default {
  name: 'ModalBase',
  components: {  },
  props: {
    show: {
      type: Boolean,
      value: false,
    },
    width: {
      type: String,
      value: "300px",
    },
    height: {
      type: String,
      value: "200px",
    },
    position: {
      type: String,
      value: "center center",
    },
    origin: {
      type: String,
      value: "center center",
    },
  },
  emits: ["close"],
  setup(props, {emit}) {
    const isShow = ref(props.show)
    const popupSize = reactive({ w: 0, h: 0})
    const popupOrigin = reactive({ x: 0, y: 0})
    const popupPosition = reactive({ x: 0, y: 0})

    const popupStyle = computed(() => {
      let style = {
        width: popupSize.w,
        height: popupSize.h,
        transform: `translate(${popupOrigin.x}, ${popupOrigin.y})`,
        left: popupPosition.x,
        top: popupPosition.y,
      }
      return style
    })

    watch(
      props, 
      (newVal) => { 
        if(isShow.value !== newVal.show) isShow.value = newVal.show
        if(newVal.origin) setOrigin(newVal.origin)
        if(newVal.position) setPosition(newVal.position)
        popupSize.w = newVal.width || "300px"
        popupSize.h = newVal.height || "200px"
      }
    )

    function setPosition(_position) {
      const PositionData = {
        left: 0,
        right: `${popupSize.w}`,
        top: 0,
        bottom: `${popupSize.h}`,
        center: `50%`,
      }
      let position = _position.split(" ")
      let keyPositionData = Object.keys(PositionData)
      let positionX = position[0],positionY = position[1]
      popupPosition.x = keyPositionData.indexOf(positionX) > -1 ? PositionData[positionX] : positionX
      popupPosition.y = keyPositionData.indexOf(positionY) > -1 ? PositionData[positionY] : positionY
    }

    function setOrigin(_origin) {
      const OriginData = {
        left: 0,
        right: `-${popupSize.w}`,
        top: 0,
        bottom: `-${popupSize.h}`,
        center: `-50%`,
      }
      let origin = _origin.split(" ")
      let keyOriginData = Object.keys(OriginData)
      let originX = origin[0],originY = origin[1]
      popupOrigin.x = keyOriginData.indexOf(originX) > -1 ? OriginData[originX] : originX
      popupOrigin.y = keyOriginData.indexOf(originY) > -1 ? OriginData[originY] : originY
    }

    function handleClose() {
      isShow.value = false
      emit("close")
    }

    return {
      isShow,
      popupStyle,
      handleClose,
    }
  }
}
</script>

<style scoped>
@import url("../../../styles/index.css");
.popup {
  z-index: 2;
}
.modal-base {
  position: fixed;
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
  z-index: 8;
}
.mask {
  position: absolute;
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
  background: #000;
  opacity: 0;
  z-index: 1;
}


</style>
