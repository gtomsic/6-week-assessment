import { Builder, Capabilities, By } from "selenium-webdriver";

require("chromedriver");

const driver = new Builder().withCapabilities(Capabilities.chrome()).build();

beforeEach(async () => {
  driver.get("http://localhost:3000/public/index.html");
});

afterAll(async () => {
  driver.quit();
});

test("Title shows up when page loads", async () => {
  const title = await driver.findElement(By.id("title"));
  const displayed = await title.isDisplayed();
  expect(displayed).toBe(true);
});

// test("Button chaing the title of button bots", async () => {
//   await driver
//     .findElement(By.xpath(`//button[test()="See All Bots"]`))
//     .sendKeys("See All Bots Not working");
//   await driver.sleep(5000);
// });
