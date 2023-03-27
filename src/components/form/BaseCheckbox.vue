<template>
  <div class="form-check form-check-inline">
    <input
      class="form-check-input"
      type="checkbox"
      :checked="modelValue"
      @change="$emit('update:modelValue', $event.target.checked)"
      v-bind="$attrs"
    />
    <label v-bind="labelFor" class="form-check-label text-light">{{
      label
    }}</label>
  </div>
</template>

<script>
export default {
  inheritAttrs: false,
  props: {
    modelValue: {
      type: Boolean,
      default: false,
    },
    label: {
      type: String,
      required: true,
    },
  },
  computed: {
    labelFor() {
      return this.$attrs.id ? { for: this.$attrs.id } : {};
    },
  },
};
</script>
