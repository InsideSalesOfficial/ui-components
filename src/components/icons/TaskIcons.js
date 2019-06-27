import React from 'react';

import AutoEmailIcon from './AutoEmailIcon';
import PhoneFilledIcon from './PhoneFilledIcon';
import EmailFilledIcon from './EmailFilledIcon';
import OtherFilledIcon from './OtherFilledIcon';
import CallbackIcon from './CallbackIcon';
import LinkedinSocialIcon from './LinkedinSocialIcon';

const TaskIcons = (props) => {
  switch (props.type) {
    case 'call':
    case 'phone':
    case 'phone-filled':
      return (<PhoneFilledIcon {...props} />);
    case 'email':
      if (props.autoEmail) {
        props.size = { width: '24px', height: '24px' };
        return (<AutoEmailIcon {...props} />);
      }
      return (<EmailFilledIcon {...props} />);
    case 'auto-email':
    case 'auto-email-filled':
      return (<AutoEmailIcon {...props} />);
    case 'email-filled':
      return (<EmailFilledIcon {...props} />);
    case 'callback-filled':
      return (<CallbackIcon {...props} />);
    case 'other':
      return (<OtherFilledIcon {...props} />);
    case 'other-filled':
      return (<OtherFilledIcon {...props} />);
    case 'inMailConnect':
    case 'inMailMessage':
    case 'inMailConnect-filled':
    case 'inMailMessage-filled':
      return (<LinkedinSocialIcon {...props}/>);
    default:
      return null;
  }
};

export default TaskIcons;
