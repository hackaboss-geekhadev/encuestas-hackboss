import { test, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import Title from '@/components/Title'

test('the render Title should content the title', () => {
  render(<Title title="Home" />)
  expect(screen.getByText('Home')).toBeDefined()
})
