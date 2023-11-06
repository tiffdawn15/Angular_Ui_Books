import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BookTableComponent } from './book-table.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('BookTableComponent', () => {
  let component: BookTableComponent;
  let fixture: ComponentFixture<BookTableComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BookTableComponent], 
      imports: [HttpClientTestingModule]
    });
    fixture = TestBed.createComponent(BookTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
