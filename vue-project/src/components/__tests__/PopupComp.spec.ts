import { describe, it, expect } from 'vitest'

import { mount } from '@vue/test-utils'
import PopupComp from '../PopupComp.vue'

describe('PopupComp', () => {
  it('snapshot UI testing', () => {
    const wrapper = mount(PopupComp,{});
    expect(wrapper.text()).toMatchSnapshot()
  })
})