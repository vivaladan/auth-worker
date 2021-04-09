import { authorize } from './auth'

export async function handleRequest(event: FetchEvent): Promise<Response> { 
  //const [authorized, { authorization, redirectUrl }] = await authorize(event)

  var url = new URL(event.request.url)

  if (url.pathname === '/login') {
    const redirectUrl = authorize(event)
    console.log(redirectUrl)
    return Response.redirect(redirectUrl);
  }

  return new Response(`<a href="/login">Login</a>`, {
    status: 200,
    headers: {
      'content-type': 'text/html;charset=UTF=8'
    }
  })
}
