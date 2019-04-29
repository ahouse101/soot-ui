<template>
	<div class="app-menu">
		<div class="menu-left">
			<slot name="left"></slot>
		</div>
		<slot></slot>
		<div class="menu-right">
			<slot name="right"></slot>
		</div>
	</div>
</template>

<script>
module.exports = {
	name: 'app-menu',
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
}
</script>

<style>
.app-menu {
	background: hsla(0, 0%, 0%, 0.2);
	/*background: linear-gradient(rgba(255, 255, 255, 0.1), rgba(0, 0, 0, 0.15));*/
	position: absolute;
	top: 0;
	left: 0;
	right: 0;
	height: var(--menu-height);
	border-bottom: 1px solid rgba(0, 0, 0, 0.25);
	box-sizing: content-box;
	justify-content: space-between;
	display: flex;
}

.menu-left {
	display: flex;
	justify-content: flex-start;
}

.menu-right {
	display: flex;
	justify-content: flex-end;
}

.menu-button {
	display: block;
	float: left;
	height: var(--menu-height);
	border: none;
	background-color: rgba(0, 0, 0, 0);
	color: rgba(255, 255, 255, 0.65);
	padding: 0 10px;
	transition: background-color var(--base-duration);
}

.menu-button[disabled], .menu-button[disabled]:hover {
	color: hsl(0, 0%, 25%);
	text-shadow: none;
}

.menu-button .material-icons {
	line-height: var(--menu-height);
}

.menu-button:hover {
	color: rgba(255, 255, 255, 1);
	text-shadow: 3px 3px rgba(0, 0, 0, 1);
}

.menu-button:active {
	color: rgba(200, 200, 200, 1);
}

.menu-button:focus {
	background-color: rgba(0, 0, 0, 0.2);
	outline: none;
}

.menu-dropdown-top {
	padding: 0 20px;
	display: block;
	height: var(--menu-height);
	border: none;
	color: rgba(255, 255, 255, 0.75);
	background-color: rgba(0, 0, 0, 0);
	font-size: calc(var(--menu-height) / 2.5);
}

.menu-dropdown-top:enabled:hover {
	background-color: rgba(0, 0, 0, 0.25);
	color: white;
}

.menu-dropdown-top:active {
	background-color: rgba(0, 0, 0, 1);
}

.menu-dropdown-top:focus {
	background-color: rgba(0, 0, 0, 0.2);
	outline: none;
}

.menu-dropdown-rollout {
	display: flex;
	flex-direction: column;
}

.menu-dropdown-rollout button {
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

.menu-dropdown-rollout button:hover {
	background: hsla(0, 0%, 15%, 1);
}

.menu-dropdown-rollout button:active {
	background: hsla(0, 0%, 0%, 1);
}

.menu-dropdown-rollout button:focus {
	background: hsla(0, 0%, 15%, 1);
	outline: none;
}
</style>