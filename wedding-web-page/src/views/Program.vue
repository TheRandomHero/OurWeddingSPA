<template>
    <v-container fluid fill-height>
        <v-row align="center">
            <v-col class="col-lg-4 offset-lg-4 col-sm-12" >
                <v-row justify="center">
                <div class="count-down">
                    <p class="cd-title">Visszaszámlálás:</p>
                    <Countdown end="June 25, 2021 13:00"></Countdown>
                </div>
                </v-row>
                <div class="program-details">
                    <p>13:00
                        <br>
                        Lány kikérés
                    </p>
                    <hr class="custom-line">
                    <p>15:00
                        <br>
                        Vendégvárás / Tandari tanya /
                    </p>
                    <hr class="custom-line">
                    <p>16:00
                        <br>
                        Polgári ceremónia / Tandari tanya /
                    </p>
                    <hr class="custom-line">
                    <p>16:20
                        <br>
                        Gratuláció fogadása
                    </p>
                    <hr class="custom-line">
                    <p>16:40
                        <br>
                        Csoportkép készítés
                    </p>
                    <hr class="custom-line">
                    <p>18:00
                        <br>
                        Templomi ceremónia / Szent Őrangyalok Templom /
                    </p>
                    <hr class="custom-line">
                    <p>18:30
                        <br>
                        Csokor dobás
                    </p>
                    <hr class="custom-line">
                    <p>20:00
                        <br>
                        Vacsora
                    </p>
                    <hr class="custom-line">
                    <p>21:00
                        <br>
                        Hajnalig tartó mulatság
                    </p>
                </div>
            </v-col>
        </v-row>
    </v-container>
</template>
<script>
import Countdown from './../components/Countdown'
export default {
    components:{
        Countdown
    }
}
</script>
<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Elsie+Swash+Caps');
@import url('https://fonts.googleapis.com/css2?family=Pattaya');

.custom-line{
    height: 25px;
    background-size: cover;
    background-image: url(./../assets/horizont/divider2.png);
    background-position: center;
    border: none;
}

.program-details{
    text-align: center;
    font-family: 'Elsie Swash Caps';
    font-size: 1.5rem;
}

.count-down{
    font-family: 'Elsie Swash Caps';
}
.cd-title{
    font-family: 'Pattaya';
    font-size: 2em;
    font-weight: 100;
}
</style>
