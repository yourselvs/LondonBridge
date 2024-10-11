import React from 'react';
import Header from '../../components/Header';

const Settings: React.FC = () => {
  const [emails, setEmails] = React.useState<string[]>([]);
  const [inputVal, setInputVal] = React.useState('');

  return (<>
    <Header />
    <h1>Emails</h1>
    <p>
      Authorized emails:
      <br />
      <ul>
      {emails.map(email => <li>{email}</li>)}
      </ul>
    </p>
    <br />
    <br />
    <p>
      Add new email:
      <br />
      <input value={inputVal} onChange={(e) => setInputVal(e.target.value)} />
      <button onClick={() => {
        setEmails([...emails,inputVal]);
        setInputVal('');
      }}>
        Add
      </button>
      <br />
      <button onClick={() => {
        setEmails([]);
      }}>
        Reset
      </button>
    </p>
  </>);
};

export default Settings;