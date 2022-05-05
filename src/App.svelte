<script>
  import { Router } from "@roxi/routify";
  import { routes } from "../.routify/routes";
  import ServiceWorker from "./Serviceworker.svelte";
</script>

<ServiceWorker />

<Router {routes} />

<style>
  @tailwind base;
  @tailwind components;
  @tailwind utilities;
</style>
