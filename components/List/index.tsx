type ListItem = {
  id: number;
  item: string;
};
interface Props {
  isNumberedList?: boolean;
  listItem: ListItem[] | string[];
  className?: 'commonParentList' | string | any;
  keyProp: string;
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
        {listItem.map(item => {
          if (typeof item === 'string') {
            return <li key={item}>{item}</li>;
          }
          if (
            typeof item === 'object' &&
            item[keyProp as keyof ListItem] &&
            item[valueProp as keyof ListItem]
          ) {
            return (
              <li key={`${item[keyProp as keyof ListItem]}`}>
                {item[valueProp as keyof ListItem]}
              </li>
            );
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
