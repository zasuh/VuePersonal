<template>
  <v-app dark>
    <v-toolbar app fixed class="light-blue darken-4">
      <v-toolbar-title>ŽANE SUHADOLNIK</v-toolbar-title>
      <v-spacer></v-spacer>
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
        <v-btn flat router to="/Resume">
          <v-icon class="pr-2">description</v-icon>Resume
        </v-btn>
      </v-toolbar-items>
    </v-toolbar>
    <v-jumbotron style="height:100%">
      <v-container fill-height>
        <v-layout align-center>
          <v-flex xs12 md6 offset-3>
            <h3 class="display-2">suhadolnik@protonmail.com</h3>
            <v-divider class="my-3"></v-divider>
            <h3 class="display-2">github.com/zasuh</h3>
            <v-divider class="my-3"></v-divider>
            <h3 class="display-2">twitter.com/zasuh_</h3>
            <v-divider class="my-3"></v-divider>
            <h3 class="display-2">linkedin.com/in/zasuhadolnik/</h3>
          </v-flex>
        </v-layout>
      </v-container>
    </v-jumbotron>
  </v-app>
</template>
