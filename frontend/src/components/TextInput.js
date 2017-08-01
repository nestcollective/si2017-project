import React, { Component } from 'react';
import PropTypes from 'prop-types';

class TextInput extends Component {

  static propTypes = {
    text: PropTypes.string.isRequired,
    changeHandler: PropTypes.func.isRequired,
    value: PropTypes.string.isRequired,
    stateKey: PropTypes.string.isRequired,
    error: PropTypes.string,
    type: PropTypes.string,
  };

  static defaultPropTypes = {
    error: null,
    type: 'text',
  };

  changeValue = event => this.props.changeHandler(this.props.stateKey, event.target.value);

  render() {
    console.log(this.props.stateKey)
    const { text, type, value, error } = this.props;

    return (
      <div>
        <div className='flex'>
          <label>
            {text}:
            <input
              type={type}
              onChange={this.changeValue}
              value={value} />
          </label>
        </div>
        {error}
      </div>
    );
  }
}

export default TextInput;
