<template>
  <div class="card-user">
    <div class="check" v-show="checkable">
      <input type="checkbox" name="person" :value="isChecked" v-model="isChecked" @change="handleChange">
    </div>
    <img-avatar imgClass="card-user-avatar" :hasInfo="hasInfo" size="36px" :src="src"/>
    <span class="card-user-name">{{name}}</span>
  </div>
</template>

<script>
import { defineComponent, watch, ref, unref } from 'vue'

export default defineComponent({
  name: 'CardUser',
  components: {  },
  props: {
    checkable: {
      type: Boolean,
      default: false,
    },
    checked: {
      type: Boolean,
      default: false,
    },
    index: [String,Number],
    value: [String,Number],
    hasInfo: {
      type: Boolean,
      default: false,
    },
    src: {
      type: String,
      default: "",
    },
    name: String,
  },
  emits: ["change"],
  setup(props, { emit }) {

    const isChecked = ref(props.checked)

    watch(
      props, 
      (newVal) => { 
        if(isChecked.value !== newVal.checked) isChecked.value = newVal.checked
        // console.log(isChecked.value, newVal.name)
      }
    )

    function handleChange() {
      if (props.checkable) {
        emit("change", props.index, unref(isChecked))
      }
    }

    return {
      isChecked,
      handleChange,
    }
  }
})
</script>

<style scoped>
  .card-user {
    line-height: 36px;
    font-size: 15px;
    padding: 10px 0;
    overflow: hidden;
  }
  .card-user >>> .card-user-avatar {
    float: left;
    display: block;
    margin-right: 8px;
  }
  .check {
    float: left;
    margin-right: 4px;
  }
</style>
