import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { CapitalizePipe } from '../capitalize-pipe';
import { FilesizePipe } from '../filesize-pipe';

@Component({
  selector: 'app-custom-pipe',
  imports: [CustomPipe, CapitalizePipe, CommonModule, FilesizePipe],
  templateUrl: './custom-pipe.html',
  styleUrl: './custom-pipe.scss'
})
export class CustomPipe {
  filesize:number[] = [0,1024,1048,52223];
}
