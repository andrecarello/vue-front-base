import OiIcon from "@/views/_Components/icons/Oi.vue"

export default {
	name: 'HeadersAuth',

	props: {
		title: {
			type: String,
			required: false,
			default: 'VANTAGENS'
		},
		subtitle: {
			type: String,
			required: false,
			default: 'Bem-vindo ao seu canal'
		}
	},

	components: {
		OiIcon
	}
};
