import { test, expect, page } from '@playwright/test';
//import { UserProfileForm } from '../../pages/pageObjects';
const testData = require('../userData.json')


/*test.describe('Positive testing',() => {
        test.beforeAll(async ({ page }) => {
            page.goTo('https://qa-assessment.pages.dev/')
           

        })*/

//ensuring the heading of each box field contains mandatory or optional
test.beforeEach(async ({ page }) => {
    await page.goto('https://qa-assessment.pages.dev/')
})
test('text Verification', async ({ page }) => {
    await page.goto('https://qa-assessment.pages.dev/')
    await expect(page.locator(testData.first_name_heading)).toContainText('mandatory')
    await expect(page.locator(testData.last_name_heading)).toContainText('mandatory')
    await expect(page.locator(testData.email_heading)).toContainText('mandatory')
    await expect(page.locator(testData.password_heading)).toContainText('mandatory')
    await expect(page.locator(testData.confirmPassword_heading)).toContainText('mandatory')
    await expect(page.locator(testData.genderField_heading)).toContainText('optional')
    await expect(page.locator(testData.dateOfBirth_heading)).toContainText('optional')
    await expect(page.locator(testData.phoneNumber_heading)).toContainText('optional')
    await expect(page.locator(testData.address_heading)).toContainText('optional')
    await expect(page.locator(testData.linkedIn_heading)).toContainText('optional')
    await expect(page.locator(testData.github_heading)).toContainText('optional')

})
test('filling all fields correctly', async ({ page }) => {
    await page.locator(testData.first_name_textBox).fill(testData.firstName)
    await page.locator(testData.last_name_textBox).fill(testData.lastName)
    await page.locator(testData.email_textBox).fill(testData.email)
    await page.locator(testData.password_textBox).fill(testData.password)
    await page.locator(testData.confirm_password_textbox).fill(testData.password)
    await page.locator(testData.checkBox_feild).check()
    await page.locator(testData.birthDate_feild).fill(testData.dateOfBirth)
    await page.locator(testData.phone_num_textbox).fill(testData.phoneNumber)
    await page.locator(testData.address_textbox).fill(testData.address)
    await page.locator(testData.linkedInAddress_textbox).fill(testData.linkedIn)
    await page.locator(testData.githubAdress_textbox).fill(testData.github)


    await page.locator(testData.submitBtn).click()

  /*  await expect(testData.first_name_textBox).not.toContainText()
    await expect(testData.last_name_textBox).toHaveLength(0)
    await expect(testData.email_textBox).toHaveLength(0)
    await expect(testData.password_textBox).toHaveLength(0)
    await expect(testData.confirm_password_textbox).toHaveLength(0)
    await assert(testData.checkBox_feild).toHaveLength(0)
    await expect(testData.birthDate_feild).toHaveLength(0)
    await expect(testData.phone_num_textbox).toHaveLength(0)
    await expect(testData.address_textbox).toHaveLength(0)
    await expect(testData.linkedInAddress_textbox).toHaveLength(0)
    await expect(testData.githubAdress_textbox).toHaveLength(0)
*/

    //verifying all fields are cleared
})


test('filling all fields except first name field ', async ({ page }) => {

    await page.locator(testData.last_name_textBox).fill(testData.lastName)
    await page.locator(testData.email_textBox).fill(testData.email)
    await page.locator(testData.password_textBox).fill(testData.password)
    await page.locator(testData.confirm_password_textbox).fill(testData.password)
    await page.locator(testData.checkBox_feild).check()
    await page.locator(testData.birthDate_feild).fill(testData.dateOfBirth)
    await page.locator(testData.phone_num_textbox).fill(testData.phoneNumber)
    await page.locator(testData.address_textbox).fill(testData.address)
    await page.locator(testData.linkedInAddress_textbox).fill(testData.linkedIn)
    await page.locator(testData.githubAdress_textbox).fill(testData.github)


    await page.locator(testData.submitBtn).click()

    page.on('dialog', async dialog => {
        expect(dialog.message()).toContain('First name must be filled out');
        await dialog.dismiss();
      });


})

