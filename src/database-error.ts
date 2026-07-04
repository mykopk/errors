import { DATABASE_ERROR_CODES, ERROR_CODES } from './codes';
import type { DatabaseErrorCodeValue, ErrorCodeValue } from './codes';

export interface DatabaseErrorContext {
  [key: string]: unknown;
  correlationId?: string;
}

export interface DatabaseErrorOptions {
  cause?: Error;
  context?: DatabaseErrorContext;
  statusCode?: number;
}

function getStatusCode(code: string): number {
  switch (code) {
    case DATABASE_ERROR_CODES.ACCESS_DENIED:
      return 403;
    case DATABASE_ERROR_CODES.CONNECT_FAILED:
    case DATABASE_ERROR_CODES.CONNECTION_FAILED:
    case DATABASE_ERROR_CODES.CONNECTION_ERROR:
      return 503;
    case DATABASE_ERROR_CODES.CONSTRAINT_VIOLATION:
    case DATABASE_ERROR_CODES.DUPLICATE_ENTRY:
    case DATABASE_ERROR_CODES.DEADLOCK:
      return 409;
    case DATABASE_ERROR_CODES.ENTITY_NOT_FOUND:
    case DATABASE_ERROR_CODES.NOT_FOUND:
    case DATABASE_ERROR_CODES.RECORD_NOT_FOUND:
      return 404;
    case DATABASE_ERROR_CODES.TIMEOUT:
      return 504;
    default:
      return 500;
  }
}

export class DatabaseError extends Error {
  public readonly code: string;
  public readonly statusCode: number;
  public readonly context?: DatabaseErrorContext;

  constructor(
    message: string,
    code: ErrorCodeValue = ERROR_CODES.DATABASE_ERROR,
    options?: DatabaseErrorOptions,
  ) {
    super(message);
    this.name = 'DatabaseError';
    this.code = code;
    this.statusCode = options?.statusCode ?? getStatusCode(code);
    this.context = options?.context;

    if (options?.cause) {
      this.cause = options.cause;
    }
  }

  get errorCode(): string {
    return this.code;
  }

  toJSON(): Record<string, unknown> {
    return {
      name: this.name,
      message: this.message,
      code: this.code,
      statusCode: this.statusCode,
      context: this.context,
      cause: this.cause instanceof Error ? this.cause.message : this.cause,
    };
  }
}
