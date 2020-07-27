/* eslint-disable no-tabs */
/* eslint-disable indent */
// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'

/* var componente1 = Vue.extend({
 	template: ''
 })
var componente2 = Vue.extend({
	template: '<h3>{{subtitulo}}</h3>',
	data() {
		return {
			subtitulo: 'Listado de Frameworks de javascript'
		}
	}
})
var componente3 = Vue.extend({
	template: '<div><ul><framework v-for="fra in frameworks" :key="fra.id">{{fra.titulo}}</framework></ul></div>',
	data() {
		return {
			frameworks: [
				{
					id: 1,
					titulo: 'Vue.js'
				},
				{
					id: 2,
					titulo: 'Angular'
				},
				{
					id: 3,
					titulo: 'React'
				}
			]
		}
	}
})

Vue.config.productionTip = false
Vue.component('componente-saludo', {
	data() {
		return {
			titulo: 'Introduccion a componentes'
		}
	},
	methods: {
		display() {
			console.log('hola');
		}
	}
})

Vue.component('componente-titulo', componente2)

Vue.component('componente-lista', componente3)

Vue.component('framework', {
	template: '<li><slot></slot></li>'
}) */

/* eslint-disable no-new */
new Vue({
	el: '#app',
	components: { App },
	template: '<App/>'
})
