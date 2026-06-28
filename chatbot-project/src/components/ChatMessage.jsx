import RobotProfileImage from "../assets/robot.png";
import UserProfileImage from "../assets/user.png";
import './ChatMessage.css'

export function ChatMessage(props) {
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
        <img src={RobotProfileImage} className="chat-message-profile" />
      )}
      <div className="chat-message-text">{message}</div>
      {sender === "user" && (
        <img src={UserProfileImage} className="chat-message-profile" />
      )}
    </div>
  );
}
