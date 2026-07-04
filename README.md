# @myko.pk/errors

Shared error types for MYKOPK packages. Provides `DatabaseError` and `RedisError` classes with structured context, typed error codes, and automatic HTTP status code mapping.

## Installation

```bash
npm install @myko.pk/errors
```

## Usage

```ts
import { DatabaseError, DATABASE_ERROR_CODES } from '@myko.pk/errors';
import { REDIS_ERROR_CODES } from '@myko.pk/errors/codes';

throw new DatabaseError(DATABASE_ERROR_CODES.CONNECT_FAILED, {
  cause: originalError,
  context: { host: 'db-primary' },
});
// JSON serialization: { code: 'db.connect_failed', statusCode: 503, ... }
```

## Exports

| Sub-path | Contents |
|----------|----------|
| `.`      | `DatabaseError`, `RedisError`, `DATABASE_ERROR_CODES`, `REDIS_ERROR_CODES`, `ERROR_CODES` |
| `./codes` | Raw error code constants and type utilities |

## License

MIT
