<template>
  <div class="form-group">
    <label v-bind="labelFor" class="text-light">{{ label }}</label>
    <select
      class="form-control"
      :class="{ 'is-invalid': getError }"
      :value="modelValue"
      @change="$emit('update:modelValue', $event.target.value)"
      v-bind="$attrs"
    >
      <option value="" v-if="placeholder">{{ placeholder }}</option>
      <option
        v-for="option in options"
        :key="`option-${option.value}`"
        :value="option.text"
      >
        {{ option.text }}
      </option>
    </select>
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
    options: {
      type: Array,
      required: true,
    },
    placeholder: {
      type: String,
      default: "",
    },
    error: {
      type: [Array, String],
      default: 'Pilih salah satu ya gaes...!',
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