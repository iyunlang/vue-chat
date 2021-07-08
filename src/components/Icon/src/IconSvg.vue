<template>
    <svg class="icon-svg icon" aria-hidden="true" :style="{width:iconS,height:iconS,fill:color}">
        <use :xlink:href="`#icon-${name}`"></use>
    </svg>
</template>

<script>
import { defineComponent } from 'vue'
import { SizeProps } from '../../type'
export default defineComponent({
  name: 'IconSvg',
  props: {
    size: String,
    name: String,
    color: String,
    ...SizeProps,
  },
  setup(props) {
    let iconS = props.xs ? '20px' : props.sm ? '24px' : props.md ? '30px' : props.bg ? '38px' : props.size
    return {
      iconS
    }
  }
})
</script>

<style scoped>
  .icon {
    width: 28px;
    height: 28px;
  }
</style>
