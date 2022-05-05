<script>
  import { documentToHtmlString } from "@contentful/rich-text-html-renderer";
  import { isActive, params } from "@roxi/routify";
  import { onDestroy, onMount } from "svelte";
  import { fly, fade } from "svelte/transition";
  import imgUrl from "./../../../Assets/Images/real images/payment-4334491_1920.jpg";
  import db from "./../../../scripts/dbManager";
  import theme from "./../../../store/theme";
  import Icon from "./../../../_components/icon.svelte";
  import Footer from "./../_components/footer.svelte";
  import Navbar from "./../_components/navbar.svelte";
  import { Circle } from "svelte-loading-spinners";
  let currentTheme, subscribe, d;
  onMount(() => {
    theme.update((value) => {
      return db.getItemValue("App-theme");
    });
    subscribe = theme.subscribe((value) => {
      currentTheme = value;
    });
    fetch(`/api/blog/?id=${$params.id}.js`)
      .then((response) => {
        const r = response.json();
        r.then((c) => {
          post = c.data.items[0];
          const rawRichTextField = post.fields.postBody;
          return documentToHtmlString(rawRichTextField);
        }).then((renderedHtml) => {
          document.getElementById($params.id).innerHTML = renderedHtml;
        });
      })

      .catch((error) => console.log(error));
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
  let post;
</script>

{#if post}
  <div class="drawer duration-150">
    <input id="my-drawer-3" type="checkbox" class="drawer-toggle" />
    <div class="drawer-content flex flex-col">
      <!-- Navbar -->
      <Navbar />
      <!-- Page content here -->
      <div class="z-10 mt-20 p-4" in:fly={{ y: 100 }}>
        <div
          class="flex flex-col lg:flex-row items-center justify-between gap-8"
        >
          <!-- blog -->
          {#if post}
            <div
              class="w-full lg:order-1 lg:max-w-[80%] p-8 rounded-box shadow-xl bg-base-100"
            >
              <h1 class="font-extrabold text-4xl mb-12  lg:text-6xl ">
                {post.fields.title}
              </h1>
              <img
                src={"https:" + post.fields.mainImage.fields.file.url}
                class=" rounded-box "
                alt={post.fields.title}
              />
              <div
                class="w-full flex md:items-center flex-col md:flex-row md:justify-between my-4 mb-12 "
              >
                <p
                  class="w-full flex !items-center text-primary font-bold my-2  lg:text-2xl "
                >
                  <span class="text-base-content mr-2 font-normal"> By </span>
                  {post.fields.author}
                  {#if post.fields.author == "Hypeist Team" || post.fields.author == "HYPEIST Team"}
                    <Icon name="badge-check" config="h-6 w-6 mt-1" />
                  {/if}
                </p>
                <span class="badge badge-md lg:badge-lg min-w-fit font-bold"
                  >18 Feb 2022</span
                >
              </div>

              <div id={$params.id} class="prose prose-lg font-mukta" />

              <div
                class="p-4 flex shadow-xl lg:hover:scale-105 transition-transform transform ease-in-out flex-col md:flex-row gap-4 md:text-xl md:max-w-fit rounded-box mt-16"
              >
                <p>Was this article helpful?</p>

                <div class="rating">
                  <input
                    type="radio"
                    name="rating-2"
                    class="mask mask-star-2 bg-orange-400"
                  />
                  <input
                    type="radio"
                    name="rating-2"
                    class="mask mask-star-2 bg-orange-400"
                    checked
                  />
                  <input
                    type="radio"
                    name="rating-2"
                    class="mask mask-star-2 bg-orange-400"
                  />
                  <input
                    type="radio"
                    name="rating-2"
                    class="mask mask-star-2 bg-orange-400"
                  />
                  <input
                    type="radio"
                    name="rating-2"
                    class="mask mask-star-2 bg-orange-400"
                  />
                </div>
              </div>
            </div>
          {/if}
          <!-- advert -->
          <div class="w-full lg:order-2  lg:max-w-[20%]" />
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
                  href="/welcome/reseller"
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
{:else}
  <div class="grid place-items-center min-h-screen min-w-screen" in:fade>
    <Circle size="60" color="#f79256" unit="px" duration="1s" />
  </div>
{/if}
