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
  a: 'a',
  bold: 'strong',
  italic: 'em',
  blockquote: 'blockquote',
  label: 'label',
};

const Typography = ({ variant, children, className, ...props }: Props) => {
  const Component = variant ? variantsMapping[variant] : 'p';
  return (
    <Component
      className={cn(variant ? `typography--class-${variant}` : null, {
        [className]: !!className,
      })}
      {...props}>
      {children}
      <style jsx>
        {`
          .commonHeading {
            font-family: var(--newsReaderFont);
            margin-top: 0;
            font-weight: bold;
          }
          .mb1rem {
            margin-bottom: 1rem;
          }
          .typography--class-h1 {
            margin-bottom: 1.5rem;
            color: var(--Neutral800);
            font-size: var(--fs-h1);
            line-height: 1.3em;
          }
          .typography--class-h2 {
            color: var(--Neutral800);
            font-size: var(--fs-h2);
            line-height: 1.289em;
          }
          .typography--class-h3 {
            color: var(--Neutral700);
            font-size: var(--fs-h3);
            line-height: 1.5em;
          }
          .typography--class-h4 {
            color: var(--Neutral700);
            font-size: var(--fs-h4);
            line-height: 1.5em;
          }
          .typography--class-h5 {
            color: var(--Neutral800);
            font-size: var(--fs-h5);
            line-height: 1.444em;
          }
          .typography--class-h6 {
            margin-bottom: 0.625rem;
            color: var(--Neutral800);
            font-size: var(--fs-h6);
            line-height: 1.5em;
          }
          .typography--class-smallP {
            font-size: var(--fs-smallP);
            line-height: 1.6em;
          }
          .typography--class-largeP {
            font-size: var(--fs-largeP);
            line-height: 1.583em;
          }
          .typography--class-a {
            -webkit-transition: color 300ms ease;
            transition: color 300ms ease;
            color: var(--Primary1);
            text-decoration: underline;
            background-color: transparent;
            cursor: pointer;
          }
          .typography--class-a:hover,
          .typography--class-a:focus {
            color: var(--Secondary3);
            outline: 0;
          }
          .typography--class-bold {
            color: var(--Neutral800);
            font-weight: 700;
          }
          .typography--class-blockquote {
            margin: 0 0 0.625rem 0;
            padding: 4.375rem 4.75rem 4.375rem 7.875rem;
            border-left: 11px solid var(--Secondary3);
            border-radius: 10px 20px 20px 10px;
            background-color: var(--Neutral100);
            box-shadow: 0 5px 15px 0 rgb(30 61 96 / 3%);
            font-size: var(--fs-blockquote);
            line-height: 1.583em;
          }
          .typography--class-label {
            display: block;
            margin-bottom: 1rem;
            color: var(--Neutral700);
            line-height: 1.111em;
            font-weight: 700;
          }
          @media screen and (max-width: 991px) {
            .typography--class-h1 {
              margin-bottom: 1.25rem;
            }
            .typography--class-h2 {
              margin-bottom: 1.25rem;
            }
            .typography--class-blockquote {
              padding: 3.625rem 3.938rem;
            }
          }
          @media screen and (max-width: 767px) {
            .typography--class-h1 {
              margin-bottom: 1rem;
            }
            .typography--class-h2 {
              margin-bottom: 1rem;
            }
            .typography--class-largeP {
              line-height: 2em;
            }
            .typography--class-blockquote {
              padding: 3rem 3.125rem;
            }
          }
          @media screen and (max-width: 479px) {
            .typography--class-h1 {
              margin-bottom: 0.625rem;
            }
            .typography--class-h2 {
              margin-bottom: 0.625rem;
            }
            .typography--class-blockquote {
              padding: 2.5rem 1.25rem;
            }
          }
        `}
      </style>
    </Component>
  );
};

export default Typography;
