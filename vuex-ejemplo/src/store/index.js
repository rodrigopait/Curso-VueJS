import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
	state: {
		msg: 'Vuex desde cero.',
		nombre: 'Pai',
		apellido: 'Pait',
		amigos: []
	},
	mutations: {
		agregarAmigo(state, amigo) {
			state.amigos = [amigo, ...state.amigos];
		},
		eliminarAmigo(state, index) {
			state.amigos.splice(index, 1);
		}
	},
	actions: {
		agregarAmigoAction(context, amigo) {
			context.commit('agregarAmigo', amigo);
		},
		eliminarAmigoAction(context, index) {
			context.commit('eliminarAmigo', index);
		}
	},
	modules: {
	},
	getters: {
		mensaje(state) {
			return state.msg;
		},
		nombreCompleto(state) {
			return `${state.nombre} ${state.apellido}`;
		}
	}
})
