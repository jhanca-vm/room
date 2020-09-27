<script>
  import Slide from './components/Slide.svelte';
  import About from './components/About.svelte';
  import Footer from './components/Footer.svelte';
</script>

<style global>
  @import url('https://fonts.googleapis.com/css2?family=Spartan:wght@500;600;700&display=swap');

  @import 'tailwindcss/base';

  @import 'tailwindcss/components';

  @import 'tailwindcss/utilities';
</style>

<main>
  <Slide />
  <About />
</main>
<Footer />
