import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { TagService } from 'src/app/services/Tag.service';

@Component({
  selector: 'app-add-category',
  templateUrl: './add-category.component.html',
  styleUrls: ['./add-category.component.css']
})
export class AddCategoryComponent implements OnInit {
  categoryForm: FormGroup;
  message: String;
  constructor(private tagService: TagService) { }

  ngOnInit() {
    this.initForm();
  }
  initForm() {
    this.categoryForm = new FormGroup({
      'tag': new FormControl(null, Validators.required)
    });
  }
  onAddCategory() {
    this.tagService.onAddNewTag(this.categoryForm).subscribe(data => {
      console.log(data);
      this.tagService.tagUpdate.next(data);
    });
  }

  onGetAllCategories()
  {

  }

}