test.only('filling all fields except last name field', async ({ page }) => {
    await page.locator(testData.first_name_textBox).fill(testData.firstName)
    await page.locator(testData.email_textBox).fill(testData.email)
    await page.locator(testData.password_textBox).fill(testData.password)
    await page.locator(testData.confirm_password_textbox).fill(testData.password)
    await page.locator(testData.checkBox_feild).check()
    await page.locator(testData.birthDate_feild).fill(testData.dateOfBirth)
    await page.locator(testData.phone_num_textbox).fill(testData.phoneNumber)
    await page.locator(testData.address_textbox).fill(testData.address)
    await page.locator(testData.linkedInAddress_textbox).fill(testData.linkedIn)
    await page.locator(testData.githubAdress_textbox).fill(testData.github)


    await page.locator(testData.submitBtn).click()
    
    page.on('dialog', async dialog => {
        expect(dialog.message()).toContain('Last name must be filled out');
        await dialog.dismiss();
      });

})
test('filling all fields except email field', async ({ page }) => {
    await page.locator(testData.first_name_textBox).fill(testData.firstName)
    await page.locator(testData.last_name_textBox).fill(testData.lastName)
    await page.locator(testData.password_textBox).fill(testData.password)
    await page.locator(testData.confirm_password_textbox).fill(testData.password)
    await page.locator(testData.checkBox_feild).check()
    await page.locator(testData.birthDate_feild).fill(testData.dateOfBirth)
    await page.locator(testData.phone_num_textbox).fill(testData.phoneNumber)
    await page.locator(testData.address_textbox).fill(testData.address)
    await page.locator(testData.linkedInAddress_textbox).fill(testData.linkedIn)
    await page.locator(testData.githubAdress_textbox).fill(testData.github)


    await page.locator(testData.submitBtn).click()



})
test('filling all field except password field', async ({ page }) => {
    await page.locator(testData.first_name_textBox).fill(testData.firstName)
    await page.locator(testData.last_name_textBox).fill(testData.lastName)
    await page.locator(testData.email_textBox).fill(testData.email)
    await page.locator(testData.checkBox_feild).check()
    await page.locator(testData.birthDate_feild).fill(testData.dateOfBirth)
    await page.locator(testData.phone_num_textbox).fill(testData.phoneNumber)
    await page.locator(testData.address_textbox).fill(testData.address)
    await page.locator(testData.linkedInAddress_textbox).fill(testData.linkedIn)
    await page.locator(testData.githubAdress_textbox).fill(testData.github)


    await page.locator(testData.submitBtn).click()

})

/* test('number of gender select fields to be displayed should be 4', async ({ page }) => {

     cy.get('fieldset').find('[type="radio"]').its('length').should('eq', 4)
 })
*/
test('fill all fields except gender check field', async ({ page }) => {
    await page.locator(testData.first_name_textBox).fill(testData.firstName)
    await page.locator(testData.last_name_textBox).fill(testData.lastName)
    await page.locator(testData.email_textBox).fill(testData.email)
    await page.locator(testData.password_textBox).fill(testData.password)
    await page.locator(testData.confirm_password_textbox).fill(testData.password)
    await page.locator(testData.birthDate_feild).fill(testData.dateOfBirth)
    await page.locator(testData.phone_num_textbox).fill(testData.phoneNumber)
    await page.locator(testData.address_textbox).fill(testData.address)
    await page.locator(testData.linkedInAddress_textbox).fill(testData.linkedIn)
    await page.locator(testData.githubAdress_textbox).fill(testData.github)


    await page.locator(testData.submitBtn).click()

})

