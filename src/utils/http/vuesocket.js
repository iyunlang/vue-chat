import VueSocketIO from 'vue-socket.io'
import SocketIO from 'socket.io-client'

const options = { 
  path: '' 
}; //Options object to pass into SocketIO

const vueSocket = new VueSocketIO({
  debug: true,
  connection: SocketIO('ws://***', options), //options object is Optional
  // vuex: {
  //   store,
  //   actionPrefix: "SOCKET_",
  //   mutationPrefix: "SOCKET_"
  // }
})

export const socket = vueSocket

export function setupSocket(app) {
  app.use(vueSocket)
}