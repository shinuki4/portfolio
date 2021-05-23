<template>
  <v-container fluid fill-height class="tertiary">
    <v-layout>
      <v-timeline>
        <v-timeline-item
          v-for="(year, i) in years"
          :key="i"
          :color="year.color"
          small
        >
          <template v-slot:opposite>
            <span
              :class="`headline font-weight-bold ${year.color}--text`"
              v-text="year.year"
            ></span>
          </template>
          <div class="py-4">
            <h2 :class="`headline font-weight-light mb-4 ${year.color}--text`">
              Lorem ipsum
            </h2>
            <div>
              Lorem ipsum dolor sit amet, no nam oblique veritus. Commune
              scaevola imperdiet nec ut, sed euismod convenire principes at. Est
              et nobis iisque percipit, an vim zril disputando voluptatibus, vix
              an salutandi sententiae.
            </div>
          </div>
        </v-timeline-item>
      </v-timeline>
    </v-layout>
  </v-container>
</template>


<script>
export default {
  data: () => ({
    years: [
      {
        color: "cyan",
        year: "WORK HISTORY",
      },
      {
        color: "cyan",
        year: "2018 - CURRENT",
      },
      {
        color: "cyan",
        year: "EDUCATION",
      },
      {
        color: "green",
        year: "2019",
      },
      {
        color: "pink",
        year: "2015",
      },
    ],
  }),
};
</script>