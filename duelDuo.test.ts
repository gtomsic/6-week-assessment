import { Builder, Capabilities, By } from "selenium-webdriver";

require("chromedriver");

const driver = new Builder().withCapabilities(Capabilities.chrome()).build();

beforeEach(async () => {
  driver.get("http://localhost:3000/");
});

afterAll(async () => {
  driver.quit();
});

test("Title shows up when page loads", async () => {
  const title = await driver.findElement(By.id("title"));
  const displayed = await title.isDisplayed();
  expect(displayed).toBe(true);
});

test("Check that clicking the Draw button displays the div with id = “choices”", async () => {
  await driver.findElement(By.xpath(`//button[@id="draw"]`)).click();
  const classElement = await driver.findElement(
    By.xpath(`//div[@id="choices"]`)
  );
  const isClass = await classElement.isDisplayed();
  expect(isClass).toBe(true);
  await driver.sleep(5000);
});

// ///////////////////////////////////////////////////////

test("Check that clicking an “Add to Duo” button displays the div with id = “player-duo”", async () => {
  await driver.findElement(By.xpath(`//button[@id="draw"]`)).click();
  const addToDuo = await driver.findElement(
    By.xpath(`(//button[@class="bot-btn"])[1]`)
  );
  await addToDuo.click();
  const btnDuo = await driver.findElement(By.xpath(`//div[@id="player-duo"]`));
  const playerDuo = await btnDuo.isDisplayed();
  expect(playerDuo).toBe(true);
  await driver.sleep(5000);
});

// test("Check that when a bot is “Removed from Duo”, that it goes back to “choices””", async () => {
//   // Just to make sure I selected all elements with same class name
//   // Use the foreach method to attached click in every element
//   const elements = await (
//     await driver.findElements(
//       By.xpath(`(//button[text()="Removed from Duo"])[1]`)
//     )
//   ).forEach((element) => element.click());
//   console.log(elements);
//   await driver.findElement(By.xpath(`//div[@id="choices"]`));
//   await driver.sleep(3000);
// });
