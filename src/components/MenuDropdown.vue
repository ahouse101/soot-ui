<template>
	<div class="menu-dropdown">
		<button :disabled='choices.length === 0' class='menu-dropdown-top' :title='title' @click='rollout'>{{ isChoiceSelected ? choices[selectedIndex] : unselectedText }}</button>
		<div class='menu-dropdown-rollout' v-if="isRolledOut">
			<button v-for="(choice, i) in choices" :key='i' :data-index='i' @click='selectChoice'>{{ choice }}</button>
		</div>
	</div>
</template>

<script>
module.exports = {
	name: 'menu-dropdown',
	props: {
		unselectedText: {
			type: String
		},
		choices: {
			type: Array,
			default: () => []
		},
		selectedIndex: {
			type: Number,
			default: null
		},
		title: {
			type: String
		}
	},
	data: () => {
		return {
			isRolledOut: false
		};
	},
	computed: {
		isChoiceSelected: function() {
			return this.choices.length > 0 && this.selectedIndex !== null && this.selectedIndex < this.choices.length;
		}
	},
	methods: {
		rollout: function() {
			this.isRolledOut = !this.isRolledOut;
		},
		selectChoice: function(ev) {
			this.isRolledOut = false;
			this.$emit('choose', Number(ev.target.attributes['data-index'].value));
		}
	},
	created: function() {
		
	}
}
</script>

<style>

</style>