<template src="./CreateFirmaComponent.html"></template>

<script>
    import Firmas from "../../models/Firmas";
    import axios from 'axios';
    import Global from "../../Global";
    import { useVuelidate } from '@vuelidate/core';
    import { required, minLength } from '@vuelidate/validators';
    import swal from 'sweetalert';

    export default {
        name: 'CreateFirmaComponent',
        setup () {
            return { v$: useVuelidate() }
        },
        data() {
            return {
                url: Global.url,
                firma: new Firmas('', null),
                inputRequired : false,
                responseOk : false,
                responseFail: false
            }
        },
        validations () {
            return {
                firma:{
                    name: { required, minLength: minLength(2) }
                }
            }
        },
        methods: {

            save(){
                this.v$.touch();
                if (this.v$.invalid()) {
                    this.inputRequired = true;
                    return false;
                }else{
                    axios.post(this.url + 'firmas', this.firma)
                        .then(response => {
                            if (response.status == 200){
                                swal(
                                    'Firma Añadida',
                                    'La firma se ha añadido correctamente',
                                    'success'
                                )
                            }
                        })
                        .catch(error => {
                            this.responseFail = true;
                            swal(
                                'Error al añadir la firmar',
                                'Ha habido un problema al guardar la firma',
                                'error'
                            )
                            console.log(error);
                        })
                }

            }
        }
    }
</script>