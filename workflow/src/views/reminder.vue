<template>
    <div>
        <v-container>
            <v-textarea
                    background-color="light-blue"
                    color="black"
                    label="测试中的分支："
            ></v-textarea>

            <v-textarea
                    background-color="grey lighten-2"
                    color="cyan"
                    label="待确认沟通："
            ></v-textarea>

            <v-textarea
                    background-color="amber lighten-4"
                    color="orange orange-darken-4"
                    label="今日完成情况："
            ></v-textarea>
        </v-container>
    </div>
</template>

<script>
    export default {
        name: "reminder",
        data () {
            return {
                e4: null,
            }
        },
    }
</script>

<style scoped>

</style>