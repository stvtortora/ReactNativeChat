import React from 'react'
import { Button, View, StyleSheet, TextInput } from 'react-native'
import { connect } from 'react-redux'

class MessageInput extends React.Component {
  constructor(props) {
    super(props)
    this.defaultState = {
      message: '',
      user_email: this.props.user_email,
      height: 60
    }
    this.state = this.defaultState
    this.addMessage = this.addMessage.bind(this)
    this.updateInputSize = this.updateInputSize.bind(this)
    this.handleChange = this.handleChange.bind(this)
  }

  addMessage () {
    this.props.addMessage(this.state)
    this.setState(this.defaultState)
  }

  updateInputSize () {
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
        placeholder='Aa'
        value={this.state.message}
        editable={true}
        multiline={true}
        onChangeText={this.handleChange('message')}
        onContentSizeChange={this.updateInputSize()}/>
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
