---
sidebar_position: 1
---

# Quick Start

Let's discover **TestSendr in less than 2 minutes**.

## Send email

Send an email to any address ending by **@testsendr.link** (for example `foo@testsendr.link`)

:::note

If you need to test that an application is correctly sending an email, you can provide such email (in a test account for example) and trigger the action that will send an email (maybe register?).

:::

## Call the API

Then, using your favorite language or automation tool, send a `GET` HTTP request to the following url: `https://api.testsendr.link/?email=foo@testsendr.link`

You will receive a JSON object with the last emails sent to this specific address:

```json
[
  {
    "key": "foo@testsendr.link/db08khkkv5a8a5fevq90b9tkhhmteqogsm21ea81",
    "date": "2023-01-22T02:50:27.000Z",
    "from": "sender@example.com",
    "subject": "Confirm your email",
    "text": "Hello\n\nYou can confirm your email on our portal by providing the following code:\n\n123456\n\nThanks!\n\nPS: get a look at the attached invoice.￼"
  }
]
```

All emails are deleted after 30mn.

:::note

When you call the API via a script, take note that email delivery can take a few seconds. We recommend to wait at least **15 seconds** before calling the API, via a `sleep` command for example.

:::

:::note

You must understand that the email sent to any address ending by **@testsendr.link** is basically public content available by a public API. Please do not use this service for sensible content.

:::
