<template>
  <v-app dark class="red">
    <v-toolbar app fixed>
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
    <v-jumbotron
      :gradient="gradient"
      dark
      src="https://s3.amazonaws.com/vuetify-docs/images/parallax/material2.jpg">>
      <v-container fill-height>
        <v-layout align-center>
          <v-flex text-xs-center>
            <h3 class="display-3">Hi, I'm Žane</h3>
            <span class="subheading">I write code for the web mostly, but sometimes dabble into other areas
              and am currently looking for my first job in web dev.</span>
            <v-divider class="my-3" dark></v-divider>
          </v-flex>
        </v-layout>
      </v-container>
    </v-jumbotron>
  </v-app>
</template>

<script>
export default {
  data: {
    return: {
      menuItems: [
        {}
      ]
    }
  }
}
</script>
