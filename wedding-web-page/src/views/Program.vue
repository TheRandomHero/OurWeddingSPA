<template>
    <v-container>
        <v-row align="center">
            <v-col cols="4" offset="4" >
                <v-row justify="center">
                <div class="count-down">
                    <Countdown end="September 26, 2020 12:00"></Countdown>
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
                        Vendégvárás
                    </p>
                    <hr class="custom-line">
                    <p>16:00
                        <br>
                        Polgári ceremónia
                    </p>
                    <hr class="custom-line">
                    <p>17:00
                        <br>
                        Templomi ceremónia
                    </p>
                    <hr class="custom-line">
                    <p>17:30
                        <br>
                        Gratuláció fogadása
                    </p>
                    <hr class="custom-line">
                    <p>18:00
                        <br>
                        Csokor dobás
                    </p>
                    <hr class="custom-line">
                    <p>18:05
                        <br>
                        Fotózkodás
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

</style>
