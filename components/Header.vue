<template>
  <header class="fixed top-0 z-10 w-full bg-white shadow-sm h-50px">
    <div class="flex items-center justify-between h-full mx-auto max-w-1170">
      <div class="flex items-center">
        <div class="logo text-primary text-xl">Hi</div>
        <div class="ml-4 flex">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
            class="w-5 text-gray-400"
          >
            <path
              fill-rule="evenodd"
              d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
              clip-rule="evenodd"
            />
          </svg>
          <input
            type="search"
            class="bg-gray-100 rounded ml-1"
            placeholder="搜尋"
          />
        </div>
      </div>
      <div class="flex justify-end items-center">
        <div>
          <Hbtn :text="'我想開課'" :type="'text'"></Hbtn>
          <Hbtn
            v-if="isAuth"
            :text="'任務版'"
            :type="'text'"
            class="mx-4"
          ></Hbtn>
          <Hbtn v-if="isAuth" :text="'我的課程'" :type="'text'"></Hbtn>
        </div>
        <!-- 購物車 -->
        <div class="w-5 ml-4">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
            :class="[isCart, 'cursor-pointer']"
            @click="openCart"
          >
            <path
              d="M3 1a1 1 0 000 2h1.22l.305 1.222a.997.997 0 00.01.042l1.358 5.43-.893.892C3.74 11.846 4.632 14 6.414 14H15a1 1 0 000-2H6.414l1-1H14a1 1 0 00.894-.553l3-6A1 1 0 0017 3H6.28l-.31-1.243A1 1 0 005 1H3zM16 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM6.5 18a1.5 1.5 0 100-3 1.5 1.5 0 000 3z"
            />
          </svg>
        </div>
        <div class="w-5 ml-4">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
            class="text-gray-400"
          >
            <path
              fill-rule="evenodd"
              d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z"
              clip-rule="evenodd"
            />
          </svg>
        </div>

        <div v-if="!isAuth">
          <Hbtn
            text="登入"
            class="ml-4"
            :type="'outlined'"
            @click="openLogin"
          ></Hbtn>
          <Hbtn text="註冊" class="ml-4"></Hbtn>
        </div>

        <div class="ml-4">
          <img class="rounded-full w-6" :src="user.avatar" alt="" />
        </div>
      </div>
    </div>
  </header>
</template>

<style lang="scss">
.logo {
  letter-spacing: 0.2rem;
  font-weight: bold;
}

.logo::after {
  content: 'SKIO';
  color: black;
}
</style>

<script>
export default {
  computed: {
    isAuth () {
      return this.$store.getters['auth/isAuth']
    },
    user () {
      return this.$store.state.auth.user
    },
    isCart () {
      return this.$store.getters['cart/isCart']
        ? 'text-primary'
        : 'text-gray-400'
    }
  },
  methods: {
    openLogin () {
      this.$store.commit('auth/setDialog', true)
    },
    openCart () {
      this.$store.commit('cart/setShowCart', true)
    }
  }
}
</script>
