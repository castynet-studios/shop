import React from "react";
import styled from "styled-components";

export default function () {
  return (
    <>
      <Wrapper id="mc_embed_signup">
        <form
          action="https://castynet.us20.list-manage.com/subscribe/post?u=548afc8fab669b3c258e7d5cf&amp;id=8e6869543b"
          method="post"
          id="mc-embedded-subscribe-form"
          name="mc-embedded-subscribe-form"
          target="_blank"
          novalidate
          autocomplete="on"
        >
          <h2>Subscribe</h2>
          <div>
            <label for="mce-EMAIL">Email Address</label>
            <input type="email" value="" name="EMAIL" id="mce-EMAIL" required />
          </div>
          <div>
            <label for="mce-FNAME">Name</label>
            <input type="text" value="" name="FNAME" id="mce-FNAME" required />
          </div>
          <div className="mc-field-group input-group hidden">
            <strong>What should we talk about? </strong>
            <ul>
              <li>
                <input
                  type="checkbox"
                  value="1"
                  name="group[1901][1]"
                  id="mce-group[1901]-1901-0"
                  checked
                />
                <label for="mce-group[1901]-1901-0">Shop</label>
              </li>
            </ul>
          </div>
          <div id="mce-responses">
            <div id="mce-error-response" style={{ display: `none` }}></div>
            <div
              className="response"
              id="mce-success-response"
              style={{ display: `none` }}
            ></div>
          </div>
          <div
            style={{ position: `absolute`, left: `-5000px` }}
            aria-hidden="true"
          >
            <input
              type="text"
              name="b_548afc8fab669b3c258e7d5cf_8e6869543b"
              tabindex="-1"
              value=""
            />
          </div>
          <div className="clear">
            <input
              type="submit"
              value="Subscribe"
              name="subscribe"
              id="mc-embedded-subscribe"
            />
          </div>
        </form>
      </Wrapper>
    </>
  );
}

const Wrapper = styled.div`
  background-color: var(--white);
  padding: 10px;
  border-radius: 10px;
  margin: 0 0 20px 0;

  form {
    width: 100%;
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
  }
  .hidden {
    display: none;
  }
  h2 {
    text-align: center;
    padding: 10px;
  }
  div {
    display: inline-block;
    padding: 10px;
  }
`;
