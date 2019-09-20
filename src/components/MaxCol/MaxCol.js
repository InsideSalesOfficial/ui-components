import styled from 'styled-components';
import { colors, boxShadows } from '../styles';

export const BreakPoints = {
  LG: 990,
  MED: 640,
  SM: 440
};

export const MaxCol = styled.div`
    margin: 0 auto;
    justify-self: center;
    flex-grow: 1;
    max-width: ${BreakPoints.MED}px;
    width: 100%;
`;

export const MaxColWithBoxShadow = styled(MaxCol)`
    box-shadow: 0 2px 0 2px inset ${colors.darkBlueD};
    min-height: 100%;
    box-shadow: ${boxShadows.lvl7};
`;

export const ScreenSizes = {
  LG_UP: `@media(min-width: ${BreakPoints.LG}px)`,
  LG_DOWN: `@media(max-width: ${BreakPoints.LG - 1}px)`,
  MED_UP: `@media(min-width: ${BreakPoints.MED}px)`,
  MED_DOWN: `@media(max-width: ${BreakPoints.MED - 1}px)`
};

const createHideShow = size => styled.div`
    display: none;
    font-size: inherit;
    ${size} {
        ${({ inline }) => `
            display: ${inline ? 'inline' : 'block'};
        `}
    }
`;
export const ShowOnMed = createHideShow(ScreenSizes.MED_UP);

export const HideOnMed = createHideShow(ScreenSizes.MED_DOWN);


export const HideOnLg = createHideShow(ScreenSizes.LG_DOWN);
