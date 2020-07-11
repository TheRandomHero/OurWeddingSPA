<template>
    <v-dialog v-model="dialog" fullscreen>
            <v-container fluid class="popup">
            <v-row>
                <v-col>
                    <v-row justify="center" aling="center">
                        <v-form v-on:submit.prevent="validateBeforeSubmit">
                        <h2>Kérjük add meg a kapott jelszavad:</h2>
                            <div class="form-group text-left">
                            <v-text-field
                                :append-icon="show ? 'fas fa-eye' : 'fas fa-eye-slash'"
                                v-model="password"
                                :type="show ? 'text' : 'password'"
                                label="Jelszó"
                                @click:append="show = !show"
                                required
                            ></v-text-field>
                            <span class="error help-block" ></span>
                            </div>
                            <div class="text-danger" v-if="error"><p>Helytelen jelszó!</p></div>
                            <v-btn type="submit">Bejelentkezés</v-btn>
                        </v-form>
                    </v-row>
                </v-col>
            </v-row>
            </v-container>
    </v-dialog>
</template>

<script>
import storageHelper from 'storage-helper'
export default {
  data () {
    return {
        dialog:true,
        error: null,
        password: null,
        show:false
    }
  },
  methods: {
    validateBeforeSubmit () {
        var passwordHash = require('password-hash');
        var hashedPassword = passwordHash.generate('atimeli')
      if (passwordHash.verify(this.password, hashedPassword)) {
        this.error = false
        storageHelper.setItem('user-password', hashedPassword)
        this.$router.push('/')
      } else {
        this.error = true
      }
    }
  }
}
</script>

<style scoped>
.popup{
    position: relative;
    background-color: rgba(241, 221, 207, 0.6);
    display: flex;
    overflow: hidden;
    align-items: center;
    min-height: 100%;
    }
</style>