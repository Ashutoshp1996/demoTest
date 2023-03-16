import { Selector } from 'testcafe';
import selectors from './selectors'

//Add username and password
const user = 'username'
const password = 'password'

fixture('Getting Started')
    .page('https://trello.com/login');


test('My first test', async t => {
    //Login to the application
    await t
        .typeText(selectors.userName, user)
        .click(selectors.continueButton)
        .typeText(password, password)
        .click(loginButton)
    //Click on the Add button
    await t.expect(addButton.visible).ok({timeout: 200000})
    await t
        .click(addButton)
        .click(addBoardButton)
        .typeText(boardTitle, 'Test Board')
        .click(createButton)

    //Now add lists
    await t
        .typeText(listName, 'List_A')
        .click(addListButton)
        .typeText(listName, 'List_B')
        .click(addListButton)

    //Now add a card in list
    await t
        .click(addCardButton)
        .expect(listTextArea.exists).ok()
        .typeText(listTextArea, 'Test_Card_A')
        .click(addCardConfirmButton) 
        .expect(cardA.exists).ok()

    //Now drag and drop
    await t
        .dragToElement(cardA,listB)
}).skipJsErrors();