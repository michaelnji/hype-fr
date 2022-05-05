<script>
  import { Modal } from "renderless-svelte";
  import { fly, fade } from "svelte/transition";
</script>

<Modal let:payload let:close>
  <div in:fade class="modal  modal-open   modal-bottom sm:modal-middle">
    <div class="modal-box" in:fly={{ y: 100 }}>
      <h3 class="font-bold text-lg">Heads up!</h3>
      <p class="py-4">
        {payload}
      </p>
      <div class="modal-action">
        <label for="my-modal-6" class="btn btn-primary" on:click={close}
          >okay!</label
        >
      </div>
    </div>
  </div>
</Modal>
