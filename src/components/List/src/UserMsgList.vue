<template>
  <scroll-box :style="{height:scrollH}">
    <div class="msg-wrapper">
      <ul class="msg-list">
          <li class="msg-cart" data-chat="person1">
              <img-avatar src=""/>
              <span class="msg-name">Thomas Bangalter</span>
              <span class="msg-time">2:09 PM</span>
              <span class="msg-preview">I was wondering...</span>
          </li>
          <li class="msg-cart" data-chat="person2">
              <img-avatar src=""/>
              <span class="msg-name">Dog Woofson</span>
              <span class="msg-time">2:09 PM</span>
              <span class="msg-preview">I was wondering...</span>
          </li>
      </ul>
    </div>
  </scroll-box>
</template>

<script>
import { ref} from 'vue'
import ScrollBox from './ScrollBox.vue'
export default {
  name: 'UserMsgList',
  components: { ScrollBox },
  props: {
    
  },
  setup() {
    const scrollH = ref(`calc(100% - ${'74px'})`)

    return {
      scrollH,
    }
  }
}
</script>

<style scoped>
@import url("../../../styles/index.css");

.msg-list {
  margin-left: -1px;
  border-right: 1px solid var(--light);
  border-left: 1px solid var(--light);
  width: calc(100% + 2px);
}
.msg-cart {
  position: relative;
  width: 100%;
  padding: 12px 10px 16px;
  cursor: pointer;
  background-color: var(--white);
}
.msg-cart:after {
  position: absolute;
  bottom: 0;
  left: 10px;
  right: 10px;
  display: block;
  height: 1px;
  content: '';
  background-color: var(--light);
}
.img-avatar {
  float: left;
  width: 40px;
  height: 40px;
  margin-right: 12px;
  border-radius: 50%;
}
.msg-name {
  font-size: 14px;
  line-height: 22px;
  color: var(--dark);
  font-family: 'Source Sans Pro', sans-serif;
  font-weight: 600;
}
.msg-time {
  font-size: 12px;
  position: absolute;
  top: 16px;
  right: 10%;
  padding: 0 0 5px 5px;
  color: var(--grey);
  background-color: var(--white);
}
.msg-preview {
  font-size: 12px;
  display: inline-block;
  overflow: hidden !important;
  width: 70%;
  white-space: nowrap;
  text-overflow: ellipsis;
  color: var(--grey);
}
.msg-cart.active, .msg-cart:hover {
  margin-top: -1px;
  margin-left: -1px;
  padding-top: 13px;
  border: 0;
  background-color: var(--blue);
  width: calc(100% + 2px);
  padding-left: calc(10% + 1px);
}
.msg-cart.active span, .msg-cart:hover span {
  color: var(--white);
  background: transparent;
}
.msg-cart.active:after, .msg-cart:hover:after {
  display: none;
}
</style>
