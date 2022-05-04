<script>
  import { Router } from "@roxi/routify";
  import { routes } from "../.routify/routes";
  import ServiceWorker from "./Serviceworker.svelte";
  import Modal from "./_components/modal.svelte";
</script>

<ServiceWorker />

<Modal />
<Router {routes} />

<style>
  @tailwind base;
  @tailwind components;
  @tailwind utilities;
</style>
