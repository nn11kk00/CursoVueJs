var contador = new Vue({

  el: '#app',
  data: {
    contador: 0,
  },

  methods: {
    restar() {
      return this.contador--

    },
    sumar() {
      return this.contador++

    }
  }


})