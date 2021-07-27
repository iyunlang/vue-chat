import { computed, unref } from 'vue';

import { userStore } from '../store/modules/user';

const getUserId = computed(() => unref(userStore.getUserInfoState)?.userId)
const getUserInfo = computed(() => unref(userStore.getUserInfoState))
const getCurrentUser = computed(() => unref(userStore.getCurrentUserState))
const getFriendList = computed(() => unref(userStore.getFriendListState))
const getSearchFriendList = computed(() => unref(userStore.getSearchFriendListState))
const getNewFriendList = computed(() => unref(userStore.getNewFriendListState))
function setCurrentUser(user) {
    userStore.commitCurrentUserState(user)
}


function setNewFriendList(list) {
    userStore.commitNewFriendListState(list)
}

function userInfo(userId, cb) {
    const userinfo = userStore.userInfoAction(userId)
    if(userinfo) {
        cb && cb(userinfo)
    }
}

export function useUser() {
    return {
        getNewFriendList,
        getUserId,
        getUserInfo,
        getFriendList,
        getCurrentUser,
        getSearchFriendList,
        setCurrentUser,
        setNewFriendList,
        userInfo,
    }
}