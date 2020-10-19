<template>
    <v-container >
        <v-data-iterator :items="users" :items-per-page="10" hide-default-footer>
            <template v-slot:header>
                <v-toolbar dark color="primary darken-3" class="mb-1">
                    <v-text-field flat solo-inverted hide-details label="Procurar"></v-text-field>
                    <template>
                        <v-spacer></v-spacer>
                        <v-select flat solo-inverted hide-details :items="headers" label="Filtro" disabled></v-select>
                        <v-spacer></v-spacer>
                        <v-btn class="ma-2" small text color="grey" disabled>
                            <v-icon left>filter_list</v-icon> Adicionar Filtro
                        </v-btn>
                    </template>
                </v-toolbar>
            </template>
            <template v-slot:default="props">
                <v-data-table
                        v-model="listSelected" :headers="headers" :items="props.items"
                        :items-per-page="15" item-key="id" show-select single-select hide-default-footer
                        class="elevation-1">
                    <template v-slot:top>
                        <v-toolbar flat color="white">
                            <div class="actions-header">Ação
                                <div class="actions-selected">
                                    <span class="actions-number">{{ listSelected.length }} </span> selecionado(s)
                                </div>
                            </div>
                            <div class="actions-arrow"><v-icon>arrow_forward</v-icon></div>
                            <v-tooltip top>
                                <template v-slot:activator="{ on }">
                                    <v-btn class="ma-2" small text color="warning" v-on="on" :disabled="listSelected.length < 1">
                                        <v-icon left>edit</v-icon> Editar
                                    </v-btn>
                                </template>
                                <span>Editar</span>
                            </v-tooltip>
                            <v-spacer></v-spacer>
                            <v-btn class="ma-2" small outlined color="green" @click="modal(2)">
                                <v-icon left>add_circle_outline</v-icon> Cadastrar
                            </v-btn>
                        </v-toolbar>
                    </template>
                </v-data-table>
            </template>
        </v-data-iterator>
    </v-container>
</template>

<script>
    export default {
        data: () => ({
            listSelected: [],
            model: null,
            loading: true,
            users: [],
            headers: [
                { text: 'Id', value: 'id',},
                { text: 'Ano', value: 'year',},
                { text: 'Placa', value: 'licensePlate' },
                { text: 'Modelo', value: 'model' },
                { text: 'Cor', value: 'color' },
                { text: 'Contagem', value: 'usedCount' },
            ],
             listFilter: [
                { id:1, description: 'Todos os usuários', icon: null },
                { id:2, description: 'Crachá pendentes', icon: 'delete' },
            ],
        }),
        async created() {
            try {
                let response = await this.$service.get('/cars')
                this.users = response.data
                this.loading = false
            } catch (e) {
                // eslint-disable-next-line 
                console.error(e);
            }
        }
    }
</script>

<style scoped>
    .v-list .v-list-item:hover .v-icon {
        color:grey;
    }
    .v-list .v-list-item .v-icon:hover {
        color:red;
    }
    .v-list .v-list-item--active .v-icon {
        color: transparent;
    }
    .actions-header {
        font-size: 16px;
        line-height: 13px;
        font-weight: 700;
        width: 100px;
    }
    .actions-number {
        border: 1px solid #dee3e8;
        border-radius: 2px;
        line-height: 10px;
        padding: 1px 3px 2px;
        display: flex;
        align-items: center;
        margin-right: 4px;
    }
    .actions-selected {
        font-size: 10px;
        font-weight: 400;
        line-height: 2;
        text-transform: uppercase;
        color: #7b88a2;
        display: flex;
        align-items: center;
        margin-top: 2px;
    }
    .actions-arrow {
        display: flex;
        align-items: center;
        margin-left: 15px;
    }
</style>
