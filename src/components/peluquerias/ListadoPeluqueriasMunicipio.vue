<template src="./ListadoPeluquerias.html"></template>

<script>
    import Global from "../../Global";
    import axios from "axios";

    export default {
        name: 'ListadoPeluqueriasMunicipio',
        mounted() {
            let municipioId = this.$route.params.id;
            this.getPeluqueriasMunicipio(municipioId);
        },
        data() {
            return {
                url: Global.url,
                peluquerias: []
            }
        },
        methods: {
            getPeluqueriasMunicipio(municipioId){

                axios.get(this.url + 'municipios/' + municipioId)
                    .then(response => {
                        if (response.status == 200){
                            this.peluquerias = response.data.peluquerias;
                        }
                    });
            }
        }
    }
</script>