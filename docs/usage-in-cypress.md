---
sidebar_position: 2
---

# Usage in Cypress

**TestSendr** can be easily used in your Cypress tests. Here is a example script:

```js
describe('TestSendr', () => {
  it('should send an email', () => {

    // do the registration step on your app, it is supposed to send an email with a link to confirm the email address

    // wait 30s
    cy.wait(30000)

    const parser = new DOMParser()
    let linkToConfirm = ''
    cy.request(
      `https://api.testsendr.link/?email=${email}`
    ).then(({ body }) => {
      cy.wrap(
        parser.parseFromString(JSON.parse(body)[0].html, 'text/html').getElementsByTagName('a')[0]
          .href
      ).as('link')
    })
    cy.get('@link').then(link => {
      linkToConfirm = link
    })

    cy.visit(linkToConfirm)

    cy.get('div)
      .first()
      .should('have.text', 'Account confirmed')
  })
})
```
