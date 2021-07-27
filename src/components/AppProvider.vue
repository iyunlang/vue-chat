<template>
  <slot />
</template>

<script>
import { onBeforeMount } from 'vue'
import { useApp } from '../hooks/useApp'
export default {
  name: 'AppProvider',
  props: {
    prefixCls: {
        type: String,
        default: "chat",
    },
  },
  setup() {
    const { resetWin } = useApp()

    onBeforeMount(function() {
      resetWin()
    })

    window.onresize = resetWin
  }
}
</script>
