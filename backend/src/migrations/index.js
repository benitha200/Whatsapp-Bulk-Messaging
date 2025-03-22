// migrations/index.js
const fs = require('fs');
const path = require('path');
const { connectDB, pool } = require('../../config/database').default;
require('dotenv').config();

// Run migrations
const runMigrations = async () => {
  console.log('Starting database migrations...');
  
  try {
    // Connect to database
    await connectDB();
    
    // Create migrations table if it doesn't exist
    await pool.query(`
      CREATE TABLE IF NOT EXISTS migrations (
        id INT AUTO_INCREMENT PRIMARY KEY,
        name VARCHAR(255) NOT NULL UNIQUE,
        applied_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
      )
    `);
    
    // Get all migration files
    const migrationsDir = path.join(__dirname, 'scripts');
    const migrationFiles = fs.readdirSync(migrationsDir)
      .filter(file => file.endsWith('.js'))
      .sort(); // ensure migrations run in order
    
    // Get already applied migrations
    const [appliedMigrations] = await pool.query('SELECT name FROM migrations');
    const appliedMigrationNames = appliedMigrations.map(m => m.name);
    
    // Run migrations that haven't been applied yet
    for (const file of migrationFiles) {
      if (!appliedMigrationNames.includes(file)) {
        console.log(`Running migration: ${file}`);
        
        const migration = require(path.join(migrationsDir, file));
        await migration.up(pool);
        
        // Mark migration as applied
        await pool.query('INSERT INTO migrations (name) VALUES (?)', [file]);
        
        console.log(`Completed migration: ${file}`);
      }
    }
    
    console.log('All migrations completed successfully');
  } catch (error) {
    console.error(`Migration failed: ${error.message}`);
    process.exit(1);
  } finally {
    // Close the database connection
    await pool.end();
  }
};

// Rollback last migration
const rollbackLastMigration = async () => {
  console.log('Rolling back last migration...');
  
  try {
    // Connect to database
    await connectDB();
    
    // Get the last applied migration
    const [lastMigration] = await pool.query(
      'SELECT name FROM migrations ORDER BY applied_at DESC LIMIT 1'
    );
    
    if (lastMigration.length === 0) {
      console.log('No migrations to roll back');
      return;
    }
    
    const migrationName = lastMigration[0].name;
    const migrationPath = path.join(__dirname, 'scripts', migrationName);
    
    console.log(`Rolling back migration: ${migrationName}`);
    
    const migration = require(migrationPath);
    await migration.down(pool);
    
    // Remove migration from the table
    await pool.query('DELETE FROM migrations WHERE name = ?', [migrationName]);
    
    console.log(`Successfully rolled back: ${migrationName}`);
  } catch (error) {
    console.error(`Rollback failed: ${error.message}`);
    process.exit(1);
  } finally {
    // Close the database connection
    await pool.end();
  }
};

module.exports = { runMigrations, rollbackLastMigration };