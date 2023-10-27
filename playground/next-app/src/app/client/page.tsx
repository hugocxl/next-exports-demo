'use client'

import { CLIENT_VAR } from '@next-exports-demo/next/client'

export default function ClientPage() {
  return (
    <div>
      <h1>Hello World</h1>
      <p>This is a client page</p>
      <p>Client variable: {CLIENT_VAR}</p>
    </div>
  )
}
