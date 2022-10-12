import "./MessageSender.css";

type Props = {
  text: string;
  onChange: (text: string) => void;
  onSend: () => void;
};

const MessageSender = (props: Props) => {
  return (
    <div className="MessageSender">
      <input type="text" value={props.text} placeholder="Type message here..." onChange={(e) => props.onChange(e.target.value)} />
      <button onClick={() => props.onSend()}>Send</button>
    </div>
  );
};

export default MessageSender;
