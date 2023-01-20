<script>
  import Card from "$lib/components/Card.svelte";
  import Grid from "$lib/components/Grid.svelte";
  import { fade } from "svelte/transition";
  export let data;
</script>

<svelte:head>
  <title>Linn Forsman &mdash; Services</title>
</svelte:head>

<h1 style="text-align:center">Services</h1>
<div in:fade={{ x: 200, duration: 1000 }} out:fade class="container-lg mx-auto">
  <Grid>
    {#each data.summaries as { slug, title, preview }}
      <Card>
        <h1><a href="service/{slug}">{title}</a></h1>
        {preview}
      </Card>
    {/each}
  </Grid>
</div>

<style>
  h1 {
    text-transform: uppercase;
  }
</style>
