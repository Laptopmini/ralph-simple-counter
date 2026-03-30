import { expect, test } from "@playwright/test";

test.beforeEach(async ({ page }) => {
  await page.goto("/");
});

test("counter value is visible and starts at 0", async ({ page }) => {
  const counter = page.locator("[data-testid='counter-value']");
  await expect(counter).toBeVisible();
  await expect(counter).toHaveText("0");
});

test("counter value is styled with bold weight and 2rem font size in a rounded box", async ({
  page,
}) => {
  const counter = page.locator("[data-testid='counter-value']");
  await expect(counter).toBeVisible();
  await expect(counter).toHaveCSS("font-weight", "700");
  await expect(counter).toHaveCSS("font-size", "32px"); // 2rem = 32px at default 16px root
  await expect(counter).toHaveCSS("border-radius", /[^0]/);
});

test("counter value is centered on the page", async ({ page }) => {
  const counter = page.locator("[data-testid='counter-value']");
  const box = await counter.boundingBox();
  const viewport = page.viewportSize();
  expect(box).not.toBeNull();
  expect(viewport).not.toBeNull();
  const b = box as { x: number; width: number };
  const v = viewport as { width: number };
  // Check horizontal centering (center of element is near center of viewport)
  const centerX = b.x + b.width / 2;
  expect(centerX).toBeCloseTo(v.width / 2, -1);
});

test("Hello World header is not present", async ({ page }) => {
  await expect(page.locator("h1", { hasText: "Hello World" })).toHaveCount(0);
});
