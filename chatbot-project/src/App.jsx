import { useState, useRef, useEffect } from 'react'
import { Chatbot } from 'supersimpledev'
import './App.css'

function ChatInput({ chatMessages, setChatMessages }) {
  // ChatInput is a component

  const [inputText, setInputText] = useState("");

  function saveInputText(event) {
    setInputText(event.target.value);
  }

  function sendMessage() {
    const newChatMessages = [
      ...chatMessages, // Spread Operator(...) = takes the values in an array, and copies them into a new array.
      {
        message: inputText,
        sender: "user",
        id: crypto.randomUUID(),
      },
    ];

    setChatMessages(newChatMessages);

    const response = Chatbot.getResponse(inputText);
    setChatMessages([
      ...newChatMessages, // Spread Operator(...) = takes the values in an array, and copies them into a new array.
      {
        message: response,
        sender: "robot",
        id: crypto.randomUUID(),
      },
    ]);

    setInputText("");
  }

  return (
    <div className="chat-input-container">
      <input
        placeholder="Send a message to ChatBot"
        size="30"
        onChange={saveInputText}
        value={inputText} // Controlled Input: used to make the input box empty after sending the message
        className="chat-input"
      />
      <button onClick={sendMessage} className="send-button">
        Send
      </button>
    </div>
  );
}

function ChatMessage(props) {
  // const message = props.message;
  const { message } = props; // Shortcut for above
  const { sender } = props;
  // const {message, sender} = props; // This is also allowed

  /*
        if (sender === 'robot') {
            return(
            <div>
              <img src="images/robot.png" width="50"/>
              {message}
            </div>
          );
        }
        */ // The below is the shortcut of this code

  return (
    <div
      className={sender === "user" ? "chat-message-user" : "chat-message-robot"}
    >
      {sender === "robot" && (
        <img src="images/robot.png" className="chat-message-profile" />
      )}
      <div className="chat-message-text">{message}</div>
      {sender === "user" && (
        <img src="images/user.png" className="chat-message-profile" />
      )}
    </div>
  );
}

function ChatMessages({ chatMessages }) {
  const chatMessagesRef = useRef(null);

  useEffect(() => {
    const containerElem = chatMessagesRef.current;
    if (containerElem) {
      containerElem.scrollTop = containerElem.scrollHeight;
    }
  }, [chatMessages]);

  return (
    <div className="chat-messages-container" ref={chatMessagesRef}>
      {chatMessages.map((chatMessage) => {
        return (
          <ChatMessage
            message={chatMessage.message}
            sender={chatMessage.sender}
            key={chatMessage.id}
          />
        );
      })}
    </div>
  );
}

function App() {
  const [chatMessages, setChatMessages] = useState([
    {
      message: "Hello Chatbot",
      sender: "user",
      id: "id1",
    },
    {
      message: '"Hello! How can I help you?',
      sender: "robot",
      id: "id2",
    },
    {
      message: "can you get me todays date?",
      sender: "user",
      id: "id3",
    },
    {
      message: "Today is June 21",
      sender: "robot",
      id: "id4",
    },
  ]);
  // if we use the 'const array' instead of 'const {chatMessages, setChatMessages}'. we can use the below code. In the code we also use shortcut(Array Destructuring)
  // const [chatMessages, setChatMessages] = array; // This is the shortcut of below two lines and called Array destructing. Note: order matters
  // const chatMessages = array[0]; // The first value(array[0]) give the current data of ChatMessage.
  // const setChatMessages = array[1]; // The second value(array[1]) is the function that updates the data

  return (
    <div className="app-container">
      <ChatMessages
        chatMessages={chatMessages} // This is the naming convention
      />
      <ChatInput
        chatMessages={chatMessages}
        setChatMessages={setChatMessages}
      />
    </div>
  );
}

export default App

/*
  Best Practice:
    Load external libraries from node_modules instead of using a <script> tag
  
  - import { useState } from 'react'. here we import the useState from the react package from the node_modules
  - Here no need to write like React.useState(), just write useState()

  Note: To exit from the terminal, use the command ctrl + c
  - What we download from the npm in terminal, it will save in the node_modules folder

  To run the project:( do in the terminal with the pwd chatbot-project)
    npm run dev
    - This give the link for the website
*/
