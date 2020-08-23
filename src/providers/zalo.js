export default (options) => {
  return     {
    id: 'zalo',
    name: 'Zalo',
    type: 'oauth',
    version: '2.0',
    params: {
      app_id: options.clientId,
      app_secret: options.clientSecret
    },
    // These will be different depending on the Org.
    getTokenMethod: 'GET',
    accessTokenUrl: `https://oauth.zaloapp.com/v3/access_token`,
    authorizationUrl: `https://oauth.zaloapp.com/v3/permission?app_id=${options.clientId}`,
    profileUrl: `https://graph.zalo.me/v2.0/me?fields=id,name,picture`,
    profile: (profile) => {
      return {
        id: profile.id,
        name: profile.name,
        email: null,
        image: profile.picture? profile.picture.data.url:null
      }
    },
    setGetAccessTokenAuthHeader: false,
    useAuthTokenHeader: false,
    ...options
  }
}
