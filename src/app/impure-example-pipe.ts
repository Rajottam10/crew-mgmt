import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'impureExample',
  standalone:true,
  pure: false
})
export class ImpureExamplePipe implements PipeTransform {

  transform(users: any[], searchTerm: string){
    if(!users || !searchTerm){
      return users;
    }
    searchTerm = searchTerm.toLowerCase();
    return users.filter(user => user.toLowerCase().includes(searchTerm));
  }

}
