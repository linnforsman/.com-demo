import { readable, derived } from "svelte/store";

export const time = readable(new Date(), function start(set) {
  const interval = setInterval(() => {
    set(new Date());
  }, 1000);

  return function stop() {
    clearInterval(interval);
  };
});

export const year = new Date().getFullYear();

export const formatter = new Intl.DateTimeFormat("en", {
  hour12: true,
  hour: "numeric",
  minute: "2-digit",
  second: "2-digit",
});

// For elapsed time
const start = new Date();

export const elapsed = derived(time, ($time) =>
  Math.round(($time - start) / 1000)
);

// Cursor position
export let m = { x: 0, y: 0 };
export function handleMousemove(event) {
  m.x = event.clientX;
  m.y = event.clientY;
}
