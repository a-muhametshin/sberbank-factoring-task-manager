import React from 'react';
import PropTypes from 'prop-types';

import './footer.css';

const FILTERS_BTN = [
    {
        text: 'Все',
        id: 'all'
    },
    {
        text: 'Активные',
        id: 'active'
    },
    {
        text: 'Завершенные',
        id: 'completed'
    },
];

const Footer = ({ amount, activeFilter, changeFilter }) =>(
    <div className="footer">
        <span className="amount">{`Всего ${ amount } шт.`}</span>
        <div className="btn-group">
            {FILTERS_BTN.map(({text, id}) => (
                <button
                    key={ id }
                    onClick={ _ => changeFilter(id) }
                    className={ id === activeFilter ? "filter-btn active" : "filter-btn" }
                >{ text }</button>
            ))}
        </div>

    </div>
);

Footer.propTypes = {
    amount: PropTypes.number,
    activeFilter: PropTypes.string,
    changeFilter: PropTypes.func,
};
Footer.defaultProps = {
    amount: 0,
    activeFilter: 'all',
    changeFilter: () => {},
};

export default Footer;