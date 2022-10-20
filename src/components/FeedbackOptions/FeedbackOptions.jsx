import PropTypes from 'prop-types';
import css from './FeedbackOptions.module.css';
export const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  return (
    <>
      <div>
        {options.map(option => {
          return (
            <button
              className={css.buttonFeedback}
              key={option}
              onClick={() => onLeaveFeedback(option)}
              type="button"
            >
              {option}
            </button>
          );
        })}
      </div>
    </>
  );
};
FeedbackOptions.propTypes = {
  onLeaveFeedback: PropTypes.func.isRequired,
  options: PropTypes.arrayOf(PropTypes.string).isRequired,
};
