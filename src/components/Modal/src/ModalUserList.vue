<template>
  <modal-base :show="isShow" width="500px" height="300px" @close="handleClose" :opacity="0.12">
    <div class="popup-box">
      <button class="submit-btn" @click="handleSubmit">发起群聊</button>
      <div class="left">
        <!-- <p class="list-top">
          <input type="checkbox" name="" id="">全选
        </p> -->
        <user-list :list="thislist.list" :checkable="true" :activelist="thisActiveIds.list" :append="!isAdd" @change="handleChangeListLeft" />
      </div>
      <div class="right">
        <!-- <p class="list-top">
          <input type="checkbox" name="" id="">全部取消
        </p> -->
        <user-list :list="thisActivelist.list" :checkable="true" :activelist="thisActiveIds.list" :append="isAdd" @change="handleChangeListRight" />
      </div>
    </div>
  </modal-base>
</template>

<script>
import { ref, watch, reactive } from 'vue'
import ModalBase from './ModalBase.vue'
import { UserList } from '../../List'
export default {
  name: 'ModalUserList',
  components: { ModalBase, UserList },
  props: {
    show: {
      type: Boolean,
      default: false,
    },
    list: {
      type: Array,
      default: new Array(),
    },
    activelist: {
      type: Array,
      default: new Array(),
    },
    activeIds: {
      type: Array,
      default: new Array(),
    }
  },
  emits: ["close"],
  setup(props, {emit}) {
    const isAdd = ref(false)
    const isShow = ref(props.show)
    const thislist = reactive({ list: props.list})
    const thisActivelist = reactive({ list: props.activelist})
    const thisActiveIds = reactive({ list: props.activeIds})

    watch(
      props, 
      (newVal) => { 
        if(isShow.value !== newVal.show) isShow.value = newVal.show
        if(thislist.list !== newVal.list) thislist.list = newVal.list
        if(thisActivelist.list !== newVal.activelist) thisActivelist.list = newVal.activelist
        if(thisActiveIds.list !== newVal.activeIds) thisActiveIds.list = newVal.activeIds
      }
    )

    function handleClose() {
      isShow.value = false
      emit("close")
    }

    function handleChangeListLeft(isChecked, item, ids, activelist, unActiveList) {
      if(!isChecked) return
      isAdd.value = isChecked
      thislist.list = unActiveList
      thisActivelist.list = activelist
      thisActiveIds.list = ids
      // console.log(22, item)
    }

    function handleChangeListRight(isChecked, item, ids, activelist, unActiveList) {
      if(isChecked) return
      isAdd.value = isChecked
      thislist.list = unActiveList
      thisActivelist.list = activelist
      thisActiveIds.list = ids
      // console.log(33, item)
    }

    function handleSubmit() {
      console.log("发起群聊")
    }

    return {
      isAdd,
      isShow,
      thislist,
      thisActivelist,
      thisActiveIds,
      handleSubmit,
      handleClose,
      handleChangeListLeft,
      handleChangeListRight,
    }
  }
}
</script>

<style scoped>
@import url("../../../styles/index.css");

.popup-box {
  height: 100%;
  background-color: #fff;
  box-shadow: 0 0 10px 0 rgba(0,0,0,0.12);
  border-radius: 8px;
  overflow: hidden;
}
.left, .right {
  height: 100%;
  width: 50%;
  float: left;
}
.list-top {
  padding: 10px;
  font-size: 14px;
  color: #999;
}
.list-top input {
  margin-right: 4px;
}
.popup-box {
  padding-bottom: 40px;
}
.submit-btn {
  position: absolute;
  padding: 0 10px;
  height: 30px;
  line-height: 30px;
  bottom: 10px;
  right: 10px;
  background-color: var(--blue);
  color: #fff;
  border: none;
  outline: none;
  border-radius: 4px;

}
.submit-btn:hover {
  opacity: 0.8;
}
.submit-btn:active {
  opacity: 0.9;
}
</style>
