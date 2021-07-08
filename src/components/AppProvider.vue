<template>
  <slot />
</template>

<script>
export default {
  name: 'AppProvider',
  props: {
    prefixCls: {
        type: String,
        default: "chat",
    },
  }
}
</script>
