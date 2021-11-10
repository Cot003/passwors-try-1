import React, { Component } from 'react'
import Card from './Card'

export class MainContent extends Component {
    render() {
        return (
            <>
                <h1 className="text-center">Subjects</h1>
                <div className="row">
                    <div className="col-md-4">
                        <Card subject="Social Science" imagesrc="https://static.careers360.mobi/media/uploads/froala_editor/images/NCERT-Books-class-8-Social-Science-image.jpg" />
                    </div>
                    <div className="col-md-4">
                        <Card subject= "Science" imagesrc="" />
                    </div>
                    <div className="col-md-4">
                        <Card subject="English" imagesrc="" />
                    </div>
                    <div className="col-md-4">
                        <Card subject="Hindi" imagesrc="" />
                    </div>
                    <div className="col-md-4">
                        <Card subject="Maths" imagesrc="" />
                    </div>
                    <div className="col-md-4">
                        <Card subject="Sanskrit" imagesrc="" />
                    </div>
                </div>
            </>
        )
    }
}

export default MainContent
