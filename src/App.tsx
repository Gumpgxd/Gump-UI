import React from 'react';
import Menu from './components/Menu/menu';
import MenuItem from './components/Menu/menuItem';
import SubMenu from './components/Menu/subMenu';
import Icon from './components/Icon/icon';
import Button from './components/Button/button';
import AutoComplete from './components/AutoComplete/autoComplete';
import { Alert } from './components/Alert/Alert';
import { library } from '@fortawesome/fontawesome-svg-core'
import { fas } from '@fortawesome/free-solid-svg-icons'

library.add(fas)
const handleFetch = (query: string) => {
  console.log(query)
  return fetch(`https://api.github.com/search/users?q=${query}`)
      .then(res => res.json())
      .then(({ items }) => {
          console.log(items)
          const formatItems = items.slice(0, 10).map((item:any) => ({ value: item.login, ...item }))
          return formatItems
      })
}

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
      <Button btnType="primary" size="lg">click</Button>
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
          description='甘相东'
        />
        <Alert
          closable={false}
          title="this is Warning!"
          type="warning"
        />
      </React.Fragment>
      <AutoComplete
            fetchSuggestions={handleFetch}
        />
    </div>
  );
}

export default App;
