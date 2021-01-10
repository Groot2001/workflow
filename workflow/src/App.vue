<template>
    <v-app v-if="isLogin">
        <v-navigation-drawer
                app
                :permanent="permanent"
                :src="bg"
                :color="color"
                absolute
                dark
        >
            <v-list-item>
                <v-list-item-content>
                    <v-list-item-title class="title">
                        Application
                    </v-list-item-title>
                    <v-list-item-subtitle>
                        subtext
                    </v-list-item-subtitle>
                </v-list-item-content>
            </v-list-item>
            <v-divider></v-divider>

            <v-list
                    dense
                    nav
            height="520">
                <v-list-item
                        v-for="item in items"
                        :key="item.name"
                        v-on:click="urlto(item.name)"
                        link

                >
                    <v-list-item-icon>
                        <v-icon>{{ item.icon }}</v-icon>
                    </v-list-item-icon>

                    <v-list-item-content>
                        <!--router-link :to="{path:'/'+item.title}"></router-link-->
                            <v-list-item-title> {{ item.title }}</v-list-item-title>
                    </v-list-item-content>
                </v-list-item>
            </v-list>
        </v-navigation-drawer>
        <!-- Sizes your content based upon application components -->
        <!--v-app-bar app>
        </v-app-bar-->
        <v-main>

        <!-- Provides the application the proper gutter -->
        <v-container fluid>
            <!-- If using vue-router -->
            <router-view></router-view>
        </v-container>
    </v-main>

        <v-footer
                class="font-weight-medium"
                :inset="inset"
        >
            <!-- -->
            <v-col
                    class="text-center"
                    cols="12"
            >
                {{ new Date().getFullYear() }} — <strong>yangb</strong>
            </v-col>
        </v-footer>

    </v-app>
    <v-app v-else>
        <!--h2>首页index<v-btn v-on:click="urlto('index')">请登录！</v-btn></!--h2-->
        <router-view></router-view>
    </v-app>
</template>

<script>
    import HelloWorld from './components/HelloWorld';

    export default {
        name: 'App',
        data() {
            return {
                isLogin: true,
                drawer: true,
                items: [
                    {name: 'home', title: '首页', icon: 'fa-desktop'},
                    {name: 'navigator', title: '工具导航', icon: 'fa-paper-plane'},
                    {name: 'deployManager', title: '发布管理', icon: 'fa-check-circle'},
                    {name: 'scriptManager', title: '脚本管理', icon: 'fa-code'},
                    {name: 'dataManager', title: '数据管理', icon: 'fa-database'},
                    {name: 'automation', title: '自动化管理', icon: 'fa-tasks'},
                    {name: 'reminder', title: '待办提醒', icon: 'fa-bell'}
                ],
                permanent: true,
                background: true,
                color: 'brown ',
                colors: [
                    'blue-grey',
                    'blue',
                    'success',
                    'red',
                    'teal',
                ],
                inset: true,
                picker: new Date().toISOString().substr(0, 10),
            }
        },
        methods: {
            urlto(key){
                this.$router.push("/"+key)
            }
        },
        computed: {
            bg() {
                return this.background ? 'https://cdn.vuetifyjs.com/images/backgrounds/bg-2.jpg' : undefined
            },
        },
        components: {
            HelloWorld,
        }
    };
</script>
