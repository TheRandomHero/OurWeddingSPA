<template>
    <v-container>
        <v-row justify="center">
            <p>Információ</p>
        </v-row>
        <v-row>
            <v-col>
                <v-row>
                    <div>
                        <GmapMap
                            :center="templomCenter"
                            :zoom="14"
                            map-type-id="terrain"
                            style="width: 500px; height: 300px"
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
                    <div>
                        <GmapMap
                            :center="tanyaCenter"
                            :zoom="12"
                            map-type-id="terrain"
                            style="width: 500px; height: 300px"
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
    data(){
        return{
            templomCenter:{ lat: 46.065611, lng: 20.057744 },
            templom :[
                {
                    position: { lat: 46.065611, lng: 20.057744 }
                }
            ],
            tanyaCenter: { lat: 46.107705, lng: 20.018889 },
            tanya :[
                {
                    position: { lat: 46.107705, lng: 20.018889 }
                },
            ]
        }
    },
    
}
</script>
<style lang="sass" scoped>

</style>