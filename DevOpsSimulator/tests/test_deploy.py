import os
from pathlib import Path


def read_first_existing(paths):
    for p in paths:
        fp = Path(p)
        if fp.exists():
            return fp.read_text()
    raise FileNotFoundError("deploy.sh not found in expected locations")


def test_deploy_script_exists_and_has_env_cases():
    # Allow either root or DevOpsSimulator location
    candidates = [
        "scripts/deploy.sh",
        "DevOpsSimulator/scripts/deploy.sh",
    ]
    content = read_first_existing(candidates)

    # Basic expectations
    assert "DEPLOY_ENV" in content
    # Expect handling of production, development, and experimental
    assert "production" in content
    assert "development" in content
    assert "experimental" in content
