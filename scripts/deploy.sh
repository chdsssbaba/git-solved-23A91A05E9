#!/bin/bash
set -e

# Multi-Environment Deploy Script
# Default to production if not specified
DEPLOY_ENV=${DEPLOY_ENV:-production}

echo "====================================="
echo "DevOps Simulator - Deployment"
echo "====================================="

# Pre-deployment checks
echo "Running pre-deployment checks..."
if [ ! -f "config/app-config.yaml" ]; then
    echo "Error: Configuration file not found!"
    exit 1
fi

if [ "$DEPLOY_ENV" = "production" ]; then
    echo "Mode: Production"
    DEPLOY_REGION="us-east-1"
    APP_PORT=8080
    echo "Environment: $DEPLOY_ENV"
    echo "Region: $DEPLOY_REGION"
    echo "Port: $APP_PORT"
    echo "Starting production deployment..."
    
    # Example production steps
    echo "Pulling latest Docker images..."
    # docker pull devops-simulator:latest

    echo "Rolling update strategy initiated..."
    # kubectl rolling-update devops-simulator
    
elif [ "$DEPLOY_ENV" = "development" ]; then
    echo "Mode: Development"
    DEPLOY_MODE="docker-compose"
    APP_PORT=3000
    echo "Environment: $DEPLOY_ENV"
    echo "Mode: $DEPLOY_MODE"
    echo "Installing dependencies..."
    npm install
    echo "Starting development server..."
    echo "Using Docker Compose..."
    docker-compose up -d
    
    echo "Waiting for application to be ready..."
    sleep 5
    
    echo "Performing health check..."
    curl -f http://localhost:$APP_PORT/health || exit 1
    
else
    echo "Error: Unknown environment $DEPLOY_ENV"
    exit 1
fi

echo "Deployment completed successfully!"
