import { expect, test } from "@playwright/test";

test.beforeEach(async ({ page }) => {
  await page.goto("/");
});

test("increment button increases counter value by 1", async ({ page }) => {
  const counter = page.locator("[data-testid='counter-value']");
  const increment = page.locator("[data-testid='increment-button']");
  await expect(counter).toHaveText("0");
  await increment.click();
  await expect(counter).toHaveText("1");
  await increment.click();
  await expect(counter).toHaveText("2");
});

test("decrement button decreases counter value by 1", async ({ page }) => {
  const counter = page.locator("[data-testid='counter-value']");
  const decrement = page.locator("[data-testid='decrement-button']");
  await expect(counter).toHaveText("0");
  await decrement.click();
  await expect(counter).toHaveText("-1");
  await decrement.click();
  await expect(counter).toHaveText("-2");
});

test("decrement button is to the left and increment button is to the right of the counter", async ({
  page,
}) => {
  const decrement = page.locator("[data-testid='decrement-button']");
  const counter = page.locator("[data-testid='counter-value']");
  const increment = page.locator("[data-testid='increment-button']");

  await expect(decrement).toBeVisible();
  await expect(increment).toBeVisible();

  const decBox = await decrement.boundingBox();
  const valBox = await counter.boundingBox();
  const incBox = await increment.boundingBox();

  expect(decBox).not.toBeNull();
  expect(valBox).not.toBeNull();
  expect(incBox).not.toBeNull();

  const dec = decBox as { x: number; width: number };
  const val = valBox as { x: number; width: number };
  const inc = incBox as { x: number };

  // Decrement is left of value, increment is right of value
  expect(dec.x + dec.width).toBeLessThanOrEqual(val.x);
  expect(inc.x).toBeGreaterThanOrEqual(val.x + val.width);
});

test("buttons display correct labels", async ({ page }) => {
  const decrement = page.locator("[data-testid='decrement-button']");
  const increment = page.locator("[data-testid='increment-button']");
  await expect(decrement).toHaveText("-");
  await expect(increment).toHaveText("+");
});
