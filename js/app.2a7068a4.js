(function(e){function t(t){for(var o,a,s=t[0],c=t[1],l=t[2],d=0,h=[];d<s.length;d++)a=s[d],Object.prototype.hasOwnProperty.call(i,a)&&i[a]&&h.push(i[a][0]),i[a]=0;for(o in c)Object.prototype.hasOwnProperty.call(c,o)&&(e[o]=c[o]);u&&u(t);while(h.length)h.shift()();return r.push.apply(r,l||[]),n()}function n(){for(var e,t=0;t<r.length;t++){for(var n=r[t],o=!0,a=1;a<n.length;a++){var s=n[a];0!==i[s]&&(o=!1)}o&&(r.splice(t--,1),e=c(c.s=n[0]))}return e}var o={},a={app:0},i={app:0},r=[];function s(e){return c.p+"js/"+({}[e]||e)+"."+{"chunk-5f9382c6":"52a9d17e","chunk-0a18aa57":"d49d1058","chunk-2d0da902":"2b08663d","chunk-761a2338":"95a77e22","chunk-ab6ad4c8":"14f68d05","chunk-ad4c0392":"facf0299","chunk-ca33d298":"8390aa30","chunk-ef3c6876":"81c067b9"}[e]+".js"}function c(t){if(o[t])return o[t].exports;var n=o[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,c),n.l=!0,n.exports}c.e=function(e){var t=[],n={"chunk-5f9382c6":1,"chunk-0a18aa57":1,"chunk-761a2338":1,"chunk-ab6ad4c8":1,"chunk-ca33d298":1,"chunk-ef3c6876":1};a[e]?t.push(a[e]):0!==a[e]&&n[e]&&t.push(a[e]=new Promise(function(t,n){for(var o="css/"+({}[e]||e)+"."+{"chunk-5f9382c6":"d0f73e5e","chunk-0a18aa57":"6ca01931","chunk-2d0da902":"31d6cfe0","chunk-761a2338":"2f164c2f","chunk-ab6ad4c8":"f6bfc5a7","chunk-ad4c0392":"31d6cfe0","chunk-ca33d298":"b4b0ef2a","chunk-ef3c6876":"3d6b8121"}[e]+".css",i=c.p+o,r=document.getElementsByTagName("link"),s=0;s<r.length;s++){var l=r[s],d=l.getAttribute("data-href")||l.getAttribute("href");if("stylesheet"===l.rel&&(d===o||d===i))return t()}var h=document.getElementsByTagName("style");for(s=0;s<h.length;s++){l=h[s],d=l.getAttribute("data-href");if(d===o||d===i)return t()}var u=document.createElement("link");u.rel="stylesheet",u.type="text/css",u.onload=t,u.onerror=function(t){var o=t&&t.target&&t.target.src||i,r=new Error("Loading CSS chunk "+e+" failed.\n("+o+")");r.code="CSS_CHUNK_LOAD_FAILED",r.request=o,delete a[e],u.parentNode.removeChild(u),n(r)},u.href=i;var p=document.getElementsByTagName("head")[0];p.appendChild(u)}).then(function(){a[e]=0}));var o=i[e];if(0!==o)if(o)t.push(o[2]);else{var r=new Promise(function(t,n){o=i[e]=[t,n]});t.push(o[2]=r);var l,d=document.createElement("script");d.charset="utf-8",d.timeout=120,c.nc&&d.setAttribute("nonce",c.nc),d.src=s(e);var h=new Error;l=function(t){d.onerror=d.onload=null,clearTimeout(u);var n=i[e];if(0!==n){if(n){var o=t&&("load"===t.type?"missing":t.type),a=t&&t.target&&t.target.src;h.message="Loading chunk "+e+" failed.\n("+o+": "+a+")",h.name="ChunkLoadError",h.type=o,h.request=a,n[1](h)}i[e]=void 0}};var u=setTimeout(function(){l({type:"timeout",target:d})},12e4);d.onerror=d.onload=l,document.head.appendChild(d)}return Promise.all(t)},c.m=e,c.c=o,c.d=function(e,t,n){c.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},c.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},c.t=function(e,t){if(1&t&&(e=c(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(c.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)c.d(n,o,function(t){return e[t]}.bind(null,o));return n},c.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return c.d(t,"a",t),t},c.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},c.p="/TesisChatbotDocente_Vue/",c.oe=function(e){throw console.error(e),e};var l=window["webpackJsonp"]=window["webpackJsonp"]||[],d=l.push.bind(l);l.push=t,l=l.slice();for(var h=0;h<l.length;h++)t(l[h]);var u=d;r.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"13e3":function(e,t,n){},"555a":function(e,t,n){e.exports=n.p+"img/icon.4e8fc6c6.png"},"56d7":function(e,t,n){"use strict";n.r(t);var o=n("2b0e"),a=n("59ca"),i=n.n(a),r=(n("588e"),function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-app",[n("router-view",{staticClass:"contenedor-pattern",on:{showDialog:e.showDialog,showSnackbar:e.showSnackbar}}),n("v-dialog",{attrs:{"max-width":"290"},model:{value:e.dialog,callback:function(t){e.dialog=t},expression:"dialog"}},[n("v-card",[n("div",{staticClass:"mensaje"},[e._v(e._s(e.msg_dialog))]),n("v-card-actions",[n("v-spacer"),n("v-btn",{attrs:{color:"primary",text:""},on:{click:function(t){e.dialog=!1}}},[e._v("Cerrar")])],1)],1)],1),n("v-snackbar",{model:{value:e.snackbar,callback:function(t){e.snackbar=t},expression:"snackbar"}},[e._v("\n    "+e._s(e.msg_snackbar)+"\n    "),n("v-btn",{attrs:{color:"success",text:""},on:{click:function(t){e.snackbar=!1}}},[e._v("Cerrar")])],1)],1)}),s=[],c={name:"App",data(){return{msg_dialog:"",msg_snackbar:"",dialog:!1,snackbar:!1,timer:null,stopCountingWhenWindowIsInactive:!0,updateTime:1e4}},mounted(){if(Array.prototype.sample=function(){return this[Math.floor(Math.random()*this.length)]},this.stopCountingWhenWindowIsInactive){if("undefined"!==typeof document.hidden)var e="hidden",t="visibilitychange";else if("undefined"!==typeof document.msHidden)e="msHidden",t="msvisibilitychange";var n=document[e];document.addEventListener(t,()=>{n!=document[e]&&(document[e]?clearInterval(this.timer):this.startCounting(),n=document[e])})}this.startCounting()},methods:{showDialog(e){this.msg_dialog=e,this.dialog=!0},showSnackbar(e){this.msg_snackbar=e,this.snackbar=!0},obtenerFechaActual(){var e=new Date,t=e.getDate(),n=e.getMonth()+1,o=e.getFullYear();return t<10&&(t="0"+t),n<10&&(n="0"+n),t+"/"+n+"/"+o},getTimeSpentOnSite(){let e=parseInt(localStorage.getItem("timeSpentOnSite"));return e=isNaN(e)?0:e,e},startCounting(){let e=Date.now();this.timer=setInterval(()=>{let t=this.$store.state.servicio.sesion.obtenerSesion(),n=t["id"],o=this.obtenerFechaActual();t["id"]&&"alumno"==t["tipo"]&&this.$store.state.servicio.tiempo.obtenerTiempoAlumno(n,o,t=>{let a=t["tiempo"]+(Date.now()-e);e=parseInt(Date.now()),this.$store.state.servicio.tiempo.actualizarTiempoAlumno(n,o,a,e=>{},e=>{console.log(e)})},e=>{console.log(e)})},this.updateTime)}}},l=c,d=(n("5c0b"),n("2877")),h=n("6544"),u=n.n(h),p=n("7496"),m=n("8336"),f=n("b0af"),b=n("99d9"),y=n("169a"),g=n("2db4"),S=n("2fa4"),v=Object(d["a"])(l,r,s,!1,null,null,null),C=v.exports;u()(v,{VApp:p["a"],VBtn:m["a"],VCard:f["a"],VCardActions:b["a"],VDialog:y["a"],VSnackbar:g["a"],VSpacer:S["a"]});var T=n("8c4f"),j=function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("v-layout",{staticClass:"componente-login",attrs:{"align-center":"","justify-center":""}},[o("div",{staticClass:"componente-color"}),o("v-flex",{attrs:{xs12:"",sm7:"",md5:"",lg3:"","px-2":""}},[o("v-tabs",{attrs:{"fixed-tabs":""}},[o("v-tab",[e._v("Profesor")]),o("v-tab",[e._v("Alumno")]),o("v-tab-item",[o("v-card",{staticClass:"pt-8 px-3",attrs:{elevation:"6"}},[o("div",{staticStyle:{"max-width":"100px",margin:"0 auto"}},[o("img",{attrs:{src:n("555a"),width:"100%"}})]),o("div",{staticStyle:{"max-width":"150px",margin:"10px auto 30px"}},[o("img",{attrs:{src:n("67bf"),width:"100%"}})]),o("v-divider"),o("v-form",{ref:"form",attrs:{action:"formulario"},on:{submit:function(t){return t.preventDefault(),e.iniciarSesionProfesor(t)}}},[o("v-card-text",{staticClass:"pb-2"},[o("v-alert",{attrs:{type:"error",icon:"mdi-cloud-alert",text:"",dismissible:""},model:{value:e.alert,callback:function(t){e.alert=t},expression:"alert"}},[e._v("Usuario o contraseña incorrecta")]),o("v-text-field",{attrs:{rules:e.usuarioRules,label:"Usuario"},model:{value:e.usuario,callback:function(t){e.usuario=t},expression:"usuario"}}),o("v-text-field",{attrs:{rules:e.contraseñaRules,label:"Contraseña",type:"password"},model:{value:e.contraseña,callback:function(t){e.contraseña=t},expression:"contraseña"}})],1),o("v-card-actions",[o("v-btn",{staticClass:"mb-2",attrs:{loading:e.loading,disabled:e.loading,block:"",color:"primary",type:"submit"}},[e._v("Iniciar Sesión")])],1)],1)],1)],1),o("v-tab-item",[o("v-card",{staticClass:"pt-8 px-3",attrs:{elevation:"6"}},[o("div",{staticStyle:{"max-width":"100px",margin:"0 auto"}},[o("img",{attrs:{src:n("b5c1"),width:"100%"}})]),o("div",{staticStyle:{"max-width":"150px",margin:"10px auto 30px"}},[o("img",{attrs:{src:n("d18b"),width:"100%"}})]),o("v-divider"),o("v-form",{ref:"form",attrs:{action:"formulario"},on:{submit:function(t){return t.preventDefault(),e.iniciarSesionAlumno(t)}}},[o("v-card-text",{staticClass:"pb-2"},[o("v-alert",{attrs:{type:"error",icon:"mdi-cloud-alert",text:"",dismissible:""},model:{value:e.alert,callback:function(t){e.alert=t},expression:"alert"}},[e._v("Usuario o contraseña incorrecta")]),o("v-text-field",{attrs:{rules:e.usuarioRules,label:"Usuario"},model:{value:e.usuario,callback:function(t){e.usuario=t},expression:"usuario"}}),o("v-text-field",{attrs:{rules:e.contraseñaRules,label:"Contraseña",type:"password"},model:{value:e.contraseña,callback:function(t){e.contraseña=t},expression:"contraseña"}})],1),o("v-card-actions",[o("v-btn",{staticClass:"mb-2",attrs:{loading:e.loading,disabled:e.loading,block:"",color:"success",type:"submit"}},[e._v("Iniciar Sesión")])],1)],1)],1)],1)],1)],1)],1)},k=[],P={data(){return{usuario:"","contraseña":"",usuarioRules:[e=>!!e||"Usuario es requerido"],"contraseñaRules":[e=>!!e||"Contraseña es requerida"],loading:!1,alert:!1}},methods:{iniciarSesionProfesor(){this.$refs.form.validate()&&(this.loading=!0,this.$store.state.servicio.profesor.iniciarSesionProfesor(this.usuario,this.contraseña,e=>{let t=e["profesor_id"];t?(this.$store.state.servicio.sesion.iniciarSesion(t,"profesor"),this.$router.push({name:"cursos"})):this.alert=!0,this.loading=!1},e=>{console.log(e),this.loading=!1}))},iniciarSesionAlumno(){this.$refs.form.validate()&&(this.loading=!0,this.$store.state.servicio.alumno.iniciarSesionAlumno(this.usuario,this.contraseña,e=>{let t=e["alumno_id"];t?(this.$store.state.servicio.sesion.iniciarSesion(t,"alumno"),this.$router.push({name:"cursos"})):this.alert=!0,this.loading=!1},e=>{console.log(e),this.loading=!1}))}}},O=P,A=(n("cae1"),n("0798")),J=n("ce7e"),N=n("0e8f"),x=n("4bd4"),w=n("a722"),V=n("71a3"),U=n("c671"),X=n("fe57"),D=n("8654"),R=Object(d["a"])(O,j,k,!1,null,"c68810bc",null),z=R.exports;u()(R,{VAlert:A["a"],VBtn:m["a"],VCard:f["a"],VCardActions:b["a"],VCardText:b["b"],VDivider:J["a"],VFlex:N["a"],VForm:x["a"],VLayout:w["a"],VTab:V["a"],VTabItem:U["a"],VTabs:X["a"],VTextField:D["a"]}),o["a"].use(T["a"]);var F=new T["a"]({routes:[{alias:"/",path:"/login",name:"login",component:z},{path:"/perfil",name:"perfil",component:()=>Promise.all([n.e("chunk-5f9382c6"),n.e("chunk-ad4c0392"),n.e("chunk-ef3c6876")]).then(n.bind(null,"68f9"))},{path:"/cursos",name:"cursos",component:()=>Promise.all([n.e("chunk-5f9382c6"),n.e("chunk-ad4c0392"),n.e("chunk-ca33d298")]).then(n.bind(null,"0dcf"))},{path:"/creacion/:tema_id",name:"creacion",component:()=>Promise.all([n.e("chunk-5f9382c6"),n.e("chunk-0a18aa57"),n.e("chunk-761a2338")]).then(n.bind(null,"a994"))},{path:"/chatbot/:tema_id",name:"chatbot",component:()=>Promise.all([n.e("chunk-5f9382c6"),n.e("chunk-0a18aa57"),n.e("chunk-2d0da902")]).then(n.bind(null,"6baa"))},{path:"/test",name:"test",component:()=>Promise.all([n.e("chunk-5f9382c6"),n.e("chunk-ab6ad4c8")]).then(n.bind(null,"78c1"))}]}),_=n("2f62");o["a"].use(_["a"]);const G="https://braintutor-service.herokuapp.com";var I=new _["a"].Store({state:{servicio:{obtenerPreguntaMaterial(e,t){fetch(`${G}/obtenerPreguntaMaterial`).then(e=>e.json()).catch(e=>t(e)).then(t=>e(t))},entrenar(e,t,n){fetch(`${G}/entrenar`,{method:"POST",body:JSON.stringify({tema_id:e}),headers:{"Content-Type":"application/json"}}).then(e=>e.json()).catch(e=>n(e)).then(e=>t(e))},obtenerAlumnos(e,t){fetch(`${G}/obtenerAlumnos`).catch(e=>t(e)).then(t=>e(t))},enviarPerfil(e,t,n){fetch(`${G}/perfil`,{method:"POST",body:JSON.stringify(e),headers:{"Content-Type":"application/json"}}).then(e=>t(e)).catch(e=>n(e))},alumno:{obtenerAlumnoPorId(e,t,n){fetch(`${G}/obtenerAlumnoPorId`,{method:"POST",body:JSON.stringify({alumno_id:e}),headers:{"Content-Type":"application/json"}}).then(e=>e.json()).catch(e=>n(e)).then(e=>t(e))},obtenerAlumnosPorCurso(e,t,n){fetch(`${G}/obtenerAlumnosPorCurso`,{method:"POST",body:JSON.stringify({curso_id:e}),headers:{"Content-Type":"application/json"}}).then(e=>e.json()).catch(e=>n(e)).then(e=>t(e))},obtenerAlumnoPorNombre(e,t,n){fetch(`${G}/obtenerAlumnoPorNombre`,{method:"POST",body:JSON.stringify({alumno_nombre:e}),headers:{"Content-Type":"application/json"}}).then(e=>e.json()).catch(e=>n(e)).then(e=>t(e))},iniciarSesionAlumno(e,t,n,o){fetch(`${G}/iniciarSesionAlumno`,{method:"POST",body:JSON.stringify({codigo:e,contrasena:t}),headers:{"Content-Type":"application/json"}}).then(e=>e.json()).catch(e=>o(e)).then(e=>n(e))},actualizarAlumno(e,t,n,o,a,i){fetch(`${G}/actualizarAlumno`,{method:"POST",body:JSON.stringify({alumno_id:e,nombre:t,apellido_paterno:n,apellido_materno:o}),headers:{"Content-Type":"application/json"}}).then(e=>e.json()).catch(e=>i(e)).then(e=>a(e))}},chat:{obtenerRespuestaProfesor(e,t,n,o,a){fetch(`${G}/obtenerRespuestaProfesor`,{method:"POST",body:JSON.stringify({tema_id:e,consulta:t,profesor_id:n}),headers:{"Content-Type":"application/json"}}).then(e=>e.json()).catch(e=>a(e)).then(e=>o(e))},obtenerRespuestaAlumno(e,t,n,o,a){fetch(`${G}/obtenerRespuestaAlumno`,{method:"POST",body:JSON.stringify({tema_id:e,consulta:t,alumno_id:n}),headers:{"Content-Type":"application/json"}}).then(e=>e.json()).catch(e=>a(e)).then(e=>o(e))}},conocimiento:{obtenerConocimientoPorTema(e,t,n){fetch(`${G}/obtenerConocimientoPorTema`,{method:"POST",body:JSON.stringify({tema_id:e}),headers:{"Content-Type":"application/json"}}).then(e=>e.json()).catch(e=>n(e)).then(e=>t(e))},ingresarConocimiento(e,t,n,o,a,i){fetch(`${G}/ingresarConocimiento`,{method:"POST",body:JSON.stringify({tema_id:e,material_id:t,preguntas:n,respuestas:o}),headers:{"Content-Type":"application/json"}}).then(e=>e.json()).catch(e=>i(e)).then(e=>a(e))},actualizarConocimiento(e,t,n,o,a,i,r){fetch(`${G}/actualizarConocimiento`,{method:"POST",body:JSON.stringify({conocimiento_id:e,tema_id:t,material_id:n,preguntas:o,respuestas:a}),headers:{"Content-Type":"application/json"}}).then(e=>e.json()).catch(e=>r(e)).then(e=>i(e))},eliminarConocimiento(e,t,n){fetch(`${G}/eliminarConocimiento`,{method:"POST",body:JSON.stringify({conocimiento_id:e}),headers:{"Content-Type":"application/json"}}).catch(e=>n(e)).then(e=>t(e))}},cuestionario:{obtenerCuestionarioPorTema(e,t,n){fetch(`${G}/obtenerCuestionarioPorTema`,{method:"POST",body:JSON.stringify({tema_id:e}),headers:{"Content-Type":"application/json"}}).then(e=>e.json()).catch(e=>n(e)).then(e=>t(e))},ingresarCuestionario(e,t,n,o,a,i,r){fetch(`${G}/ingresarCuestionario`,{method:"POST",body:JSON.stringify({tema_id:e,nombre:t,preguntas:n,nivel:o,tiempo:a}),headers:{"Content-Type":"application/json"}}).then(e=>e.json()).then(e=>i(e)).catch(e=>r(e))},actualizarCuestionario(e,t,n,o,a,i,r){fetch(`${G}/actualizarCuestionario`,{method:"POST",body:JSON.stringify({cuestionario_id:e,nombre:t,preguntas:n,nivel:o,tiempo:a}),headers:{"Content-Type":"application/json"}}).then(e=>e.text()).then(e=>i(e)).catch(e=>r(e))},eliminarCuestionario(e,t,n){fetch(`${G}/eliminarCuestionario`,{method:"POST",body:JSON.stringify({cuestionario_id:e}),headers:{"Content-Type":"application/json"}}).then(e=>e.text()).then(e=>t(e)).catch(e=>n(e))}},curso:{obtenerCursoPorProfesor(e,t,n){console.log(e),fetch(`${G}/obtenerCursoPorProfesor`,{method:"POST",body:JSON.stringify({profesor_id:e}),headers:{"Content-Type":"application/json"}}).then(e=>e.json()).catch(e=>n(e)).then(e=>t(e))},obtenerCursoPorAlumno(e,t,n){fetch(`${G}/obtenerCursoPorAlumno`,{method:"POST",body:JSON.stringify({alumno_id:e}),headers:{"Content-Type":"application/json"}}).then(e=>e.json()).catch(e=>n(e)).then(e=>t(e))}},entidad:{obtenerEntidadPorTema(e,t,n){fetch(`${G}/obtenerEntidadPorTema`,{method:"POST",body:JSON.stringify({tema_id:e}),headers:{"Content-Type":"application/json"}}).then(e=>e.json()).catch(e=>n(e)).then(e=>t(e))},ingresarEntidad(e,t,n,o,a,i){fetch(`${G}/ingresarEntidad`,{method:"POST",body:JSON.stringify({tema_id:e,nombre:t,columnas:n,datos:o}),headers:{"Content-Type":"application/json"}}).then(e=>e.text()).catch(e=>i(e)).then(e=>a(e))},actualizarEntidad(e,t,n,o,a,i){fetch(`${G}/actualizarEntidad`,{method:"POST",body:JSON.stringify({entidad_id:e,nombre:t,columnas:n,datos:o}),headers:{"Content-Type":"application/json"}}).then(e=>e.text()).catch(e=>i(e)).then(e=>a(e))},eliminarEntidad(e,t,n){fetch(`${G}/eliminarEntidad`,{method:"POST",body:JSON.stringify({entidad_id:e}),headers:{"Content-Type":"application/json"}}).then(e=>e.text()).catch(e=>n(e)).then(e=>t(e))}},estilo:{actualizarEstiloAprendizaje(e,t,n,o,a,i,r,s,c,l,d){fetch(`${G}/actualizarEstiloAprendizaje`,{method:"POST",body:JSON.stringify({alumno_id:e,procesamiento:t,procesamiento_valor:n,percepcion:o,percepcion_valor:a,entrada:i,entrada_valor:r,comprension:s,comprension_valor:c}),headers:{"Content-Type":"application/json"}}).then(e=>e.json()).catch(e=>d(e)).then(e=>l(e))},obtenerEstiloAprendizajePorAlumnoId(e,t,n){fetch(`${G}/obtenerEstiloAprendizajePorAlumnoId`,{method:"POST",body:JSON.stringify({alumno_id:e}),headers:{"Content-Type":"application/json"}}).then(e=>e.json()).catch(e=>n(e)).then(e=>t(e))}},evaluacion:{obtenerEvaluacion(e,t,n,o){fetch(`${G}/obtenerEvaluacion`,{method:"POST",body:JSON.stringify({alumno_id:e,cuestionario_id:t}),headers:{"Content-Type":"application/json"}}).then(e=>e.json()).catch(e=>o(e)).then(e=>n(e))},actualizarEvaluacion(e,t,n,o,a,i){fetch(`${G}/actualizarEvaluacion`,{method:"POST",body:JSON.stringify({alumno_id:e,cuestionario_id:t,fecha:n,nota:o}),headers:{"Content-Type":"application/json"}}).then(e=>e.json()).catch(e=>i(e)).then(e=>a(e))},puntajeTotalAlumnoPorCurso(e,t,n,o){fetch(`${G}/puntajeTotalAlumnoPorCurso`,{method:"POST",body:JSON.stringify({alumno_id:e,curso_id:t}),headers:{"Content-Type":"application/json"}}).then(e=>e.json()).catch(e=>o(e)).then(e=>n(e))}},material:{ingresarMaterial(e,t,n,o,a,i,r,s,c,l,d){fetch(`${G}/ingresarMaterial`,{method:"POST",body:JSON.stringify({tema_id:e,nombre:t,texto:n,documento:o,video:a,imagen:i,quiz:r,ejemplos:s,importancia:c}),headers:{"Content-Type":"application/json"}}).then(e=>e.json()).catch(e=>d(e)).then(e=>l(e))},actualizarMaterial(e,t,n,o,a,i,r,s,c,l,d,h,u,p){fetch(`${G}/actualizarMaterial`,{method:"POST",body:JSON.stringify({material_id:e,tema_id:t,nombre:n,texto:o,documento:a,video:i,imagen:r,quiz:s,ejemplos:c,importancia:l,explicacion:d,faq:h}),headers:{"Content-Type":"application/json"}}).then(e=>e.text()).catch(e=>p(e)).then(e=>u(e))},obtenerMaterialPorId(e,t,n,o){fetch(`${G}/obtenerMaterialPorId`,{method:"POST",body:JSON.stringify({material_id:t}),headers:{"Content-Type":"application/json"}}).then(e=>e.json()).catch(e=>o(e)).then(e=>n(e))},obtenerMaterialPorAlumnoId(e,t,n,o){fetch(`${G}/obtenerMaterialPorAlumnoId`,{method:"POST",body:JSON.stringify({alumno_id:e,material_id:t}),headers:{"Content-Type":"application/json"}}).then(e=>e.json()).catch(e=>o(e)).then(e=>n(e))},obtenerMaterialPorTema(e,t,n){fetch(`${G}/obtenerMaterialPorTema`,{method:"POST",body:JSON.stringify({tema_id:e}),headers:{"Content-Type":"application/json"}}).then(e=>e.json()).catch(e=>n(e)).then(e=>t(e))},eliminarMaterial(e,t,n){fetch(`${G}/eliminarMaterial`,{method:"POST",body:JSON.stringify({material_id:e}),headers:{"Content-Type":"application/json"}}).then(e=>e.text()).catch(e=>n(e)).then(e=>t(e))}},matricula:{matricularAlumno(e,t,n,o){fetch(`${G}/matricularAlumno`,{method:"POST",body:JSON.stringify({alumno_id:e,curso_id:t}),headers:{"Content-Type":"application/json"}}).then(e=>e.json()).catch(e=>o(e)).then(e=>n(e))},desmatricularAlumno(e,t,n,o){fetch(`${G}/desmatricularAlumno`,{method:"POST",body:JSON.stringify({alumno_id:e,curso_id:t}),headers:{"Content-Type":"application/json"}}).then(e=>e.json()).catch(e=>o(e)).then(e=>n(e))}},profesor:{obtenerProfesorPorId(e,t,n){fetch(`${G}/obtenerProfesorPorId`,{method:"POST",body:JSON.stringify({profesor_id:e}),headers:{"Content-Type":"application/json"}}).then(e=>e.json()).catch(e=>n(e)).then(e=>t(e))},actualizarProfesor(e,t,n,o,a,i){fetch(`${G}/actualizarProfesor`,{method:"POST",body:JSON.stringify({profesor_id:e,nombre:t,apellido_paterno:n,apellido_materno:o}),headers:{"Content-Type":"application/json"}}).then(e=>e.json()).catch(e=>i(e)).then(e=>a(e))},iniciarSesionProfesor(e,t,n,o){fetch(`${G}/iniciarSesionProfesor`,{method:"POST",body:JSON.stringify({codigo:e,contrasena:t}),headers:{"Content-Type":"application/json"}}).then(e=>e.json()).catch(e=>o(e)).then(e=>n(e))}},sesion:{cerrarSesion(){localStorage.removeItem("id"),localStorage.removeItem("tipo")},iniciarSesion(e,t){localStorage.setItem("id",e),localStorage.setItem("tipo",t)},obtenerSesion(){return{id:localStorage.getItem("id"),tipo:localStorage.getItem("tipo")}}},tema:{obtenerTemaPorCurso(e,t,n){fetch(`${G}/obtenerTemaPorCurso`,{method:"POST",body:JSON.stringify({curso_id:e}),headers:{"Content-Type":"application/json"}}).then(e=>e.json()).catch(e=>n(e)).then(e=>t(e))}},tiempo:{tiempoTotalAlumnoPorDia(e,t,n){fetch(`${G}/tiempoTotalAlumnoPorDia`,{method:"POST",body:JSON.stringify({alumno_id:e}),headers:{"Content-Type":"application/json"}}).then(e=>e.json()).catch(e=>n(e)).then(e=>t(e))},obtenerTiempoAlumno(e,t,n,o){fetch(`${G}/obtenerTiempoAlumno`,{method:"POST",body:JSON.stringify({alumno_id:e,fecha:t}),headers:{"Content-Type":"application/json"}}).then(e=>e.json()).catch(e=>o(e)).then(e=>n(e))},actualizarTiempoAlumno(e,t,n,o,a){fetch(`${G}/actualizarTiempoAlumno`,{method:"POST",body:JSON.stringify({alumno_id:e,fecha:t,tiempo:n}),headers:{"Content-Type":"application/json"}}).then(e=>e.json()).catch(e=>a(e)).then(e=>o(e))}}}},mutations:{},actions:{}}),L=n("f309");o["a"].use(L["a"]);var E=new L["a"]({icons:{iconfont:"mdi"}});o["a"].config.productionTip=!1,i.a.initializeApp({apiKey:"AIzaSyCicLp-X6d2XGXTUPwb9SSfYDvsuN1N2VE",authDomain:"chatbot-adaptativo.firebaseapp.com",databaseURL:"https://chatbot-adaptativo.firebaseio.com",projectId:"chatbot-adaptativo",storageBucket:"chatbot-adaptativo.appspot.com",messagingSenderId:"943322485233",appId:"1:943322485233:web:4d843654a0500f810bb450"}),new o["a"]({router:F,store:I,vuetify:E,render:e=>e(C)}).$mount("#app")},"5c0b":function(e,t,n){"use strict";var o=n("13e3"),a=n.n(o);a.a},"67bf":function(e,t,n){e.exports=n.p+"img/name.2e103cf5.png"},b5c1:function(e,t){e.exports="data:image/png;base64,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"},cae1:function(e,t,n){"use strict";var o=n("e220"),a=n.n(o);a.a},d18b:function(e,t,n){e.exports=n.p+"img/logo4.6193f1cc.jpg"},e220:function(e,t,n){}});
//# sourceMappingURL=app.2a7068a4.js.map