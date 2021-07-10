<template>
  <modal-base :show="isShow" width="200px" height="182px" origin="left top" :position="position" @close="handleClose">
    <div class="userinfo-box">
      <div class="userinfo-top">
        <img-avatar imgClass="userinfo-avatar" src=""/>
        <p>cloud</p>
      </div>
      <ul>
        <li><label>备注<i></i></label>：<span>小明</span></li>
        <li><label>来源<i></i></label>：<span>朋友推荐</span></li>
        <!-- <li><label>个性签名<i></i></label>：<span>你好明天你好明天你好明天你好明天你好明天</span></li> -->
      </ul>
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
      default: false,
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
        console.log(newVal)
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
  box-shadow: 0 0 10px 0 rgba(0,0,0,0.12);
  border-radius: 8px;
}
.userinfo-top {
  padding: 12px 0;
  text-align: center;
}
ul {
  padding: 0 10px;
}
li {
  font-size: 14px;
  height: 24px;
  line-height: 24px;
  overflow: hidden;
}
li label {
  display: block;
  float: left;
  /* width: 70px; */
  width: 40px;
  text-align: justify;
}
li i {
  display: inline-block;
  width: 100%;
}
.userinfo-box >>> .userinfo-avatar {
  
}
p {
  color: #333;
  font-size: 14px;
  margin-top: 8px;
}


</style>
