<template>
    <v-app class="container-vue">
        <v-navigation-drawer v-model="drawerRight" color="primary" app clipped right dark width="305" class="shadow">
            <v-container>
                <v-row class="flex-row-reverse">
                    <v-icon @click.stop="drawerRight = !drawerRight" size="35" class="pr-4 pt-2" color=" darken-1">close</v-icon>
                </v-row>
                <v-row class="justify-center py-6">
                    <v-avatar size="102" class="shadow">
                        <img src="@/assets/img/avatar-default.jpg">
                    </v-avatar>
                </v-row>
                <v-row class="justify-center pt-1">
                    <p class="headline white--text">Sidney Filho</p>
                </v-row>
                <v-divider class="mx-4"></v-divider>
                <v-row class="justify-center py-6">
                    <v-bottom-navigation color="accent-4" background-color="primary">
                        <v-btn>
                            <span>Configuração</span>
                            <v-icon>settings</v-icon>
                        </v-btn>

                        <v-btn>
                            <span>Sair</span>
                            <v-icon @click="logout">logout</v-icon>
                        </v-btn>

                        <v-btn>
                            <span>Suporte</span>
                            <v-icon>live_help</v-icon>
                        </v-btn>
                    </v-bottom-navigation>
                </v-row>
            </v-container>
        </v-navigation-drawer>
        <v-app-bar app color="neutral" clipped-right >
            <div class="ma-3"><v-img :src="require(`@/assets/icon/${ itemmenu.icone_bar}`)" width="24"></v-img></div>
            <v-toolbar-title >{{itemmenu.titulo}}</v-toolbar-title>
            <v-spacer></v-spacer>
            <div class="ma-2">
                <v-hover v-slot:default="{ hover }">
                    <v-avatar size="30" @click.stop="drawerRight = !drawerRight" >
                        <v-img src="@/assets/img/avatar-default.jpg">
                            <v-expand-transition>
                                <div v-if="hover" class="d-flex transition-fast-in-fast-out avatar-hover text-xs-center">
                                    <img class="avatar-hover-img text-xs-center" />
                                </div>
                            </v-expand-transition>
                        </v-img>
                    </v-avatar>
                </v-hover>
            </div>
            <div class="status-avatar"></div>
        </v-app-bar>
        <v-navigation-drawer v-model="drawer" color="primary" app mini-variant mini-variant-width="70" permanent>
            <v-list class="v-list-pa-top">
                <v-list-item v-for="item in itemsMenu" :key="item.titulo" :to="item.rota">
                    <v-tooltip right nudge-left="25">
                        <template v-slot:activator="{ on }">
                            <div v-on="on">
                                <v-list-item-action>
                                    <img :src="require(`@/assets/icon/${ item.icone}`)" width="27">
                                </v-list-item-action>
                            </div>
                        </template>
                        <span>{{item.titulo}}</span>
                    </v-tooltip>
                </v-list-item>
            </v-list>
        </v-navigation-drawer>
        <v-main class="background">
            <v-container fluid>
                <router-view />
            </v-container>
        </v-main>
    </v-app>
</template>

<script>
    export default {
        data() {
            return {
                drawer: true,
                drawerRight: false,
                right: false,
                switchMe: true,
                itemsMenu: [
                    {titulo: 'Usuários', icone_bar: 'user-black.png', icone: 'user.png', rota: '/usuarios'},
                    {titulo: 'Carros', icone_bar: 'car-black.png', icone: 'car.png', rota: '/carros'},
                ]
            }
        },
        computed: {
            itemmenu: function () {
                return  this.itemsMenu.find(item => item.rota === this.$route.path)
            }
        },
        methods:{
            logout(){
                localStorage.clear()
                this.$router.go()

            }
        },
    }
</script>
<style scoped>
    .avatar-hover{
        cursor: pointer;
        transition: filter .2s ease-in-out;
        background: #DF7E78;
        height:inherit;
        width: 100%;
        opacity: 0.6;
    }
    .avatar-hover-img{
        background-image: url("https://i.ibb.co/8mLnPtH/avatar.png");
        background-size: cover;
        background-repeat: no-repeat;
    }

    .v-item-group.v-bottom-navigation {
        box-shadow: none !important;
    }

    .shadow {
        box-shadow: 0 3px 5px -1px rgba(0,0,0,.2),0 5px 8px 0 rgba(0,0,0,.14),0 1px 14px 0 rgba(0,0,0,.12)!important;

    }
    .status-avatar{
        content: '';
        display: block;
        position: absolute;
        border-radius: 20px;
        right: 7px;
        bottom: calc(50% - 4px);
        width: 8px;
        height: 8px;
        background: #58B743;
    }
    .v-application--is-ltr .v-list-item__action:first-child, .v-application--is-ltr .v-list-item__icon:first-child {
         margin-right: 32px;
         margin-left: 28px;
    }

    .v-list-item__action {
        margin: 18px 0;
    }

    .v-list .v-list-item--active {
         color: black;
    }

    .v-list-pa-top {
        padding: 63px 0;
    }
</style>