interface Props {}
import cn from 'classnames';

const variantsMapping = {
  ul: 'ul',
  ol: 'ol',
};

const List = ({
  variant,
  listItem,
  className,
  keyProp,
  valueProp,
  ...props
}: Props) => {
  const Component = variant ? variantsMapping[variant] : 'ul';
  return (
    <Component
      className={cn('commonParentList', { [className]: !!className })}
      {...props}>
      {listItem?.map(item => {
        if (typeof item === 'string') {
          return <li key={item}>{item}</li>;
        }
        if (typeof item === 'object' && item[keyProp] && item[valueProp]) {
          return <li key={item[keyProp]}>{item[valueProp]}</li>;
        }
        throw new Error('Please pass key and value props');
      })}
      <style jsx>{`
        .commonParentList {
          margin-top: 0;
          margin-bottom: 0.625rem;
          padding-left: 2.5rem;
          & > li {
            margin-bottom: 1rem;
          }
        }
      `}</style>
    </Component>
  );
};

export default List;
