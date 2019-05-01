<template>
	<div class='toolbar'>
		<div class='toolbar-left'>
			<slot name='left'></slot>
		</div>
		<slot></slot>
		<div class='toolbar-right'>
			<slot name='right'></slot>
		</div>
		<div class='toolbar-center'>
			<slot name='center'></slot>
		</div>
	</div>
</template>

<script lang='ts'>
import Vue from 'vue';

export default Vue.extend({
	name: 'toolbar',
	props: {
		
	},
	data: () => {
		return {
			
		};
	},
	computed: {
		
	},
	methods: {
		
	},
	created: function() {
		
	}
});
</script>

<style>
.toolbar {
	--toolbar-height: 38px;
	background: hsla(0, 0%, 0%, 0.2);
	/*background: linear-gradient(rgba(255, 255, 255, 0.1), rgba(0, 0, 0, 0.15));*/
	position: absolute;
	top: 0;
	left: 0;
	right: 0;
	height: var(--toolbar-height);
	border-bottom: 1px solid rgba(0, 0, 0, 0.25);
	box-sizing: content-box;
	justify-content: space-between;
	display: flex;
	z-index: 2000;
}

.toolbar-left {
	display: flex;
	justify-content: flex-start;
	z-index: 2003;
}

.toolbar-right {
	display: flex;
	justify-content: flex-end;
	z-index: 2002;
}

.toolbar-center {
	position: absolute;
	top: 0;
	left: 0;
	right: 0;
	bottom: 0;
	display: flex;
	justify-content: center;
	z-index: 2001;
}
</style>