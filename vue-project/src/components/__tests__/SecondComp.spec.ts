import { describe, it, expect } from 'vitest'

import { mount } from '@vue/test-utils'
import SecondComp from '../SecondComp.vue'

describe('SecondComp', () => {
  it('snapshot UI testing', () => {
    const wrapper = mount(SecondComp,{});
    expect(wrapper.text()).toMatchSnapshot()
  })
})