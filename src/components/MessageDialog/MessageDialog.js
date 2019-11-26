import React from 'react';
import styled from 'styled-components';

import Modal from '../Modal'
import ButtonBar from '../ButtonBar';
import {
  colors,
  fontSizes,
  typography,
  renderThemeIfPresentOrDefault,
} from '../styles';

const Title = styled.div`
  width: 100%;

  color: ${renderThemeIfPresentOrDefault({ key: 'white90', defaultValue: colors.black87 })};

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
  color: ${renderThemeIfPresentOrDefault({ key: 'white', defaultValue: colors.black60 })};
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
    const canRenderButtonBar = props.primaryActionText || props.secondaryActionText;

    return (
        <Modal {...props}>
          <ContentWrapper>
            { dialogTitle &&
              <Title className='MessageDialog__Title' title={dialogTitle}>{dialogTitle}</Title>
            }
            <BodyDisplay className='MessageDialog__BodyDisplay' dialogTitle={dialogTitle}>
              {bodyElement}
            </BodyDisplay>
          </ContentWrapper>
          {canRenderButtonBar &&
            <ButtonBar className='MessageDialog__ButtonBar' {...this.props} />
          }
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
