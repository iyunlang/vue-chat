<template>
    <icon-svg @click="handleAdd" name="tubiaozhizuomoban" :size="iconSize" :color="iconColor" />
    <modal-user-list :show="showModal" :list="thislist.list" :activelist="thisActivelist.list" @close="handleCloseModal" />
</template>

<script>
import { ref, watch, reactive } from 'vue'

import { SizeProps } from '../type'
import { ModalUserList } from '../Modal'
export default {
  name: 'IconUserAdd',
  components: { ModalUserList },
  props: {
    iconSize: String,
    iconColor: String,
    ...SizeProps,
    list: Array,
    activelist: Array,
  },
  setup(props) {
    const showModal = ref(false)
    // const thislist = reactive({ list: props.list})
    const thislist = reactive({ list: [
      {key: "1", name: "11", avatar: ''},
      {key: "2", name: "22", avatar: ''},

    ]})
    const thisActivelist = reactive({ list: props.activelist})

    watch(
      props, 
      (newVal) => { 
        if(thislist.list !== newVal.list) thislist.list = newVal.list
        if(thisActivelist.list !== newVal.activelist) thisActivelist.list = newVal.activelist
      }
    )

    function handleAdd() {
      showModal.value = true
    }

    function handleCloseModal() {
      showModal.value = false
    }

    return {
      thislist,
      thisActivelist,
      showModal,
      handleAdd,
      handleCloseModal,
    }
  }
}
</script>

<style scoped>

</style>
