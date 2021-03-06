// Generated by Selenium IDE
const { Builder, By, Key, until } = require('selenium-webdriver')
const assert = require('assert')

describe('TestUIRectangulo', function() {
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
  it('TestUIRectangulo', async function() {
    await driver.get("http://localhost:3000/")
    await driver.manage().window().setRect({ width: 1053, height: 807 })
    await driver.findElement(By.linkText("Rectangulo")).click()
    await driver.findElement(By.id("Largo")).click()
    await driver.findElement(By.id("Largo")).sendKeys("3")
    await driver.findElement(By.id("Ancho")).click()
    await driver.findElement(By.id("Ancho")).sendKeys("4")
    await driver.findElement(By.id("button")).click()
    assert.equal(await driver.findElement(By.id("area")).getAttribute('value'),"Area: 12")
    assert.equal(await driver.findElement(By.id("Perimetro")).getAttribute('value'),"Perimetro: 14")
    await driver.findElement(By.id("Largo")).clear()
    await driver.findElement(By.id("Largo")).click()
    await driver.findElement(By.id("Largo")).sendKeys("0")
    await driver.findElement(By.id("button")).click()
    assert.equal(await driver.findElement(By.id("area")).getAttribute('value'),"El rectangulo no existe")
    assert.equal(await driver.findElement(By.id("Perimetro")).getAttribute('value'),"El rectangulo no existe")
    await driver.findElement(By.id("Largo")).clear()
    await driver.findElement(By.id("Largo")).click()
    await driver.findElement(By.id("Largo")).sendKeys("1e301")
    await driver.findElement(By.id("button")).click()
    assert.equal(await driver.findElement(By.id("area")).getAttribute('value'),"Los numeros son demasiado grande para calcular")
    assert.equal(await driver.findElement(By.id("Perimetro")).getAttribute('value'),"Los numeros son demasiado grande para calcular")
    await driver.findElement(By.id("Largo")).clear()
    await driver.findElement(By.id("Largo")).click()
    await driver.findElement(By.id("Largo")).sendKeys("-3")
    await driver.findElement(By.id("button")).click()
    assert.equal(await driver.findElement(By.id("area")).getAttribute('value'),"No hay area porque hay valores negativos")
    assert.equal(await driver.findElement(By.id("Perimetro")).getAttribute('value'),"No hay perimetro porque hay valores negativos")
    await driver.close()
  })
})
