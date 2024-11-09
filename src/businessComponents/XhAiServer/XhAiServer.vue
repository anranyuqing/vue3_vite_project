<!--
* @Author lixw
* @Date 2024-11-09 13:24:41
* @Description 星火大模型AI服务
-->

<template>
  <div class="w-10 h-10 bg-red"></div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import dayjs from 'dayjs'
import { HmacSHA256, enc } from 'crypto-js'

const {
  VITE_GLOBAL_SPARK_AI_APPID,
  VITE_GLOBAL_SPARK_AI_APISECRET,
  VITE_GLOBAL_SPARK_AI_APPKEY,
  VITE_GLOBAL_SPARK_AI_SOCKET_URL
} = import.meta.env
function getHxAiUrl() {
  const params = {
    host: 'spark-api.xf-yun.com',
    GET: '/v4.0/chat HTTP/1.1',
    date: getRFC1123Time(),
    algorithm: 'hmac-sha256',
    headers: 'host date request-line'
  }
  const tmp = `host: ${params.host}\ndate: ${params.date}\nGET: ${params.GET}`
  const tmp_sha = HmacSHA256(tmp, VITE_GLOBAL_SPARK_AI_APISECRET)
  const signature = enc.Base64.stringify(tmp_sha)
  const authorization_origin = `api_key="${VITE_GLOBAL_SPARK_AI_APPKEY}", algorithm="${params.algorithm}", headers="${params.headers}", signature="${signature}"`
  const authorization = btoa(authorization_origin)
  const v = {
    authorization: authorization,
    date: params.date,
    host: params.host
  }
  return `${VITE_GLOBAL_SPARK_AI_SOCKET_URL}?${new URLSearchParams(v).toString()}`
}
const url = getHxAiUrl()
const socket = new WebSocket(url)
socket.onerror = function (error) {
  console.error('WebSocket error:', error)
}

socket.onopen = function (e) {
  console.error('e:', e)
}

function getRFC1123Time() {
  const now = dayjs()
  const rfc1123Format = now.format('ddd, DD MMM YYYY HH:mm:ss [GMT]')
  return rfc1123Format
}

</script>

<style scoped></style>
