<script>
  import { fade } from "svelte/transition";
  // out:fade={{ x: 5, duration: 500 }}
  export let pathname = "";
</script>

{#key pathname}
  <div in:fade={{ x: 5, duration: 500, delay: 1000 }} out:fade>
    <slot />
  </div>
{/key}
