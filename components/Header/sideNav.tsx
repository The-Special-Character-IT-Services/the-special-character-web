import React from 'react';

interface Props {}

const sideNav = (props: Props) => {
  return (
    <div className="split-content header-left">
      <div className="w-commerce-commercecartwrapper">
        <a
          href="#"
          className="w-commerce-commercecartopenlink cart-button w-inline-block">
          <div className="w-commerce-commercecartopenlinkcount cart-quantity">
            0
          </div>
          <div className="cart-button-icon"></div>
        </a>
        <div className="w-commerce-commercecartcontainerwrapper w-commerce-commercecartcontainerwrapper--cartType-rightSidebar cart-wrapper">
          <div className="w-commerce-commercecartcontainer cart-container">
            <div className="w-commerce-commercecartheader cart-header">
              <h4 className="w-commerce-commercecartheading">Your Cart</h4>
              <a
                href="#"
                className="w-commerce-commercecartcloselink cart-close-button w-inline-block">
                <svg width="16px" height="16px" viewBox="0 0 16 16">
                  <g
                    stroke="none"
                    strokeWidth="1"
                    fill="none"
                    fillRule="evenodd">
                    <g fillRule="nonzero" fill="#333333">
                      <polygon points="6.23223305 8 0.616116524 13.6161165 2.38388348 15.3838835 8 9.76776695 13.6161165 15.3838835 15.3838835 13.6161165 9.76776695 8 15.3838835 2.38388348 13.6161165 0.616116524 8 6.23223305 2.38388348 0.616116524 0.616116524 2.38388348 6.23223305 8"></polygon>
                    </g>
                  </g>
                </svg>
              </a>
            </div>
            <div className="w-commerce-commercecartformwrapper">
              <form className="w-commerce-commercecartform">
                <div className="w-commerce-commercecartlist cart-list">
                  <div className="w-commerce-commercecartitem cart-item">
                    <div className="cart-item-wrapper">
                      <a
                        href="#"
                        className="image-wrapper cart-item-image w-inline-block"></a>
                      <div className="w-commerce-commercecartiteminfo cart-item-content">
                        <a
                          href="#"
                          className="title cart-item-title w-dyn-bind-empty"></a>
                        <div className="cart-item-price">$ 0.00 USD</div>
                        <script
                          type="text/x-wf-template"
                          id="wf-template-86d01ae5-f4f5-e0fe-d623-45a4fc1f5cfa">
                          %3Cli%3E%3Cspan%20data-wf-bindings%3D%22%255B%257B%2522innerHTML%2522%253A%257B%2522type%2522%253A%2522PlainText%2522%252C%2522filter%2522%253A%257B%2522type%2522%253A%2522identity%2522%252C%2522params%2522%253A%255B%255D%257D%252C%2522dataPath%2522%253A%2522database.commerceOrder.userItems%255B%255D.product.f_sku_properties_3dr%255B%255D.name%2522%257D%257D%255D%22%20class%3D%22w-dyn-bind-empty%22%3E%3C%2Fspan%3E%3Cspan%3E%3A%20%3C%2Fspan%3E%3Cspan%20data-wf-bindings%3D%22%255B%257B%2522innerHTML%2522%253A%257B%2522type%2522%253A%2522CommercePropValues%2522%252C%2522filter%2522%253A%257B%2522type%2522%253A%2522identity%2522%252C%2522params%2522%253A%255B%255D%257D%252C%2522dataPath%2522%253A%2522database.commerceOrder.userItems%255B%255D.product.f_sku_properties_3dr%255B%255D%2522%257D%257D%255D%22%20class%3D%22cart-item-option-result%20w-dyn-bind-empty%22%3E%3C%2Fspan%3E%3C%2Fli%3E
                        </script>
                        <ul className="w-commerce-commercecartoptionlist">
                          <li>
                            <span className="w-dyn-bind-empty"></span>
                            <span>: </span>
                            <span className="cart-item-option-result w-dyn-bind-empty"></span>
                          </li>
                        </ul>
                        <a
                          href="#"
                          className="cart-remove-button w-inline-block">
                          <div>Remove</div>
                        </a>
                      </div>
                    </div>
                    <input
                      type="text"
                      required
                      pattern="^[0-9]+$"
                      inputMode="numeric"
                      className="w-commerce-commercecartquantity cart-item-quantity"
                      name="quantity"
                      value="1"
                    />
                  </div>
                </div>
                <div className="w-commerce-commercecartfooter cart-footer">
                  <div className="w-commerce-commercecartlineitem cart-line-item">
                    <div>Subtotal</div>
                    <div className="w-commerce-commercecartordervalue cart-subtotal"></div>
                  </div>
                  <div>
                    <div>
                      <a className="w-commerce-commercecartapplepaybutton apple-pay">
                        <div></div>
                      </a>
                      <a className="w-commerce-commercecartquickcheckoutbutton">
                        <svg
                          className="w-commerce-commercequickcheckoutgoogleicon"
                          xmlns="http://www.w3.org/2000/svg"
                          xmlnsXlink="http://www.w3.org/1999/xlink"
                          width="16"
                          height="16"
                          viewBox="0 0 16 16">
                          <defs>
                            <polygon
                              id="google-mark-a"
                              points="0 .329 3.494 .329 3.494 7.649 0 7.649"></polygon>
                            <polygon
                              id="google-mark-c"
                              points=".894 0 13.169 0 13.169 6.443 .894 6.443"></polygon>
                          </defs>
                          <g fill="none" fillRule="evenodd">
                            <path
                              fill="#4285F4"
                              d="M10.5967,12.0469 L10.5967,14.0649 L13.1167,14.0649 C14.6047,12.6759 15.4577,10.6209 15.4577,8.1779 C15.4577,7.6339 15.4137,7.0889 15.3257,6.5559 L7.8887,6.5559 L7.8887,9.6329 L12.1507,9.6329 C11.9767,10.6119 11.4147,11.4899 10.5967,12.0469"></path>
                            <path
                              fill="#34A853"
                              d="M7.8887,16 C10.0137,16 11.8107,15.289 13.1147,14.067 C13.1147,14.066 13.1157,14.065 13.1167,14.064 L10.5967,12.047 C10.5877,12.053 10.5807,12.061 10.5727,12.067 C9.8607,12.556 8.9507,12.833 7.8887,12.833 C5.8577,12.833 4.1387,11.457 3.4937,9.605 L0.8747,9.605 L0.8747,11.648 C2.2197,14.319 4.9287,16 7.8887,16"></path>
                            <g transform="translate(0 4)">
                              <mask id="google-mark-b" fill="#fff">
                                <use xlinkHref="#google-mark-a"></use>
                              </mask>
                              <path
                                fill="#FBBC04"
                                d="M3.4639,5.5337 C3.1369,4.5477 3.1359,3.4727 3.4609,2.4757 L3.4639,2.4777 C3.4679,2.4657 3.4749,2.4547 3.4789,2.4427 L3.4939,0.3287 L0.8939,0.3287 C0.8799,0.3577 0.8599,0.3827 0.8459,0.4117 C-0.2821,2.6667 -0.2821,5.3337 0.8459,7.5887 L0.8459,7.5997 C0.8549,7.6167 0.8659,7.6317 0.8749,7.6487 L3.4939,5.6057 C3.4849,5.5807 3.4729,5.5587 3.4639,5.5337"
                                mask="url(#google-mark-b)"></path>
                            </g>
                            <mask id="google-mark-d" fill="#fff">
                              <use xlinkHref="#google-mark-c"></use>
                            </mask>
                            <path
                              fill="#EA4335"
                              d="M0.894,4.3291 L3.478,6.4431 C4.113,4.5611 5.843,3.1671 7.889,3.1671 C9.018,3.1451 10.102,3.5781 10.912,4.3671 L13.169,2.0781 C11.733,0.7231 9.85,-0.0219 7.889,0.0001 C4.941,0.0001 2.245,1.6791 0.894,4.3291"
                              mask="url(#google-mark-d)"></path>
                          </g>
                        </svg>
                        <svg
                          className="w-commerce-commercequickcheckoutmicrosofticon"
                          xmlns="http://www.w3.org/2000/svg"
                          width="16"
                          height="16"
                          viewBox="0 0 16 16">
                          <g fill="none" fillRule="evenodd">
                            <polygon
                              fill="#F05022"
                              points="7 7 1 7 1 1 7 1"></polygon>
                            <polygon
                              fill="#7DB902"
                              points="15 7 9 7 9 1 15 1"></polygon>
                            <polygon
                              fill="#00A4EE"
                              points="7 15 1 15 1 9 7 9"></polygon>
                            <polygon
                              fill="#FFB700"
                              points="15 15 9 15 9 9 15 9"></polygon>
                          </g>
                        </svg>
                        <div>Pay with browser.</div>
                      </a>
                    </div>
                    <a
                      href="checkout.html"
                      className="w-commerce-commercecartcheckoutbutton button-primary">
                      Continue to Checkout
                    </a>
                  </div>
                </div>
              </form>
              <div className="w-commerce-commercecartemptystate empty-state cart">
                <div>No items found.</div>
                <a
                  href="courses.html"
                  className="button-primary cart-empty-state w-button">
                  Explore Courses
                </a>
              </div>
              <div className="w-commerce-commercecarterrorstate error-message">
                <div className="w-cart-error-msg">
                  Product is not available in this quantity.
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="menu-button w-nav-button">
        <div className="header-menu-button-icon-wrapper">
          <div className="icon-wrapper">
            <div className="header-menu-button-icon-top"></div>
            <div className="header-menu-button-icon-medium"></div>
            <div className="header-menu-button-icon-bottom"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default sideNav;
