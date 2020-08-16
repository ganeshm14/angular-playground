import { Component, OnInit } from '@angular/core';
import {BlogPost} from '../blog-post';

@Component({
  selector: 'app-blog-list',
  templateUrl: './blog-list.component.html',
  styleUrls: ['./blog-list.component.scss']
})
export class BlogListComponent implements OnInit {
 
   blogPosts : BlogPost[] = [];

  constructor() { }

  ngOnInit(): void {
    this.blogPosts.push(new BlogPost('blog 1','blog summary 1'));
    this.blogPosts.push(new BlogPost('blog 2','blog summary 2'));
  }

}
