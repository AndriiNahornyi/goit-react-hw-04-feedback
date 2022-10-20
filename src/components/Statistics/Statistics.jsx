import PropTypes from 'prop-types';
import css from './Statistics.module.css';
export const Statistics = ({
  good,
  neutral,
  bad,
  total,
  positivePercentage,
}) => {
  return (
    <>
      <div>
        <p className={css.statisticsResult}>Good: {good}</p>
        <p className={css.statisticsResult}>Neutral: {neutral}</p>
        <p className={css.statisticsResult}>Bad: {bad}</p>
        <p className={css.statisticsResult}>Total: {total}</p>
        <p className={css.statisticsTotalResult}>
          Positive feedback:
          {positivePercentage || 0}%
        </p>
      </div>
    </>
  );
};
Statistics.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  positivePercentage: PropTypes.number.isRequired,
};
