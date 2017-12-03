import React from 'react';

export const AddIcon = () => ({
  render() {
    const size = this.props.size || {};

    return (
      <svg {...size} className={this.props.className} viewBox="0 0 24 24" aria-labelledby="title">
        <path d="M0 0h24v24H0z" fill="none"/>
        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm5 11h-4v4h-2v-4H7v-2h4V7h2v4h4v2z"/>
      </svg>
    );
  }
});

export default AddIcon;
