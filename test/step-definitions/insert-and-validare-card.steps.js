// import { defineFeature, loadFeature } from 'jest-cucumber';
const jestCucumber = require('jest-cucumber');
const defineFeature = jestCucumber.defineFeature;
const loadFeature = jestCucumber.loadFeature;

const feature = loadFeature('test/features/insert-and-validate-card.feature');

defineFeature(feature, (test) => {

    

  });