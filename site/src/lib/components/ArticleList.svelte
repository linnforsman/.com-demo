<script>
  import ArticleCard from "$lib/components/ArticleCard.svelte";
  export let article = [];
</script>

<section>
  {#each article as article (article.slug.current)}
    <ArticleCard {article} />
  {/each}
</section>

<style>
  section {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    gap: 3rem 2rem;
    margin-top: 3rem;
  }
</style>
