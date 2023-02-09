---
sidebar_position: 1
---

# List emails for a specific address

## How to use

- Method: `GET`
- Path: `/`
- Query parameters:
  - `email`: the email address to list emails for
- Response:
  - `200`: an array of emails
  - `500`: an error occurred

## Example

```bash

curl "https://api.testsendr.link/?email=foo@testsendr.link"

```

Response:

```json
[
  {
    "key": "foo@testsendr.link/db08khkkv5a8a5fevq90b9tkhhmteqogsm21ea81",
    "date": "2023-01-22T02:50:27.000Z",
    "from": "sender@example.com",
    "subject": "Confirm your email",
    "text": "Hello\n\nYou can confirm your email on our portal by providing the following code:\n\n123456\n\nThanks!\n\nPS: get a look at the attached invoice.￼",
    "html": "<html><head><meta http-equiv=\"content-type\" content=\"text/html; charset=us-ascii\"></head><body style=\"overflow-wrap: break-word; -webkit-nbsp-mode: space; line-break: after-white-space;\"><meta http-equiv=\"content-type\" content=\"text/html; charset=us-ascii\"><div style=\"overflow-wrap: break-word; -webkit-nbsp-mode: space; line-break: after-white-space;\">Hello<div><br></div><div>You can confirm your email on our portal by providing the following code:</div><div><br></div><div><b>123456</b></div><div><b><br></b></div><div>Thanks!</div><div><br></div><div>PS: get a look at the attached invoice.</div></div></body></html><br/>\n<html><head><meta http-equiv=\"content-type\" content=\"text/html; charset=us-ascii\"></head><body style=\"overflow-wrap: break-word; -webkit-nbsp-mode: space; line-break: after-white-space;\"><div style=\"overflow-wrap: break-word; -webkit-nbsp-mode: space; line-break: after-white-space;\"><div></div></div></body></html>",
    "attachments": [
      {
        "contentDisposition": "inline",
        "contentType": "application/pdf",
        "filename": "InvoiceSimple-PDF-Template.pdf",
        "size": 62037
      }
    ]
  }
]
```

:::note

All emails are deleted after 30mn.

:::
