<template>
    <scroll-box :go="scrollTo" @reach="handleScrollReach">
      <div class="chat-msg-list">
        <div class="chat-msg-list-item active-chat" data-chat="person1">
            <div class="conversation-start">
                <span>Today, 3:38 AM</span>
            </div>
            <div class="bubble you">
                Hey human!
            </div>
            <div class="bubble you">
                Umm... Someone took a shit in the hallway.
            </div>
            <div class="bubble me">
                ... what.
            </div>
            <div class="bubble me">
                Are you serious?
            </div>
            <div class="bubble you">
                I mean...
            </div>
            <div class="bubble you">
                It’s not that bad...
            </div>
            <div class="bubble you">
                But we’re probably gonna need a new carpet.
            </div>
        </div>
        <div class="chat-msg-list-item active-chat" data-chat="person2">
            <div class="conversation-start">
                <span>Today, 5:38 PM</span>
            </div>
            <div class="bubble you">
                Hello, can you hear me?
            </div>
            <div class="bubble you">
                I'm in California dreaming
            </div>
            <div class="bubble me">
                ... about who we used to be.
            </div>
        </div>
      </div>
      <div v-if="newsNum > 40" class="show-new-list" @click="handleShowNews"><icon-font name="xiangshang" :color="'#fff'"/>{{newsNum}}条新信息</div>
    </scroll-box>
</template>

<script>
import { ref} from 'vue'
import ScrollBox from './ScrollBox.vue'
export default {
  name: 'ChatMsgList',
  components: { ScrollBox },
  props: {
    
  },
  setup() {
    const newsNum = ref(172)
    const scrollTo = ref()

    function handleShowNews() {
      console.log("查看未读信息")
      //// 查询数据
      //// 滚动到位置
      scrollTo.value = 0
    }

    function handleScrollReach() {
      console.log("到达")
    }

    return {
      scrollTo,
      newsNum,
      handleShowNews,
      handleScrollReach,
    }
  }
}
</script>

<style scoped>
@import url("../../../styles/index.css");
.scroll-box {
  position: absolute;
  width: 100%;
  top: 48px;
  bottom: 185px;
}
.show-new-list {
  cursor: pointer;
  position: fixed;
  right: 5px;
  top: 60px;
  width: 110px;
  height: 30px;
  line-height: 30px;
  background: rgba(0,0,0,0.65);
  color: #fff;
  font-size: 12px;
  text-align: center;
  border-radius: 20px 0 0 20px;
}
.show-new-list .icon-font {
  font-size: 24px;
  display: block;
  float: left;
  width: 12px;
  margin-left: 6px;
}
.chat-msg-list {
  /* position: absolute;
  bottom: 0;
  width: 100%; */
}
.chat-msg-list-item {
  position: relative;
  display: none;
  padding: 10px 20px;
  /* border-width: 1px 1px 1px 0;
  border-style: solid;
  border-color: var(--light); */
  justify-content: flex-end;
  flex-direction: column;
}
.chat-msg-list-item.active-chat {
  display: block;
  display: flex;
}
.chat-msg-list-item.active-chat .bubble {
  transition-timing-function: cubic-bezier(0.4, -0.04, 1, 1);
}
.chat-msg-list-item.active-chat .bubble:nth-of-type(1) {
  -webkit-animation-duration: 0.15s;
          animation-duration: 0.15s;
}
.chat-msg-list-item.active-chat .bubble:nth-of-type(2) {
  -webkit-animation-duration: 0.3s;
          animation-duration: 0.3s;
}
.chat-msg-list-item.active-chat .bubble:nth-of-type(3) {
  -webkit-animation-duration: 0.45s;
          animation-duration: 0.45s;
}
.chat-msg-list-item.active-chat .bubble:nth-of-type(4) {
  -webkit-animation-duration: 0.6s;
          animation-duration: 0.6s;
}
.chat-msg-list-item.active-chat .bubble:nth-of-type(5) {
  -webkit-animation-duration: 0.75s;
          animation-duration: 0.75s;
}
.chat-msg-list-item.active-chat .bubble:nth-of-type(6) {
  -webkit-animation-duration: 0.9s;
          animation-duration: 0.9s;
}
.chat-msg-list-item.active-chat .bubble:nth-of-type(7) {
  -webkit-animation-duration: 1.05s;
          animation-duration: 1.05s;
}
.chat-msg-list-item.active-chat .bubble:nth-of-type(8) {
  -webkit-animation-duration: 1.2s;
          animation-duration: 1.2s;
}
.chat-msg-list-item.active-chat .bubble:nth-of-type(9) {
  -webkit-animation-duration: 1.35s;
          animation-duration: 1.35s;
}
.chat-msg-list-item.active-chat .bubble:nth-of-type(10) {
  -webkit-animation-duration: 1.5s;
          animation-duration: 1.5s;
}
/* 动画 */
.chat-msg-list-item .bubble {
  font-size: 16px;
  position: relative;
  display: inline-block;
  clear: both;
  margin-bottom: 8px;
  padding: 13px 14px;
  vertical-align: top;
  border-radius: 5px;
}
.chat-msg-list-item .bubble:before {
  position: absolute;
  top: 19px;
  display: block;
  width: 8px;
  height: 6px;
  content: '\00a0';
  -webkit-transform: rotate(29deg) skew(-35deg);
          transform: rotate(29deg) skew(-35deg);
}
.chat-msg-list-item .bubble.you {
  float: left;
  color: var(--white);
  background-color: var(--blue);
  align-self: flex-start;
  -webkit-animation-name: slideFromLeft;
          animation-name: slideFromLeft;
}
.chat-msg-list-item .bubble.you:before {
  left: -3px;
  background-color: var(--blue);
}
.chat-msg-list-item .bubble.me {
  float: right;
  color: var(--dark);
  background-color: #eceff1;
  align-self: flex-end;
  -webkit-animation-name: slideFromRight;
          animation-name: slideFromRight;
}
.chat-msg-list-item .bubble.me:before {
  right: -3px;
  background-color: #eceff1;
}
.chat-msg-list-item .conversation-start {
  position: relative;
  width: 100%;
  margin-bottom: 27px;
  text-align: center;
}
.chat-msg-list-item .conversation-start span {
  font-size: 14px;
  display: inline-block;
  color: var(--grey);
}
.chat-msg-list-item .conversation-start span:before, .chat-msg-list-item .conversation-start span:after {
  position: absolute;
  top: 10px;
  display: inline-block;
  width: 30%;
  height: 1px;
  content: '';
  background-color: var(--light);
}
.chat-msg-list-item .conversation-start span:before {
  left: 0;
}
.chat-msg-list-item .conversation-start span:after {
  right: 0;
}

@keyframes slideFromLeft {
  0% {
    margin-left: -200px;
    opacity: 0;
  }
  100% {
    margin-left: 0;
    opacity: 1;
  }
}
@-webkit-keyframes slideFromLeft {
  0% {
    margin-left: -200px;
    opacity: 0;
  }
  100% {
    margin-left: 0;
    opacity: 1;
  }
}
@keyframes slideFromRight {
  0% {
    margin-right: -200px;
    opacity: 0;
  }
  100% {
    margin-right: 0;
    opacity: 1;
  }
}
@-webkit-keyframes slideFromRight {
  0% {
    margin-right: -200px;
    opacity: 0;
  }
  100% {
    margin-right: 0;
    opacity: 1;
  }
}

</style>
