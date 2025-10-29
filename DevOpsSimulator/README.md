# DevOps Simulator

A comprehensive CI/CD configuration management tool for enterprise deployments.

## Project Status
- **Version**: 1.0.0 (Production), 2.0.0-beta (Development)
- **Environments**: Production, Development, Experimental (disabled by default)

## Features

### Core Features
- Automated deployment scripts
- Real-time monitoring
- Configuration management
- Backup and recovery system

### Production Features
- SSL/TLS encryption
- Auto-scaling
- Load balancer integration
- Scheduled backups

### Development Features (Beta)
- Docker Compose integration
- Hot reload enabled
- Debug mode active
- Enhanced logging
- Mock external APIs

### Experimental Features (Disabled by default)
- AI-powered deployment optimization (flag: AI_OPTIMIZATION)
- Predictive scaling and anomaly detection
- Multi-cloud orchestration concepts
- Chaos engineering experiments

## Quick Start

### Production Mode
```bash
export DEPLOY_ENV=production
./scripts/deploy.sh
```

### Development Mode
```bash
export NODE_ENV=development
npm install
npm run dev
```

### Experimental Mode (for exploration only)
```bash
export DEPLOY_ENV=experimental
# Optional feature flags
export AI_OPTIMIZATION=false
export CHAOS_TESTING=false
./scripts/deploy.sh
```

## Documentation
See `/docs` folder for detailed documentation. Experimental notes are summarized in `docs/architecture.md`.

## Checkpoints
Place your screenshots under `../docs/images/` relative to this README or use absolute repo paths.

![Checkpoint 1](../docs/images/checkpoint1.png)
![Checkpoint 2](../docs/images/checkpoint2.png)
![Checkpoint 3](../docs/images/checkpoint3.png)

## License
MIT License
