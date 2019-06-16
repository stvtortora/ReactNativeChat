import { connect } from 'react-redux'
import ChatLog from '../Components/ChatLog'

const mapStateToProps = (state, ownProps) => {
  return {
    chats: state.chats,
    currentUser: ownProps.user_email
  }
}

const mapDispatchToProps = dispatch => {
  return {
  }
}

const ConnectedChatLog = connect(
  mapStateToProps,
  mapDispatchToProps
)(ChatLog)

export default ConnectedChatLog
