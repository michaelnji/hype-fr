<script>
  import { onMount } from "svelte";
  export let duration = 2500;
  let x = duration;
  let progress;
  onMount(() => {
    progress = document.querySelector("#bar");
    setInterval(() => {
      if (x === 0) {
        clearInterval();
        return;
      }
      x = x - 10;
      progress.style.width = `${(x / duration) * 100}%`;
    }, 10);
  });
</script>

<div id="bar" class="w-full h-1 bg-primary transition easing-in-out bar" />
