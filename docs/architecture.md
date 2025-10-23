<<<<<<< HEAD
# System Architecture
# System Architecture

## Overview
DevOps Simulator follows a microservices architecture designed for high availability and scalability. This document covers production, development, and summarizes experimental ideas.

## Components

### 1. Application Server
- **Technology**: Node.js + Express
- **Production Port**: 8080
- **Development Port**: 3000
- **Scaling**: Horizontal auto-scaling (production only)
- **Development Features**: Hot reload, debug mode

### 2. Database Layer
- **Database**: PostgreSQL 14
- **Production**: Master-slave replication with automated backups
- **Development**: Single local instance with seed data

### 3. Monitoring System
- **Production**: Prometheus + Grafana with email alerts
- **Development**: Console logging with verbose output
- **Metrics**: CPU, Memory, Disk, Network

## Deployment Strategy

### Production
- **Method**: Rolling updates
- **Zero-downtime**: Yes
- **Rollback**: Automated on failure
- **Region**: us-east-1

### Development
- **Method**: Docker Compose
- **Features**: Hot reload, instant feedback
- **Testing**: Automated tests before deployment

## Security
- **Production**: SSL/TLS encryption, strict access controls
- **Development**: Relaxed security for easier debugging

## Experimental (Not Production-Ready)
The conflict-simulator branch proposes advanced, AI/ML-driven and multi-cloud features (predictive auto-scaling, distributed DB clusters, event streaming, chaos engineering). These are tracked as experimental ideas and are disabled by default behind feature flags. They should not be used in production until validated.
>>>>>>> d3dd9b2 (updating conflict-simulator)
