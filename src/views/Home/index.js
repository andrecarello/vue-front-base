// -> vuex
import { mapGetters } 	from 'vuex'

// @ is an alias to /src

export default {
	name: 'Home',
	components: {
	},

	mounted() {
		_.controller('Home').getUsers()
		_.controller('Home').index()
	},

	computed: {
		...mapGetters('UserModel', ['user', 'users']),
	}
}
