import { ComponentFixture, TestBed } from '@angular/core/testing'

import { TopicSelectComponent } from './topic.component'

describe('TopicSelectComponent', () => {
  let component: TopicSelectComponent
  let fixture: ComponentFixture<TopicSelectComponent>

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TopicSelectComponent],
    }).compileComponents()

    fixture = TestBed.createComponent(TopicSelectComponent)
    component = fixture.componentInstance
    fixture.detectChanges()
  })

  it('should create', () => {
    expect(component).toBeTruthy()
  })
})
