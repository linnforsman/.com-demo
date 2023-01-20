<script>
  import { fade, fly } from "svelte/transition";
  import CallToAction from "$lib/components/CallToAction.svelte";
</script>

<!-- Introduction -->

<section in:fade={{ x: 50, duration: 1000 }} out:fade class="introduction">
  <div in:fly={{ x: 50, duration: 1250 }} class="introduction-content">
    <h1 class="title gradient-light-text">Linn Forsman</h1>
    <h2 class="subtitle">Programmer. Scientist. Musician.</h2>
    <CallToAction />
  </div>
</section>

<!-- End of Introduction.svelte -->
<style lang="scss">
  .introduction {
    position: relative;
    width: 100vw;
    height: 100vh;
    display: flex;
    justify-content: right;
    align-items: center;
    .introduction-content {
      position: relative;
      padding: 0;
      margin: 1rem;
    }
    .title {
      font-size: min(16vw, 9rem);
    }
  }
  @media (max-width: 786px) {
    .introduction {
      justify-content: center;
      .title {
        font-size: min(16vw, 3.5rem);
        .subtitle {
          font-size: min(16vw, 1rem);
        }
      }
    }
  }
</style>
