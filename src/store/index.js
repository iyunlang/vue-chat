import { createStore } from 'vuex'

const isDev = true

const store = createStore({
  strict: isDev,
})

export function setupStore(app) {
  app.use(store)
}

export default store