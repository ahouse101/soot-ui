<template>
	<div class="preloader">
		<div class="spinner">Loading...</div>
		<div class="preloader-message">{{ message }}</div>
	</div>
</template>

<script>
import Vue from 'vue';

export default Vue.extend({
	name: 'preloader',
	props: {
		message: {
			type: String,
			default: ''
		}
	},
	data: () => {
		return {};
	},
	computed: {
		
	},
	methods: {
		
	},
	created: function() {
		
	}
});
</script>

<style lang='scss'>
.preloader {
	--size: 100px;
	--thickness: 15px;
	--loader-back-color: rgba(255, 255, 255, 0.2);
	--loader-fore-color: #FFF;
	
	position: absolute;
	height: var(--size);
	top: 0;
	bottom: 0;
	left: 0;
	right: 0;
	margin: auto;
}

.preloader-message {
	position: absolute;
	bottom: calc(-1em - var(--thickness));
	width: 100%;
	left: 0;
	text-align: center;
	color: rgba(255, 255, 255, 0.65);
	text-shadow: 0 0 10px rgba(0, 0, 0, 1);
	font-size: 1.25em;
}

.spinner,
.spinner:after {
	border-radius: 50%;
	width: var(--size);
	height: var(--size);
}
.spinner {
	position: absolute;
	margin: auto;
	top: 0;
	bottom: 0;
	left: 0;
	right: 0;
	overflow: hidden;
	text-indent: 10000em;
	border-top: var(--thickness) solid var(--loader-back-color);
	border-bottom: var(--thickness) solid var(--loader-back-color);
	border-right: var(--thickness) solid var(--loader-back-color);
	border-left: var(--thickness) solid var(--loader-fore-color);
	transform: translateZ(0);
	animation: load 1.1s infinite linear;
	background-color: rgba(0, 0, 0, 0);
	/*box-shadow: 0 0 10px rgba(0, 0, 0, 0.5), 0 0 10px rgba(0, 0, 0, 0.5) inset;*/
}
@keyframes load {
	0% {
		transform: rotate(0deg);
	}
	100% {
		transform: rotate(360deg);
	}
}
</style>