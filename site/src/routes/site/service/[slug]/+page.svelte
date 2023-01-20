<script>
  import { fade } from "svelte/transition";
  export let data;
</script>

<svelte:head>
  <title>Linn Forsman &mdash; Service / {data.service.title}</title>
</svelte:head>

<a href="/site/service">go back</a>

<div
  in:fade={{ x: 200, duration: 1500 }}
  out:fade
  class="container-prose mx-auto"
>
  <h1>{data.service.title}</h1>
  <p>{@html data.service.desc}</p>
</div>

<style>
  h1 {
    text-transform: uppercase;
  }
</style>
