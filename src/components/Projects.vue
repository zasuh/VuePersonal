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
    <v-container>
      <v-layout align-center>
        <v-flex xs12 sm6 offset-sm3>
          <h3 class="display-3 pb-3">{{Projects}}</h3>
          <v-divider class="my-3"></v-divider>
          <v-card>
            <v-card-title primary-title>
              <div>
                <h3 class="headline mb-1 display-3">Material Resume Clone</h3>
                <div>One of the first material design clones I've made using HTML & CSS.</div>
              </div>
            </v-card-title>
            <v-card-actions>
              <v-btn flat color="orange">GitHub Repo</v-btn>
              <v-btn flat color="orange">Live Demo</v-btn>
            </v-card-actions>
          </v-card>
          <v-divider class="my-3"></v-divider>
          <v-card>
            <v-card-title primary-title>
              <div>
                <h3 class="headline mb-1 display-3">Studio Ghibli API</h3>
                <div>Experimentation with the Studio Ghibli movie API.</div>
              </div>
            </v-card-title>
            <v-card-actions>
              <v-btn flat color="orange">GitHub Repo</v-btn>
              <v-btn flat color="orange">Live Demo</v-btn>
            </v-card-actions>
          </v-card>
          <v-divider class="my-3"></v-divider>
          <v-card>
            <v-card-title primary-title>
              <div>
                <h3 class="headline mb-1 display-3">Comila Site Design Clone</h3>
                <div>A site design clone made with Bootstrap.</div>
              </div>
            </v-card-title>
            <v-card-actions>
              <v-btn flat color="orange">GitHub Repo</v-btn>
              <v-btn flat color="orange">Live Demo</v-btn>
            </v-card-actions>
          </v-card>
          <v-divider class="my-3"></v-divider>
          <v-card>
            <v-card-title primary-title>
              <div>
                <h3 class="headline mb-1 display-3">Vue Meetup Maker</h3>
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
    </v-container>
  </v-app>
</template>

<script>
  export default {
    name: 'Projects',
    data: {
      return: {
        title: 'Projects'
      }
    }
  }
</script>

