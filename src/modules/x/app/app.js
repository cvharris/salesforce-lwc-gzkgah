import { LightningElement } from 'lwc';
import OktaAuth from '@okta/okta-auth-js'

export default class App extends LightningElement {

  clientId = ''

  connectedCallback() {
    console.log('haiii')
    const auth = new OktaAuth({
      clientId: '0oa79yd85chdQKJSQ5d7',
      redirectUri: 'localhost:3000',
      issuer: 'https://dev-23592845.okta.com/oauth2/default'
    })
    this.clientId = auth.options.clientId
    console.log({auth})
  }
}