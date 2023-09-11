import React from 'react';
import YoutubeLogo from './YoutubeLogo.svg';
// styles
import { NavContainer, Logo } from './navStyles';

function Nav({ children }) {
  return (
    <NavContainer>
      <Logo src={YoutubeLogo} alt='' />
      {children}
      <a style={{textAlign:"right"}} href="https://github.com/joelraj1234/YoutubeNavigator">Source Code</a>
    </NavContainer>
  );
}

export default React.memo(Nav);
