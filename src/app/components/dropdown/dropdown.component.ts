import {
  Component,
  ChangeDetectionStrategy,
  Input
} from '@angular/core';
import { NG_VALUE_ACCESSOR, ControlValueAccessor } from '@angular/forms';

@Component({
  selector: 'app-dropdown',
  templateUrl: './dropdown.component.html',
  styleUrls: ['./dropdown.component.css'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: DropdownComponent,
      multi: true,
    }
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DropdownComponent implements ControlValueAccessor {

  @Input() options: any[];

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
