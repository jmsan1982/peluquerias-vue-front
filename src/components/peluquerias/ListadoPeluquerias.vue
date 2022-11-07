<template src="./ListadoPeluquerias.html"></template>

<script>
    import Global from "../../Global";
    import axios from "axios";
    import swal from 'sweetalert';

    export default {
        name: 'ListadoPeluquerias',
        mounted() {
            this.getPeluquerias();
        },
        data() {
            return {
                url: Global.url,
                peluquerias: [],
            }
        },
        methods: {
            getPeluquerias() {
                axios.get(this.url + 'peluquerias')
                    .then(response => {
                        if (response.status == 200) {
                            this.peluquerias = response.data.peluquerias;
                        }
                    });
            },
            deletePeluqueria(peluqueriaId) {

                swal({
                    title: "¿Estas seguro de borrar la peluqueria?",
                    text: "Una vez borrada, ya no se podra recuperar",
                    icon: "warning",
                    buttons: true,
                    dangerMode: true,
                })
                    .then((willDelete) => {
                        if (willDelete) {
                            axios.delete(this.url + 'peluquerias/' + peluqueriaId)
                                .then(response => {

                                    if (response.status == 200) {
                                        swal(
                                            'Peluqueria Borrada',
                                            'Peluqueria borrada correctamente',
                                            'success'
                                        );
                                        this.$router.push('/peluquerias')
                                    }
                                });
                        } else {
                            swal("Cancelado borrar peluqueria");
                        }
                    });
            }
        }
    }
</script>