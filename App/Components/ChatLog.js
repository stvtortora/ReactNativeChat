import React from 'react'
import { FlatList } from 'react-native'
import PropTypes from 'prop-types'
import ChatMessage from './ChatMessage'

const ChatLog = ({ chats, currentUser }) => {
  const renderChatMessage = ({item, index}) => {
    const user_email = item.user_email
    console.log(user_email === currentUser)
    return <ChatMessage
    chatMessage={item}
    showAvatar={index === chats.length - 1 || chats[index + 1].user_email !== user_email}
    isSentMessage={user_email === currentUser}/>
  }

  return (
    <FlatList
    style={{flex: 1, flexDirection:'column', width: '100%', marginTop: 30}}
    data={chats}
    keyExtractor={(item, index) => `chat${index}`}
    renderItem={renderChatMessage}
    />
  )
}

ChatLog.propTypes = {
  chats: PropTypes.arrayOf(
    PropTypes.shape({
      message: PropTypes.string.isRequired,
      user_email: PropTypes.string.isRequired,
    }).isRequired
  ).isRequired,
}

export default ChatLog
