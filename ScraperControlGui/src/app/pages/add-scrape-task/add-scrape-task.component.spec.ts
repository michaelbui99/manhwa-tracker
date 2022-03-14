import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddScrapeTaskComponent } from './add-scrape-task.component';

describe('AddScrapeTaskComponent', () => {
  let component: AddScrapeTaskComponent;
  let fixture: ComponentFixture<AddScrapeTaskComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddScrapeTaskComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddScrapeTaskComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
