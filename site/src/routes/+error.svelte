<script>
  import Button from "$lib/components/Button.svelte";
  import { page } from "$app/stores";
</script>

<svelte:head>
  <title>Error - No Data Displayed</title>
</svelte:head>

<div class="error">
  <div>
    <hr class="err-line" />
    <h1 class="error-status">
      <b>{$page.status}</b>
    </h1>
    <h2 class="error-msg">
      {$page.error.message}
    </h2>
    <hr class="err-line" />
    Didn't find what you were looking for?
    <div class="btn">
      <Button>
        <a href="/">Go Back</a>
      </Button>
    </div>
  </div>
</div>

<style lang="scss">
  $error: hsl(355, 97%, 50%);

  h1,
  h2 {
    color: $error;
    text-transform: uppercase;
    display: flex;
    justify-content: center;
    padding: 0;
    margin: 0;
  }
  hr {
    border: 1px solid $error;
  }

  .error {
    background-color: rgba(255, 0, 0, 0.050);
    display: flex;
    flex-direction: row;
    height: 100vh;
    width: 100vw;
    justify-content: center;
    place-items: center;
    margin: 0 auto;
    .error-status {
      font-size: min(16vw, 15rem);
    }
    .error-msg {
      font-size: min(16vw, 7.5rem);
    }
    .err-line {
      color: $error;
    }
  }
  .btn {
    display: flex;
    justify-content: center;
  }
</style>
