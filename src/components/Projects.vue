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

    <v-container fill-height>
      <v-layout align-center>
        <v-flex xs12 md6 offset-md3>
          <h3 class="display-3 pb-3">{{Projects}}</h3>
          <v-card color="blue darken-3" hover>
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
          <v-card color="blue darken-3" hover>
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
        </v-flex>
      </v-layout>
    </v-container>
    <v-container>
      <v-layout>
        <v-flex xs12 md6 offset-md3>
          <v-card color="indigo darken-4" hover>
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
          <v-card color="indigo darken-4" hover>
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

<style scoped>
  .application {
  background-color: #00bfc5;
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 1600 900'%3E%3Cpath fill='%23A0E2DB' d='M0 504 0 899 1600 899 1600 120z'/%3E%3Cpath fill='%23CBF2F3' d='M1600 567 1600 899 0 899 0 165z'/%3E%3Cpath fill='%23719D71' d='M0 680 0 899 1600 899 1600 300z'/%3E%3Cpath fill='%237EB67E' d='M1600 719 1600 899 0 899 0 353z'/%3E%3Cpath fill='%23004D66' d='M0 788 0 899 1600 899 1600 625z'/%3E%3C/svg%3E");
  background-attachment: fixed;
  background-size: cover;
  background-position: center;
}

h3 {
  text-shadow: 1px 1px 1px #ccc;
}
</style>

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


