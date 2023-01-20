<script>
  import { fade } from "svelte/transition";
</script>

<article
  in:fade={{ x: 5, duration: 2000 }}
  class="container-xl mx-auto grid-container"
>
  <slot />
</article>

<style>
  .grid-container {
    display: grid;
    grid-template-columns: 60% 40%;
    gap: 0.5rem;
  }

  @media screen and (max-width: 768px) {
    .grid-container {
      display: grid;
      grid-gap: 0.5rem;
      grid-template-columns: repeat(1, minmax(0, 1fr));
    }
  }
</style>
