<template>
  <v-app dark>
    <v-toolbar app fixed color="transparent">
      <v-toolbar-items>
        <v-btn flat router to="/">
          <v-icon class="pr-2">home</v-icon>Home
        </v-btn>
        <v-btn flat router to="/Projects">
          <v-icon class="pr-2">build</v-icon>Projects
        </v-btn>
        <v-btn flat router to="/Technologies">
          <v-icon class="pr-2">code</v-icon>Technologies
        </v-btn>
        <v-btn flat router to="/Contact">
          <v-icon class="pr-2">perm_contact_calendar</v-icon>Contact
        </v-btn>
        <v-btn flat>
          <v-icon class="pr-2">description</v-icon>Resume
        </v-btn>
      </v-toolbar-items>
    </v-toolbar>

    <v-layout align-center>
      <v-flex xs12 sm6 offset-sm3>
        <h3 class="display-3 pb-3">My current skillset:</h3>
        <h5 class="display-2 pb-3 pt-5">Comfortable:</h5>
          <v-btn color="success">
            <v-icon class="pr-3">fab fa-html5</v-icon>HTML5
          </v-btn>
          <v-btn color="success">
            <v-icon class="pr-3">fab fa-css3</v-icon>CSS3
          </v-btn>
          <v-btn color="success">
            <v-icon class="pr-3">fab fa-js-square</v-icon>JS
          </v-btn>
          <v-btn color="success">
          <v-icon class="pr-3">fas fa-bold</v-icon>Bootstrap
          </v-btn>
        <v-divider dark></v-divider>
        <h5 class="display-2 pb-3 pt-5">Learning:</h5>
        <v-btn color="info">
          <v-icon class="pr-3">fab fa-vuejs</v-icon>VueJS
        </v-btn>
        <v-btn color="info">
          <v-icon class="pr-3">fab fa-node</v-icon>NodeJS
        </v-btn>
        <v-divider dark></v-divider>
        <h5 class="display-2 pb-3 pt-5">Midly exposed to:</h5>
          <v-btn color="black">
            <v-icon class="pr-3">fab fa-cuttlefish</v-icon>C#
          </v-btn>
          <v-btn color="black">
            <v-icon class="pr-3">fab fa-microsoft</v-icon>ASP.NET
          </v-btn>
        <v-divider dark></v-divider>
      </v-flex>
    </v-layout>
  </v-app>
</template>

<style scoped>
  .application {
  background-color: #00bfc5;
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 1600 900'%3E%3Cpath fill='%23A0E2DB' d='M0 504 0 899 1600 899 1600 120z'/%3E%3Cpath fill='%23CBF2F3' d='M1600 567 1600 899 0 899 0 165z'/%3E%3Cpath fill='%23719D71' d='M0 680 0 899 1600 899 1600 300z'/%3E%3Cpath fill='%237EB67E' d='M1600 719 1600 899 0 899 0 353z'/%3E%3Cpath fill='%23004D66' d='M0 788 0 899 1600 899 1600 625z'/%3E%3C/svg%3E");
  background-attachment: fixed;
  background-size: cover;
  background-position: center;
}
</style>
