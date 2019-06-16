import React from 'react'
import { View, Text, StyleSheet, Image } from 'react-native'
import PropTypes from 'prop-types'
import GravatarApi from 'gravatar-api'

const ChatMessage = ({ chatMessage }) => {
  const avatarUrl = GravatarApi.imageUrl({
                      email: chatMessage.user_email,
                      parameters: { size: "50", "d": "monsterid"},
                    }).replace('http', 'https')

  return (
    <View style={styles.viewBox}>
      <Text style={styles.text}>{chatMessage.message}</Text>
      <Image style={styles.roundedProfileImage}
             source={{uri: avatarUrl}} />
    </View>
  )
}

const styles = StyleSheet.create({
  viewBox: {
    flex: 1, flexDirection:'row', justifyContent: 'center',
    height: '100%', minHeight: 60, width: 'auto', padding: 20
  },
  text: { flex: 1, flexWrap: 'wrap', maxWidth: '80%' },
  roundedProfileImage: {
    width:50, height:50, borderWidth:3,
    borderColor:'black', borderRadius:25
  }
})

ChatMessage.propTypes = {
  chatMessage: PropTypes.object.isRequired,
}

export default ChatMessage
