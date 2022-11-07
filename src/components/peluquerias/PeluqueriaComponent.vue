<template src="./PeluqueriaComponent.html"></template>

<script>
    import Global from "../../Global";
    import axios from 'axios';

    export default {
        name: 'PeluqueriaComponent',
        data() {
            return {
                url: Global.url,
                peluqueria: null,
                descuento: null,
                pendiente: null,
                totalVendido: null,
                peluqueriaId: this.$route.params.id,
            }
        },
        mounted() {
            this.getPeluqueria(this.peluqueriaId);
        },
        methods: {
            getPeluqueria(peluqueriaId) {
                axios.get(this.url + 'peluquerias/' + peluqueriaId)
                    .then(response => {
                        console.log(response.data.peluqueria.id)
                        if (response.status == 200) {
                            this.peluqueria = response.data.peluqueria;
                            this.descuento = response.data.hayDescuento;
                            this.pendiente = response.data.pendiente;
                            this.totalVendido = response.data.totalVendido;
                        }

                    });
            },
        }
    }
</script>