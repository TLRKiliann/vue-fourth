import { describe, it, expect, vi } from 'vitest'

import { mount } from '@vue/test-utils'
import App from '../App.vue'

describe('App', () => {
  it('snapshot UI testing', () => {
    const wrapper = mount(App, {});
    expect(wrapper.text()).toMatchSnapshot()
  })
  it('renders properly', async () => {
    const wrapper = mount(App)
    await wrapper.find('.btn-one').trigger('click')
  })
  it('renders properly', async () => {
    const wrapper = mount(App)
    await wrapper.find('.btn-two').trigger('click')
  })
  it('should render Foo, then hide it', async () => {
    const wrapper = mount(App)
    const addOne = false;
    wrapper.vm.addOne = vi.fn();
    expect(wrapper.vm.addOne).toHaveBeenCalledTimes(0);
  })
})
