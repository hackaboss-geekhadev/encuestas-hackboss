import { expect, test } from 'vitest'
import { GET } from '@/app/api/health/route'

test('GET function', async () => {
  const response = await GET()
  const data = await response.json()
  expect(data.status).toBe('ok')
})
