import React from "react"
import marked from "marked"
import { connect } from "react-redux"

const mapStateToProps = state => ({
        message: state.message
})

function Preview({message}) {
    return (
        <div
            dangerouslySetInnerHTML={{
                __html: marked(message)
            }}
            id="preview"
        />
    )
}

const ShowPreview = connect(mapStateToProps, null)(Preview)
export default ShowPreview