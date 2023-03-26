<template>
  <div class="form-group">
    <label v-bind="labelFor" class="text-light">{{ label }}</label>
    <input
      class="form-control"
      :class="{ 'is-invalid': getError }"
      v-bind="$attrs"
      :value="modelValue"
      @input="$emit('update:modelValue', $event.target.value)"
    />
    <div class="invalid-feedback" v-if="getError">{{ getError }}</div>
  </div>
</template>

<script>
export default {
  inheritAttrs: false,
  props: {
    label: {
      type: String,
      required: true,
    },
    modelValue: {
      type: [String, Number],
      default: null,
    },
    error: {
      type: [Array, String],
      default: 'Mohon Diisi Ya Gaes...!',
    },
  },
  computed: {
    labelFor() {
      return this.$attrs.id ? { for: this.$attrs.id } : {};
    },
    getError() {
      if (this.modelValue === "") {
        return Array.isArray(this.error) ? this.error.join(", ") : this.error;
      }
      return false;
    },
  },
};
</script>
