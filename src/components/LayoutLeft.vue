<template>
  <div class="chat-left">
    <div v-if="k === 'msg'">
      <div class="chat-left-top">
        <chat-search/>
        <icon-user-add iconSize="34px" />
      </div>
      <user-msg-list/>
    </div>
    <div v-if="k === 'person'">
      <div class="chat-left-top">
        <chat-search/>
        <icon-user-add iconSize="34px" />
      </div>
      <user-list/>
    </div>
  </div>
</template>

<script>
import { ref, watch } from 'vue'

import { ChatSearch } from './Search'
import { UserMsgList, UserList } from './List'
import { IconUserAdd } from './Icon'
export default {
  name: 'LayoutLeft',
  components: { ChatSearch, UserMsgList, UserList, IconUserAdd },
  props: {
    active: {
      type: String,
      default: "msg"
    }
  },
  setup(props) {

    const k = ref(props.active)

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
      handleAdd,
    }
  }
}
</script>

<style scoped>
@import url("../styles/index.css");
.chat-left-top {
  position: relative;
  width: 100%;
  overflow: hidden;
  padding: 20px 10px;
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
}
.chat-left >>> .search-wrapper {
  float: left;
  width: calc(100% - 52px);
}
.chat-left {
  float: left;
  width: 37.6%;
  height: 100%;
  border: 1px solid var(--light);
  background-color: var(--white);
}
</style>
