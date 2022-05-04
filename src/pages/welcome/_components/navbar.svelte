<script>
  import Icon from "./../../../_components/icon.svelte";
  import theme from "./../../../store/theme";
  import { onDestroy, onMount } from "svelte";
  import { fade } from "svelte/transition";
  import { isActive } from "@roxi/routify";
  import db from "./../../../scripts/dbManager";
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

<div
  class="min-w-full navbar pb-4 fixed bg-base-100 border-b border-neutral z-20 px-8"
>
  <div class="flex-1 lg:hidden ">
    <label for="my-drawer-3" class="btn btn-square btn-ghost">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        class="inline-block w-6 h-6 stroke-current"
        ><path
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          d="M4 6h16M4 12h16M4 18h16"
        /></svg
      >
    </label>
  </div>
  <div class="lg:flex-1 px-2 ">
    <a href="/welcome">
      <p class="text-primary font-bold text-2xl font-cursive lowercase">
        HYPEIST <span class="badge badge-sm font-sans">v1.0.0</span>
      </p></a
    >
    <!-- {#if currentTheme === "light"}
          <img in:fade src={logo} alt="cardrc logo" class=" w-28" />
        {:else}
          <img in:fade src={logodark} alt="cardrc logo" class=" w-28" />
        {/if} -->
  </div>
  <!-- Navbar menu content here -->
  <div class="flex-none hidden lg:block lg:w-3/4">
    <div class="flex w-full">
      <div class="flex-1 pt-2">
        <ul class=" flex items-center gap-x-10">
          <li class:text-primary={$isActive("/welcome/index", {}, true)}>
            <a
              href="/welcome"
              class="hover:text-primary font-semibold capitalize transition-colors "
              >Home</a
            >
          </li>
          <li>
            <div class="dropdown">
              <!-- svelte-ignore a11y-label-has-associated-control -->
              <label tabindex="0">
                <button
                  class="hover:text-primary focus:text-primary font-semibold capitalize transition-colors gap-x-2 flex items-center"
                  >Products <Icon name="caret-down" config="h-4 w-4" /></button
                ></label
              >
              <ul
                tabindex="0"
                class="dropdown-content menu p-2  bg-base-100 rounded-box w-56 border border-base-300 shadow"
              >
                <li class:text-primary={$isActive("/welcome/boosts")}>
                  <a href="/welcome/boosts"> Boosts</a>
                </li>
                <li class:text-primary={$isActive("/welcome/reseller")}>
                  <a href="/welcome/reseller"> Coupons</a>
                </li>
                <li class:text-primary={$isActive("/welcome/plans")}>
                  <a href="/welcome/plans"> HYPEIST Plans</a>
                </li>
              </ul>
            </div>
          </li>
          <li class:text-primary={$isActive("/welcome/blog")}>
            <a
              href="/welcome/blog"
              class="hover:text-primary font-semibold capitalize transition-colors "
              >Blog</a
            >
          </li>

          <li class:text-primary={$isActive("/welcome/contact")}>
            <a
              href="/welcome/contact"
              class="hover:text-primary font-semibold capitalize transition-colors "
              >Contact</a
            >
          </li>
        </ul>
      </div>
      <div class="flex-none">
        <ul class=" flex items-center  gap-x-2">
          <li>
            <a
              href="/welcome/signup"
              class="btn btn-primary  shadow-md shadow-primary  font-bold"
              >sign up</a
            >
          </li>
          <li>
            <a
              href="/welcome/login"
              class="btn  bg-transparent glass border-neutral  font-bold "
              >login</a
            >
          </li>
          <li>
            <div
              class="tooltip tooltip-bottom"
              data-tip={currentTheme + " theme"}
            >
              <button class="btn btn-ghost  font-bold" on:click={changeTheme}>
                <label for="" class="swap swap-rotate">
                  <div
                    class:swap-off={currentTheme == "light"}
                    class:swap-on={currentTheme == "dark"}
                  >
                    <Icon name="sun" />
                  </div>
                  <div
                    class:swap-off={currentTheme == "dark"}
                    class:swap-on={currentTheme == "light"}
                  >
                    <Icon name="moon" />
                  </div>
                </label>
              </button>
            </div>
          </li>
        </ul>
      </div>
    </div>
  </div>
</div>
