import React from 'react'
import { shallow, mount } from 'enzyme'

import PriceLockup from '../PriceLockup'

const defaultProps = {
  signDirection: 'left',
  price: '25',
}

describe('PriceLockup', () => {
  const doShallow = (props = {}) => shallow(<PriceLockup {...defaultProps} {...props} />)
  const doMount = (props = {}) => mount(<PriceLockup {...defaultProps} {...props} />)

  it('renders with default props', () => {
    const priceLockup = doShallow()
    expect(priceLockup).toMatchSnapshot()
  })

  it('does not allow custom CSS', () => {
    const priceLockup = doShallow({
      className: 'my-custom-class',
      style: { color: 'hotpink' },
      price: '25',
    })
    expect(priceLockup).not.toHaveProp('className', 'my-custom-class')
    expect(priceLockup).not.toHaveProp('style')
  })

  describe('size prop', () => {
    it('is small', () => {
      const wrapper = doMount({ size: 'small' })
      expect(wrapper).toMatchSnapshot()
    })
    it('is medium', () => {
      const wrapper = doMount({ size: 'medium' })
      expect(wrapper).toMatchSnapshot()
    })
    it('is large', () => {
      const wrapper = doMount({ size: 'large' })
      expect(wrapper).toMatchSnapshot()
    })
    it('is undefined', () => {
      const wrapper = doMount({ size: undefined })
      expect(wrapper).toMatchSnapshot()
    })
  })

  describe('signDirection prop', () => {
    it('is left', () => {
      const wrapper = doMount({ signDirection: 'left' })
      expect(wrapper).toMatchSnapshot()
    })
    it('is right', () => {
      const wrapper = doMount({ signDirection: 'right' })
      expect(wrapper).toMatchSnapshot()
    })
    it('is undefined', () => {
      const wrapper = doMount({ signDirection: undefined })
      expect(wrapper).toMatchSnapshot()
    })
  })

  describe('topText prop', () => {
    it('has a string', () => {
      const wrapper = doMount({ topText: 'test top' })
      expect(wrapper).toMatchSnapshot()
    })
    it('is undefined', () => {
      const wrapper = doMount({ topText: undefined })
      expect(wrapper).toMatchSnapshot()
    })
  })

  describe('bottomText prop', () => {
    it('has a string', () => {
      const wrapper = doMount({ bottomText: 'test bottom' })
      expect(wrapper).toMatchSnapshot()
    })
    it('is undefined', () => {
      const wrapper = doMount({ bottomText: undefined })
      expect(wrapper).toMatchSnapshot()
    })
  })

  describe('rateText prop', () => {
    it('has a string', () => {
      const wrapper = doMount({ rateText: 'test rate' })
      expect(wrapper).toMatchSnapshot()
    })
    it('is undefined', () => {
      const wrapper = doMount({ rateText: undefined })
      expect(wrapper).toMatchSnapshot()
    })
  })

  describe('price prop', () => {
    it('wil render component with a price', () => {
      const wrapper = doMount({ price: '25' })
      expect(wrapper).toMatchSnapshot()
    })
  })

  describe('Hairline Component', () => {
    it('only render with bottomText="test" and rateText="/rate" and size="medium"', () => {
      const priceLockup = doMount({ bottomText: 'test', rateText: '/rate', size: 'medium' })
      expect(priceLockup).toMatchSnapshot()
    })
    it('will not render when bottomText="" and rateText="" and size is not medium', () => {
      const priceLockup = doMount({ bottomText: '', rateText: '', size: 'small' })
      expect(priceLockup).toMatchSnapshot()
    })
  })

  describe('RateText Component', () => {
    it('only render with rateText="/month', () => {
      const priceLockup = doMount({ rateText: '/month' })
      expect(priceLockup).toMatchSnapshot()
    })
    it('will render and component will be medium-sized, when size="small"', () => {
      const priceLockup = doMount({ rateText: '/month', size: 'small' })
      expect(priceLockup).toMatchSnapshot()
    })
    it('will render and component will be large-sized, when size="large"', () => {
      const priceLockup = doMount({ rateText: '/month', size: 'large' })
      expect(priceLockup).toMatchSnapshot()
    })
  })

  describe('BottomText Component', () => {
    it('will render only on size="medium" and bottomText="text"', () => {
      const priceLockup = doMount({ size: 'medium', bottomText: 'text' })
      expect(priceLockup).toMatchSnapshot()
    })
    it('will not render on size="small" and bottomText=""', () => {
      const priceLockup = doMount({ size: 'small', bottomText: '' })
      expect(priceLockup).toMatchSnapshot()
    })
    it('will not render on size="large" and bottomText=""', () => {
      const priceLockup = doMount({ size: 'large', bottomText: '' })
      expect(priceLockup).toMatchSnapshot()
    })
  })
})
