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
    this.blogPosts.push(new BlogPost('Blog 1-Angular','Learn one way to build applications with Angular and reuse your code and abilities to build apps for any deployment target. For web, mobile web, native mobile and native desktop.'));
    this.blogPosts.push(new BlogPost('Blog 2-Bootstrap','For the first time ever, Bootstrap has its own open source SVG icon library, designed to work best with our components and documentation.Bootstrap Icons are designed to work best with Bootstrap components, but they’ll work in any project. They’re SVGs, so they scale quickly and easily, can be implemented in several ways, and can be styled with CSS.'));
    this.blogPosts.push(new BlogPost('Blog 3-Node js','As an asynchronous event-driven JavaScript runtime, Node.js is designed to build scalable network applications. In the following "hello world" example, many connections can be handled concurrently. Upon each connection, the callback is fired, but if there is no work to be done, Node.js will sleep.'));
  }

  addBlog(): void {
    let n = this.blogPosts.length+1;
    this.blogPosts.push(new BlogPost('Blog '+n,'Learn Topic'));
  }

}
