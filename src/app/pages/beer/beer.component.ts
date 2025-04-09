import { BeerType } from './../../utils/beer.utils';
import { Component, inject, OnDestroy, OnInit, signal } from '@angular/core';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';


@Component({
  selector: 'app-beer',
  imports: [ReactiveFormsModule],
  templateUrl: './beer.component.html',
  styleUrl: './beer.component.css'
})
export class BeerComponent implements OnInit, OnDestroy{

  private route = inject(ActivatedRoute);
  private router = inject(Router);
  private routeSubscription: Subscription | null = null;

  formGroup = new FormGroup({
    name: new FormControl('', [Validators.required]),
    image: new FormControl('', [Validators.required]),
    type: new FormControl(BeerType.BLONDE, [Validators.required]),
    qt: new FormControl(0, [Validators.required, Validators.min(25), Validators.max(50)]),
    figureCaption: new FormControl('', [Validators.required]),
    attackName: new FormControl('', [Validators.required]),
    attackStrenth: new FormControl(0, [Validators.required, Validators.min(1), Validators.max(200)]),
    attackDescription: new FormControl('', [Validators.required])
  });
  beerType = (Object.values(BeerType));




  beerId = -1;
  
    ngOnInit(): void {
      this.routeSubscription = this.route.params.subscribe(params => {
        if (params['id']) {
          this.beerId = parseInt(params['id']);
        }
      });  
    }

    ngOnDestroy(): void {
        this.routeSubscription?.unsubscribe();
    }
    
    submit(event: Event){
      event.preventDefault();
      console.log(this.formGroup.value);
    }

    isFieldValid(name: string){
      const formControl = this.formGroup.get(name);
      return formControl?.invalid && (formControl?.dirty || formControl?.touched);
    }


    onFileChange(event: any) {
      const reader = new FileReader();
      if(event.target.files && event.target.files.length) {
        const [file] = event.target.files;
        reader.readAsDataURL(file);
        reader.onload = () => {
          this.formGroup.patchValue({
            image: reader.result as string,
          })
        }
      }
    }
}
