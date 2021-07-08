<template>
  <div class="chat-center">
      <chat-msg-list/>
      <form-send/>
  </div>
</template>

<script>
import {ChatMsgList} from './List'
import {FormSend} from './Form'
export default {
  name: 'LayoutCenter',
  components: { FormSend, ChatMsgList },
  props: {
    msg: String
  }
}
</script>

<style scoped>
@import url("../styles/index.css");
.chat-center {
  position: relative;
  float: left;
  width: 62.4%;
  height: 100%;
}
</style>
