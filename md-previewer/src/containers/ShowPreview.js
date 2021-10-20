import { connect } from "react-redux"
import Preview from "../components/Preview"

const mapStateToProps = state => {
    return {
        message: state.message
    }
}

const ShowPreview = connect(mapStateToProps, null)(Preview)

export default ShowPreview

