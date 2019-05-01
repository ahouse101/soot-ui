<template>
	<div class="split-container" @mousemove="resize" @mouseleave="stopResizing" :style="style">
		<div class="split1" v-show="!isCollapsed">
			<slot name="split1">Split 1</slot>
		</div>
		<div class="split2">
			<slot name="split2">Split 2</slot>
		</div>
		<div class="split-controls" @mouseenter="startHover" @mouseleave="stopHover">
			<div class="toggle-button"
				@click="toggleCollapse"
				:style="toggleButtonStyle">
				<font-awesome-icon :icon="toggleIcon"></font-awesome-icon>
			</div>
			<div class="splitter"
				@mousedown="startResizing"
				@mouseup="stopResizing"
				:style="splitterStyle"></div>
		</div>
	</div>
</template>

<script>
import Vue from 'vue';
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { faChevronRight, faChevronLeft } from '@fortawesome/free-solid-svg-icons';

library.add(faChevronLeft, faChevronRight);

export default Vue.extend({
	name: 'split-container',
	components: {
		FontAwesomeIcon
	},
	props: {
		initialSplit: {
			type: Number,
			default: 200
		},
		collapsed: {
			type: Boolean,
			default: false
			
		},
		splitterWidth: {
			type: Number,
			default: 4
		}
	},
	data: function() {
		return {
			isResizing: false,
			isCollapsed: this.collapsed,
			splitPosition: this.initialSplit,
			hoverTimeout: null
		};
	},
	watch: {
		collapsed: function() {
			this.isCollapsed = this.collapsed;
		}
	},
	computed: {
		style: function() {
			let style = { "--split": (this.isCollapsed ? 0 : this.splitPosition) + 'px' };
			if (this.isResizing) style['--position-duration'] = '0s';
			return style;
		},
		splitterStyle: function() {
			let style = {};
			if (this.isResizing) style.opacity = 0.5;
			return style;
		},
		toggleButtonStyle: function() {
			let style = {};
			if (this.isResizing) style.opacity = 0;
			return style;
		},
		toggleIcon: function() {
			return this.isCollapsed ? 'chevron-right' : 'chevron-left';
		}
	},
	methods: {
		startResizing: function(e) {
			if (!this.isCollapsed) this.isResizing = true;
		},
		resize: function(e) {
			if (this.isResizing) {
				e.preventDefault();
				this.splitPosition = e.clientX - this.splitterWidth / 2;
			}
		},
		stopResizing: function(e) {
			this.isResizing = false;
		},
		startHover: function(e) {
			clearTimeout(this.hoverTimeout);
			this.$el.querySelector('.split-controls').classList.add('hover');
		},
		stopHover: function(e) {
			this.hoverTimeout = setTimeout(() => {
				this.$el.querySelector('.split-controls').classList.remove('hover');
			}, 200);
		},
		toggleCollapse: function() {
			this.isCollapsed = !this.isCollapsed;
		}
	},
	created: function() {
		
	}
});
</script>

<style>
.split-container {
	--splitter-color: var(--divider-color);
	--splitter-hover-color: #153e59;
	--border-width: 1px;
	--splitter-width: 5px;
	--split: 200px;
	--default-backcolor: var(--base-bg-color);
	--position-duration: var(--base-duration);
	
	position: relative;
	height: 100%;
}

.split1 {
	position: absolute;
	left: 0;
	top: 0;
	bottom: 0;
	width: var(--split);
	z-index: 1020;
	overflow: hidden;
	background: var(--default-backcolor);
}

.split2 {
	position: absolute;
	left: calc(var(--split) + var(--splitter-width));
	right: 0;
	top: 0;
	bottom: 0;
	background: var(--default-backcolor);
}

.split-controls .toggle-button,
.split-controls .splitter {
	opacity: 1;
}

.split-controls.hover .toggle-button,
.split-controls.hover .splitter {
	opacity: 1;
	background-color: var(--splitter-hover-color);
}

.splitter {
	box-sizing: border-box;
	position: absolute;
	top: 0;
	bottom: 0;
	left: var(--split);
	width: var(--splitter-width);
	z-index: 1000;
	cursor: col-resize;
	border-left: var(--border-width) solid var(--splitter-color);
	background-color: rgba(0, 0, 0, 0);
	transition: background-color var(--base-duration),
		opacity var(--base-duration),
		border var(--base-duration);
}

.split-controls.hover .splitter {
	border-left: var(--border-width) solid var(--splitter-hover-color);
}

.toggle-button {
	--height: 48px;
	position: absolute;
	height: var(--height);
	line-height: var(--height);
	width: calc(var(--height) / 2);
	top: calc(50% - var(--height));
	border-top-right-radius: calc(var(--height) / 2);
	border-bottom-right-radius: calc(var(--height) / 2);
	background-color: var(--splitter-color);
	color: white;
	cursor: pointer;
	z-index: 990;
	box-shadow: 0 0 10px rgba(0, 0, 0, 0.25);
	transition: background-color var(--base-duration),
		opacity var(--base-duration),
		left var(--position-duration),
		box-shadow var(--position-duration);
}

.toggle-button:hover {
	box-shadow: 0 0 15px rgba(0, 0, 0, 0.5);
}

.toggle-button svg {
	padding-left: 3px;
}

.split-controls .toggle-button {
	left: calc(var(--split) - var(--height) / 2);
}

.split-controls.hover .toggle-button {
	left: calc(var(--split) + var(--splitter-width));
}
</style>