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
    <Component className={cn(`commonParentList ${className}`)} {...props}>
      {listItem?.map(item => {
        if (typeof item === 'object') {
          if (item[keyProp] && item[valueProp]) {
            return <li key={item[keyProp]}>{item[valueProp]}</li>;
          }
          throw new Error('Please pass key and value props');
        }
        return <li key={item}>{item}</li>;
      })}
      <style jsx>{`
        .commonParentList {
          margin-top: 0;
          margin-bottom: 0.625rem;
          padding-left: 2.5rem;
        }
        .commonParentList li {
          margin-bottom: 1rem;
        }
      `}</style>
    </Component>
  );
};

export default List;
