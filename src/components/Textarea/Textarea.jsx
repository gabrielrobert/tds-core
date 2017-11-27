import React from 'react'
import PropTypes from 'prop-types'
import { childrenOfType } from 'airbnb-prop-types'

import Tooltip from '../Tooltip/Tooltip'

import FormField from '../FormField/FormField'
import FeedbackIcon from '../FormField/FeedbackIcon'

import styles from './Textarea.modules.scss'
import positionStyles from '../Position.modules.scss'

const Textarea = ({ ...props }) => (
  <FormField {...props}>
    {(textareaProps, showIcon, feedback) => (
      <div className={positionStyles.relative}>
        <textarea {...textareaProps} />

        <div className={styles.feedbackIconPosition}>
          <FeedbackIcon showIcon={showIcon} feedback={feedback} />
        </div>
      </div>
    )}
  </FormField>
)

Textarea.propTypes = {
  /**
   * The label.
   */
  label: PropTypes.string.isRequired,
  /**
   * Clarify the expected input.
   */
  hint: PropTypes.string,
  /**
   * The value.
   */
  value: PropTypes.string,
  /**
   * A feedback state.
   */
  feedback: PropTypes.oneOf(['success', 'error']),
  /**
   * An error message. Either an error or a helper should be used, not both.
   */
  error: PropTypes.string,
  /**
   * A detailed explanation of the input expected by a form field. Can be text,
   * other components, or HTML elements.
   *
   * If a function is provided, it must return a `Helper`. The function will be
   * invoked with the following arguments.
   *
   * @param {String} feedback The input's current feedback state.
   * @param {String} value The input's current value.
   */
  helper: PropTypes.oneOfType([PropTypes.func, PropTypes.node]),
  /**
   * A `Tooltip`
   */
  tooltip: childrenOfType(Tooltip),
  /**
   * A callback function to be invoked when the input value changes.
   *
   * @param {SyntheticEvent} event The React `SyntheticEvent`
   */
  onChange: PropTypes.func,
  /**
   * A callback function to be invoked when the input receives focus.
   *
   * @param {SyntheticEvent} event The React `SyntheticEvent`
   */
  onFocus: PropTypes.func,
  /**
   * A callback function to be invoked when the input loses focus.
   *
   * @param {SyntheticEvent} event The React `SyntheticEvent`
   */
  onBlur: PropTypes.func,
}

Textarea.defaultProps = {
  hint: undefined,
  value: '',
  feedback: undefined,
  error: undefined,
  helper: undefined,
  tooltip: undefined,
  onChange: undefined,
  onFocus: undefined,
  onBlur: undefined,
}

export default Textarea