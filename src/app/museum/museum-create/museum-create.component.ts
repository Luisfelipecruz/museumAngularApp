import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';

import { Museum } from '../museum';
import { MuseumService } from '../museum.service';

@Component({
  selector: 'app-museum-create',
  templateUrl: './museum-create.component.html',
  styleUrls: ['./museum-create.component.css'],
})
export class MuseumCreateComponent implements OnInit {
  museumForm!: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private toastr: ToastrService,
    private museumService: MuseumService
  ) {}

  ngOnInit(): void {
    this.museumForm = this.formBuilder.group({
      name: ['', [Validators.required, Validators.minLength(5)]],
      description: ['', Validators.required],
      address: ['', Validators.required],
      city: ['', [Validators.required, Validators.maxLength(500)]],
      image: ['', [Validators.required, Validators.maxLength(5000)]],
    });
  }

  createMuseum(museum: Museum) {
    this.museumService.createMuseum(museum).subscribe((museum) => {
      console.info("The museum was created: ", museum)
      this.toastr.success('Confirmation', 'Museum created');
      this.museumForm.reset();
    });
  }

  cancelCreation() {
    this.museumForm.reset();
  }
}
