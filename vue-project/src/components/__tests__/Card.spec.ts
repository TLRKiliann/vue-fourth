import { describe, it, expect } from 'vitest'

import { mount } from '@vue/test-utils'
import Card from '../Card.vue'

describe('Card', () => {
  it('snapshot UI testing', () => {
    const wrapper = mount(Card,{});
    expect(wrapper.text()).toMatchSnapshot()
  })
})