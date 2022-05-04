<script>
  import Icon from "./../../../_components/icon.svelte";
  let showPassword = false;
  let hideP = () => {
    let holder = document.querySelector(".pass-hold");
    if (showPassword) {
      holder.type = "password";
      showPassword = !showPassword;
      return;
    }
    holder.type = "text";
    showPassword = !showPassword;
  };
</script>

<div class="hero">
  <div
    class=" flex flex-col lg:flex-row-reverse items-center justify-center max-w-full min-h-screen p-4 bg-base-200"
  >
    <div class="text-center lg:text-left w-2/3 lg:w-1/2">
      <h1 class="text-5xl font-bold font-serif">Login</h1>
      <p class="py-6  lg:text-xl">
        In order to secure your account, you need to login every time you visit
        this website. <br />
        <a href="/welcome" class="link link-hover link-primary">go back</a>
      </p>
    </div>
    <div class="card flex-shrink-0  lg:mr-16 max-w-sm w-full">
      <div class="card-body">
        <h2 class="font-cursive text-primary text-xl font-semibold mb-4">
          hypeist
        </h2>

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
          <div class="flex  items-center gap-x-2">
            <input
              type="password"
              placeholder="password"
              class="input pass-hold input-bordered w-full"
            />
            <button class="btn btn-ghost  font-bold" on:click={hideP}>
              <label for="" class="swap swap-rotate">
                <div
                  class:swap-off={showPassword == true}
                  class:swap-on={showPassword == false}
                >
                  <Icon name="eye" />
                </div>
                <div
                  class:swap-off={showPassword == false}
                  class:swap-on={showPassword == true}
                >
                  <Icon name="eye-closed" />
                </div>
              </label>
            </button>
          </div>
          <label class="label" for="">
            <a href="/" class="label-text-alt link link-hover"
              >Forgot password?</a
            >
          </label>
        </div>
        <div class="form-control mt-6">
          <button class="btn btn-primary">Login</button>
        </div>
      </div>
    </div>
  </div>
</div>
