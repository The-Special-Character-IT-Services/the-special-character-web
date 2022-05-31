import React, { useState } from 'react';
import Typography from '../Typography';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import 'react-datepicker/dist/react-datepicker-cssmodules.css';

export const DatePickerField = ({ ...props }) => {
  const { divClassName, name, label, placeholder, ...rest } = props;
  const [date, setDate] = useState(new Date('12/31/2006'));

  return (
    <div className={`datePickerDiv ${divClassName} `}>
      <Typography variant="label">{label}</Typography>
      <div className="dateSelect">
        <DatePicker
          dateFormat="dd/MM/yyyy"
          selected={date}
          onChange={value => {
            if (value !== null) setDate(value);
          }}
          maxDate={new Date('12/31/2006')}
          selectsEnd
          customInput={
            <button
              style={{
                backgroundColor: 'transparent',
                border: 'none',
                color: '#62778f',
                fontSize: '18px',
              }}>
              {`${date.getDate()}/${date.getMonth() + 1}/${date.getFullYear()}`}
            </button>
          }
        />
      </div>
      <style jsx>
        {`
          @import '../../styles/variables.scss';

          .datePickerDiv {
            & > .dateSelect {
              min-height: 4rem;
              max-width: 100%;
              min-width: 100%;
              margin-bottom: 0px;
              padding-right: 1.875rem;
              padding-left: 1.875rem;
              border: 1px solid transparent;
              border-radius: 6.25rem;
              background-color: #f9fafb;
              color: #0f437f;
              font-size: 18px;
              line-height: 1.111em;
              appearance: none;
              display: flex;
              justify-content: center;
              align-items: center;
            }
          }
        `}
      </style>
    </div>
  );
};

export default DatePickerField;
