import { cleanup } from '@testing-library/vue'
import matchers from '@testing-library/jest-dom/matchers'
import { expect, afterEach } from 'vitest'

// Extend expect with jest-dom matchers.
expect.extend(matchers)

// Init cleanup state to run after each test.
afterEach(() => {
  cleanup()
})
