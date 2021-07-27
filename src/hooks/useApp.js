import { computed, unref } from 'vue';

import { appStore } from '../store/modules/app';
import { checkIsMobile } from '../utils';

const getIsMobile = computed(() => unref(appStore.getIsMobileState))
const getIsConnected = computed(() => unref(appStore.getIsConnectedState))
const getLeftIsOpen = computed(() => unref(appStore.getLeftIsOpenState))

function setIsMobile(val) {
    appStore.commitIsMobileState(val)
}
function setIsConnected(val) {
    appStore.commitIsConnectedState(val)
}
function setLeftIsOpen(val) {
    appStore.commitLeftIsOpenState(val)
}
function resetWin() {
    checkIsMobile((isMobile) => {
        console.log(1, isMobile)
      if(isMobile !== unref(appStore.getIsMobileState)) {
        setIsMobile(isMobile)
      }
    })
}
export function useApp() {
    return {
        getIsConnected,
        getIsMobile,
        getLeftIsOpen,
        setIsMobile,
        setIsConnected,
        setLeftIsOpen,
        resetWin,
    }
}