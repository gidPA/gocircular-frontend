<template>
  <RouterView></RouterView>
</template>

<script>

</script>

<style>
@font-face {
  font-family: 'Inter';
  src: url('/Inter.ttf') format('truetype');
  /* font-weight: normal;
  font-style: normal; */
}

/* Apply the custom font globally */
body {
  font-family: 'Inter', sans-serif;
}

head, body, html{
  margin: 0;
  padding: 0;
}

* {
  box-sizing: border-box;
}

.p-component {
  font-family: 'Inter', sans-serif;
  color: black;
}

/* Ensure PrimeIcons are not affected */
.pi {
  font-family: 'PrimeIcons' !important;
}
</style>

