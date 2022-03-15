import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { GlobalComponent } from '../global-component';
import { iPost, iTopic, iCategory } from '../models/forum';

@Injectable({
  providedIn: 'root'
})
export class ForumService 
{
  url = `${GlobalComponent.apiUrl}forum`;

  constructor(private http: HttpClient) { }

   /*----------------------- NODES -----------------------*/
  
  /** GET **/
  GetNodes() {
    const url = `${this.url}/nodes`
    return this.http.get(url);
  }

  /** ADD NODE **/
  AddNode(name:string, role:number): Observable<unknown> {
    const url = `${this.url}/addnode`
    return this.http.post(url, {role, name});
  }

  /** REMOVE NODE **/
  DeleteNode(nodeid: number): Observable<unknown> {
    const url = `${this.url}/deletenode/${nodeid}`;
    return this.http.delete(url);
  }

  /** REMOVE ALL NODES **/
  DeleteNodes(): Observable<unknown> {
    const url = `${this.url}/deletenodes`;
    return this.http.delete(url);
  }

  /*----------------------- CATEGORY -----------------------*/
   
  /** GET **/
  GetCategories(): Observable<iCategory> {
    const url = `${this.url}/categories`
    return this.http.get<iCategory>(url);
  }

  /** ADD CATEGORY **/
  AddCategory(category:iCategory): Observable<iCategory> {
    const url = `${this.url}/addcategory`
    return this.http.post<iCategory>(url, category);
  }

  /** REMOVE CATEGORY **/
  DeleteCategory(catid: number): Observable<iCategory> {
    const url = `${this.url}/deletecategory/${catid}`;
    return this.http.delete<iCategory>(url);
  }

  /** REMOVE ALL CATEGORIES **/
  DeleteCategories(): Observable<iCategory> {
    const url = `${this.url}/deletecategories`;
    return this.http.delete<iCategory>(url);
  }

  /*----------------------- POST -----------------------*/
   
  /** GET **/
  GetPosts(): Observable<any> {
    const url = `${this.url}/posts`
    return this.http.get(url);
  }

  GetPostsByTopic(topic:number): Observable<any>
  {
    const url = `${this.url}/postsbytopic/${topic}`
    return this.http.get(url);
  }

  GetPostsById(id:number): Observable<any>
  {
    const url = `${this.url}/postbyid/${id}`
    return this.http.get(url);
  }

  /** ADD POST **/
  AddPost(post: iPost): Observable<iPost> {
    const url = `${this.url}/addpost`
    console.log(post);
    return this.http.post<iPost>(url, post);
  }

  /** REMOVE POST **/
  DeletePost(posttid: number): Observable<iPost> {
    const url = `${this.url}/deletepost/${posttid}`;
    return this.http.delete<iPost>(url);
  }

  /** REMOVE ALL POSTS **/
  DeletePosts(): Observable<iPost> {
    const url = `${this.url}/deleteposts`;
    return this.http.delete<iPost>(url);
  }

  /*----------------------- POST -----------------------*/
   
  /** GET **/
  GetTopics(): Observable<any> {
    const url = `${this.url}/topics`
    return this.http.get(url);
  }

  GetTopicsByCategory(category:number) : Observable<any>
  {
    const url = `${this.url}/topicsbycategory/${category}`
    return this.http.get(url);
  }

  GetTopicById(id:number): Observable<any>
  {
    const url = `${this.url}/topicbyid/${id}`
    return this.http.get(url);
  }

  /** ADD TOPIC **/
  AddTopic(topic:iTopic): Observable<iTopic> {
    const url = `${this.url}/addtopic`
    return this.http.post<iTopic>(url, topic);
  }

  /** REMOVE TOPIC **/
  DeleteTopic(topicid: number): Observable<iTopic> {
    const url = `${this.url}/deletetopic/${topicid}`;
    return this.http.delete<iTopic>(url);
  }

  /** REMOVE ALL TOPICS **/
  DeleteTopics(): Observable<iTopic> {
    const url = `${this.url}/deletetopics`;
    return this.http.delete<iTopic>(url);
  }
}
