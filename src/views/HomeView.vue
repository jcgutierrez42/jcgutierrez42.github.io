<script setup lang="ts">
// import TheWelcome from '../components/TheWelcome.vue'
import { ref } from 'vue'
import { xpList, languages, frameworks, tools } from '@/constants/experiences'

const prof_pic = ref('https://scontent.fmnl37-1.fna.fbcdn.net/v/t1.6435-9/78155851_10206208534850111_3043382159151726592_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=6ee11a&_nc_ohc=EDwKV8WHwPsQ7kNvgE52K3E&_nc_oc=AdnoN6jwfC2P2ZPaWwkMyOELO3z7zN-WfFYurTErU6RvImPEIPXgRRPhHTDSBMt7sO8&_nc_zt=23&_nc_ht=scontent.fmnl37-1.fna&_nc_gid=_dRPuBgwv4r7yMM4Gwc1lA&oh=00_AYH5IHCxw1p-LalA9-VZDJpvC1LMQ2SC5bQU4p5KhdQlLQ&oe=680C67E8')

</script>

<template>
  <main>
    <div class="d-flex justify-center">
      <v-card width="50%">
        <v-card-text class="pt-4">
          <div class="d-flex justify-center">
            <v-avatar size="125">
              <img alt="Profile Pic" class="logo" :src="prof_pic" width="125" height="125" />
            </v-avatar>
          </div>
          <div class="px-12 py-4">
            <h1 class="text-center">Juan Carlos Gutierrez</h1><br/>
            <h1 class="text-center">Profile</h1><br/>
            <span>
            FrontEnd developer with 6 years of experience, knowledgeable in object oriented programming
            and able to comprehend new concepts quickly and efficiently. Creative in formulating logical solutions to
            problems that appear in computer programming.
            </span>
          </div>
          <div class="px-12 py-4">
            <h1 class="text-center">Experience</h1><br/>
            <div v-for="workplace in xpList" v-bind:key="workplace.company">
              <h3 class="py-4">{{ workplace.company }}</h3>
              <ul class="pl-4">
                <li v-for="role in workplace.projects" v-bind:key="role.name">
                  {{ role.name }}
                  <ul v-if="role.additional_details" class="pl-4">
                    <li v-for="project in role.additional_details" v-bind:key="project.name">
                      {{ project.name }}{{ project.description ? `- ${project.description}` : '' }}
                    </li>
                  </ul>
                </li>
              </ul>
            </div>
          </div>
          <div class="px-12 py-4">
            <h1 class="text-center">Skills and Abilities</h1><br/>
            <v-row >
              <v-col>
                <h3>Languages</h3>
                <ul class="pl-4">
                  <li v-for="skill in languages" v-bind:key="skill.name">
                    {{ skill.name }}
                  </li>
                </ul>
              </v-col>
              <v-col>
                <h3>Frameworks</h3>
                <ul class="pl-4">
                  <li v-for="skill in frameworks" v-bind:key="skill.name">
                    {{ skill.name }}
                  </li>
                </ul>
              </v-col>
              <v-col>
                <h3>Tools</h3>
                <ul class="pl-4">
                  <li v-for="skill in tools" v-bind:key="skill.name">
                    {{ skill.name }}
                  </li>
                </ul>
              </v-col>
            </v-row>
          </div>
        </v-card-text>
      </v-card>
    </div>
  </main>
</template>

<style>

</style>
