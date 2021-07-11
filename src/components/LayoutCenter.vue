<template>
  <div class="chat-center">
      <div class="chat-center-top">
          <span><span class="name">{{data.tit}}</span></span>
      </div>
      <chat-msg-list :groupId="data.gId"/>
      <form-send :groupId="data.gId"/>
  </div>
</template>

<script>
import { reactive, watch } from 'vue'
import {ChatMsgList} from './List'
import {FormSend} from './Form'
export default {
  name: 'LayoutCenter',
  components: { FormSend, ChatMsgList },
  props: {
    groupId: {
      type: String || Number,
      require: true,
    },
    title: {
      type: String || Number,
      require: true
    }
  },
  setup(props) {

    const data = reactive({
      tit: props.title,
      gId: props.groupId,
    })

    watch(
      props,
      (newVal) => {
        data.tit = newVal.title;
        data.gId = newVal.groupId;
      }
    )

    return {
      data,
    }
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
.chat-center-top {
  width: 100%;
  height: 47px;
  padding: 15px 29px;
  background-color: #eceff1;
}
.chat-center-top span {
  font-size: 15px;
  color: var(--grey);
}
.chat-center-top span .name {
  color: var(--dark);
  font-family: 'Source Sans Pro', sans-serif;
  font-weight: 600;
}
</style>
