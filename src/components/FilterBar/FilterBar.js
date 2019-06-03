import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import _ from 'lodash';

import SelectInput from '../SelectInput';
import Icons from '../icons';
import InteractiveElement from '../InteractiveElement';
import { InputItem } from '../TextInput/TextInput';

import { colors, boxShadows } from '../styles';

const FilterBarWrapper = styled.div`
  background-color: ${colors.darkBlueD};
  display: flex;
  flex-direction: row;
  align-items: center;
  height: 48px;
  box-shadow: ${boxShadows.lvl1};
`;

const SearchBarWrapper = styled(FilterBarWrapper)`
  background-color: ${colors.white};
  padding: 0 21px 0 19px;
`;

const StyledSelectInput = styled(SelectInput)`
  padding-left: 16px;
  flex-basis: 0;
  flex-grow: 7;
`;

const ButtonsWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-evenly;
  flex-basis: 0;
  border-left: 1px ${colors.black20} solid;
  height: 100%;
`;

const StyledInteractiveElement = styled(InteractiveElement)`
  cursor: pointer;
  display: flex;
  width: 48px;
  fill: ${colors.white60};
  justify-content: center;
  &:hover {
    fill: ${colors.white90};
  }
`;

const StyledInputItem = styled(InputItem)`
  padding-left: 19px;
`;

class FilterBar extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      showSearch: false
    };
  }

  showSearch = () => {
    this.setState({
      showSearch: true
    });
  }

  onKeyUp = (e) => {
    if(_.get(e, 'key') === 'Enter') {
      this.props.onSearchComplete();
    }
  }

  hideSearch = () => {
    this.props.onSearchClear();
    this.props.onSearchChange('');
    this.setState({
      showSearch: false
    });
  }

  onSearchChange = (e) => {
    if (e) {
      e.preventDefault();
    }
    this.props.onSearchChange(_.get(e, 'target.value'));
  }

  getButtons = () => {
    const buttons =
    [
      (
        <StyledInteractiveElement className='pb-test__search-button' onClick={this.showSearch}>
          <Icons.SearchMaterialIcon/>
        </StyledInteractiveElement>
      )
    ]

    if(!this.props.hideFilter) {
      buttons.unshift((
        <StyledInteractiveElement className='pb-test__filter-button' onClick={this.props.onClickFilter}>
          <Icons.FilterIcon/>
        </StyledInteractiveElement>
      ))
    }
    return (
      <ButtonsWrapper>
        {buttons}
      </ButtonsWrapper>
    );
  }

  render() {
    if(this.state.showSearch) {
    return (
        <SearchBarWrapper {...this.props}>
          <InteractiveElement
            onClick={this.props.onSearchComplete}
            className="pb-test__filter-bar-complete-search"
          >
            <Icons.SearchMaterialIcon fill={colors.black60}/>
          </InteractiveElement>
          <StyledInputItem
            type={'text'}
            className='pb-test__search-bar'
            onChange={this.onSearchChange}
            placeholder={this.props.searchPlaceholder}
            onKeyUp={this.onKeyUp}
            autoFocus/>
          <StyledInteractiveElement
            onClick={this.hideSearch}
            className="pb-test__hide-search"
          >
            <Icons.CloseIcon fill={colors.black60}/>
          </StyledInteractiveElement>
        </SearchBarWrapper>
      );
    }

    return (
      <FilterBarWrapper {...this.props}>
          <StyledSelectInput
          options={this.props.sortOptions}
          promotedOptions={this.props.promotedSortOptions}
          onChange={this.props.onSortOptionChange}
          headerLabel={this.props.sortLabel}
          value={this.props.selectedSortOption}
          selectOptionsWidth={330}
          theme={{
            background: 'transparent',
            noLeftPadding: true,
            labelColor: colors.white60,
            iconColor: colors.white60,
            inputColor: colors.white80,
            disabledInputColor: colors.white50,
            selectArrowColor: colors.white60,
            hoverSelectArrowColor: colors.white90,
            inputPaddingRight: 23
          }}/>
          {this.getButtons()}
        </FilterBarWrapper>
    );
  }
}

FilterBar.defaultProps = {
  onClickFilter: _.noop,
  hideFilter: false,
  onSortOptionChange: _.noop,
  sortOptions: [],
  promotedSortOptions: [],
  sortLabel: 'Sort By',
  selectedSortOption: {},
  onSearchChange: _.noop,
  searchPlaceholder: 'Search',
  onSearchComplete: _.noop,
  onSearchClear: _.noop,
};

FilterBar.propTypes = {
  onClickFilter: PropTypes.func.isRequired,
  onSortOptionChange: PropTypes.func.isRequired,
  sortOptions: PropTypes.array.isRequired,
  promotedSortOptions: PropTypes.array,
  sortLabel: PropTypes.string.isRequired,
  selectedSortOption: PropTypes.any,
  onSearchChange: PropTypes.func.isRequired,
  searchPlaceholder: PropTypes.string,
  hideFilter: PropTypes.bool,
  onSearchComplete: PropTypes.func,
  onSearchClear: PropTypes.func,
};

export default FilterBar;