<template>

  <v-app dark class="red">

    <v-toolbar app fixed>
      <v-toolbar-title>ŽANE SUHADOLNIK</v-toolbar-title>
      <v-spacer></v-spacer>
      <v-toolbar-items>
        <v-btn flat>Home</v-btn>
        <v-btn flat>Projects</v-btn>
        <v-btn flat>Contact</v-btn>
      </v-toolbar-items>
    </v-toolbar>

    <v-jumbotron>
      <v-container fill-height>
        <v-layout align-center>
          <v-flex>
            <h3 class="display-3">Hi, I'm Žane</h3>
            <span class="subheading">I write code for the web mostly, but sometimes dabble into other areas and am currently looking for my first job in web dev.</span>
            <v-divider class="my-3"></v-divider>
            <div class="title mb-3">Scroll down to find projects and contact information!</div>
          </v-flex>
        </v-layout>
      </v-container>
    </v-jumbotron>

    <v-layout>
      <v-flex xs12 sm6 offset-sm3>
        <v-card>
          <v-card-title primary-title>
            <div>
              <h3 class="headline mb-0 display-3">Comila Site Design Clone</h3>
              <div>A site design clone made with Bootstrap.</div>
            </div>
          </v-card-title>
          <v-card-actions>
            <v-btn flat color="orange">GitHub Repo</v-btn>
            <v-btn flat color="orange">Live Demo</v-btn>
          </v-card-actions>
        </v-card>
        <v-spacer></v-spacer>
        <v-card>
          <v-card-title primary-title>
            <div>
              <h3 class="headline mb-0 display-3">Vue Meetup Maker</h3>
              <div>A meetup creator app built with Vue, Vuetify and Firebase.</div>
            </div>
          </v-card-title>
          <v-card-actions>
            <v-btn flat color="orange">GitHub Repo</v-btn>
            <v-btn flat color="orange">Live Demo</v-btn>
          </v-card-actions>
        </v-card>
      </v-flex>
    </v-layout>
  </v-app>
</template>

<script>
export default {
  data () {
    return {
      
    }
  }
}
</script>
