import PropTypes from 'prop-types';
import { forwardRef } from 'react';
import classNames from 'classnames/bind';

import styles from './Input.module.scss';

const cx = classNames.bind(styles);

const Input = forwardRef(
    (
        {
            labelText,
            className,
            primary = false,
            custom1 = false,
            custom2 = false,
            ...inputProps
        },
        ref,
    ) => {
        const classes = cx('wrapper', {
            [className]: className,
            primary,
            custom1,
            custom2,
        });

        return (
            <div className={classes}>
                <label>{labelText}</label>
                <input {...inputProps} ref={ref} />
            </div>
        );
    },
);

Input.propTypes = {
    labelText: PropTypes.string,
    className: PropTypes.string,
    primary: PropTypes.bool,
    custom1: PropTypes.bool,
    custom2: PropTypes.bool,
};

export default Input;
