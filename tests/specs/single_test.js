describe("Multi remote test", () => {
  it("should start a session on Automate and App Automate", () => {

    chromeBrowser.url("https://apple.com");
    nativeApp.getContexts();
  });
});
