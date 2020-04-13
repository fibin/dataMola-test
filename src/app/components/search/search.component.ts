import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { NG_VALUE_ACCESSOR, ControlValueAccessor } from '@angular/forms';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: SearchComponent,
      multi: true
    }
  ],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SearchComponent implements ControlValueAccessor {

  onChange: any = () => {}
  onTouch: any = () => {}
  val= ""

  set value(val){
    if( val !== undefined && this.val !== val){
    this.val = val
    this.onChange(val)
    this.onTouch(val)
    }
   
  }

  writeValue(value: any){
    this.value = value
  }

  registerOnChange(fn: any){
    this.onChange = fn
  }

  registerOnTouched(fn: any){
    this.onTouch = fn
  }

}
