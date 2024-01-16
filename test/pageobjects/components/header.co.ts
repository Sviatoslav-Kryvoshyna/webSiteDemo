import { ChainablePromiseElement } from 'webdriverio';

class Header {
    private get headear(): ChainablePromiseElement<WebdriverIO.Element> {
        return $('[class=header-content]');
    }

    private get expandingMenu() {
        return this.headear.$('[aria-expanded]');
    }

    public get servicesMenu(): ChainablePromiseElement<WebdriverIO.Element> {
        return this.headear.$('//a[text() = "Services"]');
    }

    public get expertiseMenu() {
        return this.headear.$('//a[text() = "expertise"]');
    }

    public get technologiesMenu() {
        return this.headear.$('//a[text() = "Technologies"]');
    }

    public get projectsMenu() {
        return this.headear.$('//a[text() = "Projects"]');
    }

    public get approachMenu() {
        return this.headear.$('//a[text() = "Approach"]');
    }

    public get aboutMenu() {
        return this.headear.$('//a[text() = "About"]');
    }

    private get careerMenu() {
        return this.headear.$('//a[text() = "Career"]');
    }

    private get blogMenu() {
        return this.headear.$('//a[text() = "blog"]');
    }

    async waitForMenuExpands() {
        await (await this.expandingMenu).waitForExist();
    }

    async clcikOnServicesMenu() {
        await (await this.servicesMenu).click();
        await this.waitForMenuExpands();
    }

    async clcikOnExpertiseMenu() {
        await (await this.expertiseMenu).click();
        await this.waitForMenuExpands();
    }

    async clcikOnTechnologiesMenu() {
        await (await this.technologiesMenu).click();
        await this.waitForMenuExpands();
    }

    async clcikOnProjectsMenu() {
        await (await this.projectsMenu).click();
        await this.waitForMenuExpands();
    }

    async clcikOnApproachMenu() {
        await (await this.approachMenu).click();
        await this.waitForMenuExpands();
    }

    async clcikOnAboutMenu() {
        await (await this.aboutMenu).click();
        await this.waitForMenuExpands();
    }

    async clcikOnCareerMenu() {
        await (await this.careerMenu).click();
        await this.waitForMenuExpands();
    }

    async clcikOnBlogMenu() {
        await (await this.blogMenu).click();
        await this.waitForMenuExpands();
    }

    async hoverOnServicesMenu() {
        await (await this.servicesMenu).moveTo();
    }

}

export default new Header();