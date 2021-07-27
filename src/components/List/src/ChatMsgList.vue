<template>
    <scroll-box :go="scrollTo" @reach="handleScrollReach">
      <div class="chat-msg-list">
        <div class="chat-msg-list-item active-chat">
            <!-- <div class="conversation-start">
                <span>Today, 5:38 PM</span>
            </div> -->
            <div class="bubble you">
              <img class="msg-avatar" :src="''" alt="" :onerror="`onerror=null;src='https://iyunlang.top/assets/images/avatar3.png'`">
              <div class="msg-content">Hello</div>
            </div>
            <div class="bubble you">
              <img class="msg-avatar" :src="''" alt="" :onerror="`onerror=null;src='https://iyunlang.top/assets/images/avatar3.png'`">
              <div class="msg-content">I'm in California dreaming</div>
            </div>
            <div class="bubble me">
              <img class="msg-avatar" :src="''" alt="" :onerror="`onerror=null;src='https://iyunlang.top/assets/images/avatar3.png'`">
              <div class="msg-content">... about who we used to be.</div>
            </div>
        </div>
      </div>
      <!-- <div v-if="newsNum > 40" class="show-new-list" @click="handleShowNews"><icon-font name="xiangshang" :color="'#fff'"/>{{newsNum}}条新信息</div> -->
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
  background-color: #fff;
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
  display: inline-block;
  width: 100%;
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
.msg-avatar {
  width: 38px;
  height: 38px;
  border-radius: 4px;
  border: 1px solid #ccc;
  background-color: #f5f5f5;
}
.chat-msg-list-item h1 {
  font-size: 15px;
  font-weight: bold;
}
.chat-msg-list-item p {
  font-size: 12px;
  color: #999;
}
.bubble {
  box-sizing: border-box;
  max-width: 80%;
}
.bubble.type5 {
  width: 300px;
}
.chat-msg-list-item.active-chat {
  display: block;
  display: flex;
}
.bubble >>> .img-avatar-group {
  float: right;
  margin-left: 12px;
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
.chat-msg-list-item .msg-content {
  line-height: 21px;
  font-size: 15px;
  padding: 8px 10px;
  border-radius: 5px;
  vertical-align: top;
  position: relative;

}
.chat-msg-list-item .msg-content:before {
  position: absolute;
  top: 19px;
  display: block;
  width: 8px;
  height: 6px;
  content: '\00a0';
  -webkit-transform: rotate(29deg) skew(-35deg);
          transform: rotate(29deg) skew(-35deg);
}
.chat-msg-list-item .bubble {
  display: inline-block;
  clear: both;
  margin-bottom: 8px;
}
.chat-msg-list-item .bubble.you {
  float: left;
  align-self: flex-start;
  -webkit-animation-name: slideFromLeft;
          animation-name: slideFromLeft;
}
.chat-msg-list-item .bubble.you .msg-avatar{
  float: left;
}
.chat-msg-list-item .bubble.you .msg-content {
  color: var(--white);
  background-color: var(--blue);
  margin-left: 48px;
}
.chat-msg-list-item .bubble.you .msg-content:before {
  left: -3px;
  background-color: var(--blue);
}
.chat-msg-list-item .bubble.me {
  float: right;
  align-self: flex-end;
  -webkit-animation-name: slideFromRight;
          animation-name: slideFromRight;
}
.chat-msg-list-item .bubble.me .msg-avatar {
  float: right;
}
.chat-msg-list-item .bubble.me .msg-content {
  color: var(--dark);
  background-color: #eceff1;
  margin-right: 48px;
}
.chat-msg-list-item .bubble.me .msg-content:before {
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
