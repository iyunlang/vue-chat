import { VuexModule, Module, getModule, Mutation, Action } from 'vuex-module-decorators';
import { hotModuleUnregisterModule } from '../../utils/helper/vuexHelper';

import store from '../index'
import { Notice } from '../../components/Notice'

const NAME = 'app'
hotModuleUnregisterModule(NAME);
@Module({ namespaced: true, name: NAME, dynamic: true, store })
class App extends VuexModule {

  currentNavState = "msg"

  contentTypeState = "msg"
  
  isConnectedState = false

  isMobileState = false

  leftIsOpenState = true

  newUserNumState = 0;

  newMsgNumState = 0
 
  get getNewMsgNumState() {
    return this.newMsgNumState
  }

  get getNewUserNumState() {
    return this.newUserNumState
  }

  get getContentTypeState() {
    return this.contentTypeState
  }

  get getIsConnectedState() {
    return this.isConnectedState
  }

  get getLeftIsOpenState() {
    return this.leftIsOpenState
  }

  get getIsMobileState() {
    return this.isMobileState
  }
  
  get getCurrentNavState() {
    return this.currentNavState
  }

  @Mutation
  commitNewMsgNumState(val) {
    this.newMsgNumState = val
  }

  @Mutation
  commitNewUserNumState(val) {
    this.newUserNumState = val
  }

  @Mutation
  commitContentTypeState(val) {
    this.contentTypeState = val
  }

  @Mutation
  commitIsConnectedState(val) {
    this.isConnectedState = val
  }

  @Mutation
  commitLeftIsOpenState(val) {
    this.leftIsOpenState = val
  }

  @Mutation
  commitIsMobileState(val) {
    this.isMobileState = val
  }

  @Mutation
  commitCurrentNavState(val) {
    this.contentTypeState = val
    this.currentNavState = val
  }

  @Action
  testAction() {
    Notice("测试")
  }
}

export const appStore = getModule(App);