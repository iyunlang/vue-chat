<template>
  <div class="chat-left" :class="!getLeftIsOpen?'close':'open'">
    <div class="mask" @click.stop="setLeftIsOpen(false)"></div>
    <div class="chat-left-inner">
      <div class="chat-left-top">
        <form-search/>
        <icon-user-add iconSize="28px" />

      </div>
      <div class="chat-left-main search-main" v-if="getSearchFriendList.length">
        <user-list :list="getSearchFriendList" />
        <!-- <user-msg-list/> -->
      </div>
      <div class="chat-left-main" v-if="k === 'msg'">
        <user-msg-list/>
      </div>
      <div class="chat-left-main" v-if="k === 'person'">
        <div class="list-tit row-inter active" @click="handleTIt(1)">
          <icon-font bg name="tianjiayonghu1"/>
          新的朋友
          <div class="num" v-if="getNewUserNum > 0">{{getNewUserNum}}</div>
        </div>
        <!-- <div class="list-tit row-inter" :class="nav===1?'active':''" @click="handleTIt(2)"><icon-font bg name="yonghu"/>群聊</div> -->
        <div class="list-tit"><icon-font bg name="cedaohang-tongxunlu"/>通讯录</div>
        <div class="user-list">
          <user-list :list="getFriendList" @change="handleUserChange" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { ref, watch } from 'vue'

import { FormSearch } from './Form'
import { UserMsgList, UserList } from './List'
import IconUserAdd from './Icon/IconUserAdd.vue'
import { useUser } from '../hooks/useUser'
import { useApp } from '../hooks/useApp'
export default {
  name: 'LayoutLeft',
  components: { FormSearch, UserMsgList, UserList, IconUserAdd },
  props: {
    active: {
      type: String,
      default: "msg"
    }
  },
  setup(props) {

    const k = ref(props.active)

    const { getFriendList } = useUser()
    const { getLeftIsOpen, setLeftIsOpen } = useApp()

    watch(
        props, 
        (newVal) => { 
          if(newVal.active !== k.value) k.value = newVal.active
        }
    )

    function handleAdd() {

    }

    return {
      k,
      getFriendList,
      getLeftIsOpen,
      getSearchFriendList: [],
      // getSearchFriendList: [
      //   { id: 4, name: 'kkk' }
      // ],
      getNewUserNum: 2,
      handleAdd,
      setLeftIsOpen,
      
    }
  }
}
</script>

<style scoped>
@import url("../styles/index.css");
.list-tit >>> .icon-font {
  margin-right: 4px;
}
.list-tit {
  height: 36px;
  line-height: 36px;
  padding: 0 10px;
  font-size: 14px;
  color: #aaa;
  letter-spacing: 2px;
}
.num {
  position: absolute;
  height: 18px;
  line-height: 18px;
  font-size: 12px;
  background-color: red;
  color: #fff;
  padding: 0 5px;
  border-radius: 20px;
  right: 40px;
  top: 8px;
}
.row-inter.active,
.row-inter:hover {
  color: #666;
}
.chat-left-main {
  position: absolute;
  width: 100%;
  top: 74px;
  bottom: 0;
  z-index: 1;
}
.chat-left-main > .user-list {
  height: calc(100% - 72px);
}
.chat-left-main.search-main {
  z-index: 2;
  background-color: #fff;
}
.chat-left-top {
  position: relative;
  width: 100%;
  /* overflow: hidden; */
  padding: 27px 10px 10px;
}
.chat-left-top:after {
  position: absolute;
  bottom: 0;
  left: 10px;
  right: 10px;
  display: block;
  height: 1px;
  content: '';
  background-color: var(--light);
  opacity: 0.3;
}
.chat-left >>> .icon-svg {
  margin-left: 12px;
  cursor: pointer;
}
.chat-left >>> .search-wrapper {
  float: left;
  width: calc(100% - 52px);
}
</style>
