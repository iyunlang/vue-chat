import { reactive, onMounted, onUnmounted, toRefs } from 'vue';

export function useMouse(){
  const state = reactive({x:0,y:0});
  const update = e=>{
    state.x = e.pageX;
    state.y = e.pageY;
  }
  onMounted(()=>{
    window.addEventListener('mousemove',update);
  })
  onUnmounted(()=>{
    window.removeEventListener('mousemove',update);
  })
  
  return toRefs(state);
}

export function getClient(el = document) {

  return {
    x: el.getBoundingClientRect().left,
    y: el.getBoundingClientRect().top,
    w: el.offsetWidth,
    h: el.offsetHeight,

  }
}

export function getClassArray(el) {
  let arr = el.className.split(" ")
  arr = arr.filter(item=>!item?false: item)
  return arr
}

export function isElClassName(el, classname) {
  let arr = getClassArray(el)
  return arr.indexOf(classname) > -1
}

export function findParents(el, classname, deep) {
  let parent = el.parentNode
  deep = deep || 100000
  while (!isElClassName(parent, classname)) {
    parent = parent.parentNode
    deep --;
    if(deep < 0) {
      parent = null
      break;
    }
  }
  return parent;
}

export function getDistanceFromtarget(el, classname, deep) {
  let parent = el.parentNode
  deep = deep || 100000
  let result = { x: el.offsetLeft, y: el.offsetTop }
  while (!isElClassName(parent, classname)) {
    console.log(parent.offsetLeft, parent.offsetTop, parent)
    result.x += parent.offsetLeft
    result.y += parent.offsetTop
    parent = parent.parentNode
    deep --;
    if(deep < 0) {
      result = null
      break;
    }
  }
  return result;
}

export function getMousePos(event) {
  let offset = -8
  let el = event.target
  let parent = findParents(el, "chat-container")
  if(!parent) return null
  let parentC = getClient(parent)
  let elC = getClient(el)
  // // let e = event || window.event;
  return {
    x:elC.x - parentC.x + elC.w + offset,
    y:elC.y - parentC.y + elC.h + offset,
  }
}