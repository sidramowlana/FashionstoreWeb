import { Component, OnInit } from '@angular/core';
import { TagService } from 'src/app/services/Tag.service';

@Component({
  selector: 'app-category-table',
  templateUrl: './category-table.component.html',
  styleUrls: ['./category-table.component.css']
})
export class CategoryTableComponent implements OnInit {
  tagList;

  constructor(private tagService: TagService) { }

  ngOnInit() {
    this.tagService.onGetAllTags().subscribe(data => {
      this.tagList = data;
    });

    this.tagService.tagUpdate.subscribe(data => {
      this.tagService.onGetAllTags().subscribe(newTagList => {
        this.tagList = newTagList;
      });
    });
  }
  onDeleteTag(index) {
    this.tagService.onDeleteTagService(index).subscribe(() => {
      this.tagService.onGetAllTags().subscribe(data => {
        this.tagList = data;
        this.tagService.tagUpdate.next(this.tagList);
      });
    });

  }
}
