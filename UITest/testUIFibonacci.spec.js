// Generated by Selenium IDE
const { Builder, By, Key, until } = require('selenium-webdriver')
const assert = require('assert')

describe('TestUIFibonacci', function() {
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
  it('TestUIFibonacci', async function() {
    await driver.get("http://localhost:3000/")
    await driver.manage().window().setRect({ width: 1053, height: 807 })
    await driver.findElement(By.linkText("Fibonacci")).click()
    await driver.findElement(By.id("Number2")).click()
    await driver.findElement(By.id("Number2")).sendKeys("4")
    await driver.findElement(By.id("button")).click()
    assert.equal(await driver.findElement(By.id("result")).getAttribute('value'),"0-1-1-2")
    await driver.findElement(By.id("Number2")).clear()
    await driver.findElement(By.id("Number2")).click()
    await driver.findElement(By.id("Number2")).sendKeys("-3")
    await driver.findElement(By.id("button")).click()
    assert.equal(await driver.findElement(By.id("result")).getAttribute('value'),"No se admiten numeros negativos")
    await driver.findElement(By.id("Number2")).clear()
    await driver.findElement(By.id("Number2")).click()
    await driver.findElement(By.id("Number2")).sendKeys("0")
    await driver.findElement(By.id("button")).click()
    assert.equal(await driver.findElement(By.id("result")).getAttribute('value'),"No se genero la serie")
    await driver.findElement(By.id("Number2")).clear()
    await driver.findElement(By.id("Number2")).click()
    await driver.findElement(By.id("Number2")).sendKeys("1000000")
    await driver.findElement(By.id("button")).click()
    assert.equal(await driver.findElement(By.id("result")).getAttribute('value'),"La serie es demasiado grande como para mostrarla en pantalla")
    await driver.close()
  })
})
