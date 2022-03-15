import React from 'react';
import Menu from './components/Menu/menu';
import MenuItem from './components/Menu/menuItem';
import SubMenu from './components/Menu/subMenu';
import Icon from './components/Icon/icon';
import Button, { ButtonSize, ButtonType } from './components/Button/button';
import { Alert } from './components/Alert/Alert';
import { library } from '@fortawesome/fontawesome-svg-core'
import { fas } from '@fortawesome/free-solid-svg-icons'

library.add(fas)

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Icon icon='coffee' theme="primary" size='10x' />
        <Menu defaultIndex='0' onSelect={(index) => { alert(index) }} defaultOpenSubMenus={['2']}>
          <MenuItem>cool link1</MenuItem>
          <MenuItem disabled>cool link2</MenuItem>
          <SubMenu title='dropdown'>
            <MenuItem>dropdown1</MenuItem>
            <MenuItem>dropdown2</MenuItem>
          </SubMenu>
          <MenuItem>cool link3</MenuItem>
        </Menu>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
      <Button btnType={ButtonType.Primary} size={ButtonSize.Small}>click</Button>
      <React.Fragment key=".1">
        <Alert
          closable
          title="this is Success"
          type="success"
        />
        <Alert
          closable
          title="this is Danger!"
          type="danger"
        />
        <Alert
          closable={false}
          title="this is Warning!"
          type="warning"
        />
      </React.Fragment>
    </div>
  );
}

export default App;
