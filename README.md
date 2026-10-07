# Welcome to the Davis College Republicans web repo (daviscollegerepublicans.com static webpage repo)

<p align="center">
  <a href="https://daviscollegerepublicans.com">
    <img src="https://img.shields.io/badge/daviscollegerepublicans.com-1565C0?style=for-the-badge" alt="daviscollegerepublicans.com">
  </a>
</p>


<p align="center">
  <strong><a href="https://daviscollegerepublicans.com">daviscollegerepublicans.com</a></strong>
</p>

[![License: None](https://img.shields.io/badge/License-None-blue.svg)](LICENSE)


This repository powers the frontend code behind the Davis College Republicans [daviscollegerepublicans.com](https://daviscollegerepublicans.com) static website.

Davis College Republicans - associated with the California College Republicans - strives to serve as an informative club for conservative politics at UC Davis, run by Republican students for Republican students. In an environment that is often hostile to right wing politics, our club serves to promote free speech and debate to strengthen our public-speaking skills and own opinions. We meet weekly to discuss current events, host speakers, volunteer in the community, and hang out off-campus.

---

# Repository Maintainer

- The primary maintainer & creator of this repository is [Vijit Dua](https://vijitdua.com).

- Please contact @vijitdua directly on the club discord server for any changes needed to this website until June 2027 (Vijit's graduation).

- After June 2027, please choose a new Repo maintainer & update this ReadMe with the new maintainers contact information - though Vijit may still help out on a voluntary basis if needed, depending on time contraints. You can contact Vijit on discord (if he's still active there) or @ [vijitdua.com/contact](https://vijitdua.com/contact) if he isn't responsive on the club discord post graduation.

---

# Architecture

This is a Vite scaffolded, React repo. 

## Getting Started / Development

-

## Infrastructure / Ownership

```mermaid
graph LR;
 
  

```

### Static Generation & GitHub Pages
- We deploy by using _____ //TODO: note to self, fill in the blanks here later of how we are converting vite output into github pages?
- The generated static content is then hosted on GitHub pages by ____ // TODO: same todo as above

### Cloudflare

- Domain ownership: The domain [daviscollegerepublicans.com](https://daviscollegerepublicans.com) is owned by David Brownlee (@dalekvaderofborg on discord) as of October 6, 2026
- Costs: $10/yr
- Connection to static data: This domain points directly to our github pages, with no proxy enabled (no IP address to hide, no need for unecessary added latency)
- Email: inbox@daviscollegerepublicans.com is a recieving only email inbox (cloudflare email forwarding) which automatically forwards all incoming mail to daviscollegerepublican@gmail.com 

## Deployment Steps

// TODO: simple command steps

---

# Development Notes

- Since content is hosted on github pages - which only support static components - please do not use any react server components or any dynamic SSR components.
- This is to ensure hosting this webpage remains economically viable for DCR.

## Getting Started

Ensure you have NPM and Node installed before you begin.

### Installation

Install the dependencies:

```bash
npm install
```

### Development

Start the development server with HMR:

```bash
npm run dev
```

Your application will be available at `http://localhost:5173`.

## Building for Production

// TODO: edit this to have the actual steps here.

Create a production build:

```bash
npm run build
```

// TODO: edit this to suggest backup deployment methods and suggestions especially incase we stop relying on github pages in the future etc.
## Deployment

### Docker Deployment

To build and run using Docker:

```bash
docker build -t my-app .

# Run the container
docker run -p 3000:3000 my-app
```

The containerized application can be deployed to any platform that supports Docker, including:

- AWS ECS
- Google Cloud Run
- Azure Container Apps
- Digital Ocean App Platform
- Fly.io
- Railway


## Styling

This template comes with [Tailwind CSS](https://tailwindcss.com/) already configured for a simple default starting experience. You can use whatever CSS framework you prefer.

---