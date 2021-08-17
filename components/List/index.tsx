interface Props {
  isNumberedList?: boolean;
  listItem: JSX.Element[];
  props?: Object;
  className?: 'commonParentList' | string | any;
  keyProp: JSX.IntrinsicAttributes;
  valueProp: string;
}
import cn from 'classnames';

const List = ({
  listItem,
  className,
  keyProp,
  valueProp,
  isNumberedList,
  ...props
}: Props) => {
  const Component = isNumberedList ? 'ol' : 'ul';
  return (
    <>
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
      </Component>
      <style jsx>{`
        .commonParentList {
          margin-top: 0;
          margin-bottom: 0.6rem;
          padding-left: 2.5rem;
          & > li {
            margin-bottom: 1rem;
          }
        }
      `}</style>
    </>
  );
};

export default List;
