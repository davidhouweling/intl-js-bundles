import React, { Component } from 'react';
import { FormattedMessage } from 'react-intl';
import moment from 'moment';

import en from '../translations/en.json';

export default class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      date: moment()
    };

    this.handleAddDay = this.handleAddDay.bind(this);
  }

  handleAddDay() {
    this.setState({
      date: this.state.date.clone().add(1, 'day')
    });
  }

  render() {
    return (
      <div>
        <FormattedMessage id="label" defaultMessage={en.label} />
        <FormattedMessage id="dateFormat" defaultMessage={en.dateFormat}>
          {format => (this.state.date.format(format))}
        </FormattedMessage>
        <FormattedMessage id="addDay" defaultMessage={en.addDay}>
          {label => (
            <button type="button" onClick={this.handleAddDay}>
              {label}
            </button>
          )}
        </FormattedMessage>
      </div>
    );
  }
}
