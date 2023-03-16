import { Selector } from 'testcafe';
import selectors from './selectors'

//Add username and password
const user = 'test@user'
const password = 'test@password'

fixture('Getting Started')
    .page('https://trello.com/login');


test('My first test', async t => {
    //Login to the application

    await t
        .typeText(selectors.userNameField, user)
        .click(selectors.continueButton)
        .typeText(selectors.passwordField, password)
        .click(selectors.loginButton)
    //Click on the Add button
    await t.expect(selectors.addButton.visible).ok({timeout: 200000})
    await t
        .click(selectors.addButton)
        .click(selectors.addBoardButton)
        .typeText(selectors.boardTitle, 'Test Board')
        .click(selectors.createButton)

    //Now add lists
    await t
        .typeText(selectors.listName, 'List_A')
        .click(selectors.addListButton)
        .typeText(selectors.listName, 'List_B')
        .click(selectors.addListButton)

    //Now add a card in list
    await t
        .click(selectors.addCardButton)
        .expect(selectors.listTextArea.exists).ok()
        .typeText(selectors.listTextArea, 'Test_Card_A')
        .click(selectors.addCardConfirmButton) 
        .expect(selectors.cardA.exists).ok()

    //Now drag and drop
    await t
        .dragToElement(selectors.cardA,selectors.listB)

    //Logout
    await t
        .expect(selectors.profileButton.exists).ok()
        .click(selectors.profileButton)
        
        .expect(selectors.logoutButton.exists).ok()
        .click(selectors.logoutButton)
        
        .expect(selectors.logoutFinalButton.exists).ok()
        .click(selectors.logoutFinalButton)
}).skipJsErrors();