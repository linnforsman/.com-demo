<script>
  export let path;
  let crumbs;

  $: {
    // Remove zero-length tokens.
    const tokens = path.split("/").filter((t) => t !== "");

    // Create { label, href } pairs for each token.
    let tokenPath = "";
    crumbs = tokens.map((t) => {
      tokenPath += "/" + t;
      return {
        label: t,
        href: tokenPath,
      };
    });

    // Add a way to get home too.
    crumbs.unshift({ label: "home", href: "/" });
  }
</script>

<ul class="breadcrumb">
  {#each crumbs as c, i}
    {#if i == crumbs.length - 1}
      {c.label}
    {:else}
      <li class="breadcrumb-item">
        <a href={c.href}>{c.label}</a>
      </li>
      <div class="divider">/</div>
    {/if}
  {/each}
</ul>

<style lang="scss">
  .breadcrumb {
    display: flex;
    list-style: none;
    align-items: center;
    justify-content: center;
    text-transform: uppercase;
    font-size: smaller;
  }

  .breadcrumb-item {
    margin: 0 0.5rem;
  }

  .breadcrumb-item:not(:last-child)::after {
    position: absolute;
    right: 0;
    top: 0;
    transform: translate(0.5rem, 0px);
  }

  .divider {
    margin-right: 1.25rem;
  }

  @media (min-width: 768px) {
    /* Target devices wider than 768px. */
  }

  @media (max-width: 767px) {
    /* Target devices narrower than 768px. */
    .breadcrumb {
      justify-content: flex-start;
      flex-wrap: wrap;
    }
  }
</style>
