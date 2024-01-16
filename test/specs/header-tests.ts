import header from "../pageobjects/components/header.co";

describe('Header expanding tests', () => {
    beforeEach(async () => {
        await browser.url('');
    });

    it('should expand Services menu', async () => {
        await header.clcikOnServicesMenu();
        expect(await (await header.servicesMenu).getAttribute('aria-expanded'))
          .toBe('true');
    });

    it('should expand Expertise menu', async () => {
        await header.clcikOnExpertiseMenu();
        expect(await (await header.expertiseMenu).getAttribute('aria-expanded'))
          .toBe('true');
    });

    it('should expand Technilogies menu', async () => {
        await header.clcikOnTechnologiesMenu();
        expect(await (await header.technologiesMenu).getAttribute('aria-expanded'))
          .toBe('true');
    });

    it('should expand Approach menu', async () => {
        await header.clcikOnApproachMenu();
        expect(await (await header.approachMenu).getAttribute('aria-expanded'))
          .toBe('true');
    });

    it('should expand About menu', async () => {
        await header.clcikOnAboutMenu();
        expect(await (await header.aboutMenu).getAttribute('aria-expanded'))
          .toBe('true');
    });
})

