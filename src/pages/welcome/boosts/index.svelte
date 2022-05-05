<script>
  import BoostCard from "./_components/boostCard.svelte";
  import BoostGroup from "./_components/boostGroup.svelte";
  import BoostTags from "./_components/boostTags.svelte";
  // @ts-nocheck

  import Footer from "./../_components/footer.svelte";
  import Icon from "./../../../_components/icon.svelte";
  import Navbar from "./../_components/navbar.svelte";
  import theme from "./../../../store/theme";
  import { onDestroy, onMount } from "svelte";
  import db from "./../../../scripts/dbManager";
  import { isActive, goto } from "@roxi/routify";
  import { fly, fade } from "svelte/transition";
  import { openModal } from "renderless-svelte";
  let currentTheme, subscribe;
  onMount(() => {
    setTimeout(() => {
      openModal("Click a boost to see it's sub services😎");
    }, 1000);
    theme.update((value) => {
      return db.getItemValue("App-theme");
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
        notifications.push("Theme changed to dark");
        return "dark";
      });
    } else {
      db.setItemValue("App-theme", "light");
      theme.update((value) => {
        notifications.push("Theme changed to light");
        return "light";
      });
    }
  }
  // let category = [
  //   "all",
  //   "expensive",
  //   "cheap",
  //   "fastest",
  //   "real only",
  //   "bots only",
  //   "mixed",
  // ];
</script>

<div class="drawer duration-150">
  <input id="my-drawer-3" type="checkbox" class="drawer-toggle" />
  <div class="drawer-content flex flex-col">
    <!-- Navbar -->
    <Navbar />
    <!-- Page content here -->
    <div class="z-10 mt-24 px-8" in:fly={{ y: 100 }}>
      <h1 class="text-6xl font-bold text-center font-serif mb-8">All Boosts</h1>
      <!-- <div class="w-full flex flex-wrap gap-4 justify-center">
        {#each category as c}
          <span
            class="badge badge-lg capitalize hover:badge-secondary cursor-pointer font-semibold"
            >{c}</span
          >
        {/each}
      </div> -->
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 ">
        <BoostCard
          name="facebook"
          description="Get Likes/reactions, followers on page/profile, friend requests & much more"
          serviceType="mixed"
          speed="10k/day"
          maxOrders="100k"
          tags={[
            {
              name: "popular",
              type: "success",
            },
            {
              name: "fast",
              type: "success",
            },
            {
              name: "cheap",
              type: "",
            },
          ]}
        />
        <BoostCard
          name="instagram"
          description="Get hearts on posts, followers on page/profile, igTV/story views & much more"
          serviceType="mixed"
          speed="10k/day"
          maxOrders="1m"
          tags={[
            {
              name: "popular",
              type: "success",
            },
            {
              name: "fast",
              type: "success",
            },
            {
              name: "cheap",
              type: "",
            },
          ]}
        />
        <BoostCard
          name="youtube"
          description="Get video views, watchtime, subscribers, & much more"
          serviceType="mixed"
          speed="10k/day"
          maxOrders="1m"
          tags={[
            {
              name: "popular",
              type: "success",
            },
            {
              name: "expensive",
              type: "error",
            },
          ]}
        />
        <BoostCard
          name="twitter"
          description="Get followers, tweet likes, DMs & much more"
          serviceType="mixed"
          speed="3k/day"
          maxOrders="500k"
          tags={[
            {
              name: "expensive",
              type: "error",
            },
          ]}
        />
        <BoostCard
          name="tiktok"
          description="Get followers,hearts on videos & much more"
          serviceType="mixed"
          speed="300k/day"
          maxOrders="50m"
          tags={[
            {
              name: "cheap",
              type: "",
            },
            {
              name: "popular",
              type: "success",
            },
            {
              name: "fast",
              type: "success",
            },
          ]}
        />
        <BoostCard
          name="telegram"
          description="Get subscribers,views, group members & much more"
          serviceType="mixed"
          speed="300k/day"
          maxOrders="50m"
          tags={[
            {
              name: "cheap",
              type: "",
            },
            {
              name: "popular",
              type: "success",
            },
            {
              name: "fast",
              type: "success",
            },
          ]}
        />
        <BoostCard
          name="spotify"
          description="Get subscribers,views, streams & much more"
          serviceType="mixed"
          speed="300k/day"
          maxOrders="50m"
          tags={[
            {
              name: "popular",
              type: "success",
            },
          ]}
        />
        <BoostCard
          name="sound cloud"
          description="Get subscribers,views, streams & much more"
          serviceType="mixed"
          speed="300k/day"
          maxOrders="50m"
          tags={[
            {
              name: "popular",
              type: "success",
            },
          ]}
        />
        <BoostCard
          name="audiomack"
          description="Get subscribers,views, streams & much more"
          serviceType="mixed"
          speed="300k/day"
          maxOrders="50m"
          tags={[
            {
              name: "popular",
              type: "success",
            },
          ]}
        />
        <BoostCard
          name="website traffic"
          description="Get website traffic"
          serviceType="mixed"
          speed="300k/day"
          maxOrders="50m"
          tags={[
            {
              name: "popular",
              type: "success",
            },
            {
              name: "cheap",
              type: "success",
            },
            {
              name: "fast",
              type: "success",
            },
          ]}
        />
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
