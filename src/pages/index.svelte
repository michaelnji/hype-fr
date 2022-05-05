<script>
  import { onMount } from "svelte";
  import { metatags } from "@roxi/routify";
  import { goto, isActive } from "@roxi/routify";
  import { Circle } from "svelte-loading-spinners";
  metatags.title = "HYPEIST";
  metatags.description = "Social media boosting done easy";

  // Used to determine if the visitor is a new user or aa registered member

  let newUser = true;
  onMount(() => {
    setTimeout(() => {
      if (newUser) {
        $goto("/welcome");
      } else {
        $goto("/welcome/login");
      }
    }, 1000);
  });
</script>

<div class="grid place-items-center min-h-screen min-w-screen">
  <div>
    <Circle size="60" unit="px" color="#845ef7" duration="1s" />
    <div class="mt-3 text-2xl font-cursive font-semibold">loading</div>
  </div>
</div>
