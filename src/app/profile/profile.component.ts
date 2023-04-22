import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  public recivedId:any='';
  constructor(private route:ActivatedRoute) { }

  ngOnInit(): void {
    this.route.params.subscribe(item =>{
     this.recivedId=item.id;
       // bellow line is another process for accept data
    //this.recivedId=this.route.snapshot.paramMap.get('id')
    });
  
  }
}
