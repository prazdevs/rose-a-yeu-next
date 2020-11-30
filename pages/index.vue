<template>
  <div class="container">
    <Logo />
    <pre>{{ things.fields.headline }}</pre>
  </div>
</template>

<script>
export default {
  name: 'App',
  components: {},
  inject: ['$chakraColorMode', '$toggleColorMode'],
  data() {
    return {
      showModal: false,
      mainStyles: {
        dark: {
          bg: 'gray.700',
          color: 'whiteAlpha.900',
        },
        light: {
          bg: 'white',
          color: 'gray.900',
        },
      },
    }
  },
  computed: {
    things() {
      return this.$store.state.data
    },
    testEnv() {
      return process.env.CONTENTFUL_SPACE
    },
    colorMode() {
      return this.$chakraColorMode()
    },
    theme() {
      return this.$chakraTheme()
    },
    toggleColorMode() {
      return this.$toggleColorMode
    },
  },
  methods: {
    showToast() {
      this.$toast({
        title: 'Account created.',
        description: "We've created your account for you.",
        status: 'success',
        duration: 10000,
        isClosable: true,
      })
    },
  },
}
</script>
