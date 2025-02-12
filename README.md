# trakt-api

[![CI](https://github.com/trakt/trakt-lite/actions/workflows/ci.yml/badge.svg)](https://github.com/trakt/trakt-lite/actions/workflows/ci.yml)

[![CD](https://github.com/trakt/trakt-lite/actions/workflows/cd.yml/badge.svg)](https://github.com/trakt/trakt-lite/actions/workflows/cd.yml)

## Project Structure

This [workspace](https://docs.deno.com/runtime/fundamentals/workspaces/)
contains multiple projects:

- **`api`:** Core library that implements Trakt API interactions using `ts-rest`
  and `zod` for type-safe communication and validation.
- **`playground`:** CLI project for testing and exploring the Trakt API
  functionality.
- **`openapi`:** Simple `hono` server that serves the API contract as an OpenAPI
  specification.

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

- OpenAPI:
  - Serve: `deno task openapi`
  - Development: `deno task openapi:dev`
