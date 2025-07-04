import { Given, When, Then } from '@cucumber/cucumber';
import { expect } from '@playwright/test';
import { PracticeFormPage } from '../../pages/forms/📄 practiceForm.page';

let practiceFormPage: PracticeFormPage;

Given('I navigate to the practice form', async function () {
  practiceFormPage = new PracticeFormPage(this.page);
  await practiceFormPage.navigate();
});

When('I fill in the form with:', async function (dataTable) {
  const data = dataTable.rowsHash(); // Converts table to object
  await practiceFormPage.fillForm({
    firstName: data.firstName,
    lastName: data.lastName,
    gender: data.gender,
    mobile: data.mobile,
  });
});

When('I submit the form', async function () {
  await practiceFormPage.submitForm();
});

Then('I should see a success modal with the submitted information', async function () {
  const isVisible = await practiceFormPage.isModalVisible();
  expect(isVisible).toBeTruthy();

  const modalText = await practiceFormPage.getModalText();
  console.log('Modal Text:', modalText);

  // Optional: validate presence of form data in modal
  expect(modalText).toContain('Thanks for submitting the form');
});

Then('I should see validation errors for the missing fields', async function () {
  const hasErrors = await practiceFormPage.hasValidationErrors();
  expect(hasErrors).toBeTruthy();
});