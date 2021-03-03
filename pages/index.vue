<template>
  <div class="min-h-screen pt-50px">
    <Dialog :dialog="dialog" @close="this.dialog = false"></Dialog>
    <div class="cart-list" v-if="showCart">
      <div class="title flex w-full items-center justify-between pt-4">
        <div></div>
        <h2>購物車</h2>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
          fill="currentColor"
          class="w-6 cursor-pointer"
          @click="closeCart"
        >
          <path
            fill-rule="evenodd"
            d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
            clip-rule="evenodd"
          />
        </svg>
      </div>
      <div class="content w-full">
        <!-- 購物車沒東西 -->
        <div v-if="cart.length === 0" class="text-center text-gray-400">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              d="M3 1a1 1 0 000 2h1.22l.305 1.222a.997.997 0 00.01.042l1.358 5.43-.893.892C3.74 11.846 4.632 14 6.414 14H15a1 1 0 000-2H6.414l1-1H14a1 1 0 00.894-.553l3-6A1 1 0 0017 3H6.28l-.31-1.243A1 1 0 005 1H3zM16 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM6.5 18a1.5 1.5 0 100-3 1.5 1.5 0 000 3z"
            />
          </svg>
          <h4>購物車裡是空的</h4>
          <h4 class="mb-2">去逛逛喜歡的課程吧</h4>
          <Hbtn :text="'前往探索課程'"></Hbtn>
        </div>

        <!-- 購物車有東西 -->
        <div v-else>
          <div
            class="grid grid-row-2 grid-flow-col rounded px-2 border-b pb-2"
            v-for="item in cart"
            :key="item.id"
          >
            <div class="row-span-2">
              <img class="rounded-l" :src="item.image" alt="" />
            </div>
            <div class="col-span-1">
              <div class="text-left">{{ item.name }}</div>
            </div>
            <div
              class="row-span-1 col-span-2 flex justify-between items-center"
            >
              <div class="text-left text-lg text-red">$ {{ item.total }}</div>
              <div class="border rounded p-1 text-sm border-solid">
                募資課程
              </div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                class="w-6 ml-4 cursor-pointer text-gray-400"
                @click="deleteCarts(item)"
              >
                <path
                  fill-rule="evenodd"
                  d="M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z"
                  clip-rule="evenodd"
                />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="container mx-auto max-w-1170">
      <section class="mt-10">
        <div class="title mb-4 text-2xl">正在募資中的課程</div>
        <div class="grid grid-cols-4 gap-3">
          <div
            class="shadow-md rounded pb-2 hover:shadow-xl"
            v-for="item in group"
            :key="item.id"
          >
            <div class="card-title relative">
              <img
                class="rounded-t relative"
                :src="item.image"
                :alt="item.title"
              />
              <div class="mask"></div>
              <div class="hidden justify-end absolute icon">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  class="w-6 mr-2"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M5 5a2 2 0 012-2h10a2 2 0 012 2v16l-7-3.5L5 21V5z"
                  />
                </svg>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  class="w-6 cursor-pointer"
                  @click="addCarts(item.id)"
                >
                  <path
                    d="M3 1a1 1 0 000 2h1.22l.305 1.222a.997.997 0 00.01.042l1.358 5.43-.893.892C3.74 11.846 4.632 14 6.414 14H15a1 1 0 000-2H6.414l1-1H14a1 1 0 00.894-.553l3-6A1 1 0 0017 3H6.28l-.31-1.243A1 1 0 005 1H3zM16 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM6.5 18a1.5 1.5 0 100-3 1.5 1.5 0 000 3z"
                  />
                </svg>
              </div>
            </div>
            <div class="px-2 bg-white">
              <div class="title text-xl my-2">{{ item.title }}</div>
              <div class="flex items-center">
                <img class="avatar" :src="item.lecturers[0].avatar" alt="" />
                <div class="text-gray-500 ml-2">
                  {{ item.lecturers[0].username }}
                </div>
              </div>
              <div class="flex items-center justify-between mt-2">
                <div class="text-gray-500">剩 {{}} 天</div>
                <div class="text-gray-500">
                  已募資 {{ Math.round((item.consumers / 30) * 100) }}%
                </div>
              </div>
              <div class="flex items-center my-2">
                <div
                  class="process h-10px bg-gray-100 w-full rounded-full relative"
                >
                  <div
                    class="done absolute h-full rounded-full z-1"
                    :style="{
                      width: `${Math.round((item.consumers / 30) * 100)}%`
                    }"
                  ></div>
                </div>
              </div>
              <div class="flex items-center">
                <div class="text-2xl">${{ item.price }}</div>
                <div class="text-gray-500 ml-2 line-through">
                  ${{ item.fixed_price }}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.avatar {
  width: 30px;
  border-radius: 100%;
}

.mask {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(101, 101, 101, 0.6);
  opacity: 0;
}

.done {
  max-width: 100%;
  background-color: rgba(232, 93, 93, 1);
}

.card-title:hover {
  .mask {
    opacity: 1;
  }
  .icon {
    display: flex;
  }
}

.icon {
  top: 98%;
  right: 2%;
  transform: translate(-2%, -98%);
  color: white;
}

.cart-list {
  position: fixed;
  right: 0;
  top: 0;
  box-shadow: 10px 0 20px 2px rgb(0 0 0 / 20%), 0 4px 6px -2px rgb(0 0 0 / 5%);
  width: 100%;
  max-width: 375px;
  height: 100%;
  background-color: #fff;
  z-index: 11;
  padding-top: 60px;
  transition-duration: 0.3s;
  transition-property: top, left, right, bottom;
  display: flex;
  align-items: center;
  .title {
    position: absolute;
    top: 0;
  }
  .content {
    position: absolute;
    top: 10%;
    left: 50%;
    transform: translate(-50%, -10%);
  }
}
</style>

<script>
export default {
  data () {
    return {
      group: [],
      dialog: true
    }
  },
  async created () {
    await this.fundraising()
    const { data } = await this.$service.cart.addCarts({
      items: [{ id: '', coupon: '' }],
      coupon: ''
    })
    await this.$store.commit('cart/addCarts', data)
  },
  computed: {
    cart () {
      return this.$store.state.cart.cart
    },
    showCart () {
      return this.$store.state.cart.showCart
    }
  },
  methods: {
    // 取得募資課程
    async fundraising () {
      const data = await this.$service.fundraising.fundraising()
      this.group = [...data]
    },
    // 新增購物車
    async addCarts (item) {
      const formData = {
        items: [{ id: item, coupon: '' }],
        coupon: ''
      }
      const { data } = await this.$service.cart.addCarts(formData)
      await this.$store.commit('cart/addCarts', data)
    },
    // 刪除購物車
    async deleteCarts (item) {
      const formData = {
        items: [{ ...item }]
      }
      try {
        await this.$service.cart.deleteCarts({
          data: formData
        })
        const { data } = await this.$service.cart.addCarts({
          items: [{ id: '', coupon: '' }],
          coupon: ''
        })
        await this.$store.commit('cart/addCarts', data)
      } catch (error) {
        alert(error)
      }
    },
    // 關閉購物車清單
    closeCart () {
      this.$store.commit('cart/setShowCart', false)
    }
  }
}
</script>
