<template>
  <div>
    <button @click="fetchToken">Token</button>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  name: 'TokenButton',
  methods: {
    fetchToken() {
      const authHeader = 'Basic YWRtaW46TWFnbGV2MTIz' // Base64 인코딩된 "username:password"

      axios({
        method: 'post',
        url: 'https://dcloud-dnac-inst-cl-rtp.cisco.com/dna/system/api/v1/auth/token',
        headers: {
          'Authorization': authHeader
        }
      })
        .then(response => {
          const token = response.data.Token
          // 세션 스토리지에 토큰 저장
          sessionStorage.setItem('authToken', token)
        // 혹은 로컬 스토리지에 저장하려면 다음 코드를 사용
        // localStorage.setItem('authToken', token);
        })
        .catch(error => {
          console.error('API 요청 실패:', error)
        })
    }
  }
}
</script>
