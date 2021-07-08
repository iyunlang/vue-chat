<template>
  <div class="chat-left">
      <chat-search/>
      <user-msg-list/>
  </div>
</template>

<script>
import {ChatSearch} from './Search'
import {UserMsgList} from './List'
export default {
  name: 'LayoutLeft',
  components: { ChatSearch, UserMsgList },
  props: {
    msg: String
  }
}
</script>

<style scoped>
@import url("../styles/index.css");
.chat-left {
  float: left;
  width: 37.6%;
  height: 100%;
  border: 1px solid var(--light);
  background-color: var(--white);
}
</style>
