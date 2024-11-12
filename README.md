<img src="https://walter.trakt.tv/hotlink-ok/api/github.png" width="300">

[![CI](https://github.com/trakt/trakt-webapp/actions/workflows/ci.yml/badge.svg)](https://github.com/trakt/trakt-webapp/actions/workflows/ci.yml)

[![CD](https://github.com/trakt/trakt-webapp/actions/workflows/cd.yml/badge.svg)](https://github.com/trakt/trakt-webapp/actions/workflows/cd.yml)

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

- **`TRAKT_CLIENT_ID`:** The client ID for the Trakt API.
- **`TRAKT_CLIENT_SECRET`:** The client secret for the Trakt API.
  - Required for the `playground` project.

**NOTE:** Use the `trakt-ios` or `trakt-android` client ID and secret, as they
are the only ones that work with the private API.

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
