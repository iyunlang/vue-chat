<template>
  <modal-base :show="isShow" width="500px" height="300px" @close="handleClose" :opacity="0.12">
    <div class="popup-box">
      <h1 v-if="!!title">{{title}}</h1>
      <div class="two-user-list">
        <div class="left">
          <user-list :checkable="true" :list="thislist.list" :activeIds="thisActiveIds.list" @change="handleChangeList" />
        </div>
        <div class="right">
          <user-list :checkable="true" :list="thisActivelist.list" :activeIds="thisActiveIds.list"  @change="handleChangeList" />
        </div>
      </div>
      <div class="com-button md" @click="handleClick">确定</div>
    </div>
  </modal-base>
</template>

<script>
import { ref, watch, reactive, toRaw } from 'vue'
import ModalBase from './ModalBase.vue'
import UserList from '../../List/src/UserList.vue'
import { userStore } from '../../../store/modules/user'
import { getActiveList } from '../../../utils/index'
export default {
  name: 'ModalUserList',
  components: { ModalBase, UserList },
  props: {
    ...UserList.props,
    title: String,
    show: {
      type: Boolean,
      default: false,
    },
  },
  emits: ["close", "select"],
  setup(props, {emit}) {
    const isShow = ref(props.show)
    const thislist = reactive({ list: props.list})
    const thisActivelist = reactive({ list: []})
    const thisActiveIds = reactive({ list: props.activeIds})

    watch(
      props, 
      (newVal) => {
        if(isShow.value !== newVal.show) isShow.value = newVal.show
        thislist.list = newVal.list
        thisActiveIds.list = newVal.activeIds
        if(isShow.value && newVal.list.length < 1) {
          thislist.list = [...toRaw(userStore.getFriendListState)]
        }
        thisActivelist.list = getActiveList(toRaw(thislist.list), toRaw(thisActiveIds.list), 'id')
      }
    )

    function handleClose() {
      isShow.value = false
      thislist.list = []
      thisActivelist.list = []
      thisActiveIds.list = []
      emit("close")
    }

    function handleChangeList(isChecked, index, val) {
      let k = props.key
      if(isChecked) {
        for(let i = 0 ; i < thislist.list.length ; i++) {
          const item = thislist.list[i]
          if(item[k] === val[k]) {
            thislist.list.splice(i, 1);
            thisActivelist.list.push(item)
            thisActiveIds.list.push(item[k])
          }
        }
      }else {
        for(let i = 0 ; i < thisActivelist.list.length ; i++) {
          const item = thisActivelist.list[i]
          if(item[k] === val[k]) {
            thisActivelist.list.splice(i, 1);
            thislist.list.push(item)
            thisActiveIds.list.splice(thisActiveIds.list.indexOf(item[k]), 1)
          }
        }
      }
    }

    function handleClick() {
      emit("select", toRaw(thisActiveIds.list))
      handleClose()
    }

    return {
      isShow,
      thislist,
      thisActivelist,
      thisActiveIds,
      handleClose,
      handleChangeList,
      handleClick,
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
}
h1 {
  height: 50px;
  line-height: 50px;
  text-align: center;
  font-size: 16px;
  color: #333;
  font-weight: bold;
  border-bottom: 1px solid var(--light);
}
.popup-box >>> .user-list-item {
  border: none;
}
h1+.two-user-list {
  top: 50px;
}
.two-user-list {
  overflow: hidden;
  position: absolute;
  bottom: 60px;
  top: 0;
  width: 100%;
  left: 0;
}
.left, .right {
  height: 100%;
  width: 50%;
  float: left;
}
.com-button {
  position: absolute;
  bottom: 10px;
  right: 10px;
}

</style>
