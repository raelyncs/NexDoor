import React, { useState, useEffect } from 'react';
import Message from './Message';
import axios from 'axios';
import { io } from 'socket.io-client';
import { useSelector } from 'react-redux';
import { IconButton } from '@material-ui/core';
import SendTwoToneIcon from '@material-ui/icons/SendTwoTone';

const socket = io('http://localhost:3000');

const Chat = () => {
  const selectedTask = useSelector((store) => store.selectedTaskReducer.task);
  const user = useSelector((store) => store.currentUserReducer.userData);
  const taskId = selectedTask.task_id;
  const userId = user.user_id;
  if (taskId === undefined || userId === undefined) {
    return <></>;
  }
  console.log('user: ', user);
  // input -> two user id's
  // get existing chat messages from database
  // display existing chat messages
  //
  // console.log('userId: ', userId);
  const url = 'http://localhost:3500';
  const [currentMessage, setCurrentMessage] = useState('');
  const [currentTask, setCurrentTask] = useState(taskId);
  const [firstName, setFirstName] = useState();
  const [lastName, setLastName] = useState();
  const [messages, setMessages] = useState([]);

  const [currentUser, setCurrentUser] = useState(userId);//set to user id*********

  const handleChange = (e) => {
    setCurrentMessage(e.target.value);
  };

  const formatTime = (time) => {
    let trail = 'AM';
    let hour = Number(time.substring(0, 2));
    const minutes = time.slice(2);
    if (hour >= 12) {
      hour -= 12;
      trail = 'PM';
    }

    return hour + minutes + ' ' + trail;
  };

  const handleSend = () => {
    // send Message to database
    // add message to messages and display render on screen(setstate)
    const d = new Date();
    const dStr = d.toString();
    const currentDayOfMonth = d.getDate();
    const currentMonth = d.getMonth(); // Be careful! January is 0, not 1
    const currentYear = d.getFullYear();
    const timeString = formatTime(dStr.slice(16, 21));
    const dateString = (currentMonth + 1) + "/" + currentDayOfMonth + "/" + currentYear;

    const message = {
      userId,
      firstname: firstName,
      lastname: lastName,
      message_body: currentMessage,
      date: dateString,
      time: timeString,
      profile_picture_url: user.profile_picture_url,
    };

    const body = {
      messageBody: currentMessage,
      data: dateString,
      time: timeString,
    };

    axios.post(`${url}/api/messages/${taskId}/${userId}`, body)
      .catch((err) => {
        throw (err);
      });

    socket.emit('send-message', { task: currentTask, message: message });

    setMessages((prev) => [...prev, message]); // ???

    const resetElements = document.getElementsByClassName('messageInput');
    for (let i = 0; i < resetElements.length; i++) {
      resetElements[i].value = '';
      resetElements[i].src = '';
    }
  };

  useEffect(() => {
    setFirstName(user.firstname);
    setLastName(user.lastname);
    setCurrentUser(userId);
    setCurrentTask(taskId);
    axios.get(`${url}/api/messages/${taskId}`)
      .then((data) => {
        if (!data) {
          return;
        }
        setMessages(data.data);
      });
  }, [taskId, userId]);

  useEffect(() => {
    socket.on(currentTask, (data) => {
      setMessages((prev) => [...prev, data]);
    });
  }, [currentTask]);

  useEffect(() => {
    const elem = document.getElementById('allMessages');
    elem.scrollTop = elem.scrollHeight;
  }, [messages]);

  const chatStyle = {
    position: 'relative',
    width: '746px',
    height: '100vh',
    padding: '5px',
    borderRadius: '20px',
  };

  const messageContaierStyle = {
    margin: '10px',
    height: '89vh',
    overflow: 'auto',
  };

  return (
    <div style={chatStyle}>
      <div style={messageContaierStyle} id="allMessages">
        {messages.map((message, idx) => {
          // console.log('current User: ', currentUser);
          // console.log('info: ', message.firstname, ' ', message.lastname);
          // console.log(messages);
          let isUser;
          console.log(userId, currentUser);
          if (message.userId === currentUser) {//set user to user id *********
            isUser = true;
          } else {
            isUser = false;
          }
          return (<Message key={idx} message={message} isUser={isUser} />);
        })}
      </div>
      <div style={{ position: 'relative', bottom: '0', right: '0', margin: '5px' }}>
        <input
          style={{ width: '45vw', borderRadius: '25px', height: '6vh', borderColor: 'grey' }}
          className="messageInput" placeholder="Write message here..." onChange={handleChange} />
        <IconButton onClick={handleSend} > <SendTwoToneIcon /></IconButton>
        {/* <button onClick={handleSend}>Send</button> */}
      </div>
    </div>
  );
};

export default Chat;

// are messages already in order??
// using user_id rather than name would be preferable
