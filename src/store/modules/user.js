import { VuexModule, Module, getModule, Mutation, Action } from 'vuex-module-decorators';
import { hotModuleUnregisterModule } from '../../utils/helper/vuexHelper';

import store from '../index'

const NAME = 'user'
hotModuleUnregisterModule(NAME);
@Module({ namespaced: true, name: NAME, dynamic: true, store })
class User extends VuexModule {

  userInfoState = {};

  tokenState = '';

  friendListState = [
    {id: "1", name: "11", avatar: ''},
    {id: "2", name: "22", avatar: ''},
  ];

  searchFriendListState = [];

  newFriendListState = [];

  currentUserState = {};

  get getNewFriendListState() {
    return this.newFriendListState
  }

  get getCurrentUserState() {
    return this.currentUserState
  }

  get getTokenState() {
    return this.tokenState
  }

  get getUserInfoState() {
    return this.userInfoState
  }

  get getFriendListState() {
    return this.friendListState
  }

  get getSearchFriendListState() {
    return this.searchFriendListState
  }

  @Mutation
  commitNewFriendListState(list) {
    this.newFriendListState = list
  }

  @Mutation
  commitCurrentUserState(user) {
    this.currentUserState = user
  }

  @Mutation
  commitFriendListState(list) {
    this.friendListState = list
  }
  @Mutation
  commitSearchFriendListState(list) {
    this.searchFriendListState = list
  }
  @Mutation
  commitTokenState(token) {
    this.tokenState = token
  }
  @Mutation
  commitUserInfoState(userinfo) {
    this.userInfoState = userinfo
  }

  @Action
  testAction() {
  }
}

export const userStore = getModule(User);