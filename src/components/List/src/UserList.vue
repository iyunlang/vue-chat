<template>
  <scroll-box :style="{height:scrollH}">
    <div class="user-list-wrapper">
      <form action="false" class="user-list" ref="listForm">
          <div class="user-list-item" v-for="(item, index) in thislist.list" v-bind:key="index">
            <card-user :index="`${index}`" :checked="getActive(item)" :checkable="checkable" :value="item.key" :name="item.name" :src="item.avatar" @change="handleChange" />
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
    checkable: {
      type: Boolean,
      default: false,
    },
    append: {
      type: Boolean,
      default: false,
    },
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
    // const thislist = reactive({ list: props.list})
    const activeIds = reactive({ list: props.activelist})
    const thislist = reactive({ list: [
      {key: "1", name: "11", avatar: ''},
      {key: "2", name: "22", avatar: ''},

    ]})

    watch(
      props, 
      (newVal) => { 
        activeIds.list = newVal.append ? concatArray(toRaw(activeIds.list),toRaw(newVal.activelist)) : toRaw(newVal.activelist)
        thislist.list = newVal.append ? concatArray(toRaw(thislist.list),toRaw(newVal.list), newVal.key) : toRaw(newVal.list)
      }
    )

    function concatArray(arr1, arr2, key) {
      let res = arr1
      if(key) {
        let keys1 = []
        arr1.forEach(item => {
          keys1.push(item[key])
        })
        arr2.forEach(item => {
          if(keys1.indexOf(item[key]) < 0) {
            res.push(item)
          }
        })
      } else {
        arr2.forEach(item => {
          if(arr1.indexOf(item) < 0) {
            res.push(item)
          }
        })
      }
      return res
    }

    function handleChange(index, isChecked) {
      index = Number(index)
      let k = props.key
      let activeList = []
      let unActiveList = []
      for(let item of thislist.list) {
        if(activeIds.list.indexOf(item[k]) > -1) {
          activeList.push(toRaw(item))
        }else {
          unActiveList.push(toRaw(item))
        }
      }
      let item = thislist.list[index]
      let isHas = activeIds.list.indexOf(item[k]) > -1
      if(isChecked) {
        if(!isHas) {
          activeIds.list.push(item[k])
          activeList.push(toRaw(item))
          for(let i in unActiveList) {
            if(unActiveList[i][k] === item[k]) {
              unActiveList.splice(i, 1)
            }
          }
        }
      }else if(isHas){
        activeIds.list.splice(index, 1);
        activeList.splice(index, 1);
        unActiveList.push(toRaw(item))
      }
      emit("change", isChecked, toRaw(item), toRaw(activeIds.list), activeList, unActiveList)
    }

    function getActive(item) {
      return activeIds.list.indexOf(item[props.key]) > -1
    }

    return {
      listForm,
      thislist,
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
