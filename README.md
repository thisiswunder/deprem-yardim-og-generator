---
name: Open Graph Image Generation
slug: og-image-generation
description: Compute and generate dynamic social card images with React components.
framework: Next.js
useCase: Edge Functions
css: Tailwind
deployUrl: https://vercel.com/new/clone?repository-url=https://github.com/thisiswunder/deprem-yardim-og-generator&project-name=deprem-yardim-og-generator&repository-name=deprem-yardim-og-generator
relatedTemplates:
  - nextjs-boilerplate
  - aws-s3-image-upload-nextjs
  - platforms-starter-kit
  - blog-starter-kit
---

# Deprem Yardım OG Image Generator

## How to Use

You can choose from one of the following two methods to use this repository:

### One-Click Deploy

Deploy the example using [Vercel](https://vercel.com?utm_source=github&utm_medium=readme&utm_campaign=vercel-examples):

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/thisiswunder/deprem-yardim-og-generator&project-name=deprem-yardim-og-generator&repository-name=deprem-yardim-og-generator)

This project requires Mapbox access token. Make sure to create one and add your access token to your Vercel project environment variables as GOOGLE_STATIC_API_KEY

### Clone and Deploy

Execute [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app) with [npm](https://docs.npmjs.com/cli/init) or [Yarn](https://yarnpkg.com/lang/en/docs/cli/create/) to bootstrap the example:

```bash
npx create-next-app --example https://github.com/thisiswunder/deprem-yardim-og-generator
# or
yarn create next-app --example https://github.com/thisiswunder/deprem-yardim-og-generator
```

Next, run Next.js in development mode:

```bash
npm install
npm run dev

# or

yarn
yarn dev
```

Then create and Mapbox account and add an access token to your .env file like so:

```bash
GOOGLE_STATIC_API_KEY=<YOUR_TOKEN>
```

## Usage

API
GET /api/dynamic-image

Params

```
loc: string[];
address: string;
entry: string;
```

Sample with params

```
YOUR_HOST/api/dynamic-image?loc=37.5749643,36.9334448&address=Foo&entry=Bar
```
Sample output

![dynamic-image (1)](https://user-images.githubusercontent.com/1084392/217416469-5b3542ce-1da9-46a1-8ad0-73370928697f.png)

Deploy it to the cloud with [Vercel](https://vercel.com/new?utm_source=github&utm_medium=readme&utm_campaign=edge-middleware-eap) ([Documentation](https://nextjs.org/docs/deployment)).
