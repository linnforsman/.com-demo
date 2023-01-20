<script>
  export let open = false;
</script>

<button class:open on:click={() => (open = !open)}>
  <svg class="navtogl" width="32" height="24">
    <line id="top" x1="0" y1="2" x2="32" y2="2" />
    <line id="bottom" x1="0" y1="22" x2="32" y2="22" />
  </svg>
</button>

<style>
  svg {
    min-height: 20px;
    transition: transform 0.3s ease-in-out;
  }

  svg line {
    stroke: #2b74ff;
    stroke-width: 3;
    transition: transform 0.3s ease-in-out;
  }

  button {
    z-index: 20;
    cursor: pointer;
    padding-top: 5px;
    margin-right: 1rem;
    border: none;
    background: none;
  }

  button:focus {
    outline: none;
  }

  .open svg {
    transform: scale(0.7);
  }

  .open #top {
    transform: translate(6px, 0px) rotate(45deg);
  }

  .open #bottom {
    transform: translate(-12px, 9px) rotate(-45deg);
  }

  @media (prefers-color-scheme: dark) {
    body.dark svg line {
      stroke: #2b74ff;
    }
  }
</style>
