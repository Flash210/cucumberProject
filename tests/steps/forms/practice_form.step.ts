import { Given, When, Then } from '@cucumber/cucumber';
import { expect } from '@playwright/test';
import { PracticeFormPage } from '../../pages/forms/practiceForm.page';
import { CustomWorld } from '../../support/world';

let practiceFormPage: PracticeFormPage;

Given('I navigate to the practice form', async function (this: CustomWorld) {
  practiceFormPage = new PracticeFormPage(this.page);
  await practiceFormPage.navigate();
});

When('I fill in the form with:', async function (this: CustomWorld, dataTable) {
  const data = dataTable.rowsHash(); // Converts table to object
  await practiceFormPage.fillForm({
    firstName: data.firstName,
    lastName: data.lastName,
    gender: data.gender,
    mobile: data.mobile,
  });
});

When('I submit the form', async function (this: CustomWorld) {
  await practiceFormPage.submitForm();
});

Then('I should see a success modal with the submitted information', async function (this: CustomWorld) {
  const isVisible = await practiceFormPage.isModalVisible();
  expect(isVisible).toBeTruthy();

  const modalText = await practiceFormPage.getModalText();
  console.log('Modal Text:', modalText);

  // Optional: validate presence of form data in modal
  expect(modalText).toContain('Thanks for submitting the form');
});

Then('I should see validation errors for the missing fields', async function (this: CustomWorld) {
  const hasErrors = await practiceFormPage.hasValidationErrors();
  expect(hasErrors).toBeTruthy();
});