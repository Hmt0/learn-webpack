import React from 'react'
import ReactDom from 'react-dom'
import { isNull, isZero } from './utils'

isNull({})

const App = () => {
    return (
        <div>
            <h1>webpack学习</h1>
        </div>
    )
}

export default App
ReactDom.render(<App/>, document.getElementById('app'))
