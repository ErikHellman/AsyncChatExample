import "./App.css";
import MessageList from "./MessageList";
import MessageSender from "./MessageSender";
import { useState } from "react";
import Message from "./Message";

const API_ENDPOINT =
  process.env.REACT_APP_API_ENDPOINT || "http://localhost:4000";

const uuid = () => window.crypto.randomUUID();

function App() {
  const [text, setText] = useState<string>("");
  const [messages, setMessages] = useState<Message[]>([]);

  return (
    <article>
      <header>
        <h2>Async Chat Demo</h2>
      </header>
      <main>
        <MessageList messages={messages} />
      </main>
      <footer>
        <MessageSender
          text={text}
          onChange={setText}
          onSend={() => {
            setMessages([...messages, { id: uuid(), text: text }]);
            setText("");
          }}
        />
      </footer>
    </article>
  );
}

export default App;
