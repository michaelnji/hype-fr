<script>
  import Icon from "./../_components/icon.svelte";
  import ERROR from "./../_components/ERROR.svelte";
  import { url } from "@roxi/routify";
</script>

<div
  class="flex flex-col items-center justify-center  min-h-screen bg-base-200 p-4 !overflow-hidden"
>
  <div class=" max-w-lg w-full m-0">
    <ERROR />
  </div>
  <div class=" flex flex-col items-center justify-center">
    <h1 class="text-center my-4 font-serif text-6xl">Sorry...</h1>
    <p class="text-2xl text-center">
      We seem to have hit a roadblock! <br /> But no worries! Let's take you back
    </p>
    <a
      href={$url("../")}
      class="btn btn-sm sm:btn-md lg:btn-lg btn-outline sm:btn-wide btn-accent font-bold gap-2 mt-8"
      >Take me back
      <Icon name="arrow-right" />
    </a>
  </div>
</div>
