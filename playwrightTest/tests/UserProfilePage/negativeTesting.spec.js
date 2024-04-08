import { test, expect, page } from '@playwright/test';
const testData = require('../userData.json')

test.beforeEach( async({page})=>{
    await page.goto('https://qa-assessment.pages.dev/')
 })
 test.only('input only numbers in the first name field', async({page})=>{
   
    await page.fill(testData.first_name_textBox, testData.testFirstName)
    await page.fill(testData.last_name_textBox, testData.lastName)
    await page.fill(testData.email_textBox, testData.email)
    await page.fill(testData.password_textBox, testData.password)
    await page.fill(testData.confirm_password_textbox, testData.password)
    await page.locator(testData.checkBox_feild).check()
    await page.fill(testData.birthDate_feild, testData.dateOfBirth)
    await page.fill(testData.phone_num_textbox, testData.phoneNumber)
    await page.fill(testData.address_textbox, testData.address)
    await page.fill(testData.linkedInAddress_textbox,testData.linkedIn)
    await page.fill(testData.githubAdress_textbox, testData.github)


    page.on('dialog', async (dialog) => {
        expect(dialog.message()).toContain('First name must contain alphabetical characters only');
        await dialog.accept();
      });

      await page.locator(testData.submitBtn).click()


})

test('input only numbers in the last name field',async({page})=>{

    await page.locator(testData.first_name_textBox).fill(testData.firstName)
    await page.locator(testData.last_name_textBox).fill(testData.testLastName)
    await page.locator(testData.email_textBox).fill(testData.email)
    await page.locator(testData.password_textBox).fill(testData.password)
    await page.locator(testData.confirm_password_textbox).fill(testData.password)
    await page.locator(testData.checkBox_feild).check()
    await page.locator(testData.birthDate_feild).fill(testData.dateOfBirth)
    await page.locator(testData.phone_num_textbox).fill(testData.phoneNumber)
    await page.locator(testData.address_textbox).fill(testData.address)
    await page.locator(testData.linkedInAddress_textbox).fill(testData.linkedIn)
    await page.locator(testData.githubAdress_textbox).fill(testData.github)

    page.on('dialog', async (dialog) => {
        expect(dialog.message()).toContain('Last name must contain alphabetical characters only');
        await dialog.accept();
      });

      await page.locator(testData.submitBtn).click()


})

test('enter an invalid email in the email field',async({page})=>{

    await page.locator(testData.first_name_textBox).fill(testData.firstName)
    await page.locator(testData.last_name_textBox).fill(testData.lastName)
    await page.locator(testData.email_textBox).fill(testData.testEmail)
    await page.locator(testData.password_textBox).fill(testData.password)
    await page.locator(testData.confirm_password_textbox).fill(testData.password)
    await page.locator(testData.checkBox_feild).check()
    await page.locator(testData.birthDate_feild).fill(testData.dateOfBirth)
    await page.locator(testData.phone_num_textbox).fill(testData.phoneNumber)
    await page.locator(testData.address_textbox).fill(testData.address)
    await page.locator(testData.linkedInAddress_textbox).fill(testData.linkedIn)
    await page.locator(testData.githubAdress_textbox).fill(testData.github)


    await page.locator(testData.submitBtn).click()
    
    await expect(testData.first_name_textBox).toHaveValue(testData.firstName)
    await expect(testData.last_name_textBox).toHaveValue(testData.lastName)
    await expect(testData.email_textBox).toHaveValue(testData.testEmail)
    await expect(testData.password_textBox).toHaveValue(testData.password)
    await expect(testData.confirm_password_textbox).toHaveValue(testData.password)
    await expect(testData.checkBox_feild).is_checked
    await expect(testData.birthDate_feild).toHaveValue(testData.dateOfBirth)
    await expect(testData.phone_num_textbox).toHaveValue(testData.phoneNumber)
    await expect(testData.address_textbox).toHaveValue(testData.address)
    await expect(testData.linkedInAddress_textbox).toHaveValue(testData.linkedIn)
    await expect(testData.githubAdress_textbox).toHaveValue(testData.github)

})

test('enter a word with letters only in the password field and the same word in the confirm password field',async({page})=>{

    await page.locator(testData.first_name_textBox).fill(testData.firstName)
    await page.locator(testData.last_name_textBox).fill(testData.lastName)
    await page.locator(testData.email_textBox).fill(testData.email)
    await page.locator(testData.password_textBox).fill(testData.testPassword)
    await page.locator(testData.confirm_password_textbox).fill(testData.testPassword)
    await page.locator(testData.checkBox_feild).check()
    await page.locator(testData.birthDate_feild).fill(testData.dateOfBirth)
    await page.locator(testData.phone_num_textbox).fill(testData.phoneNumber)
    await page.locator(testData.address_textbox).fill(testData.address)
    await page.locator(testData.linkedInAddress_textbox).fill(testData.linkedIn)
    await page.locator(testData.githubAdress_textbox).fill(testData.github)


    await page.locator(testData.submitBtn).click()

    await expect(testData.first_name_textBox).toContain(testData.firstName)
    await expect(testData.last_name_textBox).toContain(testData.lastName)
    await expect(testData.email_textBox).toContain(testData.email)
    await expect(testData.password_textBox).toContain(testData.password)
    await expect(testData.confirm_password_textbox).toContain(testData.password)
    await expect(testData.checkBox_feild).toContain()
    await expect(testData.birthDate_feild).toContain(testData.dateOfBirth)
    await expect(testData.phone_num_textbox).toContain(testData.phoneNumber)
    await expect(testData.address_textbox).toContain(testData.address)
    await expect(testData.linkedInAddress_textbox).toContain(testData.linkedIn)
    await expect(testData.githubAdress_textbox).toContain(testData.github)
})

