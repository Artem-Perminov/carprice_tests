import { formStepOne, formStepTwo } from '../../fixtures/selectors';

describe('Main page, get auto rating button', () => {
  beforeEach(() => {
    cy.authenticateUrl('/');
  });

  it('Data entry and transition to the second step', () => {
    cy.intercept('POST', 'https://api.carprice.ru/client/api/v2.0.0/order/car/create').as(
      'getOrder',
    );

    cy.get(formStepOne.brand).click();
    cy.get(formStepOne.brandOptions).click();

    cy.get(formStepOne.year).click();
    cy.get(formStepOne.yearOptions).click();

    cy.get(formStepOne.model).click();
    cy.get(formStepOne.modelOptions).click();

    cy.get(formStepOne.emailInput).type('qwerty123@asd.com');
    cy.get(formStepOne.getPriceButton).click();

    cy.get(formStepTwo.citySelect, { timeout: 6000 }).should('be.visible');

    cy.wait('@getOrder', { timeout: 20000 }).then((xhr) => {
      expect(xhr.response.statusCode).to.eq(200);
      expect(xhr.response.body.error).to.eq(null);
    });
  });
});
