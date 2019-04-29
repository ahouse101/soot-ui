import Vue from 'vue';
import { Demo } from './main';

let v = new Vue({
	el: '#app',
	template: '<demo />',
	data: { },
	components: {
		'demo': Demo
	}
});