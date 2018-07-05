<template>
  <v-app>
    <v-navigation-drawer
      v-model="drawer"
      fixed
      app
      color="white"
      mobile-break-point="10240"
    >
      <v-list dense>
        <v-list-tile router to="/">
          <v-list-tile-action>
            <v-icon>home</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title>Home</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
        <v-list-tile router to="/Projects">
          <v-list-tile-action>
            <v-icon>build</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title>Projects</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
        <v-list-tile router to="/Technologies">
          <v-list-tile-action>
            <v-icon>code</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title>Technologies</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
        <v-list-tile router to="/Contact">
          <v-list-tile-action>
            <v-icon>perm_contact_calendar</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title>Contact</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
        <v-list-tile href="https://drive.google.com/open?id=1AaQNrUboryDTy14tRLcVmaYVdCAJ64Ze">
          <v-list-tile-action>
            <v-icon>description</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title>Resume</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
      </v-list>
    </v-navigation-drawer>
    <v-toolbar app dark color="transparent">
      <v-toolbar-side-icon @click.stop="drawer = !drawer" class="hidden-sm-and-up"></v-toolbar-side-icon>
      <v-spacer></v-spacer>
      <v-toolbar-items class="hidden-xs-only">
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
        <v-btn flat href="https://drive.google.com/open?id=1AaQNrUboryDTy14tRLcVmaYVdCAJ64Ze">
          <v-icon class="pr-2">description</v-icon>Resume
        </v-btn>
      </v-toolbar-items>
    </v-toolbar>

    <v-layout align-center>
      <v-flex xs12 sm6 offset-sm3>
        <h3 class="display-3 pb-3">My current skillset:</h3>
        <h5 class="display-2 pb-3 pt-5">Comfortable:</h5>
          <v-btn color="success display-1">
            <v-icon class="pr-3 display-1" >fab fa-html5</v-icon>HTML5
          </v-btn>
          <v-btn color="success display-1">
            <v-icon class="pr-3 display-1">fab fa-css3</v-icon>CSS3
          </v-btn>
          <v-btn color="success display-1">
            <v-icon class="pr-3 display-1">fab fa-js-square</v-icon>JS
          </v-btn>
          <v-btn color="success display-1">
          <v-icon class="pr-3">fas fa-bold</v-icon>Bootstrap
          </v-btn>
        <v-divider dark></v-divider>
        <h5 class="display-2 pb-3 pt-5">Learning:</h5>
        <v-btn color="info display-1">
          <v-icon class="pr-3 display-1">fab fa-vuejs</v-icon>VueJS
        </v-btn>
        <v-btn color="info display-1">
          <v-icon class="pr-3 display-1">fab fa-node</v-icon>NodeJS
        </v-btn>
        <v-divider dark></v-divider>
        <h5 class="display-2 pb-3 pt-5">Mildly exposed to:</h5>
          <v-btn color="black display-1">
            <v-icon class="pr-3 display-1" color="white">fab fa-cuttlefish</v-icon><div class="csharp">C#</div>
          </v-btn>
          <v-btn color="black display-1">
            <v-icon class="pr-3 display-1" color="white">fab fa-microsoft</v-icon><div class="aspnet">ASP.NET</div>
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

  h3, h5 {
    color: white;
    text-shadow: 3px 3px #000000;
  }

  .csharp,
  .aspnet {
    color: white;
  }
</style>

<script>
  export default {
  data: () => ({
    drawer: null
  })
}
</script>
