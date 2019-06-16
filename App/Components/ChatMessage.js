import React from 'react'
import { View, Text, StyleSheet, Image } from 'react-native'
import PropTypes from 'prop-types'
import GravatarApi from 'gravatar-api'

const ChatMessage = ({ chatMessage, isSentMessage, showAvatar }) => {
  const avatar = () => {
    if (!showAvatar) { return <View style={{width: 62}}/> }

    const avatarUrl = GravatarApi.imageUrl({
                        email: chatMessage.user_email,
                        parameters: { size: "50", "d": "monsterid"},
                      }).replace('http', 'https')
    return <Image key={0} style={styles.roundedProfileImage} source={{uri: avatarUrl}} />
  }

  const bubble = () => {
    return (
      <View key={1} style={[styles.bubble, isSentMessage ? styles.sentBubble : styles.receivedBubble]}>
        <Text style={styles.text}>{chatMessage.message}</Text>
      </View>
    )
  }

  let viewStyle = styles.receivedMessage
  let components = [
    avatar(),
    bubble()
  ]

  if (isSentMessage) {
    viewStyle = styles.sentMessage
    components = components.reverse()
  }

  return (
    <View style={StyleSheet.flatten([styles.viewBox, viewStyle])}>
      {
        components.map(component => component)
      }
    </View>
  )
}

const styles = StyleSheet.create({
  viewBox: {
    flex: 1, flexDirection:'row', justifyContent: 'flex-end',
    height: '100%', minHeight: 60, padding: 20, alignItems: 'flex-end'
  },
  sentMessage: {
    paddingLeft: '25%',
  },
  receivedMessage: {
    paddingRight: '25%',
  },
  roundedProfileImage: {
    width:50, height:50, borderWidth:3, margin: 6,
    borderColor:'black', borderRadius:25
  },
  bubble: {
    flex: 1,
    borderRadius: 14,
    padding: 10,
    width: '100%',
    maxWidth: '80%',
    justifyContent: 'center',
    flexDirection: 'row'
  },
  sentBubble: {
    backgroundColor: 'grey'
  },
  receivedBubble: {
    backgroundColor: '#1084ff'
  },
  text: { flex: 1, flexWrap: 'wrap', alignSelf: 'center'}
})

ChatMessage.propTypes = {
  chatMessage: PropTypes.object.isRequired,
}

export default ChatMessage
