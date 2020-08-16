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
    this.blogPosts.push(new BlogPost('blog 2','For the first time ever, Bootstrap has its own open source SVG icon library, designed to work best with our components and documentation.Bootstrap Icons are designed to work best with Bootstrap components, but they’ll work in any project. They’re SVGs, so they scale quickly and easily, can be implemented in several ways, and can be styled with CSS.'));
  }

}
