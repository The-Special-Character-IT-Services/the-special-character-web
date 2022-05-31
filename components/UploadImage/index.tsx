import React, { useState } from 'react';
import styles from '@container/EnrollForm/enrollForm.module.scss';
import { useDropzone } from 'react-dropzone';

const UploadeImage = ({ ...props }) => {
  const [file, setFile] = useState([]);
  const { label } = props;
  const { acceptedFiles, getRootProps, getInputProps } = useDropzone({
    accept: { 'image/jpeg': ['.jpeg', '.png'] },
    maxFiles: 1,
  });
  const files = acceptedFiles.map(file => {
    return (
      <li key={file.name} style={{ listStyle: 'none' }}>
        {file.name} - {file.size} bytes
      </li>
    );
  });
  return (
    <div className={styles.textInput} {...getRootProps()}>
      <input {...getInputProps()} />
      <p className="label">{label}</p>
      {files.length === 0 ? (
        <p className="contactInput" style={{ color: '#62778f' }}>
          Only *.jpeg and *.png images will be accepted
        </p>
      ) : (
        <ul className="contactInput">{files ?? 'Ex. image.jpeg/jpg/png'}</ul>
      )}
      <style jsx>
        {`
          @import '../../styles/variables.scss';
          .label {
            display: block;
            margin-bottom: 1rem;
            color: $Neutral700;
            line-height: 1.111em;
            font-weight: 700;
          }
          .contactInput {
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
            display: flex;
            align-items: center;
            justify-content: center;
            line-height: 1.111em;
            &:hover,
            &:focus {
              border-color: $Neutral400;
              transition-duration: 300ms;
              outline: 0;
            }
            &.error {
              border-color: $danger;
            }
          }
        `}
      </style>
    </div>
  );
};
export default UploadeImage;
