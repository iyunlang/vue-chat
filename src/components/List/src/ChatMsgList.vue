<template>

    <div class="chat-center-top">
        <span>To: <span class="name">Dog Woofson</span></span>
    </div>
    <div class="chat-center-center active-chat" data-chat="person1">
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
    <div class="chat-center-center" data-chat="person2">
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

</template>

<script>
export default {
  name: 'ChatMsgList',
  props: {
    
  }
}
</script>

<style scoped>
@import url("../../../styles/index.css");
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
.chat-center-center {
  position: relative;
  display: none;
  overflow: hidden;
  padding: 0 20px 185px;
  border-width: 1px 1px 1px 0;
  border-style: solid;
  border-color: var(--light);
  height: calc(100% - 48px);
  justify-content: flex-end;
  flex-direction: column;
}
.chat-center-center.active-chat {
  display: block;
  display: flex;
}
.chat-center-center.active-chat .bubble {
  transition-timing-function: cubic-bezier(0.4, -0.04, 1, 1);
}
.chat-center-center.active-chat .bubble:nth-of-type(1) {
  -webkit-animation-duration: 0.15s;
          animation-duration: 0.15s;
}
.chat-center-center.active-chat .bubble:nth-of-type(2) {
  -webkit-animation-duration: 0.3s;
          animation-duration: 0.3s;
}
.chat-center-center.active-chat .bubble:nth-of-type(3) {
  -webkit-animation-duration: 0.45s;
          animation-duration: 0.45s;
}
.chat-center-center.active-chat .bubble:nth-of-type(4) {
  -webkit-animation-duration: 0.6s;
          animation-duration: 0.6s;
}
.chat-center-center.active-chat .bubble:nth-of-type(5) {
  -webkit-animation-duration: 0.75s;
          animation-duration: 0.75s;
}
.chat-center-center.active-chat .bubble:nth-of-type(6) {
  -webkit-animation-duration: 0.9s;
          animation-duration: 0.9s;
}
.chat-center-center.active-chat .bubble:nth-of-type(7) {
  -webkit-animation-duration: 1.05s;
          animation-duration: 1.05s;
}
.chat-center-center.active-chat .bubble:nth-of-type(8) {
  -webkit-animation-duration: 1.2s;
          animation-duration: 1.2s;
}
.chat-center-center.active-chat .bubble:nth-of-type(9) {
  -webkit-animation-duration: 1.35s;
          animation-duration: 1.35s;
}
.chat-center-center.active-chat .bubble:nth-of-type(10) {
  -webkit-animation-duration: 1.5s;
          animation-duration: 1.5s;
}
/* 动画 */
.chat-center-center .bubble {
  font-size: 16px;
  position: relative;
  display: inline-block;
  clear: both;
  margin-bottom: 8px;
  padding: 13px 14px;
  vertical-align: top;
  border-radius: 5px;
}
.chat-center-center .bubble:before {
  position: absolute;
  top: 19px;
  display: block;
  width: 8px;
  height: 6px;
  content: '\00a0';
  -webkit-transform: rotate(29deg) skew(-35deg);
          transform: rotate(29deg) skew(-35deg);
}
.chat-center-center .bubble.you {
  float: left;
  color: var(--white);
  background-color: var(--blue);
  align-self: flex-start;
  -webkit-animation-name: slideFromLeft;
          animation-name: slideFromLeft;
}
.chat-center-center .bubble.you:before {
  left: -3px;
  background-color: var(--blue);
}
.chat-center-center .bubble.me {
  float: right;
  color: var(--dark);
  background-color: #eceff1;
  align-self: flex-end;
  -webkit-animation-name: slideFromRight;
          animation-name: slideFromRight;
}
.chat-center-center .bubble.me:before {
  right: -3px;
  background-color: #eceff1;
}
.chat-center-center .conversation-start {
  position: relative;
  width: 100%;
  margin-bottom: 27px;
  text-align: center;
}
.chat-center-center .conversation-start span {
  font-size: 14px;
  display: inline-block;
  color: var(--grey);
}
.chat-center-center .conversation-start span:before, .chat-center-center .conversation-start span:after {
  position: absolute;
  top: 10px;
  display: inline-block;
  width: 30%;
  height: 1px;
  content: '';
  background-color: var(--light);
}
.chat-center-center .conversation-start span:before {
  left: 0;
}
.chat-center-center .conversation-start span:after {
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
