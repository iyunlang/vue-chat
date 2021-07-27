<template>
    <icon-svg @click="handleAdd" name="tubiaozhizuomoban" :size="iconSize" :color="iconColor" />
    <modal-user-list :show="showModal" :list="thislist.list" :activelist="thisActiveIds.list" @close="handleCloseModal" />
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
    ...ModalUserList.props,
  },
  setup(props) {
    const showModal = ref(false)
    const thislist = reactive({ list: props.list})
    const thisActiveIds = reactive({ list: props.activeIds})

    watch(
      props, 
      (newVal) => { 
        if(thislist.list !== newVal.list) thislist.list = newVal.list
        if(thisActiveIds.list !== newVal.activeIds) thisActiveIds.list = newVal.activeIds
      }
    )

    function handleAdd() {
      showModal.value = true
    }

    function handleCloseModal() {
      thislist.list = []
      thisActiveIds.list = []
      showModal.value = false
    }

    return {
      thislist,
      thisActiveIds,
      showModal,
      handleAdd,
      handleCloseModal,
    }
  }
}
</script>

<style scoped>

</style>
