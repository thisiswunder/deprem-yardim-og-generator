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



![](https://deprem-yardim-og-generator.vercel.app//api/dynamic-image?loc=37.5749643,36.9334448&address=Menderes,%20Trabzon%20Bulv.,%2046100%20Merkez/Dulkadiro%C4%9Flu/Kahramanmara%C5%9F,%20T%C3%BCrkiye&entry=@acilafetgovtr%20@SedatAtlas79%20%C3%87OK%20AC%C4%B0L%2029%20SAAT%C4%B0R%20ENKAZDA!!%20Kahramanmara%C5%9F%20Dulkadiro%C4%9Flu%20trabzon%20bulvar%C4%B1%20m%C3%BCft%C3%BCl%C3%BCk%20yan%C4%B1ndaki%20bina%206.%20Kattaki%20kuzenim%20enkaz%20alt%C4%B1nda%20haber%20alam%C4%B1yoruz%20arama%20ekipleri%20orada%20de%C4%9Filler%20halk%20kald%C4%B1rmaya%20%C3%A7al%C4%B1%C5%9F%C4%B1yor%20ama%20yapam%C4%B1yor%20i%C5%9F%20arabas%C4%B1%20laz%C4%B1m%20betonlar%C4%B1%20kald%C4%B1rmak%20kesmek%20i%C3%A7in%20yard%C4%B1m%20edin)

Deploy it to the cloud with [Vercel](https://vercel.com/new?utm_source=github&utm_medium=readme&utm_campaign=edge-middleware-eap) ([Documentation](https://nextjs.org/docs/deployment)).
