<template>
    <v-app>
    <v-container fluid  grid-list-md class="background-login">
        <v-layout align-start >
            <v-flex xs12 >
                <v-img max-width="150" class="mt-5 ml-12" src='@/assets/img/logo_pitang.png'></v-img>
            </v-flex>
        </v-layout>
        <v-layout justify-center align-center>
            <v-flex xs12 md3>
                <v-card class="elevation-12 " color="rgb(0, 0, 0, 0.8)">
                    <v-card-title primary-title>
                        <div >
                            <h3 class="pt-4 pl-5 color-text font-weight-medium display-1 mb-0">Entrar</h3>
                        </div>
                    </v-card-title>
                    <v-flex xs10 offset-xs1>
                        <v-alert :value="alert" type="error" :color="this.$store.state.login.attempts < 6 ? `warning` : `error`" transition="scale-transition">
                            <span v-if="this.$store.state.login.attempts < 6"> 
                                Desculpe, não encontramos nenhuma conta. Tente novamente.
                            </span>
                            <span v-else> 
                                Conta bloqueada até {{ this.$store.state.login.datetime}}
                            </span>
                        </v-alert>
                    </v-flex>
                    <v-form ref="form" lazy-validation>
                        <v-layout align-center justify-center>
                            <v-flex xs10>
                                <v-card-text>
                                    <v-text-field v-model="login" color="rgb(255, 255, 255, 1)" dark background-color="rgb(51, 51, 51, 1)" label="Login" :rules="[v => !!v || 'Campo obrigatório.']" outlined required> </v-text-field>
                                    <v-text-field v-model="password" color="rgb(255, 255, 255, 1)" dark background-color="rgb(51, 51, 51, 1)" :append-icon="show_password ? 'visibility' : 'visibility_off'" @click:append="show_password = !show_password" id="password" label="Senha" :type="show_password ? 'text' : 'password'" :rules="[v => v.length > 1 && v.length < 40 || 'A senha deve ter entre 1 e 40 caracteres.']" outlined required></v-text-field>
                                </v-card-text>
                            </v-flex>
                        </v-layout>
                        <v-layout align-center justify-center>
                            <v-flex xs9>
                                    <v-btn :loading="loading" depressed large block color="primary" class="white--text" @click="signin">
                                        Entrar
                                    </v-btn>
                            </v-flex>
                        </v-layout>
                        <div class="division" ></div>
                        <v-layout align-center justify-center>
                            <v-flex xs9>
                                <div class="color font-weight-light subheading">Veja mais sobre o projeto no <a target="blank" href="https://github.com/sidneyfilho/systemusercar_frontend" class="color-text"> GitHub</a>.</div>
                            </v-flex>
                        </v-layout>
                        <br>
                        <br>
                    </v-form>
                </v-card>
            </v-flex>
        </v-layout>
    </v-container>
    </v-app>
</template>

<script>
    export default {
        data: () => ({
            login : '',
            password : '',
            show_password: false,
            loading: false,
            alert: false
        }),
        methods : {
            async signin(){
                if (this.$refs.form.validate()) {
                    this.loading = true
                    try {
                        let response = await this.$service.post('/signin', { login: this.login, password: this.password })
                        this.$store.commit('token', response.data.token)
                        if (this.$store.state.token != null){
                            if(this.$route.params.nextUrl != null){
                                this.$router.push("/user")
                            } else {
                                this.$router.go()
                            }
                        }
                    } catch (e) {
                        this.alert = true
                        this.loading = false
                    }
                }
            }
        },
        watch: {
            loader () {
                const l = this.loader
                this[l] = !this[l]
                setTimeout(() => (this[l] = false), 3000)
                this.loader = null
            }
        }
    }
</script>

<style scoped>
    .division{
        height: 150px;
    }
    .background-login{
        background: rgb(255,233,187);
        background: linear-gradient(90deg, rgba(255,233,187,1) 0%, rgba(251,85,65,1) 100%);
        background-size:100%;
        height: 100%;
    }
    .v-btn--round{
        border-radius: 4px;
    }
    .v-btn--large{
        font-size: 15px;
        height: 48px;
        padding: 0 32px;
    }
    .flex.md3{
        min-width: 420px;
    }
    .color-text{
        color: #FFE9BB;
    }
    .color{
        color: #fff;
    }
    a{
        text-decoration: none !important;
    }
    a:hover{
        text-decoration: underline !important;
    }
    .custom-loader{
        animation: loader 1s infinite;
        display: flex;
    }
    @-moz-keyframes loader {
    from {
      transform: rotate(0);
    }
    to {
      transform: rotate(360deg);
    }
    }
    @-webkit-keyframes loader {
        from {
            transform: rotate(0);
        }
        to {
            transform: rotate(360deg);
        }
    }
    @-o-keyframes loader {
        from {
            transform: rotate(0);
        }
        to {
            transform: rotate(360deg);
        }
    }
    @keyframes loader {
        from {
            transform: rotate(0);
        }
        to {
            transform: rotate(360deg);
        }
    }
</style>