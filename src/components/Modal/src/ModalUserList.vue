<template>
  <modal-base :show="isShow" width="500px" height="300px" @close="handleClose" :opacity="0.12">
    <div class="popup-box">
      <div class="left">
        <user-list :list="thislist.list" :activelist="thisActiveIds.list" @change="handleChangeListLeft" />
      </div>
      <div class="right">
        <user-list :list="thisActivelist.list" :activelist="thisActiveIds.list"  @change="handleChangeListRight" />
      </div>
    </div>
  </modal-base>
</template>

<script>
import { ref, watch, reactive, toRaw } from 'vue'
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

    function handleChangeListLeft(ids, activelist) {
      thislist.list = toRaw(thislist.list).filter(item=>ids.indexOf(item["key"]) > -1 ? false : item)
      thisActivelist.list = activelist
      thisActiveIds.list = ids
    }

    function handleChangeListRight(ids, activelist) {
      thislist.list = toRaw(thislist.list).filter(item=>ids.indexOf(item["key"]) < 0 ? false : item)
      thisActivelist.list = activelist
      thisActiveIds.list = ids
      console.log(ids, activelist)
    }

    return {
      isShow,
      thislist,
      thisActivelist,
      thisActiveIds,
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

</style>
