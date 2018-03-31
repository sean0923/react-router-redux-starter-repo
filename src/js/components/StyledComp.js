import React, { Component } from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  font-size: 1.6rem;
  padding: 3rem;
  text-align: center;
`;

export default class StyledComp extends Component {
  render () {
    return (
      <Wrapper>
        <h1>This component is styled with Styled-Component</h1>
      </Wrapper>
    );
  }
}

// const Form = connect(null, mapDispatchToProps)(ConnectedForm);

// ConnectedForm.propTypes = {
//   addArticle: PropTypes.func.isRequired
// };

// const List = connect(mapStateToProps)(ConnectedList);

// ConnectedList.propTypes = {
//   articles: PropTypes.array.isRequired
// };
