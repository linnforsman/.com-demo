<script>
  /** @type {import('./$types').PageData} */
  export let data;
</script>

<svelte:head>
  <title>Linn Forsman &mdash; Articles & Publications</title>
</svelte:head>

{#if data && data.length}
  {#each data as articles}
    <li>{articles.title}</li>
  {/each}
{:else}
  <p>No articles found.</p>
{/if}
