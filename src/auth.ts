const config = {
    domain: AUTH_DOMAIN,
    callback: AUTH_CALLBACK,
    clientId: AUTH_CLIENT_ID,
    clientSecret: AUTH_CLIENT_SECRET,
};

const buildRedirectUrl = state => `${config.domain}/authorize?response_type=code&client_id=${config.clientId}&redirect_url=${config.callback}&scope=openid%20profile%20email&state=${encodeURIComponent(state)}`

// mitigate CSRF https://auth0.com/docs/protocols/state-parameters
const generateStateParam = () => "stub"

const verify = async event => {
    return { accessToken: 123 }
}

export const authorize = event => {
    // const authorization = await verify(event)
    // if (authorization.accessToken) {
    //     return [true, { authorization }]
    // }
    // else {
    //     const state = generateStateParam()
    //     return [false, { redirectUrl: buildRedirectUrl(state) }]
    // }
    
    const state = generateStateParam()
    return buildRedirectUrl(state)
}