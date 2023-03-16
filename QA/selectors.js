import {Selector} from 'testcafe'

export default{
      userName  : Selector('#user'),
      continueButton  : Selector('#login'),
      password  : Selector('#password'),
      loginButton  : Selector('#login-submit'),
    
    //Board related
      addButton  : Selector('[data-testid :"header-create-menu-button"]') ,
      addBoardButton  : Selector('button').withAttribute('data-testid','header-create-board-button') ,
      boardTitle  : Selector('input').withAttribute('data-testid','create-board-title-input'),
      createButton  : Selector('button').withAttribute('data-testid','create-board-submit-button'),
    
    //List selectors
      listName  : Selector('.list-name-input'),
      addListButton  : Selector('.mod-list-add-button'),

    //Card selectors
    //  addCardButton  : Selector('.list .list-header-name-assist').withAttribute('area-label','List_A').parent(2).find('.open-card-composer'),//For list A
      addCardButton  : Selector('#board > div:nth-child(1) > div > div.card-composer-container.js-card-composer-container'),
      listTextArea  : Selector('.list-card-composer-textarea'),
      addCardConfirmButton  : Selector('.confirm'),
      closeButton  : Selector('.list-header').withText('List_A').find('.icon-close'),//For list A
    
    //Drag item
      cardA  : Selector('.list-card-title').withText('Test_Card_A'),//For list A
    //  cardA  : Selector('//*[@id :"board"]/div[1]/div/div[2]/a/div[3]'),
      listB : Selector('.list-header').withText('List_B')//list B
}