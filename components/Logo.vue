<template>
  <v-img
    class=""
    alt="GG Logo"
    max-width="30"
    max-height="30"
    src="/white_logo.png"
    contain
  >
  </v-img>
</template>

<style>
.VuetifyLogo {
  width: 180px;
  transform: rotateY(560deg);
  animation: turn 3.5s ease-out forwards 1s;
}

@keyframes turn {
  100% {
    transform: rotateY(0deg);
  }
}
</style>
