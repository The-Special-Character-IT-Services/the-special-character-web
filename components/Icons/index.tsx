import PropTypes from 'prop-types';
import React, { useEffect, useRef, memo } from 'react';
import { axiosInstance } from '../../hooks/useRequest';
import classNames from 'classnames';
import styles from './icon.module.scss';
import { Icon, MinimalDetailsEntityOrCategoryOrSchedule } from 'types';

interface Props {
  socialLink?: MinimalDetailsEntityOrCategoryOrSchedule;
  variant?: string;
  className?: string;
}

const Icons = ({ socialLink, variant, className }: Props) => {
  const iconRef = useRef<HTMLAnchorElement>(null);

  useEffect(() => {
    const loadSvg = async () => {
      if (socialLink?.icon?.url && iconRef?.current) {
        const res = await axiosInstance.get(socialLink.icon.url, {
          responseType: 'text',
        });
        while (
          iconRef.current?.hasChildNodes() &&
          iconRef.current?.firstChild
        ) {
          iconRef.current?.removeChild(iconRef.current.firstChild);
        }
        iconRef.current?.insertAdjacentHTML('beforeend', res.data);
      }
    };

    loadSvg();
  }, [socialLink?.icon?.url]);
  return (
    <a
      rel="noreferrer"
      aria-label="button"
      href={socialLink?.link || ''}
      target="_blank"
      role="button"
      className={classNames(styles.categoryBtn, {
        [className || '']: !!className,
      })}
      ref={iconRef}>
      socialIcons
    </a>
  );
};

export default memo(Icons);
