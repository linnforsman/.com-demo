<script>
  import SanityImage from "$lib/components/SanityImage.svelte";

  export let article;
</script>

<article>
  <h2>
    <a rel="prefetch" href="/article/{article.slug.current}">{article.title}</a>
  </h2>
  {#if article.image}
    <div class="image">
      <SanityImage image={article.image} maxWidth={300} />
    </div>
  {/if}
</article>

<style>
  article {
    display: flex;
    /* Show images first */
    flex-direction: column-reverse;
    /* Align cards */
    align-self: start;
  }

  h2 {
    margin: 1rem 0 0;
  }

  h2 a {
    text-decoration: none;
  }

  .image {
    padding-bottom: 62.5%;
    position: relative;
    overflow: hidden;
  }

  .image :global(img) {
    position: absolute;
    width: 100%;
    height: 100%;
    object-fit: cover;
    margin: 0;
  }
</style>
