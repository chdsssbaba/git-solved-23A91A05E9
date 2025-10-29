/**
 * System Monitoring Script
 * Supports production, development, and experimental modes
 */

const ENV = process.env.NODE_ENV || 'production';

const monitorConfig = {
  production: {
    interval: 60000,
    alertThreshold: 80,
    debugMode: false
  },
  development: {
    interval: 5000,
    alertThreshold: 90,
    debugMode: true,
    verboseLogging: true
  },
  experimental: {
    note: 'Experimental monitoring config - NOT production-ready',
    interval: 30000,
    alertThreshold: 75,
    aiEnabled: false // behind feature flag, off by default
  }
};

const config = monitorConfig[ENV] || monitorConfig.production;

console.log('=================================');
console.log('DevOps Simulator - Monitor');
console.log(`Environment: ${ENV}`);
console.log('=================================');

function checkSystemHealth() {
  const timestamp = new Date().toISOString();
  console.log(`[${timestamp}] Checking system health...`);

  // Basic checks common to all environments
  console.log('✓ CPU usage: Normal');
  console.log('✓ Memory usage: Normal');
  console.log('✓ Disk space: Adequate');

  // Development extras
  if (ENV === 'development' && config.debugMode) {
    console.log('✓ Hot reload: Active');
    console.log('✓ Debug port: 9229');
  }

  // Experimental (disabled by default)
  if (ENV === 'experimental' && config.aiEnabled) {
    console.log('🤖 AI analysis enabled (simulated)');
    console.log('- Predictive checks and anomaly detection');
  }

  console.log('System Status: HEALTHY');
}

console.log(`Monitoring every ${config.interval}ms`);
setInterval(checkSystemHealth, config.interval);
checkSystemHealth();
