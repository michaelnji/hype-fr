<script>
  export let question,
    answer = "";
</script>

<div
  tabindex="0"
  class="collapse group collapse-arrow border border-base-300 bg-base-100 rounded-box w-full md:-w-3/4 lg:w-1/2 md:mx-auto  lg:inline-block"
>
  <div
    class="collapse-title text-xl font-semibold  opacity-90 group-focus:text-primary transition-colors ease-in-out"
  >
    {question}
  </div>
  <div class="collapse-content">
    <p>{answer}</p>
  </div>
</div>
