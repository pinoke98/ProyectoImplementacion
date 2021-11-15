// Generated by Selenium IDE
const { Builder, By, Key, until } = require('selenium-webdriver')
const assert = require('assert')

describe('TestUICirculo', function() {
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
  it('TestUICirculo', async function() {
    await driver.get("http://localhost:3000/")
    await driver.manage().window().setRect({ width: 1053, height: 807 })
    await driver.findElement(By.linkText("Circulo")).click()
    await driver.findElement(By.id("radio")).click()
    await driver.findElement(By.id("radio")).sendKeys("5")
    await driver.findElement(By.id("button")).click()
    assert.equal(await driver.findElement(By.id("area")).getAttribute('value'),"Area: 78.53981633974483")
    assert.equal(await driver.findElement(By.id("Perimetro")).getAttribute('value'),"Perimetro: 31.41592653589793")
    await driver.findElement(By.id("radio")).clear()
    await driver.findElement(By.id("radio")).click()
    await driver.findElement(By.id("radio")).sendKeys("-5")
    await driver.findElement(By.id("button")).click()
    assert.equal(await driver.findElement(By.id("area")).getAttribute('value'),"No hay area porque hay valores negativos")
    assert.equal(await driver.findElement(By.id("Perimetro")).getAttribute('value'),"No hay perimetro porque hay valores negativos")
    await driver.findElement(By.id("radio")).clear()
    await driver.findElement(By.id("radio")).click()
    await driver.findElement(By.id("radio")).sendKeys("0")
    await driver.findElement(By.id("button")).click()
    assert.equal(await driver.findElement(By.id("area")).getAttribute('value'),"El circulo no existe")
    assert.equal(await driver.findElement(By.id("Perimetro")).getAttribute('value'),"El circulo no existe")
    await driver.findElement(By.id("radio")).clear()
    await driver.findElement(By.id("radio")).click()
    await driver.findElement(By.id("radio")).sendKeys("1e305")
    await driver.findElement(By.id("button")).click()
    assert.equal(await driver.findElement(By.id("area")).getAttribute('value'),"El numero es demasiado grande para calcular")
    assert.equal(await driver.findElement(By.id("Perimetro")).getAttribute('value'),"El numero es demasiado grande para calcular")
    await driver.close()
  })
})