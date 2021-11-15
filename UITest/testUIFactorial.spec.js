// Generated by Selenium IDE
const { Builder, By, Key, until } = require('selenium-webdriver')
const assert = require('assert')

describe('TestUIFactorial', function() {
  this.timeout(30000)
  let driver
  let vars
  beforeEach(async function() {
    driver = await new Builder().forBrowser('chrome').build()
    vars = {}
  })
  afterEach(async function() {
    await driver.quit();
  })
  it('TestUIFactorial', async function() {
    await driver.get("http://localhost:3000/")
    await driver.manage().window().setRect({ width: 1053, height: 807 })
    await driver.findElement(By.linkText("Factorial")).click()
    await driver.findElement(By.id("Number1")).click()
    await driver.findElement(By.id("Number1")).sendKeys("5")
    await driver.findElement(By.id("button")).click()
    assert.equal(await driver.findElement(By.id("result")).getAttribute('value'),"120")
    await driver.findElement(By.id("Number1")).clear()
    await driver.findElement(By.id("Number1")).click()
    await driver.findElement(By.id("Number1")).sendKeys("-4")
    await driver.findElement(By.id("button")).click()
    assert.equal(await driver.findElement(By.id("result")).getAttribute('value'),"No se admiten numeros negativos")
    await driver.findElement(By.id("Number1")).clear()
    await driver.findElement(By.id("Number1")).click()
    await driver.findElement(By.id("Number1")).sendKeys("1001")
    await driver.findElement(By.id("button")).click()
    assert.equal(await driver.findElement(By.id("result")).getAttribute('value'),"El numero es demasiado grande como para mostrarlo en pantalla")
    await driver.close()
  })
})
