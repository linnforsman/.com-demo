<script>
  import Logo from "$lib/components/Logo.svelte";
  import NavToggler from "$lib/components/NavToggler.svelte";
  export let sidebar = false;
</script>

<header>
  <nav>
    <Logo />
    <NavToggler bind:open={sidebar} />
  </nav>
</header>

<style lang="scss">
  header {
    position: sticky;
    nav {
      display: flex;
      justify-content: space-between;
      margin: 0 auto;
      place-items: center;
      position: relative;
      height: 55px;
      width: 100%;
      z-index: 102;
    }
  }
</style>
