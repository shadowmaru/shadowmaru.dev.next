# shadowmaru.dev.next

Personal website available on shadowmaru.dev using Next.js and Typescript.

## Run

```````````````````````
```sh
$ yarn dev
```

## Run Cypress tests


```sh
$ yarn cy:run
```

## Deploy

Deploy is automatic on Vercel. Branches are deployed on Preview environment and the main branch is
deployed on the Production environment.

## Structure

Pages are in the `pages` directory, posts are in the `posts` directory (duh).

Posts are written in Markdown, with a frontmatter containing the title and the publishing date.
