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

```
[
    {
        "attachments": [
            {
                "contentDisposition": "inline",
                "contentType": "application/pdf",
                "filename": "InvoiceSimple-PDF-Template.pdf",
                "size": 62037
            }
        ],
        "date": "2023-01-22T02:50:27.000Z",
        "from": "sender@example.com",
        "html": "<html><head><meta http-equiv=\"content-type\" content=\"text/html; charset=us-ascii\"></head><body style=\"overflow-wrap: break-word; -webkit-nbsp-mode: space; line-break: after-white-space;\"><meta http-equiv=\"content-type\" content=\"text/html; charset=us-ascii\"><div style=\"overflow-wrap: break-word; -webkit-nbsp-mode: space; line-break: after-white-space;\">Hello<div><br></div><div>You can confirm your email on our portal by providing the following code:</div><div><br></div><div><b>123456</b></div><div><b><br></b></div><div>Thanks!</div><div><br></div><div>PS: get a look at the attached invoice.</div></div></body></html><br/>\n<html><head><meta http-equiv=\"content-type\" content=\"text/html; charset=us-ascii\"></head><body style=\"overflow-wrap: break-word; -webkit-nbsp-mode: space; line-break: after-white-space;\"><div style=\"overflow-wrap: break-word; -webkit-nbsp-mode: space; line-break: after-white-space;\"><div></div></div></body></html>",
        "subject": "Confirm your email",
        "text": "Hello\n\nYou can confirm your email on our portal by providing the following code:\n\n123456\n\nThanks!\n\nPS: get a look at the attached invoice.￼"
    }
]


```

All emails are deleted after 30mn.

:::note

When you call the API via a script, take note that email delivery can take a few seconds. We recommend to wait at least **30 seconds** before calling the API, via a `sleep` command for example.

:::

:::note

You must understand that the email sent to any address ending by _@testsendr.link_ is basically public content available by a public API. Please do not use this service for highly sensible services.

:::
