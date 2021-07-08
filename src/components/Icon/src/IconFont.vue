<template>
    <span :style="{fontSize: iconS, color}" class="icon-font iconfont" :class="`icon-${name}`"></span>
</template>

<script>
import { SizeProps } from '../../type'
export default {
  name: 'IconFont',
  props: {
    size: String,
    name: String,
    color: String,
    ...SizeProps,
  },
  setup(props) {
    let iconS = props.xs ? '12px' : props.sm ? '14px' : props.md ? '16px' : props.bg ? '18px' : props.size

    return {
      iconS
    }
  }
}
</script>

<style scoped>

</style>
