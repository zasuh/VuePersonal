<template>
  <v-app dark class="red">
    <v-toolbar app fixed>
      <v-toolbar-title>ŽANE SUHADOLNIK</v-toolbar-title>
      <v-spacer></v-spacer>
      <v-toolbar-items>
        
        <v-btn flat><v-icon class="pr-2">home</v-icon>Home</v-btn>
        <v-btn flat><v-icon class="pr-2" to="\components\Projects">build</v-icon>Projects</v-btn>
        <v-btn flat><v-icon class="pr-2">code</v-icon>Technologies</v-btn>
        <v-btn flat><v-icon class="pr-2">perm_contact_calendar</v-icon>Contact</v-btn>
        <v-btn flat><v-icon class="pr-2">description</v-icon>Resume</v-btn>
      </v-toolbar-items>
    </v-toolbar>
    <v-jumbotron class="text-md-center">
      <v-container fill-height>
        <v-layout align-center>
          <v-flex>
            <h3 class="display-3">Hi, I'm Žane</h3>
            <span class="subheading">I write code for the web mostly, but sometimes dabble into other areas and am currently looking for my first job in web dev.</span>
            <v-divider class="my-3" dark></v-divider>
            <div class="title mb-3">Scroll down to find projects and contact information!</div>
          </v-flex>
        </v-layout>
      </v-container>
    </v-jumbotron>
    
    <v-layout>
      <v-flex xs12 sm6 offset-sm3>
        <h3 class="display-3 pb-3">Technologies</h3>
        <v-btn color="black">HTML5</v-btn>
        <v-btn color="black">CSS3</v-btn>
        <v-btn color="black">JS</v-btn>
        <v-btn color="black">Bootstrap</v-btn>
        <v-btn color="black">VueJS</v-btn>
        <v-btn color="black">C#</v-btn>
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
