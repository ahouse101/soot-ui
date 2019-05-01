<template>
	<div class="toolbar-dropdown">
		<button class='toolbar-dropdown-top' :disabled='choices.length === 0' :title='title' @click='rollout'>
			<template v-if='isChoiceSelected'>{{ choices[selectedIndex] }}</template>
			<slot v-else></slot>
		</button>
		<div class='toolbar-dropdown-rollout' v-if="isRolledOut">
			<button v-for="(choice, i) in choices" :key='i' :data-index='i' @click='selectChoice'>{{ choice }}</button>
		</div>
	</div>
</template>

<script>
import Vue from 'vue';

export default Vue.extend({
	name: 'toolbar-dropdown',
	props: {
		unselectedText: {
			type: String
		},
		choices: {
			type: Array,
			default: () => []
		},
		initialSelection: {
			type: Number,
			default: null
		},
		title: {
			type: String
		}
	},
	data: function() {
		return {
			selectedIndex: this.initialSelection,
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
			let i = Number(ev.target.attributes['data-index'].value);
			this.selectedIndex = i;
			this.isRolledOut = false;
			this.$emit('select', i);
		}
	},
	created: function() { }
});
</script>

<style>
.toolbar-dropdown-top {
	padding: 0 20px;
	display: block;
	height: var(--toolbar-height);
	line-height: var(--toolbar-height);
	border: none;
	color: rgba(255, 255, 255, 0.75);
	background-color: rgba(0, 0, 0, 0);
	font-size: 14px;
}

.toolbar-dropdown-top:enabled:hover {
	background-color: rgba(0, 0, 0, 0.5);
	color: white;
}

.toolbar-dropdown-top:active {
	background-color: rgba(0, 0, 0, 1);
}

.toolbar-dropdown-top:focus {
	background-color: rgba(0, 0, 0, 0.2);
	outline: none;
}

.toolbar-dropdown-rollout {
	display: flex;
	flex-direction: column;
}

.toolbar-dropdown-rollout button {
	background: hsla(0, 0%, 10%, 1);
	border: none;
	border-bottom: 1px solid rgba(0, 0, 0, 0.5);
	border-right: 1px solid rgba(0, 0, 0, 0.5);
	color: white;
	padding: 10px 20px;
	font-size: 0.9em;
	text-align: left;
	z-index: 1000;
}

.toolbar-dropdown-rollout button:hover {
	background: hsla(0, 0%, 15%, 1);
}

.toolbar-dropdown-rollout button:active {
	background: hsla(0, 0%, 0%, 1);
}

.toolbar-dropdown-rollout button:focus {
	background: hsla(0, 0%, 15%, 1);
	outline: none;
}
</style>