import { connect } from "react-redux"
import Editor from "../components/Editor"
import { createText } from "../store/actions/actions"
const mapStateToProps = state => {
    return {
        message: state.message
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onInputChange: inputContent => {
            dispatch(createText(inputContent))
        }
    }
}

const InputEditor = connect(
    mapStateToProps,
    mapDispatchToProps
)(Editor)

export default InputEditor