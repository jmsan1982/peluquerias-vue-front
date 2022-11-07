<template src="./NewPeluqeriaComponent.html"></template>

<script>
    import Peluquerias from "../../models/Peluquerias";
    import axios from 'axios';
    import Global from "../../Global";
    import { useVuelidate } from '@vuelidate/core';
    import { required, minLength } from '@vuelidate/validators';
    import swal from 'sweetalert';

    export default {
        name: 'EditPeluqueriaComponent',
        setup () {
            return { v$: useVuelidate() }
        },
        mounted() {
            this.getMunicipios();
            this.getPeluqueria(this.peluqueriaId);
        },
        data() {
            return {
                url: Global.url,
                peluqueria: new Peluquerias('','','','','','','','','','','','','',''),
                inputRequired : false,
                responseOk : false,
                responseFail: false,
                responseMunicipiosFail : false,
                municipios: [],
                peluqueriaId: this.$route.params.id,
                isEdit: true
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
            getPeluqueria(peluqueriaId){
                axios.get(this.url + 'peluquerias/' + peluqueriaId)
                    .then(response => {
                        console.log(response.data.peluqueria.id)
                        if (response.status == 200){
                            this.peluqueria = response.data.peluqueria;
                            this.descuento = response.data.hayDescuento;
                            this.pendiente = response.data.pendiente;
                            this.totalVendido = response.data.totalVendido;
                        }

                    });
            },
            savePeluqueria() {

                axios.put(this.url + 'peluquerias/' + this.peluqueriaId, this.peluqueria)
                    .then(response =>{
                        //console.log(response);
                        if (response.status == 200){
                            swal(
                                'Peluqueria Editada',
                                'La Peluqueria se ha editado correctamente',
                                'success'
                            )
                        }
                    })
                    .catch(error =>{
                        this.responseFail = true;
                        swal(
                            'Error al editar la peluqueria',
                            'Ha habido un problema al editar la peluqueria',
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