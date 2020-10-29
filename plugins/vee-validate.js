import Vue from "vue"
import * as VeeValidate from 'vee-validate';
// import VeeValidator from "vee-validate"

Vue.use(VeeValidate, {
    inject: true,
    fieldsBagName: '$veeFields',
    errorBagName: '$veeErrors'
  })