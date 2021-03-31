import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-boards',
  templateUrl: './boards.component.html',
  styleUrls: ['./boards.component.scss']
})
export class BoardsComponent implements OnInit {

  constructor() { }

  public domEle = {
    showAddTextBox: false
  }

  public boardName = '';

  public listIndex: any;

  public newCard = {
    title: '',
    desc: ''
  };

  public boards = [
    {
      title: 'Teams',
      list: [
        {
          title: 'Product',
          desc: '3 pending tasks to be picked by Raj'
        },
        {
          title: 'Sales',
          desc: 'Send for the proposed sales'
        }
      ]
    },
    {
      title: 'Products',
      list: [
        {
          title: 'UAT testing',
          desc: 'Ask someone to create UAT environment'
        }
      ]
    }
  ]
  ngOnInit(): void {
    this.checkLocalData();
  }
  addList() {
    this.domEle.showAddTextBox = !this.domEle.showAddTextBox;
    if (!this.domEle.showAddTextBox) {
      if (this.boardName) {
        this.boards.push({ title: this.boardName, list: [] });
        this.boardName = '';
      }
    }
    this.updateLocalStorage();
  }
  openPopup(index: any) {
    this.listIndex = index;
  }
  addCard() {
    if (this.newCard.desc && this.newCard.title) {
      this.boards[this.listIndex].list.unshift(this.newCard);
      this.newCard = { title: '', desc: '' };
    }
    this.updateLocalStorage();
  }
  deleteList(list: any, index: any) {
    list.splice(index, 1);
    this.updateLocalStorage();
  }
  updateLocalStorage() {
    localStorage.setItem('trellocard', JSON.stringify(this.boards));
  }

  checkLocalData() {
    try {
      let localData = localStorage.getItem('trellocard');
      if (localData) {
        this.boards = JSON.parse(localData);
      }
    } catch (error) {
      console.log(error);
    }
  }
  onItemDrop(event: any, board: any) {
    event.dragData.board.list.splice(event.dragData.index, 1);
    board.list.push(event.dragData.card);
  }

}
