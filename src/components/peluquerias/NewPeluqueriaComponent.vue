<template src="./NewPeluqeriaComponent.html"></template>

<script>
    import Peluquerias from "../../models/Peluquerias";
    import axios from 'axios';
    import Global from "../../Global";
    import { useVuelidate } from '@vuelidate/core';
    import { required, minLength } from '@vuelidate/validators';
    import swal from 'sweetalert';

    export default {
        name: 'NewPeluqueriaComponent',
        setup () {
            return { v$: useVuelidate() }
        },
        mounted() {
            this.getMunicipios();
        },
        data() {
            return {
                url: Global.url,
                peluqueria: new Peluquerias('','','','','','','','','','','','','',''),
                inputRequired : false,
                responseOk : false,
                responseFail: false,
                responseMunicipiosFail : false,
                municipios: []
            }
        },
        validations () {
            return {
                peluqueria:{
                    nombrePeluqueria: { required, minLength: minLength(2) },
                    nombreContacto: { required, minLength: minLength(2) },
                    correo: { required, minLength: minLength(2) },
                    telefono: { required, minLength: minLength(2) }
                }
            }
        },
        methods: {
            getMunicipios(){
                axios.get(this.url + 'municipios')
                    .then(response => {
                        if (response.status == 200){
                            this.municipios = response.data.municipios;
                        }
                    })
                .catch(error =>{
                    this.responseMunicipiosFail = true;
                    swal(
                        'Error al cargar los municipios',
                        'Ha habido un problema al cargar los municipios',
                        'error'
                    );
                    console.log(error);
                })
            },
            savePeluqueria() {

                axios.post(this.url + 'peluquerias', this.peluqueria)
                    .then(response =>{
                        //console.log(response);
                        if (response.status == 200){
                            swal(
                                'Peluqueria Añadida',
                                'La Peluqueria se ha añadido correctamente',
                                'success'
                            )
                        }
                    })
                    .catch(error =>{
                        console.log(error.response.data.errors)
                        this.responseFail = true;
                        swal(
                            'Error al añadir la peluqueria',
                            'Ha habido un problema al guardar la peluqueria',
                            'error'
                        );
                        console.log(error);
                    })

                // console.log(this.peluqueria);
                // this.v$.touch();
                // if (this.v$.invalid()) {
                //     console.log("en el required");
                //     this.inputRequired = true;
                //     return false;
                // }else{
                //
                // }
            }
        }

    }
</script>