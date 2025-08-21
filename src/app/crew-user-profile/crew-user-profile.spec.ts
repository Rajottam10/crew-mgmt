import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CrewUserProfile } from './crew-user-profile';

describe('CrewUserProfile', () => {
  let component: CrewUserProfile;
  let fixture: ComponentFixture<CrewUserProfile>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CrewUserProfile]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CrewUserProfile);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
