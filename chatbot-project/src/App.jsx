import { useState } from 'react'
import { ChatInput } from './components/ChatInput'
import './App.css'
import ChatMessages from './components/ChatMessages'

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
  
  Default export:
    import RobotProfileImage from './assets/robot.png'
    - here vite gives the file path to the image name(RobotProfileImage)
  
  Advantage of this setup:
    - we can separate our code into different files

  Best practice:
    - separate each component into its own file

  Note:
    './components/ChatInput' here Vite add .js or .jsx automatically. So no need to mention

  Order of the import Files(recommended order):
    - first add packages
    - second java script files
    - then other types of files

  Default Export:
    import ChatMessages from './components/ChatMessages'
      - This is the way to import default export
  
  Named Export: (use parathesis)
    import { useState } from 'react'

  Note:
    - We usually save the App.jsx file outside of the component folder.
    - Because app represent the entire application. It is the outermost component
    - here we separated each component into its own file. This makes our code to easier to work with. because each file focuses on one component


    
*/
