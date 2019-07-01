import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    codigo_alumno: '14200098',
    alumno_id: '5d192b8f1c9d4400001f40ad',
    profesor_id: '5d192cdd1c9d4400001f40b1',
    curso_id: '5d192d021c9d4400001f40b2',

    servicio: {
      obtenerAlumnos(onSuccess, onError) {
        fetch('https://adaptive-chatbot.herokuapp.com/obtenerAlumnos')
          .catch(error => onError(error))
          .then(response => onSuccess(response))
      },
      obtenerRespuesta(data, onSuccess, onError) {
        fetch('https://adaptive-chatbot.herokuapp.com/obtenerRespuesta', {
          method: 'POST',
          body: JSON.stringify(data),
          headers: {
            'Content-Type': 'application/json'
          }
        })
          .then(response => response.json())
          .catch(error => onError(error))
          .then(response => onSuccess(response))
      },
      ingresarConocimiento(data, onSuccess, onError) {
        fetch('https://adaptive-chatbot.herokuapp.com/ingresarConocimiento', {
          method: 'POST',
          body: JSON.stringify(data),
          headers: {
            'Content-Type': 'application/json'
          }
        })
          .then(response => response.json())
          .catch(error => onError(error))
          .then(response => onSuccess(response))
      },
      actualizarConocimiento(data, onSuccess, onError) {
        fetch('https://adaptive-chatbot.herokuapp.com/actualizarConocimiento', {
          method: 'POST',
          body: JSON.stringify(data),
          headers: {
            'Content-Type': 'application/json'
          }
        })
          .catch(error => onError(error))
          .then(response => onSuccess(response))
      },
      eliminarConocimiento(data, onSuccess, onError) {
        fetch('https://adaptive-chatbot.herokuapp.com/eliminarConocimiento', {
          method: 'POST',
          body: JSON.stringify(data),
          headers: {
            'Content-Type': 'application/json'
          }
        })
          .catch(error => onError(error))
          .then(response => onSuccess(response))
      },
      obtenerConocimiento(onSuccess, onError) {
        fetch('https://adaptive-chatbot.herokuapp.com/obtenerConocimiento', {
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
          .then(response => onSuccess(response))
          .catch(error => onError(error))
      }
    }
  },
  mutations: {

  },
  actions: {

  }
})
