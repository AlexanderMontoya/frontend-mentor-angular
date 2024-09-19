import { Component } from '@angular/core';

@Component({
  selector: 'bookmark-questions',
  templateUrl: './questions.component.html',
  styleUrls: ['./questions.component.css']
})
export class QuestionsComponent {
  public index_question:number = -1

  public questions = [
    {
      id:0,
      question: "What is Bookmark?",
      answer: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce tincidunt justo eget ultricies fringilla. Phasellus blandit ipsum quis quam ornare mattis."
    },
    {
      id:1,
      question: "How can I request a new browser?",
      answer: "Vivamus luctus eros aliquet convallis ultricies. Mauris augue massa, ultricies non ligula. Suspendisse imperdiet. Vivamus luctus eros aliquet convallis ultricies. Mauris augue massa, ultricies non ligula. Suspendisse imperdie tVivamus luctus eros aliquet convallis ultricies. Mauris augue massa, ultricies non ligula. Suspendisse imperdiet."
    },
    {
      id:2,
      question: "Is there a mobile app?",
      answer: "Sed consectetur quam id neque fermentum accumsan. Praesent luctus vestibulum dolor, ut condimentum urna vulputate eget. Cras in ligula quis est pharetra mattis sit amet pharetra purus. Sed sollicitudin ex et ultricies bibendum."
    },
    {
      id:3,
      question: "What about other Chromium browsers?",
      answer: "Integer condimentum ipsum id imperdiet finibus. Vivamus in placerat mi, at euismod dui. Aliquam vitae neque eget nisl gravida pellentesque non ut velit."
    }
  ]

  public selectedQuestion(index:number):void{
    if(this.index_question == index){
      this.index_question = -1
      return
    }

    const question = this.questions.find(q=>q.id == index)

    if(!question) return

    this.index_question = index
  }
}
