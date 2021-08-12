interface Props {}

const SubscriptionEmail = (props: Props) => {
  return (
    <form
      id="wf-form-Footer-Newsletter-Form"
      className="footer-newsletter-form">
      <input
        type="email"
        name="email"
        id="email"
        required
        placeholder="Enter your email"
        className="input footer-newsletter w-input"
      />
      <input
        type="submit"
        value="Submit"
        className="button-primary footer-newsletter w-button"
      />
      <style jsx>
        {`
          @import './styles/variables.scss';
          .footer-newsletter-form {
            position: relative;
            display: flex;
            align-items: center;
          }
          .w-input,
          .w-select {
            display: block;
            width: 100%;
            height: 38px;
            padding: 0.5rem 0.75rem;
            margin-bottom: 0.625rem;
            font-size: 0.875rem;
            line-height: 1.42857143;
            color: $gray-dark;
            vertical-align: middle;
            background-color: $Neutral100;
            border: 1px solid $lightgray;
          }
          .input {
            min-height: 65px;
            margin-bottom: 0;
            outline: none;
            padding: 0 2rem;
            border: 1px solid transparent;
            border-radius: 100px;
            background-color: $Neutral200;
            -webkit-transition: border-color 300ms ease, color 300ms ease;
            transition: border-color 300ms ease, color 300ms ease;
            color: $Neutral800;
            font-size: 1.125rem;
            line-height: 1.111em;
            &:hover {
              border-color: $Neutral400;
            }
          }
          .input.footer-newsletter {
            min-height: 71px;
            padding-right: 7.75rem;
            padding-left: 1.5rem;
            background-color: $Neutral100;
          }
          .button-primary.footer-newsletter {
            position: absolute;
            right: 10px;
            padding: 1rem 1.5rem;
            font-size: 0.875rem;
            line-height: 1.15em;
          }

          .w-button {
            display: inline-block;
            padding: 0.5rem 1rem;
            background-color: $Primary1;
            color: $Neutral100;
            border: 0;
            line-height: inherit;
            text-decoration: none;
            cursor: pointer;
            border-radius: 0;
          }
          .button-primary {
            padding: 1.5rem 2.5rem;
            border-radius: 1000px;
            background-color: $Primary1;
            -webkit-transition: background-color 300ms ease,
              -webkit-transform 300ms ease;
            transition: background-color 300ms ease,
              -webkit-transform 300ms ease;
            transition: transform 300ms ease, background-color 300ms ease;
            transition: transform 300ms ease, background-color 300ms ease,
              -webkit-transform 300ms ease;
            color: $Neutral100;
            font-size: 1rem;
            line-height: 1.125em;
            font-weight: 700;
            text-align: center;
            letter-spacing: 0.08em;
            text-transform: uppercase;
            -webkit-transform-style: preserve-3d;
            transform-style: preserve-3d;
          }
          @media screen and (max-width: $breakpointSmForMw) {
            .footer-newsletter-form {
              flex-direction: column;
              align-items: stretch;
            }
            .input.footer-newsletter {
              min-height: 65px;
              margin-bottom: 1.25rem;
              padding-right: 1.25rem;
              padding-left: 1.25rem;
            }
            .button-primary.footer-newsletter {
              position: static;
              min-height: 65px;
            }
          }
        `}
      </style>
    </form>
  );
};

export default SubscriptionEmail;
