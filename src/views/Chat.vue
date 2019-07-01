<template>
  <v-content class="chat-vista">
    <Cabecera />
    <v-container fluid grid-list-xl style="height: 100%">
      <Chat_Creacion />
      <Chat_Chatbot class="mb-3"/>
    </v-container>
  </v-content>
</template>

<script>
import Cabecera from "../components/Cabecera";
import Chat_Creacion from "../components/Chat_Creacion";
import Chat_Chatbot from "../components/Chat_Chatbot";
export default {
  components: {
    Cabecera,
    Chat_Creacion,
    Chat_Chatbot
  }
};
</script>

<style scoped>
.chat-vista {
  height: 100vh;
}
</style>
