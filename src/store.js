import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    codigo_alumno: "14200098",

    servicio: {
      guardarConocimiento(conocimientos, onSuccess, onError) {
        conocimientos.forEach(c => {
          let conocimiento = {
            question: c.pregunta,
            answer: c.respuesta,
            test: "",
            reading: "",
            application: "",
            text: "",
            video: "",
            podcast: "",
            prezi: "",
            model: ""
          }
          console.log(JSON.stringify(conocimiento))
          fetch('https://adaptive-chatbot.herokuapp.com/respuesta', {
            method: 'POST',
            body: JSON.stringify(conocimiento),
            headers: {
              'Content-Type': 'application/json'
            }
          })
            .catch(error => onError(error))
            .then(response => onSuccess(response))
        })
      },
      obtenerConocimiento(onSuccess, onError) {
        fetch('https://adaptive-chatbot.herokuapp.com/preguntas', {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json'
          }
        })
          .then(response => response.json())
          .catch(error => onError(error))
          .then(response => onSuccess(response))
      },
      enviarConsulta(consulta, onSuccess, onError) {
        console.log(JSON.stringify(consulta))
        fetch('https://adaptive-chatbot.herokuapp.com/pregunta', {
          method: 'POST',
          body: JSON.stringify(consulta),
          headers: {
            'Content-Type': 'application/json'
          }
        })
          .then(response => response.json())
          .catch(error => onError(error))
          .then(response => onSuccess(response))
      },
      enviarPerfil(perfil, onSuccess, onError) {
        console.log(JSON.stringify(perfil))
        fetch('https://adaptive-chatbot.herokuapp.com/perfil', {
          method: 'POST',
          body: JSON.stringify(perfil),
          headers: {
            'Content-Type': 'application/json'
          }
        })
          .then(response => onSuccess())
          .catch(error => onError(error))
      }
    }
  },
  mutations: {

  },
  actions: {

  }
})
