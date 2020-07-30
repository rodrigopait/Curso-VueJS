import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Contacto from '../views/Contacto.vue'
import Usuarios from '../views/Usuarios.vue'
import Login from '../views/Login.vue'
import SingUp from '../views/SingUp.vue'
import Productos from '../views/Productos/Index.vue'
import Detalle from '../views/Productos/Detalle.vue'

Vue.use(VueRouter)

const routes = [
	{
		path: '/',
		name: 'Home',
		component: Home
	},
	{
		path: '/about',
		name: 'About',
		component: () => import('../views/About.vue')
	},
	{
		path: '/contacto',
		name: 'Contacto',
		component: Contacto
	},
	{
		path: '/usuarios/:id',
		name: 'Usuarios',
		component: Usuarios
	},
	{
		path: '/login',
		name: 'Login',
		component: Login
	},
	{
		path: '/singup',
		name: 'SingUp',
		component: SingUp
	},
	{
		path: '/registrarse',
		redirect: '/singup'
	},
	{
		path: '/productos',
		name: 'Productos',
		component: Productos
	},
	{
		path: '/producto-detalle/:id',
		name: 'producto',
		component: Detalle
	}

]

const router = new VueRouter({
	mode: 'history',
	base: process.env.BASE_URL,
	routes
})

export default router
