import { SERVER_VAR } from '@next-exports-demo/next/server'

export default async function ServerPage() {
  return (
    <div>
      <h1>Hello World</h1>
      <p>This is a server page</p>
      <p>Server variable: {SERVER_VAR}</p>
    </div>
  )
}
