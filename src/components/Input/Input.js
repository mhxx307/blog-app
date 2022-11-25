import PropTypes from 'prop-types';
import classNames from 'classnames/bind';

import styles from './Input.module.scss';

const cx = classNames.bind(styles);

function Input({ labelText, className, primary = false, custom1 = false, ...inputProps }) {
    const classes = cx('wrapper', {
        [className]: className,
        primary,
        custom1,
    });

    return (
        <div className={classes}>
            <label>{labelText}</label>
            <input {...inputProps} />
        </div>
    );
}

Input.propTypes = {
    labelText: PropTypes.string,
    className: PropTypes.string,
    primary: PropTypes.bool,
    custom1: PropTypes.bool,
};

export default Input;
