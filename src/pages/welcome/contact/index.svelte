<script>
  import { fly } from "svelte/transition";
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

<div class="drawer duration-150">
  <input id="my-drawer-3" type="checkbox" class="drawer-toggle" />
  <div class="drawer-content flex flex-col">
    <!-- Navbar -->
    <Navbar />
    <!-- Page content here -->
    <div class="z-10 mt-20" in:fly={{ y: 100 }}>
      <div class="hero">
        <div
          class=" flex flex-col lg:flex-row-reverse items-center justify-center max-w-full  p-4 bg-base-200"
        >
          <div class="text-center lg:text-left w-2/3 lg:w-1/2">
            <h1 class="text-5xl font-bold font-serif">Contact</h1>
            <p class="py-4 lg:py-6  lg:text-xl">
              Email support <span class="text-primary text-bold"
                >hypeistsup@gmail.com</span
              >
            </p>
            <p class="py-4 lg:py-6  lg:text-xl">
              WhatsApp <span class="text-primary text-bold">+237660129043</span>
            </p>
            <p class="py-4 lg:py-6  lg:text-xl">
              Telegram <br /><a href="/" class="text-primary text-bold"
                >HYPEIST</a
              >
            </p>
            <p class="py-4 lg:py-6  lg:text-xl">
              Twitter <br /><a href="/" class="text-primary text-bold"
                >HYPEIST_1</a
              >
            </p>
          </div>
          <div class="card flex-shrink-0  lg:mr-16 max-w-sm w-full">
            <div class="card-body">
              <h2 class="font-cursive text-primary text-xl font-semibold mb-4">
                hypeist
              </h2>

              <div class="form-control">
                <label for="" class="label">
                  <span class="label-text">Name</span>
                </label>
                <input
                  type="text"
                  placeholder="name"
                  class="input input-bordered"
                />
              </div>
              <div class="form-control">
                <label for="" class="label">
                  <span class="label-text">Email</span>
                </label>
                <input
                  type="text"
                  placeholder="email"
                  class="input input-bordered"
                />
              </div>
              <div class="form-control">
                <label for="message" class="label">
                  <span class="label-text">Your message</span>
                </label>
                <textarea class="textarea textarea-bordered h-24" />
              </div>
              <div class="form-control mt-6">
                <button class="btn btn-primary">SEND FEEDBACK</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <Footer />
  </div>
  <div class="drawer-side">
    <label for="my-drawer-3" class="drawer-overlay" />
    <ul class="menu gap-y-2 p-4 overflow-y-auto w-80 bg-base-100">
      <h2
        class="font-bold text-xl text-primary font-cursive flex items-center justify-between"
      >
        hypeist <label
          for="my-drawer-3"
          class="btn btn-circle btn-ghost ml-auto text-base-content"
          ><Icon name="x" /></label
        >
      </h2>
      <!-- Sidebar content here -->
      <li
        class:bg-neutral={$isActive("/welcome/index", {}, true)}
        class:bg-opacity-70={$isActive("/welcome/index", {}, true)}
        class:text-primary={$isActive("/welcome/index", {}, true)}
        class="rounded-box"
      >
        <a
          href="/welcome/"
          class=" font-semibold capitalize  flex items-center gap-x-3"
          ><span class="p-2 rounded-box bg-base-300"
            ><Icon name="home" config="h-4 w-4" /></span
          >Home</a
        >
      </li>
      <div class="dropdown">
        <li tabindex="0">
          <!-- svelte-ignore a11y-label-has-associated-control -->
          <label tabindex="0">
            <button
              class=" focus:text-primary font-semibold capitalize  gap-x-4 flex items-center"
              ><span class="p-2 rounded-box bg-base-300"
                ><Icon name="caret-down" config="h-4 w-4" /></span
              >Product</button
            ></label
          >
          <ul
            tabindex="0"
            class="dropdown-content menu p-2  bg-base-300 rounded-box w-56  shadow"
          >
            <li
              class:bg-neutral={$isActive("/welcome/boosts")}
              class:bg-opacity-70={$isActive("/welcome/boosts")}
              class:text-primary={$isActive("/welcome/boosts")}
              class="mx-2 rounded-box"
            >
              <a
                href="/welcome/boosts"
                class=" font-semibold capitalize  flex items-center gap-x-4"
                ><span class="p-2 rounded-box bg-base-100"
                  ><Icon name="star" config="h-4 w-4" /></span
                >Boosts</a
              >
            </li>
            <li
              class:bg-neutral={$isActive("/welcome/reseller")}
              class:bg-opacity-70={$isActive("/welcome/reseller")}
              class:text-primary={$isActive("/welcome/reseller")}
              class="mx-2 rounded-box"
            >
              <a
                href="/welcome/coupons"
                class=" font-semibold capitalize  flex items-center gap-x-4"
                ><span class="p-2 rounded-box bg-base-100"
                  ><Icon name="tag" config="h-4 w-4" /></span
                >Coupons</a
              >
            </li>
            <li
              class:bg-neutral={$isActive("/welcome/plans")}
              class:bg-opacity-70={$isActive("/welcome/plans")}
              class:text-primary={$isActive("/welcome/plans")}
              class="mx-2 rounded-box"
            >
              <a
                href="/welcome/plans"
                class=" font-semibold capitalize  flex items-center gap-x-4"
                ><span class="p-2 rounded-box bg-base-100"
                  ><Icon name="badge-check" config="h-4 w-4" /></span
                >HYPEIST Plans</a
              >
            </li>
          </ul>
        </li>
      </div>
      <li
        class:bg-neutral={$isActive("/welcome/blog")}
        class:bg-opacity-70={$isActive("/welcome/blog")}
        class:text-primary={$isActive("/welcome/blog")}
        class=" rounded-box"
      >
        <a
          href="/welcome/blog"
          class=" font-semibold capitalize  flex items-center gap-x-4"
          ><span class="p-2 rounded-box bg-base-300"
            ><Icon name="book-open" config="h-4 w-4" /></span
          >Blog</a
        >
      </li>

      <li
        class:bg-neutral={$isActive("/welcome/contact")}
        class:bg-opacity-70={$isActive("/welcome/contact")}
        class:text-primary={$isActive("/welcome/contact")}
        class=" rounded-box"
      >
        <a
          href="/welcome/contact"
          class=" font-semibold capitalize  flex items-center gap-x-4"
          ><span class="p-2 rounded-box bg-base-300"
            ><Icon name="phone" config="h-4 w-4" /></span
          >Contact</a
        >
      </li>
      <li class="mt-12">
        <a
          href="/welcome/login"
          class=" font-semibold capitalize  flex items-center gap-x-4"
          ><span class="p-2 rounded-box bg-base-300"
            ><Icon name="login" config="h-4 w-4" /></span
          >Login</a
        >
      </li>
      <li>
        <a
          href="/welcome/signup"
          class=" font-semibold capitalize  flex items-center gap-x-4"
        >
          <span class="p-2 rounded-box bg-base-300"
            ><Icon name="user" config="h-4 w-4" /></span
          >Signup</a
        >
      </li>

      <div class="mt-24 md:mt-auto">
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
          <span class="ml-4">{currentTheme + " theme"}</span>
        </button>
      </div>
    </ul>
  </div>
</div>
