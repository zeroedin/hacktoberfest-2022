import { LitElement, html } from 'lit';
import { customElement } from 'lit/decorators.js';
import { Router } from '@lit-labs/router';
import 'urlpattern-polyfill';

@customElement('rh-router')
export class RhRouter extends LitElement {
    router = new Router(this, [
      {pattern: new URLPattern({pathname: '/demo'}), render: () => this.normal()},
      {pattern: new URLPattern({pathname: '/demo', search: 'hot-n-spicy'}), render: () => this.hotNSpicy()}
    ]);
  
    render() {
      return html`
        <div>${this.router.outlet()}</div>
      `;
    }

    normal() {
      return html`
        <h1>Normal mode</h1>
        <a href="/demo?hot-n-spicy">Try new stuff</a>
      `
    }

    hotNSpicy() {
      return html`
        <h1>Hot-N-Spicy</h1>
        <a href="/demo">Back to basics</a>
      `
    }
  }

  declare global {
    interface HTMLElementTagNameMap {
      'rh-router': RhRouter;
    }
  }