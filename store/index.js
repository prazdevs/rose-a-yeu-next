import client from '~/plugins/contentful'

export const state = () => ({
  data: null,
})

export const mutations = {
  updateData: (state, data) => {
    state.data = data
  },
}

export const actions = {
  async getData({ commit }) {
    try {
      if (!client) return
      const response = await client.getEntries({
        content_type: 'data',
      })
      if (response.items.length > 0) commit('updateData', response.items[0])
    } catch (error) {}
  },
}
