import { Component, OnInit, Input } from '@angular/core';
import { BlogPost } from '../blog-post';
import { TruncatePipe } from '../truncate.pipe';

@Component({
  selector: 'app-blog-post-tile',
  templateUrl: './blog-post-tile.component.html',
  styleUrls: ['./blog-post-tile.component.scss']
})
export class BlogPostTileComponent implements OnInit {
  @Input() post: BlogPost;
  fullSummary: string;
  constructor(private truncatePipe: TruncatePipe) { }
  buttonClicked : true;
  ngOnInit(): void {
    this.fullSummary = this.post.summary;
    this.post.summary = this.truncatePipe.transform(this.post.summary,50);
  }

  toggleFullSummary(){
    this.post.summary = this.fullSummary;
  }
}
