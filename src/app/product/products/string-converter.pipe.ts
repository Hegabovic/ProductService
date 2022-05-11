import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'stringConverter',
  pure:false,
})
export class StringConverterPipe implements PipeTransform {

  transform(value: string): unknown {
    return value.replace(/-/g, ' ' );
  }
}
