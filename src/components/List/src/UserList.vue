<template>
  <scroll-box :style="{height:scrollH}">
    <div class="user-list-wrapper">
      <form action="false" class="user-list" ref="listForm" v-if="thislist.list.length">
          <div class="user-list-item" v-for="(item, index) in thislist.list" v-bind:key="index">
            <card-user :index="index" :checked="getActive(item)" :checkable="checkable" :value="item.key" :name="item.name" :src="item.avatar" @change="handleChange" />
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
    list: {
      type: Array,
      default: new Array(),
    },
    activeIds: {
      type: Array,
      default: new Array(),
    },
    key: {
      type: String,
      default: 'id',
    }
  },
  emits: ["change"],
  setup(props, { emit }) {
    const listForm = ref()
    const scrollH = ref(`100%`)
    const thislist = reactive({ list: props.list})
    const thisActiveIds = reactive({ list: props.activeIds})

    watch(
      props, 
      (newVal) => { 
        thislist.list = newVal.list
        thisActiveIds.list = newVal.activeIds
      }
    )

    function handleChange(index, isChecked) {
      let item = toRaw(thislist.list[index])
      emit("change",isChecked, index, item)
    }

    function getActive(item) {
      let res = thisActiveIds.list.indexOf(item[props.key]) > -1
      return res
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
