import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const state = {
	userlist: [
		{
			username: 'admin1',
			password: 'admin1'
		},
		{
			username: '123456',
			password: '123456'
		}
	],
	postlist: [
		{
			username: 'James',
			text: 'i am the KingJames ! ALL IN !!!'
		},
		{
			username: 'Kobe',
			text: 'i am the Kobe ! Do you love me ?'
		},
		{
			username: 'Wade',
			text: 'i am the Wade ! This is my HOUSE !'
		}
	],
	onlineUser: {
		username: '',
		password: ''
	}
}

const mutations = {

	SET_ONLINEUSER (state, user) {
		state.onlineUser = user
	},

	ADD_POST (state, post) {
		state.postlist.push(post)
	},

	ADD_USER (state, user) {
		state.userlist.push(user)
	}
}

export default new Vuex.Store({
	state,
	mutations
})