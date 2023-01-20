<script>
  import LightSwitch from "$lib/components/LightSwitch.svelte";
  import { year } from "$lib/utils/stores.js";
</script>

<footer class="footer">
  <div><LightSwitch /></div>
  <div><small> © 2020 - {year} Linn Forsman </small></div>
  <div />
</footer>

<style>
  footer {
    position: fixed;
    width: 100%;
    bottom: 0;
    left: 0;
    display: flex;
    justify-content: space-between;
    padding-bottom: 0.75rem;
  }

  @media screen and (max-width: 768px) {
    footer {
      justify-content: space-around;
    }
  }
</style>
