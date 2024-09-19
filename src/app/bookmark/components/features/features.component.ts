import { Component } from '@angular/core';

interface Feature{
  id: number,
  feature: string,
  description_title: string,
  description_paragraph: string,
  img: string,
}

@Component({
  selector: 'bookmark-features',
  templateUrl: './features.component.html',
  styleUrls: ['./features.component.css']
})

export class FeaturesComponent {

  public index_selected:number = 0;

  public features:Feature[] = [
    {
      id:0,
      feature: "Simple Bookmarking",
      description_title: "Bookmark in one click",
      description_paragraph: "Organize your bookmarks however you like. Our simple drag-and-drop interface gives you complete control over how you manage your favourite sites.",
      img: "./assets/images/illustration-features-tab-1.svg"
    },
    {
      id:1,
      feature: "Speedy Searching",
      description_title: "Intelligent search",
      description_paragraph: "Our powerful search feature will help you find saved sites in no time at all. No need to trawl through all of your bookmarks.",
      img: "./assets/images/illustration-features-tab-2.svg"
    },
    {
      id:2,
      feature: "Easy Sharing",
      description_title: "Share your bookmarks",
      description_paragraph: "Easily share your bookmarks and collections with others. Create a shareable link that you can send at the click of a button.",
      img: "./assets/images/illustration-features-tab-3.svg"
    }
  ];

  public selectedFeature(index:number):void{
    this.index_selected = index
  }

  get feature():Feature | undefined{
    const select = this.features.find(f=>f.id == this.index_selected)
    return select
  }
}
