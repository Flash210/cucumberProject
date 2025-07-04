import { Page, Locator } from '@playwright/test';

export class PracticeFormPage {
  private page: Page;
  private firstNameInput: Locator;
  private lastNameInput: Locator;
  private genderRadio: (gender: string) => Locator;
  private mobileInput: Locator;
  private submitButton: Locator;
  private modal: Locator;
  private validationError: Locator;

  constructor(page: Page) {
    this.page = page;
    this.firstNameInput = page.locator('#firstName');
    this.lastNameInput = page.locator('#lastName');
    this.genderRadio = (gender: string) => page.locator(`input[name="gender"][value="${gender}"] + label`);
    this.mobileInput = page.locator('#userNumber');
    this.submitButton = page.locator('#submit');
    this.modal = page.locator('.modal-content');
    this.validationError = page.locator('.field-error'); // Adjust based on actual validation class
  }

  async navigate() {
    await this.page.goto('https://demoqa.com/automation-practice-form');
  }

  async fillForm(data: { firstName?: string; lastName?: string; gender?: string; mobile?: string }) {
    if (data.firstName) await this.firstNameInput.fill(data.firstName);
    if (data.lastName) await this.lastNameInput.fill(data.lastName);
    if (data.gender) await this.genderRadio(data.gender).click();
    if (data.mobile) await this.mobileInput.fill(data.mobile);
  }

  async submitForm() {
    await this.submitButton.click();
  }

  async isModalVisible() {
    return await this.modal.isVisible();
  }

  async getModalText() {
    return await this.modal.textContent();
  }

  async hasValidationErrors() {
    return await this.validationError.isVisible();
  }
}
