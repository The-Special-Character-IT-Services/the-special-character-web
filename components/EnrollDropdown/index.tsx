import React, { useState } from 'react';
import styles from './enrollDropdown.module.scss';
import Typography from '../Typography';
import RightArrow from '../../public/svg/rightArrow.svg';
import Checked from '../../public/svg/squareCheck.svg';
import Uncheck from '../../public/svg/square.svg';

const EnrollFieldChecked = ({ ...props }) => {
  const { item, index, checked } = props;
  const [isChecked, setIsChecked] = useState(checked);

  console.log('IS CHECKED :::: ', isChecked, index, item.id);
  return (
    <div className="listDiv" onClick={() => setIsChecked(!isChecked)}>
      {isChecked ? (
        <Checked height={20} width={20} fill="#62778f" />
      ) : (
        <Uncheck height={20} width={20} fill="#62778f" />
      )}
      <Typography style={{ marginBottom: '0px' }}>{item.listName}</Typography>
      <style jsx>{`
        .listDiv {
          display: flex;
          align-items: center;
          gap: 1rem;
          cursor: pointer;
        }
      `}</style>
    </div>
  );
};

const EnrollDropdown = ({ ...props }) => {
  const { divClassName, name, label, placeholder, ...rest } = props;
  const [showDropdown, setShowDropdown] = useState(false);
  const list = [
    {
      id: 0,
      listName: 'Advanced Javascript',
      isChecked: false,
    },
    {
      id: 1,
      listName: 'React.JS / Angular.JS / Vue.JS / Next.JS',
      isChecked: false,
    },
    {
      id: 2,
      listName: 'Node.JS / Express',
      isChecked: false,
    },
    {
      id: 3,
      listName: 'GoLang',
      isChecked: false,
    },
    {
      id: 4,
      listName: 'Java',
      isChecked: false,
    },
    {
      id: 5,
      listName: 'Python',
      isChecked: false,
    },
    {
      id: 6,
      listName: 'React Native',
      isChecked: false,
    },
    {
      id: 7,
      listName: 'Flutter',
      isChecked: false,
    },
    {
      id: 8,
      listName: 'Strapi',
      isChecked: false,
    },
    {
      id: 9,
      listName: 'Wordpress',
      isChecked: false,
    },
    {
      id: 10,
      listName: 'MySQL / PostgreSQL / MongoDB / Redis',
      isChecked: false,
    },
    {
      id: 11,
      listName: 'AWS',
      isChecked: false,
    },
  ];
  return (
    <div className={`${styles.dropdownDiv} ${divClassName} `}>
      <Typography variant="label">{label}</Typography>
      <div
        onClick={() => setShowDropdown(!showDropdown)}
        className={`${styles.dropdownSelect} container`}
        style={{
          borderBottomRightRadius: showDropdown ? '0rem' : '6.25rem',
          borderBottomLeftRadius: showDropdown ? '0rem' : '6.25rem',
          borderTopLeftRadius: showDropdown ? '2rem' : '6.25rem',
          borderTopRightRadius: showDropdown ? '2rem' : '6.25rem',
        }}>
        <p style={{ margin: 0, color: '#62778f' }}>{placeholder}</p>
        <RightArrow
          height={24}
          width={24}
          fill="#62778f"
          style={{ transform: 'rotate(90deg)' }}
        />
      </div>
      {showDropdown && (
        <div className="showDropdown">
          {list.map((item, index) => {
            return (
              <EnrollFieldChecked
                key={index}
                item={item}
                index={index}
                checked={item.isChecked}
              />
            );
          })}
        </div>
      )}
      <style jsx>{`
        @import './styles/variables.scss';
        .container {
          display: flex;
          justify-content: space-between;
          align-items: center;
        }
        .showDropdown {
          border: solid;
          border-color: #f9fafb;
          border-top-width: 0px;
          border-end-start-radius: 2rem;
          border-end-end-radius: 2rem;
          padding: 2rem 1.7rem;
          width: 400px;
          box-shadow: 0 5px 5px #62778f;
          position: absolute;
          background-color: #fff;
          gap: 0.5rem;
          display: flex;
          flex-direction: column;
        }

        @media screen and (max-width: $breakpointLgForMw) {
          .showDropdown {
            width: 300px;
          }
        }
        @media screen and (max-width: $breakpointMdForMw) {
          .showDropdown {
            width: 500px;
          }
        }
        @media screen and (max-width: $breakpointSmForMw) {
          .showDropdown {
            width: 290px;
          }
        }
      `}</style>
    </div>
  );
};

export default EnrollDropdown;
