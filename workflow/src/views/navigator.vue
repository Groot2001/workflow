<template>
    <div>
        <v-data-table
                :headers="headers"
                :items="desserts"
                :search="search"
                class="elevation-1"
        >
            <template v-slot:top>
                <v-toolbar flat color="white">
                    <v-toolbar-title>My CRUD</v-toolbar-title>
                    <v-divider
                            class="mx-4"
                            inset
                            vertical
                    ></v-divider>
                    <v-text-field
                            v-model="search"
                            append-icon="mdi-magnify"
                            label="Search"
                            single-line
                            hide-details
                    ></v-text-field>
                    <v-spacer></v-spacer>
                    <v-dialog v-model="dialog" max-width="500px">
                        <template v-slot:activator="{ on, attrs }">
                            <v-btn
                                    color="primary"
                                    dark
                                    class="mb-2"
                                    v-bind="attrs"
                                    v-on="on"
                            >新增
                            </v-btn>
                        </template>
                        <v-card>
                            <v-card-title>
                                <span class="headline">{{ formTitle }}</span>
                            </v-card-title>

                            <v-card-text>
                                <v-container>
                                    <v-row>
                                        <v-col cols="12" sm="6" md="4">
                                            <v-text-field v-model="editedItem.name" label="name"></v-text-field>
                                        </v-col>
                                        <v-col cols="12" sm="6" md="4">
                                            <v-text-field v-model="editedItem.link" label="link"></v-text-field>
                                        </v-col>
                                        <v-col cols="12" sm="6" md="4">
                                            <v-text-field v-model="editedItem.username" label="username"></v-text-field>
                                        </v-col>
                                        <v-col cols="12" sm="6" md="4">
                                            <v-text-field v-model="editedItem.password" label="password"></v-text-field>
                                        </v-col>
                                        <v-col cols="12" sm="6" md="4">
                                            <v-text-field v-model="editedItem.mark" label="mark"></v-text-field>
                                        </v-col>
                                    </v-row>
                                </v-container>
                            </v-card-text>

                            <v-card-actions>
                                <v-spacer></v-spacer>
                                <v-btn color="blue darken-1" text @click="close">Cancel</v-btn>
                                <v-btn color="blue darken-1" text @click="save">Save</v-btn>
                            </v-card-actions>
                        </v-card>
                    </v-dialog>
                </v-toolbar>
            </template>
            <template v-slot:item.actions="{ item }">
                <v-icon
                        small
                        class="mr-2"
                        @click="editItem(item)"
                >
                    fa-pencil-alt
                </v-icon>
                <v-icon
                        small
                        @click="deleteItem(item)"
                >
                    fa-trash
                </v-icon>
            </template>
            <template v-slot:no-data>
                <v-btn color="primary" @click="initialize">Reset</v-btn>
            </template>
        </v-data-table>
    </div>
</template>

<script>
    export default {
        name: "navigator",
        data: () => ({
            dialog: false,
            search: '',
            headers: [
                {
                    text: '导航名称',
                    align: 'start',
                    sortable: false,
                    value: 'name',
                },
                {text: '链接', value: 'link'},
                {text: '用户名', value: 'username'},
                {text: '密码', value: 'password'},
                {text: '备注', value: 'mark'},
                {text: 'Actions', value: 'actions', sortable: false},
            ],
            desserts: [],
            editedIndex: -1,
            editedItem: {
                name: '',
                link: '',
                username: '',
                password: '',
                mark: '',
            },
            defaultItem: {
                name: '',
                link: '',
                username: '',
                password: '',
                mark: '',
            },
        }),

        computed: {
            formTitle() {
                return this.editedIndex === -1 ? 'New Item' : 'Edit Item'
            },
        },

        watch: {
            dialog(val) {
                val || this.close()
            },
        },

        created() {
            this.initialize()
        },

        methods: {
            initialize() {
                this.desserts = [
                    {
                        name: '百度',
                        link: 'www.baidu.com',
                        username: 'yang',
                        password: '123456',
                        mark: 'xxx',
                    },
                    {
                        name: '淘宝',
                        link: 'www.baidu.com',
                        username: 'yang',
                        password: '123456',
                        mark: 'xxx',
                    },
                    {
                        name: '腾讯',
                        link: 'www.baidu.com',
                        username: 'yang',
                        password: '123456',
                        mark: 'xxx',
                    },
                    {
                        name: '百度',
                        link: 'www.baidu.com',
                        username: 'yang',
                        password: '123456',
                        mark: 'xxx',
                    },
                    {
                        name: '淘宝',
                        link: 'www.baidu.com',
                        username: 'yang',
                        password: '123456',
                        mark: 'xxx',
                    },
                    {
                        name: '腾讯',
                        link: 'www.baidu.com',
                        username: 'yang',
                        password: '123456',
                        mark: 'xxx',
                    },
                    {
                        name: '百度',
                        link: 'www.baidu.com',
                        username: 'yang',
                        password: '123456',
                        mark: 'xxx',
                    },
                    {
                        name: '淘宝',
                        link: 'www.baidu.com',
                        username: 'yang',
                        password: '123456',
                        mark: 'xxx',
                    },
                    {
                        name: '腾讯',
                        link: 'www.baidu.com',
                        username: 'yang',
                        password: '123456',
                        mark: 'xxx',
                    }
                ]
            },

            editItem(item) {
                this.editedIndex = this.desserts.indexOf(item)
                this.editedItem = Object.assign({}, item)
                this.dialog = true
            },

            deleteItem(item) {
                const index = this.desserts.indexOf(item)
                confirm('Are you sure you want to delete this item?') && this.desserts.splice(index, 1)
            },

            close() {
                this.dialog = false
                this.$nextTick(() => {
                    this.editedItem = Object.assign({}, this.defaultItem)
                    this.editedIndex = -1
                })
            },

            save() {
                if (this.editedIndex > -1) {
                    Object.assign(this.desserts[this.editedIndex], this.editedItem)
                } else {
                    this.desserts.push(this.editedItem)
                }
                this.close()
            },
        },
    }
</script>

<style scoped>

</style>