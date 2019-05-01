<template>
	<button class="toolbar-button"><!-- TODO: Add icon option <i class="material-icons">library_add</i>--><slot></slot></button>
</template>

<script>
module.exports = {
	name: 'toolbar-button',
	props: { },
	data: () => {
		return { };
	},
	computed: { },
	methods: { },
	created: () => { }
}
</script>

<style>
.toolbar-button {
	display: block;
	float: left;
	height: var(--toolbar-height);
	border: none;
	background-color: rgba(0, 0, 0, 0);
	color: rgba(255, 255, 255, 0.65);
	padding: 0 10px;
	transition: background-color var(--base-duration);
	font-size: 14px;
}

.toolbar-button[disabled], .toolbar-button[disabled]:hover {
	color: hsl(0, 0%, 25%);
	text-shadow: none;
}

.toolbar-button .material-icons {
	line-height: var(--toolbar-height);
}

.toolbar-button:hover {
	color: rgba(255, 255, 255, 1);
	text-shadow: 3px 3px rgba(0, 0, 0, 1);
	background-color: rgba(0, 0, 0, 0.5);
}

.toolbar-button:active {
	color: rgba(200, 200, 200, 1);
}

.toolbar-button:focus {
	background-color: rgba(0, 0, 0, 0.8);
	outline: none;
}
</style>