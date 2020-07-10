<template>
    <v-container fluid fill-height class="background">
        <v-row >
            <v-col>
                <v-row justify="space-around">
                    <div class="gallery">
                        <p>Kreatív Fotózás képei</p>
                        <v-card flat :to="{name: 'Fotók', params: {group: 'Kreativ'}}" max-width="400" height="300" color="#fcf8f5">
                            <img src="./../assets/kreativ.jpg" max-width="500" width="400">
                        </v-card>
                    </div>
                    <div class="gallery">
                        <p>Lagzis Fotók</p>
                        <v-card flat :to="{name: 'Fotók', params: {group: 'lagzi'}}" height="300" max-width="400" color="#fcf8f5">
                            <img src="./../assets/lagzis.jpg" max-height="500" width="400">
                        </v-card>
                    </div>
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
    .background{
        background-color: #fcf8f5;
    }
    .gallery{
        text-align: center;
        font-family: 'Elsie Swash Caps';
        font-size: 2em;
        margin: 40px;
    }
</style>