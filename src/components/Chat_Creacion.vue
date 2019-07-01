<template>
  <v-flex xs12 style="height: 100%">
    <v-card class="elevation-6 fill-height">
      <div class="chat-recurso" style="height: 100%">
        <div class="chat-creacion">
          <v-layout v-for="(conocimiento, index) in conocimientos" :key="index">
            <v-flex>
              <v-textarea
                v-model="conocimiento.pregunta"
                auto-grow
                solo
                hide-details
                rows="1"
                color="deep-purple"
                label="Pregunta"
              ></v-textarea>
              <div v-if="conocimiento._mostrarDetalle" class="mt-1 ml-1" style="color: #aaa">
                <span>{{conocimiento.conocimiento_id}}</span>
              </div>
            </v-flex>
            <v-flex>
              <v-textarea
                v-model="conocimiento.respuesta"
                auto-grow
                solo
                hide-details
                rows="1"
                label="Respuesta"
              ></v-textarea>
              <div v-if="conocimiento._mostrarDetalle">
                <v-text-field
                  class="pt-1"
                  v-model="conocimiento.pdf"
                  auto-grow
                  solo
                  hide-details
                  rows="1"
                  prepend-icon="file_copy"
                  label="Enlace Texto"
                ></v-text-field>
                <v-text-field
                  class="pt-1"
                  v-model="conocimiento.video"
                  auto-grow
                  solo
                  hide-details
                  rows="1"
                  prepend-icon="video_library"
                  label="Enlace Video"
                ></v-text-field>
              </div>
            </v-flex>
            <div class="pt-3">
              <v-menu bottom left>
                <template v-slot:activator="{ on }">
                  <v-btn
                    flat
                    icon
                    small
                    color="primary"
                    @click="conocimiento._mostrarDetalle = !conocimiento._mostrarDetalle"
                  >
                    <v-icon v-if="conocimiento._mostrarDetalle" dark>expand_less</v-icon>
                    <v-icon v-else dark>expand_more</v-icon>
                  </v-btn>
                  <v-btn flat icon small color="primary" v-on="on">
                    <v-icon dark>more_horiz</v-icon>
                  </v-btn>
                </template>
                <v-list>
                  <v-list-tile @click="eliminarConocimiento(index, conocimiento.conocimiento_id)">
                    <v-list-tile-title>Eliminar</v-list-tile-title>
                  </v-list-tile>
                </v-list>
              </v-menu>
            </div>
          </v-layout>
        </div>
        <div class="my-3">
          <v-tooltip top>
            <template v-slot:activator="{ on }">
              <v-btn fab dark small color="success" @click="agregarConocimiento" v-on="on">
                <v-icon dark>add</v-icon>
              </v-btn>
            </template>
            <h3>Agregar Conocimiento</h3>
          </v-tooltip>

          <v-tooltip top>
            <template v-slot:activator="{ on }">
              <v-btn fab dark small color="primary" @click="guardarCambios" v-on="on">
                <v-icon dark>save</v-icon>
              </v-btn>
            </template>
            <h3>Guardar Cambios</h3>
          </v-tooltip>
        </div>
      </div>
    </v-card>
  </v-flex>
</template>

<script>
export default {
  data() {
    return {
      conocimientos: [],
      conocimientos_ids_eliminar: []
    };
  },
  mounted() {
    this.$store.state.servicio.obtenerConocimiento(
      //onSuccess
      response => {
        let _conocimientos = JSON.parse(response);
        _conocimientos.forEach(c => {
          this.conocimientos.push(
            new Conocimiento(
              c._id.$oid,
              c.pregunta,
              c.respuesta,
              c.pdf,
              c.video
            )
          );
        });
      },
      //onError
      error => {
        console.log(error);
      }
    );
  },
  methods: {
    guardarCambios() {
      this.conocimientos_ids_eliminar.forEach(c_id => {
        this.$store.state.servicio.eliminarConocimiento(
          { conocimiento_id: c_id },
          response => {
            //onSuccess
            console.log(response);
          },
          error => {
            //onError
            console.log(error);
          }
        );
      });
      this.conocimientos_ids_eliminar = [];

      this.conocimientos.forEach(c => {
        if (c.conocimiento_id !== "") {
          this.$store.state.servicio.actualizarConocimiento(
            c,
            response => {
              //onSuccess
              console.log(response);
            },
            error => {
              //onError
              console.log(error);
            }
          );
        } else {
          c.profesor_id = this.$store.state.profesor_id;
          c.curso_id = this.$store.state.curso_id;

          this.$store.state.servicio.ingresarConocimiento(
            c,
            response => {
              //onSuccess
              let _id = JSON.parse(response)["$oid"];
              c.conocimiento_id = _id;
            },
            error => {
              //onError
              console.log(error);
            }
          );
        }
      });
    },
    agregarConocimiento() {
      this.conocimientos.push(new Conocimiento("", "", "", "", ""));
    },
    eliminarConocimiento(index, id) {
      this.conocimientos.splice(index, 1);
      if (id !== "") this.conocimientos_ids_eliminar.push(id);
    }
  }
};
class Conocimiento {
  constructor(conocimiento_id, pregunta, respuesta, pdf, video) {
    this.conocimiento_id = conocimiento_id;
    this.pregunta = pregunta;
    this.respuesta = respuesta;
    this.pdf = pdf;
    this.video = video;
    this._mostrarDetalle = true;
  }
}
</script>

<style scoped>
.chat-recurso {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
}
.chat-creacion {
  width: 100%;
  height: 100%;
  padding: 16px;
  overflow-y: auto;
}
</style>
