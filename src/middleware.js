import { NextResponse } from 'next/server'

export function middleware(request) {
    // const isAuthenticated = authenticate(request)
    const isAuthenticated = true
    console.log('middle')

    // If the user is authenticated, continue as normal
    if (isAuthenticated) {
        return NextResponse.next()
    }

    // Redirect to login page if not authenticated
    return NextResponse.redirect(new URL('/entrar', request.url))
}

export const config = {
    matcher: ['/eventos', '/eventos/:path*', '/mapa/:path*', '/mapa'],
}
