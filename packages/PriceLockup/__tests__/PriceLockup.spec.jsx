import React from 'react'
import { shallow, mount } from 'enzyme'

import PriceLockup from '../PriceLockup'

describe('PriceLockup', () => {
  const doShallow = (props = {}) => shallow(<PriceLockup {...props} />)
  const doMount = (props = {}) => mount(<PriceLockup {...props} />)
  it('renders', () => {
    const priceLockup = doShallow({ price: '25' })

    expect(priceLockup).toMatchSnapshot()
  })

  it('passes additional attributes to the element', () => {
    const priceLockup = doShallow({ id: 'the-id', 'data-some-attr': 'some value', price: '25' })

    expect(priceLockup).toHaveProp('id', 'the-id')
    expect(priceLockup).toHaveProp('data-some-attr', 'some value')
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

  it('will render BottomText when size prop is medium', () => {
    const priceLockup = doShallow({ size: 'medium', price: '25' })
    expect(priceLockup.text()).toContain('<BottomText />')
  })

  it('will not render BottomText when size prop is not medium', () => {
    const priceLockup = doShallow({ size: 'large', price: '25' })
    expect(priceLockup.text()).not.toContain('<BottomText />')
  })

  it('will render the DollarSign first and DollarValue second when signDirection is left', () => {
    const priceLockup = doMount({
      size: 'small',
      signDirection: 'left',
      price: '25',
      rateText: '',
      topText: '',
      bottomText: '',
    })
    expect(priceLockup.text()).toEqual('$25')
  })

  it('will not render the DollarSign but DollarValue will be present', () => {
    const priceLockup = doMount({
      size: 'small',
      signDirection: undefined,
      price: '25',
      rateText: '',
      topText: '',
      bottomText: '',
    })
    expect(priceLockup.text()).toEqual('25')
  })

  it('will render the DollarSign second and DollarValue first when signDirection is right', () => {
    const priceLockup = doMount({
      size: 'small',
      signDirection: 'right',
      price: '25',
      rateText: '',
      topText: '',
      bottomText: '',
    })
    expect(priceLockup.text()).toEqual('25$')
  })

  it('dollarSign size is medium, dollarValue will be H2, rateText is medium, topText is small, bottomText is absent, when size Prop is small', () => {
    const priceLockup = doMount({
      size: 'small',
      signDirection: 'left',
      price: '25',
      rateText: '/month',
      topText: 'buy',
      bottomText: 'great',
    })
    expect(priceLockup).toMatchSnapshot()
  })

  it('dollarSign size is large, dollarValue will be H1, rateText is medium, topText is small, with HairlineDivider bottomText is medium, when size Prop is medium', () => {
    const priceLockup = doMount({
      size: 'medium',
      signDirection: 'left',
      price: '25',
      rateText: '/month',
      topText: 'buy',
      bottomText: 'great',
    })
    expect(priceLockup).toMatchSnapshot()
  })

  it('dollarSign size is H1, dollarValue will be DisplayH1, rateText is large, topText is large, bottomText is absent, when size Prop is large', () => {
    const priceLockup = doMount({
      size: 'large',
      signDirection: 'left',
      price: '25',
      rateText: '/month',
      topText: 'buy',
      bottomText: 'great',
    })
    expect(priceLockup).toMatchSnapshot()
  })
})
