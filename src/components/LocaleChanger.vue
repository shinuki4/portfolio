<template>
  <div class="locale-changer">
    <v-select v-model="$i18n.locale" :items = 'items'>
    </v-select>
  </div>
</template>

<script>
import { detectedLangs } from '../i18n'

export default {
  name: 'LocaleChanger',
  data () {
    return { 
      //langs: detectedLangs,
        //select: { state: 'Florida', abbr: 'FL' },
        items: detectedLangs, 
      }
  }
}
</script>