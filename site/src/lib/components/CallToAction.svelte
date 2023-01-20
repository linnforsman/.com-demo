<script>
  import Button from "$lib/components/Button.svelte";
  import { page } from "$app/stores";

  const cta = [
    // { title: "Contact" },
    { title: "Services", path: "site/service" },
    //   { title: "Portfolio", path: "site/project" },
    { title: "About", path: "site/about" },
    // { title: "Publication", path: "site/article" },
  ];
</script>

<div class="cta">
  {#each cta as item}
    <Button>
      <a
        role="button"
        class:active={$page.url.pathname === item.path}
        href={item.path}>{item.title}</a
      >
    </Button>
  {/each}
</div>

<style lang="scss">
  .cta {
    display: grid;
    grid-gap: 1rem;
    grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
    margin-right: 2rem;
    & a {
      letter-spacing: 0.15em;
    }
  }
</style>
