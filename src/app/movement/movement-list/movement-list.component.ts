import { Component, OnInit } from '@angular/core';
import { MovementDetail } from '../movement-detail';
import { MovementService } from '../movement.service';

@Component({
  selector: 'app-movement-list',
  templateUrl: './movement-list.component.html',
  styleUrls: ['./movement-list.component.css']
})
export class MovementListComponent implements OnInit {

  movements: Array<MovementDetail> = [];
  selectedMovement!: MovementDetail;
  selected: boolean = false;

  constructor(private movementService: MovementService) { }

  getMovements(){
    this.movementService.getMovements().subscribe(movements=>{
      this.movements = movements;
    })
  }

  selectMovement(movement: MovementDetail){
    this.selectedMovement = movement;
    this.selected = true;
  }

  ngOnInit() {
    this.getMovements();
  }

}
