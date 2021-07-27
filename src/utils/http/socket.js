import io from "socket.io-client";

let isConnect = false

let _socket = null

export function setupSocket() {
  if(isConnect && !!_socket) return _socket
  isConnect = true
  _socket = io("wss://***", {
    transports:['websocket']
  });
  return _socket
}

export function getSocket() {
  if(isConnect && !!_socket) return _socket
  return setupSocket()
}
