<template>
  <button @click="action" :class="[css, { block: block }]">{{ text }}</button>
</template>

<style lang="scss" scoped>
button {
  font-size: 0.875rem;
  background-color: #288fac;
  color: #fafafa;
  padding-left: 18px;
  padding-right: 18px;
  padding-top: 6px;
  padding-bottom: 6px;
  border-radius: 5px;
}
button:focus {
  outline: 0;
}

.btn-text {
  background-color: transparent !important;
  color: #595959;
  padding-left: 0;
  padding-right: 0;
}

.btn-text:hover {
  color: #288fac;
}

.btn-outlined {
  background-color: #fff !important;
  border: 1px solid;
  color: #288fac;
}

.block {
  width: 100%;
}
</style>

<script>
export default {
  props: { text: String, type: String, click: Function, block: Boolean },
  computed: {
    css () {
      return this.type === 'text'
        ? 'btn-text'
        : this.type === 'outlined'
          ? 'btn-outlined'
          : ''
    }
  },
  methods: {
    action () {
      this.$emit('click', this.click)
    }
  }
}
</script>
