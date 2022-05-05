<script>
  import { fly } from "svelte/transition";
  import FaqCard from "./faqCard.svelte";
  import Footer from "./footer.svelte";
  import Icon from "./../../../_components/icon.svelte";
  import heroImg from "../../../Assets/Images/smm.png";
  import ProductCard from "./productCard.svelte";
</script>

<div class="sm:px-6 px-2" in:fly={{ y: 100 }}>
  <div class="hero min-h-screen">
    <div class="hero-content flex-col lg:flex-row-reverse items-start">
      <img
        src={heroImg}
        alt="Social media icons illustration"
        class="lg:max-w-1/2 w-full"
      />
      <div class="font-sans lg:max-w-1/2 w-full">
        <h1
          class="lg:text-7xl text-5xl font-extrabold font-serif mt-0 text-center lg:text-left"
        >
          Reliable & <span class="text-primary"> Fast </span> social boosting.
        </h1>
        <p class="py-6 lg:text-2xl text-xl text-center lg:text-left">
          Your solution for your traffic on Social Media Accounts, Engagement,
          Ranking your Video, Profile, Websites offered in a fast & robust way.
        </p>
        <div class="flex items-center justify-center lg:justify-start">
          <ul class="pb-6 ">
            <li class="my-3 flex gap-x-4 items-center">
              <b class="text-accent"> <Icon name="badge-check" /></b>
              <b>Followers/ subscribers</b>
            </li>
            <li class="my-3 flex gap-x-4 items-center">
              <b class="text-accent"> <Icon name="badge-check" /></b>
              <b>Likes/ reactions/ hearts</b>
            </li>
            <li class="my-3 flex gap-x-4 items-center">
              <b class="text-accent"> <Icon name="badge-check" /></b>
              <b>Views/ streams</b>
            </li>
          </ul>
        </div>
        <a
          href="/welcome/signup"
          class="btn sm:btn-lg lg:btn-wide btn-primary font-bold shadow-md shadow-primary  mx-auto lg:mx-0 w-full"
          >Get Started</a
        >
      </div>
    </div>
  </div>
  <div class="mt-24">
    <div
      class="mb-24 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 items-center"
    >
      <div
        class="rounded-box shadow-md p-8 flex items-center justify-between bg-base-100"
      >
        <div>
          <h1 class="text-5xl font-bold mb-2">200k</h1>
          <p class="text-xl">Orders handled daily</p>
        </div>
        <Icon name="star" config="h-12 w-12 stroke-primary" />
      </div>
      <div
        class="rounded-box shadow-md p-8 flex items-center justify-between bg-base-100"
      >
        <div>
          <h1 class="text-5xl font-bold mb-2">0.3<small>min</small></h1>
          <p class="text-xl">average start time</p>
        </div>
        <Icon
          name="clock-solid"
          config="h-12 w-12 stroke-transparent fill-primary"
        />
      </div>
      <div
        class="rounded-box shadow-md p-8 flex items-center justify-between bg-base-100"
      >
        <div>
          <h1 class="text-5xl font-bold mb-2">20+</h1>
          <p class="text-xl">Country services available</p>
        </div>
        <Icon name="globe" config="h-12 w-12 stroke-primary" />
      </div>
    </div>
    <h1
      class="lg:text-7xl text-5xl font-extrabold font-serif my-12 text-center"
    >
      <span class="text-primary"> Popular </span> Categories
    </h1>
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
      <ProductCard
        name="facebook"
        description="Get Likes/reactions, followers on page/profile, friend requests & much more"
        type="mixed"
        speed="10k/day"
        maxOrders="100k"
        tags={[
          {
            name: "popular",
            type: "success",
          },
          {
            name: "cheap",
            type: "",
          },
        ]}
      />
      <ProductCard
        name="youtube"
        description="Get Views on videos, subscribers, watch time & much more"
        type="realHQ"
        speed="1k/day"
        maxOrders="10k"
        tags={[
          {
            name: "popular",
            type: "success",
          },
          {
            name: "expensive",
            type: "primary",
          },
        ]}
      />
      <ProductCard
        name="telegram"
        description="Get subscribers on channel/group, post views, dm's & much more"
        type="mixed"
        speed="100k/day"
        maxOrders="10m"
        tags={[]}
      />
      <ProductCard
        name="Tiktok"
        description="Get Views on videos, followers, views & much more"
        type="mixed"
        speed="100k/day"
        maxOrders="10M"
        tags={[]}
      />
      <ProductCard
        name="Tiktok"
        description="Get Views on videos, followers, views & much more"
        type="mixed"
        speed="100k/day"
        maxOrders="10M"
        tags={[]}
      />
      <ProductCard
        name="Tiktok"
        description="Get Views on videos, followers, views & much more"
        type="mixed"
        speed="100k/day"
        maxOrders="10M"
        tags={[]}
      />
    </div>
    <div
      class="flex flex-col md:flex-row gap-y-8 md:gap-0 p-4 rounded-box border border-neutral shadow-lg bg-base-100 !max-h-fit lg:max-w-2xl w-full mx-auto mt-24 md:items-center justify-between"
    >
      <h2
        class="md:text-4xl text-2xl font-serif font-extrabold text-center lg:text-left"
      >
        Don't see what you need?
      </h2>
      <a href="/welcome/boosts" class="btn btn-primary lg:btn-lg md:btn-md"
        >see all boosts</a
      >
    </div>
  </div>

  <div class="mt-24">
    <h1 class="text-5xl font-extrabold font-serif my-12 text-center">
      How it works
    </h1>

    <div class="grid place-items-center">
      <ul class="steps lg:text-2xl steps-vertical">
        <li class="step step-primary !text-left">Register an account</li>
        <li class="step step-secondary !text-left">Choose a boost</li>
        <li class="step step-accent !text-left">Place an order</li>
        <li data-content="✓" class="step step-success !text-left">
          Receive boost
        </li>
      </ul>
    </div>
    <div class="md:mt-28 mt-12">
      <div class="hero bg-base-200">
        <div class="hero-content flex-col lg:flex-row">
          <div class="mockup-phone lg:mr-8 hidden md:block">
            <div class="camera" />
            <div class="display">
              <div
                class="artboard artboard-demo phone-1 pointer-events-none  bg-slate-100"
              >
                <img
                  src={heroImg}
                  alt="Social media icons illustration"
                  class="w-3/4"
                />
              </div>
            </div>
          </div>
          <div class="grid place-items-center lg:block">
            <h1 class="text-5xl font-bold font-serif text-center lg:text-left">
              Grow with us
            </h1>
            <p class="py-6 md:text-2xl text-center lg:text-left">
              Gain massive visibility online with our reliable social media
              marketing platform with no stress. <br /> Grow your social media accounts
              with us
            </p>
            <a href="/welcome/signup" class="btn btn-primary">Get Started</a>
          </div>
        </div>
      </div>
    </div>
    <div class="mt-28">
      <h1 class="text-5xl font-bold font-serif text-center">FAQ</h1>
      <div class="mt-12 gap-4 grid place-items-center">
        <FaqCard
          question="What is HYPEIST?"
          answer="HYPEIST is a Social Media Marketing (SMM) Platform used to boost social media accounts visibility using a set of algorithms online."
        />
        <FaqCard
          question="Is HYPEIST free?"
          answer="Opening an account on HYPEIST is totally FREE. However, you have to pay to use our boosting services. You can also Subscribe to a plan for a more robust use case"
        />
        <FaqCard
          question="How to use boosts to buy followers/likes/view etc?"
          answer="Head on to our blog to learn how to use HYPEIST to boost your social media handles"
        />
        <FaqCard
          question="Can I resell HYPEIST's services"
          answer="Yes, we offer coupons for our service resellers. Send an email to hypeistreseller@gmail.com to buy one"
        />
        <FaqCard
          question="Does HYPEIST have a refund policy?"
          answer="Yes, we do. Kindly send an email to hypeistsup@gmail.com for any customer help/issues"
        />
        <FaqCard
          question="What payment methods does HYPEIST accept?"
          answer="We accept a lot of popular payment methods like credit cards, bank transfers, mobile money, Barter etc"
        />
      </div>
    </div>
  </div>
</div>
<Footer />
