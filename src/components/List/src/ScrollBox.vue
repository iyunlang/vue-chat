<template>
    <div class="scroll-box" :style="style" ref="boxEl">
        <!-- <div @click="goBottom">回到底部</div> -->
        <slot />
        <!-- <div @click="goTop">回到顶部</div> -->
    </div>
</template>

<script>
import { ref, onMounted, unref, watch } from 'vue'
export default {
  name: 'ScrollBox',
  props: {
    style: [Object,Number],
    go: [String,Number],
  },
  emits: ['top', 'bottom', 'reach'],
  setup(props, {emit}) {
    const boxEl = ref();

    watch(
        props, 
        (newVal) => { 
          let num = Number(newVal.go)
          if(num >= 0) {
            goToPosition(num, function() {
              emit("reach")
            })
          }
        }
    )

    onMounted(function() {
      let box = unref(boxEl)
      let offsetH = box.offsetHeight, scrollH = box.scrollHeight, clientH = box.clientHeight
      // 滚动底部时的值、最大滚动值
      let maxScrollTop = offsetH > clientH ? scrollH - offsetH : scrollH - clientH
      // console.log(2, scrollH, maxScrollTop)
      // 监听滚动条
      // box.onscroll = function() {
      //   let scrollT = box.scrollTop
      //   console.log(1, scrollT)
      // }
      box.scrollTop = maxScrollTop
    })

    function goBottom() {
      let box = unref(boxEl)
      let offsetH = box.offsetHeight, scrollH = box.scrollHeight, clientH = box.clientHeight
      // 滚动底部时的值、最大滚动值
      let maxScrollTop = offsetH > clientH ? scrollH - offsetH : scrollH - clientH
      goToPosition(maxScrollTop, function() {
        emit("bottom")
      })
    }

    function goTop() {
      goToPosition(0, function() {
        emit("top")
      })
    }

    function goToPosition(num, cb) {
      let speed = 8
      let box = unref(boxEl)
      let isAdd = box.scrollTop < num
      let isReach = isAdd ? () => box.scrollTop>=num : () => box.scrollTop<=num
      let timer = setInterval(function() {
        if(isReach()) {
          box.scrollTop = num
          cb && cb()
          clearInterval(timer)
        }
        box.scrollTop = isAdd ? box.scrollTop+speed : box.scrollTop-speed;
      },1)
    }

    return {
      boxEl,
      goTop,
      goBottom,
    }
  }
}
</script>

<style scoped>
@import url("../../../styles/index.css");
.scroll-box {
  overflow-y: scroll;
  overflow-y: auto;
  overflow-x: hidden;
}
/*定义滚动条轨道 内阴影+圆角*/
.scroll-box::-webkit-scrollbar-track
{
  -webkit-box-shadow: inset 0 0 5px rgba(0,0,0,0.3);
  border-radius: 5px;
  background-color: rgba(255,255,255,0.8);
}
/*定义滚动条高宽及背景 高宽分别对应横竖滚动条的尺寸*/
.scroll-box::-webkit-scrollbar
{
  width: 5px;
  background-color: rgba(0,0,0,0);
}
/*定义滑块 内阴影+圆角*/
.scroll-box::-webkit-scrollbar-thumb
{
  border-radius: 5px;
  -webkit-box-shadow: inset 0 0 5px rgba(0,0,0,.3);
  background-color: #555;
}


</style>
