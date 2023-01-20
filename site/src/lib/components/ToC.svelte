<script>
  import { page } from "$app/stores";
  import { onMount } from "svelte";

  export let allowedHeadings = ["h1", "h2", "h3", "h4", "h5", "h6"];
  export let activeHeading = null;

  let scrollY;
  let headings = [];

  function updateHeadings() {
    const nodes = [
      // Exclude h1 as those should be reserved for the post title
      ...document.querySelectorAll(
        `article :where(${allowedHeadings.join(", ")}):not(#__sections)`
      ),
    ];
    const depths = nodes.map((node) => Number(node.nodeName[1]));
    const minDepth = Math.min(...depths);

    headings = nodes.map((node, idx) => ({
      title: node.innerText,
      depth: depths[idx] - minDepth,
      node,
    }));

    // set first heading as active if null on page load
    if (activeHeading === null) {
      activeHeading = headings[0];
    }
  }

  onMount(() => {
    updateHeadings();
    setActiveHeading();
  });

  if (typeof window !== "undefined") {
    page.subscribe(() => {
      updateHeadings();
      setActiveHeading();
    });
  }

  function setActiveHeading() {
    scrollY = window.scrollY;

    const visibleIndex =
      headings.findIndex(
        (heading) =>
          heading.node.offsetTop + heading.node.clientHeight > scrollY
      ) - 1;

    activeHeading = headings[visibleIndex];

    const pageHeight = document.body.scrollHeight;
    const scrollProgress = (scrollY + window.innerHeight) / pageHeight;
    if (scrollProgress > 0.999) {
      activeHeading = headings[headings.length - 1];
    }
  }
</script>

<svelte:window on:scroll={setActiveHeading} />

<h6 id="__sections">Index</h6>

<ul>
  {#each headings as heading}
    <li
      class="heading"
      class:active={activeHeading?.node === heading.node}
      style={`--depth: ${heading.depth}`}
    >
      <a class="!no-underline" href={`#${heading.node.id}`}>{heading.title}</a>
    </li>
  {/each}
</ul>

<style lang="scss">
  .heading {
    margin-left: calc(var(--depth, 0) * 0.75rem);
  }

  .active {
    color: white;
    background-color: black;
  }

  /* can't use dark: modifier in @apply */
  :global(.dark) .active {
    color: black;
    background-color: white;
  }
</style>
