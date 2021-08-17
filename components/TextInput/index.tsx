import PropTypes from 'prop-types';
import cn from 'classnames';
import Typography from '@components/Typography';

interface Props {
  name: string;
  label: string;
  className?: string | any;
  isTextArea?: boolean;
  placeholder: string;
  id?: string;
  type?: string;
}

const TextInput = ({
  name,
  placeholder,
  label,
  className,
  isTextArea,
  ...rest
}: Props) => {
  const Component = isTextArea ? 'textarea' : 'input';

  return (
    <div className="input-wrapper">
      <Typography variant="label" htmlFor={name}>
        {label}
      </Typography>
      <Component
        id={name}
        className={cn('contactInput', {
          textArea: isTextArea,
          [className]: !!className,
        })}
        placeholder={placeholder}
        {...rest}
      />
      <style jsx>
        {`
          @import '../../styles/variables.scss';
          .input-wrapper {
            & > label {
              display: block;
              margin-bottom: 1rem;
              color: $Neutral700;
              line-height: 1.111em;
              font-weight: 700;
            }
            & > .contactInput {
              min-height: 4rem;
              max-width: 100%;
              min-width: 100%;
              margin-bottom: 0px;
              padding-right: 1.875rem;
              padding-left: 1.875rem;
              border: 1px solid transparent;
              border-radius: 6.25rem;
              background-color: $Neutral200;
              color: $Neutral800;
              font-size: 18px;
              line-height: 1.111em;
              &.textArea {
                resize: vertical;
                min-height: 12rem;
                font-family: inherit;
                padding: 2rem 1.875rem;
                margin-right: 1.875rem;
                border-radius: 1.25rem;
              }
              &:hover,
              &:focus {
                border-color: $Neutral400;
                transition-duration: 300ms;
                outline: 0;
              }
            }
          }
          @media screen and (max-width: $breakpointSm) {
            .input-wrapper {
              & > .contactInput {
                padding-right: 0.9rem;
                padding-left: 0.9rem;
                &.textArea {
                  padding-right: 0.9rem;
                  padding-left: 0.9rem;
                }
              }
            }
          }
        `}
      </style>
    </div>
  );
};

export default TextInput;
