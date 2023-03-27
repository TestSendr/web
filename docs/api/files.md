---
sidebar_position: 2
---

# List attachments for a specific email

:::caution

This endpoint is accessible only for paid plans.
:::

## How to use

- Method: `GET`
- Path: `/attachments`
- Query parameters:
  - `key`: the key (`email/id`) to list attachments for
- Response:
  - `200`: an array of attachments
  - `400`: the key is not valid or
  - `500`: an error occurred

:::note

The `key` is the combination of the email address and the email id. It can be found in the main api endpoint result.
:::

:::note

Each attachment can be downloaded by using the `url` property. A presigned URL is used to allow the download without authentication for the next 15 minutes.
:::

## Example

```bash

curl "https://api.testsendr.link/attachments?key=foo@testsendr.link/db08khkkv5a8a5fevq90b9tkhhmteqogsm21ea81"

```

Response:

```json
[
  {
    "contentDisposition": "inline",
    "contentType": "application/pdf",
    "filename": "InvoiceSimple-PDF-Template.pdf",
    "size": 62037,
    "url": "https://prod-testsendr-main-emailstoragebucket03c5b3b9-1fc5ioga3iimc.s3.us-west-2.amazonaws.com/foo%40testsendr.link/db08khkkv5a8a5fevq90b9tkhhmteqogsm21ea81/0?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIARWJGBVJFX24VC25N%2F20230209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20230209T014745Z&X-Amz-Expires=900&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDLjSBad72x97DtnzqWPJbdKOqrGKi7vA39JjzfINm5PQIgLj%2Bm1TcqacJjWtQAUW9cKQUuG1VhjiSNUSG4p5br1WQq0AMIg%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgwxMTY1ODA3ODg4MTEiDF0aloDmL1iO7TF57SqkA%2FdNl%2BsIIunqICaxz5aDAGvqLewWuKDQncxjKSl0mZdKgyX%2FIBTp0dCvXrEi4TKh0YeISyktCTjhKZ2hB0AVXsmN%2FuybIdK26w1Zyd4bpKbZVYqkTSE%2F3wtYVhwJIYjNLOd8ETJGzuGaDErGIicDfgmAIQsaRpYb0IKoi33%2BTxny0P8wZM8%2FdXAUav3LZ3BGaQLKHAhwSU0Ae1dIzHFPQ2x%2FHuN7ZxuVtu9xRIzAK2Ft8c1bF5mUkWwVhwSzbhwfE9AhQr%2B0b8C247pylYFbyesGMQbeq11mMr%2BBYSzFsSy%2Bu%2FN%2Bw1qWs1KpuM5RGnzux0q1PivzErARW%2FShsA7i769QFo3fYkMIiDyM9qwSnRJ5NO5mMSPGtOIbe3KB%2BZdbXoWWDg5ptcbIPXP1tFn7evtLfY93wEqetGS2AIOxYfvjuXgabfpgFTzZ2nMlFcBsB3cbK%2FZqD4onMJ%2FZGQx7pL3%2BhppanOPZEKO2%2B4Me0ChVfdtTOnAHfGhGChpvGqU9nCbYTuFIgYWK4zV0hQLhVboHJJGQqD%2Bjifo9bgAaRadcbjhQwjC4n5GfBjqeAQR19PUPv339Tpga1PKU8iUXCrmxU1v9E5IoQPF%2BXyDEEYYslORArz9ZYuRRnCUIshcCd49qB7zDgiUBPqsWAuxLOEiQaEkQ%2Fsoh8kzbS%2B0DXsBSz8eexHRt56ibTLlZSmQhWPnTUMPbI6Ht31m67vgC6CAy3b%2B2XSvojIFv0HJ1qDnS6O4M7LxtVVLatn%2FnabeoTBCr4RsBzuzTi%2Ffk&X-Amz-Signature=ee1d9103e9f755090d2e3bc70f19835d80311b0203979e5950367ba2a3eb58ac&X-Amz-SignedHeaders=host&x-id=GetObject"
  }
]
```
