<script>
  // @ts-nocheck

  import BlogCard from "./_components/blogCard.svelte";
  import Footer from "./../_components/footer.svelte";
  import Icon from "./../../../_components/icon.svelte";
  import Navbar from "./../_components/navbar.svelte";
  import theme from "./../../../store/theme";
  import { onDestroy, onMount } from "svelte";
  import db from "./../../../scripts/dbManager";
  import { isActive, goto } from "@roxi/routify";
  import { Circle3 } from "svelte-loading-spinners";
  import { fly, fade } from "svelte/transition";
  let currentTheme, subscribe, blogPosts;
  async function getBlogPosts(error) {
    try {
      const returnValue = await fetch(`/api/blog.js`);
      const response = await returnValue.json();
      blogPosts = response.data;
    } catch (error) {
      console.error("error");
      openModal("An error has occurred");
    }
  }
  onMount(() => {
    theme.update((value) => {
      return db.getItemValue("App-theme");
    });
    subscribe = theme.subscribe((value) => {
      currentTheme = value;
    });
    getBlogPosts();
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

<div class="drawer duration-150" in:fly={{ y: 100 }}>
  <input id="my-drawer-3" type="checkbox" class="drawer-toggle" />
  <div class="drawer-content flex flex-col">
    <!-- Navbar -->
    <Navbar />
    <!-- Page content here -->
    <div class="z-10 mt-20">
      <div>
        <!-- blog -->
        <h1
          class="md:text-7xl text-5xl font-extrabold capitalize text-center font-serif"
        >
          Our blog
        </h1>
        <p class="lg:text-2xl text-lg text-center">Articles to help you</p>
        {#if blogPosts}
          {#if blogPosts == []}
            Nothing to show
          {:else}
            <div
              in:fade
              class="mt-12 grid place-items-center grid-cols-1 gap-3 md::grid-cols-2 lg:grid-cols-3"
            >
              <!-- else content here -->
              {#each blogPosts.items as item}
                <BlogCard
                  imgUrl={"https:" + item.fields.mainImage.fields.file.url}
                  author={item.fields.author}
                  title={item.fields.title}
                  date={item.fields.dateCreated}
                  excerpt={item.fields.excerpt}
                  id={item.sys.id}
                />
              {/each}
            </div>
          {/if}
        {:else}
          <div class="grid place-items-center min-h-[23rem]" in:fade>
            <Circle3 size="60" color="#845ef7" unit="px" duration="1s" />
          </div>
        {/if}
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
