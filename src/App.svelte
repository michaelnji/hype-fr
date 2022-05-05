<script>
  import { Router } from "@roxi/routify";
  import { routes } from "../.routify/routes";
  import ServiceWorker from "./Serviceworker.svelte";
  import Modal from "./_components/modal.svelte";
  import NotificationComp from "./_components/notificationComp.svelte";
</script>

<!-- <ServiceWorker /> -->

<Modal />
<NotificationComp />
<Router {routes} />

<style>
  @tailwind base;
  @tailwind components;
  @tailwind utilities;
</style>
