<script>
  import Footer from "./../_components/footer.svelte";
  import Icon from "./../../../_components/icon.svelte";
  import Navbar from "./../_components/navbar.svelte";
  import theme from "./../../../store/theme";
  import { onDestroy, onMount } from "svelte";
  import db from "./../../../scripts/dbManager";
  import { isActive } from "@roxi/routify";
  let currentTheme, subscribe;
  onMount(() => {
    theme.update((value) => {
      return db.getItemValue("App-theme", "light");
    });
    subscribe = theme.subscribe((value) => {
      currentTheme = value;
    });
  });
  onDestroy(() => {
    subscribe;
  });

  function changeTheme() {
    if (db.getItemValue("App-theme") == "light") {
      db.setItemValue("App-theme", "dark");
      theme.update((value) => {
        return "dark";
      });
    } else {
      db.setItemValue("App-theme", "light");
      theme.update((value) => {
        return "light";
      });
    }
  }
</script>

<div class="grid place-items-center py-4 !overflow-hidden">
  <div
    class=" flex flex-col lg:flex-row-reverse items-center justify-center   p-4 bg-base-200"
  >
    <div class="text-center lg:text-left w-2/3 lg:w-1/2">
      <h1 class="text-5xl font-bold font-serif">Register</h1>
      <p class="py-4 lg:py-6  lg:text-xl">
        Lets get you started by creating an account. <br />
        <a href="/welcome" class="link link-hover link-primary">Go back</a>
      </p>
    </div>
    <div class="card flex-shrink-0  lg:mr-16 !max-w-sm md:max-w-md w-full">
      <div class="card-body">
        <div class="form-control">
          <label for="" class="label">
            <span class="label-text">Username</span>
          </label>
          <input
            type="text"
            placeholder="username"
            class="input input-bordered"
          />
        </div>
        <div class="form-control">
          <label for="" class="label">
            <span class="label-text">Email</span>
          </label>
          <input type="text" placeholder="email" class="input input-bordered" />
        </div>

        <div class="form-control">
          <label for="" class="label">
            <span class="label-text">Password</span>
          </label>
          <input
            type="text"
            placeholder="password"
            class="input input-bordered"
          />
        </div>
        <div class="form-control">
          <label for="" class="label">
            <span class="label-text">Confirm Password</span>
          </label>
          <input
            type="text"
            placeholder="confirm password"
            class="input input-bordered"
          />
        </div>

        <div class="form-control mt-6">
          <button class="btn btn-primary">create account</button>
        </div>
      </div>
    </div>
  </div>
</div>
