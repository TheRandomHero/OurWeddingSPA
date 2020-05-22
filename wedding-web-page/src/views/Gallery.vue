<template>
    <v-container fluid>
        <v-row>
            <v-col>
                <p>Galléria</p>    
            </v-col>
        </v-row>
        <v-row>
            <v-col>
                <v-row justify="space-around">
                    <v-card max-width="400">
                        <v-img src="./../assets/lagzis.jpg" height="100%">
                            <v-card-title>Esküvői képek</v-card-title>
                        </v-img>
                    </v-card>
            
                    <v-card max-width="400">
                        <v-img src="./../assets/kreativ.jpg">
                            <v-card-title>Kreatív fotózás</v-card-title>
                        </v-img>
                    </v-card>
                </v-row>
            </v-col>
        </v-row>
    </v-container>    
</template>
<script>
export default {
    
}
</script>

<style scoped>

</style>