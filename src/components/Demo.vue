<template>
  <div class='demo'>
    <split-container>
      <div class='sidebar' slot='split1'>
        <p>The demo is wrapped in a SplitContainer. You can move the split point to resize the panels, or collapse the left panel to close this message.</p>
      </div>
      <div  slot='split2'>
        <h3 class='header'>Soot Demo</h3>
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
import SplitContainer from './SplitContainer.vue';
import Preloader from './Preloader.vue';

export default Vue.extend({
  name: 'Demo',
  components: {
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

.demo {
  height: 100vh;
}

body {
  background: var(--base-bg-color);
  color: #FFF;
  font-family: -apple-system, system-ui, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;
  font-size: 1rem;
  line-height: 1.2rem;
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
  padding: 25px 0;
}
</style>
