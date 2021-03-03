<template>
  <div class="layout fixed z-30" v-if="dialog">
    <div class="modal">
      <div class="flex justify-between items-center mb-8">
        <div></div>
        <div class="logo text-primary text-2xl">Hi</div>
        <div class="cursor-pointer" @click="close">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
            class="w-5"
          >
            <path
              fill-rule="evenodd"
              d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
              clip-rule="evenodd"
            />
          </svg>
        </div>
      </div>
      <div class="flex flex-col items-center">
        <div class="text-xl">使用 HiSKIO ID 登入</div>
        <div class="input">
          <input
            type="email"
            v-model="formData.account"
            placeholder="請輸入 HiSKIO ID"
          />
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
            class="w-4"
          >
            <path
              fill-rule="evenodd"
              d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-6-3a2 2 0 11-4 0 2 2 0 014 0zm-2 4a5 5 0 00-4.546 2.916A5.986 5.986 0 0010 16a5.986 5.986 0 004.546-2.084A5 5 0 0010 11z"
              clip-rule="evenodd"
            />
          </svg>
        </div>
        <div class="input">
          <input
            type="password"
            v-model="formData.password"
            placeholder="請輸入登入密碼"
          />
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
            class="w-4"
          >
            <path
              fill-rule="evenodd"
              d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z"
              clip-rule="evenodd"
            />
          </svg>
        </div>
      </div>
      <div class="flex justify-center">
        <Hbtn :text="'登入'" block @click.native="login"></Hbtn>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.layout {
  width: 100%;
  height: 100%;
  left: 0;
  top: 0;
  background-color: rgba(0, 0, 0, 0.7);
}

.modal {
  max-width: 450px;
  position: relative;
  border-radius: 0.625rem;
  overflow: auto;
  background-color: #fff;
  margin: auto;
  padding: 40px;
  width: 100%;
  top: 50%;
  transform: translateY(-50%);
}

input {
  font-size: 14px;
  width: 100%;
  padding-top: 10px;
  padding-bottom: 10px;
  color: #8c8c8c;
  background-color: #fafafa;
  padding-left: 3rem;
  border-radius: 0.25rem;
  outline: 0;
}

.input {
  margin: 1rem;
  width: 100%;
  position: relative;
  svg {
    position: absolute;
    color: #8c8c8c;
    left: 0.5rem;
    top: 0.6rem;
  }
}
</style>

<script>
export default {
  props: {},
  data () {
    return {
      formData: {
        account: '',
        password: ''
      }
    }
  },
  computed: {
    dialog () {
      return this.$store.state.auth.dialog
    }
  },
  methods: {
    async login () {
      try {
        const data = await this.$service.auth.login(this.formData)
        await this.$store.commit('auth/getToken', data.access_token)
        const user = await this.$service.member.me()
        await this.$store.commit('auth/getUser', user)
        this.formData = {
          account: '',
          password: ''
        }
        await this.close()
      } catch (error) {
        alert(error.message)
      }
    },
    close () {
      this.$store.commit('auth/setDialog', false)
    }
  }
}
</script>
