import { Pipe, PipeTransform } from '@angular/core';
import { phoneFormat } from '../ulti/phone';

@Pipe({
  standalone: true,
  name: 'FormatForm',
})
export class FormatForm implements PipeTransform {
  transform(value: string): string {
    return phoneFormat(value);
  }
}