import { VuexModule, Module, getModule, Mutation, Action } from 'vuex-module-decorators';
import { hotModuleUnregisterModule } from '../../utils/helper/vuexHelper';

import store from '../index'

// function getCache(key) {
//   function fn() {

//   }
//   return fn(key);
// }

// function setCache(key, info) {
//   if (!info) return;
//   setLocal(key, info, true);
//   setSession(key, info, true);
// }

const NAME = 'chat'
hotModuleUnregisterModule(NAME);
@Module({ namespaced: true, name: NAME, dynamic: true, store })
class Chat extends VuexModule {

  groupListState = []

  searchGroupListState = []

  newMsgState = {}

  currentChatState = {}

  chatMsgListState = {}

  viewState = false //浏览

  get getSearchGroupListState() {
    return this.searchGroupListState
  }

  get getGroupListState() {
    return this.groupListState
  }

  get getViewState() {
    return this.viewState
  }

  get getNewMsgState() {
    return this.newMsgState
  }

  get getChatMsgListState() {
    let group_id = this.currentChatState.group_id
    if(!group_id) return []
    return this.chatMsgListState[group_id]
  }

  get getCurrentChatState() {
    return this.currentChatState
  }

  @Mutation
  commitView(val) {
    this.viewState = val
  }

  @Mutation
  commitChatMsgListState(list) {
    const group_id = this.currentChatState.group_id
    if(!group_id ) return
    if(!this.chatMsgListState[group_id]) this.chatMsgListState[group_id] = []
    this.chatMsgListState[group_id] = list
  }

  @Mutation
  commitCurrentChatState(val) {
    this.currentChatState = val
  }

  @Mutation
  commitGroupListState(list) {
    this.groupListState = list
  }
  @Mutation
  commitSearchGroupListState(list) {
    this.searchGroupListState = list
  }

  @Mutation
  commitNewMsgState(obj) {
    this.newMsgState = obj
  }

  @Action
  testAction() {
  }
}

export const chatStore = getModule(Chat);