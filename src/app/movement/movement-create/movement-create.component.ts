//8. Definir el objeto del formulario
// Importar las librerias
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { ToastrService } from 'ngx-toastr';
import { Movement } from "../movement"
import { MovementService } from '../movement.service';

// 9. Declarar y realizar validaciones
// 10. Ir movement.create.component.html -> refresh
@Component({
  selector: 'app-movement-create',
  templateUrl: './movement-create.component.html',
  styleUrls: ['./movement-create.component.css']
})
export class MovementCreateComponent implements OnInit {

  movementForm!: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private toastr: ToastrService,
    private movementService: MovementService
  ) { }

  // 12. 2 Esto viene de servicio
  createMovement(movement: Movement){
    this.movementService.createMovement(movement).subscribe(movement=>{
      console.info("The movement was created: ", movement)
      this.toastr.success("Confirmation", "Movement created")
      this.movementForm.reset();
    })
  }

  cancelCreation(){
    this.movementForm.reset();
  }

  ngOnInit() {
    // 11. agregar validaciones  -> Html
    // Actualización del servicio
    // 12. movement\movement.service.ts
    // 13. movement-create.component.spec.ts
    this.movementForm = this.formBuilder.group({
      name: ["", [Validators.required, Validators.minLength(2)]],
      description: ["", Validators.required],

      countryOfOrigin: ["", Validators.required],
      activeYears: ["", Validators.required],

    })
  }
}
