<template>
  <div
    class="home-template bg-cover bg-no-repeat bg-center min-h-screen justify-center"
    :style="backgroundStyle"
  >
    <div class="flex justify-center">
      <Container>
        <div class="lg:mt-12 md:mt-10 sm:mt-9">
          <Header />
        </div>
        <div class="lg:mt-24 md:mt-20 sm:mt-12">
          <TituloPrincipal />
        </div>
      </Container>
    </div>
  </div>
</template>

<script>
export default {
  setup() {
    const backgroundStyle = {
      backgroundImage: `url('${require("@/assets/images/bg2.jpg")}')`,
    };

    return {
      backgroundStyle,
    };
  },
};
</script>
