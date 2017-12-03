import React from 'react';

import PhoneIcon from './PhoneIcon';
import EmailIcon from './EmailIcon';
import ReminderIcon from './ReminderIcon';
import OtherIcon from './OtherIcon';
import AutoEmailIcon from './AutoEmailIcon';
import PhoneFilledIcon from './PhoneFilledIcon';
import EmailFilledIcon from './EmailFilledIcon';
import OtherFilledIcon from './OtherFilledIcon';
import CallbackIcon from './CallbackIcon';

const TaskIcons = (props) => {
  switch (props.type) {
    case 'call':
    case 'phone':
      if (props.list) {
        return (<PhoneFilledIcon {...props}/>);
      }
      return (<PhoneIcon {...props}/>);
    case 'phone-filled':
      return (<PhoneFilledIcon {...props}/>);
    case 'email':
      if (props.autoEmail) {
        props.size = { width: '24px', height: '24px' };
        return (<AutoEmailIcon {...props}/>);
      } else if (props.list) {
        return (<EmailFilledIcon {...props}/>);
      }
      return <EmailIcon {...props}/>;
    case 'auto-email':
    case 'auto-email-filled':
      return (<AutoEmailIcon {...props}/>);
    case 'email-filled':
      return (<EmailFilledIcon {...props}/>);
    case 'callback-filled':
      return (<CallbackIcon {...props}/>);
    case 'other':
      if (props.list) {
        return (<OtherFilledIcon {...props}/>);
      }
      return (<OtherIcon {...props}/>);
    case 'other-filled':
      return (<OtherFilledIcon {...props}/>);
    case 'wait':
      if (props.list) {
        props.size = { width: '40px', height: '40px' };
        return (<ReminderIcon {...props}/>);
      }
      return (<ReminderIcon {...props}/>);
    default:
      return null;
  }
};

export default TaskIcons;
