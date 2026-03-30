import { expect, test } from "@playwright/test";

test.beforeEach(async ({ page }) => {
  await page.goto("/");
});

test("reset button resets counter value to 0", async ({ page }) => {
  const counter = page.locator("[data-testid='counter-value']");
  const increment = page.locator("[data-testid='increment-button']");
  const reset = page.locator("[data-testid='reset-button']");

  await increment.click();
  await increment.click();
  await increment.click();
  await expect(counter).toHaveText("3");

  await reset.click();
  await expect(counter).toHaveText("0");
});

test("reset button is below the counter row", async ({ page }) => {
  const counter = page.locator("[data-testid='counter-value']");
  const reset = page.locator("[data-testid='reset-button']");

  await expect(reset).toBeVisible();

  const counterBox = await counter.boundingBox();
  const resetBox = await reset.boundingBox();

  expect(counterBox).not.toBeNull();
  expect(resetBox).not.toBeNull();

  const cb = counterBox as { y: number; height: number };
  const rb = resetBox as { y: number };
  expect(rb.y).toBeGreaterThan(cb.y + cb.height);
});

test("reset button works after decrementing to negative", async ({ page }) => {
  const counter = page.locator("[data-testid='counter-value']");
  const decrement = page.locator("[data-testid='decrement-button']");
  const reset = page.locator("[data-testid='reset-button']");

  await decrement.click();
  await decrement.click();
  await expect(counter).toHaveText("-2");

  await reset.click();
  await expect(counter).toHaveText("0");
});
