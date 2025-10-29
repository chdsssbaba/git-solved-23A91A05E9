const fs = require('fs');
const path = require('path');

describe('configuration sanity', () => {
  test('database-config.json parses and has expected sections', () => {
    const locations = [
      path.join(__dirname, '..', 'config', 'database-config.json'),
      path.join(__dirname, '..', '..', 'config', 'database-config.json'),
    ];
    const file = locations.find(p => fs.existsSync(p));
    expect(file).toBeTruthy();
    const raw = fs.readFileSync(file, 'utf8');
    const json = JSON.parse(raw);
    expect(json).toHaveProperty('production');
    expect(json).toHaveProperty('development');
    expect(json).toHaveProperty('experimental');
  });

  test('app-config.yaml exists (structure validated elsewhere)', () => {
    const locations = [
      path.join(__dirname, '..', 'config', 'app-config.yaml'),
      path.join(__dirname, '..', '..', 'config', 'app-config.yaml'),
    ];
    const file = locations.find(p => fs.existsSync(p));
    expect(file).toBeTruthy();
  });
});
