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
  await driver.findElement(By.xpath(`//div[@id="choices"]`));
  await driver.sleep(10000);
});

test("Check that clicking an “Add to Duo” button displays the div with id = “player-duo”", async () => {
  await (
    await driver.findElements(By.xpath(`//button[@class="bot-btn"]`))
  ).forEach((element) => element.click());
  await driver.findElement(By.xpath(`//div[@id="player-duo"]`));
  await driver.sleep(10000);
});

// test("Check that when a bot is “Removed from Duo”, that it goes back to “choices””", async () => {
//   await driver.findElement(By.xpath(`//button[text()='Remove from Duo']`));
//   await driver.findElement(By.xpath(`//div[@id="choices"]`));
//   await driver.sleep(5000);

// });
