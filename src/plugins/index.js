import Vue from 'vue'

var util = new Vue({
  methods: {
    formatDate (date) {
      if (!date) return null
      const [year, month, day] = date.split('-')
      return `${day}/${month}/${year}`
    },
    parseDate (date) {
      if (!date) return null
      const [day, month, year] = date.split('/')
      return `${year}-${month.padStart(2, '0')}-${day.padStart(2, '0')}`
    }
  }
})

var valid = new Vue({
  methods: {
    required(v){
        return !!v || 'Obrigatório'
    },
    min(v, min){
        return (!v || v.length >= min) || `Min. ${min} caracteres`
    },
    max(v, max){
      return (!v || v.length <= max) || `Max. ${max} caracteres`
    },
    equal(v, val){
        return (!v || v.length == val) || 'Preencha por completo'
    }
  }
})

export { util, valid }