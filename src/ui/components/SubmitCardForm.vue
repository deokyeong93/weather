<template>
  <v-card
    class="px-4"
    width="270"
    min-height="300"
  >
    <v-card-title
      class="d-flex justify-center"
    >
      {{ cardTitle }}
    </v-card-title>
    <form>
      <v-text-field
        v-for="(input, key) in inputs"
        :key="key"
        :label="input.label"
        dense
        outlined
        :validate-on-blur="input.isValidateOnBlur"
        :value="input.value"
        :rules="input.rules"
        :type="input.type"
        :placeholder="input.placeholder"
        :autocomplete="input.autocomplete"
        :disabled="input.disabled"
        @input="$emit('onChangeInput', {inputKey: key, value: $event} )"
      />
    </form>
    <v-btn
      color="primary"
      block
      :disabled="isInactiveSubmitButton"
      @click="$emit('onSubmitCardForm')"
    >
      {{ submitButtonText }}
    </v-btn>
    <slot name="underSubmitButton" />
  </v-card>
</template>

<script>
export default {
  props: {
    cardTitle: {
      type: String,
      default: '',
    },
    inputs: {
      type: Object,
      default: () => ({
        input: {
          label: '',
          value: '',
          rules: [],
          placeholder: '',
          autocomplete: 'off',
          isValidateOnBlur: true,
          disabled: false,
        },
      }),
    },
    submitButtonText: {
      type: String,
      default: '',
    },
    isInactiveSubmitButton: {
      type: Boolean,
      default: false,
    },
  },
}
</script>
