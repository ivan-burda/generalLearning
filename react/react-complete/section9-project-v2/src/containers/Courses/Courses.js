import React, { Component } from 'react';
import {Route} from 'react-router-dom';

import CourseOffer from '../../components/CourseOffer/CourseOffer';
import Course from '../Course/Course';
import './Courses.css';

class Courses extends Component {
    state = {
        courses: [
            { id: 1, title: 'Angular - The Complete Guide' },
            { id: 2, title: 'Vue - The Complete Guide' },
            { id: 3, title: 'PWA - The Complete Guide' }
        ],
        currentId: null,
        currentTitle: null,
    }

    courseSelectedHandler = (id, title) =>{
        this.props.history.push('/courses/' + id);
        this.setState({currentId: id});
        this.setState({currentTitle: title});
    }

    render () {
        return (
            <div>
                <h1>Amazing Udemy Courses</h1>
                <section className="Courses">
                    {
                        this.state.courses.map( course => {
                            return (
                                <CourseOffer id={course.id} key={course.id} title={course.title} clicked={()=>this.courseSelectedHandler(course.id, course.title)}/>
                            );
                        } )
                    }
                </section>
                <Route path={this.props.match.url + '/:id'} render={()=><Course id={this.state.currentId} title={this.state.currentTitle}/>}/>
            </div>
        );
        
    }
}

export default Courses;