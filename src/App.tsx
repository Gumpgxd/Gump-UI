import React, { FC } from 'react';
import { Button } from 'gump-ui'

const App: FC = () => {
  return (
    <div className="App">
      <header className="App-header">
        <Button btnType='primary' size='lg'>gump</Button>
      </header>
    </div>
  );
}

export default App;