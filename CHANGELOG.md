# Changelog

## 1.0.0 (2026-07-04)

### Initial Release

Shared error types for MYKOPK packages. Provides typed error classes and error code constants for consistent error handling across services.

#### Key Exports
- **`DatabaseError`** — typed error class for database failures with structured context
- **`RedisError`** — typed error class for Redis/cache operation failures
- **`DATABASE_ERROR_CODES`** — map of database error codes (connection, query, migration, replication, etc.)
- **`REDIS_ERROR_CODES`** — map of Redis error codes (connection, operation, timeout, etc.)
- **`ERROR_CODES`** — combined map of all error codes
