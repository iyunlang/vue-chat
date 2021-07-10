<template>
  <scroll-box :style="{height:scrollH}">
    <div class="user-list-wrapper">
      <form action="false" class="user-list" ref="listForm">
          <div class="user-list-item" v-for="(item, index) in thislist.list" v-bind:key="index">
            <card-user :index="`${index}`" :checked="getActive(item)" :value="item.key" :name="item.name" :src="item.avatar" @change="handleChange" />
          </div>
      </form>
    </div>
  </scroll-box>
</template>

<script>
import { ref, watch, reactive, toRaw } from 'vue'
import ScrollBox from './ScrollBox.vue'
import {CardUser} from '../../Card'
export default {
  name: 'UserList',
  components: { ScrollBox, CardUser },
  props: {
    list: {
      type: Array,
      default: new Array(),
    },
    activelist: {
      type: Array,
      default: new Array(),
    },
    key: {
      type: String,
      default: 'key',
    }
  },
  emits: ["change"],
  setup(props, { emit }) {
    const listForm = ref()
    const scrollH = ref(`100%`)
    const thislist = reactive({ list: props.list})
    const activeIds = reactive({ list: props.activelist})
    const thisActivelist = reactive({ list: []})

    watch(
      props, 
      (newVal) => { 
        // let k = newVal.key
        // if(newVal.list.length > 0) {
        //   let keys = toRaw(thislist.list).map(item => item[k])
        //   const list = toRaw(newVal.list)
        //   let newlist = []
        //   for(let item of list) {
        //     if(keys.indexOf(item[k]) < 0) {
        //       newlist.push(item)
        //     }
        //   }
        //   thislist.list = [ ...toRaw(thislist.list), ...newlist ]
        // }
        // if(newVal.activelist.length > 0) {
        //   let keys = toRaw(thisActivelist.list)
        //   const list = toRaw(newVal.activelist)
        //   let newlist = []
        //   for(let item of list) {
        //     if(keys.indexOf(item) < 0) {
        //       newlist.push(item)
        //     }
        //   }
        //   thisActivelist.list = [ ...toRaw(thisActivelist.list), ...newlist ]
        // }
        thislist.list = newVal.list
        activeIds.list = newVal.activelist
        let k = newVal.key
        let activeKeys = newVal.list.map(item => item[k])
        for(let item of newVal.list) {
          if(newVal.activelist.indexOf(item[k]) > -1 && activeKeys.indexOf(item[k]) < 0) {
            thisActivelist.list.push(item)
          }
        }
        console.log(333, toRaw(newVal.list), toRaw(newVal.activelist), toRaw(thisActivelist.list))
      }
    )

    function handleChange(index, isChecked) {
      console.log(111, index, thisActivelist.list.length)
      let item = thislist.list[index]
      if(isChecked) {
        thisActivelist.list.push(item)
        activeIds.list.push(item[props.key])
      }else {
        thisActivelist.list.splice(index, 1);
        activeIds.list.splice(index, 1);
      }
      console.log(222, index, thisActivelist.list.length)
      emit("change", toRaw(activeIds.list), toRaw(thisActivelist.list))
    }

    function getActive(item) {
      let res = activeIds.list.indexOf(item[props.key]) > -1
      // console.log(toRaw(thisActivelist.list), toRaw(thislist.list), res)
      return res
    }

    return {
      listForm,
      thislist,
      thisActivelist,
      scrollH,
      getActive,
      handleChange,
    }
  }
}
</script>

<style scoped>
@import url("../../../styles/index.css");
.user-list-wrapper {

}
.user-list {
  margin-left: -1px;
  border-right: 1px solid var(--light);
  border-left: 1px solid var(--light);
  width: calc(100% + 2px);
}
.user-list-item {
  border-bottom: 1px solid var(--bg);
  margin-left: 10px;
  margin-right: 10px;
}
</style>
