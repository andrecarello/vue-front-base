// -> vuex
import { mapGetters } from 'vuex'

// @ is an alias to /src
import LayoutContainer from "@/components/layout/Container";
import HeadersAuth from '@/components/headers/Auth';

export default {
	name: 'Home',
	components: {
		container: LayoutContainer,
		HeadersAuth
	},

	mounted() {
		_.controller('Home').index()
	},

	computed: {
		...mapGetters('UserModel', ['user']),
	}
};
