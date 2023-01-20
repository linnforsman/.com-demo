<script>
  import { onMount } from "svelte";
  const STORAGE_KEY = "theme";
  const DARK_PREFERENCE = "(prefers-color-scheme: dark)";

  const THEMES = {
    DARK: "dark",
    LIGHT: "light",
  };
  let currentTheme;

  const prefersDarkThemes = () => window.matchMedia(DARK_PREFERENCE).matches;

  const applyTheme = () => {
    const preferredTheme = prefersDarkThemes() ? THEMES.DARK : THEMES.LIGHT;

    currentTheme = localStorage.getItem(STORAGE_KEY) ?? preferredTheme;

    if (currentTheme === THEMES.DARK) {
      document.body.classList.remove(THEMES.LIGHT);
      document.body.classList.add(THEMES.DARK);
    } else {
      document.body.classList.remove(THEMES.DARK);
      document.body.classList.add(THEMES.LIGHT);
    }
  };

  const switchTheme = () => {
    const stored = localStorage.getItem(STORAGE_KEY);

    if (stored) {
      // clear storage
      localStorage.removeItem(STORAGE_KEY);
    } else {
      // store opposite of preference
      localStorage.setItem(
        STORAGE_KEY,
        prefersDarkThemes() ? THEMES.LIGHT : THEMES.DARK
      );
    }

    applyTheme();
  };

  onMount(() => {
    applyTheme();
    window.matchMedia(DARK_PREFERENCE).addEventListener("change", applyTheme);
  });
</script>

<label>
  <input
    type="checkbox"
    checked={currentTheme !== THEMES.DARK}
    on:click={switchTheme}
  />
  <span class="switch -vertical" />
</label>

<style>
  label {
    position: absolute;
    top: var(--frame);
    right: var(--frame);
    margin: 1px 0;
    display: flex;
    align-items: center;
    padding: 0;

    background: transparent;
    border: none;
    box-sizing: border-box;
    font-size: 0.75rem;
    letter-spacing: 0.05em;
    text-transform: uppercase;
    transform: rotate(90deg);
    --toggle-height: 20px;
  }

  @media all and (min-width: 900px) {
    label {
      margin: 0;
      --toggle-height: 15px;
    }
  }

  input {
    position: absolute;
    width: 0;
    height: 0;
    opacity: 0;
    overflow: hidden;
    position: relative;
    display: inline-block;
    width: calc(var(--toggle-height) * 2);
    height: var(--toggle-height);
    margin: 0 0.5em;
    border-radius: var(--toggle-height);
    cursor: pointer;
  }

  .switch::after {
    position: absolute;
    top: 1px;
    left: 1px;
    width: calc(var(--toggle-height) - 2px);
    height: calc(var(--toggle-height) - 2px);

    background: #06bfff;
    box-shadow: 1px 2px 3px 0 rgba(0, 0, 0, 0.2);

    border-radius: var(--toggle-height);
    content: "";
    transition: all 0.25s cubic-bezier(0.19, 1, 0.22, 1);
  }

  input:checked ~ .switch:after {
    left: calc(var(--toggle-height) + 1px);
    background: #002fff;
  }

  @media all and (min-width: 900px) {
    label:focus-within .switch {
      background: #06bfff;
    }
  }
</style>
