// import { defineFeature, loadFeature } from 'jest-cucumber';
const jestCucumber = require('jest-cucumber');
const defineFeature = jestCucumber.defineFeature;
const loadFeature = jestCucumber.loadFeature;

const feature = loadFeature('test/features/insert-and-validate-card.feature');

defineFeature(feature, (test) => {

    const Bankomat = require("../../src/bankomat.js");
    const Card = require("../../src/card.js");
    const Account = require("../../src/account.js");
    const bankomat = new Bankomat();
    const account = new Account();
    const card = new Card(account);
  
    beforeEach(() => {
      // anything that needs resetting
    });

    test('Inserting a new card', ({ given, when, then }) => {
        given('I have a new card', () => {
          expect(card).toHaveProperty('account');
        });

        when('I insert my card', () => {  
          bankomat.insertCard(card);
          expect(bankomat.getMessage()).toBe('Card inserted');
        });

        then('I am asked to create a pin code', () => {
          expect(bankomat.getMessage()).toBe('Create new pin code');
        });
    });

    test('Create a pin code', ({ given, when, then, and }) => {
        given('the card has no pin code', () => {
          expect(card.pin).toBeFalsy();
        });

        when(/^I enter my new pin code "(.*)"$/, (pin) => {
          bankomat.createPin(pin);
        });        

        then(/^a message says "(.*)"$/, (msg) => {
          expect(bankomat.getMessage()).toBe(msg)
        });

        and('the card is ejected', () => {
          expect(bankomat.cardInserted).toBeFalsy();
          expect(bankomat.getMessage()).toBe("Card removed, don't forget it!")
        });
    });
  
    test('Inserting correct card', ({ given, when, then }) => {
        given('I have a valid card', () => {

        });

        when('I insert my card', () => {

        });

        then('I am asked to enter my pin', () => {

        });
    });

    test('Entering a correct pin', ({ given, when, then }) => {
        given('I have previously created a pin', () => {

        });

        when(/^I enter my pin "(.*)"$/, (arg0) => {

        });

        then('I am granted access', () => {

        });
    });

  });