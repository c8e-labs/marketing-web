# Deployment

## Setup

### 1. DigitalOcean

1. Create a **Container Registry** in DO dashboard
2. Create an **API Token** (API → Tokens → Generate)

### 2. GitHub Secrets

Add to repo (Settings → Secrets → Actions):

| Secret | Value |
|--------|-------|
| `DO_ACCESS_TOKEN` | Your DO API token |
| `DO_REGISTRY_NAME` | Your registry name |

## Deploy

Push to `main` → automatic deploy to production.

Or manually: Actions → Deploy → Run workflow

## Local Testing

```bash
docker build -t marketing-web .
docker run -p 8080:8080 marketing-web
# http://localhost:8080
```

## Instance

Using `apps-s-1vcpu-0.5gb` (~$5/month)
