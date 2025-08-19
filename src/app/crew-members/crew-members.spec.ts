import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CrewMembers } from './crew-members';

describe('CrewMembers', () => {
  let component: CrewMembers;
  let fixture: ComponentFixture<CrewMembers>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CrewMembers]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CrewMembers);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
