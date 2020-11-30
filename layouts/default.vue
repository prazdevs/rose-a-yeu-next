<template>
  <div class="container">
    <c-theme-provider>
      <c-color-mode-provider>
        <div>
          <c-reset />
          <Nuxt />
        </div>
      </c-color-mode-provider>
    </c-theme-provider>
  </div>
</template>
<script>
import { CThemeProvider, CColorModeProvider, CReset } from '@chakra-ui/vue'

export default {
  name: 'App',
  components: {
    CThemeProvider,
    CColorModeProvider,
    CReset,
  },
}
</script>
