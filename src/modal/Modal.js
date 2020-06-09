import React from 'react'
import '../index.css'
import LessonOne from '../lesson-one/LessonOne'

export default class Modal extends React.Component {
    
    state = {
        isOpen: false
    }

    
    render() {
        
        return(
            <React.Fragment>
                <div className='Modal'>
                    <div className='Modal_Lessons'>

                        <button className='Btn_Lessons' onClick={() => this.setState({isOpen: true})}>Lesson 1</button>
                        {this.state.isOpen && (
                            <div>
                                <LessonOne className='' />
                                <button className='Btn_Lessons' onClick={() => this.setState({isOpen: false})}>Close</button>
                            </div>
                        )}

                        <button className='Btn_Lessons'>Lesson 2</button>
                        <button className='Btn_Lessons'>Lesson 3</button>
                        
                    </div>
                </div>
            </React.Fragment>
        )
    }
}