import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RapiAppsComponent } from './rapi-apps.component';

describe('RapiAppsComponent', () => {
  let component: RapiAppsComponent;
  let fixture: ComponentFixture<RapiAppsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [RapiAppsComponent]
    });
    fixture = TestBed.createComponent(RapiAppsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
