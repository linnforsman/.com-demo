<script>
  import "$lib/styles/global.scss";
  import Sidebar from "$lib/components/Sidebar.svelte";
  import Navigation from "$lib/components/Navigation.svelte";
  import Breadcrumb from "$lib/components/Breadcrumb.svelte";
  import PageTransition from "$lib/components/PageTransition.svelte";

  import { page } from "$app/stores";

  /** @type {import('./$types').LayoutLoad} */
  export const load = async ({ url: { pathname } }) => {
    return { pathname };
  };
  export let data;
  let open = false;
</script>

<Sidebar bind:open />
<Navigation bind:sidebar={open} />
<Breadcrumb path={$page.url.pathname} />
<PageTransition pathname={data.pathname}>
  <slot />
</PageTransition>
