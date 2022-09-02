import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { WidthService } from '../shared/services/width.service';

@Component({
  selector: 'app-names',
  templateUrl: './names.component.html',
  styleUrls: ['./names.component.scss']
})
export class NamesComponent implements OnInit {
  group!: FormGroup;

  constructor(
    public widthService: WidthService,
    private fb: FormBuilder
  ) { }

  ngOnInit(): void {
    this.group = this.fb.group({
      lastName: [null, [Validators.required]],
      firstName: [null, [Validators.required]],
      middleInitial: [null],
      nameSource: [null, [Validators.required]],
      prefix: [null],
      suffix: [null],
    })
  }

}
