import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BookModalComponent } from './book-modal.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { NgbActiveModal, NgbModal } from '@ng-bootstrap/ng-bootstrap';

describe('BookModalComponent', () => {
  let component: BookModalComponent;
  let fixture: ComponentFixture<BookModalComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BookModalComponent], 
      imports: [
        HttpClientTestingModule,
        ],
        providers: [ NgbModal, NgbActiveModal ],
    });
    fixture = TestBed.createComponent(BookModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
