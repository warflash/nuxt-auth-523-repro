import { defineEventHandler, setResponseHeader } from 'h3'
import { getServerSession } from '#auth'

export default defineEventHandler(async (event) => {
  setResponseHeader(event, 'Content-Type', 'text/plain')
  const session = await getServerSession(event)

  return `Hello ${session?.user?.name || 'world'}!`
})
