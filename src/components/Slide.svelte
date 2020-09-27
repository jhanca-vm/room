<script>
  import dataSlide from '../utils/dataSlide.js';

  let n = 0;
  $: currentSlide = dataSlide[n];

  let interval = setInterval(next, 3500);

  function next() {
    n += 1;

    if (n > 2) {
      n = 0;
    }
  }

  function previous() {
    n -= 1;

    if (n < 0) {
      n = 2;
    }
  }
</script>

<section class="grid xl:grid-cols-5 relative">
  <picture class="xl:col-span-3">
    <source srcset={currentSlide.img.desktop} media="(min-width: 640px)" />
    <img class="w-full" src={currentSlide.img.mobile} alt={currentSlide.title} />
  </picture>
  <img
    class="absolute inset-0 mx-auto mt-12 sm:ml-16 sm:mr-0 sm:mt-16"
    src="images/logo.svg"
    alt="logo" />
  <div
    class="flex h-14 w-28 absolute right-0 row-start-2 -mt-14 cursor-pointer sm:h-16 sm:w-32
      sm:-mt-16 xl:right-auto xl:bottom-0 xl:col-start-4 xl:row-start-1">
    <button
      on:click={() => {
        previous();
        clearInterval(interval);
      }}
      class="bg-black w-full focus:outline-none xl:hover:bg-grey-200">
      <svg class="mx-auto" width="14" height="24">
        <path d="M13 0L1 12l12 12" stroke="#FFF" fill="none" fill-rule="evenodd" />
      </svg>
    </button>
    <button
      on:click={() => {
        next();
        clearInterval(interval);
      }}
      class="bg-black w-full focus:outline-none xl:hover:bg-grey-200">
      <svg class="mx-auto" width="14" height="24">
        <path d="M1 0l12 12L1 24" stroke="#FFF" fill="none" fill-rule="evenodd" />
      </svg>
    </button>
  </div>
  <div
    class="px-8 py-16 md:px-12 xl:col-span-2 xl:max-w-25 xl:p-0 xl:justify-self-center
      xl:self-center xl:pb-6">
    <h1 class="text-3xl font-semibold leading-8 tracking-tighter sm:text-4xl sm:leading-11">
      {currentSlide.title}
    </h1>
    <p class="text-xs text-grey-100 font-medium tracking-tight leading-5 mt-5">
      {currentSlide.description}
    </p>
    <button
      class="flex items-center mt-12 font-medium text-xs tracking-widest uppercase cursor-pointer
        focus:outline-none hover:text-grey-100 xl:mt-8">
      Shop now <svg class="ml-8 fill-current" width="40" height="12">
        <path
          d="M34.05 0l5.481 5.527h.008v.008L40 6l-.461.465v.063l-.062-.001L34.049 12l-.662-.668 4.765-4.805H0v-1h38.206l-4.82-4.86L34.05 0z" />
      </svg>
    </button>
  </div>
</section>
