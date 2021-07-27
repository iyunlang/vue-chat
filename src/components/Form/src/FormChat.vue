<template>
    <div class="chat-center-bottom">
        <div class="chat-center-bottom-nav">

        </div>
        <textarea class="chat-input" cols="30" rows="10" placeholder="既然来了留下点什么..." 
        v-model="formData.content"
        @keydown="handleKeydown" 
        @keyup="handleKeyUp"
        ></textarea>
        <div class="chat-form-bottom">
            <span class="chat-form-tip">Enter 发送，Ctrl+Enter 换行</span>
            <div class="chat-send" :class="formData.content ? '':'disable'" @click="handleSend">发送</div>
        </div>
    </div>
</template>

<script>
import { toRaw, reactive } from 'vue'
export default {
  name: 'FormSend',
  props: {
    
  },
  setup() {
    const formData = reactive({
      content: "",
    })

    let keyCodeList = []

    async function handleSend() {
      const data = {
        ...toRaw(formData),
      }
      if(!data.content) {
        // Notice("没有发送内容")
        formData.content = ""
        return false
      }
      data.content = data.content.replace(/\r\n|\n|\r/g, "<br>")
      data.content = data.content.replace(/\s/g,"&nbsp;"); 
      console.log(data)
    }

    async function handleKeydown(ev){
      let oEvent=ev||event;
      let codeList = [13, 17] //13 enter , 17 ctrl
      if(codeList.indexOf(oEvent.keyCode) > -1 && keyCodeList.indexOf(oEvent.keyCode)<0) {
        if(oEvent.preventDefault) oEvent.preventDefault()
        else window.event.returnValue == false;
        keyCodeList.push(oEvent.keyCode)
      }
      if(keyCodeList.indexOf(13) > -1) {//enter
        if(keyCodeList.indexOf(17) > -1) {//ctrl
          formData.content += "\n"
          keyCodeList = []
        }else {
          handleSend()
          keyCodeList = []
        }
      }
    }

    async function handleKeyUp(ev) {
      let oEvent=ev||event;
      let codeList = [13, 17] //13 enter , 17 ctrl
      if(codeList.indexOf(oEvent.keyCode) > -1 && keyCodeList.indexOf(oEvent.keyCode)<0) {
        if(oEvent.preventDefault) oEvent.preventDefault()
        else window.event.returnValue == false;
        keyCodeList.push(oEvent.keyCode)
      }
      keyCodeList = []
    }


    return {
      formData,
      handleSend,
      handleKeydown,
      handleKeyUp,
    }
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
