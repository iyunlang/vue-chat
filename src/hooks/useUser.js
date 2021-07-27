import { computed, unref } from 'vue';

import { userStore } from '../store/modules/user';

const getCurrentUser = computed(() => unref(userStore.getCurrentUserState))
const getFriendList = computed(() => unref(userStore.getFriendListState))
const getSearchFriendList = computed(() => unref(userStore.getSearchFriendListState))
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
        getFriendList,
        getCurrentUser,
        getSearchFriendList,
        setCurrentUser,
        setNewFriendList,
        userInfo,
    }
}