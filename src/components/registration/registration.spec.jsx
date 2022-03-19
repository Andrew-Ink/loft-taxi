import React from 'react';
import { Registration } from './registration'
import { render } from '@testing-library/react';

describe('Registration', () => {
  it('renders correctly', () => {
    const { container } = render(<Registration/>)
    expect(container.innerHTML).toMatch('Регистрация')
  })
})