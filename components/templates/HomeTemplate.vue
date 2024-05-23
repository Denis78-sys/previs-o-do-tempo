<template>
    <div class="home-template bg-cover bg-no-repeat bg-center min-h-screen" :style="backgroundStyle">
      <Logo />
      <Lupa />
    </div>
  </template>
  
  <script>
  
  export default {
    setup() {
      const backgroundStyle = {
        backgroundImage: `url('${require('@/assets/images/bg2.jpg')}')`
      };
  
      return {
        backgroundStyle
      };
    }
  }
  </script>
  

  