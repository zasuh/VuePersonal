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

    <v-jumbotron style="height:100%">
      <v-container fill-height>
        <v-layout align-center justify-center>
          <v-flex xs12 md6 offset-3>
            <h3 class="display-1">
              <v-icon class="pr-5">fas fa-envelope</v-icon> suhadolnik@protonmail.com
            </h3>
            <v-divider class="my-3"></v-divider>
            <h3 class="display-1">
              <v-icon class="pr-5">fab fa-github</v-icon> github.com/zasuh
            </h3>
            <v-divider class="my-3"></v-divider>
            <h3 class="display-1">
              <v-icon class="pr-5">fab fa-twitter</v-icon> twitter.com/zasuh_
            </h3>
            <v-divider class="my-3"></v-divider>
            <h3 class="display-1">
              <v-icon class="pr-5">fab fa-linkedin</v-icon> linkedin.com/in/zasuhadolnik/
            </h3>
          </v-flex>
        </v-layout>
      </v-container>
    </v-jumbotron>
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