test('enter different inputs in the password and confirm password field',async({page})=>{

    await page.locator(testData.first_name_textBox).fill(testData.firstName)
    await page.locator(testData.last_name_textBox).fill(testData.lastName)
    await page.locator(testData.email_textBox).fill(testData.email)
    await page.locator(testData.password_textBox).fill(testData.password)
    await page.locator(testData.confirm_password_textbox).fill(testData.testConfirmPassword)
    await page.locator(testData.checkBox_feild).check()
    await page.locator(testData.birthDate_feild).fill(testData.dateOfBirth)
    await page.locator(testData.phone_num_textbox).fill(testData.phoneNumber)
    await page.locator(testData.address_textbox).fill(testData.address)
    await page.locator(testData.linkedInAddress_textbox).fill(testData.linkedIn)
    await page.locator(testData.githubAdress_textbox).fill(testData.github)

    page.on('dialog', async (dialog) => {
        expect(dialog.message()).toContain('Passwords do not match');
        await dialog.accept();
      });

      await page.locator(testData.submitBtn).click()

})
test('enter letters in the phone number field',async({page})=>{

    await page.locator(testData.first_name_textBox).fill(testData.firstName)
    await page.locator(testData.last_name_textBox).fill(testData.lastName)
    await page.locator(testData.email_textBox).fill(testData.email)
    await page.locator(testData.password_textBox).fill(testData.password)
    await page.locator(testData.confirm_password_textbox).fill(testData.password)
    await page.locator(testData.checkBox_feild).check()
    await page.locator(testData.birthDate_feild).fill(testData.dateOfBirth)
    await page.locator(testData.phone_num_textbox).fill(testData.lettersPhoneNum)
    await page.locator(testData.address_textbox).fill(testData.address)
    await page.locator(testData.linkedInAddress_textbox).fill(testData.linkedIn)
    await page.locator(testData.githubAdress_textbox).fill(testData.github)


    await page.locator(testData.submitBtn).click()

    await expect(testData.first_name_textBox).toContain(testData.firstName)
    await expect(testData.last_name_textBox).toContain(testData.lastName)
    await expect(testData.email_textBox).toContain(testData.email)
    await expect(testData.password_textBox).toContain(testData.password)
    await expect(testData.confirm_password_textbox).toContain(testData.password)
    await expect(testData.checkBox_feild).toContain()
    await expect(testData.birthDate_feild).toContain(testData.dateOfBirth)
    await expect(testData.phone_num_textbox).toContain(testData.testPhoneNum)
    await expect(testData.address_textbox).toContain(testData.address)
    await expect(testData.linkedInAddress_textbox).toContain(testData.linkedIn)
    await expect(testData.githubAdress_textbox).toContain(testData.github)

})
test('enter invalid linkedIn url',async({page})=>{

    await page.locator(testData.first_name_textBox).fill(testData.firstName)
    await page.locator(testData.last_name_textBox).fill(testData.lastName)
    await page.locator(testData.email_textBox).fill(testData.email)
    await page.locator(testData.password_textBox).fill(testData.password)
    await page.locator(testData.confirm_password_textbox).fill(testData.password)
    await page.locator(testData.checkBox_feild).check()
    await page.locator(testData.birthDate_feild).fill(testData.dateOfBirth)
    await page.locator(testData.phone_num_textbox).fill(testData.phoneNumber)
    await page.locator(testData.address_textbox).fill(testData.address)
    await page.locator(testData.linkedInAddress_textbox).fill(testData.testLinkedIn)
    await page.locator(testData.githubAdress_textbox).fill(testData.github)


    await page.locator(testData.submitBtn).click()

    await expect(testData.first_name_textBox).toContain(testData.firstName)
    await expect(testData.last_name_textBox).toContain(testData.lastName)
    await expect(testData.email_textBox).toContain(testData.email)
    await expect(testData.password_textBox).toContain(testData.password)
    await expect(testData.confirm_password_textbox).toContain(testData.password)
    await expect(testData.checkBox_feild).toContain()
    await expect(testData.birthDate_feild).toContain(testData.dateOfBirth)
    await expect(testData.phone_num_textbox).toContain(testData.phoneNumber)
    await expect(testData.address_textbox).toContain(testData.address)
    await expect(testData.linkedInAddress_textbox).toContain(testData.testLinkedIn)
    await expect(testData.githubAdress_textbox).toContain(testData.github)


})
test('enter an invalid github url',async({page})=>{

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
    await page.locator(testData.githubAdress_textbox).fill(testData.testGithub)


    await page.locator(testData.submitBtn).click()

    await expect(testData.first_name_textBox).toContain(testData.firstName)
    await expect(testData.last_name_textBox).toContain(testData.lastName)
    await expect(testData.email_textBox).toContain(testData.email)
    await expect(testData.password_textBox).toContain(testData.password)
    await expect(testData.confirm_password_textbox).toContain(testData.password)
    await expect(testData.checkBox_feild).toContain()
    await expect(testData.birthDate_feild).toContain(testData.dateOfBirth)
    await expect(testData.phone_num_textbox).toContain(testData.phoneNumber)
    await expect(testData.address_textbox).toContain(testData.address)
    await expect(testData.linkedInAddress_textbox).toContain(testData.linkedIn)
    await expect(testData.githubAdress_textbox).toContain(testData.testGithub)

})

