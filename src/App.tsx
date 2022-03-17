import React, { FC } from 'react';
import Upload,{ UploadFile } from './components/Upload/upload';

const App: FC = () => {
  const defaultFileList: UploadFile[] = [
    { uid: '123', size: 1234, name: 'hello.md', status: 'uploading', percent: 30 },
    { uid: '122', size: 1234, name: 'xyz.md', status: 'success', percent: 30 },
    { uid: '121', size: 1234, name: 'eyiha.md', status: 'error', percent: 30 }
  ]
  return (
    <div className="App">
      <header className="App-header">
      <Upload action="https://jsonplaceholder.typicode.com/posts/" defaultFileList={defaultFileList} onRemove={() => {alert(1)}}/>
      </header>
    </div>
  );
}

export default App;