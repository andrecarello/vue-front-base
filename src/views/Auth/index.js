// @ is an alias to /src
import LayoutContainer from '@/views/_Components/layout/Container/index.vue';

import { Masks } from '@/helpers/Mask';
import { isTestNumber } from "@/helpers/Misc";

export default {
	name: 'Auth',
	data() {
		return {
			msisdn: '',
			pin: '',

			msisdnForm: true,
			pinForm: false,

			// -> helpers
			Masks: Masks,

			// -> loadings
			loading: false,
		};
	},
	mounted() {},
	components: {
		container: LayoutContainer
	},
	methods: {
		toggleLoading () {
			this.loading = !this.loading;
			this.msisdnForm = !this.msisdnForm;
			this.pinForm = !this.pinForm;
		},
		submitMsisdn () {
			const testNumber = isTestNumber(this.msisdn);
			this.loading = !this.loading;

			if (testNumber.status) {
				setTimeout(() => {
					this.toggleLoading()
				}, 3500)
			} else {
				_.controller('Auth').requestPin(
					this.msisdn,
					() => {
						this.toggleLoading()
					},
					(error) => console.log(error)
				)
			}
		},
		submitPin () {
			console.log(_.model('Auth').pin, this.pin)
			if (_.model('Auth').pin === this.pin) {
				_.controller('Auth').setHash();
				this.$router.push({name: 'Home'});
			} else {

			}
		},
		changeMsisdn () {
			this.msisdnForm = true;
			this.pinForm = false;
		}
	}
};
