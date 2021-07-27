import { getSocket } from "../utils/http/socket";
import { getUrlParam } from "../utils";

let socket = getSocket()

const userId = getUrlParam("userId")

/**
 * // 设置新信息监听器
 * @param {*} groupList //对话列表
 */
export function noticeGrouplistener(groupList) {
  for(let group of groupList) {
    let group_id = group.group_id
    const _on_name = `noticeGroup_result_${group_id}`
    socket.removeAllListeners(_on_name)
    socket.on(_on_name, function(res){
      let result = JSON.parse(res)
      console.log(result)
    });
  }
}

socket.on(`noticeUser_result_${userId}`, function(res){
  let result = JSON.parse(res)
  console.log(result)
});

socket.on('connect', function(){
  console.log('connect success');
  //获取用户资料
  socket.emit("***", JSON.stringify({
    userId
  }));
});

socket.on(`getUserInfo_result_${userId}`, function(res){
  let result = JSON.parse(res)
  console.log(result)
});

function socketRequest(name, data, filterFun) {
  if(!data) data = {}
  if(!data.userId) data["userId"] = userId
  return new Promise((resolve, reject) => {
    socket.emit(name, JSON.stringify(data));
    let _on_name = `${name}_result_${userId}`
    socket.removeAllListeners(_on_name)
    // console.log(_on_name)
    socket.on(_on_name, function(res){
      res = JSON.parse(res)
      if(filterFun) res = filterFun(res)
      // console.log( _on_name, "==>",  res)
      resolve(res)
    }, function() {
      reject()
    });
  })
}

export function getFriendListApi(data={}) {
  return socketRequest("getFriendList",data, function(res) {
    if(res.code > 0) return []
    return res.result
  })
}
