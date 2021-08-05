import cn from 'classnames';

interface Props {}

const variantsMapping = {
  h1: 'h1',
  h2: 'h2',
  h3: 'h3',
  h4: 'h4',
  h5: 'h5',
  h6: 'h6',
  smallP: 'p',
  largeP: 'p',
  defaultP: 'p',
  a: 'a',
  bold: 'strong',
  italic: 'em',
  blockquote: 'blockquote',
};

const Typography = ({ variant, children, className, ...props }: Props) => {
  const Component = variant ? variantsMapping[variant] : 'p';
  return (
    <Component
      className={cn(`typography--class-${variant} ${className}`)}
      {...props}>
      {children}
      <style jsx>
        {`
          .commonHeading {
            font-family: Newsreader, sans-serif;
            margin-top: 0;
            font-weight: bold;
          }
          .mb1rem {
            margin-bottom: 1rem;
          }
          .typography--class-h1 {
            margin-bottom: 1.5rem;
            color: #0f437f;
            font-size: 3.75em;
            line-height: 1.3em;
          }
          .typography--class-h2 {
            color: #0f437f;
            font-size: 2.375em;
            line-height: 1.289em;
          }
          .typography--class-h3 {
            color: #1e3d60;
            font-size: 1.5em;
            line-height: 1.5em;
          }
          .typography--class-h4 {
            color: #1e3d60;
            font-size: 1.25em;
            line-height: 1.5em;
          }
          .typography--class-h5 {
            color: #0f437f;
            font-size: 1.125em;
            line-height: 1.444em;
          }
          .typography--class-h6 {
            margin-bottom: 0.625rem;
            color: #0f437f;
            font-size: 1em;
            line-height: 1.5em;
          }
          .typography--class-smallP {
            font-size: 0.938em;
            line-height: 1.6em;
          }
          .typography--class-largeP {
            font-size: 1.5em;
            line-height: 1.583em;
          }
          .typography--class-a {
            -webkit-transition: color 300ms ease;
            transition: color 300ms ease;
            color: #064ea4;
            text-decoration: underline;
            background-color: transparent;
            cursor: pointer;
          }
          .typography--class-a:hover,
          .typography--class-a:focus {
            color: #f99d77;
            outline: 0;
          }
          .typography--class-bold {
            color: #0f437f;
            font-weight: 700;
          }
          .typography--class-blockquote {
            margin: 0 0 0.625rem 0;
            padding: 4.375rem 4.75rem 4.375rem 7.875rem;
            border-left: 11px solid #f99d77;
            border-radius: 10px 20px 20px 10px;
            background-color: #fff;
            box-shadow: 0 5px 15px 0 rgb(30 61 96 / 3%);
            font-size: 1.5em;
            line-height: 1.583em;
          }
          @media screen and (max-width: 991px) {
            .typography--class-h1 {
              margin-bottom: 1.25rem;
              font-size: 3.125em;
            }
            .typography--class-h2 {
              margin-bottom: 1.25rem;
            }
            .typography--class-blockquote {
              padding: 3.625rem 3.938rem;
              font-size: 1.375em;
            }
          }
          @media screen and (max-width: 767px) {
            .typography--class-h1 {
              margin-bottom: 1rem;
              font-size: 2.625em;
            }
            .typography--class-h2 {
              margin-bottom: 1rem;
              font-size: 2em;
            }
            .typography--class-h3 {
              font-size: 1.375em;
            }
            .typography--class-largeP {
              font-size: 1.25em;
              line-height: 2em;
            }
            .typography--class-blockquote {
              padding: 3rem 3.125rem;
              font-size: 1.25em;
            }
          }
          @media screen and (max-width: 479px) {
            .typography--class-h1 {
              margin-bottom: 0.625rem;
              font-size: 2.188em;
            }
            .typography--class-h2 {
              margin-bottom: 0.625rem;
              font-size: 1.625em;
            }
            .typography--class-h3 {
              font-size: 1.25em;
            }
            .typography--class-h4 {
              font-size: 1.125em;
            }
            .typography--class-h5 {
              font-size: 1em;
            }
            .typography--class-h6 {
              font-size: 0.875em;
            }
            .typography--class-blockquote {
              padding: 2.5rem 1.25rem;
              font-size: 1.125em;
            }
          }
        `}
      </style>
    </Component>
  );
};

export default Typography;
