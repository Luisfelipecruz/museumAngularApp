import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MovementDetail } from '../movement-detail';
import { MovementService } from '../movement.service';

@Component({
  selector: 'app-movement-detail',
  templateUrl: './movement-detail.component.html',
  styleUrls: ['./movement-detail.component.css']
})
export class MovementDetailComponent implements OnInit {

  movementId!: string;
  @Input() movementDetail!: MovementDetail;

  constructor(
    private route: ActivatedRoute,
    private movementService: MovementService
  ) {}

  getMovement(){
    this.movementService.getMovement(this.movementId).subscribe(movement=>{
      this.movementDetail = movement;
    })
  }

  ngOnInit() {
    if(this.movementDetail === undefined){
      this.movementId = this.route.snapshot.paramMap.get('id')!
      if (this.movementId) {
        this.getMovement();
      }
    }
  }
}
