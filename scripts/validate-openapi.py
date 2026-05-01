#!/usr/bin/env python3
"""Validate OpenAPI files before publishing generated SDK/docs artifacts."""

from __future__ import annotations

import sys
from pathlib import Path

import yaml
from openapi_spec_validator import validate


def main() -> int:
    if len(sys.argv) < 2:
        print("Usage: validate-openapi.py <openapi-file> [<openapi-file> ...]", file=sys.stderr)
        return 2

    for filename in sys.argv[1:]:
        path = Path(filename)
        with path.open(encoding="utf-8") as handle:
            spec = yaml.safe_load(handle)
        validate(spec)
        print(f"OpenAPI validation passed: {path}")

    return 0


if __name__ == "__main__":
    sys.exit(main())
