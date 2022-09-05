Vue.component('mi-componente', {
  props: {
    titulo: String,
    portada: String,
    costo: Number,
  },
  template: `
  <div class="card text-center" style="width: 18rem;">
      <img :src="portada" class="card-img-top img-fluid">
      <div class="card-body">
        <h5 class="card-title">{{ titulo }}</h5>
        <p class="card-text">U$S <em>{{ costo }}</em>
        </p>
      </div>
    </div>
    `,
})

Vue.component('mi-componente-list', {
  props: {
    titulo: String,
    portada: String,
    costo: Number,
  },
  template: `
  <tr class="row">
  <td class="col-2 py-2 border"><img :src="portada" class=" img-fluid"></td>
    <td class="col-5 py-2 border">{{ titulo }}</td>
    <td class="col-5 py-2 border">U$S <em>{{ costo }}</em></td>
  </tr>
    `,
})


const app = new Vue({

  el: '#app',
  data: {

    mensajeSecundario: "Lista de los Autos",

    mensajePrincipal: "Autos Clasicos ~ ARG",

    autos: [
      {
        id: 1,
        titulo: "Ford Falcon",
        portada: "img/falcon.jpg",
        costo: 4800,
      },
      {
        id: 1,
        titulo: "Torino",
        portada: "img/torino.jpg",
        costo: 3500,
      },
      {
        id: 1,
        titulo: "Charger",
        portada: "img/charger.jpg",
        costo: 16000,
      }
    ]
  }



})




