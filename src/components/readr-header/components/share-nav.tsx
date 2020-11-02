import {Component, Event, EventEmitter, h, State} from '@stencil/core';

@Component({
  tag: 'share-nav',
  styleUrl: 'share-nav.scss',
})
export class MyEmbeddedComponent {
  @State() isShareLinksToggled: boolean;
  shareButtonClickHandler() {
    this.isShareLinksToggled = !this.isShareLinksToggled;
  }
  hideShareLinks() {
    this.isShareLinksToggled = false;
  }
  @Event({ composed: true }) shareFacebookLinkClick: EventEmitter;
  shareFacebookLinkHandler(e) {
    this.hideShareLinks()
    this.shareFacebookLinkClick.emit(e)
  }
  @Event({ composed: true }) shareLINELinkClick: EventEmitter;
  shareLINELinkHandler(e) {
    this.hideShareLinks()
    this.shareLINELinkClick.emit(e)
  }

  render() {
    const shareButtonClickHandler = () => this.shareButtonClickHandler();
    const shareFacebookLinkHandler = (e) => this.shareFacebookLinkHandler(e);
    const shareLINELinkHandler = (e) => this.shareLINELinkHandler(e);
    const isShareLinksToggled = this.isShareLinksToggled;
    const urlCurrentPage = typeof window !== "undefined" ? window.location.href : '/'
    const urlShareFacebook = `https://www.facebook.com/sharer/sharer.php?u=${urlCurrentPage}`
    const urlShareLINE = `https://social-plugins.line.me/lineit/share?url=${urlCurrentPage}`

    return (
      <nav class="share-nav">
        <button
          class="share-nav__toggle-button toggle-button"
          onClick={shareButtonClickHandler}
        >
          <svg fill="none" height="42" viewBox="0 0 42 42" width="42" xmlns="http://www.w3.org/2000/svg"><path clip-rule="evenodd" d="m34 13c2.7614 0 5-2.2386 5-5 0-2.76142-2.2386-5-5-5s-5 2.23858-5 5c0 2.7614 2.2386 5 5 5zm0 3c4.4183 0 8-3.5817 8-8 0-4.41828-3.5817-8-8-8s-8 3.58172-8 8c0 .88453.1436 1.73553.4086 2.531l-11.7046 6.102c-1.4277-2.1874-3.897-3.633-6.704-3.633-4.41828 0-8 3.5817-8 8s3.58172 8 8 8c2.9388 0 5.5074-1.5846 6.8982-3.9459l11.4483 6.6096c-.2253.7391-.3465 1.5235-.3465 2.3363 0 4.4183 3.5817 8 8 8s8-3.5817 8-8-3.5817-8-8-8c-2.5304 0-4.7863 1.1748-6.2523 3.0086l-11.8336-6.8321c.0566-.384.0859-.7768.0859-1.1765 0-.5403-.0536-1.0681-.1557-1.5783l12.0325-6.2729c1.4675 1.7434 3.666 2.8512 6.1232 2.8512zm0 23c2.7614 0 5-2.2386 5-5s-2.2386-5-5-5-5 2.2386-5 5 2.2386 5 5 5zm-21-18c0 2.7614-2.2386 5-5 5-2.76142 0-5-2.2386-5-5s2.23858-5 5-5c2.7614 0 5 2.2386 5 5z" fill="#000928" fill-rule="evenodd"/></svg>
        </button>
        {
          isShareLinksToggled &&
            <div class="share-nav__sns-links sns-links">
              <a
                class="sns-links__link"
                href={urlShareFacebook}
                target="_blank"
                rel="noreferrer noopener"
                onClick={shareFacebookLinkHandler}
              >
                <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg"><g filter="url(#filter0_d)"><circle cx="24" cy="20" r="20" fill="#000928"/><path d="M26.0666 33V22.0675H29.7563L30.307 17.788H26.0666V15.0634C26.0666 13.8254 26.4126 12.9871 28.1868 12.9871H30.4532V9.1658C29.3602 9.05284 28.2621 8.99752 27.1632 9.00009C23.9025 9.00009 21.6799 10.9887 21.6799 14.6394V17.788H18V22.0675H21.6799V33H26.0666Z" fill="white"/></g><defs><filter id="filter0_d" x="0" y="0" width="48" height="48" filterUnits="userSpaceOnUse"><feFlood flood-opacity="0" result="BackgroundImageFix"/><feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"/><feOffset dy="4"/><feGaussianBlur stdDeviation="2"/><feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"/><feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow"/><feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow" result="shape"/></filter></defs></svg>
              </a>
              <a
                class="sns-links__link"
                href={urlShareLINE}
                target="_blank"
                rel="noreferrer noopener"
                onClick={shareLINELinkHandler}
              >
                <svg fill="none" height="48" viewBox="0 0 48 48" width="48" xmlns="http://www.w3.org/2000/svg"><filter id="a" filterUnits="userSpaceOnUse" height="48" width="48" x="0" y="0"><feFlood flood-opacity="0" result="BackgroundImageFix"/><feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"/><feOffset dy="4"/><feGaussianBlur stdDeviation="2"/><feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"/><feBlend in2="BackgroundImageFix" mode="normal" result="effect1_dropShadow"/><feBlend in="SourceGraphic" in2="effect1_dropShadow" mode="normal" result="shape"/></filter><clipPath id="b"><path d="m10 15h28v9.77403h-28z"/></clipPath><g filter="url(#a)"><circle cx="24" cy="20" fill="#000928" r="20"/><g clip-path="url(#b)" fill="#fff"><path d="m19.6796 15h-1.4637c-.2361 0-.425.1889-.425.3777v8.9714c0 .2361.1889.3777.425.3777h1.4637c.2361 0 .425-.1889.425-.3777v-8.9714c-.0473-.1888-.1889-.3777-.425-.3777z"/><path d="m29.6425 15h-1.4638c-.2361 0-.4249.1889-.4249.3777v5.3356l-4.108-5.5244s0-.0472-.0472-.0472c0 0 0 0-.0472-.0473 0 0 0 0-.0472 0h-1.4638c-.2361 0-.4249.1889-.4249.3778v8.9713c0 .2361.1888.3777.4249.3777h1.4638c.2361 0 .4249-.1888.4249-.3777v-5.3828l4.108 5.5717c.0472.0472.0472.0944.0944.0944h.0472.0472.0945 1.4637c.2361 0 .425-.1889.425-.3777v-8.9714c-.1889-.1888-.3778-.3777-.5666-.3777z"/><path d="m16.1855 22.5548h-3.9191v-7.1298c0-.2361-.1888-.425-.4249-.425h-1.4165c-.2361 0-.425.1889-.425.425v8.9713c0 .0944.0472.1889.0944.2833.0945.0472.1889.0944.2833.0944h5.7606c.2361 0 .3777-.1888.3777-.4249v-1.4638c.0472-.1416-.0944-.3305-.3305-.3305z"/><path d="m37.6223 17.2664c.2361 0 .3777-.1888.3777-.4249v-1.4165c0-.2361-.1416-.425-.3777-.425h-5.7606c-.0944 0-.1888.0472-.2833.0944-.0472.0945-.0944.1889-.0944.2833v8.9714c0 .0944.0472.1888.0944.2833.0945.0472.1889.0944.2833.0944h5.7606c.2361 0 .3777-.1889.3777-.4249v-1.4638c0-.2361-.1888-.4249-.3777-.4249h-3.9191v-1.511h3.9191c.2361 0 .3777-.1889.3777-.425v-1.3221c0-.1888-.1416-.3777-.3777-.3777h-3.9191v-1.511z"/></g></g></svg>
              </a>
            </div>
        }
      </nav>
    );
  }
}
