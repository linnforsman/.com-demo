<script>
  import NavListItem from "$lib/components/NavListItem.svelte";
  import { fade } from "svelte/transition";
  export let open = false;
</script>

{#if open}
  <aside in:fade out:fade class:open>
    <NavListItem />
  </aside>
{/if}

<style>
  aside {
    right: -100%;
    position: fixed;
    width: 100%;
    height: 100%;
    transition: right 0.5s ease-in-out;
  }

  .open {
    right: 0;
  }
</style>
