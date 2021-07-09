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
    x: el.offsetLeft,
    y: el.offsetTop,
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

export function getMousePos(event) {
  let el = event.target
  let parent = findParents(el, "chat-container")
  if(!parent) return null
  let client = getClient(parent)
  let tar = getClient(el)
  let e = event || window.event;
  console.log(5, tar, client, e.clientX)
  return {'x':el.clientLeft - client.x,'y':el.clientTop - client.y}
  // return {'x':tar.x - client.x,'y':tar.y - client.y}
}