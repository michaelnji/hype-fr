<script>
  export let name, description, serviceType, speed, maxOrders, tags;
</script>

<div
  class="p-4 rounded-box border border-neutral shadow-xl bg-base-100 lg:hover:scale-105 transform transition-transform  hover:shadow-2xl border-transparent ease-in-out w-full"
>
  <div class="flex items-center justify-between mb-4">
    <p class="font-bold capitalize text-3xl">
      {name}
      {#if tags.length > 2}
        {#each tags as tag, i}
          <span
            key={i}
            class={`badge font-sans md:inline-block  ml-1 badge-${tag.type}`}
            >{tag.name}</span
          >
        {/each}
      {:else}
        {#each tags as tag, i}
          <span
            key={i}
            class={`badge font-sans md:inline-block  ml-1 badge-${tag.type}`}
            >{tag.name}</span
          >
        {/each}
      {/if}
    </p>
  </div>
  <p class="mb-6 text-lg">
    {description}
  </p>
  <div class="grid grid-cols-3">
    <div class="flex flex-col">
      <b class="text-primary">Max Order</b>
      <p class="uppercase">{maxOrders}</p>
    </div>
    <div class="flex flex-col">
      <b class="text-primary">Type</b>
      <p>{serviceType}</p>
    </div>
    <div class="flex flex-col">
      <b class="text-primary">Speed</b>
      <p class="uppercase">{speed}</p>
    </div>
  </div>
  <div class="flex justify-center mt-8 place-items-center">
    <button class="btn w-full">buy boosts</button>
  </div>
</div>
