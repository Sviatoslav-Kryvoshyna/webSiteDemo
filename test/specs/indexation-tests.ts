describe.skip('Indexasion tests', () => {
    it('Should be available on the Leobit web-site', async () =>{
        await browser.url('https://leobit.com');
        expect(await (await ($('meta[name=robots]'))).getAttribute('content'))
          .toContain('index, follow');

    });

    it('Should be available on the LeobitDesign web-site', async () =>{
        await browser.url('https://leobit.design/');
        expect(await (await ($('meta[name=robots]'))).getAttribute('content'))
          .toContain('index, follow');
    });
});