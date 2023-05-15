import {
  WrapperButton,
  BtnGood,
  BtnNeutral,
  BtnBad,
} from './FeedbackOptions.styled.js';
import PropTypes from 'prop-types';
const FeedbackOption = ({
  onLeaveFeedbackGood,
  onLeaveFeedbackNeutral,
  onLeaveFeedbackBad,
}) => {
  return (
    <WrapperButton>
      <BtnGood type="button" onClick={onLeaveFeedbackGood}>
        Good
      </BtnGood>
      <BtnNeutral type="button" onClick={onLeaveFeedbackNeutral}>
        Neutral
      </BtnNeutral>
      <BtnBad type="button" onClick={onLeaveFeedbackBad}>
        Bad
      </BtnBad>
    </WrapperButton>
  );
};
export default FeedbackOption;

FeedbackOption.propTypes = {
  onLeaveFeedbackGood: PropTypes.func.isRequired,
  onLeaveFeedbackNeutral: PropTypes.func.isRequired,
  onLeaveFeedbackBad: PropTypes.func.isRequired,
};
