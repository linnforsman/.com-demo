<div class="grid-container">
  <slot />
</div>

<style>
  .grid-container {
    display: grid;
    grid-template-columns: 40% 60%;
    gap: 2.5rem;
  }

  @media screen and (max-width: 425px) {
    .grid-container {
      display: grid;
      grid-gap: 1rem;
      grid-template-columns: repeat(1, minmax(0, 1fr));
    }
  }
</style>
