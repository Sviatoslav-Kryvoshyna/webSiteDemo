class BasePage {
  
  async open(path: string) {
    await browser.url(path);
  }

  async isPageLoaded(pageRootElement: string): Promise<boolean> {
    try {
      await (await $(pageRootElement)).waitForExist({timeout: 15000});
      return true;
  } catch (error) {
      return false;
  }
  }
}

export default BasePage;