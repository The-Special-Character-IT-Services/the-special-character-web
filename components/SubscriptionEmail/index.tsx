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
            padding: 8px 12px;
            margin-bottom: 10px;
            font-size: 14px;
            line-height: 1.42857143;
            color: #333333;
            vertical-align: middle;
            background-color: #ffffff;
            border: 1px solid #cccccc;
          }
          .input {
            min-height: 65px;
            margin-bottom: 0px;
            outline: none;
            padding-right: 30px;
            padding-left: 30px;
            border: 1px solid transparent;
            border-radius: 100px;
            background-color: #f9fafb;
            -webkit-transition: border-color 300ms ease, color 300ms ease;
            transition: border-color 300ms ease, color 300ms ease;
            color: #0f437f;
            font-size: 18px;
            line-height: 1.111em;
            &:hover {
              border-color: #becad7;
            }
          }
          .input.footer-newsletter {
            min-height: 71px;
            padding-right: 125px;
            padding-left: 23px;
            background-color: #fff;
          }
          .button-primary.footer-newsletter {
            position: absolute;
            right: 10px;
            padding: 15px 24px;
            font-size: 14px;
            line-height: 1.143em;
          }

          .w-button {
            display: inline-block;
            padding: 9px 15px;
            background-color: #3898ec;
            color: white;
            border: 0;
            line-height: inherit;
            text-decoration: none;
            cursor: pointer;
            border-radius: 0;
          }
          .button-primary {
            padding: 24px 40px;
            border-radius: 1000px;
            background-color: #064ea4;
            -webkit-transition: background-color 300ms ease,
              -webkit-transform 300ms ease;
            transition: background-color 300ms ease,
              -webkit-transform 300ms ease;
            transition: transform 300ms ease, background-color 300ms ease;
            transition: transform 300ms ease, background-color 300ms ease,
              -webkit-transform 300ms ease;
            color: #fff;
            font-size: 16px;
            line-height: 1.125em;
            font-weight: 700;
            text-align: center;
            letter-spacing: 0.08em;
            text-transform: uppercase;
            -webkit-transform-style: preserve-3d;
            transform-style: preserve-3d;
          }
          @media screen and (max-width: $breakpointSm) {
            .footer-newsletter-form {
              flex-direction: column;
              align-items: stretch;
            }
            .input.footer-newsletter {
              min-height: 65px;
              margin-bottom: 20px;
              padding-right: 20px;
              padding-left: 20px;
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
