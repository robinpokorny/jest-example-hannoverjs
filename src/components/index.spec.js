import React from 'react'
import renderer from 'react-test-renderer'

import Component from './'

describe('Component', () => {
  it('renders without props', () => {
    const tree = renderer.create(
      <Component />
    ).toJSON()

    expect(tree).toMatchSnapshot()
  })
})
