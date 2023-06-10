import { describe, it, expect } from 'vitest'

import { mount } from '@vue/test-utils'
import ThirdComp from '../ThirdComp.vue'

describe('ThirdComp', () => {
  it('snapshot UI testing', () => {
    const wrapper = mount(ThirdComp,{});
    expect(wrapper.text()).toMatchSnapshot()
  })
})