<template>
	<div class='demo'>
		<toolbar>
			<toolbar-button slot='left' title='Toolbar-specific button component'>Button</toolbar-button>
			<h3 class='header' slot='center'>Soot Demo</h3>
			<toolbar-dropdown slot='right' :choices='[ "Option 1", "Option 2" ]' title='Toolbar-specific dropdown component'>Dropdown</toolbar-dropdown>
		</toolbar>
		<split-container style='margin-top: 38px'>
			<div class='sidebar' slot='split1'>
				<p>The demo is wrapped in a SplitContainer. You can move the split point to resize the panels, or collapse the left panel to close this message.</p>
			</div>
			<div slot='split2' style='padding-top: 10px'>
				<div style="position: relative; width: 200px; height: 200px; text-align: center">
					Preloader
					<preloader></preloader>
				</div>
			</div>
		</split-container>
	</div>
</template>

<script lang="ts">
import Vue from 'vue';
import Toolbar from './Toolbar.vue';
import ToolbarButton from './ToolbarButton.vue';
import ToolbarDropdown from './ToolbarDropdown.vue';
import SplitContainer from './SplitContainer.vue';
import Preloader from './Preloader.vue';

export default Vue.extend({
	name: 'Demo',
	components: {
		Toolbar,
		ToolbarButton,
		ToolbarDropdown,
		SplitContainer,
		Preloader
	}
});
</script>

<style lang="scss">
@import '../base';

*, *::after, *::before {
	margin: 0;
	padding: 0;
}

body {
	background: var(--base-bg-color);
	color: #FFF;
	font-family: -apple-system, system-ui, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;
	font-size: 1rem;
	line-height: 1.2rem;
}

.demo {
	height: 100vh;
}

.sidebar {
	padding: 25px;
	text-align: center;
	display: flex;
	align-items: center;
	height: 100%;
}

.header {
	text-align: center;
	line-height: 38px;
}
</style>
