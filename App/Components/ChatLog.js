import React from 'react'
import { FlatList } from 'react-native'
import PropTypes from 'prop-types'
import ChatMessage from './ChatMessage'

const ChatLog = ({ chats }) => {
  const renderChatMessage = ({item, index}) => {
    return <ChatMessage chatMessage={item} />
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
