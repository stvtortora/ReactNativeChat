import React from 'react'
import { Button, View, StyleSheet, TextInput } from 'react-native'
import { connect } from 'react-redux'

class MessageInput extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      message: '',
      user_email: this.props.user_email,
      height: 50
    }
    this.addMessage = this.addMessage.bind(this)
    this.growInput = this.growInput.bind(this)
    this.handleChange = this.handleChange.bind(this)
  }

  addMessage () {
    this.props.addMessage(this.state)
  }

  growInput () {
    return (e) => {
      this.handleChange('height')(e.nativeEvent.contentSize.height)
    }
  }

  handleChange (field) {
    return (value) => {
      this.setState({
        [field]: value
      })
    }
  }

  render () {
    return (
      <View style={styles.viewContainer}>
        <TextInput
        style={{height: this.state.height, width: '80%'}}
        placeholder='Enter a message...'
        editable={true}
        multiline={true}
        onChangeText={this.handleChange('message')}
        onContentSizeChange={this.growInput}/>
        <Button style={styles.sendButton} onPress={this.addMessage} title='Send'></Button>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  viewContainer: {
    flex: .2, flexDirection: 'row', justifyContent: 'space-around',
    alignItems: 'center', marginLeft: 35, marginRight: 35, marginBottom: 35, height: 50
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
