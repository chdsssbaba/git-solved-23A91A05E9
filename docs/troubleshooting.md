# Troubleshooting

## Common Issues

- Deploy script fails with "Configuration file not found!"
  - Ensure `config/app-config.yaml` exists.

- Development server doesn't start
  - Run `npm install` and ensure Node.js >= 16.

- Experimental mode doesn't do anything
  - Experimental features are disabled by default. Set `DEPLOY_ENV=experimental` and optionally `AI_OPTIMIZATION=true`.

- Backup script errors with `FileNotFoundError`
  - Create the source folder (default `./data`) or set `BACKUP_SOURCE` to a valid path.

## Logs and Artifacts
- Shell outputs are printed to the terminal.
- Use `CHANGELOG.md` and `git-graph.txt` for Git history snapshots.
