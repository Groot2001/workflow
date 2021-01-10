<template>
    <div>
        <!--h2>profile</!--h2>
        <v-card class="mb-4">
      <v-card-text>
        <v-select
          v-model="steps"
          :items="[2, 3, 4, 5, 6]"
          label="# of steps"
        ></v-select>
      </v-card-text>
    </v-card>
    <v-stepper-- v-model="e1">
      <v-stepper-header>
        <template v-for="n in steps">
          <v-stepper-step
            :key="`${n}-step`"
            :complete="e1 > n"
            :step="n"
            editable
          >
            Step {{ n }}
          </v-stepper-step>

          <v-divider
            v-if="n !== steps"
            :key="n"
          ></v-divider>
        </template>
      </v-stepper-header>

      <v-stepper-items>
        <v-stepper-content
          v-for="n in steps"
          :key="`${n}-content`"
          :step="n"
        >
          <v-card
            class="mb-12"
            color="grey lighten-1"
            height="200px"
          ><p>hello</p></v-card>

          <v-btn
            color="primary"
            @click="nextStep(n)"
          >
            Continue
          </v-btn>

          <v-btn text>Cancel</v-btn>
        </v-stepper-content>
      </v-stepper-items>
    </v-stepper-->

    <v-card>
      <v-tabs v-model="tab">
        <v-tab v-for="item in items" :key="item.tab">
            {{ item.tab }}
        </v-tab>
        
      </v-tabs>
      <v-tabs-items v-model="tab">
          <v-tab-item v-for="item in items" :key="item.tab">
              <v-text>
                {{ item.content }}
              </v-text>
          </v-tab-item>
      </v-tabs-items>
    </v-card>
    </div>
</template>

<script>
    export default {
        name: "deployManager",
        data () {
          return {
            tab: null,
            items: [
              { tab: '发布记录', content: '发布记录' },
              { tab: '模板', content: '模板' },
              { tab: '发布统计', content: '发布统计' },
            ],
          }
        },

    }
</script>

<style scoped>

</style>