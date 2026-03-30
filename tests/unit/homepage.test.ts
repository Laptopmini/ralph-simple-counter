import * as fs from "node:fs";
import * as path from "node:path";

const stylePath = path.resolve(__dirname, "../../src/style.css");
const htmlPath = path.resolve(__dirname, "../../src/index.html");

describe("Color palette in style.css", () => {
  let cssContent: string;

  beforeEach(() => {
    cssContent = fs.readFileSync(stylePath, "utf-8");
  });

  test("defines a red color for negative values", () => {
    // CSS should contain a rule that applies red to negative state
    expect(cssContent).toMatch(/red|#[fF]{2}0{4}|#[fF]0{2}|rgb\(\s*255\s*,\s*0\s*,\s*0\s*\)/);
  });

  test("defines a green color for positive values", () => {
    expect(cssContent).toMatch(
      /green|#0{2}[89a-fA-F]{4}|#0[89a-fA-F]0|rgb\(\s*0\s*,\s*128\s*,\s*0\s*\)/,
    );
  });

  test("defines a black color for zero value", () => {
    expect(cssContent).toMatch(/black|#0{6}|#0{3}\b|rgb\(\s*0\s*,\s*0\s*,\s*0\s*\)/);
  });
});

describe("HTML references color classes", () => {
  let htmlContent: string;

  beforeEach(() => {
    htmlContent = fs.readFileSync(htmlPath, "utf-8");
  });

  test("HTML links to style.css", () => {
    expect(htmlContent).toMatch(/style\.css/);
  });

  test("HTML contains counter-value element", () => {
    expect(htmlContent).toMatch(/data-testid=["']counter-value["']/);
  });
});