test('fill all fields except birth date field', async ({ page }) => {
    await page.locator(testData.first_name_textBox).fill(testData.firstName)
    await page.locator(testData.last_name_textBox).fill(testData.lastName)
    await page.locator(testData.email_textBox).fill(testData.email)
    await page.locator(testData.password_textBox).fill(testData.password)
    await page.locator(testData.confirm_password_textbox).fill(testData.password)
    await page.locator(testData.checkBox_feild).check()
    await page.locator(testData.phone_num_textbox).fill(testData.phoneNumber)
    await page.locator(testData.address_textbox).fill(testData.address)
    await page.locator(testData.linkedInAddress_textbox).fill(testData.linkedIn)
    await page.locator(testData.githubAdress_textbox).fill(testData.github)


    await page.locator(testData.submitBtn).click()


})


test('fill all fields except phone number field', async ({ page }) => {
    await page.locator(testData.first_name_textBox).fill(testData.firstName)
    await page.locator(testData.last_name_textBox).fill(testData.lastName)
    await page.locator(testData.email_textBox).fill(testData.email)
    await page.locator(testData.password_textBox).fill(testData.password)
    await page.locator(testData.confirm_password_textbox).fill(testData.password)
    await page.locator(testData.checkBox_feild).check()
    await page.locator(testData.birthDate_feild).fill(testData.dateOfBirth)
    await page.locator(testData.address_textbox).fill(testData.address)
    await page.locator(testData.linkedInAddress_textbox).fill(testData.linkedIn)
    await page.locator(testData.githubAdress_textbox).fill(testData.github)


    await page.locator(testData.submitBtn).click()

})
test('fill all fields except address field', async ({ page }) => {

    await page.locator(testData.first_name_textBox).fill(testData.firstName)
    await page.locator(testData.last_name_textBox).fill(testData.lastName)
    await page.locator(testData.email_textBox).fill(testData.email)
    await page.locator(testData.password_textBox).fill(testData.password)
    await page.locator(testData.confirm_password_textbox).fill(testData.password)
    await page.locator(testData.checkBox_feild).check()
    await page.locator(testData.birthDate_feild).fill(testData.dateOfBirth)
    await page.locator(testData.phone_num_textbox).fill(testData.phoneNumber)
    await page.locator(testData.linkedInAddress_textbox).fill(testData.linkedIn)
    await page.locator(testData.githubAdress_textbox).fill(testData.github)


    await page.locator(testData.submitBtn).click()

})
test('fill all field except linkedIn address field', async ({ page }) => {

    await page.locator(testData.first_name_textBox).fill(testData.firstName)
    await page.locator(testData.last_name_textBox).fill(testData.lastName)
    await page.locator(testData.email_textBox).fill(testData.email)
    await page.locator(testData.password_textBox).fill(testData.password)
    await page.locator(testData.confirm_password_textbox).fill(testData.password)
    await page.locator(testData.checkBox_feild).check()
    await page.locator(testData.birthDate_feild).fill(testData.dateOfBirth)
    await page.locator(testData.phone_num_textbox).fill(testData.phoneNumber)
    await page.locator(testData.address_textbox).fill(testData.address)
    await page.locator(testData.githubAdress_textbox).fill(testData.github)


    await page.locator(testData.submitBtn).click()


})
test('fill all fields except github address field', async ({ page }) => {

    await page.locator(testData.first_name_textBox).fill(testData.firstName)
    await page.locator(testData.last_name_textBox).fill(testData.lastName)
    await page.locator(testData.email_textBox).fill(testData.email)
    await page.locator(testData.password_textBox).fill(testData.password)
    await page.locator(testData.confirm_password_textbox).fill(testData.password)
    await page.locator(testData.checkBox_feild).check()
    await page.locator(testData.birthDate_feild).fill(testData.dateOfBirth)
    await page.locator(testData.phone_num_textbox).fill(testData.phoneNumber)
    await page.locator(testData.address_textbox).fill(testData.address)
    await page.locator(testData.linkedInAddress_textbox).fill(testData.linkedIn)


    await page.locator(testData.submitBtn).click()


})






