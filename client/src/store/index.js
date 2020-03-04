import Vue from 'vue'
import Vuex, { Store } from 'vuex'
import Axios from 'axios'
import router from '../router/index'

Vue.use(Vuex)

//Allows axios to work locally or live
let base = window.location.host.includes('localhost') ? '//localhost:3000/' : '/'

let api = Axios.create({
  baseURL: base + "api/",
  timeout: 3000,
  withCredentials: true
})

export default new Vuex.Store({
  state: {
    user: {},
    boards: [],
    activeBoard: {}
  },
  mutations: {
    setUser(state, user) {
      state.user = user
    },
    setBoards(state, boards) {
      state.boards = boards
    },
    setActiveBoard(state, board) {
      state.activeBoard = board
    }
  },
  actions: {
    //#region -- AUTH STUFF --
    setBearer({ }, bearer) {
      api.defaults.headers.authorization = bearer;
    },
    resetBearer() {
      api.defaults.headers.authorization = "";
    },
    async getProfile({ commit }) {
      try {
        let res = await api.get("/profile")
        commit("setUser", res.data)
      } catch (err) {
        console.error(err)
      }
    },
    //#endregion


    //#region -- BOARDS --
    getBoards({ commit, dispatch }) {
      api.get('boards')
        .then(res => {
          commit('setBoards', res.data)
        })
    },
    addBoard({ commit, dispatch }, boardData) {
      api.post('boards', boardData)
        .then(serverBoard => {
          dispatch('getBoards')
        })
    },
    deleteBoardById({ commit, dispatch }, boardId) {
      api.delete("boards/" + boardId)
        .then(thingy => {
          dispatch('getBoards')
        })
    },
    deleteThisBoard2({ commit, dispatch }, boardId) {
      api.delete("boards/" + boardId)
      // .then(thingy => {
      //   dispatch('getBoards')
      router.push({ name: "boards" });
      // })
    },

    async getBoardById({ commit, dispatch }, boardId) {
      // debugger
      try {
        let res = await api.get("boards/" + boardId)
        commit("setActiveBoard", res.data);
        //router.push({ name: "board" });

      } catch (error) {
        console.error(error);
      }
    },



    // async getCarById({ commit, dispatch }, id) {
    //   try {
    //     let res = await _api.get(id);
    //     commit("setActiveCar", res.data.data); 
    //   } catch (error) {
    //     console.error(error);
    //     // NOTE Push changes the route to the provided route by name
    //     router.push({ name: "Home" });
    //   }
    //   //#endregion


    //#region -- LISTS --



    //#endregion
  }
})
