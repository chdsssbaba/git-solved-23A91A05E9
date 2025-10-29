#!/usr/bin/env python3
"""
Lightweight backup utility for DevOpsSimulator.
- Source: BACKUP_SOURCE (default: ./data)
- Destination: BACKUP_DEST (default: ./backups)
Creates a timestamped backup directory and copies files recursively.
"""
import os
import shutil
import time
from pathlib import Path


def backup(source: Path, dest_root: Path) -> Path:
    ts = time.strftime("%Y%m%d-%H%M%S")
    dest = dest_root / f"backup-{ts}"
    dest.mkdir(parents=True, exist_ok=True)

    if not source.exists():
        raise FileNotFoundError(f"Source path not found: {source}")

    # Copy tree excluding common noisy folders
    ignore = shutil.ignore_patterns("node_modules", "__pycache__", "*.log", ".DS_Store")
    shutil.copytree(source, dest / source.name, dirs_exist_ok=True, ignore=ignore)
    return dest


def main():
    src = Path(os.getenv("BACKUP_SOURCE", "./data")).resolve()
    dst = Path(os.getenv("BACKUP_DEST", "./backups")).resolve()
    dst.mkdir(parents=True, exist_ok=True)
    out = backup(src, dst)
    print(f"Backup completed: {out}")


if __name__ == "__main__":
    main()
