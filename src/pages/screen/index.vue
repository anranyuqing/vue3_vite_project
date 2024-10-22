<template>
  <blank-contain>
    <div class="bg-yellow w-full h-20 mb-4"></div>
    <div class="grid grid-cols-3 gap-x-4 h-full">
      <div class="h-full grid grid-rows-3 gap-y-4">
        <div class="bg-#000/10">
          <input type="file" @change="handleChange" />
        </div>
        <div class="bg-#000/10"><a :href="src" alt="">2222</a></div>
        <div class="bg-#000/10">22</div>
      </div>
      <div class="h-full bg-blue">
        <img src="@/assets/images/1.png" alt="">
      </div>
      <div class="h-full grid grid-rows-3 gap-y-4">
        <div class="bg-#000/10">33</div>
        <div class="bg-#000/10">44</div>
        <div class="bg-#000/10">22</div>
      </div>
    </div>
  </blank-contain>
</template>

<script setup lang="ts">
import { ref } from 'vue'
const src = ref('')
function handleChange(target: any) {
  const file = target.target.files[0]
  console.log('file', file)

  const fileReader = new FileReader()
  fileReader.readAsDataURL(file)
  fileReader.onload = (val) => {
    src.value = val.target.result
    console.log('src', src.value)
  }
}
</script>

<style></style>
