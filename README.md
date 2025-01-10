# trakt-api

[![CI](https://github.com/trakt/trakt-lite/actions/workflows/ci.yml/badge.svg)](https://github.com/trakt/trakt-lite/actions/workflows/ci.yml)

[![CD](https://github.com/trakt/trakt-lite/actions/workflows/cd.yml/badge.svg)](https://github.com/trakt/trakt-lite/actions/workflows/cd.yml)

## Project Structure

This [workspace](https://docs.deno.com/runtime/fundamentals/workspaces/)
contains multiple projects:

- **`api`:** The beating heart of our operation. This project defines the Trakt
  API interactions using `ts-rest` and `zod` for type-safe communication and
  validation. Think of it as our precinct's meticulously organized evidence
  board.
- **`playground`:** Our detective's sandbox. This CLI project allows for
  effortless exploration and experimentation with the Trakt API. It's where we
  test our hunches and follow the leads.
- **`swagger`:** The public notice board. A simple `hono` server that exposes
  the API contract as an OpenAPI/Swagger definition, providing clear
  documentation for those who wish to understand our methods.

## Environment Variables

The following environment variables are required for the workspace to function
properly:

### Development

- **`TRAKT_CLIENT_ID`:** The client ID for the Trakt API.
- **`TRAKT_CLIENT_SECRET`:** The client secret for the Trakt API.
  - Required for the `playground` project.

### External Contribution - Unleash Your Inner Code Wizard!

Want to contribute to Trakt ? Here's how to set up your development environment:

1. **Create a Trakt Application:** Navigate to
   [Trakt Settings](https://trakt.tv/oauth/applications) and create a new
   application.
1. Once your Trakt application is created, use the provided Client ID and Client
   Secret in your development environment.
1. Make use of the `playground` project to test out your changes by running
   `playground:dev`.

**A Word of Caution, Fellow Traveler:**

Please note that while using public applications is possible, they may have
certain API limitations:

- **Limited "Up Next" Access:** The "Up Next" endpoint might be unavailable or
  return incomplete data.

These restrictions are implemented as part of Trakt's API security measures to
prevent abuse from automated scrapers and unauthorized access.

For the best development experience, we recommend using your own application
credentials.
fall into the wrong hands, would we?

Now go forth and code with the fury of a thousand suns! The future of Trakt Lite
awaits your brilliance. ✨

## Getting Started

This is a Deno project, so you need to have Deno installed on your machine
please refer to the
[Deno installation guide](https://docs.deno.com/runtime/getting_started/installation/).

1. **Clone the repository**
1. **Install dependencies:** `deno task install`
1. **Run tasks:**

- Workspace:
  - Format & Lint: `deno task format`

- Playground:
  - Development: `deno task playground:dev`

- Swagger:
  - Serve: `deno task swagger`
  - Development: `deno task swagger:dev`
