# API Reference

This project focuses on deployment and configuration tooling; the API surface mainly exposes scripts and configuration files.

## Scripts

### scripts/deploy.sh
- Inputs: `DEPLOY_ENV` (production|development|experimental)
- Optional flags (experimental): `AI_OPTIMIZATION`, `CHAOS_TESTING`
- Behavior: Executes environment-specific deployment flow.

### scripts/backup.py
- Inputs: `BACKUP_SOURCE`, `BACKUP_DEST`
- Output: Creates a timestamped backup directory under destination.

### scripts/monitor.js
- Inputs: `NODE_ENV` (production|development|experimental)
- Behavior: Prints periodic health checks; experimental AI analysis is disabled by default.

## Configuration

### config/app-config.yaml
- `application`: name, version, environment (default production)
- `server`: host, port, SSL toggle
- `profiles.development`: debug features (disabled by default)
- `profiles.experimental`: AI feature toggles (disabled by default)

### config/database-config.json
- `production`: connection + backup policy
- `development`: local connection, seed data, debug queries
- `experimental`: distributed cluster settings (NOT production-ready)

### config/deployment-settings.ini
- INI-formatted environment sections for deployment knobs.
