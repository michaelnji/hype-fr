<script>
  import NotificationBar from "./notificationBar.svelte";
  import { onMount } from "svelte";
  import Icon from "./icon.svelte";
  import { fade } from "svelte/transition";
  import { Notification, notifications } from "renderless-svelte";
  let close = () => {
    notifications.pop();
  };
  // delay necessary for notification to sync with progress bar
  let show = false;
  const duration = 3500;
  setTimeout(() => {
    show = true;
  }, 1200);
</script>

{#if show}
  <Notification let:payload {duration}>
    <div
      class="alert sm:flex-col p-0 shadow-lg absolute !bottom-4 transform translate-x-1/2 right-[50%]    !mx-auto bg-base-100 md:max-w-sm max-w-[90%] z-50 !overflow-hidden"
      transition:fade
    >
      <div class="flex items-start justify-between !w-full px-3 pt-3 pb-2">
        <div class="flex items-center gap-x-3 ">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            class="stroke-primary flex-shrink-0 w-6 h-6"
            ><path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
            /></svg
          >
          <div class="flex flex-col">
            <h3 class="text-lg text-primary font-bold">Notification</h3>
            <p>{payload}</p>
          </div>
        </div>
        <button class="btn btn-ghost btn-circle btn-sm" on:click={close}>
          <Icon name="x" />
        </button>
      </div>
      <NotificationBar {duration} />
    </div>
  </Notification>
{/if}
