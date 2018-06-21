import React from 'react';
import styled from 'styled-components';

import { colors, fontSizes, typography } from '../styles';
import Modal from '../Modal' 
import ButtonBar from '../ButtonBar';

const Title = styled.div`
  width: 100%;

  color: ${colors.black87};

  margin-bottom: 8px;

  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  display: inline-block;
  ${typography.title}
`;

const ContentWrapper = styled.div`
  padding: 0 8px;
`;

const BodyDisplay = styled.div`
  margin-bottom: 20px;
  color: ${colors.black60};
  ${typography.body1}
  margin-top: ${(props) => {
    if (props.dialogTitle) {
      return '0';
    }
    return '8px';
  }};
  p {
    ${typography.body1}
  }
`;

class MessageDialog extends React.Component {
  render() {
    const {
      dialogTitle,
      bodyElement,
      center,
      ...props
    } = this.props;
    return (
        <Modal {...props}>
          <ContentWrapper>
            { dialogTitle &&
              <Title title={dialogTitle}>{dialogTitle}</Title>
            }
            <BodyDisplay dialogTitle={dialogTitle}>
              {bodyElement}
            </BodyDisplay>
          </ContentWrapper>
          <ButtonBar {...this.props} />
        </Modal>
    );
  }
}

export const StyledMessageDialog = styled(MessageDialog)`
  button {
    font-size: ${fontSizes.xSmall}
  }
`;

MessageDialog.defaultProps = {
  actionLoading: false,
  bodyElement: <div />,
  dialogTitle: '',
  isActionDisabled: false,
};

export default MessageDialog;
