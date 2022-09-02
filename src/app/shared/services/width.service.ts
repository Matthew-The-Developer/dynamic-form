import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class WidthService {
  width: number = 20;
  min: number = 20;
  max: number = 90;
  step: number = 1;

  constructor() { }
}
