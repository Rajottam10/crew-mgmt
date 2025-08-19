import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CrewTimeTable } from './crew-time-table';

describe('CrewTimeTable', () => {
  let component: CrewTimeTable;
  let fixture: ComponentFixture<CrewTimeTable>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CrewTimeTable]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CrewTimeTable);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
