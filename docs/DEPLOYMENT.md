# Deployment

## Setup

### 1. GitHub Container Registry

Images are pushed to `ghcr.io/c8e-labs/marketing-web` (free, automatic).

### 2. DigitalOcean

1. Create an **API Token** (API → Tokens → Generate)
2. Link GHCR to DO App Platform (first deploy will prompt)

### 3. GitHub Secret

Add to repo (Settings → Secrets → Actions):

| Secret | Value |
|--------|-------|
| `DO_ACCESS_TOKEN` | Your DO API token |

## Deploy

Push to `main` or `experiment` → automatic deploy.

Or manually: Actions → Deploy → Run workflow

## Local Testing

```bash
docker build -t marketing-web .
docker run -p 8080:8080 marketing-web
# http://localhost:8080
```
