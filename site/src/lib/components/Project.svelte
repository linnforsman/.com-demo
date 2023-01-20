<script>
  import { fade } from "svelte/transition";
</script>

<article in:fade={{ x: 5, duration: 2000 }} class="container-2xl mx-auto">
  <slot />
</article>
