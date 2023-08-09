<template>
  <v-app id="inspire">
    <v-navigation-drawer v-model="drawer">
      <v-img
        class="mx-auto mt-2 mb-2"
        src="./assets/brasilapi-logo.webp"
        :width="200"
        cover
      ></v-img>
      <v-divider></v-divider>
      <v-list density="compact" nav>
        <router-link
          class="router-link"
          v-for="item in menu"
          :key="item.nome"
          :to="item.path"
        >
          <v-list-item-title class="px-5 my-2">
            <v-icon left class="pr-10" size="small">{{
              item.icone.includes("mdi") ? item.icone : "mdi-home"
            }}</v-icon
            >{{ item.nome }}
          </v-list-item-title>
          <v-divider></v-divider>
        </router-link>
      </v-list>
    </v-navigation-drawer>
    <v-app-bar>
      <v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon>

      <v-toolbar-title>{{ nomeTela }}</v-toolbar-title>
    </v-app-bar>

    <v-main>
      <router-view />
    </v-main>
  </v-app>
</template>

<script>
import { menu } from "@/const/menu";

export default {
  name: "App",

  data: () => ({
    drawer: null,
    nomeTela: "",
    menu,
  }),
  methods: {
    isActiveRoute(path) {
      this.changeScreenName(path)
      return this.$route.path === path;
    },
    changeScreenName() {
      for(let i = 0; i < this.menu.length; i++) {
        return this.nomeTela = this.$route.name
      }
    }
  },
};
</script>

<style>
.router-link {
  text-decoration: none;
  color: inherit;
}
::-webkit-scrollbar {
  width: 0px;
  background: transparent;
}
</style>
