import { REDIS_ERROR_CODES, ERROR_CODES } from './codes';
import type { RedisErrorCodeValue, ErrorCodeValue } from './codes';

export interface RedisErrorContext {
  [key: string]: unknown;
  correlationId?: string;
}

export interface RedisErrorOptions {
  cause?: Error;
  context?: RedisErrorContext;
  statusCode?: number;
}

function getStatusCode(code: string): number {
  switch (code) {
    case REDIS_ERROR_CODES.CONNECTION_FAILED:
      return 503;
    case REDIS_ERROR_CODES.CONFIG_REQUIRED:
      return 500;
    case REDIS_ERROR_CODES.KEY_NOT_FOUND:
      return 404;
    case REDIS_ERROR_CODES.TIMEOUT:
      return 504;
    case REDIS_ERROR_CODES.UNSUPPORTED_OPERATION:
      return 501;
    default:
      return 500;
  }
}

export class RedisError extends Error {
  public readonly code: string;
  public readonly statusCode: number;
  public readonly context?: RedisErrorContext;

  constructor(
    message: string,
    code: ErrorCodeValue = ERROR_CODES.REDIS_ERROR,
    options?: RedisErrorOptions,
  ) {
    super(message);
    this.name = 'RedisError';
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
