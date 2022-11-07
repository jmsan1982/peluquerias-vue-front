<template src="./ListadoMunicipios.html">
</template>

<script>
    import Global from "../../Global";
    import axios from 'axios';

    export default {
        name: 'ListadoMunicipios',
        mounted() {
            this.getMunicipios();
        },
        data() {
            return {
                url: Global.url,
                municipios: []
            }
        },
        methods: {
            getMunicipios(){
                axios.get(this.url + 'municipios')
                    .then(response => {
                            if (response.status == 200){
                                this.municipios = response.data.municipios;
                            }
                    });
            }
        }
    }
</script>