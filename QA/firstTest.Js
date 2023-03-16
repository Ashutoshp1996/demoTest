import { Selector } from 'testcafe';

fixture('Getting Started')
    .page('https://trello.com/login');

test('My first test', async t => {
    const userName = Selector('#user')
    const continueButton = Selector('#login')
    const password = Selector('#password')
    const loginButton = Selector('#login-submit')
    
    //Board related
    const addButton = Selector('[data-testid="header-create-menu-button"]') 
    const addBoardButton = Selector('button').withAttribute('data-testid','header-create-board-button') 
    const boardTitle = Selector('input').withAttribute('data-testid','create-board-title-input')
    const createButton = Selector('button').withAttribute('data-testid','create-board-submit-button')
    
    //List selectors
    const listName = Selector('.list-name-input')
    const addListButton = Selector('.mod-list-add-button')

    //Card selectors
    const addCardButton = Selector('.list-header').withText('List A').parent(2).child('.open-card-composer')//For list A
    const listTextArea = Selector('.list-card-composer-textarea')
    const addCardConfirmButton = Selector('.confirm')
    const closeButton = Selector('.list-header').withText('List A').find('.icon-close')//For list A
    
    //Drag item
    const cardA = Selector('.list-header').withText('List A').parent(2).child('.list-card-title').withText('Test Card A')//For list A
    const listB = Selector('.list-header').withText('List B')//list B
    

    await t
        .typeText(userName, 'ashutosh3120@gmail.com')
        .click(continueButton)
        .typeText(password, 'Ashu12345')
        .click(loginButton)
    //Click on the Add button
    //await t.expect(addButton.visible).notOk({timeout: 200000})
    await t
        .click(addButton)
        .click(addBoardButton)
        .typeText(boardTitle, 'Test Board')
        .click(createButton)

    //Now add lists
    await t
        .typeText(listName, 'List A')
        .click(addListButton)
        .typeText(listName, 'List B')
        .click(addListButton)

    //Now add a card in list
    await t
        .click(addCardButton)
        .expect(listTextArea.exists).ok()
        .typeText(listTextArea, 'Test Card A')
        .click(addCardConfirmButton)
        

    //Now drag and drop
    await t
        .dragToElement(cardA,listB)

        .expect(Selector('#article-header').innerText).eql('Thank you, John Smith!')
}).skipJsErrors();