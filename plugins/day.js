import dayjs from 'dayjs'

export default ({ store }, inject) => {
  inject('dayjs', dayjs)
}
