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
      <style jsx>
        {`
          @import './styles/variables.scss';
          .footer-newsletter-form {
            position: relative;
            display: flex;
            align-items: center;
          }
          .input {
            min-height: 65px;
            margin-bottom: 0px;
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
          }
          .footer-newsletter {
            min-height: 71px;
            padding-right: 125px;
            padding-left: 23px;
            background-color: #fff;
          }
          @media screen and (max-width: $breakpointSm) {
            .footer-newsletter-form {
              flex-direction: column;
              align-items: stretch;
            }
          }
        `}
      </style>
    </form>
  );
};

export default SubscriptionEmail;
