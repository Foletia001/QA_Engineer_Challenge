import { test, expect, page } from '@playwright/test';
const testData = require('../userData.json')

test.beforeEach( async({page})=>{
    await page.goto('https://qa-assessment.pages.dev/')
 })
 test('input only numbers in the first name field', async({page})=>{
    await page.locator(testData.first_name_textBox).fill(testData.testFirstName)
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
    await page.fill(testData.first_name_textBox, testData.testFirstName)
    await page.fill(testData.last_name_textBox, testData.lastName)

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

})

test('enter letters only in the password field and confirm password',async({page})=>{

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

})

