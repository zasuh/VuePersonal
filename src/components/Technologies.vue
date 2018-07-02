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
    <v-layout>
      <v-flex xs12 sm6 offset-sm3>
        <h3 class="display-3 pb-3">My current skillset:</h3>
        <h5 class="display-2 pb-3">Comfortable:</h5>
          <v-btn color="black">HTML5</v-btn>
          <v-btn color="black">CSS3</v-btn>
          <v-btn color="black">JS</v-btn>
          <v-btn color="black">Bootstrap</v-btn>
        <v-divider dark></v-divider>
        <h5 class="display-2 pb-3">Learning:</h5>
          <v-btn color="black">VueJS</v-btn>
        <v-divider dark></v-divider>
        <h5 class="display-2 pb-3">Midly exposed to:</h5>
          <v-btn color="black">C#</v-btn>
          <v-btn color="black">ASP.NET</v-btn>
      </v-flex>
    </v-layout>
  </v-app>
</template>
