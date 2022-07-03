import './App.css';

import { useState } from 'react';
import { CopyToClipboard } from 'react-copy-to-clipboard';

function App() {
  const textToCopy = 'https://github.com/nkbt/react-copy-to-clipboard';
  const [isCopied, setIsCopied] = useState(false);

  const showIsCopiedMessage = () => {
    setIsCopied(true);

    setTimeout(() => {
      setIsCopied(false);
    }, 1000);
  };

  return (
    <div className="App">
      <h1>Budget Hub</h1>
      <p className='App-link'>Link to 'React Copy to Clipboard' GitHub page</p>
      <p>{textToCopy}</p>
      <CopyToClipboard className='App-button' text={textToCopy}>
        <button onClick={() => showIsCopiedMessage()}>Copy</button>
      </CopyToClipboard>
      {isCopied && <div className='App-popup'>Copied!</div>}
    </div>
  );
}

export default App;
