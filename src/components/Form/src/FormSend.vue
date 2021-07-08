<template>
    <div class="chat-center-bottom">
        <div class="chat-center-bottom-nav">

        </div>
        <textarea class="chat-input" name="" id="" cols="30" rows="10" placeholder="既然来了留下点什么..."></textarea>
        <div class="chat-form-bottom">
            <span class="chat-form-tip">Enter 发送，Ctrl+Enter 换行</span>
            <div class="chat-send disable">发送</div>
        </div>
    </div>
</template>

<script>
export default {
  name: 'FormSend',
  props: {
    
  }
}
</script>

<style scoped>
@import url("../../../styles/index.css");
.chat-center-bottom {
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  height: 185px;
  box-sizing: border-box;
  background-color: #eceff1;
  border-top: 1px solid var(--light);
  padding: 0 16px;
}
.chat-center-bottom-nav {
  height: 40px;
  box-sizing: border-box;
}
.chat-input {
  font-size: 16px;
  width: 100%;
  height: 109px;
  box-sizing: border-box;
  color: var(--dark);
  border: 0;
  outline: none;
  background-color: #fff;
  font-family: 'Source Sans Pro', sans-serif;
  font-weight: 400;
  overflow:hidden;
  resize:none;
  background: transparent;
}
.chat-form-bottom {
  text-align: right;
}
.chat-form-tip {
  font-size: 12px;
  color: #bbb;
  padding-right: 10px;
  -moz-user-select: none;
-webkit-user-select: none;
-ms-user-select: none;
-khtml-user-select: none;
user-select: none;
}
.chat-send {
  display: inline-block;
  padding: 0 8px;
  font-size: 14px;
  background-color: var(--blue);
  color: #fff;
  height: 28px;
  line-height: 28px;
  border-radius: 4px;
  cursor: pointer;
}
.chat-send.disable {
  opacity: 0.5;
}
.chat-send:not(.disable):hover {
  opacity: 0.85;
}
</style>
