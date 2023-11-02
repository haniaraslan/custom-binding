import { Component } from '@angular/core';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.css']
})
export class CoursesComponent {
courses = [
  {
  id: 101, name:'JavaScript for beginners', author: 'Jogn Heikela', duration: 48, type: 'Free', price: 0.00, ratings: 3.5, image:'assets/courses/javascript.png',
  description: 'course description'
},
{
  id: 101, name:'Angular for beginners', author: 'Jogn Heikela', duration: 48, type: 'Premium', price: 100.00, ratings: 3.5, image:'assets/courses/angular.png',
  description: 'course description'
},  
{
  id: 102, name:'React for beginners', author: 'Jogn Heikela', duration: 48, type: 'Premium', price: 200.00, ratings: 3, image:'assets/courses/react.png',
  description: 'course description'
},  
{
  id: 103, name:'Advanced Angular', author: 'Jogn Heikela', duration: 48, type: 'Free', price: 0.00, ratings: 4.5, image:'assets/courses/advanced angular.jpg',
  description: 'course description'
},  
{
  id: 104, name:'Advanced javaScript', author: 'Jogn Heikela', duration: 48, type: 'Free', price: 0.00, ratings: 2.5, image:'assets/courses/advanced js.jpg',
  description: 'course description'
},  
{
  id: 105, name:'Advanced React', author: 'Jogn Heikela', duration: 48, type: 'Premium', price: 100.00, ratings: 5.0, image:'assets/courses/advanced react.jpg',
  description: 'course description'
},  
{
  id: 106, name:'Angular with .Net Core', author: 'Jogn Heikela', duration: 48, type: 'Free', price: 0.00, ratings: 5, image:'assets/courses/angular with net.png',
  description: 'course description'
},
{
  id: 107, name:'Java with Spring Boot', author: 'Jogn Heikela', duration: 48, type: 'Free', price: 0.00, ratings: 5, image:'assets/courses/javasprintboot.png',
  description: 'course description'
},
]

GetTotalCourses(){
  return this.courses.length;
}
GetTotalFreeCourses(){
  return this.courses.filter(course => course.type == 'Free').length;
}
GetTotalPremiumCourses(){
  return this.courses.filter(course => course.type == 'Premium').length;
}
}
