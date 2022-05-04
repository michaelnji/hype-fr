<script>
  import Icon from "./../../../../_components/icon.svelte";
  import { url } from "@roxi/routify";
  import Time from "svelte-time";
  import Lazy from "svelte-lazy";
  import { InstagramLoader } from "svelte-content-loader";
  export let imgUrl, title, excerpt, date, id, author;
</script>

<div
  class="card card-compact w-96 bg-base-100 shadow-xl lg:hover:scale-105 transform transition-transform font-mukta ease-in-out !max-w-[90%]"
>
  <figure>
    <Lazy
      height={400}
      resetHeightDelay={1000}
      class="rounded-box"
      placeholder={InstagramLoader}
      placeholderProps={{
        primaryColor: "#d0bfff",
        secondaryColor: " #b197fc",
        primaryOpacity: 0.6,
        secondaryOpacity: 0.5,
        baseUrl: imgUrl,
      }}
    >
      <img src={imgUrl} alt="pic of" />
    </Lazy>
  </figure>
  <div class="card-body">
    <h2 class="card-title mb-0 block font-bold text-2xl">
      {title}<span class="badge m-2"
        ><Time timestamp={date} format="MMMM D, YYYY" /></span
      >
    </h2>
    <p
      class="min-w-full flex items-center text-primary font-bold mb-4 text-base mt-1"
    >
      <span class="text-base-content mr-1 font-normal"> By </span>{author}<Icon
        name="badge-check"
        config="h-4 w-4 ml-1"
      />
    </p>
    <p class="text-lg">
      {excerpt}
    </p>
    <div class="card-actions">
      <a
        href={$url(`/welcome/blog/${id}`, { id })}
        class="link link-primary uppercase link-hover my-3">read more</a
      >
    </div>
  </div>
</div>
