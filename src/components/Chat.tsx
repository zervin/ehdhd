import { useState } from 'react';

export default function Chat() {
  const [messages, setMessages] = useState([{ role: 'system', content: 'You are a financial assistant.' }]);
  const [input, setInput] = useState('');

  const sendMessage = async () => {
    const updated = [...messages, { role: 'user', content: input }];
    setMessages(updated);
    const res = await fetch('/api/chat', { method: 'POST', body: JSON.stringify({ messages: updated }) });
    const data = await res.json();
    setMessages([...updated, { role: 'assistant', content: data.choices[0].message.content }]);
    setInput('');
  };

  return (
    <div className='space-y-2'>
      <div className='bg-gray-800 p-4 rounded'>
        {messages.map((msg, i) => (
          <div key={i}><strong>{msg.role}:</strong> {msg.content}</div>
        ))}
      </div>
      <input className='bg-gray-700 p-2 w-full' value={input} onChange={e => setInput(e.target.value)} />
      <button className='bg-blue-600 px-4 py-2' onClick={sendMessage}>Send</button>
    </div>
  );
}