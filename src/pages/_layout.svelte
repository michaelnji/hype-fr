<script>
  import theme from "./../store/theme";
  import { Circle } from "svelte-loading-spinners";
  import { onDestroy, onMount } from "svelte";
  import { fade } from "svelte/transition";
  import { isChangingPage, goto, isActive } from "@roxi/routify";
  import db from "./../scripts/dbManager";
  import NotificationComp from "../_components/notificationComp.svelte";
  import Modal from "../_components/modal.svelte";
  let currentTheme, subscribe;
  onMount(() => {
    if ($isActive("/index.html")) {
      $goto("/");
    }
    theme.update((value) => {
      return db.getOrSetItem("App-theme", "light");
    });
    subscribe = theme.subscribe((value) => {
      currentTheme = value;
    });
  });
  onDestroy(() => {
    subscribe;
  });
</script>

<!-- routify:options preload="proximity" -->
<div
  data-theme={currentTheme}
  class="bg-base-200 text-base-content w-screen min-h-screen text-base relative"
>
  <NotificationComp />
  <Modal />
  <slot />
</div>
<!-- show animation if page is loading -->
{#if $isChangingPage}
  <div class="grid place-items-center min-h-screen min-w-screen" in:fade>
    <Circle size="60" color="#845ef7" unit="px" duration="1s" />
  </div>
{/if}
