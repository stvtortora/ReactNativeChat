import React from 'react'
import { View } from 'react-native'
import ConnectedChatLog from '../Containers/ConnectedChatLog'
import MessageInput from './MessageInput'

export default () => {
  const user_email = 'stvtortora@gmail.com'

  return (
    <View style={{flex: 1, flexDirection:'column', width: '100%'}}>
      <ConnectedChatLog user_email={user_email}/>
      <MessageInput user_email={user_email}/>
    </View>
  )
}
