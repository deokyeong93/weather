<template>
  <v-card
    :color="cardColor"
    class="d-flex justify-center mb-3"
  >
    <v-card-title
      class="text-h6"
    >
      <span v-if="isValidLocationInfo">{{ location }}</span>
      <ul
        v-else
        class="info-items-wrapper"
      >
        <li
          class="text-center font-weight-bold pb-4"
          :class="infoMessageClass"
        >
          πμμΉ νμ©μ λΆνλλ¦½λλ€π
        </li>
        <li
          class="font-weight-medium"
          :class="infoSubMessageClass"
        >
          π’ νμ© μ : μμΉλ₯Ό μ€μ νμ§ μμΌλ©΄ νμ¬ μμΉλ§ λ³΄μλλ€.
        </li>
        <li
          class="font-weight-medium"
          :class="infoSubMessageClass"
        >
          π΄ λ―Ένμ© μ : λΆλ§ν¬ μμΉκ° μμΌλ©΄ μμΈμ / κ°λ¨κ΅¬ λ μ¨ νμ
        </li>
      </ul>
    </v-card-title>
  </v-card>
</template>
<script>
export default {
  props: {
    location: {
      type: String,
      default: '',
    },
  },
  computed: {
    isValidLocationInfo() {
      return !!this.location
    },
    cardColor() {
      return this.location ? '#009688' : '#E1F5FE'
    },
    infoMessageClass() {
      if (this.$vuetify.breakpoint.width < 500) {
        return { 'text-subtitle-1': true }
      }

      return {
        'text-h6': true,
      }
    },
    infoSubMessageClass() {
      if (this.$vuetify.breakpoint.width < 320) {
        return { caption: true }
      }
      if (this.$vuetify.breakpoint.width < 500) {
        return { 'text-subtitle-2': true }
      }

      return {
        'text-subtitle-1': true,
      }
    },
  },
}
</script>

<style scoped>
.info-items-wrapper {
  list-style: none
}
</style>
