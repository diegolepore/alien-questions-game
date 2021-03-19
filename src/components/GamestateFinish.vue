<template>
  <div class="modal">
    <h1 :style="{ 'color': uiState === 'won' ? 'green' : 'red' }"> 
      You {{ uiState }} 
      {{ uiState === 'won' ? '🎉' : '🤷🏻‍♂️'}}
    </h1>
    <h2>you score is {{ score }}</h2>
    <button @click="startOver">Play Again</button>
  </div>
</template>

<script>
import { mapState } from 'vuex';

export default {
  computed: {
    ...mapState([
      'uiState',
      'score'
    ])
  },
  methods: {
    startOver() {
      this.$store.commit('startOver')
      this.$emit('onStartOver')
    }
  }
};
</script>

<style lang="scss" scoped>

</style>