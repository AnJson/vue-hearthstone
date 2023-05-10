// import { getAllByRole, render, screen } from '@testing-library/vue'
import { mount } from '@vue/test-utils'
import CardGrid from '@/components/CardGrid.vue'
import Card from '@/components/Card.vue'

describe('CardGrid', () => {
  // Helper-function to mounting CardGrid with dynamic value for cardsToShow-prop.
  const mountCardGrid = (cardsToShow) => {
    return mount(CardGrid, {
      props: {
        cards: Array(16).fill({}),
        cardsToShow,
      }
    })
  }

  it('renders amount of Card-components equal to cardsToShow prop', async () => {
    const cardsToShow = 4
    const wrapper = mountCardGrid(cardsToShow)
    const cardComponents = wrapper.findAllComponents(Card)
    expect(cardComponents).toHaveLength(cardsToShow)
  })
})
