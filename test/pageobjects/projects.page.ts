import { ChainablePromiseElement } from 'webdriverio';
import BasePage from './basePage';
import { navigationLinks } from '../testData/testData';

class ProjectsPage extends BasePage {
    async open() {
        await super.open(navigationLinks.projects);
    }
}

export default new ProjectsPage()