<template>
    <v-container fluid fill-height class="information-page">
        <v-row justify="center">
            <p>Információ</p>
        </v-row>
        <v-row>
            <v-col>
                <v-row justify="space-around">
                    <div>
                        <v-img width="400" src="./../assets/templom2.jpg" />
                        <div class="information">
                            <h3>Templomi ceremónia helyszíne</h3>
                            <p>
                                Iskola tér 1,
                                <br>
                                Magyarkanizsa, Szerbia
                            </p>
                        </div>
                        <GmapMap
                            :center="templomCenter"
                            :zoom="14"
                            map-type-id="terrain"
                            style="width: 400px; height: 300px"
                            >
                            <GmapMarker
                                :key="index"
                                v-for="(m, index) in templom"
                                :position="m.position"
                                :clickable="true"
                                :draggable="true"
                                @click="center=m.position"/>
                        </GmapMap>
                    </div>
                     
                    <div class="information">
                        <v-img src="./../assets/tandari2.jpg" width="400"/>
                        <div >
                            <h3>Mulatság helyszíne</h3>
                            <p>Tandari tanya
                                Slatina 2
                               <br>
                                Martonos, Szerbia
                            </p>
                        </div>
                        <GmapMap
                            :center="tanyaCenter"
                            :zoom="12"
                            map-type-id="terrain"
                            style="width: 400px; height: 300px"
                            >
                            <GmapMarker
                                :key="index"
                                v-for="(m, index) in tanya"
                                :position="m.position"
                                :clickable="true"
                                :draggable="true"
                                @click="center=m.position"/>
                        </GmapMap>
                    </div>
                </v-row>
            </v-col>
        </v-row>
    </v-container>
</template>
<script>
export default {
    data () {
        return {
            templomCenter: { lat: 46.065611, lng: 20.057744 },
            templom: [
                {
                    position: { lat: 46.065611, lng: 20.057744 }
                }
            ],
            tanyaCenter: { lat: 46.107705, lng: 20.018889 },
            tanya: [
                {
                    position: { lat: 46.107705, lng: 20.018889 }
                }
            ]
        }
    }

}
</script>
<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Elsie+Swash+Caps');
.information-page{
    font-family: 'Elsie Swash Caps';
}

.information{
    text-align: center;
}
</style>
