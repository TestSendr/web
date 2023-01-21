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

Then, using your favorite language or automation tool, send a `GET` to the following url: `https://api.testsendr.link/?mail=foo@testsendr.link`

You will receive a JSON object with the last emails sent to this specific address:

```
[
   {
      "id":"5f9b9b0b-1b5a-4b1b-9b0b-1b5a4b1b9b0b",
      "from":"


```

All emails are deleted after 30mn.

:::note

When you call the API via a script, take note that email delivery can take a few seconds. We recommend to wait at least **10 seconds** before calling the API, via a `sleep` command for example.

:::
