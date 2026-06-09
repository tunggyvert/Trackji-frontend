import { fireEvent, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { App } from '@/app/App'
import { renderWithProviders } from '@/test/test-utils'

describe('App', () => {
  it('renders the home page and updates Redux state from the sample feature', () => {
    renderWithProviders(<App />)

    expect(screen.getByText('A clean frontend foundation for Trackji.')).toBeInTheDocument()
    expect(screen.getByText('3')).toBeInTheDocument()

    fireEvent.click(screen.getByRole('button', { name: 'Increment' }))

    expect(screen.getByText('4')).toBeInTheDocument()
  })
})
