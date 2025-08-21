import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filesize',
  standalone: true
})
export class FilesizePipe implements PipeTransform {

  transform(value: number, ...args: unknown[]): unknown {
    if(!value) return value;

    const k = 1024;
    const size = ["Bytes", "KB", "MB", "GB", "TB", "PB"];

    const i = Math.floor(Math.log(value)/Math.log(k));

    return parseFloat((value/Math.pow(k,i)).toFixed(2))+ ''+size[i];
  }

}
