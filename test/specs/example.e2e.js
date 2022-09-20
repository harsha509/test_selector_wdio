
describe('My Login application', () => {
    it('should login with valid credentials', async () => {
        await browser.url('https://green-tami-9.tiiny.site/')
        await $('#cars').selectByIndex(3)
        await browser.pause(2000)
    });
});


