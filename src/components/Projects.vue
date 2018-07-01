<template>
  <div class="projects">
    <v-toolbar app fixed>
      <v-toolbar-title>ŽANE SUHADOLNIK</v-toolbar-title>
      <v-spacer></v-spacer>
      <v-toolbar-items>
        <v-btn flat>
          <v-icon class="pr-2">home</v-icon>
          <router-link class="nav-link" to="/Home">Home</router-link>
        </v-btn>
        <v-btn flat>
          <v-icon class="pr-2" to="\components\Projects">build</v-icon>
          <router-link class="nav-link" to="/Projects">Projects</router-link>
        </v-btn>
        <v-btn flat>
          <v-icon class="pr-2">code</v-icon>
          <router-link class="nav-link" to="/Technologies">Technologies</router-link>
        </v-btn>
        <v-btn flat>
          <v-icon class="pr-2">perm_contact_calendar</v-icon>
          <router-link class="nav-link" to="/Contact">Contact</router-link>
        </v-btn>
        <v-btn flat>
          <v-icon class="pr-2">description</v-icon>
          <router-link class="nav-link" to="/Resume">Resume</router-link>
        </v-btn>
      </v-toolbar-items>
    </v-toolbar>
    <v-container>
      <v-layout>
        <v-flex xs12 sm6 offset-sm3>
          <h3 class="display-3 pb-3">{{Projects}}</h3>
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
  </div>
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

