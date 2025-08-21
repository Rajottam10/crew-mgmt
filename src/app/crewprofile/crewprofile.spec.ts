import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Crewprofile } from './crewprofile';

describe('Crewprofile', () => {
  let component: Crewprofile;
  let fixture: ComponentFixture<Crewprofile>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Crewprofile]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Crewprofile);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
