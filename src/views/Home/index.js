// -> vuex
import { mapGetters } 	from 'vuex'

// @ is an alias to /src
import LayoutContainer 	from "@/components/layout/Container"
import NavbarDefault 	from "@/components/navbar/Index.vue"
import LayoutCard 		from "@/components/layout/Card"

export default {
	name: 'Home',
	components: {
		container: 	LayoutContainer,
		navbar: 	NavbarDefault,
		card: 		LayoutCard
	},

	mounted() {
		_.controller('Home').getUsers()
		_.controller('Home').index()
	},

	computed: {
		...mapGetters('UserModel', ['user', 'users']),
	}
}
