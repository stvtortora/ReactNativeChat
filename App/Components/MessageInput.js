import React from 'react'
import { TextInput, Button, View, StyleSheet } from 'react-native'
import { connect } from 'react-redux'

class MessageInput extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      message: '',
      user_email: this.props.user_email
    }
    this.addMessage = this.addMessage.bind(this)
    this.handleChange = this.handleChange.bind(this)
  }

  handleChange (text) {
    this.setState({
      message: text
    })
  }

  addMessage () {
    this.props.addMessage(this.state)
  }

  render () {
    return (
      <View style={styles.viewContainer}>
        <TextInput style={styles.textInput} onChangeText={this.handleChange} placeholder='Enter a message...'></TextInput>
        <Button style={styles.sendButton} onPress={this.addMessage} title='Send'></Button>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  viewContainer: {
    flex: .2, flexDirection: 'row', justifyContent: 'space-around',
    alignItems: 'center', marginLeft: 35, marginRight: 35, marginBottom: 35, height: 50
  },
  textInput: {
    height: 50, width: '80%'
  }
})

const mapDispatchToProps = dispatch => ({
  addMessage: ({ message, user_email }) => (
    dispatch({
      type: 'ADD_MESSAGE',
      message,
      user_email
    })
  )
})

export default connect(null, mapDispatchToProps)(MessageInput)
