import React from 'react'
import { FlatList } from 'react-native'
import PropTypes from 'prop-types'
import ChatMessage from './ChatMessage'

class ChatLog extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      atBottom: true
    }
    this.chatMessage = this.chatMessage.bind(this)
    this.handleNewMessage = this.handleNewMessage.bind(this)
    this.setAtBottomStatus = this.setAtBottomStatus.bind(this)
  }

  chatMessage ({item, index}) {
    const { chats, currentUser } = this.props
    const user_email = item.user_email

    return <ChatMessage
    chatMessage={item}
    showAvatar={index === chats.length - 1 || chats[index + 1].user_email !== user_email}
    isSentMessage={user_email === currentUser}/>
  }

  handleNewMessage () {
    const { chats, currentUser } = this.props
    if (this.state.atBottom || chats[chats.length - 1].user_email === currentUser) {
      this.listRef.scrollToEnd({animated:true})
      this.setState({
        atBottom: true
      })
    }
  }

  setAtBottomStatus (newStatus) {
    'yellow'
    this.setState({
      atBottom: newStatus
    })
  }

  render () {
    const { chats } = this.props
    return (
      <FlatList
      ref={listRef => this.listRef = listRef}
      style={{flex: 1, flexDirection:'column', width: '100%', marginTop: 30}}
      data={chats}
      keyExtractor={(item, index) => `chat${index}`}
      renderItem={this.chatMessage}
      onContentSizeChange={this.handleNewMessage}
      onScrollBeginDrag={() => this.setAtBottomStatus(false)}
      />
    )
  }
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
